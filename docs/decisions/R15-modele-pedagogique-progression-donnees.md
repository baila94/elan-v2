# R15 — Modèle pédagogique, progression et données personnelles

- **Statut :** décisions validées par le fondateur, consolidées dans ce document.
- **Date de consolidation :** 7 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`).
- **Documents liés :** M2 (sujets sensibles), M7 (statistiques d'utilisation), documents de référence de `docs/reference/`.

---

## 0. Statut, sources et légende

Ce document consigne les décisions R15 validées par le fondateur au cours des arbitrages successifs, dans leur **version finale**. Les versions remplacées figurent uniquement dans l'annexe de traçabilité (§15).

Les formulations sont des **restitutions structurées** des décisions validées. Elles ne sont pas des citations mot pour mot des arbitrages.

En cas d'écart entre ce document et un document de référence, l'écart doit être signalé et arbitré explicitement. Il n'est jamais tranché silencieusement (référentiel global §12.1).

### Identifiants des décisions

| Préfixe | Ensemble |
|---|---|
| **P1 à P12** | Décisions pédagogiques fondatrices |
| **D1 à D36** | Décisions sur la progression, les données personnelles, la réinitialisation, les sauvegardes et les incidents |
| **C1 à C11** | Clarifications retenues lors de la revue critique |
| **O1 à O10** | Points complémentaires arbitrés après la revue critique |
| **A1 à A10** | Décisions complémentaires issues de la relecture de R15 |
| **M2, M3, M7** | Décisions sur les sujets sensibles (M2), les données de première tentative (M3) et les statistiques d'utilisation (M7) |

### Légende des statuts

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Corpus]** | Règle issue d'un document de référence de `docs/reference/` |
| **[Conception]** | Choix ou exigence technique délégué à la conception, sans arbitrage de fond |
| **[À vérifier]** | Faisabilité technique, organisationnelle ou juridique non démontrée |
| **[Ouvert]** | Question volontairement laissée ouverte |
| **[À compléter]** | Référence validée dont le texte n'est pas encore intégré au projet |

### Références à compléter

Deux éléments, validés mais absents du projet, devront être ajoutés ultérieurement. Leur absence ne remet en cause aucune règle de ce document.

1. **[À compléter] Le texte de la liste de référence des sujets sensibles (M2).** La liste est acceptée comme base, sous réserve de vérification juridique. Son texte n'est pas encore reproduit dans le projet.
2. **[À compléter] Les libellés exacts des options** retenues pour les décisions P, O et A. Ce document en restitue le contenu, pas le libellé complet des options.

---

## 1. Objet et périmètre

R15 fixe :

- le modèle pédagogique commun d'Élan ;
- la progression et l'affichage des acquis ;
- la protection des données de progression et des contenus sauvegardés ;
- la réinitialisation de la progression, la suppression du compte et la restauration ;
- les incidents, interventions, traces et notifications qui s'y rattachent.

Il s'applique aux expériences, aux outils qui portent une dimension pédagogique, et aux leçons.

Les sujets sensibles relèvent de **M2**. Les statistiques d'utilisation relèvent de **M7**. R15 n'en reprend que les règles qui touchent la progression et les données personnelles.

---

## 2. Glossaire

| Terme | Définition |
|---|---|
| **Première exploration** | Statut déclenché par une action significative, jamais par une simple consultation. C'est le seul statut des sujets qui ne peuvent pas être objectivement vérifiés (A6, D2, D7). |
| **Capacité vérifiée** | Indicateur pédagogique interne, limité à une capacité précise et daté. Ce n'est ni un diplôme, ni une certification, ni une garantie générale de compétence (C11). |
| **Mise à jour nécessaire** | Statut d'une capacité vérifiée devenue obsolète (D8) |
| **Outil indépendant** | Outil utilisé en dehors d'une expérience pédagogique. Il ne déclenche jamais de progression (D3, A8). |
| **Point d'entrée** | Unité de classement des sujets sensibles (M2) |
| **Réinitialisation** | Opération unique et complète d'effacement de la progression (D13, A1) |
| **Trace de suppression** | Enregistrement technique minimal qui permet de réappliquer une suppression après une restauration (D30, D31) |

---

## 3. Principes pédagogiques communs

| Règle | Statut |
|---|---|
| Élan apprend à agir, et pas seulement à terminer des leçons. L'utilisateur repart avec une meilleure compréhension ou une capacité nouvelle. | [Corpus] document fondateur §1.4 |
| Les expériences partent de situations concrètes et crédibles. | [Corpus] référentiel §3.1 |
| L'utilisateur agit, comprend les conséquences de ses choix, comprend ses erreurs et réutilise ses acquis dans une autre situation. Les expériences ne se limitent pas à une explication suivie d'un quiz. | [Corpus] référentiel §3.2 |
| Les règles, obligations, recommandations, bonnes pratiques, possibilités et exceptions sont clairement distinguées. | [Corpus] référentiel §3.3 |
| Seules les anciennes règles pédagogiques compatibles avec le corpus de référence sont conservées. On distingue les règles communes, les pratiques compatibles mais facultatives et les points non résolus. Aucune ancienne pratique n'est réintroduite parce qu'elle existait dans l'application précédente. | [Décidé] P1 |
| **Indices progressifs,** y compris à deux niveaux : une pratique facultative compatible avec le corpus. Ce n'est pas une obligation commune. | [Décidé] P1 |
| Deux écrans explicatifs consécutifs constituent un repère de conception, pas une limite absolue. Des exceptions sont possibles si elles sont justifiées. On n'ajoute jamais une interaction décorative pour respecter ce repère. | [Décidé] P6 |
| **Aucune gamification :** ni XP, ni badges, ni séries, ni classements, ni récompenses artificielles, ni déblocages. | [Décidé] |
| Accès libre, sans parcours imposé. | [Corpus] document fondateur §2.3 |
| L'aide immédiate n'est jamais retardée par une activité pédagogique. | [Corpus] référentiel §4.7 et §5.1 |
| Les sujets sensibles n'exposent pas inutilement les informations personnelles des utilisateurs. | [Décidé] D1 ; M2 |

---

## 4. Organisation des expériences et activités

| Règle | Statut |
|---|---|
| La pédagogie est intégrée aux expériences et aux outils lorsqu'elle est pertinente. La leçon est une forme possible, pas l'unité centrale imposée. Élan n'est pas un catalogue de cours. | [Décidé] P4 |
| Une expérience peut comporter une activité centrale et des activités secondaires lorsqu'elles servent le même objectif. On ne multiplie pas les activités sans utilité pédagogique. | [Décidé] P5 |
| Aucun exercice n'est imposé artificiellement à un contenu ou à un outil. | [Décidé] D2 |
| Un outil indépendant ne déclenche jamais automatiquement une progression. Il peut participer à une expérience pédagogique distincte si celle-ci possède un **objectif défini, une activité cohérente et un déclencheur significatif.** | [Décidé] D3 ; A8 |
| Les formats courte, standard et atelier sont possibles, sans obligation de décliner chaque expérience dans les trois. | [Décidé] O6 |
| Définition des formats | [Ouvert] — à éprouver sur des expériences réelles avant toute généralisation |

---

## 5. Vérification des réponses et des capacités

| Règle | Statut |
|---|---|
| La vérification dépend de la nature de ce qui est appris. Une réflexion personnelle, une préférence ou un choix politique n'est jamais déclaré correct ou incorrect lorsqu'il n'existe pas de réponse objective. On distingue la vérification d'une capacité de l'accompagnement d'une réflexion. | [Décidé] P2 |
| Chaque question ou élément évalué est classé : réponse unique objectivement vérifiable, plusieurs réponses défendables, ou absence de réponse objectivement correcte. Une activité qui mêle des éléments de nature différente les évalue différemment. | [Décidé] P7 |
| Pour les réponses défendables : expliquer les conséquences des choix, sans hiérarchie artificielle. | [Décidé] O7 |
| Expliquer pourquoi une réponse est erronée. | [Corpus] référentiel §3.2 |
| **Première tentative non notée.** Une conservation limitée est possible si elle est justifiée et précisément encadrée. Les données éventuellement conservées sont incluses dans la réinitialisation complète et dans la suppression du compte. Aucune conservation pédagogique dans une entrée sensible. | [Décidé] O1 ; M3 |
| Durées et catégories des données de première tentative | [Conception] |
| Simulations : un retour réflexif de l'IA est autorisé, sans jugement personnel ni vérification automatique d'une capacité. | [Décidé] O5 |
| Chaque capacité possède son propre critère de vérification, défini et validé par des humains. Un simple bon score à un questionnaire ne suffit pas. | [Décidé] D5 |

---

## 6. Progression et affichage des acquis

| Règle | Statut |
|---|---|
| La progression est présentée par piliers, sujets et capacités. L'utilisateur distingue ses **premières explorations,** ses capacités vérifiées et les approfondissements facultatifs. Aucun score général, XP, badge, série, classement ou pourcentage de maîtrise. | [Décidé] P10 ; A6 |
| Deux niveaux de lecture : une vue d'ensemble par pilier, puis le détail des sujets. Pas de symétrie imposée entre les piliers, pas de parcours obligatoire. | [Décidé] D4 |
| Le marqueur de vérification est informatif et privé (par exemple « notion vérifiée le… »). Il n'est ni un score, ni une récompense, ni un déblocage, ni une certification. | [Décidé] P3 ; C11 |
| **« Première exploration »** est déclenchée par une action significative, propre à chaque expérience. Ouvrir une page ou arriver à la fin d'un contenu ne suffit pas. Une réponse incorrecte peut témoigner d'une exploration réelle. | [Décidé] D2 ; A6 |
| Les sujets sans vérification objective n'ont que le statut « Première exploration », avec des approfondissements facultatifs. Aucun statut « expérience réalisée » ou « réflexion menée ». Aucune fonction de notes personnelles n'est décidée dans ce cadre. | [Décidé] D7 ; O3 ; A6 |
| Le traitement de l'obsolescence dépend de la nature de la capacité. Une capacité durable reste vérifiée. Une connaissance réglementaire ou évolutive peut demander une mise à jour. La nature et les conditions de validité de chaque capacité sont définies. Une réussite passée n'est pas effacée automatiquement : l'historique et le statut actuel sont distincts. | [Décidé] D6 |
| Une capacité devenue obsolète prend le statut « Mise à jour nécessaire ». L'ancienne vérification reste dans l'historique. Une nouvelle vérification est possible. | [Décidé] D8 |
| Les changements sont détectés par une veille sur des sources fiables, avec validation humaine. Une détection automatique n'invalide jamais seule une capacité. | [Décidé] D9 |
| Les capacités vérifiables sont définies progressivement par pilier, avec une cohérence transversale. | [Décidé] O8 |
| Liste des capacités et de leurs critères | [Ouvert] |
| Présentation exacte de l'interface de progression | [Ouvert] P10 |

---

## 7. Accessibilité, profondeur, documents et personnages

| Règle | Statut |
|---|---|
| Un socle commun et des approfondissements facultatifs. Un débutant accède à l'essentiel sans être noyé. Un utilisateur avancé approfondit sans parcourir plusieurs versions du même contenu. Les informations essentielles relatives à la sécurité, aux droits ou aux obligations ne sont jamais reléguées dans un approfondissement. | [Décidé] P11 |
| Les personnages varient selon les situations, sans distribution récurrente. La diversité et la prévention des stéréotypes sont des exigences éditoriales. | [Décidé] P12 |
| Documents fictifs mais réalistes, et spécimens officiels lorsqu'ils apportent une réelle valeur pédagogique. Les spécimens sont identifiés, sourcés et utilisés selon leurs conditions d'utilisation. Les documents personnels des utilisateurs ne sont pas intégrés aux leçons ordinaires : leur éventuelle analyse relève d'une expérience distincte, avec ses propres garanties. | [Décidé] P9 |
| **Documents d'acteurs privés :** documents publiés par des acteurs privés, et non documents personnels de l'utilisateur. Leurs droits d'utilisation et leur provenance sont vérifiés, et leur actualisation est tracée. | [Décidé] O9 |
| Les sources commerciales ne sont jamais présentées comme une autorité publique ou indépendante. Aucune mise en avant de produits ou d'offres. | [Corpus] référentiel §6.1 ; P4 §7 |
| **Accessibilité générale de l'application :** un référentiel commun d'accessibilité, complété par des contrôles propres à chaque expérience. | [Décidé] O10 |
| **Conservation des réglages d'accessibilité lors d'une réinitialisation.** C'est une exigence distincte de l'accessibilité générale (voir §11). | [Décidé] O10 ; C2 |

---

## 8. Utilisation de l'intelligence artificielle

| Règle | Statut |
|---|---|
| Fonctionnement mixte et encadré. Les réponses évaluées, les règles, les informations sensibles et les contenus normatifs reposent sur des contenus validés par des humains. | [Décidé] P8 |
| L'IA n'est jamais une source de vérité autonome. Elle n'invente pas de règle, ne tranche pas seule une réponse et ne masque pas une incertitude. | [Décidé] P8 |
| Les critères de vérification des capacités ne sont jamais créés par l'IA. | [Décidé] D5 |
| **Reformulation encadrée :** uniquement à partir d'un contenu validé par un humain. Les conditions, exceptions, montants et nuances sont préservés. Précautions renforcées pour les contenus juridiques, réglementaires, financiers et pour les calculs. Retour au texte source en cas d'incertitude. Contrôles de fidélité sémantique. | [Décidé] O2 ; A2 |
| **Limites et incertitude :** aucune certitude n'est affirmée sans source actuelle validée pour les règles et les calculs. Pour les explications générales, l'IA distingue les faits des indications non validées. Si les informations sont insuffisantes, elle reconnaît ses limites, demande une précision ou oriente vers une source adaptée. | [Décidé] A3 |
| L'IA ne produit pas le contenu de l'aide immédiate. | [Corpus] référentiel §5.1 et §10 |
| **Aucune IA dans les étapes sensibles au lancement.** | [Décidé] M2 |
| Méthode des contrôles de fidélité sémantique | [Conception] |
| Traitements de données liés aux fournisseurs d'IA | [À vérifier] |

---

## 9. Sujets sensibles

La définition, la classification et l'isolement des sujets sensibles relèvent de **M2**. Cette section en retient les règles de progression et de données.

| Règle | Statut |
|---|---|
| Aucune trace de progression n'est conservée lorsqu'un utilisateur consulte un sujet sensible : pas de consultation dans l'historique pédagogique, pas de marqueur, pas de synchronisation au compte, pas de personnalisation future, pas d'apparition dans le profil. L'utilisateur peut consulter le contenu, accéder à l'aide et le retrouver manuellement dans la bibliothèque. | [Décidé] D1 |
| Cette règle s'applique à toute action, réponse ou vérification réalisée dans une entrée sensible. | [Décidé] M2 |
| Aucune sauvegarde de simulation ni conservation de première tentative dans une entrée sensible. | [Décidé] A7 ; O1 ; M3 |
| **Informations sensibles volontairement communiquées :** elles sont traitées uniquement pour la demande en cours, sans progression, historique ni personnalisation. | [Décidé] O4 |
| **Données pédagogiques temporaires d'une entrée sensible :** elles ne font l'objet d'aucune conservation locale après la session. Elles sont supprimées à la sortie de l'expérience ou de la session. | [Décidé] M2 ; A4 |
| **Journaux des entrées sensibles.** Seuls subsistent les journaux strictement nécessaires à la sécurité et au fonctionnement, avec une minimisation adaptée. Ils ne doivent pas permettre de reconstituer les sujets consultés, les parcours, les réponses, ni les informations personnelles communiquées dans une entrée sensible. Les éléments techniques susceptibles de révéler le sujet consulté sont minimisés en conséquence. | [Décidé] D1 ; C5 ; M2 |
| Un point d'entrée qui sollicite une opinion ou une conviction sensible, ou dont la conception permet raisonnablement d'en déduire une, est classé sensible (M2 §3). | [Décidé] M2 |
| Les révélations spontanées faites dans une partie générale sont éphémères et protégées conformément à M2 §9, y compris lorsqu'elles contiennent une opinion ou une conviction sensible. Elles n'entraînent pas automatiquement le classement sensible du point d'entrée ni celui de la partie générale. Les informations sensibles concernant des tiers bénéficient des mêmes protections. | [Décidé] M2 |
| Le reclassement d'un point d'entrée en sensible entraîne une purge rétroactive des données non agrégées associées, dans le périmètre défini par M2 §12.1. | [Décidé] M2 |
| Toute progression associée à un point d'entrée reclassé sensible, reçue après le reclassement, est refusée et n'est pas enregistrée, même si elle a été créée avant celui-ci, y compris hors ligne. La purge de cette progression fait l'objet d'une trace sans identifiant de compte et d'une information neutre de l'utilisateur (M2 §12.1 ; §12.3). | [Décidé] M2 |
| Texte de la liste de référence des sujets sensibles | **[À compléter]** (voir §0) |

---

## 10. Protection des données de progression et des contenus sauvegardés

| Règle | Statut |
|---|---|
| Les résultats conservés sont des données personnelles et sont minimisés. | [Décidé] P3 |
| On conserve l'historique des vérifications réussies et des événements « Mise à jour nécessaire ». On ne conserve pas systématiquement toutes les réponses, erreurs ou interactions pédagogiques. | [Décidé] D10 |
| L'historique est conservé tant que le compte existe, et supprimé avec le compte. Une conservation malgré une demande de suppression n'est possible que pour une justification juridique précise, limitée et documentée. La mention générale « sauf obligation légale » ne suffit pas. | [Décidé] D11 ; C10 |
| Aucune suppression automatique d'un compte en raison de son inactivité. | [Décidé] A10 |
| L'utilisateur peut supprimer l'intégralité de son historique de progression sans supprimer son compte, au moyen de la réinitialisation complète. | [Décidé] D12 ; A1 |
| Export complet des données de progression conservées, sans réponses individuelles ni erreurs non conservées. | [Décidé] |
| **Simulations :** non conservées par défaut. Sauvegarde possible à la demande, pour des simulations non sensibles. Ce sont des données personnelles, jamais de la progression, une capacité vérifiée ou une source de personnalisation. | [Décidé] A7 |
| Les simulations sauvegardées restent consultables et supprimables individuellement en dehors d'une réinitialisation. | [Décidé] A7 |
| Les simulations sauvegardées sont incluses dans la réinitialisation complète et dans la suppression du compte. | [Décidé] A7 |
| Les simulations sauvegardées sont exclues de l'export de progression, puisqu'elles ne sont pas des données de progression. | [Décidé] A7 |
| Un identifiant technique pseudonymisé reste une donnée personnelle lorsqu'il permet de retrouver ou de distinguer un compte. Il n'est jamais qualifié d'anonyme. | [Décidé] C3 ; D31 |
| Les statistiques d'utilisation (M7) ne sont jamais de la progression ni une source de personnalisation individuelle. | [Décidé] M7 |

---

## 11. Réinitialisation, suppression du compte et restauration

### 11.1 Réinitialisation

| Règle | Statut |
|---|---|
| **Une seule réinitialisation complète.** Elle efface les premières explorations, les capacités vérifiées, l'historique des vérifications, les statuts « Mise à jour nécessaire », les données de première tentative éventuellement conservées et les simulations sauvegardées. Le compte, l'abonnement et l'accès aux contenus sont conservés. | [Décidé] D13 ; A1 ; M3 ; A7 |
| Toutes les suggestions et adaptations fondées sur l'ancienne progression sont supprimées. Aucune réutilisation indirecte de cette progression n'est autorisée. | [Décidé] D14 |
| Les préférences de personnalisation pédagogique sont effacées : adaptations pédagogiques, suggestions fondées sur l'ancienne progression, préférences liées à l'ancien historique, **centres d'intérêt et objectifs déclarés.** | [Décidé] D15 ; C2 |
| Les réglages fonctionnels sont conservés : langue, accessibilité, réduction des animations, notifications, réglages d'affichage. Le compte, l'abonnement, les droits d'accès et les données essentielles de sécurité et de facturation sont également conservés. | [Décidé] D15 ; C2 |
| Confirmation renforcée en deux étapes. L'utilisateur comprend ce qui sera supprimé et ce qui sera conservé. La seconde confirmation est explicite, sans phrase à taper. | [Décidé] D16 |
| La suppression commence immédiatement après la seconde confirmation. L'opération n'est jamais annoncée comme terminée avant son exécution effective. | [Décidé] D17 |
| Trois états distincts : suppression démarrée, données isolées, suppression confirmée. L'application sait représenter une opération en cours ou incomplète sans réutiliser les anciennes données. | [Décidé] C6 |
| En cas d'échec partiel : vérifier toutes les suppressions avant de déclarer la fin, ne pas restaurer les données supprimées, isoler les données restantes, empêcher leur affichage et leur utilisation, poursuivre la suppression, vérifier à nouveau. | [Décidé] D18 |
| Pendant une suppression incomplète, les contenus et outils indépendants restent utilisables. L'ancienne progression reste isolée, n'est pas affichée et ne sert pas à personnaliser. L'application indique clairement que la réinitialisation n'est pas encore confirmée. | [Décidé] D19 |
| **Une nouvelle progression peut être créée** pendant une réinitialisation incomplète. Elle est strictement séparée de l'ancienne. | [Décidé] A5 |
| **La nouvelle progression est préservée lors des reprises et des restaurations,** y compris lors d'une restauration complète : elle ne doit pas disparaître. La réapplication des suppressions ne vise que l'ancienne progression. | [Décidé] A5 |
| **Progression créée avant une réinitialisation :** toute progression créée avant la seconde confirmation définitive de la réinitialisation (D17) est une ancienne progression. Si elle est reçue après cet instant, notamment après une utilisation hors ligne, elle est refusée et n'est pas enregistrée. Seule la progression créée après cet instant peut relever de la nouvelle progression préservée (A5). La frontière repose sur un mécanisme fiable, et non sur la seule horloge de l'appareil. | [Décidé] |
| **Exigence technique :** un mécanisme qui préserve la nouvelle progression séparément, ou qui la réapplique après une restauration, dans les étapes de D29, avant la réouverture du système. | [Conception] (voir §14) |

### 11.2 Sauvegardes et restaurations

| Règle | Statut |
|---|---|
| La suppression est vérifiée dans tous les emplacements concernés : base principale, systèmes de progression et de personnalisation, caches et données temporaires, services secondaires, sauvegardes selon leur cycle de vie. Aucune ancienne progression ne doit pouvoir être restaurée ou réutilisée. Les sauvegardes qui ne peuvent pas être supprimées immédiatement sont isolées et soumises à une suppression documentée. | [Décidé] D26 |
| Les sauvegardes concernées sont isolées immédiatement. Elles ne sont conservées temporairement que si le fonctionnement technique l'exige, à condition de n'être plus utilisées par l'application, de ne pas pouvoir réintroduire les anciennes données, d'être supprimées à l'échéance prévue et d'avoir un cycle de vie vérifiable. | [Décidé] D27 |
| **Plafond obligatoire de 30 jours.** Aucune sauvegarde contenant les données supprimées ne reste restaurable au-delà de 30 jours. Une sauvegarde encore restaurable après ce délai est un incident à résoudre, pas une exception autorisée. | [Décidé] D28 ; C1 |
| Pour les sauvegardes non modifiables, un mécanisme fiable empêche que leur contenu supprimé soit réintroduit lors d'une restauration. | [Décidé] C9 |
| Restauration après une panne : restaurer dans un environnement isolé, récupérer les traces fiables des demandes de suppression, réappliquer les suppressions, vérifier le résultat, puis seulement rouvrir le système. | [Décidé] D29 |
| **Trace de suppression :** conservée tant que des sauvegardes contenant les anciennes données sont restaurables, dans la limite de 30 jours. Une conservation au-delà de 30 jours n'est possible que pour une nécessité distincte et documentée. Elle ne prolonge jamais la restaurabilité des sauvegardes. | [Décidé] D30 ; C1 |
| La préservation des éléments techniques nécessaires à une enquête (D34) ne permet jamais de prolonger la restauration des anciennes données. | [Décidé] C1 ; D34 |

### 11.3 Suppression du compte

| Règle | Statut |
|---|---|
| Les sauvegardes contenant les données d'un compte supprimé sont isolées immédiatement. Elles ne peuvent restaurer ni le compte ni ses données, y compris les simulations sauvegardées et les données de première tentative éventuellement conservées. Elles deviennent irrécupérables dans un délai maximal de 30 jours. Les obligations légales éventuelles sont traitées séparément. | [Décidé] ; A7 ; M3 |
| Les anciennes données reçues après la suppression d'un compte, notamment par une synchronisation différée ou depuis un appareil hors ligne, sont refusées et ne sont pas enregistrées. | [Décidé] |
| Trace de suppression et réapplication après restauration pour la suppression du compte | [Conception] |

---

## 12. Incidents, interventions, traces et notifications

### 12.1 Incidents et interventions

| Règle | Statut |
|---|---|
| Suppression bloquée : tentatives de reprise, seuil de persistance, puis intervention technique. Les contenus et outils indépendants restent utilisables. L'incident est suivi jusqu'à sa résolution. | [Décidé] D21 |
| Nombre de tentatives, fréquence et seuil de déclenchement | [Conception] |
| L'équipe technique accède uniquement aux informations strictement nécessaires : identifiant d'incident, date et heure, type d'erreur, état de l'opération, catégories de données concernées. Jamais aux réponses, réflexions personnelles, parcours détaillés ou contenus individuels. Ces journaux sont protégés, à accès limité, avec une conservation contrôlée. | [Décidé] D22 |
| Seules les personnes techniques explicitement autorisées peuvent intervenir, selon le moindre privilège, avec des autorisations limitées, révocables et des intervenants identifiés. Ni le support client ni les prestataires externes ne sont autorisés automatiquement. | [Décidé] D23 |
| Les interventions sont tracées (acteur, date et heure, type d'opération, résultat), sans contenu personnel ni détail du parcours pédagogique. | [Décidé] D24 |
| Les journaux d'intervention technique sont conservés 12 mois, puis supprimés automatiquement, sauf justification juridique précise. | [Décidé] D25 ; C10 |

### 12.2 Journaux et traces

| Règle | Statut |
|---|---|
| **Journaux techniques ordinaires :** des durées définies par catégorie, justifiées, avec suppression automatique. Les 12 mois de D25 ne s'y appliquent pas automatiquement. Pour les entrées sensibles, voir §9 : seuls les journaux strictement nécessaires subsistent, sans permettre de reconstituer les sujets, les parcours, les réponses ou les informations communiquées. | [Décidé] A9 ; D1 ; C5 |
| Valeurs des durées par catégorie | [Conception], puis [À vérifier] |
| Les journaux d'intervention (12 mois) et les traces de suppression (cycle de vie des sauvegardes) sont deux ensembles distincts, jamais fusionnés dans un journal général à durée unique. | [Décidé] C4 |
| La trace de suppression contient uniquement : l'identifiant technique du compte, l'identifiant unique de l'opération, la date, la portée de la suppression, et son état (demandée, appliquée, à réappliquer après restauration). Aucune réponse, réflexion, consultation de sujet ou détail du parcours. | [Décidé] D31 |
| Protection renforcée des traces : accès limité, accès journalisés, protection contre les modifications et suppressions non autorisées, protection des copies. | [Décidé] D32 |
| L'intégrité des traces est contrôlée régulièrement. Les altérations ou disparitions inattendues sont détectées et signalées. Le mécanisme de contrôle est lui-même protégé. Une anomalie détectée ne signifie pas que la trace est récupérable. | [Décidé] D33 |
| En cas d'anomalie : alerter l'équipe technique, suspendre les restaurations susceptibles de réintroduire les anciennes données, préserver les éléments nécessaires à l'enquête, faire vérifier la situation par une personne autorisée. Les contenus et outils indépendants restent accessibles lorsque cela ne présente pas de risque. | [Décidé] D34 |
| Une correction technique ne suffit pas à clore un incident. Il faut vérifier indépendamment la fiabilité des traces, l'impossibilité de réintroduire les anciennes données et le résultat de la correction. L'incident reste ouvert et les restaurations concernées restent bloquées jusque-là. La vérification indépendante peut être automatisée pour les cas ordinaires ; une intervention humaine est nécessaire lorsque l'anomalie le justifie. | [Décidé] D35 ; C8 |
| **Preuve des refus :** le bon fonctionnement des mécanismes de refus (§9, §11.1, §11.3 ; M2 §12.1) est démontré par une preuve de conception. Aucun journal ni compteur dédié n'enregistre les refus individuels. Les journaux techniques ordinaires restent autorisés dans les conditions existantes (A9, D1) ; ils sont minimisés et ne contiennent aucune information permettant d'identifier le point d'entrée sensible ni de relier un compte à celui-ci. | [Décidé] |

### 12.3 Information et notifications

| Règle | Statut |
|---|---|
| Fin de suppression : confirmation dans l'application et notification push. Si les notifications push sont désactivées, la confirmation dans l'application reste disponible. Pas de doublon : confirmation dans l'application si elle est au premier plan, notification push si elle est en arrière-plan. | [Décidé] D20 |
| Pendant un incident, l'utilisateur est informé lorsque l'incident est confirmé, lorsque la suppression n'est pas encore entièrement confirmée, lorsque les anciennes données sont isolées, pendant la vérification et lorsque le résultat est confirmé. Pas de notifications répétitives ni de détails techniques inutiles. La confirmation finale n'est envoyée qu'après vérification effective. | [Décidé] D36 ; D17 |
| Les notifications sont neutres et ne révèlent aucune donnée personnelle ou pédagogique sensible. | [Décidé] D20 ; C7 |
| Après une purge de progression liée au reclassement d'un point d'entrée (M2 §12.1), l'utilisateur reçoit une information neutre, affichée directement dans l'interface de progression. Aucune notification push n'est envoyée. Aucun historique de notification ni historique personnel permettant de déduire le reclassement n'est créé. L'information ne révèle ni le sujet, ni son caractère sensible, ni le point reclassé. Exemple de formulation : « Certaines informations de votre progression ont été mises à jour. » | [Décidé] M2 ; C7 |

---

## 13. Liens avec M2, M7, le référentiel et les cinq piliers

### 13.1 M2 et M7

| Document | Lien |
|---|---|
| **M2** | Définition, classification et isolement des sujets sensibles. M2 prime sur la sauvegarde des simulations (A7) et sur la conservation des premières tentatives (O1, M3). |
| **M7** | Les statistiques d'utilisation ne sont ni de la progression, ni une source de personnalisation individuelle. Aucun événement ne provient d'une entrée sensible. Les réponses, réflexions et simulations sont exclues des statistiques. |

### 13.2 Référentiel et document fondateur

| Document | Lien |
|---|---|
| **Référentiel global** | §3 (principes pédagogiques), §4.7 et §5.1 (aide immédiate), §6.1 (qualification des sources), §9 (données, confidentialité, sécurité), §10 (IA), §11 (grille d'évaluation des expériences), §12.1 (hiérarchie documentaire) |
| **Document fondateur** | §1.3 et §1.4 (finalité) ; §2.3 (accès libre et personnalisation facultative). L'adaptation « en fonction de l'utilisation » ne peut reposer que sur la progression conservée hors sujets sensibles, jamais sur les statistiques M7. Les centres d'intérêt déclarés sont des préférences pédagogiques. |

### 13.3 Cinq piliers

| Pilier | Lien |
|---|---|
| **P1 — Gestion de l'argent** | D3.4 et D3.8 : les outils de plan de rééquilibrage et de rétablissement sont soumis à la contrainte B1 (§13.4). |
| **P2 — Entrepreneuriat** | §6 : les indicateurs 2 et 3, qui supposent un suivi entre sessions, sont incompatibles avec M7, qui prévaut. L'indicateur 1 n'est compatible que s'il est mesuré sans lire le contenu du dossier. §3, Étape 0 : la ressaisie volontaire des informations sensibles (M2) est une exception au principe de partage des informations. Outils indépendants : A8. |
| **P3 — Travail et carrière** | D6 : protection des informations sensibles concernant des tiers (M2). D4 et D7 : simulations (O5, A7), sans IA si la situation est sensible. D1 : aucun verdict sur la personne. |
| **P4 — Banque et finance** | D3-A et D3-B : les outils de dossier et de suivi sont soumis à la contrainte B1 (§13.4). D6 : les convictions sollicitées, ou raisonnablement déductibles de la conception du point d'entrée, relèvent de M2 §3 ; celles exprimées spontanément relèvent de M2 §9. §7 : neutralité, y compris pour les documents d'acteurs privés (O9). |
| **P5 — Économie et société** | §6 : les réflexions qui invitent l'utilisateur à exprimer une opinion politique, ou dont la conception permet raisonnablement d'en déduire une, sont des points d'entrée sensibles (M2 §3). Une opinion exprimée spontanément dans une partie générale relève de M2 §9. §7 : qualification des sources. |

### 13.4 Contrainte B1

Les outils candidats de dossier, de suivi et de plan (P1 D3.4 et D3.8, P4 D3-A et D3-B, référentiel §4.4) supposent une conservation durable de données personnelles. S'ils portent sur des points d'entrée classés sensibles, M2 et O4 s'appliquent : traitement pour la demande en cours seulement, sans historique. Ces outils restent candidats. La contrainte devra être prise en compte lors de leur évaluation (référentiel §11, R12). Elle ne demande pas d'arbitrage immédiat.

---

## 14. Points restant à traiter

### 14.1 Références à compléter

- **[À compléter]** Le texte de la liste de référence des sujets sensibles (M2).
- **[À compléter]** Les libellés exacts des options des décisions P, O et A.

### 14.2 Points ouverts par décision

- Définitions des formats courte, standard et atelier (O6).
- Liste des capacités et de leurs critères (O8, D5, D6).
- Présentation de l'interface de progression (P10).

### 14.3 Points techniques [Conception]

- Mécanisme de préservation ou de réapplication de la nouvelle progression lors des reprises et des restaurations (A5).
- Suppression des simulations sauvegardées lors de la réinitialisation et de la suppression du compte (A7).
- Données de première tentative : durées et catégories (O1, M3).
- Durées des journaux techniques ordinaires par catégorie (A9).
- Paramètres de reprise de D21 : nombre de tentatives, fréquence, seuil.
- Trace de suppression et réapplication pour la suppression du compte.
- Mécanisme pour les sauvegardes non modifiables (C9).
- Conservation des traces de suppression en dehors des sauvegardes qu'elles protègent (D29).
- Méthode des contrôles de fidélité sémantique de l'IA (O2, A2).
- Minimisation des journaux strictement nécessaires dans les entrées sensibles (§9).
- Hypothèses et paramètres M7.
- Refus des progressions anciennes reçues après une réinitialisation ou après la suppression du compte, et mécanisme fiable de distinction entre ancienne et nouvelle progression, à partir de la seconde confirmation définitive de la réinitialisation, sans reposer sur la seule horloge de l'appareil.
- Preuve de conception des mécanismes de refus.
- Affichage de l'information neutre dans l'interface de progression après une purge de progression liée à un reclassement, sans notification push ni historique exploitable.

### 14.4 Points documentaires

- Mise à jour du référentiel global et des documents des piliers selon les liens du §13. Aucune de ces mises à jour n'est réalisée par le présent document.
- Corrections rédactionnelles déjà identifiées (série R17).

### 14.5 Vérifications juridiques [À vérifier]

- Durées de conservation, y compris l'absence de suppression automatique pour inactivité (A10) face au principe de durée justifiée (référentiel §9.1).
- Fondements de toute conservation exceptionnelle (C10).
- Régime des identifiants pseudonymisés (C3).
- Traitements liés à l'IA et à ses fournisseurs, y compris pour les simulations sauvegardées.
- Droits d'utilisation des documents d'acteurs privés et des spécimens officiels (O9, P9).
- Obligations d'information des utilisateurs.
- Articulation avec le droit d'accès des données exclues de l'export de progression : données de première tentative conservées (O1) et simulations sauvegardées (A7). Il s'agit d'une vérification, pas d'une remise en cause des décisions.
- Analyse d'impact relative à la protection des données (AIPD) pour les traitements de progression, de sujets sensibles et de statistiques (référentiel §9.5).

### 14.6 Faisabilité et organisation [À vérifier]

Aucune des capacités suivantes n'est considérée comme acquise sans preuve issue de l'architecture réelle :

- isolement immédiat des données après une réinitialisation ;
- respect du plafond de 30 jours pour toutes les copies et sauvegardes ;
- fiabilité des traces et de la réapplication ;
- séparation des journaux et des traces ;
- gestion des caches, services secondaires et prestataires ;
- vérification de la suppression sur l'ensemble des systèmes.

Capacité organisationnelle à assurer : la veille des sources, la validation humaine des évolutions et des critères, la gestion des incidents, le contrôle des accès, la vérification indépendante et la maintenance des contenus pédagogiques.

---

## 15. Annexe — Traçabilité des versions remplacées

Seule la version applicable fait foi. Les anciennes versions sont conservées ici pour mémoire.

| Sujet | Ancienne version | Version applicable | Source |
|---|---|---|---|
| Libellé de progression | « Sujet découvert » | « Première exploration » | A6 |
| Préférences lors d'une réinitialisation | Effacement de toutes les préférences indépendantes | Effacement des seules préférences pédagogiques, y compris centres d'intérêt et objectifs déclarés ; conservation des réglages fonctionnels | D15 ; C2 ; décision sur les centres d'intérêt |
| Trace de suppression | Conservation au-delà de 30 jours si le cycle réel des sauvegardes l'exige | Au-delà de 30 jours, seulement pour une nécessité distincte et documentée, sans jamais prolonger la restaurabilité | C1 |
| Délai des sauvegardes | Délai indicatif | Plafond obligatoire de 30 jours | D28 ; C1 |
| Suppression de l'historique | Deux opérations possibles | Une seule réinitialisation complète | D12 ; D13 ; A1 |
| Informations sensibles communiquées | Point laissé en attente | Traitement pour la demande en cours seulement | O4 |
| Réponses défendables | Plusieurs options | Conséquences expliquées, sans hiérarchie artificielle | O7 |
| Documents « privés » | Sens non défini | Documents publiés par des acteurs privés, jamais des documents personnels | O9 |
| Indices progressifs | Présentés comme une question ouverte | Pratique facultative compatible avec le corpus | P1 |
| Statuts supplémentaires | « Réflexion menée », « expérience réalisée » | Exclus | D7 ; O3 |
| Simulations sauvegardées | Hors réinitialisation (lecture provisoire) | Incluses dans la réinitialisation et la suppression du compte ; exclues de l'export de progression | A7 |
| Nouvelle progression lors d'une restauration complète | Perte présentée comme une limite technique acceptable | Préservée ; mécanisme à concevoir | A5 |
| Journaux des entrées sensibles | Liste générale « titres, routes, catégories, événements, métadonnées » | Journaux strictement nécessaires uniquement, sans possibilité de reconstitution | D1 ; C5 ; M2 |
| Durées des journaux | 12 mois appliqués à d'autres journaux | 12 mois pour les seuls journaux d'intervention ; durées par catégorie pour les autres | D25 ; A9 |
| Anciennes règles pédagogiques | Vérification finale déterminant la réussite, activité principale unique, limite stricte de deux écrans, XP, verrouillage séquentiel | Exclues ou remplacées | P1 ; P2 ; P3 ; P5 ; P6 |
