# P4 D4 — Crédit et financement des projets

- **Statut :**
  - **Statut métier :** proposition de reconstruction rédigée le 13 novembre 2026, sur autorisation explicite (P4T-A25). **Non validée.** Les [Proposition] ne sont pas des décisions ; les [Ouvert] restent ouverts.
  - **Droit applicable :** **uniquement le droit applicable au 13 novembre 2026** (P4T-A14, précisé par P4T-A32 : droit vérifié le 13/11/2026 ; mise à jour distincte prévue après le 20/11/2026, avant la validation finale). La réforme du crédit à la consommation annoncée pour le 20 novembre 2026 n'est **pas** présentée comme applicable. Elle est seulement signalée au §3, D4.11, pour être vérifiée après son entrée en vigueur.
  - **Réserves juridiques :** aucune formulation n'est validée juridiquement. J11, J12, J13 et J24 : [En attente de revue juridique]. J24 est provisoire tant qu'il n'est pas inscrit dans FR1 (P4T-A31) ; ce n'est pas une règle transversale validée.
  - **Production :** non prêt pour la production.
- **Fichier :** `docs/decisions/P4-D4-credit-financement-projets.md`.
- **Base :**
  - bilan P4, D4, §4.1, §5 et §9 ;
  - FR1 (arbitrages 12, 14, 21, 27 et 31 ; §4.2) ;
  - P4 D1 (D1-DC2) ;
  - EP1 (arbitrage A2) ;
  - recherches du 13 novembre 2026, restituées en session.
  - Aucun contenu de l'ancien projet n'est repris.
- **Portée :** projet Élan v2, pilier 4, dimension D4.
- **Documents liés :** registre transversal P4 ; P4 D1 ; P4 D2 ; P4 D3-B ; P4 D7 ; FR1 ; EP1.

---

## 0. Statut, périmètre et gouvernance

### 0.1 Classifications

[Renvoi] registre transversal §1.

### 0.2 Décisions appliquées

| Décision | Objet | Statut |
|---|---|---|
| Bilan P4, D4 | Périmètre ; vigilance sur le paiement fractionné et le cumul ; caution comme engagement à part entière ; limites ; formules stables distinctes des paramètres réglementaires | [Élan validé] |
| Bilan P4 §5 et §9 | Décodeur d'offre de crédit : premier usage stabilisé du moteur d'analyse documentaire. Simulateur possible sans contrôle du taux d'usure s'il indique clairement ses limites | [Élan validé] |
| FR1, arbitrages 12, 21 et 27 | Simulation de crédit : usage ultérieur candidat du moteur de simulation numérique, sous réserve de validation de ses calculs, hypothèses, limites et risques | [Décidé] ; [Renvoi] FR1 |
| FR1, arbitrages 14 et 31 | Capacité budgétaire réelle : P1 ; évaluation bancaire de la solvabilité : D4. P4 peut réutiliser les données budgétaires pertinentes sans remplacer le diagnostic P1 | [Décidé] |
| EP1 A2 ; FR1 §2 | Paiement fractionné et différé : mécanismes en P4, conséquences budgétaires en P1 | [Décidé] ; [Renvoi] |
| D1-DC2 | Caution personnelle pour la dette d'un tiers (D4), distincte de la garantie FGDR des cautions professionnelles (D1) | [Décidé] |
| P4T-A04 | Découvert : service en D2 ; crédit et coût en D4 | [Décidé] |
| P4T-A14 | D4 est décrit selon le droit applicable au 13/11/2026 | [Décidé] |
| P4T-A20 | Assurance emprunteur : D4 pour le crédit, D7 pour le fonctionnement de l'assurance | [Décidé] |

### 0.3 Identifiants

| Série | Usage |
|---|---|
| D4-E01 à D4-E28 | Faits externes (D4-E23 à D4-E28 ajoutés le 17/11/2026, après vérification d'unicité dans `docs/`) |
| D4-E02, D4-E08, D4-E09, D4-E14, D4-E19 | Retirés, non réattribuables (P4T-A29) |
| D4-K01 | Retiré, non réattribuable (P4T-A28) |
| D4-P01 à D4-P05 | Propositions |
| D4-O01 à D4-O11 | Points ouverts |
| D4-S01 à D4-S18 | Sources (D4-S13 à D4-S18 attribués le 17/11/2026) |

### 0.4 Homonymies

| Terme | Sens ici | Autre sens |
|---|---|---|
| Caution | Engagement personnel de payer la dette d'un tiers | D1 : garantie des cautions professionnelles (FGDR) |
| Capacité de remboursement | Évaluation de la solvabilité par le prêteur | P1 : capacité budgétaire réelle (FR1, arbitrage 31) |

---

## 1. Périmètre et objectifs

| Contenu | Nature | Statut |
|---|---|---|
| Objectif : comprendre le coût, les obligations et les risques d'un crédit avant de s'engager | Élan | [Élan validé] bilan P4, D4 |
| Sujets : taux nominal, TAEG, taux fixe ou variable, coût total, frais et assurance ; crédit à la consommation, crédit renouvelable, paiement fractionné ou différé et leur cumul ; crédit immobilier ; évaluation de la solvabilité ; caution ; incidents ; remboursement anticipé, renégociation, rachat | Élan | [Élan validé] ; « capacité de remboursement et solvabilité » précisé par FR1 §4.2 |
| Limites : ne pas prétendre décider de l'octroi d'un crédit ; aucun verdict de solvabilité ; ne pas réduire l'analyse à la mensualité ; distinguer ce que le simulateur calcule de ce qu'il ne vérifie pas | Élan | [Élan validé] |

**Hors périmètre :**
- le découvert comme service (D2) ;
- la capacité budgétaire personnelle (P1) ;
- les difficultés de remboursement, le surendettement et le FICP (D3-B) ;
- le fonctionnement du contrat d'assurance emprunteur (D7) ;
- la garantie des cautions professionnelles (D1).

## 2. Organisation [Proposition] D4-P01

D4.1 coût du crédit ; D4.2 crédit à la consommation ; D4.3 taux d'usure ; D4.4 paiement fractionné et différé ; D4.5 crédit immobilier ; D4.6 découvert comme crédit ; D4.7 solvabilité ; D4.8 assurance emprunteur (volet crédit) ; D4.9 caution personnelle ; D4.10 incidents et remboursement anticipé ; D4.11 réforme annoncée, non applicable.

---

## 3. Contenus (droit applicable au 13 novembre 2026)

### D4.1 Coût du crédit

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E01 | Le TAEG regroupe l'ensemble des coûts connus ou déterminables à la date de l'offre (frais de dossier, assurance exigée, etc.). Il ne peut pas être présenté sous forme de fourchette | Admin. | ABE-TAEG | [Établi] |
| — | Les formules stables (mensualité, coût total, cumul des engagements) sont distinguées des paramètres réglementaires susceptibles d'évoluer, qui sont datés, sourcés et associés à un responsable de vérification | Élan | Bilan P4, D4 et §9 | [Élan validé] |
| D4-O01 | Taux nominal ; taux fixe ou variable ; composition du coût total : aucune source officielle lue en détail | — | — | [Ouvert] |

### D4.2 Crédit à la consommation

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E03 | Le prêteur remet une fiche d'information précontractuelle et vérifie la solvabilité de l'emprunteur. L'offre est valable au moins 15 jours. Le délai de rétractation est de 14 jours calendaires | Admin. | SP-F2440, SP-F2436 | [Établi] |
| D4-E04 | Crédit renouvelable : entretien obligatoire ; proposition d'une alternative amortissable au-delà de 1 000 € ; contrat d'un an reconductible ; solvabilité revérifiée tous les 3 ans ; relevé mensuel | Admin. | SP-F2436 | [Établi] |
| D4-O02 | SP-F2436 indique la mise à disposition des fonds sous 7 jours « calendaires » à un endroit et « ouvrables » à un autre | Admin. | SP-F2436 | [Ouvert] |

### D4.3 Taux d'usure

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E05 | Le seuil de l'usure correspond au taux effectif moyen du trimestre précédent, augmenté d'un tiers. Il est fixé chaque trimestre et publié au Journal officiel | Admin. | BDF-USURE, SP-F2440, ABE-IMMO | [Établi] |
| D4-E06 | Seuils du 4e trimestre 2026, crédits de trésorerie aux particuliers : 23,60 % jusqu'à 3 000 € ; 15,76 % de 3 000 à 6 000 € ; 8,56 % au-delà de 6 000 € | Admin. | BDF-USURE-Q4 | [Établi] ; paramètre daté ; date d'application : D4-O03 |
| D4-E07 | Seuils du 4e trimestre 2026, crédits immobiliers à taux fixe : 4,09 % (moins de 10 ans), 4,68 % (10 à 20 ans), 5,40 % (20 ans et plus) | Admin. | BDF-USURE-Q4 | [Établi] ; paramètre daté |
| D4-O03 | L'en-tête du tableau indique « applicable au 20 novembre 2026 », alors que la note (5) indique « applicables au 1er octobre » | Admin. | BDF-USURE-Q4 | [Ouvert] |
| — | Le premier simulateur peut fonctionner sans contrôle du taux d'usure, à condition d'indiquer clairement ce qu'il calcule et ce qu'il ne vérifie pas, et de ne pas présenter le résultat comme une validation réglementaire de l'offre | Élan | Bilan P4, D4 et §9 | [Élan validé] |

### D4.4 Paiement fractionné et différé

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| — | Le paiement en plusieurs fois n'est pas présenté comme anodin parce que chaque échéance semble faible. L'expérience permet de visualiser les engagements simultanés, leur cumul dans le temps et leur poids dans le budget | Élan | Bilan P4, D4 | [Élan validé] ; poids dans le budget : [Renvoi] P1 |
| D4-O04 | Régime juridique du paiement fractionné ou différé au 13/11/2026 : non établi par les sources lues. L'annonce de son entrée dans le champ du crédit à la consommation au 20/11/2026 ne permet pas, à elle seule, de conclure sur le régime actuel | — | SP-A18451, ABE-BNPL | [Ouvert] ; [En attente de revue juridique] J24 |
| D4-P02 | Visualisation du cumul des paiements fractionnés et des mensualités, avec les dates et les montants saisis par l'utilisateur, sans jugement sur sa situation | Prop. | — | [Proposition] |

### D4.5 Crédit immobilier

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| — | Seuils d'usure immobiliers | — | — | Voir D4-E07 |
| D4-O05 | Délai de réflexion de l'offre de crédit immobilier, garanties, frais : non présents dans ABE-IMMO ou non lus | — | ABE-IMMO | [Ouvert] |

### D4.6 Découvert comme crédit

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E10 | Le TAEG d'un découvert doit rester sous le taux d'usure | Admin. | SP-F31423, SP-A18569 | [Établi] (régime au 13/11/2026) |
| D4-E11 | Au-delà de 3 mois consécutifs de découvert, la banque doit proposer un crédit | Admin. | SP-F31423, SP-A18569 | [Établi] (régime au 13/11/2026) |
| D4-E12 | L'analyse de solvabilité d'un découvert n'est obligatoire que s'il atteint 200 € ou dure plus d'un mois (formulé au présent, « actuellement ») | Admin. | SP-A18569 | [Établi] (régime au 13/11/2026) |
| — | Absence de droit au découvert ; frais d'incident | — | — | [Renvoi] D2.4 |

### D4.7 Évaluation de la solvabilité

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E13 | Le prêteur est tenu de vérifier la solvabilité de l'emprunteur avant l'octroi d'un crédit à la consommation | Admin. | SP-F2440 | [Établi] |
| — | D4 explique comment un établissement évalue la solvabilité : critères réglementaires et mécanismes de décision. La capacité budgétaire réelle à supporter une mensualité relève de P1. Élan ne produit aucun verdict de solvabilité et ne décide pas de l'octroi | Élan | FR1 arbitrages 14 et 31 ; bilan P4 §10 | [Décidé] ; [Élan validé] |
| D4-O06 | Critères concrets de l'évaluation de solvabilité et consultation du FICP par le prêteur : non documentés par les sources lues | — | — | [Ouvert] |

### D4.8 Assurance emprunteur, volet crédit

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E15 | L'assurance emprunteur d'un crédit à la consommation n'est pas obligatoire, mais le prêteur peut l'exiger. Dans ce cas, l'emprunteur peut présenter une assurance équivalente, et un refus du prêteur doit être explicite | Admin. | SP-F2457, SP-F2436 | [Établi] |
| D4-E16 | Une assurance exigée entre dans le TAEG (D4-E01) | Admin. | ABE-TAEG | [Établi] |
| D4-E23 | Crédit immobilier, information sur l'assurance emprunteur : tout document chiffré sur l'assurance remis avant l'offre en indique le coût, exprimé (1) en taux annuel effectif de l'assurance, à l'exclusion de tout autre taux, (2) en montant total en euros sur huit ans et sur la durée totale du prêt, (3) en euros par période, en précisant s'il s'ajoute à l'échéance ; la fiche standardisée d'information et la notice sont fournies simultanément, la notice mentionnant la possibilité de résilier l'assurance à tout moment à compter de la signature de l'offre (L313-8) ; ces obligations s'appliquent aussi aux assureurs et intermédiaires d'assurance qui proposent une assurance couvrant un crédit immobilier (L313-9). La fiche standardisée est remise lors de la première simulation, à chaque emprunteur ou co-emprunteur ; elle mentionne le libre choix de l'assureur et précise notamment les types de garanties proposées, le cas échéant les garanties minimales exigées par le prêteur, les garanties envisagées et la part du capital à couvrir, une estimation personnalisée du coût et les conditions et délais de la substitution (L313-10, R313-8 à R313-10). Le champ de L313-10 couvre les prêts du 1° de L313-1 et les prêts finançant la réparation, l'amélioration ou l'entretien d'immeubles à usage d'habitation ou à usage professionnel et d'habitation lorsque, cumulativement, le crédit est supérieur à 75 000 euros et garanti par une hypothèque, une autre sûreté comparable sur un bien immobilier à usage d'habitation ou un droit lié à un tel bien | Droit | D4-S13 (CC-L313-8), D4-S14 (CC-R313-8) | [Établi] ; en vigueur au 13/11/2026 (L313-8 depuis le 01/06/2022 ; L313-10 depuis le 01/04/2018) ; modèle de fiche (annexe et arrêté du 29/04/2015) non lu ; seuil légal vérifié le 17/11/2026 (maintenance §6) |
| D4-E24 | Crédit immobilier, assurance proposée par le prêteur : une notice énumérant les risques garantis et les modalités de mise en jeu est annexée au contrat de prêt ; toute modification ultérieure des risques garantis, des modalités ou de la tarification est inopposable à l'emprunteur qui ne l'a pas acceptée ; si l'assureur subordonne sa garantie à l'agrément de l'assuré et le refuse, le contrat de prêt est résolu de plein droit, sans frais ni pénalité, à la demande de l'emprunteur présentée dans le mois de la notification du refus (L313-29) | Droit | D4-S15 (CC-L313-24) | [Établi] ; en vigueur au 13/11/2026 (depuis le 01/07/2016) |
| D4-E25 | Crédit immobilier, équivalence des garanties : jusqu'à la signature de l'offre, le prêteur ne peut pas refuser en garantie un autre contrat d'assurance présentant un niveau de garantie équivalent à celui qu'il propose ; il en va de même lorsque l'emprunteur exerce son droit de résiliation (Code des assurances, L113-12-2 ; Code de la mutualité, L221-10, al. 3). Toute décision de refus est explicite, comporte l'intégralité des motifs et précise, le cas échéant, les informations et garanties manquantes (L313-30). Avant l'offre, le prêteur communique notamment les types de garanties exigées, la quotité à couvrir garantie par garantie et le rappel des critères servant à apprécier l'équivalence, après analyse de la situation personnelle de l'emprunteur (R313-23, 1°, g et h). Selon Service-Public, ces critères sont au maximum onze pour les garanties décès, perte totale et irréversible d'autonomie, invalidité et incapacité, et quatre pour la perte d'emploi | Droit / Admin. | D4-S15 (CC-L313-24), D4-S16 (CC-R313-23), D4-S18 (SP-F1671) | [Établi] ; nombre maximal de critères : information administrative issue d'un cadre de place, sans fondement législatif identifié ; R313-23 renvoie à L313-29 pour l'équivalence, que L313-30 définit : renvoi signalé ; appréciation de l'équivalence dans un cas concret : hors D4 |
| D4-E26 | Crédit immobilier, décision du prêteur et avenant : avant l'émission de l'offre, le prêteur peut émettre une offre modifiée sans que les délais de L313-34 soient prorogés ni recommencent (L313-28). Après l'émission de l'offre, il informe l'emprunteur, sur support durable, de sa décision et adresse, le cas échéant, l'offre modifiée **dans les dix jours ouvrés de la réception de la demande de substitution** ; en cas de résiliation au titre de L113-12-2 du Code des assurances ou de L221-10, al. 3, du Code de la mutualité, il notifie sa décision **dans les dix jours ouvrés de la réception d'un autre contrat d'assurance**. En cas d'acceptation, il modifie le contrat de crédit par avenant **dans les dix jours ouvrés de la réception de la demande de substitution**, en y mentionnant notamment le nouveau TAEG ; le coût de l'assurance y est exprimé selon L313-8 ; aucun frais ne peut être exigé pour cet avenant (L313-31). En contrepartie de son acceptation, il ne peut ni modifier le taux ou les conditions d'octroi du crédit, y compris le mode d'amortissement, ni exiger de frais, y compris d'analyse du contrat (L313-32). Ces règles s'appliquent aux offres émises depuis le 01/06/2022 et, depuis le 01/09/2022, aux contrats en cours | Droit | D4-S15 (CC-L313-24) | [Établi] ; en vigueur au 13/11/2026 ; conséquences pour le contrat d'assurance (résiliation, prise d'effet) : [Renvoi] D7.6 (D7-E27, D7-E58) ; TAEG : D4-E01 |
| D4-E27 | Crédit immobilier, échange d'informations pour la substitution : avant l'offre, le prêteur transmet à l'assureur délégué, par l'intermédiaire de l'emprunteur, pour chaque prêt, le capital et la durée initiaux, le taux nominal et sa nature, les tableaux d'amortissement ou leurs éléments (échéances, différés, paliers), les frais, la date souhaitée de prise d'effet, les garanties exigées et la quotité, et le rappel des critères d'équivalence ; l'assureur, une fois engagé, transmet les informations nécessaires au calcul du TAEG (quotité et montant assuré par type de garantie), le coût total et l'échéancier des primes, et les dates d'effet et de cessation des garanties (R313-23). Après l'offre, l'emprunteur transmet l'offre ou le contrat de crédit à l'assureur de son choix ; le contrat d'assurance mentionne, prêt par prêt, les garanties exigées, la quotité par tête et par garantie, le capital assuré, le coût définitif et les dates d'effet et de cessation ; en cas d'acceptation, le prêteur fournit l'offre modifiée ou l'avenant dans les conditions de L313-31 (R313-24) | Droit | D4-S16 (CC-R313-23) | [Établi] ; en vigueur au 13/11/2026 (depuis le 01/04/2018) |
| D4-E28 | Avis du CCSF du 10/11/2026 (publié le 12/11/2026) sur le processus de substitution : **engagements des professionnels, accueillis favorablement par le Comité, sans valeur légale**. (1) **Dossier :** « les parties conviennent » qu'une demande de substitution est réputée complète lorsqu'elle comporte une demande expresse de l'assuré ou de son mandataire dûment habilité et un contrat d'assurance définitif intégrant les informations requises par R313-23 et R313-24, sous réserve que le tableau d'amortissement, mis à jour le cas échéant, ait été communiqué à l'assureur par l'emprunteur ; pour un contrat collectif, certificat d'adhésion et notice d'information ; pour un contrat individuel, conditions ou dispositions particulières et conditions générales acceptées par le client et l'assureur. Les informations attendues portent sur l'identité de l'assuré, les caractéristiques du crédit (montant, durée résiduelle, capital restant dû, structure, taux, paliers ou différés), les garanties et quotités, le coût de l'assurance (taux annuel effectif de l'assurance, frais, montant total, coût sur huit ans si la durée résiduelle le permet, échéancier), la date de prise d'effet, la périodicité et les modalités de prélèvement. (2) **Transparence :** chaque établissement rend accessible un point de contact fonctionnel identifiable et un « guide de substitution » au socle minimal commun (parcours, documents pour une demande complète et conforme, obtention du tableau d'amortissement, accès aux documents de l'assurance de groupe proposée par le prêteur, point de contact, pièces à conserver, délais et étapes). (3) **Prise d'effet :** cadre opérationnel de référence, « sans préjudice des droits que lui confère la loi » : sauf demande expresse différente de l'assuré, le contrat de substitution prend effet à la deuxième échéance mensuelle du prêt suivant la réception du dossier complet (« E+2 »), sous réserve de la réception préalable par la banque d'un dossier « complet et conforme » (pour un contrat collectif, certificat d'adhésion et notice ; pour un contrat individuel, conditions particulières et générales acceptées) ; l'avis indique que « le point de départ du délai légal de 10 jours prévu par la loi Lemoine reste exclusivement la date de réception du dossier complet par le prêteur », et non la date calculée ou anticipée par l'assureur alternatif ; cadre limité aux prêts à échéance mensuelle ; l'avenant mentionne l'échéance visée ; en cas de double prélèvement, le trop-perçu est remboursé. **Mise en œuvre des points (2) et (3) : à compter du 01/07/2027 et au plus tard le 31/12/2027** ; un bilan est prévu. L'avis constate des analyses juridiques divergentes sur le rôle de l'avenant dans le changement d'assurance, sans les trancher | Avis CCSF | D4-S17 (CCSF-AVIS-2026-11) | [Établi] ; avis et engagements professionnels, non applicables comme obligations légales ; non encore mis en œuvre au 17/11/2026 ; L313-31 fait courir les délais de dix jours ouvrés à compter de la réception de la « demande de substitution » (décision et offre modifiée après l'offre ; avenant) ou de la réception d'« un autre contrat d'assurance » (en cas de résiliation) (D4-E26), sans définir une demande « complète » ni un dossier « conforme » ; l'avis rattache le point de départ au « dossier complet » défini par convention entre professionnels et conditionne E+2 à un dossier « complet et conforme » ; l'avis ne modifie pas L313-31 ; articulation entre ces formulations : À soumettre à une revue juridique ; texte lu dans sa version HTML intégrale, PDF non ouvert |
| — | Contrat d'assurance emprunteur : droits de l'assuré, résiliation et prise d'effet côté assurance (L113-12-2), information annuelle de l'assureur, garanties, exclusions, santé et convention Aeras, conséquences de la substitution pour l'assuré | — | — | [Renvoi] D7 §3, D7.6 |
| D4-O11 | Substitution d'assurance emprunteur : cadre de place définissant les critères d'équivalence (au maximum onze et quatre selon SP-F1671) non lu ; mise en œuvre des engagements de l'avis du CCSF du 10/11/2026 (D4-E28) à vérifier après le 31/12/2027 ; rôle juridique de l'avenant non tranché par l'avis ; articulation entre le point de départ légal des délais de dix jours (L313-31) et le « dossier complet » de l'avis : À soumettre à une revue juridique | — | D4-S17, D4-S18 | [Ouvert] |
| — | Réclamation auprès du prêteur et médiation bancaire (parcours général, y compris après un refus de substitution) ; les litiges relatifs à l'exécution du contrat d'assurance ou à l'assureur relèvent de D7 (D7.8) ; le médiateur bancaire et celui de l'assurance ne sont pas présumés interchangeables | — | — | [Renvoi] D3-A §3, D3A.4 |

### D4.9 Caution personnelle

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E17 | Une caution n'est pas obligatoire pour un crédit à la consommation. L'engagement exige un écrit, une mention manuscrite (personne physique) et doit être proportionné aux biens et revenus de la caution | Admin. | SP-F16124 | [Établi] |
| D4-E18 | La caution reçoit une information annuelle avant le 31 mars, et dès le premier incident de paiement | Admin. | SP-F16124 | [Établi] |
| — | Se porter caution est traité comme un engagement à part entière, et non comme une formalité rendue à un proche | Élan | Bilan P4, D4 | [Élan validé] |

### D4.10 Incidents et remboursement anticipé

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D4-E20 | Remboursement anticipé d'un crédit à la consommation : indemnité seulement si plus de 10 000 € sont remboursés sur 12 mois, plafonnée à 1 % si plus d'un an reste à courir, à 0,5 % sinon | Admin. | SP-F2440, SP-F2436 | [Établi] (régime au 13/11/2026) |
| — | Inscription au FICP après un incident ; surendettement | — | — | [Renvoi] D3-B §3, D3B.3 |
| D4-O07 | Conséquences contractuelles d'un défaut de paiement ; renégociation ; rachat de crédit : non documentés | — | — | [Ouvert] |

### D4.11 Réforme annoncée pour le 20 novembre 2026 : non applicable au 13 novembre 2026

Rien dans cette section ne décrit le droit applicable. Ce sont des annonces administratives, à vérifier après l'entrée en vigueur.

| Réf. | Annonce | Sources | Statut |
|---|---|---|---|
| D4-O08 | Extension annoncée du champ du crédit à la consommation (crédits gratuits, crédits de moins de 200 €, crédits de moins de 3 mois à frais négligeables, crédits de 75 000 à 100 000 €, location avec option d'achat) ; analyse de solvabilité étendue aux découverts ; information précontractuelle allégée pour les petits crédits ; rétractation allongée en cas de manquement du prêteur ; modifications du tableau d'usure | SP-A18451, SP-A18569, SP-F31423, ABE-BNPL, BDF-USURE-Q4 | [Ouvert] : **non applicable au 13/11/2026** ; vérification après le 20/11/2026 |
| D4-E21 | Nature : Admin. — Énoncé administratif : les découverts autorisés avant le 20/11/2026 ne sont pas remis en cause | SP-A18569, SP-F31423 | [Établi] (énoncé) ; portée : J24 |
| D4-E22 | Nature : Admin. — Textes cités par les sources : ordonnance n° 2025-880 du 3/9/2025 ; décrets n° 2026-105, 2026-643 et 2026-719 ; arrêté du 11/8/2026 ; directive (UE) 2023/2225 | SP-A18451, SP-A18569 | [Établi] (citation) ; textes non lus |
| D4-O09 | Les deux pages Service-Public donnent deux liens ELI différents pour l'ordonnance n° 2025-880 | SP-A18569, SP-A18451 | [Ouvert] |
| D4-O10 | Règles transitoires pour les crédits autres que le découvert : aucune énoncée | SP-A18451, ABE-BNPL | [Ouvert] |

---

## 4. Usages possibles dans Élan

| Usage | Mécanisme commun | Statut |
|---|---|---|
| Décodeur d'offre de crédit : lire et comprendre une offre, ses coûts, conditions et engagements ; ni recommandation de souscription ni validation de solvabilité | P4T-M01 | [Élan validé] premier usage stabilisé (bilan §5) |
| Simulateur de crédit | P4T-M03 | Usage ultérieur candidat [Décidé] FR1 arbitrages 12, 21, 27 |
| Visualisation du cumul des engagements | P4T-M03 | Envisagée par le bilan ; [Proposition] D4-P02 |
| Comparaison d'offres de crédit fournies par l'utilisateur | P4T-M02 | [Élan validé] bilan §7 ; J11, J13 |
| Expérience candidate « Comprendre un crédit avant de s'engager » | — | Candidate (bilan §4.1) ; périmètre à confirmer |
| D4-P03 | Toute fonction qui affiche un seuil d'usure indique le trimestre, la source et la date de vérification | [Proposition] |

## 5. Frontières et renvois

| Frontière | Règle | Référence |
|---|---|---|
| D4 / D2 | Découvert : service en D2, crédit en D4 ; usure dans D4, D2 y renvoie | P4T-F05 |
| D4 / D3-B | Incidents de crédit, puis surendettement et fichiers | P4T-F11 |
| D4 / D7 | Assurance emprunteur : exigence, équivalence et coût dans le crédit en D4 ; contrat, garanties et exclusions en D7 | P4T-F12 |
| D4 / D1 | Caution personnelle (D4) et garantie des cautions professionnelles (D1) jamais présentées comme équivalentes | P4T-F13 |
| D4 / P1 | Capacité budgétaire réelle et conséquences du paiement fractionné sur le budget : P1 | P4T-F14 |
| D4 / P5 | Conséquences concrètes de la politique monétaire sur le crédit : P4 ; monnaie, BCE et politiques monétaires dans leur dimension collective : P5 ; renvoi sans doublon pédagogique | P4T-A30 ; [Renvoi] P5 |
| D4 / D8 | Choix entre solutions de financement : méthode en D8 | P4T-F17 |

## 6. Maintenance et paramètres datés

| Paramètre | Source | Vérifié le | Responsable / fréquence |
|---|---|---|---|
| Seuils d'usure du 4e trimestre 2026 (D4-E06, D4-E07) | BDF-USURE-Q4 (en ligne le 28/09/2026, mis à jour le 09/11/2026) | 13/11/2026 | [Ouvert] ; révision trimestrielle |
| Seuils de 1 000 €, 10 000 €, 200 €, 3 mois | SP-F2436, SP-F2440, SP-A18569 | 13/11/2026 | [Ouvert] ; à revoir après le 20/11/2026 |
| Engagements de l'avis du CCSF du 10/11/2026 (D4-E28) | CCSF-AVIS-2026-11 | 17/11/2026 | [Ouvert] ; mise en œuvre du 01/07/2027 au 31/12/2027 ; vérifier ensuite le bilan annoncé |
| Seuil de 75 000 euros de L313-10 (D4-E23) | Légifrance (CC-L313-8) | 17/11/2026 | [Ouvert] ; vérifier à chaque mise à jour de D4 et avant tout usage du seuil dans un contenu |

Sans responsable identifié, une fonction qui dépend de ces paramètres n'est pas lancée (bilan P4 §9).

## 7. Points juridiques et recherches restant à traiter

| Point | Statut |
|---|---|
| J11, J13 : comparaison d'offres fournies ; risque d'intermédiation | [En attente de revue juridique] |
| J12 : information, comparaison et conseil | [En attente de revue juridique] |
| J24 : régime du paiement fractionné au 13/11/2026 ; portée de l'énoncé transitoire sur les découverts | [En attente de revue juridique] ; provisoire jusqu'à son éventuelle inscription formelle dans FR1 (P4T-A31) |
| D4-O01 à D4-O11 | [Ouvert] |
| D4-P04 : après le 20/11/2026, vérifier SP-F2440, F2436 et F31423, les délais de rétractation, le remboursement anticipé et les seuils d'usure, puis proposer une mise à jour soumise à autorisation | [Proposition] |
| D4-P05 : lire les décrets n° 2026-105, 643 et 719 sur Légifrance seulement si les sources administratives ne suffisent pas (P4T-A12) | [Proposition] |

---

## Annexe A — Sources

Consultées le 13 novembre 2026, en HTML.

| N° | Clé | Organisme | Titre | Lien | Date affichée | Lecture |
|---|---|---|---|---|---|---|
| D4-S01 | SP-F2440 | Service-Public | Crédit à la consommation : obligations de la banque | https://www.service-public.gouv.fr/particuliers/vosdroits/F2440 | Vérifié le 01/07/2026 | Intégrale (ne mentionne pas la réforme) |
| D4-S02 | SP-F2436 | Service-Public | Crédit renouvelable ou crédit revolving | https://www.service-public.gouv.fr/particuliers/vosdroits/F2436 | Vérifié le 12/06/2026 | Intégrale |
| D4-S03 | SP-F2457 | Service-Public | Crédit à la consommation : assurance de l'emprunteur | https://www.service-public.gouv.fr/particuliers/vosdroits/F2457 | Vérifié le 13/03/2025 | Intégrale |
| D4-S04 | SP-F16124 | Service-Public | Faut-il avoir une caution pour obtenir un crédit à la consommation ? | https://www.service-public.gouv.fr/particuliers/vosdroits/F16124 | Vérifié le 06/02/2026 | Intégrale |
| D4-S05 | ABE-TAEG | ABE Infoservice | Que faut-il savoir sur le taux annuel effectif global (TAEG) ? | https://www.abe-infoservice.fr/fr/banque/credit/que-faut-il-savoir-sur-le-taux-annuel-effectif-global-taeg | Aucune | Intégrale |
| D4-S06 | ABE-IMMO | ABE Infoservice | Que faut-il savoir sur le crédit immobilier ? | https://www.abe-infoservice.fr/fr/banque/credit/credit-immobilier/que-faut-il-savoir-sur-le-credit-immobilier | Aucune | Intégrale |
| D4-S07 | SP-F31423 | Service-Public | Autorisation de découvert bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F31423 | Vérifié le 22/10/2024 (date non fiable : D2-O07) | Intégrale |
| D4-S08 | SP-A18569 | Service-Public | Découverts bancaires : la réglementation change le 20 novembre | https://www.service-public.gouv.fr/particuliers/actualites/A18569 | Publié le 03/11/2025, mis à jour le 12/11/2026 | Intégrale |
| D4-S09 | SP-A18451 | Service-Public | Crédits à la consommation : les règles évoluent pour prévenir le surendettement | https://www.service-public.gouv.fr/particuliers/actualites/A18451 | Publié le 17/09/2025, mis à jour le 27/10/2026 | Intégrale |
| D4-S10 | ABE-BNPL | ABE Infoservice | Paiements en plusieurs fois et mini-crédits | https://www.abe-infoservice.fr/fr/banque/credit/paiements-en-plusieurs-fois-et-mini-credits | Aucune | Intégrale |
| D4-S11 | BDF-USURE | Banque de France | Taux de l'usure | https://www.banque-france.fr/fr/a-votre-service/particuliers/connaitre-pratiques-bancaires-assurance/credit/taux-usure | Aucune | Intégrale |
| D4-S12 | BDF-USURE-Q4 | Banque de France | Taux d'usure – 2026-Q4 | https://www.banque-france.fr/fr/statistiques/taux-et-cours/taux-dusure-2026-q4 | En ligne le 28/09/2026, mis à jour le 09/11/2026 | Intégrale (tableau HTML) |
| D4-S13 | CC-L313-8 | Légifrance | Code de la consommation, art. L313-8 à L313-10 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032222229/ | L313-8 depuis le 01/06/2022 (loi n° 2022-270) ; L313-9 depuis le 01/07/2016 ; L313-10 depuis le 01/04/2018 | Intégrale ; lu le 17/11/2026 ; droit en vigueur au 13/11/2026 |
| D4-S14 | CC-R313-8 | Légifrance | Code de la consommation, art. R313-8 à R313-10 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032807522/ | R313-8 depuis le 01/07/2016 ; R313-9 et R313-10 depuis le 01/04/2018 | Intégrale ; lu le 17/11/2026 ; droit en vigueur au 13/11/2026 |
| D4-S15 | CC-L313-24 | Légifrance | Code de la consommation, art. L313-24 à L313-39 (dont L313-28 à L313-32) | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032222241/ | L313-29 depuis le 01/07/2016 ; L313-28 et L313-30 à L313-32 depuis le 01/06/2022 (loi n° 2022-270) | Articles cités lus intégralement le 17/11/2026 ; droit en vigueur au 13/11/2026 |
| D4-S16 | CC-R313-23 | Légifrance | Code de la consommation, art. R313-21 à R313-24 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032807558/ | R313-23 et R313-24 depuis le 01/04/2018 (décret n° 2018-229) | Intégrale ; lu le 17/11/2026 ; droit en vigueur au 13/11/2026 |
| D4-S17 | CCSF-AVIS-2026-11 | Banque de France (CCSF) | Avis du CCSF relatif à l'amélioration du processus de substitution en assurance emprunteur (10/11/2026) | https://www.banque-france.fr/fr/publications-et-statistiques/publications/avis-du-comite-consultatif-du-secteur-financier-relatif-lamelioration-du-processus-de-substitution | Adopté le 10/11/2026 ; mis en ligne le 12/11/2026 | Intégrale (version HTML) ; lu le 17/11/2026 ; PDF (https://www.banque-france.fr/system/files/2026-11/CCSF_Avis_ADE2_substitution_10nov26.pdf) non ouvert ; avis, sans valeur normative |
| D4-S18 | SP-F1671 | Service-Public | Comment obtenir un contrat d'assurance emprunteur pour un crédit immobilier ? | https://www.service-public.gouv.fr/particuliers/vosdroits/F1671 | Vérifié le 20/05/2025 | Intégrale ; lue le 17/11/2026 ; information administrative |

Fin du document — proposition non validée.
