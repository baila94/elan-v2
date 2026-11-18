# P3 — Décisions du pilier 3 : Travail et carrière

- **Statut :** ce document consolide les décisions validées par le fondateur relatives au pilier 3 ; les points non arbitrés y restent explicitement indiqués comme ouverts. Il ne modifie aucun document de référence.
- **Date de consolidation :** 11 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`), pilier 3 — Travail et carrière.
- **Documents liés :** bilan P3 (`docs/reference/pilier-3-travail-carriere-2026-11-04.md`), référentiel global (`docs/reference/referentiel-global-2026-11-04.md`), I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), L1 (`docs/decisions/L1-cycle-de-vie-des-donnees.md`), AI1 (`docs/decisions/AI1-aide-immediate.md`), C1 (`docs/decisions/C1-catalogue-contenus-points-entree.md`).

---

## 0. Statut, sources et légende

Ce document consigne :

- les **arbitrages P3 antérieurs** (AP-1 à AP-14), validés au cours des échanges de conception avant le 11 novembre 2026 ; leur date exacte n'est pas consignée ;
- les **décisions du 11 novembre 2026** (DP-1 à DP-9) ;
- les **remplacements explicites** de formulations du bilan P3 devenues obsolètes (§4) ;
- les **conséquences** sur le périmètre fonctionnel du pilier (§5) et les **points ouverts** (§6).

Les formulations sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1). Aucun arbitrage ne vaut autorisation générale de traitement des données, ni validation juridique ou technique de sa mise en œuvre.

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Explicatif]** | Formulation qui décrit ou précise, sans créer de règle |
| **[Conséquence]** | Conséquence documentaire d'une règle décidée |
| **[Ouvert]** | Point non décidé |

### Homonymies à ne pas confondre

| Sigle | Sens dans ce document | Autres sens existants |
|---|---|---|
| **P3** | Pilier 3 — Travail et carrière | R15 : décision pédagogique P3 |
| **D1 à D8** | Dimensions du pilier 3 | R15 : décisions D1 à D36 |
| **AP-n, DP-n** | Identifiants propres à ce document | — |

---

## 1. Références métier du pilier 3

| Règle | Statut |
|---|---|
| Le référentiel global du 4 novembre 2026 (`referentiel-global-2026-11-04.md`) est la **V2.1 corrigée validée.** C'est lui que le bilan P3 désigne comme « Version 2.1 corrigée » (bilan P3 §14). | [Décidé] DP-1 |
| Le bilan P3 et les huit documents détaillés par dimension constituent les références métier du pilier. | [Renvoi] référentiel §7.3 ; bilan P3 §2, §14 |
| Les huit documents détaillés D1 à D8 **n'ont pas été trouvés** dans le dépôt ni dans les emplacements accessibles consultés le 11 novembre 2026. Ils n'ont pas pu être audités. | [Explicatif] |
| Le bilan P3 est la **seule référence métier P3 actuellement disponible** dans le dépôt. Il est utilisé comme **référence métier provisoire** tant que les documents D1 à D8 restent introuvables. | [Décidé] DP-7 |
| Cette utilisation provisoire **ne vaut ni validation du contenu des documents D1 à D8, ni remplacement définitif.** Les décisions qu'ils contiennent ne sont pas réputées abandonnées (bilan P3 §2, §14). Si ces documents sont retrouvés, ils reprennent leur rang et les écarts éventuels sont arbitrés explicitement. | [Décidé] DP-7 |

---

## 2. Arbitrages P3 antérieurs

Ces arbitrages concernent principalement l'expérience complémentaire d'analyse d'une offre d'emploi (« Préparer une candidature cohérente »), ainsi que deux règles transversales du pilier.

| N° | Arbitrage | Statut | Articulation |
|---|---|---|---|
| **AP-1** | L'analyse d'une offre d'emploi est une **expérience complémentaire, distincte de l'expérience initiale P3.** Elle commence obligatoirement à partir d'une offre d'emploi précise. | [Décidé] | Constitue le « nouvel arbitrage » requis par le bilan P3 §5.1 ; l'expérience initiale reste inchangée (§4.2) |
| **AP-2** | L'offre peut être fournie par **texte collé, document importé ou description manuelle.** | [Décidé] | Classification M2 de chaque mode d'entrée : §6 |
| **AP-3** | Élan extrait les informations de l'offre ; **l'extraction est présentée à l'utilisateur pour confirmation ou correction avant le diagnostic.** | [Décidé] | [Renvoi] référentiel §4.2 (présent, interprété, manquant, à vérifier) |
| **AP-4** | La comparaison distingue les **correspondances directes**, les **compétences transférables** et les **éléments ou preuves à rechercher.** | [Décidé] | [Renvoi] bilan P3 D4 : ne pas transformer une supposition en fait |
| **AP-5** | Le diagnostic est **qualitatif et critère par critère.** **Aucun score global** de compatibilité n'est affiché. | [Décidé] | [Renvoi] bilan P3 D1, §11 (aucun verdict) |
| **AP-6** | Les écarts sont distingués entre ceux qu'une **meilleure présentation** peut améliorer et ceux qui demandent une **action réelle** : formation, qualification, expérience ou vérification auprès de l'employeur. | [Décidé] | Liens vers D3 et D5 |
| **AP-7** | Le **CV est facultatif.** | [Décidé] | — |
| **AP-8** | Le **CV importé est sensible par défaut** et ne fait l'objet d'**aucune analyse par IA au lancement.** | [Décidé] | [Renvoi] M2 §3, §7, §11 ; référentiel §9.5 (documents professionnels : niveau 3) |
| **AP-9** | Le **CV original n'est jamais écrasé.** Les modifications acceptées constituent une **nouvelle version séparée.** | [Décidé] | Conservation : AP-11 |
| **AP-10** | Les reformulations sont **proposées puis validées par l'utilisateur, sans fabrication.** Ce principe **n'est pas une autorisation de traitement par IA.** | [Décidé] | [Renvoi] bilan P3 D4 ; précisé par DP-6 |
| **AP-11** | La **conservation est temporaire par défaut.** Toute sauvegarde ou tout export nécessite une **demande explicite** de l'utilisateur. | [Décidé] | [Renvoi] référentiel §9.3 ; bilan P3 §8.2 ; I1 §5.1 |
| **AP-12** | La description manuelle du parcours professionnel combine **champs structurés** et **texte libre.** Le texte libre est **sensible par défaut.** Les champs structurés ne sont **pas automatiquement autorisés** à être transmis à une IA : leur classification M2 et les autorisations applicables doivent être établies. | [Décidé] | [Renvoi] M2 §3, §7, §9, §11 ; conditions de traitement : DP-9 |
| **AP-13** | **D6 reste isolée.** Son aide immédiate ne dépend pas de l'IA. | [Décidé] | [Renvoi] bilan P3 D6, §8.3 ; référentiel §5.1 ; AI1 ; C1 §9 ; I1 §5.1 |
| **AP-14** | **D4 et D8 ne créent pas deux historiques concurrents de suivi.** | [Décidé] | [Renvoi] bilan P3 D8, §6.3 |

---

## 3. Décisions du 11 novembre 2026

### 3.1 Moteurs et libellés

| N° | Décision | Statut |
|---|---|---|
| **DP-1** | Le référentiel du 4 novembre 2026 est la V2.1 corrigée validée (§1). | [Décidé] |
| **DP-2** | Le **premier usage stabilisé** du moteur d'analyse documentaire est le décodeur d'offre de crédit en **P4 D4.** L'analyse d'une offre d'emploi en P3 est un **usage complémentaire**, pas le premier usage stabilisé. | [Décidé] ; [Renvoi] référentiel §4, §4.2 |
| **DP-3** | Le libellé de référence est « **grille de diagnostic des candidatures** » (P3 D4). C'est le premier usage stabilisé du moteur de diagnostic et d'orientation. | [Décidé] ; [Renvoi] référentiel §4, §4.3, §7.3 |

| Règle | Statut |
|---|---|
| La grille de diagnostic des candidatures porte sur la **recherche d'emploi dans son ensemble** : démarches, candidatures, retours, relances, difficultés et prochaines actions. Le diagnostic de l'expérience complémentaire porte sur **une offre précise** rapprochée du parcours de l'utilisateur (AP-4 à AP-6). Les deux ne doivent pas être confondus ni porter le même nom. | [Explicatif] ; bilan P3 D4 |
| Libellé du diagnostic de l'expérience complémentaire et rattachement éventuel au moteur de diagnostic comme usage complémentaire | [Ouvert] (§6) |

### 3.2 Profil professionnel — DP-4

| Règle | Statut |
|---|---|
| Le profil professionnel de D1 est une **rubrique du dossier professionnel** défini par I1. | [Décidé] DP-4 |
| Il ne crée pas de quatrième dossier. Les trois dossiers d'I1 (personnel, professionnel, entreprise) sont inchangés. | [Décidé] DP-4 ; [Renvoi] I1 §5.1 |
| Le profil professionnel reste **distinct du portfolio** professionnel. | [Décidé] DP-4 ; [Renvoi] bilan P3 §4 |
| Les champs du profil sont classés selon M2. Les contraintes personnelles susceptibles de révéler une situation sensible (santé, handicap, obstacles personnels) sont **sensibles par défaut.** | [Décidé] DP-4 ; [Renvoi] M2 §3, §7 ; bilan P3 D1 |

### 3.3 Réutilisation des informations entre dimensions — DP-5

| Règle | Statut |
|---|---|
| La réutilisation d'une information fait l'objet d'une **sélection explicite par l'utilisateur au moment de chaque utilisation.** | [Décidé] DP-5 |
| **Aucune autorisation durable** de réutilisation. | [Décidé] DP-5 |
| **Aucune reprise silencieuse ni préremplissage automatique.** | [Décidé] DP-5 |
| La **provenance** (dimension d'origine) et la **finalité** de chaque donnée restent identifiables. | [Décidé] DP-5 |
| L'**ajout au portfolio** est une action explicite distincte. | [Décidé] DP-5 |
| Les **données sensibles ne sont ni conservées ni réutilisées.** | [Décidé] DP-5 ; [Renvoi] M2 §8 ; R15 O4 |
| Toute utilisation entre deux dimensions respecte les **règles de passerelle d'I1.** | [Décidé] DP-5 ; [Renvoi] I1 §5.2, §5.3 |
| La personnalisation reste soumise à I-5 : aucun dossier n'est consulté automatiquement. | [Renvoi] I1 §7 |

**Application des règles de passerelle à l'intérieur du dossier professionnel — DP-8**

DP-8 précise la portée de DP-5 : il distingue les réutilisations internes à un même dossier des transferts entre dossiers distincts. Il ne supprime aucun contrôle d'I1.

| Règle | Type | Statut |
|---|---|---|
| La **sélection explicite** de l'utilisateur, au moment de chaque utilisation, **constitue le consentement** nécessaire à une réutilisation entre dimensions d'un même dossier. | Autorisation | [Décidé] DP-8 |
| L'utilisateur sélectionne explicitement les informations qu'il souhaite réutiliser, à chaque utilisation. | Condition préalable | [Décidé] DP-8 |
| La **finalité** de la réutilisation est identifiable et compréhensible. | Condition préalable | [Décidé] DP-8 ; [Renvoi] I1 §5.2 |
| La réutilisation prend la forme d'une **copie ponctuelle** ou d'une **utilisation temporaire**, selon le besoin. | Règle de forme | [Décidé] DP-8 ; [Renvoi] I1 §5.2 (I-3) |
| La **réauthentification I-4 n'est pas exigée** pour chaque réutilisation entre dimensions d'un même dossier. | Autorisation | [Décidé] DP-8 |
| Aucune autorisation générale ou permanente de réutilisation n'est créée. | Interdiction | [Décidé] DP-8 ; DP-5 |
| Aucune donnée n'est transmise silencieusement à une autre dimension. | Interdiction | [Décidé] DP-8 ; DP-5 |
| Les **données sensibles** ne peuvent pas être transmises dans ce cadre. | Interdiction | [Décidé] DP-8 ; [Renvoi] I1 §5.2 ; M2 §9 |
| Les **passerelles entre dossiers distincts** restent soumises aux règles d'I1, notamment à la **réauthentification I-4** lorsqu'elle est prévue. | Renvoi | [Renvoi] I1 §5.2, §5.3, §6 |

### 3.4 Reformulation et IA — DP-6

| Règle | Statut |
|---|---|
| Pour l'application de R15 O2/A2 (reformulation encadrée), une information fournie par l'utilisateur peut être considérée comme **confirmée par lui** lorsqu'il en confirme **explicitement l'exactitude.** | [Décidé] DP-6 (option B) |
| Les garanties d'O2/A2 s'appliquent alors : préservation des conditions et des nuances, retour à la source en cas d'incertitude, contrôles de fidélité sémantique. | [Conséquence] ; [Renvoi] R15 §8 |
| Trois notions restent **distinctes** : la **confirmation par l'utilisateur** de l'exactitude de ses propres informations ; la **validation humaine éditoriale** d'un contenu d'Élan ; l'**autorisation effective d'un traitement par l'IA,** soumise à M2 et aux règles applicables. | [Décidé] DP-6 |
| La confirmation par l'utilisateur **n'autorise pas** un traitement par l'IA. DP-6 n'est pas une autorisation générale de traitement des données utilisateur par l'IA. | [Décidé] DP-6 |
| Les **CV** et les **textes libres** restent sensibles ; **aucun traitement par IA** de ces contenus n'est autorisé au lancement. | [Décidé] DP-6 ; AP-8 ; AP-12 |
| Les **champs structurés** font l'objet d'une **classification M2** et d'une **autorisation explicite** avant tout traitement par IA. Les conditions sont fixées par DP-9 (§3.5). | [Décidé] DP-6 ; AP-12 ; DP-9 |
| La formulation d'origine des arbitrages O2 et A2 n'est pas consignée dans le dépôt ; DP-6 s'appuie sur la restitution de R15 §8. | [Explicatif] |

### 3.5 Traitement par IA des champs structurés — DP-9

Certains champs structurés pourront éventuellement être traités par l'IA, uniquement dans un cadre précisément délimité. DP-9 définit une **possibilité conditionnelle.** Il ne constitue **pas une autorisation opérationnelle immédiate**, ni une validation juridique ou technique d'un traitement.

**Conditions préalables, cumulatives :**

| N° | Condition | Statut |
|---|---|---|
| 1 | La **classification M2** du champ est établie et à jour. | [Décidé] DP-9 ; [Renvoi] M2 §5, §6 |
| 2 | Sa **sensibilité est compatible** avec le traitement envisagé. | [Décidé] DP-9 ; [Renvoi] M2 §3, §11 |
| 3 | La **finalité** du traitement est précise, documentée et justifiée. | [Décidé] DP-9 |
| 4 | Le traitement est **expressément autorisé** pour cette catégorie de données et cette finalité. | [Décidé] DP-9 |
| 5 | Les règles de **protection, de conservation, de sécurité et de contrôle humain** applicables sont respectées. | [Décidé] DP-9 ; [Renvoi] R15 §8 ; L1 ; I1 |
| 6 | Le traitement est **techniquement et juridiquement vérifié** avant son activation. | [Décidé] DP-9 ; [Renvoi] R15 §8 (fournisseurs d'IA [À vérifier]) |

**Autorisation :**

| Règle | Statut |
|---|---|
| Un champ structuré qui remplit les six conditions peut faire l'objet d'un traitement par IA, **limité à la finalité autorisée.** | [Décidé] DP-9 |

**Interdictions et limites :**

| Règle | Statut |
|---|---|
| La **structuration** d'une donnée ne la rend pas automatiquement non sensible. | [Décidé] DP-9 |
| La classification « non sensible » ne constitue pas, **à elle seule**, une autorisation de traitement par IA. | [Décidé] DP-9 |
| **Aucun traitement général** de tous les champs structurés n'est autorisé. | [Décidé] DP-9 |
| Les **CV** et les **textes libres** restent exclus du traitement par IA au lancement. | [Décidé] DP-9 ; AP-8 ; AP-12 |
| Les **données sensibles** restent exclues du périmètre autorisé au lancement. | [Décidé] DP-9 ; [Renvoi] M2 §11 ; R15 §8 |
| La **confirmation** d'une information par l'utilisateur ne vaut pas autorisation de traitement par IA. | [Décidé] DP-9 ; DP-6 |
| Une autorisation reste **limitée à sa finalité** et n'est pas étendue à d'autres usages par défaut. | [Décidé] DP-9 |

---

## 4. Remplacements explicites

### 4.1 Formulations du bilan P3 remplacées

| Document et section | Formulation remplacée | Formulation applicable | Portée |
|---|---|---|---|
| Bilan P3, §6.2, 2e à 4e alinéas | « Contradiction à résoudre dans le référentiel global : La V2.1 présente comme décision stabilisée la formulation suivante : "Le suivi des candidatures en P3 D4 est le premier usage du diagnostic et de l'orientation"… Cette contradiction doit être tranchée dans le référentiel global… » | Le référentiel V2.1 (§4, §4.3, §7.3) fixe : « Premier usage stabilisé : la grille de diagnostic des candidatures en P3 D4. » Le diagnostic et le suivi sont deux moteurs distincts. Il n'existe plus de contradiction à trancher (DP-1, DP-3). | Uniquement le statut du premier usage du diagnostic. Le statut du suivi reste candidat (§4.2). |
| Bilan P3, §6.2, « En attendant cet arbitrage » | « son rattachement comme premier usage stabilisé du moteur commun doit être aligné sur la décision globale » | La grille de diagnostic des candidatures est le premier usage stabilisé du moteur de diagnostic et d'orientation (DP-3). | Idem. La grille reste une décision métier de D4. |
| Bilan P3, §13, « Usages de moteurs et statuts » | « Diagnostic et orientation : grille de diagnostic de la recherche d'emploi en D4 ; statut du premier usage moteur à aligner avec le référentiel global. » | « Diagnostic et orientation : grille de diagnostic des candidatures en D4, premier usage stabilisé » (DP-3). | Statut et libellé. |
| Bilan P3, §13, « Points ouverts », 3e puce | « Arbitrage global sur le statut du premier usage du diagnostic et de l'orientation, compte tenu du statut du suivi des candidatures. » | Point clos par le référentiel V2.1 (DP-1, DP-3). | Uniquement ce point ; les autres points ouverts du §13 demeurent. |
| Bilan P3, D4 (« Grille de diagnostic de la recherche d'emploi », « Moteurs communs ») et §6.2, 1er alinéa | « grille de diagnostic de la recherche d'emploi » | « grille de diagnostic des candidatures » (DP-3). | Libellé seulement ; le contenu de la grille (faits, hypothèses, pistes, aucun verdict) est inchangé. |
| Bilan P3, D1, « Dossier associé » | « un dossier de profil professionnel privé, contrôlé par l'utilisateur » | Le profil professionnel est une **rubrique du dossier professionnel** (I1), distincte du portfolio, privée et contrôlée par l'utilisateur (DP-4). | Uniquement la qualification de « dossier ». Le contenu de D1 est inchangé. |

Le bilan P3 n'est pas modifié. Ce tableau établit la formulation applicable pour le périmètre précisé.

### 4.2 Formulations maintenues, précisées par ce document

| Document et section | Formulation | Précision applicable |
|---|---|---|
| Bilan P3, §5.1 et §12 | « L'analyse d'offres d'emploi ne faisait pas partie de la formulation de cette expérience candidate et ne doit pas y être ajoutée sans nouvel arbitrage. » | **Toujours applicable à l'expérience initiale.** L'analyse d'une offre est autorisée comme expérience complémentaire distincte (AP-1). |
| Bilan P3, D4, §6.3, §13 ; référentiel §4.4 | Le suivi des candidatures est un premier usage **candidat** du moteur de suivi et de dossier, à arbitrer. | **Toujours applicable.** Aucune décision du présent document ne modifie ce statut. |
| Bilan P3, §4 | « L'utilisateur garde le contrôle des informations qu'il souhaite conserver, réutiliser, exporter ou partager. » | Modalités précisées par DP-5. |
| Référentiel §4.2 | « Premier usage stabilisé : le décodeur d'offre de crédit en P4 D4. » | L'analyse d'une offre d'emploi en est un usage complémentaire (DP-2). |

---

## 5. Conséquences sur le périmètre fonctionnel P3

| Élément | Conséquence | Statut |
|---|---|---|
| **Expérience initiale** (recherche d'emploi ou reprise d'activité) | Périmètre discuté inchangé : profil professionnel, CV, candidatures sans invention, suivi, aide immédiate D6, base anti-arnaque. Sans analyse d'offres. Simulation d'entretien : premier enrichissement envisagé, non intégré. | [Renvoi] bilan P3 §5.1, §12 |
| Choix définitif de l'expérience initiale, périmètre de lancement, ordre de réalisation | Restent soumis à l'arbitrage global. | [Ouvert] ; référentiel §13.2 ; bilan P3 §13 |
| **Expérience complémentaire** (analyse d'une offre) | Conception autorisée dans le cadre d'AP-1 à AP-12. | [Décidé] |
| Structure en sept phases, classification des exigences de l'offre, statuts détaillés du diagnostic, gestion des documents temporaires, périmètre complet | Propositions non validées. | [Ouvert] |
| **Analyse documentaire** | L'expérience complémentaire s'appuie sur un moteur dont le premier usage est P4 D4. Elle en dépend. | [Conséquence] DP-2 ; référentiel §3.5 |
| **Diagnostic et orientation** | Premier usage stabilisé : grille de diagnostic des candidatures. Le diagnostic d'une offre en est distinct. | [Décidé] DP-3 |
| **Suivi et dossier** | Premier usage candidat ; un seul historique pour D4 et D8. | [Renvoi] référentiel §4.4 ; AP-14 |
| **Profil et portfolio** | Profil = rubrique du dossier professionnel, distincte du portfolio ; ajout au portfolio par action explicite. | [Décidé] DP-4 ; DP-5 |
| **Circulation des données dans le dossier professionnel** | Sélection explicite à chaque utilisation, qui vaut consentement ; finalité identifiable ; copie ponctuelle ou utilisation temporaire ; aucune réauthentification I-4 systématique entre dimensions ; aucune transmission de données sensibles. Les passerelles entre dossiers restent soumises à I1. | [Décidé] DP-5 ; DP-8 |
| **IA** | Aucun traitement par IA du CV ni du texte libre au lancement ; données sensibles exclues au lancement ; champs structurés traitables seulement si les six conditions de DP-9 sont réunies, pour une finalité expressément autorisée ; reformulations encadrées par O2/A2 au sens de DP-6. À la date du présent document, **aucun traitement par IA de champs structurés n'est encore autorisé** : aucune classification ni vérification n'a été menée. | [Décidé] AP-8 ; AP-12 ; DP-6 ; DP-9 ; [Conséquence] |
| **Conservation** | Temporaire par défaut ; sauvegarde ou export sur demande explicite ; CV original jamais écrasé. | [Décidé] AP-9 ; AP-11 |
| **Progression et statistiques** | R15 et M2 s'appliquent : aucune progression ni statistique issue d'une entrée sensible. | [Renvoi] R15 ; M2 §8 ; M7 |

---

## 6. Points ouverts

| Point | Nature | Statut |
|---|---|---|
| Documents détaillés D1 à D8 : localisation, versement dans le dépôt | Vérification documentaire | [Ouvert] |
| Fiches M2 de l'expérience complémentaire : offre collée, document importé, description manuelle, champs structurés, CV | Classification | [Ouvert] ; publication bloquée tant qu'elles manquent (M2 §6) |
| Inventaire des champs structurés de l'expérience complémentaire et du profil professionnel, avec leur classification M2 | Classification | [Ouvert] ; préalable à toute application de DP-9 |
| Pour chaque champ structuré éventuellement concerné : finalité documentée, autorisation expresse et vérifications techniques et juridiques (DP-9, conditions 3 à 6) | Autorisation au cas par cas | [Ouvert] |
| Critères de choix entre copie ponctuelle et utilisation temporaire pour les réutilisations internes (DP-8) | Conception | [Ouvert] |
| Traçabilité de la provenance et de la finalité des réutilisations internes (DP-5, DP-8) ; articulation avec la traçabilité des passerelles d'I1 | Conception | [Ouvert] ; [Renvoi] I1 §5.2 [À compléter] |
| Libellé du diagnostic de l'expérience complémentaire et rattachement éventuel au moteur de diagnostic comme usage complémentaire | Conception | [Ouvert] |
| Lien éventuel entre l'expérience complémentaire et le suivi des candidatures, compte tenu du statut candidat du suivi | Conception | [Ouvert] |
| Méthode des contrôles de fidélité sémantique (R15) appliquée aux reformulations de candidature | Conception | [Ouvert] ; [Renvoi] R15 §8 [Conception] |
| Traitements par les fournisseurs d'IA ; analyse d'impact relative à la protection des données | Faisabilité et protection | [Ouvert] ; [Renvoi] R15 §8 [À vérifier] ; bilan P3 §8.5 |
| Épargne salariale : traitement dans D5 | Vérification documentaire | [Ouvert] ; [Renvoi] référentiel §8 ; pilier 4 |

---

## 7. Articulation avec les autres documents

| Document | Articulation |
|---|---|
| **Référentiel global V2.1** | §3.5 (premier usage) ; §4 (moteurs) ; §5.1 (aide immédiate) ; §7.3 (P3) ; §9 (données) ; §10 (IA) ; §12.1 (contradictions) ; §13.2 (arbitrages ouverts) |
| **Bilan P3** | Référence métier provisoire (DP-7) ; formulations remplacées au §4.1 |
| **I1** | Trois dossiers ; passerelles (§5.2, §5.3) ; personnalisation (§7) |
| **M2** | Classement par défaut des entrées sensibles ; règle de doute ; aucune IA dans les étapes sensibles au lancement |
| **M7** | Aucune statistique issue des entrées sensibles ; pour les simulations P3, ni contenu ni réponse |
| **R15** | Reformulation encadrée (O2/A2, précisée par DP-6) ; simulations (A7) ; progression |
| **L1** | Zone éphémère ; conservation et suppression |
| **AI1, C1** | Aide immédiate de D6, indépendante de l'IA |
| **FR1** | Arbitrages transversaux 1 à 32 et frontières entre piliers (§8). La sélection explicite à chaque réutilisation s'applique aux trois dossiers par trois décisions distinctes : DP-5 et DP-8 pour le dossier professionnel ; arbitrages 6 et 17 pour le dossier personnel ; arbitrage 18 pour le dossier entreprise (I1 §4, §5.1). La réauthentification est proportionnée au risque (arbitrage 24, I1 §6), ce qui est cohérent avec DP-8. |

---

## 8. Frontières transversales

| Règle | Statut |
|---|---|
| P3 traite l'emploi, les compétences, la rémunération et la carrière. Les revenus réellement conservés et leur effet sur les finances personnelles relèvent de P1 ; la construction d'une activité relève de P2 ; les mécanismes collectifs du travail et des revenus relèvent de P5. | [Renvoi] FR1, arbitrages 1 et 26 |
| P3 porte la **référence technique** sur le bulletin de paie, le salaire brut et net, les cotisations, le prélèvement à la source et les droits liés à la rémunération. Les autres piliers réutilisent ces définitions sans les dupliquer. | [Renvoi] FR1, arbitrage 7 |
| P3 traite la fin de carrière, les droits et les démarches professionnelles liés à la retraite. La préparation financière personnelle relève de P1, les produits d'épargne retraite de P4, le système collectif de P5. | [Renvoi] FR1, arbitrage 10 |

---

Fin du document P3 — consolidation du 11 novembre 2026.
