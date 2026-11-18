# P4 D3-B — Difficultés financières et surendettement

- **Statut :**
  - **Statut métier :** proposition de reconstruction rédigée le 13 novembre 2026, sur autorisation explicite (P4T-A25). **Non validée.** Les [Proposition] ne sont pas des décisions ; les [Ouvert] restent ouverts.
  - **Réserves juridiques :** aucune formulation n'est validée juridiquement ; J23 [En attente de revue juridique], provisoire tant qu'il n'est pas inscrit dans FR1 (P4T-A31) ; ce n'est pas une règle transversale validée.
  - **Droit applicable :** état au 13 novembre 2026. Les effets de la réforme du crédit à la consommation sur la consultation du FICP ne sont pas présentés comme applicables (P4T-A14).
  - **Production :** non prêt pour la production.
- **Fichier :** `docs/decisions/P4-D3-B-difficultes-financieres-surendettement.md` ; document distinct de D3-A (P4T-A09).
- **Base :**
  - le bilan P4, D3-B ;
  - FR1 (arbitrages 2, 14, 23 et 31 ; §4.2 ; §4.3) ;
  - P4 D1 (D1-A3, D1-AF6) ;
  - les recherches du 13 novembre 2026, restituées en session.
  - Aucun contenu de l'ancien projet n'est repris.
- **Portée :** projet Élan v2, pilier 4, dimension D3, espace B.
- **Documents liés :** registre transversal P4 ; P4 D2 ; P4 D3-A ; P4 D4 ; AI1 ; FR1 ; documents de référence P1, P2 et P3.

---

## 0. Statut, périmètre et gouvernance

### 0.1 Classifications

[Renvoi] registre transversal §1.

### 0.2 Décisions appliquées

| Décision | Objet | Statut |
|---|---|---|
| Bilan P4, D3-B | Objectif, situations, outils, accès immédiat à « Je n'arrive plus à rembourser », sensibilité maximale | [Élan validé] |
| FR1, arbitrages 2 et 23 ; FR1 §4.2 (remplacement de la ligne du bilan) | P4 couvre les créanciers financiers, le recouvrement financier, le surendettement et les fichiers ; P1 couvre les impayés personnels, leur priorisation et leurs conséquences budgétaires (loyer, énergie, factures), ainsi que les démarches auprès des créanciers non bancaires | [Décidé] ; [Renvoi] FR1 |
| FR1, arbitrages 14 et 31 | Capacité budgétaire réelle : P1 ; évaluation de la solvabilité par le prêteur : P4 D4 | [Décidé] |
| D1-A3, D1-AF6 | D1 couvre le rôle général de la Banque de France ; D3-B couvre les fichiers d'incidents et le surendettement | [Décidé] |
| P4T-A07 | Moteurs D3 : besoins, premiers usages et expériences, sans architecture | [Décidé] |
| P4T-A08 | Lien D3-B / P2 : proposition à étudier ; aucun transfert automatique ; séparation stricte des dossiers personnel et professionnel | [Décidé] |
| P4T-A20 | Frais des clients fragiles : services et plafonnements dans D2 ; difficultés financières dans D3-B | [Décidé] |

### 0.3 Identifiants

| Série | Usage |
|---|---|
| D3B-E01 à D3B-E21 | Faits externes (D3B-E21 ajouté le 18/11/2026 après vérification d'unicité dans `docs/`) |
| D3B-E18, D3B-E19, D3B-E20 | Retirés, non réattribuables (P4T-A29) |
| D3B-P01 à D3B-P05 | Propositions |
| D3B-O01 à D3B-O07 | Points ouverts |
| D3B-S01 à D3B-S23 | Sources (D3B-S19 à D3B-S23 ajoutés le 18/11/2026 après vérification d'unicité dans `docs/`) |

---

## 1. Périmètre et objectifs

| Contenu | Nature | Statut |
|---|---|---|
| Objectif : aider une personne qui n'arrive plus à faire face à ses dettes à comprendre les possibilités d'action et à préparer les démarches adaptées | Élan | [Élan validé] bilan P4, D3-B |
| Situations : premières difficultés de remboursement d'un crédit ; retards et impayés envers des créanciers financiers ; frais et pénalités ; recouvrement financier ; solutions amiables et réaménagements ; procédure de surendettement ; dossier ; FICP et FCC ; conséquences sur les comptes et l'accès au crédit ; Points conseil budget | Élan | [Élan validé] ; périmètre des créanciers précisé par FR1 §4.2 |
| Aucune culpabilisation ; aucune promesse de solution automatique | Élan | [Élan validé] bilan P4 §6.1 |

**Hors périmètre :**
- le budget, le déficit, le rééquilibrage, la priorisation des impayés non financiers et les démarches auprès des créanciers non bancaires (P1) ;
- l'évaluation de solvabilité par le prêteur (D4) ;
- les plafonds de frais bancaires (D2) ;
- les litiges et fraudes (D3-A).

## 2. Organisation [Proposition] D3B-P01

| Section | Objet |
|---|---|
| D3B.1 | Premières difficultés et soutiens |
| D3B.2 | Procédure de surendettement |
| D3B.3 | Fichiers d'incidents : FICP et FCC |
| D3B.4 | Aide immédiate, sécurité et données |
| D3B.5 | Premiers usages et expériences |

---

## 3. Contenus

### D3B.1 Premières difficultés et soutiens

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3B-E01 | Le Point conseil budget est un service gratuit, labellisé par l'État, ouvert à tous et confidentiel. Il établit un diagnostic et peut intervenir auprès des créanciers. Environ 500 structures existent ; un annuaire figure sur Service-Public | Admin. | SOL-PCB, BDF-DIFF | [Établi] |
| — | Incident de remboursement d'un crédit, défaut de paiement, conséquences contractuelles | — | — | [Renvoi] D4 §3, D4.10 |
| — | Effets des frais bancaires ; offre clientèle fragile et plafonnement à 25 € par mois | — | — | [Renvoi] D2.3 (P4T-A20) |
| D3B-E21 | Délais de grâce judiciaires, hors procédure de surendettement : le juge peut, compte tenu de la situation du débiteur et des besoins du créancier, reporter ou échelonner le paiement des sommes dues dans la limite de deux années ; par décision spéciale et motivée, prévoir un taux réduit au moins égal au taux légal ou une imputation d'abord sur le capital ; sa décision suspend les procédures d'exécution engagées, et les majorations d'intérêts ou pénalités de retard ne sont pas encourues pendant le délai ; toute stipulation contraire est réputée non écrite ; ne s'applique pas aux dettes d'aliment (C. civ. 1343-5). Pour un crédit à la consommation, l'exécution des obligations du débiteur peut être suspendue par ordonnance du juge des contentieux de la protection, notamment en cas de licenciement ou d'obtention du droit à l'allocation journalière de présence parentale ; l'ordonnance peut prévoir que les sommes dues ne produisent pas intérêt pendant le délai de grâce et fixer les modalités de paiement, le dernier versement ne pouvant dépasser de plus de deux ans le terme initial (C. consom. L314-20) | Droit | D3B-S23 (CIV-1343-5), D3B-S22 (CONSO-L314-20) | [Établi] ; L314-20 en vigueur depuis le 14/06/2026 ; version annoncée au 20/11/2026 identique (consultée le 18/11/2026) ; à reconfirmer avec le bloc du 20/11/2026 (D3B-O07) ; conséquences contractuelles d'un défaut de paiement et renégociation : D4-O07 (non modifié) |
| D3B-O01 | Solutions amiables et réaménagements négociés avec un créancier financier, en dehors de la procédure : aucune règle légale générale n'a été lue sur la négociation elle-même, qui relève de l'accord des parties ; les délais de grâce judiciaires sont établis (D3B-E21). Point traité par D3B-E21 ; clôture à décider | — | D3B-S22, D3B-S23 | [Ouvert] |
| D3B-O02 | Article de « Mes questions d'argent » sur le Point conseil budget : corps de l'article non atteint | — | MQDA-PCB | [Ouvert] |
| D3B-P02 | Parcours « premières difficultés » : Point conseil budget, puis dialogue avec les créanciers financiers, puis, si nécessaire, dossier de surendettement | Prop. | — | [Proposition] |

### D3B.2 Procédure de surendettement

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3B-E02 | Conditions : être une personne physique, se trouver dans l'impossibilité manifeste de faire face à ses dettes, être de bonne foi. Aucun seuil de dettes ni de revenus. **Texte (L711-1, L711-2) :** l'impossibilité manifeste s'apprécie sur l'ensemble des dettes, professionnelles et non professionnelles, exigibles et à échoir ; être propriétaire de sa résidence principale, même d'une valeur égale ou supérieure aux dettes, n'y fait pas obstacle ; l'impossibilité de faire face à un engagement de caution ou de solidarité envers un entrepreneur individuel ou une société caractérise aussi le surendettement ; le livre VII s'applique aux débiteurs de nationalité française domiciliés hors de France ayant des dettes envers des créanciers établis en France. Il ne s'applique pas au débiteur relevant des procédures du livre VI du code de commerce (L711-3) | Admin. ; Droit | BDF-DIFF, BDF-PROC, BDF-27032, D3B-S19 (CONSO-L711) | [Établi] |
| D3B-E03 | La procédure est gratuite. Le dossier se dépose en ligne, par courrier simple ou au guichet de la Banque de France, auprès de la commission du département | Admin. | BDF-PROC, BDF-27032, SP-F34680 | [Établi] |
| D3B-E04 | Une attestation de dépôt est envoyée sous 2 jours ouvrables. La commission dispose de 3 mois pour statuer sur la recevabilité. **Texte (R721-4) :** l'attestation, remise ou adressée par lettre simple, mentionne la date de dépôt et indique que la commission dispose de trois mois, à compter du dépôt, pour examiner la recevabilité, la notifier, instruire le dossier et décider de son orientation ; à défaut d'orientation dans ce délai, le taux applicable aux emprunts en cours est, pendant les trois mois suivants, le taux de l'intérêt légal, sauf décision contraire de la commission ou du juge | Admin. ; Droit | SP-F134, D3B-S21 (CONSO-R721) | [Établi] ; cohérent avec « 48 heures » (BDF-26511) ; « moins d'une semaine » (BDF-27032) reste isolé : D3B-O03 ; R721-4 ne fixe pas de délai d'envoi de l'attestation |
| D3B-O03 | Délai de l'attestation de dépôt : « moins d'une semaine » selon BDF-27032, isolé face aux 2 jours ouvrables de SP-F134 et aux « 48 heures » de BDF-26511. R721-4 (lu le 18/11/2026) prévoit l'attestation sans fixer de délai d'envoi : les trois chiffres sont des indications administratives, non des délais légaux. Point traité par D3B-E04 ; clôture à décider | Admin. | BDF-27032, D3B-S21 | [Ouvert], mineur |
| D3B-E05 | Durée moyenne de la procédure : 4 à 6 mois | Admin. | BDF-PROC, BDF-27032 | [Établi] |
| D3B-E06 | Recours contre la décision sur la recevabilité sous 15 jours **à partir de la notification**, pour le créancier comme pour le déposant déclaré irrecevable | Admin. | SP-F34642 | [Établi] |
| D3B-E07 | Effets de la recevabilité : suspension de certaines saisies (2 ans au plus) ; arrêt des intérêts et pénalités ; rétablissement des aides au logement versées au bailleur ; maintien du compte et absence de frais de rejet de prélèvement ; interdictions faites au débiteur pendant 2 ans au plus, dont celle de recourir à un nouveau crédit | Admin. | SP-F34642, BDF-26511, BDF-27032 | [Établi] ; formulation pour un public non spécialiste : J23 |
| D3B-E08 | État d'endettement : 30 jours pour les créanciers et 20 jours pour le débiteur pour le contester. Orientation du dossier sous 3 mois | Admin. | SP-F1946 | [Établi] |
| D3B-E09 | Quatre issues : plan conventionnel ; mesures imposées ; rétablissement personnel sans liquidation ; rétablissement personnel avec liquidation judiciaire, avec l'accord du débiteur | Admin. | BDF-PROC, BDF-26511, BDF-27032 | [Établi] |
| D3B-E10 | Plan conventionnel : refus possible des créanciers sous 30 jours (le silence vaut accord) ; durée de 7 ans au plus, sauf exceptions ; en cas d'échec, 15 jours pour demander des mesures imposées | Admin. | SP-F16982 | [Établi] |
| D3B-E11 | Mesures imposées : rééchelonnement sur 7 ans au plus, report de 2 ans au plus, effacement partiel avec l'accord du débiteur ; contestation sous 30 jours | Admin. | SP-F1947 | [Établi] |
| D3B-E12 | Rétablissement personnel sans liquidation : contestation sous 30 jours ; publication au BODACC ; 2 mois pour les créanciers. Avec liquidation : accord écrit du débiteur ; bilan sous 6 mois ; vente sous 12 mois | Admin. | SP-F16978, SP-F34463 | [Établi] |
| D3B-E13 | Dettes exclues de l'effacement : pensions alimentaires, amendes et dettes pénales, fraude sociale, prêts sur gage, dettes payées par une caution, certaines dettes fiscales. **Texte :** sauf accord du créancier, sont exclues de toute remise, de tout rééchelonnement ou effacement les dettes alimentaires, les réparations pécuniaires allouées aux victimes dans le cadre d'une condamnation pénale, les dettes issues de manœuvres frauduleuses au préjudice des organismes de protection sociale ou, depuis le 27/06/2026, des collectivités territoriales versant des prestations et aides sociales (origine frauduleuse établie par décision de justice ou sanction administrative), et les dettes fiscales sanctionnées par les majorations non rémissibles du II de l'article 1756 du CGI ou dues en application de l'article 1745 du CGI et de L267 du LPF ; les amendes pénales sont exclues sans exception (L711-4). Les dettes de prêts sur gage auprès des caisses de crédit municipal ne peuvent être effacées par les mesures que vise L711-5 (L711-5). Le rétablissement personnel sans liquidation efface les dettes, à l'exception de celles de L711-4 et L711-5 et des dettes payées au lieu et place du débiteur par la caution ou le coobligé, personnes physiques (L741-2) | Admin. ; Droit | BDF-26511, SP-F16978, SP-F34463, D3B-S19 (CONSO-L711), D3B-S20 (CONSO-L741-2) | [Établi] ; L711-4 modifié le 27/06/2026 (loi n° 2026-534) ; exclusion des dettes payées par une caution lue pour le rétablissement sans liquidation seulement (L741-2) ; textes des autres issues non lus |
| D3B-P03 | Aide à la préparation du dossier : liste des pièces et chronologie, sans évaluer la recevabilité | Prop. | — | [Proposition] |

### D3B.3 Fichiers d'incidents : FICP et FCC

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3B-E14 | Inscription au FICP : deux échéances mensuelles impayées ; ou 60 jours pour un crédit non mensuel ; ou un découvert de 500 € ou plus non régularisé 60 jours après la mise en demeure. Le client dispose de 30 jours pour régulariser avant l'inscription | Admin. | BDF-FICP | [Établi] |
| D3B-E15 | Durée d'inscription au FICP : 5 ans au plus pour un incident ; 7 ans au plus pour un plan ou des mesures (sortie possible à 5 ans sans incident) ; 5 ans pour un rétablissement personnel. L'inscription n'interdit pas légalement l'octroi d'un crédit | Admin. | BDF-FICP, BDF-26511, BDF-27032 | [Établi] |
| D3B-E16 | Consultation de son inscription au FICP en ligne, au guichet ou par courrier, avec une pièce d'identité. Rectification d'un incident de crédit auprès de l'établissement prêteur | Admin. | SP-F17608, BDF-FICHIERS | [Établi] |
| D3B-E17 | Le FCC enregistre les chèques sans provision (interdiction d'émettre des chèques pendant 5 ans au plus, sauf régularisation), les interdictions judiciaires et les retraits de carte (2 ans au plus). L'interdiction porte sur les chèques, jamais sur le compte | Admin. | BDF-FCC, BDF-FICHIERS | [Établi] |
| — | Les informations relatives aux dettes détaillées et aux difficultés graves peuvent relever du niveau de sensibilité le plus élevé | Élan | Bilan P4, D3-B et §8 | [Élan validé] |
| D3B-O04 | Rectification d'une inscription au FICP liée au surendettement : auprès du secrétariat de la commission (Service-Public) ou directement auprès de la Banque de France (Banque de France). Une conciliation est possible, la Banque de France assurant ce secrétariat, mais aucune source ne l'énonce | — | SP-F17608, BDF-FICHIERS | [Ouvert] |
| D3B-O05 | Gratuité de la consultation du FICP : non précisée par les sources lues | — | — | [Ouvert] |
| D3B-O06 | Pièce d'identité : la Banque de France exige en plus la mention du lieu de naissance (divergence mineure) | — | BDF-FICHIERS, SP-F17608 | [Ouvert] |
| D3B-O07 | Effets de la réforme du crédit à la consommation sur la consultation du FICP (arrêté du 11/08/2026) : non applicables au 13/11/2026 ; à vérifier après le 20/11/2026 | — | — | [Ouvert] (P4T-A14) |
| D3B-P04 | Fiche « FICP / FCC : ce que c'est, ce que ce n'est pas » | Prop. | — | [Proposition] |

### D3B.4 Aide immédiate, sécurité et données

| Réf. | Contenu | Statut |
|---|---|---|
| — | L'entrée « Je n'arrive plus à rembourser » est commune à P1 et P4 et accessible indépendamment des cours | [Élan validé] bilan P4 §6.1 ; [Décidé] FR1 arbitrage 2 ; [Renvoi] AI1 §1 |
| — | Protection renforcée ; espace distinct de D3-A ; minimisation des données ; aucun transfert automatique vers P2 ; séparation stricte des dossiers personnel et professionnel | [Élan validé] bilan §8 ; [Décidé] P4T-A08 |

### D3B.5 Premiers usages et expériences (P4T-A07)

| Réf. | Contenu | Statut |
|---|---|---|
| D3B-P05 | Premiers usages prioritaires : orientation ; préparation d'un dossier de surendettement ; suivi des démarches et des délais (15 jours, 30 jours, 3 mois). Expérience envisageable : l'entrée commune « Je n'arrive plus à rembourser ». Limites : aucune décision de recevabilité ou de solvabilité ; aucune culpabilisation ; aucun lien automatique avec P2. Aucune architecture technique n'est décidée | [Proposition] |

---

## 4. Usages possibles dans Élan

| Usage | Mécanisme commun | Statut |
|---|---|---|
| Assistant d'orientation | P4T-M05 | Envisagé par le bilan ; aucun premier usage stabilisé |
| Aide à la préparation du dossier ; suivi des dettes et démarches | P4T-M04 | Envisagés par le bilan ; [Proposition] D3B-P03, D3B-P05 |
| Explication du FICP et du FCC | Contenu | [Proposition] D3B-P04 |

## 5. Frontières et renvois

| Frontière | Règle | Référence |
|---|---|---|
| D3-B / P1 | Budget, capacité réelle, impayés non financiers et leur priorisation : P1. Mécanismes, droits, procédure, fichiers et créanciers financiers : D3-B | P4T-F10 ; FR1 arbitrages 2, 23 |
| D3-B / D2 | Plafonnement des frais et offre clientèle fragile : D2 | P4T-F04 |
| D3-B / D3-A | Deux espaces distincts | P4T-F07 |
| D3-B / D4 | Incidents de crédit (D4), puis difficultés et surendettement (D3-B) ; consultation du FICP par le prêteur : renvoi croisé | P4T-F11 |
| D3-B / P2 | Lien avec les difficultés d'une entreprise : proposition à étudier, sans fonctionnalité ni transfert de données | P4T-A08 |
| D3-B / P3 | Une perte d'emploi peut provoquer des difficultés de remboursement : renvoi | Bilan P4, D3-B |

## 6. Maintenance

| Élément | Source | Vérifié le | Responsable / fréquence |
|---|---|---|---|
| Délais de la procédure (D3B-E04 à D3B-E12) | Sous-fiches Service-Public (vérifiées en janvier 2025) | 13/11/2026 | [Ouvert] |
| Motifs et durées du FICP et du FCC | BdF | 13/11/2026 | [Ouvert] ; à revoir après le 20/11/2026 (D3B-O07) |

## 7. Points juridiques et recherches restant à traiter

| Point | Statut |
|---|---|
| J23 : formulation des effets de la recevabilité pour un public non spécialiste ; lien entre clientèle fragile et clôture du compte en rétablissement personnel (BDF-FRAGILE cite un arrêté de 2011) | [En attente de revue juridique] ; provisoire jusqu'à son éventuelle inscription formelle dans FR1 (P4T-A31) |
| D3B-O01 à D3B-O07 | [Ouvert] |

---

## Annexe A — Sources

Consultées le 13 novembre 2026, en HTML ; D3B-S19 à D3B-S23 consultées le 18 novembre 2026.

| N° | Clé | Organisme | Titre | Lien | Date affichée | Lecture |
|---|---|---|---|---|---|---|
| D3B-S01 | BDF-DIFF | Banque de France | Faire face à des difficultés financières ou à des dettes | https://www.banque-france.fr/fr/a-votre-service/particuliers/faire-face-difficultes-financieres-ou-dettes | Aucune | Intégrale |
| D3B-S02 | BDF-PROC | Banque de France | Comprendre la procédure de surendettement | https://www.banque-france.fr/fr/a-votre-service/intervenants-sociaux/comprendre-procedure-surendettement | Aucune | Intégrale |
| D3B-S03 | BDF-26511 | Banque de France | Détail de la procédure de surendettement | https://www.banque-france.fr/en/node/26511 | Aucune | Intégrale |
| D3B-S04 | BDF-27032 | Banque de France | Foire aux questions dossier de surendettement | https://www.banque-france.fr/en/node/27032 | Aucune | Intégrale |
| D3B-S05 | SP-F34680 | Service-Public | Surendettement | https://www.service-public.gouv.fr/particuliers/vosdroits/F34680 | Aucune | Intégrale (page de renvoi) |
| D3B-S06 | SP-F134 | Service-Public | Sous-fiche surendettement : dépôt du dossier | https://www.service-public.gouv.fr/particuliers/vosdroits/F134 | Vérifiée en janvier 2025 (3 au 8/01/2025 pour l'ensemble des sous-fiches) | Intégrale |
| D3B-S07 | SP-F34642 | Service-Public | Sous-fiche surendettement : recevabilité | https://www.service-public.gouv.fr/particuliers/vosdroits/F34642 | Idem | Intégrale |
| D3B-S08 | SP-F1946 | Service-Public | Sous-fiche surendettement : état d'endettement | https://www.service-public.gouv.fr/particuliers/vosdroits/F1946 | Idem | Intégrale |
| D3B-S09 | SP-F16982 | Service-Public | Sous-fiche surendettement : plan conventionnel | https://www.service-public.gouv.fr/particuliers/vosdroits/F16982 | Idem | Intégrale |
| D3B-S10 | SP-F1947 | Service-Public | Sous-fiche surendettement : mesures imposées | https://www.service-public.gouv.fr/particuliers/vosdroits/F1947 | Idem | Intégrale |
| D3B-S11 | SP-F16978 | Service-Public | Sous-fiche surendettement : rétablissement personnel sans liquidation | https://www.service-public.gouv.fr/particuliers/vosdroits/F16978 | Idem | Intégrale |
| D3B-S12 | SP-F34463 | Service-Public | Sous-fiche surendettement : rétablissement personnel avec liquidation | https://www.service-public.gouv.fr/particuliers/vosdroits/F34463 | Idem | Intégrale |
| D3B-S13 | SP-F17608 | Service-Public | Fichier des incidents de remboursement des crédits aux particuliers (FICP) | https://www.service-public.gouv.fr/particuliers/vosdroits/F17608 | Vérifié le 25/09/2025 | Intégrale |
| D3B-S14 | BDF-FICP | Banque de France | Le fichier national des incidents de remboursement des crédits aux particuliers (FICP) | https://www.banque-france.fr/fr/a-votre-service/particuliers/fichiers-incident-bancaire/fichier-incidents-remboursement-credits | Aucune | Intégrale |
| D3B-S15 | BDF-FCC | Banque de France | Le fichier central des chèques (FCC) | https://www.banque-france.fr/fr/a-votre-service/particuliers/fichiers-incident-bancaire/fichier-central-cheques-fcc | Aucune | Intégrale |
| D3B-S16 | BDF-FICHIERS | Banque de France | Mieux comprendre les fichiers d'incidents bancaires | https://www.banque-france.fr/fr/a-votre-service/particuliers/fichiers-incident-bancaire | Aucune | Intégrale |
| D3B-S17 | SOL-PCB | Ministère des solidarités | Point conseil budget (PCB) | https://solidarites.gouv.fr/point-conseil-budget-pcb | Mise à jour le 09/02/2023 | Intégrale |
| D3B-S18 | MQDA-PCB | Mes questions d'argent | Point conseil budget | https://www.mesquestionsdargent.fr/intervenants-sociaux-et-pcb/point-conseil-budget | Aucune | **Partielle** : non utilisée comme preuve |
| D3B-S19 | CONSO-L711 | Légifrance | Code de la consommation, art. L711-1 à L711-5 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032223539/ | L711-1, L711-2 depuis le 16/02/2022 ; L711-3 depuis le 01/07/2016 ; L711-4 depuis le 27/06/2026 (version antérieure du 25/12/2022 au 27/06/2026 également lue) ; L711-5 depuis le 01/01/2018 | Intégrale ; lue le 18/11/2026 |
| D3B-S20 | CONSO-L741-2 | Légifrance | Code de la consommation, art. L741-2 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032223741/ | En vigueur depuis le 19/06/2020 | Intégrale ; lue le 18/11/2026 |
| D3B-S21 | CONSO-R721 | Légifrance | Code de la consommation, art. R721-1 à R721-4 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032808602/ | En vigueur depuis le 01/07/2016 | Intégrale ; lue le 18/11/2026 |
| D3B-S22 | CONSO-L314-20 | Légifrance | Code de la consommation, art. L314-20 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032228058/ | En vigueur depuis le 14/06/2026 ; version annoncée au 20/11/2026 identique | Intégrale ; lue le 18/11/2026 |
| D3B-S23 | CIV-1343-5 | Légifrance | Code civil, art. 1343-5 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000032035257/ | En vigueur depuis le 01/10/2016 | Intégrale ; lue le 18/11/2026 |

Les titres des sous-fiches D3B-S06 à D3B-S12 sont des intitulés descriptifs ; leurs titres exacts n'ont pas été relevés : [Ouvert].

Fin du document — proposition non validée.
