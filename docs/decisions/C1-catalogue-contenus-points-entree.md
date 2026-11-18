# C1 — Catalogue des contenus et des points d'entrée

- **Statut :** ce document consolide les décisions validées relatives au catalogue des contenus et des points d'entrée ; les points non arbitrés y restent explicitement indiqués comme ouverts.
- **Date de consolidation :** 9 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`).
- **Documents liés :** M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), L1 (`docs/decisions/L1-cycle-de-vie-des-donnees.md`), documents de référence de `docs/reference/`.

---

## 0. Statut, sources et légende

Ce document consigne les décisions validées sur le catalogue des contenus et des points d'entrée. Les formulations sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1).

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage ou proposition d'architecture validé par le fondateur |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Explicatif]** | Formulation qui décrit ou précise, sans créer de règle |
| **[Ouvert]** | Point technique ou organisationnel non décidé |
| **[Conséquence]** | Conséquence documentaire d'une règle décidée |

---

## 1. Objet et périmètre

| Règle | Statut |
|---|---|
| Le catalogue est la référence unique de ce qui existe dans Élan et de ce qui est permis : contenus, expériences, points d'entrée, outils référencés, types d'événements, capacités, état opérationnel. | [Décidé] |
| Le catalogue ne contient aucune donnée personnelle. | [Décidé] |
| Il laisse aux autres composants : l'exécution des parcours (moteur de parcours guidés), la progression (R15), les statistiques (M7), le cycle de vie des données (L1), le contrôle des appels à l'IA, la logique métier des outils et les données des dossiers (I1). | [Explicatif] |
| La structure du catalogue est commune ; les contenus, les classifications et les règles métier restent propres à chaque pilier, sans symétrie imposée. | [Renvoi] référentiel §1.2, §2.2 |

---

## 2. Objets et identifiants

| Objet | Définition | Statut |
|---|---|---|
| **Contenu** | Unité éditoriale versionnée qui informe sans recueillir de donnée | [Explicatif] ; référentiel §2.3, §6 |
| **Activité** | Interaction pédagogique ; chaque élément évalué porte sa nature | [Renvoi] R15 P5, P7 |
| **Point d'entrée** | Plus petite unité qui invite à révéler une situation ou permet de la déduire | [Renvoi] M2 §2 |
| **Outil** | Réponse fonctionnelle à un besoin précis, appuyée sur un moteur | [Renvoi] référentiel §2.3 ; R15 D3, A8 |
| **Expérience** | Assemblage d'étapes autour d'une situation et d'un résultat utile | [Renvoi] référentiel §1.3 |
| **Parcours** | Ordre et embranchements des étapes d'une expérience | [Explicatif] ; référentiel §4.7 |
| **Capacité** | Capacité vérifiable, avec son critère défini par des humains | [Renvoi] R15 D5, D6, O8 |
| **Type d'événement** | Événement statistique autorisé pour une expérience | [Renvoi] M7 §2 |
| **Contenu d'aide immédiate** | Contenu fixe validé par des humains (voir §9) | [Renvoi] référentiel §5.1 |
| **Alerte d'information générale** | Contenu éditorial signalant une information pertinente (voir §10) | [Explicatif] |

| Règle | Statut |
|---|---|
| Chaque objet du catalogue est désigné par un **identifiant stable.** | [Décidé] |
| **Un identifiant retiré n'est jamais réutilisé.** | [Décidé] |
| **L'historique du catalogue** conserve, avec leurs dates : les versions publiées des expériences et leur composition (points d'entrée référencés, types d'événements) ; les définitions des objets retirés ; les versions des fiches de classement (statut, date, version du contenu) ; les changements d'état opérationnel et les retraits des types d'événements, avec leurs définitions. | [Décidé] |
| Chaque version d'une fiche de classement est rattachée au point d'entrée concerné par son identifiant stable. | [Conséquence] (identifiants stables, §2 ; fiche par point d'entrée, M2 §5) |
| L'historique ne contient pas l'identité du validateur. L'inclusion éventuelle de la référence technique vers cette identité suit son classement, qui reste à préciser (§14 ; L1 §3). | [Décidé] ; référence [Ouvert] |
| **L'historique reste récupérable après une restauration complète,** y compris lorsque la sauvegarde restaurée du catalogue est ancienne. Il reste récupérable et disponible tant qu'un agrégat dont l'examen en dépend demeure soumis à cet examen : aussi longtemps qu'une sauvegarde contenant de tels agrégats peut encore être restaurée, et, pour les agrégats déjà restaurés, jusqu'à la fin de leur examen. Le compteur indépendant permet de détecter une troncature ou un retour en arrière de l'historique ; il ne permet aucune reconstruction (L1 §6). | [Décidé] ; durée exacte et mécanisme [Ouvert] |
| L'historique sert à l'examen des agrégats statistiques restaurés ; s'il n'est plus disponible ou si sa continuité ne peut pas être établie, les agrégats concernés restent inaccessibles. | [Renvoi] L1 §6 |
| Les codes d'erreur normalisés sont génériques et partagés ; aucun n'est propre à un point d'entrée. Leur rattachement éventuel à des points d'entrée est documenté dans le catalogue, selon les règles applicables aux événements spécifiques, sans champ ajouté à l'événement. | [Décidé] ; [Renvoi] M7 §2 |
| Une forme adaptée d'un événement reçoit un nouvel identifiant de type. Le retrait de l'ancien type est conservé dans l'historique. | [Décidé] ; [Renvoi] M2 §12.1 |
| Filiation des objets en cas de fusion | [Ouvert] |

---

## 3. Classification thématique

| Règle | Statut |
|---|---|
| Chaque élément est rattaché à un pilier et à une ou plusieurs dimensions, sous forme de données propres à chaque pilier. | [Explicatif] |
| Niveaux de progression de référence : débutant, intermédiaire, avancé. | [Renvoi] document fondateur §2.2 |

---

## 4. Contenus

| Règle | Statut |
|---|---|
| Un contenu porte notamment : son type, son niveau, ses sources, la nature de ses affirmations, son type de mise à jour, sa date de revue et sa version. | [Explicatif] ; référentiel §3.3, §6.2, §6.3 |
| **Revue dépassée, selon le type de mise à jour :** concepts stables, accès maintenu ; règles évolutives, retrait jusqu'à vérification ; données périodiques, retrait jusqu'à actualisation et validation. | [Décidé] arbitrage 3 |
| Le retrait est automatique ; la remise en ligne passe toujours par une validation humaine. | [Décidé] arbitrage 3 |
| Le retrait d'un contenu ne modifie pas la progression. | [Renvoi] R15 D9 |
| **Exception de l'aide immédiate :** voir §9. | [Décidé] arbitrage 5 |
| Le retrait selon la date de revue suppose une référence de temps fiable, qui ne repose ni sur la seule horloge de l'appareil, ni sur sa seule appréciation (voir §7). | [Décidé] (correction validée) ; mécanisme [Ouvert] |
| Les versions publiées et leurs dates sont conservées dans l'historique (§2). | [Décidé] |
| Caractère non modifiable d'une version publiée ; lieu de calcul du retrait selon la date | [Ouvert] |

---

## 5. Points d'entrée

| Règle | Statut |
|---|---|
| **Un point d'entrée est un objet unique, partagé et référencé** entre les expériences et les outils qui l'utilisent. | [Décidé] arbitrage 4 |
| Son classement et son état opérationnel s'appliquent à tous ses usages. | [Décidé] arbitrage 4 |
| Le catalogue permet de retrouver l'ensemble des usages de chaque point d'entrée. | [Décidé] arbitrage 4 |
| Les usages historiques de chaque point d'entrée sont retrouvables à partir de la composition historique des expériences (§2). | [Décidé] |
| Aucun contenu ne recopie un point d'entrée : il y fait référence par son identifiant. | [Décidé] (conséquence de P-C, §8) |
| Fiche de classement, validation humaine, réexamen, et traitement comme sensible d'un point sans fiche validée | [Renvoi] M2 §5, §6, §7 |
| **Le catalogue ne contient aucune identité de validateur, ni aucune donnée permettant directement de l'identifier.** L'identité des validateurs est conservée séparément, conformément à L1. La référence technique qui relie une fiche à cette identité ne doit pas compromettre la séparation des sauvegardes. Une référence pseudonyme reste une donnée personnelle dès lors qu'elle permet une réidentification ; elle est traitée comme telle. | [Décidé] ; [Renvoi] L1 §3, §6 (complément L-1) |
| Format de la fiche et définition opérationnelle du point d'entrée | [Renvoi] M2 §5, §14.2 ([Conception]) |

---

## 6. Expériences, parcours, activités et outils

| Règle | Statut |
|---|---|
| Une expérience assemble des contenus, des activités, des outils et des points d'entrée autour d'un résultat utile. | [Renvoi] référentiel §1.3 |
| L'expérience déclare l'action significative qui vaut « Première exploration ». | [Renvoi] R15 D2 |
| Un outil utilisé seul ne déclenche jamais de progression. | [Renvoi] R15 D3, A8 |
| Les critères de vérification des capacités sont définis par des humains. | [Renvoi] R15 D5 |
| Un parcours guidé qui détecte une situation potentiellement urgente oriente immédiatement vers l'aide immédiate. | [Renvoi] référentiel §4.7 |
| Formats court, standard et atelier ; liste des capacités | [Renvoi] R15 O6, O8 (ouverts) |
| Séparation entre la définition d'un parcours dans le catalogue et son exécution par le moteur ; attribut « IA permise » par étape | [Ouvert] |

---

## 7. État opérationnel

| Règle | Statut |
|---|---|
| **Le contenu publié et l'état opérationnel sont séparés.** L'état change sans republication. | [Décidé] P-A |
| États d'un point d'entrée : actif, ou masqué et désactivé. | [Renvoi] M2 §12.1 |
| Période intermédiaire, partie générale accessible, blocage de repli obligatoire, délai de réexamen et escalade | [Renvoi] M2 §12.1 |
| Types d'événements autorisés, suspendus ou retirés | [Renvoi] M2 §12.1 ; M7 §2, §8.1 |
| Les changements d'état opérationnel des types d'événements (autorisé, suspendu, retiré) sont conservés, avec leurs dates, dans l'historique (§2). | [Décidé] |
| **L'application peut utiliser hors ligne un état mis en cache pendant une durée de validité limitée.** À l'expiration, les éléments concernés sont bloqués jusqu'à la reconnexion. L'aide immédiate reste accessible. | [Décidé] arbitrage 2 |
| Durée de validité de l'état en cache | [Ouvert] |
| La durée de validité de l'état en cache et la version minimale imposée déterminent la fenêtre pendant laquelle plusieurs versions d'une expérience peuvent coexister, prise en compte par l'union prudente (L1 §6). | [Explicatif] |
| **La validité de l'état en cache ne repose ni sur la seule horloge de l'appareil, ni sur sa seule appréciation.** Elle doit pouvoir être établie de façon fiable par une référence de validité maîtrisée côté serveur, dans le respect de P-D. Le mécanisme technique reste ouvert. | [Décidé] (correction validée) ; mécanisme [Ouvert] |
| **À l'expiration, sont bloqués les expériences et outils dont la sécurité dépend de l'état.** Restent accessibles les contenus purement informatifs (sans point d'entrée, sans événement, sans dépendance à l'état) et l'aide immédiate. | [Décidé] arbitrage 6 |
| Méthode de calcul de la dépendance d'un élément à l'état | [Ouvert] |
| Un contenu informatif retiré manuellement ne disparaît d'un appareil hors ligne qu'à sa reconnexion. | [Explicatif] (limite) |

---

## 8. Accès et résolution

| Règle | Statut |
|---|---|
| **La règle d'accès est matérialisée pour chaque élément :** « sans compte » pour la seule aide immédiate, « compte requis » partout ailleurs. | [Décidé] P-E ; arbitrage 1 ; [Renvoi] I1 §2 |
| L'aide immédiate sans compte ne donne accès ni à la progression, ni aux dossiers, ni aux outils personnalisés, ni à l'abonnement ; un lien vers une autre fonctionnalité mène à la création de compte. | [Décidé] arbitrage 1 ; [Renvoi] I1 §2 |
| **Les objets sont résolus par leur identifiant** dans tous les canaux d'accès : étapes, outils utilisés seuls, liens, recherche, bibliothèque, suggestions, liens profonds, notifications. | [Décidé] P-C |
| Un point d'entrée masqué est neutralisé dans tous ces canaux, ainsi que dans les contenus en cache à la reconnexion. | [Décidé] (conséquence de l'arbitrage 4 et de P-C) |
| **Les contrôles et décisions d'autorisation sont effectués côté serveur.** Le serveur ne se fie pas aux seules indications de l'appareil. | [Décidé] P-D ; mise en œuvre [Ouvert] |
| Les envois tardifs depuis un appareil sont refusés selon les règles existantes. | [Renvoi] M2 §12.1 ; R15 §9, §11.1, §11.3 |

---

## 9. Contenus d'aide immédiate

| Règle | Statut |
|---|---|
| Accessibles dès l'écran d'accueil, sans compte, hors ligne, et après l'expiration de l'état en cache. | [Décidé] arbitrages 1, 2, 6 ; [Renvoi] I1 §2 |
| Les contenus d'aide immédiate sont rédigés, vérifiés et approuvés sous responsabilité humaine avant publication. Le fonctionnement du service ne dépend pas de l'IA. | [Renvoi] référentiel §5.1 ; P3 D6 ; P4 §6.1 |
| **Jamais retirés automatiquement** lorsque leur date de revue est dépassée ; revue prioritaire obligatoire et escalade en cas de retard. | [Décidé] arbitrage 5 |
| Chaque contenu affiche « Vérifié le … », c'est-à-dire la date de la dernière vérification humaine. | [Décidé] AI-3 |
| Un point de l'aide reclassé est neutralisé dans tous ses usages ; le service général d'aide immédiate reste accessible. | [Renvoi] M2 §12.1 ; arbitrage 4 |
| Fonctionnement du service | [Renvoi] AI1 |
| Délai de la revue prioritaire, destinataire et rythme de l'escalade ; rafraîchissement des contenus en cache | [Ouvert] |

---

## 10. Alertes d'information générale

| Règle | Statut |
|---|---|
| Les alertes d'information générale sont des contenus éditoriaux validés par des humains, sans donnée issue des dossiers ni dépendance initiale à des sources externes. | [Décidé] N-1 |
| En cas de doute sur le caractère sensible d'une alerte, son texte diffusé est neutralisé ; sa classification éditoriale est vérifiée avant publication. | [Décidé] V-3 ; [Renvoi] M2 §3, §7 |
| Envoi, préférences, rectifications | [Renvoi] N1 |
| Liste des attributs d'une alerte ; traçabilité d'une rectification dans le circuit éditorial | [Ouvert] |

---

## 11. Circuit éditorial et publication

| Règle | Statut |
|---|---|
| Seules les versions publiées sont diffusées aux applications. | [Explicatif] |
| Validations humaines requises : sources (référentiel §6.4) ; classement des points d'entrée (M2 §6) ; aide immédiate (référentiel §5.1) ; critères de capacité (R15 D5) ; spécimens et documents d'acteurs privés (R15 P9, O9) ; événements spécifiques (M7 §2) ; événements après reclassement (M2 §12.1) ; évolution d'une règle (R15 D9). | [Renvoi] |
| Contrôle avant publication | [Renvoi] M2 §6 |
| États éditoriaux et transitions associées ; rôles internes du circuit | [Ouvert] |

---

## 12. Reclassement

| Règle | Statut |
|---|---|
| Lors d'un reclassement, le catalogue change l'état du point d'entrée, en retrouve tous les usages et diffuse le nouvel état. | [Décidé] arbitrage 4 ; P-A |
| Toutes les autres règles du reclassement (suspension, purges, traces, réexamen, validation, délai, information de l'utilisateur) | [Renvoi] M2 §12.1 ; R15 §9, §12.3 |
| Mécanisme de transmission des périodes de suspension au service statistique, au niveau de l'expérience et sans désigner le point | [Ouvert] ; [Renvoi] M7 §3 |
| Le reclassement est enregistré dans l'historique par une nouvelle version datée de la fiche de classement (§2). Les suspensions et retraits de types d'événements qui en résultent y sont également conservés. | [Décidé] |

---

## 13. Relations avec les autres composants

| Composant | Ce qu'il utilise du catalogue | Statut |
|---|---|---|
| Progression | Actions significatives, capacités, classement des points | [Explicatif] ; [Renvoi] R15 |
| Statistiques | Types d'événements autorisés, suspendus ou retirés ; historique, pour l'examen des agrégats restaurés (L1 §6) | [Explicatif] ; [Renvoi] M7 |
| Moteur de parcours guidés | Définition des expériences | [Explicatif] |
| Contrôle de l'IA | Caractère sensible des points | [Explicatif] ; [Renvoi] M2 §8, §11 |
| Cycle de vie des données | État opérationnel lors des restaurations | [Renvoi] L1 §6 |
| Service d'aide immédiate | Contenus d'aide | [Renvoi] AI1 |
| Notifications | Alertes d'information générale | [Renvoi] N1 |

Dans tous les cas, les décisions d'autorisation restent prises côté serveur (P-D, §8).

---

## 14. Données et conservation

| Règle | Statut |
|---|---|
| Le catalogue ne contient aucune identité de validateur, ni aucune donnée permettant directement de l'identifier (§5). | [Décidé] |
| Le catalogue relève des sauvegardes longues ; l'identité des validateurs est conservée séparément, en sauvegarde courte. Le classement de la référence technique qui relie les fiches à cette identité, et son traitement au regard de la séparation des sauvegardes, restent à préciser. | [Renvoi] L1 §3, §6 (L-1 et son complément) ; classement de la référence [Ouvert] |
| L'historique ne contient pas l'identité du validateur. L'inclusion éventuelle de la référence technique vers cette identité, et son traitement, suivent le classement de cette référence, qui reste à préciser. | [Décidé] ; référence [Ouvert] ; [Renvoi] L1 §3 |
| L'historique reste récupérable et disponible tant qu'un agrégat dont l'examen en dépend demeure soumis à cet examen : aussi longtemps qu'une sauvegarde contenant de tels agrégats peut encore être restaurée, et, pour les agrégats déjà restaurés, jusqu'à la fin de leur examen. Aucune durée chiffrée n'est fixée ; la durée exacte, les éventuelles obligations supplémentaires, la famille de sauvegarde et le mode de conservation sont à préciser. | [Décidé] ; modalités [Ouvert] ; [Renvoi] L1 §3 |

---

## 15. Articulation

| Document | Articulation |
|---|---|
| **Référentiel global** | §1.2, §1.3, §2, §3.3, §4.7, §5.1, §6, §12.1 |
| **Document fondateur** | §2.2 (niveaux) ; §2.3 (accès libre, au sens précisé par I1 §9) |
| **M2** | §2, §5 à §8, §12.1, §14.2 |
| **M7** | §2, §3, §8.1 |
| **R15** | D2, D3, D5, D6, D9, P5, P7, P9, O6, O8, O9, A8, §9, §11, §12.3 |
| **I1** | §2 (compte obligatoire, aide sans compte) |
| **L1** | §3 (sauvegardes, référence vers l'identité des validateurs), §6 (restauration) |
| **AI1, N1** | Documents à venir, qui renverront au présent document |

---

## 16. Points restant à traiter [Ouvert]

### 16.1 Points techniques

- Durée de validité de l'état en cache et contrôle fiable de cette validité, sans dépendre uniquement de l'horloge de l'appareil.
- Mécanisme de diffusion de l'état opérationnel ; version minimale imposée de l'application.
- Méthode de calcul de la dépendance d'un élément à l'état.
- Attribut « IA permise » par étape.
- Mécanisme de transmission des périodes de suspension au service statistique.
- Séparation entre la définition et l'exécution des parcours.
- Caractère non modifiable des versions publiées ; lieu de calcul du retrait selon la date de revue.
- Format structuré des contenus ; attribution du type de mise à jour ; calendrier des revues.
- Mécanisme de la référence technique vers l'identité des validateurs, son caractère éventuellement personnel et son classement au regard de la séparation des sauvegardes.
- Rafraîchissement des contenus d'aide immédiate en cache.
- Liste des attributs d'une alerte ; traçabilité d'une rectification.
- Mise en œuvre des contrôles côté serveur.
- Mécanisme de conservation et de récupération de l'historique après une restauration complète ; résilience ; articulation avec le compteur indépendant.
- Durée exacte de conservation de l'historique, dans le respect du principe minimal (§14).
- Filiation des objets en cas de fusion.
- Rétablissement de l'état opérationnel des points d'entrée (masquage, désactivation) après une restauration du catalogue : exigence de conception (M2 §12.1, §14.2), distincte de l'historique (§2).

### 16.2 Points organisationnels

- États éditoriaux, transitions et rôles internes du circuit de publication.
- Délai de la revue prioritaire de l'aide immédiate, destinataire et rythme de l'escalade.

### 16.3 Points ouverts par décision

- Attribut d'offre (gratuite ou abonnement), en attente du modèle économique.
