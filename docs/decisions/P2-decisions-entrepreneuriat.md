# P2 — Décisions du pilier 2 : Entrepreneuriat

- **Statut :** ce document consigne l'application au pilier 2 des arbitrages transversaux validés par le fondateur, recense les formulations obsolètes du bilan P2 et leurs remplacements, et distingue les décisions prises, les propositions non validées et les points ouverts. Il ne modifie pas le document de référence du pilier 2 (arbitrage transversal 8).
- **Date de consolidation :** 11 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`), pilier 2 — Entrepreneuriat.
- **Documents liés :** bilan P2 (`docs/reference/pilier-2-entrepreneuriat.md`), référentiel global (`docs/reference/referentiel-global-2026-11-04.md`), FR1 (`docs/decisions/FR1-frontieres-metier-piliers.md`), I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), N1 (`docs/decisions/N1-notifications-alertes.md`), AI1 (`docs/decisions/AI1-aide-immediate.md`).

---

## 0. Statut, sources et légende

Les formulations sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1). Aucun arbitrage ne vaut validation juridique ou technique d'une mise en œuvre.

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Conditionnel]** | Arbitrage validé dont l'application dépend d'une vérification à mener |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Proposition]** | Correction proposée, non validée |
| **[En attente de revue juridique]** | Formulation provisoire ; aucune conclusion juridique n'est validée avant revue par un professionnel compétent |
| **[Ouvert]** | Point non décidé |

### Homonymies à ne pas confondre

| Sigle | Sens dans ce document | Autres sens existants |
|---|---|---|
| **P2** | Pilier 2 — Entrepreneuriat | R15 : décision pédagogique P2 |
| **Dimension 1 à 8** | Dimensions du bilan P2 | R15 : décisions D1 à D36 |
| **Arbitrages 1 à 32** | Arbitrages transversaux consignés dans FR1 | EP1 : arbitrages A1 à A3 |
| **J6 à J10** | Points de revue juridique de FR1 §6.2 | — |

---

## 1. Référence métier du pilier 2

| Règle | Statut |
|---|---|
| Le bilan P2 (« Bilan général et document de référence », non daté) est la référence métier du pilier 2. Il n'est pas modifié par le présent document. | [Renvoi] référentiel §7.2 ; [Décidé] arbitrage 8 |
| L'expérience candidate du pilier figure au référentiel §7.2 : « de l'idée à une offre chiffrée et ses hypothèses à tester ». Elle reste candidate. | [Renvoi] référentiel §7.2 |

---

## 2. Arbitrages transversaux applicables au pilier 2

Les arbitrages sont consignés dans FR1 §1. Ce tableau précise leur portée pour le pilier 2.

| Arbitrage | Application au pilier 2 | Statut |
|---|---|---|
| **1** et **26** | P2 traite la construction d'une activité, son offre, son prix, sa demande, ses coûts et sa rentabilité. Les revenus réellement conservés et leur effet sur les finances personnelles relèvent de P1. | [Décidé] |
| **7** | P2 traite la rémunération de l'entrepreneur selon son statut ; les définitions techniques de brut, net, cotisations et prélèvement à la source sont reprises de P3. | [Décidé] |
| **8** | Le présent document. | [Décidé] |
| **12**, **21**, **27** | La simulation entrepreneuriale P2 est le premier usage identifié (candidat) du moteur de simulation numérique. Sa réalisation reste conditionnée à une étude de faisabilité (calculs, hypothèses et sources, limites, données demandées, maintenance, risques réglementaires, validation humaine). | [Conditionnel] |
| **13** et **25** | Les signaux métier de P2 sont des signaux de vigilance. Les alertes relèvent du mécanisme commun. | [Décidé] |
| **16** | P2 intervient lorsqu'un bien est exploité dans une véritable activité entrepreneuriale ou commerciale. | [Décidé] |
| **18** | Réutilisation au sein du dossier entreprise par sélection explicite à chaque utilisation. Règle opérationnelle dans I1 §4. | [Décidé] ; [Renvoi] I1 §4 |
| **22** | Revue juridique ciblée de l'accompagnement entrepreneurial et de la dimension 7 : points J6 à J10 (§5). | [En attente de revue juridique] |
| **32** | Indicateur de complétion du dossier entreprise maintenu sous conditions (§3). | [Conditionnel] |

---

## 3. Remplacements explicites

| Document et section | Formulation remplacée | Formulation applicable | Portée | Statut |
|---|---|---|---|---|
| Bilan P2, §6, indicateur 2 | « Retour aux outils sous 30 jours : les outils sont-ils suffisamment utiles pour être réutilisés ? » | Indicateur retiré : il suppose un suivi entre sessions, exclu par M7 (§1 ; §9, ligne P2). | Indicateur 2 | [Décidé] ; [Renvoi] M7 §1, §9 |
| Bilan P2, §6, indicateur 3 | « Progression et réutilisation des informations : les utilisateurs passent-ils d'un outil à l'autre et réutilisent-ils les informations déjà renseignées ? » | Indicateur retiré : il relie plusieurs outils ou plusieurs sessions, ce que M7 exclut (§1 ; §9, ligne P2). | Indicateur 3 | [Décidé] ; [Renvoi] M7 §1, §9 |
| Bilan P2, §6, indicateur 1 | « Taux de complétion du dossier entreprise : les utilisateurs renseignent-ils réellement les informations nécessaires ? » | Un événement ponctuel de complétion, dans une expérience et une session données ; aucune lecture du contenu du dossier ; aucun suivi entre sessions ; aucune reconstitution de progression individuelle ; statistiques uniquement agrégées. Maintenu sous réserve d'une vérification technique ; supprimé si les garanties ne peuvent pas être démontrées. | Indicateur 1 | [Conditionnel] arbitrage 32 |
| Bilan P2, §3 (« Étape 0 ») | « Une logique de partage des informations pour éviter de demander plusieurs fois les mêmes données. » ; « les différents outils doivent pouvoir réutiliser les informations déjà renseignées » | Réutilisation au sein du dossier entreprise par sélection explicite à chaque utilisation, finalité claire, usage ponctuel ou temporaire, sans transmission automatique ni autorisation permanente. Les informations déjà renseignées peuvent être proposées à la sélection, sans reprise silencieuse. | Réutilisation des informations | [Décidé] arbitrage 18 ; [Renvoi] I1 §4, §8 |
| Bilan P2, §3 (espace 3 « Simulateur économique d'entreprise ») et §4 (phase 1) | Simulateur présenté sans statut de moteur | « Premier usage identifié (candidat) du moteur de simulation numérique, sous réserve de la validation de sa faisabilité, de ses calculs, hypothèses, limites et risques réglementaires. » | Statut du simulateur | [Conditionnel] arbitrages 12, 21, 27 |
| Bilan P2, dimension 8 | « Les signaux d'alerte doivent être accessibles depuis les autres espaces de l'application. » | « Les signaux de vigilance doivent être accessibles depuis les autres espaces de l'application. Un signal de vigilance est un indicateur métier nécessitant éventuellement une vérification ou une décision ; une alerte est une notification déclenchée par le mécanisme technique commun selon une condition ou un seuil défini. Aucun signal ne déclenche automatiquement de notification. » | Vocabulaire | [Décidé] arbitrages 13, 25 ; écart documentaire avec N1 §1 : FR1 §6.1 |

Le bilan P2 n'est pas modifié. Ce tableau établit la formulation applicable pour le périmètre précisé.

---

## 4. Propositions non validées

| Document et section | Constat | Correction proposée | Statut |
|---|---|---|---|
| Bilan P2, §3 (« Étape 0 ») : « Des moteurs communs de calcul, de diagnostic, de parcours guidés, de documents et d'alertes. » | Les moteurs sont présentés parmi les fondations communes, alors que le référentiel sépare fondations et moteurs (§2.4) ; « moteur de documents » ne correspond à aucun moteur du référentiel (§4). | Préciser que les moteurs ne sont pas des fondations ; « calcul » désigne le moteur de simulation numérique ; « documents » est à qualifier (moteur d'analyse documentaire, dont le premier usage stabilisé est en P4 D4, ou génération de documents, reportée selon le §8 du bilan) ; « alertes » désigne le mécanisme commun. | [Proposition] |
| Bilan P2 (ensemble) | L'expérience candidate du référentiel §7.2 n'est pas mentionnée. | Ajouter un renvoi vers « de l'idée à une offre chiffrée et ses hypothèses à tester » (expérience candidate). | [Proposition] |

---

## 5. Formulations en attente de revue juridique (arbitrage 22)

| N° | Point à examiner | Emplacements du bilan P2 | Statut |
|---|---|---|---|
| **J6** | Accompagnement entrepreneurial | §1, §3 (espaces), §7 | [En attente de revue juridique] |
| **J7** | Choix et conséquences des statuts | Dimensions 4.1, 6.2, 7.7 | [En attente de revue juridique] |
| **J8** | Devis et facturation | §5 ; dimension 6.3 | [En attente de revue juridique] |
| **J9** | Financement | Dimensions 4.4, 7.7 | [En attente de revue juridique] |
| **J10** | Obligations de l'employeur | Dimension 7 (« Points importants ») | [En attente de revue juridique] |

Les frontières fonctionnelles de ces zones peuvent être documentées provisoirement ; aucune formulation juridique n'est validée avant revue.

---

## 6. Points ouverts

| Point | Nature | Statut |
|---|---|---|
| Vérification technique des garanties de l'indicateur de complétion (arbitrage 32) | Technique | [Ouvert] |
| Étude de faisabilité de la simulation entrepreneuriale (arbitrages 21, 27) | Technique et réglementaire | [Ouvert] |
| Revue juridique des points J6 à J10 (arbitrage 22) | Juridique | [Ouvert] |
| Validation des propositions du §4 | Arbitrage | [Ouvert] |
| Écart documentaire entre l'arbitrage 25 et N1 §1 | Documentaire | [Ouvert] ; [Renvoi] FR1 §6.1 |

---

## 7. Articulation avec les autres documents

| Document | Articulation |
|---|---|
| **FR1** | Arbitrages transversaux 1 à 32 ; matrice des frontières ; points de revue juridique J1 à J13 |
| **I1** | Réutilisation au sein du dossier entreprise (§4) ; remplacement explicite de la formulation du bilan P2, §3 (§8) ; dossier entreprise individuel au lancement (I-2) |
| **M7** | §1 (aucun suivi entre sessions ; M7 prévaut sur les indicateurs de P2) ; §9 (ligne P2) |
| **N1** | Définition de l'alerte (§1) ; écart documentaire consigné dans FR1 §6.1 |
| **AI1** | Entrée d'aide immédiate pour les difficultés graves d'une entreprise (§1) |
| **Référentiel global** | §2.4 (séparation fondations et moteurs) ; §4 et §4.9 (simulation numérique, remplacements dans FR1 §4.1) ; §7.2 (expérience candidate) |

---

Fin du document P2 — consolidation du 11 novembre 2026.
