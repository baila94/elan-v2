# N1 — Notifications et alertes

- **Statut :** ce document consolide les décisions validées relatives aux notifications et aux alertes ; les points non arbitrés y restent explicitement indiqués comme ouverts.
- **Date de consolidation :** 9 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`).
- **Documents liés :** C1 (`docs/decisions/C1-catalogue-contenus-points-entree.md`), AI1 (`docs/decisions/AI1-aide-immediate.md`), R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), L1 (`docs/decisions/L1-cycle-de-vie-des-donnees.md`), documents de référence de `docs/reference/`.

---

## 0. Statut, sources et légende

Ce document consigne les décisions validées sur les notifications et les alertes : N-1 à N-5 et leurs compléments B-1, C-1 à C-3, I-3 à I-5, NS-1, NS-2, V-3 et V-4. Les formulations sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1).

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Explicatif]** | Formulation qui décrit ou précise, sans créer de règle |
| **[Ouvert]** | Point technique ou organisationnel non décidé |
| **[À vérifier]** | Garantie technique ou qualification juridique non démontrée |

---

## 1. Terminologie

| Terme | Définition | Statut |
|---|---|---|
| **Alerte** | Information ou évolution pertinente signalée par le moteur commun d'alertes | [Renvoi] référentiel §4.8 |
| **Rappel** | Rappel explicitement demandé par l'utilisateur. Les catégories déjà identifiées comprennent les rappels pédagogiques et les rappels liés à une échéance d'un dossier. Cette liste n'est pas exhaustive. | [Décidé] N-3 |
| **Notification de service** | Information sur une opération concernant le compte : fin d'une réinitialisation, déroulement d'un incident | [Renvoi] R15 D20, D36 |
| **Notification système** | Message transmis à l'appareil par le système d'exploitation, en dehors de l'application | [Explicatif] |
| **Jeton de notification** | Identifiant technique permettant de transmettre une notification système à un appareil | [Explicatif] |
| **Référence temporaire de suppression** | Référence d'opération remise à l'appareil qui demande la suppression du compte (§11) | [Décidé] NS-2 |

Les alertes, les rappels et les notifications de service sont des mécanismes distincts, même lorsqu'ils utilisent un même canal de transmission.

L'aide immédiate est un service indépendant : elle ne diffuse pas son contenu par notification et ne produit aucune notification liée à sa consultation (AI1 §3).

---

## 2. Principes

| Règle | Statut |
|---|---|
| Les alertes ne créent pas de fausse urgence, ne laissent pas croire à une surveillance continue, rendent visible l'origine de l'information, affichent la date lorsque c'est pertinent et distinguent une information d'une urgence réelle. | [Renvoi] référentiel §4.8 ; P3 §7 ; P4 §6.2 |
| L'absence d'alerte ne signifie pas qu'une situation est sûre. | [Renvoi] P3 §7 |
| Les notifications sont neutres et ne révèlent aucune donnée personnelle ou pédagogique sensible. | [Renvoi] R15 D20, C7 |
| Aucune notification ne porte sur le contenu d'une entrée sensible. | [Renvoi] M2 §8 ; R15 C7 |
| Une notification neutre n'empêche pas l'accès aux détails dans l'application, selon les règles d'accès applicables. | [Explicatif] |
| Aucune gamification et aucun mécanisme artificiel d'engagement. | [Renvoi] R15 §3 ; [Décidé] N-3 |
| La personnalisation n'utilise que la progression non sensible et les préférences déclarées ; aucun dossier n'est consulté automatiquement. | [Renvoi] I1 §7 |

---

## 3. Préférences et autorisations

| Règle | Statut |
|---|---|
| **Les notifications de service sont actives par défaut**, sous réserve de l'autorisation du système d'exploitation. | [Décidé] N-2 |
| **Les alertes et les rappels nécessitent une activation explicite** de l'utilisateur. | [Décidé] N-2 |
| Les réglages de notification font partie des réglages fonctionnels conservés lors d'une réinitialisation. | [Renvoi] R15 D15 |
| Lorsque l'autorisation du système est refusée, aucune notification système ne s'affiche ; la confirmation de réinitialisation reste disponible dans l'application. | [Renvoi] R15 D20 |
| Catégories exactes de préférences | [Ouvert] |

---

## 4. Catégories au lancement

| Règle | Statut |
|---|---|
| **Le premier usage du moteur d'alertes est l'information générale éditoriale,** validée par des humains, sans donnée issue des dossiers et sans dépendance initiale à des sources externes. Cette décision ne limite pas les autres catégories de notifications du lancement. | [Décidé] N-1 ; [Renvoi] référentiel §13.2 ; C1 §10 |
| **Seuls les rappels explicitement demandés par l'utilisateur sont autorisés.** | [Décidé] N-3 |
| **Aucune notification de relance destinée à faire revenir l'utilisateur.** | [Décidé] N-3 |
| **Aucune notification commerciale au lancement.** | [Décidé] N-3 |
| Les notifications de service relèvent de R15 D20 et D36 pour la réinitialisation et les incidents, et de N-5 pour la suppression du compte (§10). | [Décidé] ; [Renvoi] R15 §12.3 |
| L'information neutre après une purge de progression liée à un reclassement est affichée dans l'interface de progression, sans notification système. | [Renvoi] R15 §12.3 ; M2 §12.1 |

---

## 5. Alertes éditoriales

| Règle | Statut |
|---|---|
| Les alertes d'information générale sont des contenus éditoriaux, validés par des humains dans le circuit du catalogue. | [Renvoi] C1 §10, §11 ; référentiel §6.4 |
| Une alerte ne pointe jamais vers un point d'entrée masqué ; les objets sont résolus par leur identifiant. | [Renvoi] C1 §8 |
| Une alerte portant sur une situation potentiellement urgente renvoie vers l'aide immédiate. | [Renvoi] référentiel §4.7, §5.1 ; AI1 §1 |
| Forme de l'affichage des alertes dans l'application et éventuel état « lu » | [Ouvert] |

---

## 6. Rappels et évaluation côté serveur

| Règle | Statut |
|---|---|
| **Tous les rappels, y compris pédagogiques, sont évalués côté serveur.** | [Décidé] NS-1 ; N-4 |
| **Aucune programmation locale de rappel.** | [Décidé] NS-1 ; N-4 |
| **La notification transmise est strictement neutre.** | [Décidé] N-4 |
| **Aucune donnée issue d'un dossier n'est conservée sur l'appareil.** | [Décidé] N-4 ; [Renvoi] L1 §5 (L-3) |
| Les détails d'un rappel lié à un dossier sont accessibles uniquement dans ce dossier, selon les règles d'accès applicables. | [Renvoi] I1 §5.1 |
| **La livraison dépend de la joignabilité de l'appareil.** | [Décidé] N-4 ; NS-1 |
| Structure des données transmises au prestataire de notification | [Ouvert] |
| Affichage de la date prévue d'un rappel livré en retard | [Ouvert] |

---

## 7. Sujets sensibles

| Règle | Statut |
|---|---|
| **Toute notification système relative à une information générale portant sur un thème sensible au sens de M2 utilise un texte neutre.** Le thème et le détail ne sont consultables que dans l'application. | [Décidé] I-4 ; [Renvoi] M2 §3, §4 |
| **En cas de doute sur le caractère sensible d'une alerte générale, le texte diffusé est neutralisé par précaution.** La classification éditoriale est vérifiée avant publication. | [Décidé] V-3 ; [Renvoi] M2 §7 ; C1 §10 |
| Les autres notifications système (rappels, notifications de service) sont neutres en application de C7 et de N-4. | [Renvoi] R15 C7 ; [Décidé] N-4 |

---

## 8. Rectification des alertes erronées

| Règle | Statut |
|---|---|
| **Une erreur importante déjà diffusée entraîne une rectification neutre.** Le détail de la correction est consultable dans l'application. | [Décidé] I-3 |
| **Les destinataires sont recalculés au moment de la rectification, selon les mêmes critères de diffusion.** | [Décidé] I-3 ; C-2 |
| **Aucune liste personnelle des destinataires de l'alerte initiale n'est conservée.** | [Décidé] I-3 ; C-2 |
| La rectification peut atteindre des utilisateurs qui n'avaient pas reçu l'alerte initiale. | [Décidé] I-3 |
| Les erreurs mineures ne déclenchent pas de notification supplémentaire. | [Décidé] I-3 |
| Une rectification portant sur un thème sensible suit le §7. | [Explicatif] |

---

## 9. Réinitialisation

| Règle | Statut |
|---|---|
| La confirmation de fin de réinitialisation suit R15 D20. | [Décidé] B-1 ; [Renvoi] R15 D20 |
| **Les rappels pédagogiques liés aux leçons, aux parcours et à l'ancienne progression sont supprimés lors de la réinitialisation, côté serveur.** | [Décidé] I-5 ; NS-1 |
| Les préférences générales de notification sont conservées. | [Décidé] I-5 ; [Renvoi] R15 D15 |
| La réinitialisation ne supprime pas les dossiers. Elle n'emporte pas pour autant de règle sur les rappels liés aux dossiers ni sur les autres rappels dont le comportement n'a pas été décidé : leur sort lors d'une réinitialisation n'est pas arbitré et reste à préciser dans L1 §6. Seule la suppression des rappels pédagogiques liés aux leçons, aux parcours et à l'ancienne progression est décidée. | [Renvoi] R15 §11.1, D13 ; L1 §6 ; sort de ces rappels [Ouvert] |

---

## 10. Suppression du compte et révocation des sessions

| Règle | Statut |
|---|---|
| **La confirmation de suppression du compte est affichée dans l'application uniquement si elle est au premier plan.** | [Décidé] N-5 |
| **Si l'application est en arrière-plan ou fermée, aucune notification de confirmation n'est envoyée.** | [Décidé] N-5 |
| **Pour la suppression du compte, N-5 remplace explicitement le mécanisme de confirmation de R15 D20.** | [Décidé] B-1 |
| **R15 D36 s'applique jusqu'au début de la procédure de suppression du compte.** À partir de ce moment, N-5 s'applique, y compris aux notifications d'incident : aucune notification système, information affichée seulement si l'application est au premier plan. | [Décidé] B-1 ; C-1 |
| **Toutes les sessions sont révoquées dès le début de la procédure.** | [Décidé] NS-2 ; [Renvoi] L1 §6 (révocation des sessions) |
| **Aucun jeton de notification n'est conservé après le début de la procédure.** | [Décidé] N-5 ; C-1 |
| Après la suppression effective du compte, aucune notification liée au compte n'est envoyée. | [Décidé] B-1 |
| L'information de confirmation, affichée lorsque l'application est au premier plan, et la consultation de l'état de l'opération au moyen de la référence temporaire de suppression (§11) sont deux éléments distincts. | [Explicatif] |

---

## 11. Référence temporaire de suppression

| Règle | Statut |
|---|---|
| Au début de la suppression du compte, **une référence temporaire d'opération est remise uniquement à l'appareil demandeur.** | [Décidé] NS-2 |
| Elle permet **uniquement** de consulter l'état de l'opération. | [Décidé] NS-2 |
| La référence n'est ni une session utilisateur, ni une prolongation de session, ni un jeton de notification. Elle ne rétablit aucun accès au compte et reste strictement limitée à la consultation de l'état de l'opération. | [Explicatif] (conséquence de NS-2) |
| **Son contenu** ne comporte aucune donnée personnelle. | [Décidé] NS-2 |
| Elle est **invalidée dès que la suppression est confirmée ou abandonnée**, ainsi qu'après toute restauration de sauvegarde (§13). | [Décidé] NS-2 et son complément |
| **Son fonctionnement** permet de consulter une opération déterminée ; elle doit donc être protégée contre le vol, la copie et la réutilisation. | [Décidé] NS-2 |
| Garanties techniques de cette protection | [Ouvert] ; [À vérifier] |
| **Sa qualification juridique** ne se déduit pas de la seule absence de donnée personnelle dans son contenu. La référence n'est pas présentée comme anonyme au sens juridique. | [Explicatif] ; qualification [À vérifier] |

---

## 12. Jetons de notification

| Règle | Statut |
|---|---|
| Les notifications font partie des fonctionnalités ordinaires, soumises au compte ; l'aide immédiate ne produit aucune notification liée à sa consultation. | [Renvoi] I1 §2 ; AI1 §3 |
| **Aucun jeton de notification n'est conservé après le début de la procédure de suppression du compte.** | [Décidé] N-5 ; C-1 |
| **Après toute restauration de sauvegarde, tous les jetons de notification sont invalidés** (§13). | [Décidé] C-3 |
| Si le jeton constitue une donnée personnelle, il relève des sauvegardes courtes, comme toute catégorie contenant une donnée personnelle. | [Renvoi] L1 §3 (classification des sauvegardes) |
| Le principe de minimisation s'applique aux jetons comme à toute donnée. Ce principe général ne définit pas, à lui seul, le cycle de vie des jetons de notification. | [Renvoi] référentiel §9.1 |
| Conditions de création d'un jeton, rattachement au compte et à l'appareil, suppression lors de la déconnexion de l'appareil, durée de conservation, liste exacte des données techniques | [Ouvert] |
| **Refus ou retrait de l'autorisation système :** le refus ou le retrait empêche l'affichage des notifications système sur l'appareil. Un jeton peut néanmoins rester présent côté serveur et devenir inutilisable. Le traitement de ce jeton (moment de sa suppression, éventuelle durée de grâce, synchronisation) relève du cycle de vie du jeton et n'est pas arbitré. | [Explicatif] ; traitement [Ouvert] |

---

## 13. Sauvegarde et restauration

| Règle | Statut |
|---|---|
| **Après toute restauration de sauvegarde, tous les jetons de notification sont invalidés.** Les appareils se réenregistrent à leur prochaine ouverture de l'application. | [Décidé] C-3 |
| **Après toute restauration de sauvegarde, toutes les références temporaires de suppression sont également invalidées.** Un appareil ne peut plus suivre l'opération au moyen d'une référence restaurée. | [Décidé] (complément à NS-2) |
| **Aucun historique des déconnexions ni aucun historique supplémentaire n'est conservé** pour reconstruire la validité des jetons ou des références. | [Décidé] C-3 ; complément à NS-2 |
| **Après une restauration, les notifications prévues par R15 D20 et D36 peuvent être retardées** jusqu'à la prochaine ouverture de l'application et au réenregistrement du jeton. Cette conséquence est acceptée, sans exception. D20 reste applicable à la réinitialisation. D36 ne peut s'appliquer après une restauration que tant que la procédure de suppression du compte n'a pas commencé ; dès le début de cette procédure, N-5 remplace D36 : aucune notification système n'est envoyée, y compris pour les incidents, et une information peut uniquement être affichée si l'application est au premier plan (§10). | [Décidé] V-4 ; B-1 ; C-1 |
| Procédure générale de restauration et réapplication des suppressions | [Renvoi] L1 §6 ; R15 D29 |

---

## 14. Données, éléments techniques et traitements

### 14.1 Données dont la conservation est établie

| Donnée | Fondement | Modalités |
|---|---|---|
| Préférences de notification | Réglages fonctionnels conservés lors d'une réinitialisation ([Renvoi] R15 D15) ; supprimées avec le compte ([Renvoi] L1 §6) | Durée et inscription au registre : articulation L1 |
| Rappels demandés | Évalués côté serveur ; rappels pédagogiques supprimés côté serveur lors d'une réinitialisation ([Décidé] N-3, NS-1, I-5) | Durée, rattachement et sort lors de la suppression du compte [Ouvert] ; sort, lors d'une réinitialisation, des rappels liés aux dossiers et des autres rappels dont le comportement n'a pas été décidé [Ouvert] (§9 ; L1 §6) |
| Jetons de notification | Leur invalidation et leur non-conservation après le début de la suppression du compte sont décidées ([Décidé] C-3, N-5, C-1) | Cycle de vie [Ouvert] (§12) |

### 14.2 Éléments dont l'existence et la conservation restent à définir

| Élément | Statut |
|---|---|
| Données d'affichage des alertes dans l'application, dont un éventuel état « lu » | [Ouvert] |
| Données transmises au prestataire de notification et éventuels accusés de livraison | [Ouvert] |

### 14.3 Références temporaires soumises à une invalidation décidée

| Élément | Statut |
|---|---|
| Référence temporaire de suppression : invalidée à la confirmation ou à l'abandon de la suppression, et après toute restauration de sauvegarde (§11, §13) | [Décidé] NS-2 et son complément |

### 14.4 Traitements temporaires

| Traitement | Statut |
|---|---|
| Évaluation des rappels côté serveur | [Explicatif] |
| Transmission des notifications | [Explicatif] |
| Recalcul des destinataires d'une rectification, sans conservation de liste (§8) | [Décidé] C-2 |

Ces traitements ne constituent pas nécessairement une conservation ; leur traitement au regard du registre relève de L1.

### 14.5 Statistiques

| Règle | Statut |
|---|---|
| Aucun événement statistique lié aux notifications n'est défini ; un éventuel événement futur suivrait la procédure de M7 §2. | [Renvoi] M7 §2 |

---

## 15. Remplacements explicites

| Document et section | Règle remplacée | Règle applicable | Portée |
|---|---|---|---|
| R15 §12.3, D20 | Confirmation de fin de suppression dans l'application et par notification système | N-5 : confirmation affichée seulement si l'application est au premier plan, aucune notification système | **Uniquement la suppression du compte.** D20 continue de s'appliquer à la réinitialisation. |
| R15 §12.3, D36 | Information de l'utilisateur pendant un incident | D36 s'applique jusqu'au début de la procédure de suppression du compte ; ensuite N-5 | **Uniquement la suppression du compte, à partir du début de la procédure.** |

R15 n'est pas modifié. Ce tableau établit la règle applicable pour le périmètre précisé.

---

## 16. Articulation avec les autres documents

| Document | Articulation |
|---|---|
| **Référentiel global** | §3.5, §4.7, §4.8, §5.1, §5.2, §6.4, §9.1, §12.1, §12.3, §13.2 |
| **Document fondateur** | §2.3 (suggérer, jamais imposer) |
| **Piliers** | P3 §7 ; P4 §6.2 |
| **R15** | §3 (aucune gamification) ; D13, D15 (§11.1) ; §11.3 ; D29 (§11.2) ; D20, D36, C7 et information de purge (§12.3) |
| **M2** | §3, §4, §7, §8, §12.1 |
| **M7** | §2 |
| **I1** | §2 (principes d'accès) ; §5.1 (cloisonnement) ; §7 (personnalisation) |
| **L1** | §3 (registre, classification des sauvegardes) ; §5 (synchronisation et hors ligne, L-3) ; §6 (réinitialisation, suppression et restauration) |
| **C1** | §8, §10, §11 |
| **AI1** | §1, §3 |

---

## 17. Points restant à traiter

### 17.1 Décisions techniques à prendre ultérieurement [Ouvert]

- Catégories exactes de préférences.
- Plafonds de fréquence, regroupement et heures de silence.
- Modèles de textes neutres.
- Forme de l'affichage des alertes dans l'application et éventuel état « lu ».
- Structure des données transmises au prestataire de notification.
- Affichage de la date prévue d'un rappel livré en retard.
- Sort, lors d'une réinitialisation, des rappels liés aux dossiers et des autres rappels dont le comportement n'a pas été décidé (§9 ; L1 §6). Seule la suppression des rappels pédagogiques liés aux leçons, aux parcours et à l'ancienne progression est décidée.
- Cycle de vie du jeton : conditions de création, rattachement, suppression lors de la déconnexion, durée de conservation, données techniques, traitement en cas de refus ou de retrait de l'autorisation système.
- Garanties techniques de protection de la référence temporaire de suppression [À vérifier].
- Non-exploitation des accusés de livraison et des statistiques des prestataires.

### 17.2 Sujets organisationnels à définir [Ouvert]

- Désignation des personnes chargées de rédiger, valider et rectifier les alertes, et d'apprécier le caractère important d'une erreur.

### 17.3 Vérifications juridiques [À vérifier]

- Qualification juridique de la référence temporaire de suppression et du jeton de notification.

### 17.4 Évolution de périmètre à arbitrer ultérieurement

- Futures alertes issues de sources externes. Toute évolution de ce type devra respecter les conditions d'approbation préalable du référentiel (§12.3). Les sources utilisées ne sont pas décidées.

### 17.5 Articulations documentaires (hors décision N1)

- Inscription au registre de L1 des données du §14, durées comprises, et sort des rappels lors de la suppression du compte (complément de L1 prévu dans l'ordre de travail).
- Renvoi facultatif depuis I1 §9 vers le présent document.
