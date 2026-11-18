# I1 — Identité, accès et cloisonnement des données

- **Statut :** décisions validées par le fondateur, consolidées dans ce document.
- **Date de consolidation :** 8 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`).
- **Documents liés :** R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), documents de référence de `docs/reference/`.

---

## 0. Statut, sources et légende

Ce document consigne les décisions validées sur l'identité, l'accès et le cloisonnement des données. Les formulations sont des restitutions structurées, pas des citations mot pour mot. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1).

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Corpus]** | Règle issue d'un document de référence |
| **[Conception]** | Choix ou exigence technique délégué, sans arbitrage de fond |
| **[À vérifier]** | Faisabilité technique ou conformité juridique non démontrée |
| **[À compléter]** | Paramètre ou référence qui manque encore |

---

## 1. Objet et périmètre

Ce document fixe :

- le principe du compte et de l'accès gratuit ;
- l'âge minimal et les modes d'inscription ;
- le caractère individuel du dossier entreprise au lancement ;
- le cloisonnement des dossiers personnel, professionnel et entreprise, et les passerelles entre eux ;
- les actions soumises à réauthentification ;
- les données utilisables pour la personnalisation.

La progression relève de R15, les sujets sensibles de M2, les statistiques d'utilisation de M7. Ce document n'en reprend que les règles qui touchent l'identité, l'accès et le cloisonnement.

---

## 2. Principes d'accès

| Règle | Statut |
|---|---|
| **Un compte est obligatoire** pour accéder aux fonctionnalités ordinaires d'Élan, y compris à l'offre gratuite. | [Décidé] |
| La création de compte reste **simple et rapide.** | [Décidé] |
| **Aucun moyen de paiement** n'est exigé pour l'offre gratuite. | [Décidé] |
| **L'abonnement est facultatif** et distinct de la création du compte. | [Décidé] |
| La progression et les données sont rattachées au compte, dans le respect des règles de séparation, de sensibilité et de protection des documents de référence et de R15, M2 et M7. | [Décidé] |
| **L'aide immédiate reste accessible dès l'écran d'accueil, sans compte, hors ligne et sans condition d'âge.** Cet accès ne donne accès ni à la progression, ni aux dossiers, ni aux outils personnalisés, ni à l'abonnement. | [Décidé] ; référentiel §5.1 |
| Aucun questionnaire n'est imposé lors du premier lancement. | [Corpus] document fondateur §2.3 |
| Les statistiques d'utilisation ne sont jamais liées au compte, même si tout utilisateur des fonctionnalités ordinaires dispose d'un compte. | [Décidé] M7 §2 |

---

## 3. Âge et inscription — I-1

| Règle | Statut |
|---|---|
| **L'accès au compte est ouvert à partir de 15 ans.** | [Décidé] I-1 |
| **Inscription simple par e-mail, Google ou Apple.** | [Décidé] I-1 |
| **Pas de vérification systématique par pièce d'identité.** | [Décidé] I-1 |
| Aucun moyen de paiement n'est exigé pour un compte gratuit. | [Décidé] I-1 |
| **La validation juridique des conditions applicables aux mineurs et des mécanismes de consentement est une condition préalable au lancement.** | [Décidé] I-1 ; contenu : [À vérifier] |
| Mode de constat de l'âge, sans vérification systématique par pièce d'identité | [À vérifier], avec la validation juridique |
| L'aide immédiate reste accessible sans compte et sans condition d'âge. | [Décidé] (voir §2) |

Cette décision remplace le document fondateur §2.1 sur ce seul point (voir §8).

---

## 4. Dossier entreprise — I-2

| Règle | Statut |
|---|---|
| **Le dossier entreprise est individuel au lancement.** | [Décidé] I-2 |
| **Aucun accès direct d'un associé ou d'un comptable.** | [Décidé] I-2 |
| Le partage du dossier entreprise pourra être étudié dans une évolution ultérieure. Il n'est ni prévu ni autorisé à ce stade. | [Décidé] I-2 |
| **Réutilisation au sein du dossier entreprise :** chaque réutilisation suppose une sélection explicite des données par l'utilisateur, une finalité clairement indiquée et une utilisation ponctuelle ou temporaire. Aucune transmission automatique ni autorisation permanente. Les règles de sensibilité (M2) restent applicables. Les informations déjà renseignées peuvent être proposées à la sélection, sans reprise silencieuse. | [Décidé] arbitrage transversal 18 (FR1, 11 novembre 2026) ; remplace la formulation issue du pilier 2, §3 (§8) |

---

## 5. Cloisonnement des dossiers et passerelles

### 5.1 Cloisonnement

| Règle | Statut |
|---|---|
| Les données personnelles, professionnelles et d'entreprise sont **cloisonnées** dans trois dossiers distincts : personnel, professionnel et entreprise. | [Décidé] ; référentiel §9.2 ; pilier 3, §4 et §8 |
| Le dossier professionnel et le dossier entreprise restent distincts, même lorsqu'une personne cumule un emploi salarié et une activité indépendante. | [Corpus] pilier 3, §4 |
| Les espaces de litiges (P4 D3-A) et de difficultés financières ou de surendettement (P4 D3-B) restent distincts. | [Corpus] pilier 4 |
| Les informations sensibles de P3 D6 ne sont pas réutilisées automatiquement dans le profil professionnel, les candidatures, le portfolio ou les autres dimensions. | [Corpus] pilier 3, §8.3 |
| Les documents sensibles ne sont pas conservés automatiquement : archivage uniquement sur choix explicite de l'utilisateur. L'analyse d'un document ne suppose pas sa conservation. | [Corpus] référentiel §9.3 ; pilier 3, §8.2 |
| Les données sensibles bénéficient de protections spécifiques, notamment le traitement en zone éphémère lorsqu'il est prévu. Les outils de dossier, de suivi et de plan qui portent sur un point d'entrée sensible ne conservent rien au-delà de la demande en cours. | [Décidé] M2 §8 ; R15 O4, §13.4 |
| Aucune donnée d'un dossier n'est utilisée dans un autre dossier sans passerelle explicitement autorisée. | [Décidé] |
| **Réutilisation au sein du dossier personnel :** chaque réutilisation suppose une sélection explicite des données par l'utilisateur, une finalité clairement indiquée et une utilisation ponctuelle ou temporaire. Aucune autorisation durable ni transmission silencieuse. Les règles de sensibilité (M2) restent applicables. Les règles propres aux dossiers professionnel (P3, DP-5 et DP-8) et entreprise (§4) ne sont pas étendues automatiquement. | [Décidé] arbitrages transversaux 6 et 17 (FR1, 11 novembre 2026) |
| Isolation technique des dossiers | [Conception] ; [À vérifier] |

### 5.2 Passerelles entre dossiers

| Règle | Statut |
|---|---|
| Une passerelle (également appelée pont) entre dossiers repose sur un **consentement explicite** et une **finalité définie.** | [Décidé] |
| Un consentement donné pour une passerelle n'autorise aucun autre usage futur. | [Décidé] |
| Une passerelle prend la forme soit d'une **copie ponctuelle**, soit d'une **utilisation temporaire.** | [Décidé] I-3 |
| La création d'une passerelle exige une réauthentification (§6). | [Décidé] I-4 |
| Une donnée sensible n'est jamais transmise par une passerelle : l'utilisateur la ressaisit volontairement dans le cadre approprié. | [Décidé] M2 §9 ; pilier 2, Étape 0 |
| Traçabilité proportionnée des passerelles : contenu de la trace et durée de conservation | [À compléter] |

### 5.3 Révocation d'une passerelle — I-3

| Règle | Statut |
|---|---|
| **Une copie ponctuelle reste dans le dossier de destination après révocation.** L'utilisateur peut la supprimer. | [Décidé] I-3 |
| **Une utilisation temporaire cesse immédiatement à la révocation.** | [Décidé] I-3 |
| **Aucun nouveau transfert n'est autorisé après révocation.** | [Décidé] I-3 |

---

## 6. Réauthentification — I-4

| Règle | Statut |
|---|---|
| Une réauthentification est exigée pour : **la suppression du compte ; l'export des données ; le changement de méthode de connexion ; la création d'une passerelle entre dossiers.** | [Décidé] I-4 |
| La réinitialisation de la progression reste régie par la double confirmation de R15 (D16), sans réauthentification supplémentaire imposée par I-4. | [Décidé] I-4 ; R15 D16 |
| **La réauthentification est proportionnée au risque.** Elle n'est pas exigée pour chaque consultation ou réutilisation interne ordinaire. Les cas ci-dessus restent applicables. | [Décidé] arbitrage transversal 24 (FR1, 11 novembre 2026) |
| Seuils et actions soumis à réauthentification au-delà des cas ci-dessus | [À compléter] arbitrage transversal 24 |
| Modalités de la réauthentification | [Conception] |

---

## 7. Personnalisation — I-5

| Règle | Statut |
|---|---|
| **La personnalisation utilise uniquement la progression non sensible et les préférences déclarées.** | [Décidé] I-5 ; R15 §13.2 |
| **Aucun dossier personnel, professionnel ou entreprise n'est consulté automatiquement** pour la personnalisation. | [Décidé] I-5 |
| L'utilisation d'un dossier nécessite une passerelle explicite et autorisée. | [Décidé] I-5 |
| La personnalisation ne repose jamais sur les statistiques M7 ni sur une entrée sensible. | [Décidé] R15 D1, §13.2 ; M7 |

---

## 8. Remplacements explicites

| Document et section | Formulation remplacée | Formulation applicable | Portée |
|---|---|---|---|
| Document fondateur, §2.1 | « Il n'y aura pas de limite d'âge stricte définissant l'accès à Élan. » | L'accès au compte est ouvert à partir de 15 ans (I-1). | **Uniquement l'âge minimal d'accès au compte.** L'aide immédiate reste accessible sans compte et sans condition d'âge. Le reste du §2.1 (public cible, priorité donnée aux besoins) est inchangé. |
| Pilier 2, §3 (« Étape 0 — Les fondations communes ») | « Une logique de partage des informations pour éviter de demander plusieurs fois les mêmes données. » ; « les différents outils doivent pouvoir réutiliser les informations déjà renseignées » | Réutilisation au sein du dossier entreprise par sélection explicite à chaque utilisation, finalité claire, usage ponctuel ou temporaire, sans transmission automatique ni autorisation permanente (§4 ; arbitrage transversal 18, FR1). | **Uniquement la réutilisation des informations au sein du dossier entreprise.** Le reste du §3 du pilier 2 est traité par le document de décisions P2. |

Le document fondateur et le document de référence du pilier 2 ne sont pas modifiés. Ce tableau établit la règle applicable pour le périmètre précisé.

---

## 9. Articulation avec les autres documents

| Document | Articulation |
|---|---|
| **Document fondateur** | §2.1 : remplacement limité à l'âge (§8). §2.3 et principe directeur n°8 (« L'accès doit rester libre ») : l'accès libre désigne la liberté de découvrir et de parcourir les cinq piliers sans parcours obligatoire. Il ne signifie pas un accès anonyme ou sans compte. Le compte obligatoire est compatible avec ce principe, à condition de préserver la découverte libre des cinq piliers, l'absence de parcours obligatoire, l'absence de questionnaire imposé au premier lancement, le choix libre des centres d'intérêt et des objectifs, et une personnalisation facultative et progressive. Ces éléments ne sont pas remplacés. |
| **Référentiel global** | §5.1 (aide immédiate) ; §9.1 (minimisation, suppression, export) ; §9.2 (séparation des données) ; §9.3 (conservation des documents) ; §12.1 (hiérarchie documentaire). |
| **R15** | Progression rattachée au compte ; réinitialisation (D13 à D19, D16) ; suppression du compte (§11.3) ; refus des synchronisations tardives ; personnalisation (§13.2) ; données sensibles (D1, O4). |
| **M2** | Zone éphémère et protections des entrées sensibles (§8) ; ressaisie volontaire des informations sensibles (§9). |
| **M7** | Statistiques jamais liées au compte (§2). |
| **Piliers** | P2 §3 (dossier entreprise, réutilisation interne, remplacée au §8) ; P3 §4 et §8 (dossier professionnel, D6) ; P4 D3-A et D3-B (espaces distincts). |
| **FR1** | Arbitrages transversaux 6, 17, 18 et 24 : réutilisation au sein des dossiers personnel (§5.1) et entreprise (§4) ; réauthentification proportionnée (§6). FR1 conserve les décisions transversales et renvoie vers le présent document pour les règles opérationnelles. |
| **Décisions P2 et P3** | P2 (`P2-decisions-entrepreneuriat.md`) : formulations du bilan P2 relatives au dossier entreprise. P3 (`P3-decisions-travail-carriere.md`) : DP-5 et DP-8, règles propres au dossier professionnel. |

---

## 10. Points restant à traiter

### 10.1 Vérifications juridiques [À vérifier]

- Les conditions applicables aux utilisateurs de 15 ans et plus encore mineurs, et les mécanismes de consentement. **Condition préalable au lancement (I-1).**
- Le mode de constat de l'âge.
- Les données reçues lors d'une inscription par Google ou Apple, et leur minimisation.
- L'information des utilisateurs sur le cloisonnement, les passerelles et la personnalisation.
- Le sort des données de facturation lors de la suppression du compte (obligations légales traitées séparément, R15 §11.3).
- L'analyse d'impact relative à la protection des données (AIPD) (référentiel §9.5).

### 10.2 Points techniques [Conception ; À vérifier]

- L'isolation technique des trois dossiers et de leurs sous-espaces.
- Les modalités de connexion, de récupération d'accès, de sessions, d'appareils multiples et de révocation.
- Les modalités de la réauthentification.
- Le fournisseur et les modalités techniques de l'authentification.
- Le mécanisme des passerelles (copie ponctuelle, utilisation temporaire, révocation).
- La trace des passerelles : contenu et durée [À compléter].

### 10.3 Points ouverts par décision

- Le partage du dossier entreprise avec des associés ou un comptable : évolution ultérieure possible, non prévue (I-2).
- Les seuils et actions soumis à la réauthentification proportionnée au risque (arbitrage transversal 24, §6) : à définir précisément.
