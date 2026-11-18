# L1 — Cycle de vie des données

- **Statut :** décisions validées par le fondateur, consolidées dans ce document.
- **Date de consolidation :** 8 novembre 2026 ; mise à jour le 9 novembre 2026 (articulation avec C1, AI1 et N1).
- **Portée :** projet Élan v2 (`elan-v2`).
- **Documents liés :** I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), C1 (`docs/decisions/C1-catalogue-contenus-points-entree.md`), AI1 (`docs/decisions/AI1-aide-immediate.md`), N1 (`docs/decisions/N1-notifications-alertes.md`), documents de référence de `docs/reference/`.

| Statut | Sens |
|---|---|
| **[Décidé]** | Règle déjà décidée |
| **[Conséquence]** | Conséquence architecturale d'une règle décidée |
| **[À préciser]** | Modalité technique encore ouverte |
| **[À vérifier]** | Qualification juridique ou garantie technique non démontrée |

---

## 1. Résumé

Sept composants serveur gèrent le cycle de vie :

- le registre des données ;
- la porte de synchronisation ;
- l'orchestrateur des opérations ;
- le registre des traces ;
- les sauvegardes et la restauration ;
- la zone éphémère ;
- la gestion des expirations.

Quatre principes structurent le tout :

- **aucune donnée personnelle, d'un utilisateur ou d'un membre de l'équipe, n'est restaurable au-delà de 30 jours** ;
- les dossiers ne sont accessibles qu'en ligne au lancement ;
- tous les refus sont appliqués côté serveur ;
- toute restauration réapplique les suppressions, les purges et les révocations, et invalide les jetons de notification et les références temporaires de suppression, avant la réouverture. Elle ne réactive jamais une notification interdite.

---

## 2. Composants et responsabilités

| Composant | Responsabilité | Statut |
|---|---|---|
| **Registre des données** | Décrit chaque catégorie de données et ses règles, sans contenir les données elles-mêmes | [Décidé] |
| **Porte de synchronisation** | Point d'entrée unique des écritures venues des appareils. Elle refuse : la progression liée à un point reclassé ; l'ancienne progression après une réinitialisation ; les données d'un compte supprimé ; les événements de types suspendus ou retirés. Rien de ce qui est refusé n'est enregistré. | Refus [Décidé] (R15 §11.1, §11.3 ; M2 §12.1 ; M7 §8.1) ; porte unique [Conséquence] |
| **Orchestrateur des opérations** | Réinitialisation, suppression du compte, purges liées à un reclassement, révocation de passerelle, expirations, invalidation des jetons de notification et des références temporaires de suppression après restauration. Il gère les états, les reprises, les incidents et la vérification. | Règles [Décidé] (R15 D17, D18, D21, C6 ; M2 §12.1 ; I1 I-3 ; N1 §10, §11, §13) ; regroupement [Conséquence] |
| **Registre des traces** | Catégories de traces distinctes : trace de suppression liée à une réinitialisation ; trace de suppression du compte ; trace de purge statistique ; trace de purge de progression ; journaux d'intervention ; journaux d'accès aux statistiques ; trace d'export ; trace d'autorisation de publication ; trace des passerelles. La finalité, le contenu et le régime de conservation de chacune sont indiqués au §3, qu'ils soient déjà définis ou encore à préciser. Les journaux d'intervention et les traces de suppression ne sont jamais fusionnés dans un journal général à durée unique (C4) ; les deux traces de purge restent distinctes de ces ensembles et l'une de l'autre (M2 §12.1). Les traces nécessaires à la réapplication des opérations après une restauration (suppressions, purges, révocations de passerelles) doivent rester disponibles pour cette réapplication, hors des sauvegardes qu'elles protègent ; cette exigence ne fixe ni le mode de stockage ni la famille de sauvegarde de chaque trace (§3). Protégé et contrôlé (D32 à D35) pour les traces de suppression et de purge, sans que D34 puisse prolonger la conservation de la trace liée à une réinitialisation (§11) ni celle des deux traces de purge (§3, §7). | Catégories et distinctions [Décidé] (R15 C4 ; M2 §12.1 ; M7 §5, §6.6, §7 ; L-4) ; contenus déjà définis [Décidé] : trace de suppression liée à une réinitialisation (D31), journaux d'intervention (D24), exclusions de la trace de purge de progression et absence de donnée personnelle dans la trace de purge statistique (M2 §12.1), trace d'export (M7 §6.6), trace d'autorisation de publication (M7 §7), trace des passerelles (L-4) ; contenus [À préciser] : trace de suppression du compte, journaux d'accès aux statistiques, contenu détaillé des deux traces de purge ; qualification des identifiants techniques [À vérifier] (§3) ; regroupement en registre et disponibilité hors des sauvegardes protégées [Conséquence] (R15 D29 ; R15 §14.3 [Conception]) ; mode de stockage [À préciser] |
| **Sauvegardes et restauration** | **Deux familles distinctes.** Sauvegardes **courtes**, restaurables 30 jours au plus, pour toute catégorie qui contient une donnée personnelle, **y compris les données de l'équipe et l'identité des validateurs.** Sauvegardes **longues**, réservées aux données réellement non personnelles. Restauration isolée et réapplication. | [Décidé] (D26 à D29, C9, L-1 et son complément) |
| **Zone éphémère** | Traitement en mémoire des entrées sensibles et des données temporaires | [Décidé] (M2 §8 ; R15 O4, A4) |
| **Gestion des expirations** | Suppression automatique à l'échéance de chaque catégorie | Principe [Décidé] ; valeurs souvent [À préciser] (§3) |

---

## 3. Registre des données [Décidé]

**Contenu, pour chaque catégorie :**

- la finalité ;
- les emplacements : serveur, caches, appareil, services secondaires, sauvegardes courtes ou longues ;
- le rattachement : un dossier, la progression, les données pédagogiques, les préférences, l'abonnement, un événement M7 sans compte, une trace, ou des données de l'équipe ;
- la durée de conservation ;
- les règles de suppression, de purge et de restauration.

**Classification des sauvegardes [Décidé, L-1 et son complément] :**

| Famille | Contenu | Restaurabilité |
|---|---|---|
| **Courte** | Toute catégorie qui contient une donnée personnelle : dossiers, progression, données pédagogiques, préférences, abonnement, événements M7 détaillés, **identités des membres de l'équipe et des validateurs**, ainsi que les traces qui contiennent une donnée personnelle : trace de suppression liée à une réinitialisation (identifiant technique du compte, R15 D31 ; C3), journaux d'intervention (acteur, R15 D24), trace d'export et trace d'autorisation de publication (identifiants des personnes qui valident, autorisent ou contrôlent, M7 §6.6, §7), trace des passerelles (L-4) ; ainsi que la trace de purge statistique et la trace de purge de progression, bien que M2 §12.1 exige qu'elles ne contiennent respectivement aucune donnée personnelle et aucune donnée permettant d'identifier les utilisateurs (F1 ; voir « Copies des traces » et « Disponibilité des traces à échéance ») | 30 jours au plus |
| **Longue** | Uniquement des données réellement non personnelles : contenus éditoriaux (dont les contenus d'aide immédiate), structure du catalogue, données éditoriales des fiches de classement (statut, date, version), registre des données, statistiques globales anonymisées (restauration : §6, « Agrégats statistiques lors d'une restauration ») | Durée plus longue, [À préciser] |
| **Non encore classé** | **Références techniques qui relient les fiches de classement à l'identité des validateurs.** Tant que leur classement n'est pas décidé, elles ne peuvent pas être placées en sauvegarde longue. **Trace de suppression du compte et journaux d'accès aux statistiques :** contenu non encore défini ; classement à préciser jusqu'à sa clarification. **Historique du catalogue et compteur d'intégrité :** famille de sauvegarde et mode de conservation à préciser. | Classement [À préciser] (C1 §5, §14 ; M7 §5) |

La colonne « Restaurabilité » indique la durée maximale pendant laquelle une sauvegarde de la famille concernée reste restaurable (L-1 ; R15 D28). Elle ne fixe ni la durée de conservation des données ou des traces dans le système, propre à chaque catégorie (catégories ci-dessous), ni la durée de conservation de la sauvegarde elle-même. Aucune équivalence n'est établie entre ces trois durées. Une règle propre à une catégorie peut imposer qu'une sauvegarde cesse d'être restaurable plus tôt ; aucune ne peut prolonger cette restaurabilité. Pour les traces, la présence d'une copie dans une sauvegarde ne prolonge jamais leur durée de conservation (« Copies des traces »).

**Fonctionnement [Conséquence] :**

- L'orchestrateur s'en sert pour supprimer et vérifier « dans tous les emplacements » (R15 D26).
- Les sauvegardes s'en servent pour placer chaque catégorie dans la bonne famille. Une catégorie qui contient la moindre donnée personnelle ne peut pas aller en sauvegarde longue.
- **Validateurs : trois éléments distincts.**
  - Les données éditoriales des fiches de classement ne contiennent aucune identité de validateur, ni aucune donnée permettant directement de l'identifier. Elles relèvent des sauvegardes longues.
  - **L'identité des validateurs** est rangée à part, dans une catégorie de sauvegarde courte.
  - **La référence technique** qui relie une fiche à cette identité ne doit pas compromettre la séparation des sauvegardes. Une référence pseudonyme reste une donnée personnelle dès lors qu'elle permet une réidentification. **Tant que son classement n'est pas décidé, elle ne peut pas être placée en sauvegarde longue.** Son mécanisme et son classement définitif restent [À préciser] (C1 §5, §14).
- La restauration s'en sert pour savoir quoi réappliquer.
- Aucune catégorie ne peut exister sans finalité ni durée inscrites (référentiel §9.1).
- **Identifiants techniques des traces :** l'absence de donnée personnelle exigée par M2 §12.1 pour les traces de purge est une exigence de conception. La qualification juridique de leurs identifiants techniques, et de ceux de la trace des passerelles, y compris les possibilités de rapprochement avec d'autres informations, comme les journaux d'intervention, reste [À vérifier]. Un identifiant n'est pas considéré comme non personnel au seul motif qu'il n'identifie pas directement une personne (R15 C3).

**Copies des traces [Décidé] :**

- Le régime de conservation propre à chaque trace s'applique à toutes ses copies, y compris celles présentes dans une sauvegarde.
- Une copie ne bénéficie d'aucun délai supplémentaire du seul fait de sa présence dans une sauvegarde.
- Une restauration ne remet pas à zéro le délai de conservation d'une trace ni celui de ses copies.
- À l'échéance, chaque copie est supprimée ou rendue définitivement non restaurable, selon le régime applicable à la trace.
- L'échéance d'une copie est celle de sa trace, et non celle de la sauvegarde qui la contient : une copie ne reste jamais restaurable après l'échéance de sa trace, même si la sauvegarde qui la contient reste restaurable plus longtemps (GF2).
- La date de fin effective de l'opération et l'échéance qui en découle sont attachées à la trace et à chacune de ses copies ; elles sont conservées après une restauration (GF3).
- Les régimes particuliers ne s'appliquent qu'aux catégories qu'ils visent explicitement. R15 D30 et C1, dans leur possibilité de conservation au-delà de 30 jours, ne s'appliquent ni à la trace de purge statistique (M2 §13), ni à la trace de purge de progression (M2 §12.1), ni à la trace de suppression liée à une réinitialisation (§11). La préservation d'éléments nécessaires à une enquête (R15 D34) ne prolonge ni la trace de purge statistique (§7), ni la trace de purge de progression (M2 §12.1), ni la trace de suppression liée à une réinitialisation (§11). Leur application à la trace de suppression du compte est [À vérifier].
- Cette règle ne prolonge jamais la restaurabilité d'une sauvegarde protégée par la trace (R15 D28, D30).
- Les modalités techniques de suppression ou de mise hors d'état de restauration des copies, ainsi que la solution de secours si une copie ne peut pas être invalidée individuellement, sont [À préciser] ; leur faisabilité, notamment pour les sauvegardes non modifiables (R15 C9), est [À vérifier].

**Disponibilité des traces à échéance :**

Ce bloc concerne la trace de suppression liée à une réinitialisation, la trace de purge statistique et la trace de purge de progression. Leurs régimes de conservation restent distincts (catégories ci-dessous). La trace de suppression du compte et la trace des passerelles ne sont pas visées.

- **Période d'utilité :** elle s'étend de la création de la trace à son échéance, c'est-à-dire pendant l'opération, puis pendant la conservation, qui court à compter de la fin effective de l'opération [Décidé].
- **GF1 — Disponibilité :** pendant toute sa période d'utilité, la trace reste disponible pour toute restauration susceptible de réintroduire les données concernées, et son intégrité peut être établie [Décidé]. Sa disponibilité hors des sauvegardes qu'elle protège reste une conséquence (§2).
- **GF5 — Blocage :** si la trace est absente, expirée, ou si son intégrité ne peut pas être établie, toute restauration susceptible de réintroduire les données concernées est bloquée jusqu'à vérification (R15 D33 à D35) [Décidé]. Ce blocage ne prolonge jamais la conservation de la trace.
- **GF4 — Restauration du registre des traces :** le traitement d'une restauration du registre des traces à un état antérieur, qui peut faire perdre des traces créées depuis la sauvegarde, est [À préciser].
- GF2 et GF3 figurent dans « Copies des traces ».

**Catégories déjà connues :**

| Catégorie | Durée | Statut |
|---|---|---|
| Dossiers et progression | Tant que le compte existe (R15 D11, A10) | [Décidé] |
| Événements M7 | Par catégorie | [À préciser] |
| Journaux techniques ordinaires, dont les métadonnées techniques des connexions (par exemple lors du téléchargement des paquets d'aide immédiate) | Par catégorie (A9) | [À préciser] ; minimisation [Décidé] (R15 A9, D1 ; AI1 §4, §11) |
| Trace de suppression liée à une réinitialisation (trace par compte) | Suppression anticipée possible lorsque la trace n'est plus nécessaire et qu'aucune sauvegarde contenant les anciennes données ne reste restaurable. Dans tous les cas, la trace est supprimée au plus tard à 30 jours ; aucune enquête, justification ou nécessité ne permet de dépasser ce plafond, et la trace n'est jamais conservée au-delà pour attendre la fin de la restaurabilité d'une sauvegarde. Le délai de 30 jours court à compter de la fin effective de l'opération, constatée par l'état « suppression confirmée » (R15 C6). Les sauvegardes contenant les anciennes données doivent cesser d'être restaurables au plus tard à cette échéance. Les copies de la trace suivent le même plafond (« Copies des traces ») ; la trace reste disponible pendant toute sa période d'utilité (« Disponibilité des traces à échéance »). Contenu limité à l'identifiant technique du compte, l'identifiant de l'opération, la date, la portée et l'état (D31). | Plafond de 30 jours, point de départ à la fin effective de l'opération et obligation fonctionnelle de cessation de la restaurabilité [Décidé] (R15 D30, D31 ; remplacement explicite de R15 D30 ; C1 et D34 pour cette trace, §11) ; modalités techniques de suppression ou de mise hors d'état de restauration [À préciser] |
| Trace de suppression du compte | Permet de retrouver les suppressions à réappliquer après une restauration, afin d'empêcher la réapparition de données supprimées. Durée, champs conservés, identifiants techniques et mécanisme de réapplication à préciser. Ni le plafond de la trace liée à une réinitialisation ni une durée de 30 jours ne lui sont appliqués automatiquement. | Rôle fonctionnel [Décidé] (R15 D29) ; durée et modalités [À préciser] (R15 §11.3) ; application de R15 D30 ; C1 [À vérifier] |
| Journaux d'intervention | Durée de conservation à préciser. La suppression automatique à l'échéance et l'exception pour justification juridique précise prévues par R15 D25 ; C10 restent applicables. Acteur, date et heure, type d'opération, résultat, sans contenu personnel ni détail du parcours pédagogique (D24). | Contenu [Décidé] (D24) ; suppression automatique et exception [Décidé] (D25 ; C10) ; durée [À préciser] (remplacement explicite de la seule durée de 12 mois, §11) |
| Journaux d'accès aux statistiques | Finalité : rendre l'accès aux statistiques contrôlé et traçable (M7 §5). M7 §5 énonce une durée propre, justifiée, avec suppression automatique, distincte de celle des journaux d'intervention et du régime des traces de suppression, mais attribue le statut « à compléter » à cette durée. Contenu exact non défini. | Finalité [Décidé] (M7 §5) ; principe et valeur de la durée [À préciser] (M7 §5) ; contenu [À préciser] |
| Trace de purge statistique | Conservée uniquement tant que des sauvegardes contenant les événements statistiques purgés restent restaurables, dans la limite maximale de 30 jours à compter de la fin effective de la purge, établie par la purge vérifiée (M2 §12.1) ; supprimée dès qu'elle n'est plus nécessaire à la protection contre une restauration, et dans tous les cas au plus tard à l'expiration de ce délai. Elle n'est jamais conservée au-delà pour attendre la fin de la restaurabilité d'une sauvegarde. Toute sauvegarde contenant les événements statistiques purgés doit cesser d'être restaurable au plus tard à cette échéance. La préservation d'éléments nécessaires à une enquête (R15 C1 ; D34) ne permet pas de prolonger la trace au-delà de ce plafond. Les règles de conservation des journaux d'intervention ne lui sont pas appliquées. R15 D30 et C1, dans leur partie relative à la conservation au-delà de 30 jours, ne lui sont pas applicables. | Plafond de 30 jours, y compris face à une enquête, et point de départ à la fin effective de la purge [Décidé] (M2 §12.1, §13 ; arbitrage du fondateur) ; obligation fonctionnelle de cessation de la restaurabilité [Décidé] (M2 §12.1 ; arbitrage du fondateur) ; sauvegarde courte [Décidé] (F1) ; modalités techniques de suppression ou de mise hors d'état de restauration [À préciser] ; qualification des identifiants techniques [À vérifier] |
| Trace de purge de progression | Conservée 30 jours au maximum, sans exception, à compter de la fin effective de la purge, établie par la purge vérifiée (M2 §12.1). Suppression anticipée possible uniquement lorsqu'aucune sauvegarde contenant les données purgées ne reste restaurable et que sa fonction de réapplication de la purge n'est plus nécessaire. Si une telle sauvegarde restait restaurable à l'approche de l'échéance, elle est rendue définitivement non restaurable avant la suppression de la trace ; cette situation constitue un incident au sens de R15 D28 et ne justifie jamais la prolongation de la trace. Ni la conservation de la trace de suppression au-delà de 30 jours (R15 D30 ; C1), ni la préservation d'éléments nécessaires à une enquête (R15 C1 ; D34) ne permettent de la prolonger. | [Décidé] (M2 §12.1), y compris le point de départ à la fin effective de la purge ; sauvegarde courte [Décidé] (F1) ; qualification des identifiants techniques [À vérifier] |
| Trace d'export | Durée selon le besoin réel d'audit et les obligations applicables, documentée par catégorie, avec suppression automatique ; aucune durée de 12 mois imposée automatiquement (M7 §6.6) | Règle [Décidé] (M7 §6.6) ; valeurs des durées par catégorie [À préciser], puis [À vérifier] (M7 §6.6) |
| Trace d'autorisation de publication | Durée à préciser ; le régime de la trace d'export ne lui est pas appliqué automatiquement (M7 §7) | [À préciser] |
| Trace des passerelles | Durée de la passerelle, puis 30 jours au plus (L-4) | [Décidé] |
| Identités de l'équipe et des validateurs | Durée de conservation | [À préciser] ; sauvegarde courte [Décidé] |
| Références techniques vers l'identité des validateurs | — | Exclues des sauvegardes longues tant que leur classement n'est pas décidé ; mécanisme et classement définitif [À préciser] (C1 §5, §14) |
| Premières tentatives (O1) | — | [À préciser] |
| Contenus d'aide immédiate | Contenus éditoriaux non personnels, en sauvegarde longue. Le paquet présent sur l'appareil est un emplacement de ces contenus ; sa durée de conservation locale et son éventuelle expiration sont [À préciser]. | Nature et sauvegarde [Décidé] (AI1 §9, §11 ; C1 §9) |
| Données de consultation de l'aide immédiate | **Non collectées :** aucun événement, historique de navigation ni donnée de rattachement à un compte n'est enregistré, émis, mis en attente ou transmis | [Décidé] (AI1 §4, §11) |
| Préférences de notification | Conservées lors d'une réinitialisation (R15 D15) ; supprimées avec le compte (§6) ; sauvegarde courte | [Décidé] (N1 §3, §14.1) |
| Rappels demandés | Évalués côté serveur ; rappels pédagogiques liés aux leçons, aux parcours et à l'ancienne progression supprimés lors d'une réinitialisation (§6) ; sauvegarde courte | Règles [Décidé] (N1 §6, §9) ; durée et rattachement [À préciser] ; sort des rappels liés aux dossiers et des autres rappels non décidés lors d'une réinitialisation [À préciser] ; sort lors de la suppression du compte [À préciser] (N1 §9, §14.1) |
| Jetons de notification | Aucun jeton conservé après le début de la suppression du compte ; invalidés après toute restauration ; sauvegarde courte si le jeton constitue une donnée personnelle | Règles [Décidé] (N1 §12, §13) ; création, rattachement, durée, suppression à la déconnexion, traitement en cas de retrait de l'autorisation système [À préciser] (N1 §12) |
| Référence temporaire de suppression | Remise à l'appareil demandeur ; invalidée à la confirmation ou à l'abandon de la suppression, et après toute restauration | Règles [Décidé] (N1 §11, §13) ; emplacement de l'état de l'opération, classement en sauvegarde et garanties de protection [À préciser] ; qualification juridique à vérifier (N1 §11) |
| Données d'affichage des alertes dans l'application, dont un éventuel état « lu » ; données transmises au prestataire de notification | Existence et conservation non décidées | [À préciser] (N1 §14.2) |
| Historique du catalogue | Versions publiées des expériences et leur composition ; définitions des objets retirés ; versions datées des fiches de classement (statut, date, version du contenu), chacune rattachée au point d'entrée concerné par son identifiant stable ; changements d'état opérationnel et retraits des types d'événements, avec leurs dates et définitions (C1 §2). L'historique ne contient pas l'identité du validateur. Finalité : examen des agrégats statistiques restaurés (§6). Récupérable après une restauration complète. Il reste récupérable et disponible tant qu'un agrégat dont l'examen en dépend demeure soumis à cet examen : d'une part, aussi longtemps qu'une sauvegarde contenant de tels agrégats peut encore être restaurée ; d'autre part, pour les agrégats déjà restaurés, jusqu'à la fin de leur examen. Si l'historique nécessaire n'est plus disponible ou si sa continuité ne peut pas être établie, GG3 s'applique (§6). | Contenu, finalité, récupérabilité et principe minimal de durée [Décidé] ; rattachement des fiches par identifiant stable [Conséquence] (C1 §2) ; durée exacte, éventuelles obligations supplémentaires, famille de sauvegarde et mode de conservation [À préciser] ; inclusion éventuelle de la référence technique vers l'identité des validateurs : suit son classement (§3) [À préciser] ; qualification juridique de cette référence [À vérifier] |
| Compteur d'intégrité de l'historique | Permet de détecter une troncature ou un retour en arrière de l'historique du catalogue ; ne permet aucune reconstruction (§6). | Rôle [Décidé] ; modalités, durée et résilience [À préciser] ; qualification juridique [À vérifier] |

Le registre ne contient aucune donnée personnelle. Il relève donc des sauvegardes longues.

---

## 4. Cycle de vie complet d'une donnée

1. **Création :** seulement pour une finalité inscrite au registre.
   - Une entrée sensible passe par la zone éphémère, sans création durable (M2 §8) [Décidé].
   - Un document est analysé sans être conservé, sauf archivage explicite (référentiel global §9.3) [Décidé].
2. **Rattachement :** chaque donnée appartient à une seule catégorie. Aucun passage d'une catégorie à l'autre sans passerelle explicite (I1) [Décidé].
3. **Conservation :** selon la durée inscrite au registre. La famille de sauvegarde dépend de la présence ou non de données personnelles (L-1) [Décidé].
4. **Utilisation :** limitée à sa finalité et à son dossier. La personnalisation n'utilise que la progression non sensible et les préférences déclarées (I1 §7, personnalisation) [Décidé].
5. **Fin de vie :** par suppression unitaire, expiration, réinitialisation, suppression du compte ou purge liée à un reclassement.
   - L'orchestrateur supprime dans tous les emplacements, isole les sauvegardes, écrit la trace prévue et vérifie [Décidé].
6. **Après la suppression :**
   - aucune donnée personnelle n'est restaurable au-delà de 30 jours (D28, L-1) [Décidé] ;
   - une donnée supprimée n'est **jamais supposée restaurable** : une restauration réapplique toujours les suppressions [Conséquence] ;
   - un envoi tardif depuis un appareil est refusé (R15 §11.1, §11.3 ; M2 §12.1) [Décidé].

---

## 5. Synchronisation et hors ligne

**Disponible hors ligne [Décidé, L-3 ; arbitrages 2 et 6 du catalogue ; AI1 §2, §9] :**

- la progression ;
- les contenus ;
- les contenus d'aide immédiate, sous forme de paquets versionnés. Le téléchargement des paquets est déclenché indépendamment de l'ouverture ou de la consultation du service (AI1 §9).

Les dossiers ne sont accessibles qu'en ligne, et **aucune copie locale n'est conservée.**

**Sur l'appareil :**

- Rien n'est conservé pour une entrée sensible après la session (R15 A4) [Décidé].
- L'état opérationnel est mis en cache pour une durée de validité limitée [Décidé]. **Cette validité ne repose ni sur la seule horloge de l'appareil, ni sur sa seule appréciation. Elle doit pouvoir être établie de façon fiable par une référence de validité maîtrisée côté serveur, dans le respect de P-D** (C1 §7) [Décidé]. Le mécanisme technique et la durée de validité sont [À préciser].
- À l'expiration, les éléments qui dépendent de cet état sont bloqués jusqu'à la reconnexion ; l'aide immédiate reste accessible (C1 §7, arbitrages 2 et 6) [Décidé].
- La file d'attente locale ne contient que la progression et les événements autorisés. Les types suspendus n'y entrent pas (M2 §12.1) [Décidé].
- **Aucune programmation locale de rappel** et **aucune donnée issue d'un dossier n'est conservée sur l'appareil.** Tous les rappels, y compris pédagogiques, sont évalués côté serveur ; la notification transmise est strictement neutre ; la livraison dépend de la joignabilité de l'appareil (N1 §6) [Décidé].
- La durée de conservation locale des paquets d'aide immédiate et leur éventuelle expiration sont [À préciser].

**À la reconnexion [Conséquence] :**

1. L'appareil récupère le nouvel état, puis purge sa file des éléments devenus interdits.
2. Il envoie le reste à la porte de synchronisation.
3. La porte refuse :
   - ce qui concerne un point reclassé ;
   - la progression antérieure à la réinitialisation, identifiée par un repère fourni par le serveur à la seconde confirmation, et non par l'horloge de l'appareil (R15 §11.1) ;
   - les événements suspendus ou retirés.
4. L'appareil abandonne ce qui a été refusé, sans trace dédiée (R15 §12.2 et M2 §12.1, « Preuve des refus »).

**Conflits entre appareils :** comme les dossiers ne sont jamais modifiés hors ligne, il n'y a pas de conflit sur eux. La synchronisation de la progression reste [À préciser].

**Compte supprimé :** les sessions sont révoquées. Un appareil ne peut plus s'authentifier, et ses envois sont refusés sans qu'il faille conserver un marqueur du compte supprimé [Conséquence].

---

## 6. Réinitialisation, suppression et restauration

**Réinitialisation [Décidé, R15 §11.1, I1 I-4, N1 §9] :**

- double confirmation (D16), sans réauthentification ;
- repère serveur posé à la seconde confirmation ;
- trois états (C6) ;
- suppression de la progression, des premières tentatives et des simulations sauvegardées ;
- effacement des préférences pédagogiques, conservation des réglages fonctionnels, dont les préférences de notification (D15) ;
- **suppression côté serveur des rappels pédagogiques liés aux leçons, aux parcours et à l'ancienne progression** (N1 §9) ;
- dossiers et abonnement intacts ;
- trace par compte (D30, D31 ; supprimée au plus tard à 30 jours, sans exception : §3 et §11) ;
- nouvelle progression préservée (A5, mécanisme [À préciser]).

**Le sort des rappels liés aux dossiers et des autres rappels dont le comportement n'a pas été décidé reste [À préciser].** Le maintien des dossiers lors d'une réinitialisation ne vaut pas décision sur ces rappels (N1 §9).

**Suppression du compte [Décidé, R15 §11.3, I1, L-4, N1 §10, §11] :**

- réauthentification ;
- isolement immédiat ;
- **révocation de toutes les sessions dès le début de la procédure** ;
- **aucun jeton de notification conservé après le début de la procédure, même temporairement** ;
- **remise d'une référence temporaire d'opération au seul appareil demandeur.** Elle permet uniquement de consulter l'état de l'opération, son contenu ne comporte aucune donnée personnelle, et elle est **invalidée dès que la suppression est confirmée ou abandonnée.** Elle n'est ni une session, ni un jeton de notification, et ne rétablit aucun accès au compte ;
- suppression des dossiers, de la progression, des données pédagogiques et des préférences ;
- **les passerelles actives prennent fin :** toute utilisation temporaire cesse immédiatement et aucun nouveau transfert n'est possible ;
- sauvegardes irrécupérables en 30 jours au plus ;
- données tardives refusées ;
- statistiques non concernées ;
- facturation selon les obligations légales, traitées à part.

Le sort des rappels demandés lors de la suppression du compte, selon leur rattachement, reste [À préciser] (N1 §14.1).

**Notifications de service : trois régimes distincts [Décidé, N1 §10, §13, §15 ; B-1 ; C-1 ; N-5] :**

| Situation | Régime applicable |
|---|---|
| Réinitialisation | **R15 D20** continue de s'appliquer. |
| Incidents, **jusqu'au début de la procédure de suppression du compte** | **R15 D36** s'applique. |
| **Dès le début de la procédure de suppression du compte** | **N-5 remplace D36, y compris pour les notifications d'incident,** et remplace D20 pour la confirmation de suppression. **Aucune notification push** n'est envoyée. **Aucun jeton n'est conservé, même temporairement.** Une information peut uniquement être affichée si l'application est au premier plan. |
| Après la suppression effective du compte | Aucune notification liée au compte n'est envoyée. |

L'information affichée au premier plan et la consultation de l'état de l'opération au moyen de la référence temporaire sont deux éléments distincts (N1 §10).

**Traces des passerelles du compte supprimé (L-4) :** la suppression du compte met fin aux passerelles, mais leurs traces sont conservées temporairement pour permettre la réapplication nécessaire après une restauration.

- La trace reste limitée aux métadonnées prévues par L-4. Elle ne contient jamais les données transférées.
- Elle suit la durée déjà décidée : la fin de la passerelle intervenant à la suppression du compte, elle est conservée **30 jours au plus** après cette fin.

La trace de suppression du compte permet de retrouver les suppressions à réappliquer après une restauration, afin d'empêcher la réapparition de données supprimées [Décidé, R15 D29]. Sa durée, ses champs, ses identifiants techniques et le mécanisme de réapplication restent [À préciser] (R15 §11.3) ; l'application de R15 D30 ; C1 est [À vérifier]. Elle reste distincte de la trace liée à une réinitialisation, dont le régime ne lui est pas appliqué (§3).

**Sauvegardes [Décidé, L-1 et son complément] :**

- **Courtes :** toute donnée personnelle, y compris celle de l'équipe et l'identité des validateurs. Jamais restaurables au-delà de 30 jours.
- **Longues :** uniquement des données réellement non personnelles. Aucune donnée qui permette d'identifier un utilisateur ou un membre de l'équipe.

**Restauration [Décidé, D29, avec L-4, L-1 et N1 §13], dans l'ordre :**

1. Restauration dans un environnement isolé.
2. Lecture des traces : suppressions de comptes, réinitialisations, purges, **révocations de passerelles**.
3. Rétablissement de l'état opérationnel et des réglages de refus.
4. Réapplication de tout ce qui a été supprimé ou révoqué depuis la sauvegarde. **Une passerelle révoquée n'est jamais réactivée.**
5. **Invalidation de tous les jetons de notification et de toutes les références temporaires de suppression.** Aucune référence restaurée ne permet de suivre une ancienne opération. Aucun historique des déconnexions ni aucun historique supplémentaire n'est conservé pour ces invalidations. Les appareils réenregistrent leur jeton à leur prochaine ouverture de l'application.
6. Préservation de la nouvelle progression (A5).
7. Vérification.
8. Réouverture.

**Traces lors d'une restauration :**

- Les traces nécessaires à la réapplication des opérations restent disponibles pendant la restauration (§2) [Conséquence].
- Une trace ou une copie de trace restaurée conserve son échéance initiale : la restauration ne remet jamais son délai de conservation à zéro (§3, « Copies des traces ») [Décidé].
- **Régime ordinaire :** à l'échéance d'une trace, ses copies sont supprimées ou rendues définitivement non restaurables, selon le régime de la trace. Cette obligation porte sur les copies de la trace ; elle n'impose pas, à elle seule, que le reste de la sauvegarde cesse d'être restaurable (§3) [Décidé].
- **Trace de purge de progression :** les sauvegardes contenant les données purgées suivent les règles propres de M2 §12.1 (§3, §7) [Décidé].
- **Trace de purge statistique :** toute sauvegarde contenant les événements statistiques purgés doit cesser d'être restaurable au plus tard à l'échéance de cette trace (§3, §7) [Décidé].
- **Trace de suppression liée à une réinitialisation :** les sauvegardes contenant les anciennes données doivent cesser d'être restaurables au plus tard à l'échéance de cette trace (§3, §11) [Décidé].
- Ces deux dernières obligations sont propres aux traces concernées et ne sont pas étendues aux autres traces. Leurs modalités techniques sont [À préciser].

**Agrégats statistiques lors d'une restauration :**

- **GG4 :** les agrégats restaurés qui permettent encore d'isoler un point d'entrée reclassé sont supprimés avant toute remise à disposition ; ils ne sont pas simplement masqués (M2 §12.1, point 4) [Décidé].
- **GG5 :** cet examen n'ajoute aucun identifiant de point d'entrée au schéma des événements M7 (M2 §12.1 ; M7 §2) et ne crée aucune nouvelle trace [Décidé].
- **GG1 :** l'examen s'appuie sur un état des classifications fiable et à jour, indépendant de l'état restauré, qui tient compte des reclassements postérieurs à la sauvegarde restaurée [Décidé]. Cet état est établi à partir de l'historique du catalogue, récupérable après une restauration complète (C1 §2). La continuité de l'historique est contrôlée par un compteur indépendant, qui permet de détecter une troncature ou un retour en arrière, mais ne permet aucune reconstruction. Aucun autre état des classifications n'est conservé à cette fin [Décidé]. Modalités de conservation, de récupération et de contrôle [À préciser] ; faisabilité [À vérifier].
- **GG2 :** les agrégats restaurés restent inaccessibles (exports, publications, accès interne) jusqu'à leur examen, avant la réouverture (R15 D29) [Décidé].
- **GG3 :** si l'état des classifications est indisponible, incomplet, incohérent ou non fiable, notamment s'il a été restauré sans que les reclassements intervenus depuis puissent être établis, si l'historique nécessaire n'est plus disponible, ou si sa continuité ne peut pas être établie parce que le compteur indépendant est indisponible ou incohérent, les agrégats restaurés dont l'absence de risque ne peut pas être établie restent inaccessibles [Décidé]. Leur remise à disposition exige une vérification concluante par une personne habilitée ; si l'incertitude ne peut pas être levée, ils restent inaccessibles. Aucune remise à disposition automatique n'est possible. Les services sans rapport avec ces agrégats restent disponibles [Décidé]. La traçabilité de cette vérification reste à concevoir dans le respect de GG5, sans nouvelle catégorie de trace ni champ ajouté à M7 [À préciser].
- **Incertitude :** l'absence de preuve qu'un point d'entrée n'était pas concerné pendant la période d'un agrégat vaut incertitude au sens de GG3 [Décidé].
- **Union prudente :** lorsque plusieurs versions d'une expérience ont pu être actives pendant la période d'un agrégat, l'examen porte sur l'union de leurs compositions. Si les versions possiblement actives ne peuvent pas être déterminées, GG3 s'applique [Décidé]. La fenêtre de coexistence des versions (C1 §7, §16.1) et la référence temporelle des agrégats (M7 §3, §10.2) sont [À préciser].

**Notifications après une restauration [Décidé, N1 §13, V-4, B-1, C-1] :**

- Les notifications prévues par D20, pour une réinitialisation, peuvent être retardées jusqu'à la prochaine ouverture de l'application et au réenregistrement du jeton. Cette conséquence est acceptée.
- **D36 ne peut s'appliquer après une restauration que tant que la procédure de suppression du compte n'a pas commencé.** Ses notifications peuvent alors être retardées dans les mêmes conditions.
- **Dès le début de cette procédure, N-5 remplace D36,** y compris pour les incidents : aucune notification push, aucune conservation temporaire du jeton, et une information affichée uniquement si l'application est au premier plan.
- **Une restauration ne réactive jamais une notification interdite par N-5.**

**Restauration au-delà de 30 jours [Conséquence] :** seules les données des sauvegardes longues peuvent être restaurées. L'identité des validateurs, conservée uniquement en sauvegarde courte, ne peut alors plus être retrouvée.

**Objectifs de récupération :** RPO et RTO [À préciser] pendant la conception technique (L-2).

---

## 7. Purges sensibles et traces

**Reclassement [Décidé, M2 §12.1] :**

- suspension des événements ;
- purge statistique et purge de progression, puis vérification ;
- deux traces distinctes : la trace de purge statistique et la trace de purge de progression (ci-dessous) ;
- information neutre dans l'interface de progression, sans notification push ;
- refus des envois tardifs.

**Trace de purge statistique [Décidé, M2 §12.1, §13] :**

- trace technique minimale, qui ne contient aucune donnée personnelle, permettant de réappliquer la purge des événements statistiques après une restauration ;
- conservée uniquement tant que des sauvegardes contenant les événements statistiques purgés restent restaurables, dans la limite maximale de 30 jours ;
- supprimée dès qu'elle n'est plus nécessaire à la protection contre une restauration, et dans tous les cas au plus tard à l'expiration de ce délai ; elle n'est jamais conservée au-delà pour attendre la fin de la restaurabilité d'une sauvegarde ;
- toute sauvegarde contenant les événements statistiques purgés doit cesser d'être restaurable au plus tard à cette échéance. Cette obligation fonctionnelle est décidée ; ses modalités techniques sont [À préciser] ;
- la préservation d'éléments nécessaires à une enquête (R15 C1 ; D34) ne permet pas de prolonger sa conservation au-delà de ce plafond ;
- les règles de conservation des journaux d'intervention ne lui sont pas appliquées ;
- R15 D30 et C1, dans leur partie relative à la conservation au-delà de 30 jours, ne lui sont pas applicables.

**Trace de purge de progression [Décidé, M2 §12.1] :**

- trace spécifique de la purge rétroactive des données de progression associées au point d'entrée reclassé, établie au niveau du point d'entrée ou de l'expérience ;
- aucun identifiant de compte ni aucune donnée permettant d'identifier les utilisateurs concernés ; aucun champ d'identification individuelle issu d'autres mécanismes de R15, notamment l'identifiant technique du compte prévu pour la trace de suppression (D31), n'y est ajouté ;
- conservée 30 jours au maximum, sans exception. Elle ne peut être supprimée avant ce délai que lorsqu'aucune sauvegarde contenant les données purgées ne reste restaurable et que sa fonction de réapplication de la purge n'est plus nécessaire ;
- si une sauvegarde contenant les données purgées restait restaurable à l'approche de l'échéance, elle est rendue définitivement non restaurable avant la suppression de la trace. Cette situation constitue un incident au sens de R15 D28 et ne justifie jamais la prolongation de la trace ;
- la conservation de la trace de suppression au-delà de 30 jours (R15 D30 ; C1) ne lui est pas applicable, et la préservation d'éléments nécessaires à une enquête (R15 C1 ; D34) ne permet pas de prolonger sa conservation ;
- elle sert à réappliquer la purge lors d'une restauration (D29) ; aucune restauration directe ne peut réintroduire une progression purgée.

**Règles communes aux deux traces [Décidé, M2 §12.1] :**

- chacune reste distincte des traces de suppression liées à un compte (R15 D30, D31) et des journaux d'intervention technique (R15 D24, D25, C4) ; les deux traces restent distinctes l'une de l'autre ;
- les garanties de R15 D32 à D35 sont applicables à chacune : accès limité et journalisé, protection contre les modifications et suppressions non autorisées, protection des copies, contrôle régulier de l'intégrité, gestion des anomalies et vérification indépendante ;
- R15 D34 ne peut prolonger la conservation d'aucune des deux traces au-delà de son plafond de 30 jours ; les autres éléments nécessaires à une enquête peuvent toujours être préservés selon les règles applicables ;
- pour la trace de purge statistique, toute sauvegarde contenant les événements statistiques purgés doit cesser d'être restaurable au plus tard à l'échéance de la trace ; cette précision ne modifie pas le régime distinct de la trace de purge de progression, qui reste celui décrit ci-dessus ;
- le délai de 30 jours de chacune court à compter de la fin effective de la purge correspondante, établie par la purge vérifiée (M2 §12.1) ; leurs régimes de conservation restent distincts ;
- elles restent disponibles pour la réapplication après restauration, hors des sauvegardes qu'elles protègent (§2) [Conséquence] ; elles relèvent de la sauvegarde courte (F1), avec les garanties de disponibilité et de copies du §3 ; la qualification de leurs identifiants techniques reste [À vérifier].

**Révocation d'une passerelle [Décidé, I1 I-3, L-4] :**

- une utilisation temporaire est coupée immédiatement, côté serveur ;
- une copie ponctuelle reste dans le dossier de destination, et l'utilisateur peut la supprimer ;
- aucun nouveau transfert n'est possible ;
- la trace passe à l'état « révoquée ». Elle est conservée 30 jours au plus, sans contenu de données, et permet la réapplication après restauration.

**Preuves de fonctionnement [Décidé, R15 §12.2 et M2 §12.1, « Preuve des refus »] :**

- preuve de conception pour les refus ;
- aucun journal ni compteur dédié aux refus ;
- journaux ordinaires minimisés (A9, D1).

---

## 8. Dépendances

| Avec | Ce qui est utilisé |
|---|---|
| **Catalogue (C1)** | État des points et durée de validité du cache, établie de façon fiable par une référence de validité maîtrisée côté serveur, dans le respect de P-D, sans dépendre de la seule horloge de l'appareil (C1 §7) ; types d'événements ; périodes de suspension. Les fiches de classement ne contiennent aucune identité de validateur ; la référence technique vers cette identité est exclue des sauvegardes longues tant que son classement, [À préciser], n'est pas décidé (C1 §5, §14). Historique du catalogue, utilisé pour l'examen des agrégats restaurés (§6 ; C1 §2). |
| **Aide immédiate (AI1)** | Contenus disponibles hors ligne sous forme de paquets ; aucune donnée de consultation ; métadonnées techniques des téléchargements soumises aux journaux ordinaires |
| **Notifications (N1)** | Préférences, rappels (suppression des rappels pédagogiques lors d'une réinitialisation ; sort des rappels liés aux dossiers et des autres rappels non décidés [À préciser]), jetons de notification, référence temporaire de suppression ; régimes D20, D36 et N-5 ; invalidations après restauration |
| **Identité (I1)** | Compte, sessions, révocation, réauthentification ; aide immédiate sans compte ; identités de l'équipe et rôles internes |
| **Dossiers (I1)** | Cloisonnement, passerelles et leur trace, accès en ligne uniquement (L-3) |
| **Progression (R15)** | Repère de réinitialisation, refus des envois tardifs, nouvelle progression préservée (A5), notifications D20 et D36 |

---

## 9. Risques et points restant à préciser

**Risques :**

- L'horizon de restauration est limité à 30 jours pour toute donnée personnelle (choix assumé par L-1).
- Une restauration fait perdre les données créées après la sauvegarde, sauf la nouvelle progression protégée par A5.
- Après une restauration, les notifications prévues par D20, et par D36 tant que la procédure de suppression du compte n'a pas commencé, peuvent être retardées jusqu'au réenregistrement des jetons (N1 §13). Dès le début de cette procédure, N-5 remplace D36, y compris pour les incidents : une restauration ne réactive jamais une notification interdite par N-5.
- **Restauration ancienne du catalogue :** l'identité des validateurs peut être perdue. Les fiches gardent leur statut, leur date et leur version, mais pas l'identité de la personne qui a validé. La manière de traiter une fiche dans ce cas est [À préciser] dans la conception de la fiche (M2 §5, format [Conception]).
- Un registre des données incomplet, ou une catégorie mal classée, peut faire entrer une donnée personnelle dans une sauvegarde longue. Cela concerne notamment la référence technique vers l'identité des validateurs, tant que son classement n'est pas précisé.
- Hors ligne, la limite reste celle du cache, bornée par sa durée de validité.
- Un appareil hors ligne peut continuer d'afficher un ancien paquet d'aide immédiate jusqu'à sa reconnexion. Cette limite n'est pas supprimée techniquement (AI1 §9).
- Le plafond de 30 jours de la trace liée à une réinitialisation et celui de la trace de purge statistique imposent que les sauvegardes contenant respectivement les anciennes données et les événements statistiques purgés cessent d'être restaurables au plus tard à l'échéance de la trace (§3, §7, §11). Ces obligations fonctionnelles sont décidées ; tant que les modalités techniques de suppression ou de mise hors d'état de restauration ne sont pas définies et démontrées, elles ne constituent pas une garantie acquise.
- Tant que l'historique du catalogue, sa récupération après une restauration complète et le compteur indépendant ne sont pas réalisés et vérifiés, la suppression après restauration des agrégats qui isolent un point reclassé (GG4) ne peut pas être démontrée ; GG3 maintient alors les agrégats restaurés concernés inaccessibles. Si l'historique nécessaire reste indisponible ou si sa continuité ne peut pas être établie, ce blocage peut devenir durable : sa durée n'est pas déterminée à l'avance et dépend du rétablissement d'un historique fiable ou d'une vérification humaine concluante.

**Points techniques encore ouverts [À préciser] :**

- RPO et RTO (L-2) ;
- durée de restaurabilité des sauvegardes longues ;
- durée de validité du cache et mécanisme de la référence de validité maîtrisée côté serveur, dans le respect de P-D (C1 §7) ;
- synchronisation de la progression ;
- mécanisme de A5 ;
- datation fiable de la fin effective de l'opération (« suppression confirmée », purge vérifiée) ;
- modalités techniques de suppression ou de mise hors d'état de restauration des sauvegardes et des copies des traces à l'échéance de leur trace ; solution de secours si une copie ne peut pas être invalidée individuellement, notamment pour les sauvegardes non modifiables (R15 C9) ;
- traitement d'une restauration du registre des traces à un état antérieur (GF4) ;
- mécanisme de conservation et de récupération de l'historique du catalogue après une restauration complète ; durée exacte et éventuelles obligations supplémentaires, dans le respect du principe minimal de durée (§3) ;
- résilience de l'historique et articulation avec le compteur indépendant ; qualification juridique du compteur [À vérifier] ;
- fenêtre de coexistence des versions d'une expérience (durée de validité du cache, version minimale imposée : C1 §7, §16.1) ;
- dimensions exactes des agrégats et référence temporelle des événements (M7 §3, §10.2) ;
- traçabilité de la vérification humaine prévue par GG3, dans le respect de GG5 ;
- traitement de la filiation des objets en cas de fusion ;
- rétablissement du masquage et de la désactivation des points d'entrée après une restauration du catalogue : exigence de conception (M2 §12.1, « Déroulement » ; M2 §14.2), distincte de l'historique G3, mécanisme à concevoir dans le cadre de la restauration du catalogue ;
- application éventuelle des garanties de disponibilité à la trace de suppression du compte et à la trace des passerelles ;
- trace de suppression du compte : durée, champs, identifiants techniques et mécanisme de réapplication ; application de R15 D30 ; C1 [À vérifier] ;
- journaux d'accès aux statistiques : contenu, principe et valeur de la durée, classement en sauvegarde (M7 §5) ;
- mode de stockage des catégories de traces ;
- qualification juridique des identifiants techniques des traces, y compris par rapprochement [À vérifier] ;
- repère serveur de réinitialisation ;
- durées des événements M7, des journaux par catégorie, dont les métadonnées techniques des connexions, de la trace d'export et de la trace d'autorisation de publication, des journaux d'intervention, des identités de l'équipe et des premières tentatives ;
- inventaire initial du registre et classement de chaque catégorie ;
- séparation physique des deux familles de sauvegardes ;
- mécanisme et classement de la référence technique vers l'identité des validateurs ;
- durée de conservation locale des paquets d'aide immédiate et éventuelle expiration ; format, taille, contrôle d'intégrité et fréquence de mise à jour (AI1 §13) ;
- cycle de vie des jetons de notification : création, rattachement, durée, suppression à la déconnexion, traitement en cas de retrait de l'autorisation système ;
- durée et rattachement des rappels demandés ; sort des rappels liés aux dossiers et des autres rappels dont le comportement n'a pas été décidé lors d'une réinitialisation ; sort des rappels lors de la suppression du compte ;
- emplacement côté serveur de l'état de l'opération de suppression, classement en sauvegarde et garanties de protection de la référence temporaire ; qualification juridique à vérifier ;
- existence et conservation des données d'affichage des alertes et des données transmises au prestataire de notification.

---

## 10. Récapitulatif

| Élément | Statut |
|---|---|
| Plafond de 30 jours pour toute donnée personnelle (D28, L-1) | [Décidé] |
| Sauvegardes longues réservées aux données réellement non personnelles (L-1, option C) | [Décidé] |
| Exclusion des données de l'équipe et de l'identité des validateurs des sauvegardes longues ; identités en sauvegarde courte (complément L-1, option A) | [Décidé] |
| RPO et RTO (L-2) | [À préciser] |
| Dossiers en ligne uniquement ; hors ligne, progression, contenus et contenus d'aide immédiate sous forme de paquets (L-3 ; AI1) | [Décidé] |
| Validité fiable du cache, sans dépendre de la seule horloge de l'appareil, établie par une référence de validité maîtrisée côté serveur, dans le respect de P-D (C1 §7) | [Décidé] ; mécanisme et durée [À préciser] |
| **Trace des passerelles : métadonnées, durée de conservation et réapplication après restauration (L-4).** La trace ne contient jamais les données transférées. Elle conserve uniquement la date, les dossiers source et destination, les catégories, la finalité, la forme et l'état de la passerelle. | [Décidé] |
| Registre des données, avec la classification courte ou longue | [Décidé] |
| Catégories de traces et distinctions entre elles (R15 C4 ; M2 §12.1 ; M7 §5, §6.6, §7 ; L-4) | [Décidé] |
| Contenus de traces déjà définis (D24, D31 ; M2 §12.1 ; M7 §6.6, §7 ; L-4) | [Décidé] |
| Disponibilité des traces hors des sauvegardes qu'elles protègent (R15 D29 ; R15 §14.3) | [Conséquence] |
| Régime de conservation des traces appliqué à toutes leurs copies ; aucune remise à zéro par une restauration ; aucune prolongation de la restaurabilité des sauvegardes | [Décidé] |
| Trace liée à une réinitialisation : suppression au plus tard à 30 jours, sans exception, y compris face à une enquête (R15 D34) ; obligation fonctionnelle de cessation de la restaurabilité des sauvegardes contenant les anciennes données au plus tard à cette échéance (§3, §11) | [Décidé] |
| Trace de purge statistique : suppression au plus tard à 30 jours, y compris face à une enquête (R15 D34) (M2 §12.1, §13) ; obligation fonctionnelle de cessation de la restaurabilité des sauvegardes contenant les événements purgés au plus tard à cette échéance (§3, §7) | [Décidé] |
| Trace de purge de progression : 30 jours au maximum, sans exception, y compris face à une enquête ; sauvegarde rendue non restaurable avant la suppression de la trace (M2 §12.1) | [Décidé] |
| Délai de 30 jours des trois traces à compter de la fin effective de l'opération (« suppression confirmée », purge vérifiée) | [Décidé] |
| Traces de purge en sauvegarde courte (F1) ; disponibilité pendant la période d'utilité, blocage, copies non restaurables après l'échéance et échéance attachée à la trace (GF1, GF2, GF3, GF5) | [Décidé] |
| Agrégats restaurés : suppression de ceux qui isolent un point reclassé (GG4) ; aucun identifiant de point d'entrée ajouté et aucune nouvelle trace (GG5) | [Décidé] |
| Classification indépendante de l'état restauré, établie à partir de l'historique du catalogue (C1 §2) et contrôlée par un compteur indépendant ; inaccessibilité avant examen ; blocage en cas d'incertitude, y compris en l'absence de preuve, levé seulement par une vérification humaine concluante ; union prudente (GG1 à GG3) | [Décidé] |
| Historique récupérable après une restauration complète et disponible tant qu'un agrégat dont l'examen en dépend y demeure soumis : agrégats présents dans des sauvegardes restaurables, et agrégats déjà restaurés dont l'examen n'est pas terminé | [Décidé] |
| Rattachement de chaque version de fiche de classement au point d'entrée concerné par son identifiant stable (C1 §2) | [Conséquence] |
| Mécanisme et durée exacte de l'historique ; résilience ; fenêtre de coexistence ; dimensions et référence temporelle des agrégats ; traçabilité de la vérification humaine ; filiation des fusions ; rétablissement du masquage et de la désactivation après restauration du catalogue | [À préciser] |
| Qualification juridique du compteur d'intégrité et de la référence technique vers l'identité des validateurs | [À vérifier] |
| Modalités techniques de suppression ou de mise hors d'état de restauration et solution de secours ; restauration du registre des traces (GF4) ; datation de la fin effective | [À préciser] |
| Remplacements explicites de R15 D30 ; C1 et D34 (trace liée à une réinitialisation) et de la seule durée de 12 mois de R15 D25 (journaux d'intervention), dans le seul périmètre de L1 (§11) | [Décidé] |
| Durée des journaux d'intervention ; trace de suppression du compte ; journaux d'accès aux statistiques ; mode de stockage des traces | [À préciser] |
| Qualification des identifiants techniques des traces ; application de R15 D30 ; C1 à la trace de suppression du compte | [À vérifier] |
| Rappels évalués côté serveur, sans programmation locale ni donnée de dossier sur l'appareil ; rappels pédagogiques liés aux leçons, aux parcours et à l'ancienne progression supprimés lors d'une réinitialisation ; préférences de notification conservées (N1 ; D15) | [Décidé] |
| Sort, lors d'une réinitialisation, des rappels liés aux dossiers et des autres rappels non décidés | [À préciser] |
| Sessions révoquées dès le début de la suppression du compte ; aucun jeton de notification après ce début ; référence temporaire invalidée à la confirmation ou à l'abandon (N1) | [Décidé] |
| Notifications : D20 pour la réinitialisation ; D36 jusqu'au début de la procédure de suppression du compte ; dès ce début, N-5, y compris pour les incidents, sans notification push ni conservation temporaire du jeton, avec un affichage seulement au premier plan (N1 §10, §15) | [Décidé] |
| Invalidation de tous les jetons et de toutes les références temporaires de suppression après toute restauration, sans historique supplémentaire ; aucune réactivation d'une notification interdite par N-5 (N1 §13) | [Décidé] |
| Aucune donnée de consultation de l'aide immédiate (AI1) | [Décidé] |
| Porte de synchronisation, orchestrateur, registre des traces, existence d'une référence technique vers l'identité des validateurs | [Conséquence] |
| Classement de la référence technique vers l'identité des validateurs (C1 §14) | [À préciser] |
| Refus côté serveur ; réinitialisation ; suppression ; restauration | [Décidé] (R15, M2, I1, N1) |
| Mécanismes et durées listés en section 9 | [À préciser] |

---

## 11. Remplacements explicites

| Document et décision | Règle remplacée | Règle applicable dans L1 | Portée |
|---|---|---|---|
| R15 §11.2, D30 ; C1 | « Une conservation au-delà de 30 jours n'est possible que pour une nécessité distincte et documentée. » | La trace de suppression liée à une réinitialisation est supprimée au plus tard à 30 jours, sans aucune exception (§3). | **Uniquement cette trace.** Le reste de D30 demeure applicable (conservation tant que des sauvegardes contenant les anciennes données restent restaurables ; absence de prolongation de la restaurabilité), mais il ne peut jamais imposer de conserver cette trace au-delà de 30 jours : à l'échéance, les sauvegardes contenant les anciennes données cessent d'être restaurables. Les autres dispositions de C1, dont le plafond de restaurabilité de D28 et l'impossibilité pour une enquête de prolonger la restauration, restent applicables. La trace de suppression du compte n'est pas visée. |
| R15 §12.2, D34 | « Préserver les éléments nécessaires à l'enquête », dans la mesure où cette préservation permettrait de conserver la trace de suppression liée à une réinitialisation au-delà de 30 jours | D34 ne peut pas prolonger la conservation de cette trace au-delà de 30 jours (§3). | **Uniquement la conservation de cette trace.** Toutes les autres mesures de D34 restent applicables (alerte de l'équipe technique, suspension des restaurations susceptibles de réintroduire les anciennes données, vérification par une personne autorisée), ainsi que la préservation de tous les autres éléments nécessaires à une enquête. La trace de suppression du compte n'est pas visée. |
| R15 §12.1, D25 | « Les journaux d'intervention technique sont conservés 12 mois » | La durée de conservation des journaux d'intervention est à préciser (§3). | **Uniquement la durée de 12 mois.** La suppression automatique à l'échéance et l'exception pour justification juridique précise (D25 ; C10), le contenu des journaux (D24) et leur distinction avec les traces de suppression (C4) restent applicables. C10 reste inchangé pour ses autres objets. |

R15 n'est pas modifié. Ce tableau établit la règle applicable dans L1 pour le périmètre précisé.
