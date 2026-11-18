# P4 — Registre transversal (D2 à D8)

- **Statut :**
  - **Statut métier :** registre de cohérence rédigé le 13 novembre 2026, sur autorisation explicite (P4T-A25). **Non validé.** Il ne vaut validation ni des documents D2 à D8, ni d'aucune formulation juridique.
  - **Rôle :** assurer la cohérence des huit documents de dimension reconstruits : conventions, frontières, renvois, mécanismes communs, sujets partagés, arbitrages appliqués, points juridiques, dépendances et incohérences non résolues.
  - Il ne modifie ni P4 D1 (référence métier validée), ni FR1, ni le bilan P4, ni aucun autre document.
- **Fichier :** `docs/decisions/P4-registre-transversal.md`.
- **Documents couverts :**

| Dim. | Fichier | État |
|---|---|---|
| D1 | `docs/decisions/P4-D1-acteurs-registres-protection-fonds-fraude.md` | Référence métier validée le 13/11/2026 ; non modifiée |
| D2 | `docs/decisions/P4-D2-services-bancaires.md` | Proposition non validée |
| D3-A | `docs/decisions/P4-D3-A-litiges-incidents-bancaires.md` | Proposition non validée |
| D3-B | `docs/decisions/P4-D3-B-difficultes-financieres-surendettement.md` | Proposition non validée |
| D4 | `docs/decisions/P4-D4-credit-financement-projets.md` | Proposition non validée |
| D5 | `docs/decisions/P4-D5-epargne-enveloppes.md` | Proposition non validée |
| D6 | `docs/decisions/P4-D6-investissements-marches-financiers.md` | Proposition non validée |
| D7 | `docs/decisions/P4-D7-assurances.md` | Proposition non validée |
| D8 | `docs/decisions/P4-D8-methode-decision-financiere.md` | Proposition non validée |

- **Documents liés :**
  - le bilan P4 (`docs/reference/pilier-4-banque-finance-2026-11-04.md`) ;
  - FR1 (`docs/decisions/FR1-frontieres-metier-piliers.md`) ;
  - le référentiel global (`docs/reference/referentiel-global-2026-11-04.md`) ;
  - AI1, I1, L1, M2, M7 et EP1 ;
  - l'archive `docs/research/P4-D3-A-recherche-mediateurs.md`.

**Principe directeur :** mutualiser les mécanismes, pas uniformiser les métiers. Les mécanismes communs sont décrits une seule fois (§4). Chaque dimension garde son vocabulaire, ses situations et ses limites.

---

## 1. Conventions communes

### 1.1 Statuts et classifications

Les documents D2 à D8 reprennent exactement le système de D1 (D1 §0.1).

| Classification | Étiquette | Sens |
|---|---|---|
| Faits externes | **[Établi]** | Appuyé par une source officielle lue intégralement, ou par la partie explicitement lue d'une source partielle |
| | **[À corriger]** | Ancienne formulation ou ancien contenu Élan identifiable, inexact au regard d'une source lue. Une divergence entre sources externes relève de [Ouvert] ; une erreur provenant uniquement d'un rapport de recherche est retirée du document métier et tracée dans ce registre (P4T-A28) |
| | **[Non étayé]** | Aucune source lue ne l'établit |
| Gouvernance | **[Proposition]** | Élément nouveau, non arbitré |
| | **[Ouvert]** | Point non arbitré, en attente de preuve, ou lacune de recherche |
| | **[En attente de revue juridique]** | Sujet confié à la revue juridique ; aucune conclusion |
| Décisions Élan (D1 §0.1) | **[Élan validé]**, **[Décidé]**, **[Renvoi]** | Règle du bilan ou du référentiel ; arbitrage validé ; règle définie ailleurs, appliquée sans être recopiée |

- **Aucun statut supplémentaire n'est créé.**
- [Partiel] reste réservé aux archives de recherche.
- [Validé] n'est utilisé que dans les plans de travail, jamais dans ces documents.
- [Établi] signifie « appuyé par une source lue ». Ce n'est pas une validation du contenu pour Élan, et encore moins une validation juridique.

### 1.2 Colonne « Nature »

La colonne « Nature » des tableaux de contenu n'est **pas un statut**. Elle indique d'où vient l'énoncé :

| Valeur | Sens |
|---|---|
| Droit | Règle de droit identifiée comme en vigueur à la date de référence documentaire indiquée dans la dimension concernée, et lue sur Légifrance. La date de consultation et, le cas échéant, la version du texte sont précisées dans la dimension |
| Admin. | Information administrative d'un organisme public (Service-Public, Banque de France, ACPR, AMF, ABE Infoservice, impots.gouv) |
| Recomm. | Recommandation ou pratique de référence, sans valeur obligatoire (par exemple l'OSMP) |
| Hist. | Source ancienne : pages de l'AMF de 2016 à 2018, conservées comme références historiques (P4T-A21) ; elles ne suffisent jamais seules à présenter une règle comme actuelle |
| Élan | Décision Élan validée |
| Prop. | Proposition nouvelle |
| Interprétation | Lecture ou conclusion antérieure ; uniquement pour tracer une correction |
| Archive | Note de l'archive de recherche D3-A |

### 1.3 Identifiants

**Vérification d'unicité (13/11/2026).** Une recherche dans tout `docs/` a été faite avant toute attribution. Seuls les identifiants `D3A-M01` à `D3A-M13` existaient parmi les préfixes de dimension, et aucun `J20` ou suivant n'existait. Aucun identifiant existant n'est réutilisé ni renommé.

| Série | Document | Statut de la série |
|---|---|---|
| `Dx-E..` faits externes documentés ; `Dx-K..` anciennes formulations ou anciens contenus Élan à corriger ; `Dx-P..` propositions ; `Dx-O..` points ouverts ; `Dx-S..` sources ; `Dx-DC..` décisions métier arbitrées propres à la dimension (série locale, créée seulement pour une décision validée), avec x = 2, 4, 5, 6, 7, 8 et le préfixe `D3B-` pour D3-B | D2, D3-B, D4 à D8 | Principe [Décidé] P4T-A06 (un préfixe par dimension). Série DC locale : [Décidé] P4T-A26. Série E réservée aux faits externes ; une décision Élan reprise d'un autre document figure sans identifiant E, avec son origine et son statut ; un identifiant E retiré n'est jamais réutilisé : [Décidé] P4T-A29. Série K au sens strict : [Décidé] P4T-A28. Découpage en P, O, S : [Proposition] |
| `D3A-M` (notes historiques), `D3A-N` (nouvelles notes de recherche), `D3A-E` (faits externes documentés), `D3A-K` (anciennes formulations Élan à corriger), `D3A-P` (propositions), `D3A-O` (points ouverts), `D3A-S` (sources), `D3A-DC` (décisions de conception arbitrées) | D3-A | [Décidé] P4T-A11, précisé par P4T-A33. Identifiants existants inchangés et jamais réutilisés. Aucune note `D3A-N` ni décision `D3A-DC` n'est créée |
| `P4T-F..` frontières ; `P4T-M..` mécanismes ; `P4T-X..` sujets partagés ; `P4T-A..` arbitrages | Registre | Les décisions transversales restent en `P4T-A` ; aucune série `P4T-DC` n'est créée : [Décidé] P4T-A26. Séries F, M, X : [Proposition] |
| `J20` à `J26` | Registre §7 | Attribués après vérification (P4T-A06) ; **provisoires** jusqu'à leur éventuelle inscription formelle dans FR1 §6.2 (P4T-A31), qui reste à autoriser |

- **Numérotation des arbitrages :** la série `P4T-A` se poursuit à partir de `P4T-A26`, après vérification d'unicité dans ce registre ; chaque identifiant correspond à un seul arbitrage réellement validé ; une simple correction documentaire ou une décision déjà enregistrée ne reçoit pas d'identifiant.
- **Documents liés :** D2 à D8 ne sont pas ajoutés aux rubriques « Documents liés » de D1 et de FR1 avant leur validation comme références métier ; leur existence n'est signalée que dans les passages expressément autorisés, avec leur statut provisoire (P4T-A34).

Les clés mnémoniques des sources (par exemple `SP-F2329`, `BDF-FAQ`) sont des libellés de lecture, pas des identifiants. La même clé désigne la même page dans tous les documents.

**Correspondance avant/après E2 (14/11/2026).** Les identifiants retirés ne sont jamais réattribués.

| Avant | Après | Fondement |
|---|---|---|
| D2-E16 ; D3A-E20, D3A-E29, D3A-E30 ; D3B-E18, D3B-E19, D3B-E20 ; D4-E02, D4-E08, D4-E09, D4-E14, D4-E19 ; D5-E25, D5-E26 ; D6-E15, D6-E24 ; D8-E16 | Décisions Élan conservées sans identifiant, avec leur contenu, leur origine et leur statut | P4T-A29 |
| D2-E18 (inférence) | D2-O09 | P4T-A29 |
| D8-E08 (constat de lacune) | D8-O09 | P4T-A29 |
| D8-E10 (montant de l'épargne de précaution) | Retiré au lot LA ; remplacé par une ligne de renvoi vers P1, sans repère chiffré | FR1 arbitrage 11 ; P4T-A29 |
| D3A-E27 (divergence entre sources) | D3A-O11 | Arbitrage du 14/11/2026 |
| D6-E11 | Note historique en texte libre en D6.6, sans identifiant | Arbitrage du 14/11/2026 |
| D6-E01, D6-E03, D6-E14 | Repris dans D6-O02, D6-O03 et D6-O08 ; sources de 2013 et 2019 historiques, sans valeur de preuve actuelle | Arbitrage du 14/11/2026 (M20) ; P4T-A21 |
| D3A-K01, D3A-K02 | D3A-O09, D3A-O10 | P4T-A28 |
| D4-K01, D5-K01, D7-K01 | Retirés ; erreurs de recherche tracées au §11 | P4T-A28 |
| Partie « niveau 4 » de l'ancienne D3A-E30 | D3A-P07 [Proposition], sans effet tant qu'elle n'est pas arbitrée | Arbitrage du 14/11/2026 |
| D4-E21, D4-E22 | Conservés ; nature « Admin. » indiquée | Arbitrage du 14/11/2026 |

**Identifiants retirés, non réattribuables (30) :** D2-E16, D2-E18 ; D3A-E20, D3A-E27, D3A-E29, D3A-E30, D3A-K01, D3A-K02 ; D3B-E18, D3B-E19, D3B-E20 ; D4-E02, D4-E08, D4-E09, D4-E14, D4-E19, D4-K01 ; D5-E25, D5-E26, D5-K01 ; D6-E01, D6-E03, D6-E11, D6-E14, D6-E15, D6-E24 ; D7-K01 ; D8-E08, D8-E10 (lot LA), D8-E16.

### 1.4 Homonymies

| Sigle | Sens dans P4 D2 à D8 | Autre sens |
|---|---|---|
| D3A-DC | Décisions de conception de D3-A | D1-DC (décisions complémentaires de D1) : préfixes complets différents, sans collision |
| D5-…, D6-… | Identifiants de dimension | R15 : décisions D1 à D36 ; le préfixe complet lève l'ambiguïté |
| P4T-A.. | Arbitrages consignés dans ce registre | EP1 A1 à A3 ; R15 A1 à A10 ; D1-A1 à D1-A7 |
| Caution | D4 : engagement personnel | D1 : garantie des cautions professionnelles |
| Mécanisme A / B | D7 : articles L113-15-1 et L113-15-2 | — |

---

## 2. Frontières internes à P4

| N° | Frontière | Règle | Origine |
|---|---|---|---|
| P4T-F01 | D2 / D1 | Cantonnement et protection des fonds dans D1 ; fonctionnement des services de paiement et conséquences opérationnelles dans D2 | D1-C8, D1-AF6 [Décidé] |
| P4T-F02 | D2 / D3-A | Incidents opérationnels du compte dans D2 ; contestations, fraudes et recours dans D3-A. Les délais de contestation sont dans D3-A, et D2 y renvoie | P4T-A04 [Décidé] ; répartition des délais [Proposition] |
| P4T-F03 | D2 / D3-A | Droit au compte et clôture du compte par la banque dans D3-A ; D2 garde les plafonds de frais de l'offre liée | D1-A3, FR1 §2 [Décidé] |
| P4T-F04 | D2 / D3-B | Services et plafonnements de frais (y compris pour la clientèle fragile) dans D2 ; difficultés financières et fichiers dans D3-B | P4T-A20 [Décidé] |
| P4T-F05 | D2 / D4 | Découvert comme service dans D2 ; crédit, coût, taux d'usure, analyse de solvabilité et proposition d'un crédit au-delà de 3 mois dans D4 | P4T-A04 [Décidé] ; affectation des règles [Proposition] |
| P4T-F06 | D3-A / D1 | D1 identifie les acteurs et les médiateurs ; D3-A traite les médiateurs, réclamations, droit au compte et fraude subie | D1-A3, D1-A4, D1-AF8 [Décidé] |
| P4T-F07 | D3-A / D3-B | Deux documents et deux espaces de données distincts | P4T-A09, bilan §8 [Décidé] |
| P4T-F08 | D3-A / D7 | Litiges bancaires dans D3-A ; litiges d'assurance, y compris d'assurance-vie, dans D7 | P4T-A04 [Décidé] |
| P4T-F09 | D3-A / D1 / base commune | Escroqueries où l'opération a été autorisée : prévention dans la base anti-arnaque commune, vérification des acteurs dans D1 | [Proposition] |
| P4T-F10 | D3-B / P1 | Mécanismes, droits, procédure, fichiers et créanciers financiers dans D3-B ; budget, capacité réelle et impayés non financiers dans P1 | FR1 arbitrages 2, 23 [Décidé] |
| P4T-F11 | D3-B / D4 | Incidents de crédit dans D4, puis difficultés et surendettement dans D3-B | Bilan ; FR1 §2 [Décidé] |
| P4T-F12 | D4 / D7 | Assurance emprunteur : exigence, équivalence et coût dans le crédit dans D4 ; contrat, garanties et exclusions dans D7 | P4T-A20 [Décidé] |
| P4T-F13 | D4 / D1 | Caution personnelle (D4) et garantie des cautions professionnelles (D1), jamais présentées comme équivalentes | D1-DC2 [Décidé] |
| P4T-F14 | D4 / P1 | Évaluation de la solvabilité par le prêteur dans D4 ; capacité budgétaire réelle dans P1 | FR1 arbitrages 14, 31 [Décidé] |
| P4T-F15 | D5 / D1 | Protection institutionnelle dans D1 ; caractéristiques des supports d'épargne dans D5 | D1-C5, D1-C6 [Décidé] |
| P4T-F16 | D5 / D6 | Enveloppes dans D5 ; supports dans D6 ; renvoi croisé pour l'assurance-vie en unités de compte, le PEA et le compte-titres | P4T-A04 [Décidé] ; renvoi croisé [Proposition] |
| P4T-F17 | D8 / D4 à D7 | D8 mobilise les mécanismes décrits dans D4, D5, D6 et D7 sans les dupliquer | FR1 arbitrage 15 [Décidé] ; application [Proposition] |
| P4T-F18 | D6 / D1 | D1 vérifie l'acteur (y compris un prestataire de services d'investissement pour les dérivés) ; D6 explique les produits et leurs risques | Option C, D1-AF22, D1-AF26 [Décidé] |
| P4T-F19 | D7 / D1 | Organismes de garantie dans D1 ; contrats d'assurance dans D7. Règle de présentation distincte : aucun montant de garantie n'est repris dans D7 | D1-C4 [Décidé] ; règle sans montants : D1 Q3 [Décidé] et D1 §6.7 |
| P4T-F20 | D8 / P1 | Définition et organisation des objectifs, montant de l'épargne de précaution et calcul personnel dans P1 ; choix entre solutions dans D8 | FR1 arbitrages 11, 15 [Décidé] |
| P4T-F21 | D8 / D1 | Vérification d'un conseiller en investissements financiers dans D1 ; méthode et questions dans D8 | P4T-A20 [Décidé] |

**Frontières fragiles, à surveiller :**
- l'assurance-vie en unités de compte (D5, D6, D7) ;
- l'assurance emprunteur (D4, D7) ;
- le découvert (D2, D4) ;
- la procédure de réclamation, commune à D3-A et D7 ;
- les prélèvements sociaux (D5, D6).

## 3. Relations avec P1, P2, P3 et P5

| Pilier | Points d'articulation | Dimensions P4 | Références |
|---|---|---|---|
| P1 | Budget ; impayés non financiers ; capacité de remboursement ; épargne de précaution ; préparation personnelle de la retraite ; assurance (P1 D4.3) ; paiement fractionné (conséquences budgétaires) ; revenus réellement conservés ; entrée commune « Je n'arrive plus à rembourser » | D2, D3-B, D4, D5, D6, D7, D8 | FR1 arbitrages 2, 5, 10, 11, 14, 15, 16, 23, 31 ; EP1 A2 ; AI1 |
| P2 | Protections liées à l'activité (D7) ; bien immobilier exploité dans une activité (D6) ; lien éventuel avec les difficultés d'une entreprise (D3-B, proposition à étudier) | D3-B, D6, D7 | Bilan ; FR1 arbitrage 16 ; P4T-A08 |
| P3 | Épargne salariale : P3 traite les droits et le contexte professionnel, P4 (D5) les mécanismes financiers, les supports, la disponibilité, la fiscalité et les risques ; carrière et droits à la retraite ; perte d'emploi menant à des difficultés de remboursement (D3-B) ; protections liées au statut (D7) | D3-B, D5, D7 | Bilan (D5) ; FR1 arbitrage 10 ; arbitrage du 14/11/2026 sur l'épargne salariale (sans identifiant, frontière déjà enregistrée par le bilan) |
| P5 | Système collectif de retraite. Monnaie, BCE et politiques monétaires : P5 traite leur dimension collective ; P4 traite leurs conséquences concrètes sur les comptes, le crédit, l'épargne et les investissements, par des renvois et sans doublon pédagogique | D5 (retraite) ; D4, D5, D6, D8 (renvois à prévoir) | FR1 arbitrage 10 ; P4T-A30 |

## 4. Mécanismes communs (description unique)

| N° | Mécanisme | Statut dans P4 | Utilisé par | Règles communes |
|---|---|---|---|---|
| P4T-M01 | Moteur d'analyse documentaire (décodeur) | Premier usage stabilisé : décodeur d'offre de crédit (D4) [Élan validé] ; extensions (épargne, assurance, produits, tarifs) envisagées, non décidées [Ouvert] | D4 ; D2, D5, D6, D7 (extensions) | Aucun archivage automatique des documents transmis ; analyse et archivage sont deux fonctions distinctes ; jamais une recommandation de souscription ni une validation de solvabilité (bilan §5, §8) |
| P4T-M02 | Comparaison d'offres fournies par l'utilisateur | Règle restrictive [Élan validé] bilan §7 | D2, D4, D5, D6 (mécanismes seulement), D7 | Seulement des offres que l'utilisateur a reçues et fournies ; aucune sélection, aucun classement de marché, aucune orientation, aucune commission ; revue juridique avant développement : J11 à J13 |
| P4T-M03 | Moteur de simulation numérique | Simulation de crédit : usage ultérieur candidat [Décidé] FR1 12, 21, 27 ; autres scénarios envisagés | D4, D5, D6, D8 | Formules stables distinctes des paramètres datés ; ce qui est calculé et ce qui n'est pas vérifié sont dits ; pas de contrôle d'usure requis au départ (bilan §9) |
| P4T-M04 | Moteur de suivi | Usages possibles ; aucun premier usage stabilisé (bilan §5) | D3-A, D3-B, D7, D8 | Ne pas transformer une piste en décision stabilisée ; données D3 à protection renforcée |
| P4T-M05 | Moteur de diagnostic et d'orientation | Usages possibles ; aucun premier usage stabilisé (bilan §5) | D3-A, D3-B | Sans architecture technique (P4T-A07) ; aucune décision automatisée |
| P4T-M06 | Service d'aide immédiate | Transversal [Élan validé] ; entrées « Je suis victime d'une fraude » et « Je n'arrive plus à rembourser » | D3-A, D3-B | Contenus fixes, rédigés et validés humainement ; distinct des alertes ; [Renvoi] AI1 |
| P4T-M07 | Vérificateur d'acteur financier | Premier usage stabilisé du moteur de vérification d'acteurs (D1) [Élan validé] | D1 ; D6, D8 (renvoi) | [Renvoi] D1.7 |
| P4T-M08 | Bibliothèque commune de connaissances et de sources ; paramètres datés | [Élan validé] bilan §5, §9 | Toutes | Chaque paramètre a une source, une date de vérification et un responsable ; sans responsable, la fonction qui en dépend n'est pas lancée |
| P4T-M09 | Base anti-arnaque commune | [Décidé] D1-C2, D1-AF23 | D2, D3-A, D6, D8 | Aucune seconde base ; aucune alerte automatique ; gouvernance commune |

Règles transversales [Élan validé] (bilan §8 et §10) : Élan ne demande jamais d'identifiants, de mots de passe, de codes bancaires ni de numéro de carte ; pas d'agrégation de comptes, d'exécution d'opérations, de gestion automatique, d'automatisation juridique complète ni de décision automatisée.

## 5. Sujets partagés

| N° | Sujet | Répartition | Documents |
|---|---|---|---|
| P4T-X01 | Prélèvements sociaux et fiscalité | Cadre de l'enveloppe ou du contrat dans D5 (D5.5) ; régimes des supports et revenus dans D6 (D6.9). Base légale commune : CSS L136-8 (CSG de 10,6 % ou 9,2 %). Calcul personnel : P1 | D5, D6 (P4T-A19) |
| P4T-X02 | Réclamation et médiation | Procédure ACPR commune : cadre bancaire dans D3-A (D3A.4), spécificités d'assurance dans D7 (D7.8) ; archive D3A-M | D3-A, D7 |
| P4T-X03 | Assurance-vie en unités de compte, PEA, compte-titres | Enveloppe dans D5 ; supports dans D6 ; litiges dans D7 | D5, D6, D7 |
| P4T-X04 | Assurance emprunteur | P4T-F12 | D4, D7 |
| P4T-X05 | Découvert | P4T-F05 ; régime au 13/11/2026 seulement | D2, D4 |
| P4T-X06 | Taux d'usure | Décrit dans P4 D4 (D4.3) ; D2 y renvoie | D2, D4 |
| P4T-X07 | FICP et FCC | Décrits dans D3-B (D3B.3) ; D2 et D4 y renvoient | D2, D3-B, D4 |
| P4T-X08 | Conseillers en investissements financiers | Statut et vérification dans D1 ; méthode dans D8 | D1, D8 |
| P4T-X09 | Épargne de précaution | Montant et usage dans P1 ; supports dans D5 ; protection dans D1 ; repère historique de l'AMF cité dans D8 | P1, D1, D5, D8 |
| P4T-X10 | Frais de la clientèle fragile | P4T-F04 | D2, D3-B |
| P4T-X11 | Crypto-actifs | Acteurs dans D1 ; section complémentaire dans D6 (D6.12) ; médiation dans l'archive D3A-M13 | D1, D6, D3-A |
| P4T-X12 | Frais des placements | Types de frais dans D6 (D6.8) ; frais propres aux enveloppes dans D5 ; usage comme critère dans D8 | D5, D6, D8 |

## 6. Arbitrages appliqués

| N° | Arbitrage | Date | Statut |
|---|---|---|---|
| P4T-A01 | Plan, arbitrage 1 : statuts de D1 ; faits externes avec sources, organismes et dates ; [Partiel] réservé aux archives | Plan validé (13/11/2026) | [Décidé] |
| P4T-A02 | Plan, arbitrage 2 : périmètre central de D6 | Idem | [Décidé] |
| P4T-A03 | Plan, arbitrage 3 : un document par dimension, D3 en deux espaces, un registre transversal | Idem | [Décidé] |
| P4T-A04 | Plan, arbitrage 4 : frontières D2/D3-A, D2/D4, D3-A/D7, D5/D6 ; répartition de la retraite | Idem | [Décidé] |
| P4T-A05 | Plan, arbitrage 5 : relecture de l'ancien projet sans copie ni validation | Idem | [Décidé] ; aucun contenu historique n'est repris dans D2 à D8 |
| P4T-A06 | Plan, arbitrage 6 : préfixes propres à chaque dimension ; J20 et suivants après vérification | Idem | [Décidé] |
| P4T-A07 | Plan, arbitrage 7 : moteurs D3 décrits par leurs besoins, premiers usages et expériences, sans architecture | Idem | [Décidé] |
| P4T-A08 | Plan, arbitrage 8 : lien D3-B / P2 à l'état de proposition ; séparation stricte | Idem | [Décidé] |
| P4T-A09 | Plan, arbitrage 9 : deux documents D3-A et D3-B | Idem | [Décidé] |
| P4T-A10 | Plan, arbitrage 10 : crypto-actifs en section complémentaire de D6 ; D1 non modifié | Idem | [Décidé] |
| P4T-A11 | Plan, arbitrage 11 : identifiants D3A-M, D3A-N, D3A-DC, D3A-S | Idem | [Décidé] ; précisé par P4T-A33 |
| P4T-A12 | Plan, arbitrage 12 : Légifrance consulté seulement si une source administrative ne suffit pas | Idem | [Décidé] |
| P4T-A13 | Plan, arbitrage 13 : PDF officiels seulement si indispensable, sans archivage | Idem | [Décidé] |
| P4T-A14 | Complément, arbitrage 1 : reconstruction après les recherches ; D4 selon le droit au 13/11/2026 ; réforme du 20/11 jamais présentée comme applicable | 13/11/2026 | [Décidé] ; précisé par P4T-A32 |
| P4T-A15 | Complément, arbitrage 2 : Légifrance pour les frais d'opposition, la responsabilité et la négligence | 13/11/2026 | [Décidé] |
| P4T-A16 | Complément, arbitrage 3 : PDF de la recommandation n° 6 de l'OSMP, pour D3-A seulement | 13/11/2026 | [Décidé] |
| P4T-A17 | Complément, arbitrage 4 : article L113-15-1 pour D7 | 13/11/2026 | [Décidé] |
| P4T-A18 | Complément, arbitrage 5 : fiscalité de l'assurance-vie approfondie à partir de sources officielles | 13/11/2026 | [Décidé] |
| P4T-A19 | Complément, arbitrage 6 : fiscalité des enveloppes et contrats dans D5 ; fiscalité des supports et revenus dans D6 | 13/11/2026 | [Décidé] |
| P4T-A20 | Complément, arbitrage 7 : assurance emprunteur (D4 / D7) ; frais de la clientèle fragile (D2 / D3-B) ; conseillers en investissements financiers (D1 / D8) | 13/11/2026 | [Décidé] |
| P4T-A21 | Complément, arbitrage 8 : sources AMF de 2016 à 2018 comme références historiques ; toute affirmation actuelle confirmée par une source récente | 13/11/2026 | [Décidé] |
| P4T-A22 | Complément, arbitrage 9 : recherches complémentaires avant la reconstruction | 13/11/2026 | [Décidé] ; réalisé |
| P4T-A23 | Arbitrage 10 : vérification sur Légifrance de l'article 12 de la LFSS 2026 et des articles nécessaires (D5) | 13/11/2026 | [Décidé] ; réalisé |
| P4T-A24 | Arbitrage 11 : lecture sur Légifrance de l'article L113-15-2 et comparaison avec L113-15-1 (D7) | 13/11/2026 | [Décidé] ; réalisé |
| P4T-A25 | Autorisation de reconstruction simultanée de D2 à D8 et du registre ; neuf fichiers autorisés | 13/11/2026 | [Décidé] |
| P4T-A26 | Aucune série `P4T-DC` n'est créée. Les décisions transversales restent en `P4T-A` ; les décisions métier peuvent utiliser une série DC locale. Origine : décision 1 des quinze arbitrages consécutifs à l'inventaire E0 ; tranche la question de la série DC (arbitrage complémentaire A3) et la mention de `P4T-DC` (arbitrage complémentaire A4 de la série de sept) | 14/11/2026 | [Décidé] |
| P4T-A27 | J15 et J17 conservent strictement leurs périmètres actuels dans FR1 ; aucune extension aux dimensions D2 à D8, notamment D8. Origine : décision 3 des quinze ; tranche l'arbitrage complémentaire A6 | 14/11/2026 | [Décidé] |
| P4T-A28 | `[À corriger]` est réservé à un ancien contenu Élan identifiable ; les divergences entre sources externes deviennent `[Ouvert]` ; les erreurs provenant de rapports de recherche sont retirées des documents métier et tracées dans ce registre. Origines fusionnées : arbitrage complémentaire A2 ; arbitrage A3 de la série de sept ; décision 4 des quinze | 14/11/2026 | [Décidé] |
| P4T-A29 | Séparation stricte des faits externes et des décisions Élan : une décision reprise d'un autre document figure sans identifiant E, avec son contenu, son origine et son statut ; un identifiant E retiré n'est jamais réutilisé ; une table de correspondance avant/après accompagne toute requalification. Origines fusionnées : arbitrage complémentaire A1 ; arbitrage A2 de la série de sept ; décision 5 des quinze | 14/11/2026 | [Décidé] ; application aux lignes concernées prévue en E2 |
| P4T-A30 | P5 traite la monnaie, la BCE et les politiques monétaires dans leur dimension collective ; P4 traite leurs conséquences concrètes sur les comptes, le crédit, l'épargne et les investissements ; renvois sans doublon pédagogique. Origine : décision 10 des quinze | 14/11/2026 | [Décidé] ; renvois à prévoir |
| P4T-A31 | J20 à J26 restent provisoires jusqu'à leur éventuelle inscription formelle dans FR1. Origine : décision 12 des quinze ; complète P4T-A06 | 14/11/2026 | [Décidé] |
| P4T-A32 | D4 peut être rédigé avec le droit vérifié à la date de rédaction, cette date étant indiquée explicitement avec les points en attente ; une mise à jour distincte est prévue après le 20/11/2026 ; si la réforme change effectivement le droit applicable, D4 est actualisé avant sa validation finale. Origine : arbitrage A5 de la série de sept ; précise P4T-A14 | 14/11/2026 | [Décidé] |
| P4T-A33 | Séries de D3-A validées : D3A-M (notes historiques), D3A-N (nouvelles notes de recherche), D3A-E (faits externes documentés), D3A-K (anciennes formulations Élan à corriger), D3A-P (propositions), D3A-O (points ouverts), D3A-S (sources), D3A-DC (décisions de conception arbitrées) ; identifiants existants inchangés et jamais réutilisés. Origine : arbitrage A4 de la série de sept ; précise P4T-A11 | 14/11/2026 | [Décidé] |
| P4T-A34 | D2 à D8 ne sont pas ajoutés aux rubriques « Documents liés » de D1 et de FR1 avant leur validation comme références métier ; leur existence peut être signalée dans les passages expressément autorisés, avec leur statut provisoire. Origine : arbitrage A6 de la série de sept | 14/11/2026 | [Décidé] |

Les arbitrages P4T-A01 à P4T-A25 sont repris des messages de validation du 13 novembre 2026 ; les arbitrages P4T-A26 à P4T-A34, des messages de validation du 14 novembre 2026. Leur texte d'origine est conservé dans l'historique de session local, hors du dépôt (limite de traçabilité déjà signalée pour D1).

## 7. Registre juridique

### 7.1 Points existants (FR1 §6.2), applicables à D2 à D8

| Point | Objet | Dimensions concernées |
|---|---|---|
| J11 | Comparaison d'offres fournies par l'utilisateur | D2, D4, D5, D7 |
| J12 | Limites entre information, comparaison et conseil | D2, D4, D5, D6, D8 |
| J13 | Risque de qualification en intermédiation financière | D2, D4, D7 |
| J15 | Frontière entre information pédagogique et conseil réglementé (issu de D1) | Aucune extension : périmètre strict de FR1 §6.2 (P4 D1, D1.1) (P4T-A27) |
| J17 | Non-garantie liée aux inscriptions à l'ORIAS et à une association (issu de D1) | Aucune extension : périmètre strict de FR1 §6.2 (P4 D1, D1.1, D1.2, D1.6) (P4T-A27) |
| J18 | Statut des prestataires de services sur crypto-actifs (issu de D1) | D6 (D6.12) |
| J19 | Tentative amiable préalable sous 5 000 € (D3A-M12) | D3-A |

### 7.2 Nouveaux points J20 à J26

Tous [En attente de revue juridique] et **provisoires** jusqu'à leur éventuelle inscription formelle dans FR1 §6.2 (P4T-A31). Attribués le 13/11/2026 après vérification de l'absence de tout identifiant J20 ou suivant dans le projet. **FR1 §6.2 n'est pas mis à jour** : leur inscription relève de la mise à jour groupée de FR1, soumise à autorisation.

| Point | Dimension | Objet | Origine |
|---|---|---|---|
| J20 | D2, D3-A | Base légale et portée des délais de contestation hors EEE : 70 jours et jusqu'à 120 jours par contrat | D3A-E06 ; absent des articles L133 lus |
| J21 | D3-A | Critères de la négligence grave ; manipulation de la victime ; portée de la position de la Banque de France sur l'usurpation de numéro | D3A-E12, D3A-E15, D3A-O03, D3A-O04 |
| J22 | D3-A | Coût d'appel au numéro d'opposition surtaxé au regard de L133-26 IV | D3A-O01 |
| J23 | D3-B | Formulation des effets de la recevabilité ; lien entre clientèle fragile et clôture du compte en rétablissement personnel | D3B-E07 |
| J24 | D4 | Régime du paiement fractionné ou différé au 13/11/2026 ; portée de l'énoncé transitoire sur les découverts autorisés avant le 20/11/2026 | D4-O04, D4-E21 |
| J25 | D5 | Champ des « placements de même nature » (CGI art. 125-0 A) et portée de la formulation d'impots.gouv sur les contrats concernés par le taux réduit | D5-O04 |
| J26 | D7 | Prise d'effet d'une dénonciation effectuée dans la fenêtre de 20 jours prévue par L113-15-1 | D7-O03 |

## 8. Sources partagées

Les mêmes clés désignent les mêmes pages, consultées le 13/11/2026. Chaque document décrit ses sources dans son annexe A.

| Clé | Documents |
|---|---|
| SP-F2329 | D5, D6 |
| SP-F2417 | D2, D3-A |
| SP-F20752 | D2, D3-A |
| SP-F31423, SP-A18569 | D2, D4 |
| SP-F2457 | D4, D7 |
| BDF-CARTE, BDF-SEPA | D2, D3-A |
| BDF-FAQ | D3-A, D7 |
| ABE-RECLA, ACPR-RECLA | D3-A, D7 |
| ABE-FRAIS | D5, D6, D8 |
| AMF-LIQ, AMF-FRAIS, AMF-DIVERS | D6, D8 |
| AMF-CTO | D5 |
| CSS-L136-8, LFSS2026-A12 | D5, D6 |
| Sources de D1 (S11, S12, S42, S43) | D6 (D6.12, par renvoi aux faits et notes de D1) |

## 9. Paramètres datés et maintenance

| Famille | Documents | Source principale | Fréquence connue |
|---|---|---|---|
| Plafonds de frais bancaires, sans contact, espèces | D2 | BDF-FRAIS, BDF-FRAGILE, SP | Non sourcée |
| Seuils d'usure | D4 | BDF-USURE-Q4 | Trimestrielle (D4-E05) |
| Taux et plafonds des livrets, CEL, PEL | D5 | SP-A18000, BDF-LIVRETS | Non sourcée |
| Plafonds du PEA et du PER | D5 | SP-F2385, SP-F34982 | Non sourcée |
| Taux de CSG et de prélèvements sociaux | D5, D6 | CSS-L136-8, SP-F2329 | Selon la loi |
| Seuils fiscaux (micro-foncier, déficit, dispense) | D6 | SP-F1991, SP-F2613 | Non sourcée |

Pour toutes les familles, le responsable et la fréquence de contrôle restent [Ouvert]. Sans responsable, aucune fonction qui dépend de ces paramètres n'est lancée (bilan §9 ; P4T-M08). Toute fonction affichant un paramètre indique sa source et sa date.

## 10. Dépendances non intégrées

| Élément | Destination | État | Référence |
|---|---|---|---|
| J20 à J26 | FR1 §6.2 | Non inscrits ; mise à jour groupée de FR1 à autoriser | §7.2 |
| D1 §4.2 décrit P4 D6 et P4 D3-A comme « inexistants » | D1 | D6 et D3-A existent désormais comme propositions non validées ; **D1 n'est pas modifié** ; une mise en cohérence éventuelle demande une autorisation | D1-N15, D1-N16 intégrées par renvoi en D6.12 |
| Base anti-arnaque commune | Document commun | Inexistante en tant que document | P4T-M09 |
| Réforme du crédit à la consommation (20/11/2026) | D2, D3-B, D4 | Non applicable au 13/11/2026 ; vérification après l'entrée en vigueur | D4.11 ; D2-O04 ; D3B-O07 |
| Catégories de contrats couvertes par L113-15-2 | D7 | Décret R113-11 identifié et lu intégralement (version du 20/03/2022) ; reste à préciser les contrats combinant plusieurs garanties ou ne correspondant pas exactement aux catégories | D7-O04 |
| Décret en Conseil d'État prévu par L113-15-2-1 (contrats professionnels des microentreprises et PME) | D7 | Non identifié au 16/11/2026 ; le droit n'est pas présenté comme applicable avant sa publication ; vérification ultérieure à prévoir | D7-E26 |
| Articles CGI 125-0 A et 199 septies ; lois n° 2016-1918 et n° 2017-1836 | D5 | Non lus | D5-O04, D5-O05 |
| Mise à jour du bilan P4 | Bilan | Non prévue ; le bilan reste une synthèse provisoire (FR1 arbitrages 3, 30) | — |

## 11. Divergences et incohérences non résolues

| N° | Sujet | Documents | Statut |
|---|---|---|---|
| 1 | Droit au compte : désignation sous « 1 jour ouvré » (Service-Public) ou « 24 heures » (Banque de France) | D3-A | [Ouvert] ; point traité le 18/11/2026 : L312-1 III fixe « un jour ouvré à compter de la réception des pièces requises » (D3A-O11) ; clôture à décider |
| 2 | Opposition : coût d'appel de 0,34 ou 0,35 €/min | D3-A | [Ouvert] ; J22 |
| 3 | Délai de 70 jours hors EEE : présent dans les sources administratives, absent des articles lus | D2, D3-A | [Ouvert] ; J20 |
| 4 | Rectification d'une inscription au FICP liée au surendettement : commission ou Banque de France | D3-B | [Ouvert] |
| 5 | Pièce d'identité pour consulter le FICP (lieu de naissance) ; gratuité de la consultation | D3-B | [Ouvert] |
| 6 | Attestation de dépôt : « moins d'une semaine » (BDF-27032), isolé face à 2 jours ouvrables | D3-B | [Ouvert], mineur |
| 7 | Tableau d'usure : en-tête « 20 novembre » ou note « 1er octobre » | D4 | [Ouvert] |
| 8 | SP-F2436 : 7 jours « calendaires » ou « ouvrables » ; SP-F31423 : date de vérification non fiable ; deux liens ELI pour l'ordonnance n° 2025-880 | D2, D4 | [Ouvert] |
| 9 | Champ des « placements de même nature » et taux réduit de l'assurance-vie | D5 | [En attente de revue juridique] J25 |
| 10 | Année d'application du taux de 10,6 % aux revenus du patrimoine (2025 ou 2026) | D5, D6 | [Ouvert] |
| 11 | Épargne de précaution : 2 ou 3 mois (AMF 2018) ou 3 à 6 mois (non vérifié) | D8 ; P1 | [Ouvert] ; relève de P1 |
| 12 | Réclamation d'assurance : la recommandation ACPR 2024-R-02 (point 3.1.1, texte intégral vérifié le 16/11/2026) fixe dix jours ouvrables pour l'accusé de réception et deux mois pour la réponse (D7-E23) ; la FAQ BDF écrit « dix jours à compter de l'envoi » pour l'assurance, formulation abrégée et non contradictoire, qui n'impose pas des jours calendaires | D7 | Résolu par D7-DC02 (D7-O11 clos ; décision du fondateur du 17/11/2026) ; historique : point traité le 16/11/2026 par D7-E23 ; formulation de la FAQ signalée, non reprise |
| 13 | SP-F2659 : interdiction d'envoi par l'assuré, puis moyens d'envoi énumérés ; les textes lus ne contiennent pas cette interdiction (L113-14 ; R113-12 IV) | D7 | [Ouvert] ; hors du périmètre résiduel de J26 |
| 14 | Place de la finance responsable, solidaire et à impact, et de la finance islamique : hors périmètre central, traitement non décidé | D6, D8 | [Ouvert] : arbitrage à prendre |
| 15 | Séries `D3A-E`, `D3A-K`, `D3A-P`, `D3A-O` : convention de séries et identifiants décidés par P4T-A33 (registre §1.3). Cette décision porte uniquement sur la numérotation ; elle ne valide pas les contenus métier de D3-A, qui restent non validés | D3-A | [Décidé] P4T-A33 (convention seulement) |
| 16 | Incohérence évitée : une proposition de recherche antérieure plaçait le droit au compte comme service en D2. Elle contredisait D1-A3 et FR1 §2 ; le droit au compte est donc placé dans D3-A | D2, D3-A | Résolue par application des décisions validées |
| 17 | Erreur de recherche retirée (ancien D4-K01) : seuils d'usure du 2e trimestre 2026, repris de la fiche Service-Public F2440 (vérifiée le 01/07/2026) dans le rapport de phase 2 | D4 | Retirée (P4T-A28) |
| 18 | Erreur de recherche retirée (ancien D5-K01) : conclusion « fonds en euros et unités de compte soumis à 18,6 % en 2026 », contraire à CSS L136-8 IV | D5 | Retirée (P4T-A28) |
| 19 | Erreur de recherche retirée (ancien D7-K01) : prise d'effet « au lendemain » attribuée à tous les cas, alors que L113-15-1 ne l'énonce qu'à l'alinéa 2 | D7 | Retirée (P4T-A28) |
| 20 | Chiffre de 150 € (ancien D3A-K02), accepté auparavant comme [À corriger] : requalifié en divergence entre sources, D3A-O10 | D3-A | [Ouvert] (P4T-A28) ; point traité le 18/11/2026 : 150 € est le plafond de L133-19 I en vigueur du 01/11/2009 au 13/01/2018 ; page OSMP non datée ; clôture à décider |
| 21 | D8-E10 (montant de l'épargne de précaution, frontière avec P1) et D3A-O07 (écart avec l'archive des médiateurs) : traités au lot LA du 14/11/2026 ; D8-E10 retiré et remplacé par un renvoi vers P1 ; D3A-O07 réaligné sur l'archive et limité au délai maximal de saisine du médiateur bancaire | D8, D3-A | D8-E10 : résolu ; D3A-O07 : [Ouvert] (délai seulement) |
| 22 | Remboursement après résiliation (mécanisme B) : 30 jours « à compter de la date de résiliation » (L113-15-2, al. 4) et « à compter de la date de prise d'effet » (R113-12 II) ; formulations non fusionnées, identité des dates non affirmée | D7 (D7-E13) | [Ouvert] ; à soumettre à une revue juridique ; hors J26 |

## 12. Contrôle de cohérence avant livraison (13/11/2026)

| Contrôle | Résultat |
|---|---|
| Doublons entre dimensions | Les faits partagés sont décrits une seule fois et cités ailleurs par renvoi : délais de contestation (D3-A), usure (D4), FICP et FCC (D3-B), prélèvements sociaux (D5 pour le texte, D6 pour les revenus), types de frais (D6), assurance emprunteur (D4, avec renvoi de D7) |
| Cohérence des renvois | Chaque référence `P4T-F`, `P4T-M`, `P4T-X`, `P4T-A`, `J` et les renvois nommés entre documents ont été vérifiés par recherche de texte |
| Contradictions entre règles partagées | Aucune contradiction trouvée. Les taux de prélèvements sociaux sont identiques dans D5 et D6 (18,6 % en général, 17,2 % pour le taux réduit). Le droit au compte est uniquement dans D3-A |
| Faits établis / propositions | Les colonnes « Nature » et « Statut » sont séparées ; les propositions portent un identifiant `-P` |
| Réserves obligatoires | Toutes présentes : D3-A (négligence grave, manipulation, médiation, seuils) ; D3-B (rectification du FICP, gratuité) ; D4 (droit au 13/11 seulement) ; D5 (placements de même nature, mesures transitoires) ; D6 (SCPI, liquidité, plafonnement des rachats, année fiscale) ; D7 (avis tardif, articulation, liste réglementaire) ; D8 (épargne de précaution, biais, inflation, sources historiques) |
| Unicité des identifiants | Vérifiée dans `docs/` avant et après création (§1.3) |
| Emplacement des fichiers | Neuf fichiers, tous dans `docs/decisions/`, aux noms autorisés |
| Validation juridique | Aucun document n'est déclaré juridiquement validé |


### 12.1 Contrôle complémentaire après mise à jour de D7 (16/11/2026)

Le contrôle du 13/11/2026 ci-dessus est conservé comme photographie de l'état documentaire à cette date. Après mise à jour de D7 :

- R113-12 a été lu intégralement ; il comporte cinq paragraphes (I à V). L'articulation des mécanismes (I), l'avis de résiliation et le rappel du remboursement à compter de la date de prise d'effet (II), les formalités du nouvel assureur (III et IV) et les contrats souscrits par un employeur au profit de ses salariés (V) sont documentés. L'identité entre la « date de résiliation » de L113-15-2 et la « date de prise d'effet » de R113-12 II n'est pas affirmée (§11, n° 22).
- Le décret R113-11 a été identifié et lu intégralement ; le traitement des contrats combinant plusieurs garanties ou ne correspondant pas exactement aux catégories réglementaires reste ouvert.
- J26 est désormais limité à la prise d'effet d'une dénonciation effectuée dans la fenêtre de 20 jours prévue par L113-15-1.
- Lot complémentaire du 16/11/2026 : périmètre de D7 centré sur la personne assurée à titre individuel, avec une note de périmètre sur les contrats collectifs souscrits par un employeur (option A) ; faits ajoutés D7-E25 (contre-expertise, L113-5-1), D7-E26 (L113-15-2-1, application différée jusqu'au décret), D7-E27 et D7-E28 (assurance emprunteur, L113-12-2 et L113-15-3) ; délais de réclamation documentés comme standards de la recommandation ACPR 2024-R-02, point 3.1.1 (D7-E23) ; D7-O11 reste ouvert pour la seule divergence avec BDF-FAQ.
- Lot consolidé du 16/11/2026 : faits ajoutés D7-E29 à D7-E33 (exclusions, principe indemnitaire, déclaration du sinistre, déchéance, exécution de la prestation) ; sources D7-S12 à D7-S15 (L113-14, L113-1, L112-4, L121-1) ; correction de D7-E19 selon L113-14 ; D7.7 limité aux assurances et assistances attachées aux moyens de paiement ; D7-O07 et D7-O11 marqués comme traités, maintenus [Ouvert] dans l'attente d'une convention de clôture des points ouverts.
- Lot des huit points restants du 16/11/2026 : faits ajoutés D7-E34 à D7-E41 (catégories d'organismes, résiliation en mutuelle, non-paiement des primes en assurance-vie, catastrophes naturelles, médiation de la consommation, FIN-NET, assurance moyens de paiement) ; sources D7-S16 à D7-S24 ; D7-O09 et D7-O12 marqués comme traités et maintenus [Ouvert] dans l'attente d'une convention de clôture ; D7-O01, O02, O04, O06, O08 et O10 restent ouverts.
- Convention de clôture des points ouverts de D7 : décision D7-DC01 [Décidé] (16/11/2026), portée limitée à D7, première décision de la série locale D7-DC (registre §1.3 ; P4T-A26). Dans D7, seuls les statuts [Décidé] et [Ouvert] de D1 §0.1 sont employés pour les points ouverts ; la revue juridique y est signalée sous [Ouvert] par les mentions « À soumettre à une revue juridique » puis « Revue juridique engagée — Jxx » ; J11, J13, J26 et la réserve sur D7-E13 y portent [Ouvert] « À soumettre à une revue juridique », sans changement d'identifiant, de question ni de périmètre. Clôture par décision de lot ; aucun point n'est clôturé par cette décision. La présentation transversale du §7 du présent registre n'est pas modifiée par D7-DC01.
- Lot L1 du 16/11/2026 (textes complémentaires) : faits ajoutés D7-E42 (renonciation en assurance-vie, L132-5-1, L132-5-2, A132-4, A132-4-2), D7-E43 (notification et résiliation en ligne en mutuelle, L221-10-3, D221-1) et D7-E44 (assurance du locataire : champ, obligation, assurance pour compte, loi n° 89-462, art. 2, 7 g et 25-3, décret n° 2016-383) ; sources D7-S25 à D7-S34 ; réserves de D7-E06, D7-E14 et D7-E35 mises à jour ; D7-O06 reste [Ouvert] (liste complète de L132-5-2 non lue intégralement). Aucun point clôturé.
- Lot L4 du 17/11/2026 (sinistres, expertise, indemnisation) : faits ajoutés D7-E45 (prescription, L114-1 à L114-3), D7-E46 à D7-E48 (catastrophes naturelles : reconnaissance et franchise, relogement d'urgence, sécheresse-réhydratation des sols, D125-1 à R125-12), D7-E49 (catastrophes technologiques, L128-1 à L128-4), D7-E50 (deux garanties distinctes aux champs différents : tempêtes, contrats incendie ou autres dommages aux biens et dommages aux corps de véhicules terrestres à moteur, L122-7 ; attentats, contrats incendie et dommages aux corps de véhicules terrestres à moteur, L126-2 et L126-3 ; dommages corporels du terrorisme, L126-1), D7-E51 (accidents de la circulation, L211-8, L211-9, L211-13, L211-14) et D7-E52 (dommages-ouvrage, L242-1) ; sources D7-S35 à D7-S43 ; réserve de D7-E38, lecture de D7-S20 (L125-1 lu intégralement) et ligne de maintenance des catastrophes naturelles mises à jour ; D7-O10 reste [Ouvert] (expertise de droit commun selon le contrat ; R128-1 à R128-4, arrêtés de montants, loi n° 85-677 et L422-1 à L422-3 non lus). Aucun montant de franchise repris. Aucun point clôturé.
- Lot L3 du 17/11/2026 (assurance emprunteur) : arbitrages A à E validés par le fondateur le 17/11/2026, sans identifiant de décision attribué. **B :** seuils légaux et réglementaires repris avec leurs conditions, leur date de vérification et une ligne de maintenance (L113-2-1, R132-5, L313-10) ; seuils conventionnels AERAS non repris comme seuils légaux ; la dispense de questionnaire de santé n'est pas présentée comme une garantie d'acceptation. **C :** D7-E56 strictement factuel ; aucune expérience pédagogique autonome ; tout usage soumis à M2 et AI1. **D :** refus du prêteur et équivalence dans D4 ; parcours général de réclamation dans D3-A (renvoi depuis D4.8 et D7-E58, D3-A non modifié) ; contrat et assureur dans D7 ; médiateur compétent pour l'assurance de groupe souscrite par une banque : question ouverte. **E :** réserve de revue juridique sur R132-5 et surveillance maintenues. **A :** (obligations du prêteur documentées dans D4.8 ; D7 centré sur le contrat d'assurance et y renvoie ; aucun identifiant de décision attribué). **D4 :** faits ajoutés D4-E23 (information et coût de l'assurance, L313-8 à L313-10, R313-8 à R313-10), D4-E24 (notice, inopposabilité, refus d'agrément, L313-29), D4-E25 (équivalence et refus motivé, L313-30, R313-23), D4-E26 (décision sous dix jours ouvrés, avenant, interdiction de frais, L313-28, L313-31, L313-32), D4-E27 (échange d'informations, R313-23, R313-24) et D4-E28 (avis du CCSF du 10/11/2026 : dossier complet, guide et point de contact, prise d'effet « E+2 » ; engagements professionnels mis en œuvre au plus tard le 31/12/2027, sans valeur légale ; articulation entre le point de départ légal des délais de dix jours, L313-31, et le « dossier complet » de l'avis : À soumettre à une revue juridique) ; sources D4-S13 à D4-S18 ; D4-O11 [Ouvert] ; ligne de renvoi de D4.8 vers D7.6 précisée. **D7 :** faits ajoutés D7-E53 (informations de santé, L113-2-1), D7-E54 (cadre légal de la convention Aeras et droit à l'oubli), D7-E55 (fonctionnement de la convention Aeras), D7-E56 (suicide et aide à mourir, L132-7 version du 20/08/2026, R132-5, L141-6), D7-E57 (garanties courantes) et D7-E58 (conséquences de la substitution pour l'assuré, devoir de conseil, L521-4, continuité de couverture selon le communiqué de l'avis du 26/05/2026) ; sources D7-S44 à D7-S56 ; D7-E27 complété (notifications, interdiction de résiliation pour aggravation du risque) ; divergence SP-F1671 / L113-15-3 signalée dans D7-E28 ; réserve de D7-E22 et ligne de renvoi de D7.6 vers D4.8 mises à jour ; D7-O08 reste [Ouvert]. Aucun point clôturé.
- Lot L5 du 17/11/2026 (fonctionnement général et primes, périmètre strict de D7-O01 et D7-O02) : faits ajoutés D7-E59 (mécanisme de l'assurance, source institutionnelle du ministère de l'Économie, sans portée juridique), D7-E60 (contenu de la police et information précontractuelle, L112-4 et L112-2) et D7-E61 (paiement de la prime, suspension et résiliation, L113-3) ; sources D7-S57 à D7-S59 ; réserve de D7-E01 complétée ; D7-O01 reste [Ouvert] (documenté ; clôture à décider, D7-DC01) ; D7-O02 reste [Ouvert] (aucune règle générale sur la carence, les plafonds, le calcul des primes et les franchises ; périmètre à décider). Aucun point clôturé.
- Lot de finalisation D7 du 17/11/2026 : mentions de D7-O07, D7-O09, D7-O11 et D7-O12 alignées sur D7-DC01 (« point traité par … ; clôture à décider »), statuts [Ouvert] inchangés ; maintenance des fiches Service-Public (SP-F19083 et SP-F2659 toujours datées du 01/07/2023 ; ligne de suivi de SP-F2457) et mention de D7-O05 actualisées ; réserves réduites sans clôture : D7-E27 (R113-13 lu ; arrêté listant les activités sportives non retrouvé, existence non exclue), D7-E49 et D7-O10 (R128-1 à R128-4 lus), D7-E42, D7-O06 et D7-S28 (L132-5-2 lu intégralement ; textes d'application identifiés : A132-4, A132-8, A132-4-2). Aucun nouvel identifiant. Aucun point clôturé.
- Décision D7-DC02 (arbitrages confirmés par le fondateur le 17/11/2026 ; préparée le 18/11/2026 ; première décision de lot de clôture, en application de D7-DC01) : D7-O01, D7-O02 (périmètre strict : règles générales ; modalités particulières selon le contrat), D7-O07, D7-O09, D7-O11 et D7-O12 passent de [Ouvert] à [Décidé] D7-DC02, avec justification individuelle (D7 §0.5) ; registre §11, n° 12 mis en cohérence. Restent [Ouvert] : D7-O03, D7-O04, D7-O05, D7-O06, D7-O08, D7-O10. Aucune réserve levée : réserve sur D7-E13, J11, J13 et J26 inchangées ; D4 inchangé.
- Lot de corrections O06 / O10 (préparé le 18/11/2026) : lectures intégrales de A132-8 et de l'annexe de A132-4 (D7-E42, D7-S29), des arrêtés A125-5 à A125-6 (D7-S60), de la loi n° 85-677, art. 1 à 6 (D7-S61) et de L422-1 à L422-3 (D7-S62) ; montants de franchise des catastrophes naturelles (D7-E46) et seuils de l'article 3 de la loi n° 85-677 (D7-E51) repris avec maintenance au §6, en application de la décision B du lot L3 ; minimum journalier de relogement de 80 euros (A125-5) repris par arbitrage du fondateur du 18/11/2026, comme minimum réglementaire de prise en charge distinct des montants de garantie contractuelle (§0.2 inchangé), avec maintenance au §6 ; divergence entre l'article 12 de la loi n° 85-677 et L211-9 signalée dans D7-E51 ; D7-O06 et D7-O10 : « point traité ; clôture à décider », statut [Ouvert] inchangé. Aucune réserve juridique levée ; questions S2 à S4 et réserve de D7-E48 conservées ; D1 et D4 inchangés.
- Décision D7-DC03 (option A retenue par le fondateur le 18/11/2026 pour D7-O06 ; préparée le 18/11/2026 ; deuxième décision de lot de clôture, en application de D7-DC01) : D7-O06 (périmètre retenu : option A ; règles propres aux contrats collectifs hors du périmètre de D7, non traitées, non réputées résolues et non validées juridiquement) et D7-O10 (recensement des régimes documenté ; réserves conservées dans les lignes de faits) passent de [Ouvert] à [Décidé] D7-DC03, avec justification individuelle (D7 §0.6) ; phrase du §1 de D7 sur les contrats de groupe mise en cohérence. Clôture documentaire, sans validation juridique exhaustive. Restent [Ouvert] : D7-O03, D7-O04, D7-O05, D7-O08. Aucune réserve levée : réserves de D7-E42, D7-E45, D7-E48 et D7-E50 à D7-E52 (dont la divergence entre l'article 12 de la loi n° 85-677 et L211-9) inchangées ; réserve sur D7-E13, J11, J13 et J26 inchangées ; D1 et D4 inchangés.
- Les autres réserves de D7 demeurent ouvertes selon les statuts de ce document.

Ce contrôle porte sur la cohérence documentaire. Il ne constitue ni une validation métier de D7, ni une validation juridique.

### 12.2 Contrôle complémentaire après mise à jour de D3-A (18/11/2026)

- Lot D3-A L1 (préparé le 18/11/2026) : lectures sur Légifrance de L133-15, D133-1, L133-45, L312-1, L312-1-1 (V), L316-1 du Code monétaire et financier, de L612-1 à L612-5 du Code de la consommation et de la version 2009-2018 de L133-19 ; faits ajoutés D3A-E31 (moyens de notification gratuits) à D3A-E33 (cadre légal de la médiation) ; D3A-E22, D3A-E26 et D3A-E28 complétés par leur base légale ; sources D3A-S24 à D3A-S30. D3A-O06, D3A-O07, D3A-O08, D3A-O10 et D3A-O11 : « point traité ; clôture à décider » ; D3A-O02 partiellement traité ; statuts inchangés (aucune convention de clôture n'existe pour D3-A). Écart nouveau signalé dans D3A-E28 (gratuité de la clôture par le client), non tranché. Aucune réserve juridique levée : J19 à J22 inchangés ; D1, D2, D3-B et D4 inchangés.

Ce contrôle porte sur la cohérence documentaire. Il ne constitue ni une validation métier de D3-A, ni une validation juridique.

### 12.3 Contrôle complémentaire après mise à jour de D3-B (18/11/2026)

- Lot D3-B L1 (préparé le 18/11/2026) : lectures sur Légifrance de L711-1 à L711-5, L741-2, R721-1 à R721-4 et L314-20 du Code de la consommation et de l'article 1343-5 du Code civil ; fait ajouté D3B-E21 (délais de grâce judiciaires) ; D3B-E02, D3B-E04 et D3B-E13 complétés par leur base légale ; sources D3B-S19 à D3B-S23. D3B-O01 et D3B-O03 : « point traité ; clôture à décider ». D3B-O04 à D3B-O07 inchangés (régime du FICP à vérifier après le 20/11/2026). Statuts inchangés (aucune convention de clôture n'existe pour D3-B). Aucune réserve juridique levée : J23 inchangé ; D1, D2, D3-A et D4 inchangés.

Ce contrôle porte sur la cohérence documentaire. Il ne constitue ni une validation métier de D3-B, ni une validation juridique.

### 12.4 Contrôle complémentaire après mise à jour de D2 (18/11/2026)

- Lot D2 L1 (préparé le 18/11/2026) : lectures sur Légifrance de L312-1-3 à L312-1-7, D312-1-1, R312-1-2, D312-1-3, R312-4-1 à R312-4-4, D131-25, D133-5 et D133-6 du Code monétaire et financier, et sur EUR-Lex des articles 5 ter et 5 quater du règlement (UE) n° 260/2012 (règlement (UE) 2024/886) ; D2-E01 à D2-E03, D2-E06, D2-E07 et D2-E12 à D2-E15 complétés par leur base légale ; sources D2-S14 à D2-S19. D2-O08 : « point traité ; clôture à décider » ; D2-O09 partiellement traité ; fait ajouté D2-E19 (frais bancaires de succession : cas de gratuité de L312-1-4-1 abrogés par la décision n° 2026-1207 QPC du 19/06/2026 ; plafonnement à 1 % et à 857 € maintenu), avec réserves sur la rédaction consolidée et sur D312-1-3, 1° ; D2-O05 reste ouvert pour les autres démarches liées au décès ; Écarts signalés, non tranchés : rejets successifs (D2-E14) ; plafonds de 25 €, 20 € et 200 € non retrouvés dans les articles lus (D2-E15). Statuts inchangés. **Signalement pour D3-A, non traité ici :** L312-1-7 I (en vigueur depuis le 28/05/2026) dispose que « la clôture de tout compte de dépôt ou compte sur livret » est gratuite, ce qui concerne l'écart signalé dans D3A-E28 ; D3-A n'est pas modifié. Aucune réserve juridique levée : J11, J12, J13 et J20 inchangés ; D1, D3-A, D3-B, D4 et FR1 inchangés.

Ce contrôle porte sur la cohérence documentaire. Il ne constitue ni une validation métier de D2, ni une validation juridique.

Fin du registre — non validé.
