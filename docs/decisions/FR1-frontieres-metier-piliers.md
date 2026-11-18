# FR1 — Frontières métier entre les piliers

- **Statut :** ce document consolide les arbitrages transversaux 1 à 32 validés par le fondateur sur les frontières métier entre les cinq piliers ; les points conditionnels, provisoires, en attente de revue juridique ou non arbitrés y restent explicitement indiqués. Il ne modifie aucun document de référence.
- **Date de consolidation :** 11 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`), cinq piliers.
- **Documents liés :** référentiel global (`docs/reference/referentiel-global-2026-11-04.md`), documents de référence des piliers P1 à P5 (`docs/reference/`), I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), N1 (`docs/decisions/N1-notifications-alertes.md`), AI1 (`docs/decisions/AI1-aide-immediate.md`), P2 (`docs/decisions/P2-decisions-entrepreneuriat.md`), P3 (`docs/decisions/P3-decisions-travail-carriere.md`), EP1 (`docs/decisions/EP1-experience-phare-construire-son-premier-budget.md`), P4 D1 (`docs/decisions/P4-D1-acteurs-registres-protection-fonds-fraude.md`, référence métier validée par décision explicite du 13 novembre 2026 ; points juridiques J14 à J19 en attente de revue juridique ; lacunes de recherche et documentaires ouvertes ; non prête pour la production).

---

## 0. Statut, sources et légende

Ce document consigne les arbitrages transversaux 1 à 32, la matrice des frontières qui en découle, le vocabulaire commun, les remplacements explicites de formulations des documents de référence et les points restant ouverts. Il consigne aussi les arbitrages de cohérence D1-C1 à D1-C8 issus de la reconstruction de P4 D1 (§2, §3 et §4.2) ; leur intégration ne vaut pas validation de l'ensemble de la proposition de reconstruction de P4 D1. Les formulations sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1).

Aucun arbitrage ne vaut validation juridique ou technique d'une mise en œuvre.

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Conditionnel]** | Arbitrage validé dont l'application dépend d'une vérification à mener |
| **[Provisoire]** | Référence de travail, non définitive |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Explicatif]** | Formulation qui décrit ou précise, sans créer de règle |
| **[En attente de revue juridique]** | Formulation provisoire ; aucune conclusion juridique n'est validée avant revue par un professionnel compétent |
| **[À vérifier]** | Information absente, non vérifiable ou vérification technique non réalisée |

### Homonymies à ne pas confondre

| Sigle | Sens dans ce document | Autres sens existants |
|---|---|---|
| **FR1** | Identifiant de ce document (arbitrage 29) | — |
| **F1** | Non utilisé ici | L1 : traces de purge en sauvegarde courte (conservé, arbitrage 29) |
| **P1 à P5** | Piliers | R15 : décisions pédagogiques P1 à P12 |
| **Arbitrages 1 à 32** | Arbitrages transversaux numérotés de ce document | EP1 : arbitrages de conception A1 à A3 ; R15 : décisions A1 à A10 |
| **J1 à J19** | Points de revue juridique (§6.2) : J1 à J13 au titre de l'arbitrage 22 ; J14 à J18 issus de P4 D1 (D1-A2, D1-DC9) ; J19 issu de D3A-M12 (D1-AF32, ajouté au suivi transversal par l'arbitrage du 13 novembre 2026) | — |
| **D1 à D8** | Dimensions d'un pilier (précisé à chaque fois) | R15 : décisions D1 à D36 |
| **D1-C1 à D1-C8** | Arbitrages de cohérence de la reconstruction de P4 D1 | C1 : document de décisions sur le catalogue des contenus (`C1-catalogue-contenus-points-entree.md`) |

---

## 1. Arbitrages transversaux 1 à 32

| N° | Arbitrage | Statut |
|---|---|---|
| **1** | **Revenus et activité.** P1 traite les revenus réellement conservés et leur effet sur les finances personnelles ; P2 la construction d'une activité, son offre, son prix, sa demande, ses coûts et sa rentabilité ; P3 l'emploi, les compétences, la rémunération et la carrière ; P5 les mécanismes collectifs. | [Décidé] ; libellé fixé par 26 |
| **2** | **Difficultés financières.** P1 traite le budget, le déficit, le rééquilibrage et la capacité personnelle de remboursement ; P4 les mécanismes bancaires, les droits, le surendettement, la Banque de France, les créanciers et le recouvrement. Une entrée d'aide immédiate commune reste accessible depuis P1 et P4. | [Décidé] ; précisé par 23 et 31 |
| **3** | **Référence P4.** La synthèse transversale P4 (bilan) sert de référence de travail provisoire ; elle ne remplace pas les documents détaillés D1 à D8. Toute décision qui dépend d'informations absentes reste à vérifier. | [Provisoire] ; cohérent avec 30 |
| **4** | **P5 D6.** Rechercher une version existante ; à défaut, préparer une reconstruction fondée sur les décisions validées, sans déduire le contenu du seul intitulé. | [Décidé] ; recherche effectuée sans résultat (§6.3) |
| **5** | **Assurance.** P4 D7 porte la référence technique (contrats, garanties, exclusions, franchises, obligations, indemnisation) ; P1 D4.3 traite les conséquences budgétaires et personnelles, les obligations de couverture et les doublons, en réutilisant les contenus techniques validés de P4. P1 est ajouté aux piliers qui réutilisent D7. | [Décidé] |
| **6** | **Dossier personnel.** Chaque réutilisation suppose une sélection explicite des données, une finalité clairement indiquée et une utilisation ponctuelle ou temporaire ; aucune autorisation durable ni transmission silencieuse ; les règles de sensibilité restent applicables. Les règles propres à P2 ou P3 ne sont pas étendues automatiquement. | [Décidé] ; règle opérationnelle dans I1 (17) |
| **7** | **Salaire brut et net.** P3 porte la référence technique (bulletin de paie, brut et net, cotisations, prélèvement à la source, droits liés à la rémunération) ; P1 traite le revenu disponible et l'effet budgétaire ; P2 la rémunération de l'entrepreneur selon son statut ; P5 les prélèvements collectifs. Les autres piliers réutilisent les définitions techniques de P3 sans les dupliquer. | [Décidé] |
| **8** | **Documentation P2.** Un document de décisions P2 recense les formulations obsolètes, intègre les arbitrages globaux, distingue décisions et points ouverts et propose les corrections, sans modifier directement le document de référence P2. | [Décidé] ; voir `P2-decisions-entrepreneuriat.md` |
| **9** | **Structure de P1.** Les cinq dimensions et les quarante sous-domaines constituent la seule structure métier actuelle de P1. Les anciens modules sont une classification éditoriale historique ; les contenus pertinents pourront être remappés après examen. Aucun ancien module ne devient automatiquement une structure de parcours. | [Décidé] |
| **10** | **Retraite.** P1 : préparation financière personnelle et besoins futurs ; P3 : fin de carrière, droits et démarches ; P4 : dispositifs et produits d'épargne retraite ; P5 : système collectif et enjeux économiques. | [Décidé] |
| **11** | **Épargne de précaution.** P1 : utilité, montant, constitution, utilisation et reconstitution ; P4 : supports, garanties, disponibilité et liquidité. | [Décidé] ; répartition entre P4 D1 et P4 D5 précisée par l'arbitrage de cohérence D1-C5 (§2) |
| **12** | **Simulation numérique.** Le premier usage identifié du moteur est la simulation entrepreneuriale P2 (coûts, prix, chiffre d'affaires, rentabilité, hypothèses). La simulation de crédit P4 reste un usage ultérieur candidat, sous réserve de validation de ses calculs, hypothèses, limites et risques. | [Conditionnel] ; libellé fixé par 27 ; condition fixée par 21 |
| **13** | **Signaux P2.** Les signaux métier de P2 restent des indicateurs métier. Le moteur commun d'alertes gère les déclencheurs techniques, la présentation et le suivi ; un signal ne déclenche pas automatiquement de notification. | [Décidé] ; vocabulaire fixé par 25 |
| **14** | **Capacité de remboursement.** P1 évalue ce qu'une personne peut réellement consacrer au remboursement de ses dettes, compte tenu de ses revenus, dépenses et contraintes ; P4 explique comment un établissement financier évalue la solvabilité d'un demandeur de crédit. | [Décidé] ; précisé par 31 |
| **15** | **Objectifs financiers.** P1 aide à définir et organiser les objectifs personnels (épargne, projets, réserve, montants, horizons) ; P4 explique comment choisir entre différentes solutions financières selon les besoins, envies, contraintes et caractéristiques des offres. P4 D8 reste une méthode de décision, pas une stratégie financière globale. | [Décidé] |
| **16** | **Revenus et rentabilité immobilière.** P1 traite les revenus immobiliers d'un particulier et leur effet réel sur son budget ; P4 l'investissement immobilier, le rendement, le financement, les risques et les mécanismes financiers ; P2 intervient lorsque le bien est exploité dans une véritable activité entrepreneuriale ou commerciale. | [Décidé] ; contenu détaillé de P4 D6 [À vérifier] |
| **17** | **Consignation de la règle du dossier personnel.** La règle opérationnelle est inscrite dans I1 ; FR1 conserve la décision transversale et renvoie vers I1. | [Décidé] |
| **18** | **Dossier entreprise.** Même règle que pour le dossier personnel : sélection explicite à chaque réutilisation, finalité claire, usage ponctuel ou temporaire, aucune transmission automatique ni autorisation permanente, maintien des règles de sensibilité. | [Décidé] ; consigné dans I1 §4 |
| **19** | **Reconstruction de P5 D6.** Proposition encadrée à partir des formulations confirmées, des quatre niveaux de lecture de P5, des principes de neutralité, de pluralité des perspectives et de validation humaine ; distinction des éléments sourcés, des déductions et des propositions nouvelles ; vérification des frontières avec P5 D2, P5 D4 et P3 D2 ; rien n'est intégré avant validation. | [Décidé] ; gouvernance précisée par 28 |
| **20** | **Documents P4 D1 à D8.** Recherche approfondie dans le nouveau projet, l'ancien projet en lecture seule, les historiques Git et les fichiers de référence ; état des lieux par dimension ; aucune reconstruction automatique. | [Décidé] ; recherche effectuée sans résultat (§6.3) |
| **21** | **Simulation entrepreneuriale P2.** Elle reste candidate jusqu'à une étude de faisabilité couvrant les calculs, hypothèses et sources, limites, données demandées, maintenance, risques réglementaires et besoins de validation humaine. | [Conditionnel] |
| **22** | **Validation juridique.** Revue ciblée de P4 (comparaison d'offres et intermédiation financière), de P1 (contenus sensibles de la dimension 5) et de P2 (accompagnement entrepreneurial et dimension 7). Les frontières fonctionnelles peuvent être documentées provisoirement ; aucune formulation juridique définitive n'est considérée comme validée avant revue par un professionnel compétent. | [Décidé] ; périmètre initial : points J1 à J13 [En attente de revue juridique] (§6.2) ; élargissement : points J14 à J18, issus de P4 D1, ajoutés par l'arbitrage de consolidation D1-A2 (D1-DC9), et point J19, issu de la recherche D3A-M12 (D1-AF32), ajouté par l'arbitrage du 13 novembre 2026 [En attente de revue juridique] (§6.2) |
| **23** | **Créanciers non bancaires.** P1 traite les impayés, leur priorisation et leurs conséquences budgétaires, y compris le loyer, l'énergie et les factures courantes ; P4 traite les mécanismes bancaires et financiers de recouvrement, le surendettement, les fichiers et les relations avec les créanciers financiers. Les démarches spécifiques auprès des créanciers non bancaires restent dans P1 ou dans une ressource spécialisée selon leur nature. | [Décidé] ; précise 2 |
| **24** | **Réauthentification I-4.** Réauthentification proportionnée au risque ; pas de réauthentification systématique pour chaque consultation ou réutilisation interne ordinaire. Les seuils et actions concernés restent à définir précisément. | [Décidé] ; seuils [À vérifier] ; consigné dans I1 §6 |
| **25** | **Signaux et alertes.** « Signal de vigilance » désigne un indicateur métier nécessitant éventuellement une vérification ou une décision. « Alerte » désigne une notification déclenchée par le mécanisme technique commun selon une condition ou un seuil défini. | [Décidé] ; écart documentaire avec N1 §1 consigné (§6.1) |
| **26** | **Revenus.** « Revenus réellement conservés » désigne les sommes disponibles après les prélèvements, cotisations, charges et obligations applicables. Les sommes perçues et les sommes conservées sont explicitement distinguées. | [Décidé] |
| **27** | **Première simulation.** « Premier usage identifié (candidat) » désigne la simulation entrepreneuriale P2 ; sa réalisation reste conditionnée à la validation de sa faisabilité, de ses calculs, hypothèses, limites et risques réglementaires. | [Décidé] ; réalisation [Conditionnel] |
| **28** | **Gouvernance de P5 D6.** Reconstituer les éléments validés ; préparer une proposition complète distinguant éléments confirmés, lacunes et points à arbitrer ; la soumettre à validation ; n'intégrer ensuite le contenu dans le document de référence qu'avec historique et traçabilité. | [Décidé] |
| **29** | **Identifiant transversal.** Identifiant inédit attribué après vérification des identifiants existants (FR1) ; le F1 utilisé dans L1 est conservé. | [Décidé] |
| **30** | **Synthèse P4.** La synthèse du référentiel §7.4 reste une vue d'ensemble provisoire ; les documents détaillés D1 à D8 restent les références métier ; la synthèse ne les remplace pas ; les éléments non documentés restent à vérifier. | [Provisoire] |
| **31** | **Capacité de remboursement et solvabilité.** P1 traite la capacité budgétaire réelle à supporter une mensualité ; P4 D4 l'évaluation bancaire de la solvabilité, ses critères réglementaires et ses mécanismes de décision. P4 peut réutiliser les données budgétaires pertinentes sans remplacer le diagnostic P1. | [Décidé] ; réutilisation de données selon 6 et I1 |
| **32** | **Indicateur de complétion du dossier entreprise.** Un événement ponctuel de complétion, dans une expérience et une session données ; aucune lecture du contenu du dossier ; aucun suivi entre sessions ; aucune reconstitution de progression individuelle ; statistiques uniquement agrégées conformément à M7. Si les garanties ne peuvent pas être démontrées par une vérification technique, l'indicateur est supprimé. | [Conditionnel] |

---

## 2. Matrice des frontières

| Sujet partagé | Pilier responsable | Piliers qui réutilisent | Nature de la réutilisation | Arbitrages |
|---|---|---|---|---|
| Revenus et activité | P1 (revenus réellement conservés, régularité, effet personnel) ; P2 (activité, offre, prix, demande, coûts, rentabilité) ; P3 (emploi, compétences, rémunération, carrière) ; P5 (mécanismes collectifs) | Chacun selon la finalité | Renvoi par finalité | 1, 26 |
| Difficultés financières | P1 (budget, déficit, rééquilibrage, capacité personnelle) ; P4 (mécanismes, droits, surendettement, Banque de France, créanciers financiers, recouvrement financier) | P1, P4 | Renvoi ; entrée d'aide immédiate commune | 2, 23 |
| Impayés et créanciers non bancaires | P1 (ou ressource spécialisée selon leur nature) | — | — | 23 |
| Capacité de remboursement et solvabilité | P1 (capacité budgétaire réelle) ; P4 D4 (évaluation bancaire, critères réglementaires) | P4 peut réutiliser les données budgétaires pertinentes | Réutilisation de données selon I1 ; le diagnostic P1 n'est pas remplacé | 14, 31 |
| Assurance | P4 D7 (référence technique) | P1 D4.3, P2, P3 | Réutilisation des contenus techniques validés | 5 |
| Protection des fonds et contrats d'assurance (au sein de P4) | P4 D1 : protection des fonds et organismes de garantie ; P4 D7 : contrats d'assurance, garanties, exclusions, franchises et indemnisations | — | Renvoi entre dimensions | Arbitrage de cohérence D1-C4 |
| Protection institutionnelle et supports d'épargne (au sein de P4) | P4 D1 : protection institutionnelle des fonds, organismes concernés, conditions d'éligibilité et limites ; P4 D5 : caractéristiques des supports d'épargne, capital garanti ou non, conditions contractuelles, disponibilité, liquidité et risques | P4 D5 renvoie vers P4 D1 lorsqu'une protection institutionnelle s'applique | Renvoi de D5 vers D1 ; la protection institutionnelle des dépôts est distincte des garanties contractuelles ou des caractéristiques propres à un produit d'épargne | Arbitrage de cohérence D1-C5 |
| Sauvegarde des fonds des clients des établissements de paiement et de monnaie électronique (au sein de P4) | P4 D1 : cantonnement des fonds des clients, au titre des mesures réglementaires de sauvegarde des fonds ; P4 D2 : fonctionnement des services de paiement | P4 D2 renvoie vers P4 D1 pour la compréhension des mécanismes de sauvegarde des fonds | Renvoi de D2 vers D1 ; le cantonnement est une mesure réglementaire de sauvegarde, distincte des mécanismes institutionnels de garantie (FGDR, FGAP), et n'est jamais présenté comme une garantie de remboursement équivalente | Arbitrage de cohérence D1-C8 |
| Créanciers financiers, fichiers et surendettement (au sein de P4) | P4 D1 : rôle général de la Banque de France ; P4 D3-A : droit au compte ; P4 D3-B : difficultés de remboursement des crédits et relations avec les créanciers financiers, fichiers d'incidents bancaires, surendettement | P1 : impayés personnels, priorisation, conséquences budgétaires (loyer, énergie, factures…), capacité budgétaire | Renvoi entre piliers et entre dimensions | Arbitrage de consolidation D1-A3 ; arbitrages 2, 14, 23 et 31 |
| Salaire brut et net, cotisations, prélèvement à la source | P3 (référence technique) | P1, P2, P5 | Réutilisation des définitions | 7 |
| Retraite | P1, P3, P4, P5 selon la finalité | — | Renvoi par finalité | 10 |
| Épargne de précaution | P1 (utilité, montant, constitution, utilisation, reconstitution) ; P4 (supports, garanties, disponibilité, liquidité). Au sein de P4, les garanties mentionnées pour D5 désignent les garanties contractuelles et les caractéristiques propres aux supports ; la protection institutionnelle relève de D1, conformément à l'arbitrage de cohérence D1-C5 | P1, P4 | Renvoi | 11 ; D1-C5 ; D1-C6 |
| Objectifs financiers | P1 (définition et organisation) ; P4 (choix entre solutions ; D8 = méthode de décision) | P1, P4 | Renvoi | 15 |
| Revenus et rentabilité immobilière | P1 (revenus d'un particulier, effet budgétaire) ; P4 (investissement, rendement, financement, risques) ; P2 (bien exploité dans une activité) | — | Renvoi par finalité | 16 |
| Paiement fractionné et différé | P4 (mécanismes) | P1 (conséquences budgétaires) | Renvoi | [Renvoi] EP1 §2, arbitrage A2 |
| Données des dossiers | I1 (trois dossiers ; passerelles) | Tous | Sélection explicite à chaque réutilisation dans les dossiers personnel et entreprise (6, 18) ; dossier professionnel : DP-5 et DP-8 (P3) | 6, 17, 18, 24 |
| Moteur de simulation numérique | P2, simulation entrepreneuriale (premier usage identifié, candidat) | P4, simulation de crédit (usage ultérieur candidat) | Moteur commun | 12, 21, 27 |
| Signaux de vigilance et alertes | Piliers (signaux métier) ; mécanisme commun (alertes) | Tous | Aucun signal ne déclenche automatiquement de notification | 13, 25 |

---

## 3. Vocabulaire commun

| Terme | Définition | Statut |
|---|---|---|
| **Sommes perçues** | Montants reçus, avant prélèvements, cotisations, charges et obligations | [Décidé] 26 |
| **Revenus réellement conservés** | Sommes disponibles après les prélèvements, cotisations, charges et obligations applicables | [Décidé] 26 |
| **Signal de vigilance** | Indicateur métier nécessitant éventuellement une vérification ou une décision | [Décidé] 25 |
| **Alerte** | Notification déclenchée par le mécanisme technique commun selon une condition ou un seuil défini | [Décidé] 25 ; écart avec N1 §1 : §6.1 |
| **Premier usage identifié (candidat)** | Premier usage retenu pour un moteur, dont la réalisation reste conditionnée à la validation de sa faisabilité, de ses calculs, hypothèses, limites et risques réglementaires | [Décidé] 27 |
| **Conditions d'éligibilité (P4 D1)** | Présentation pédagogique générale, dans D1, des conditions d'éligibilité à une protection institutionnelle : types de fonds ou produits susceptibles d'être couverts ; établissements et organismes concernés ; principales limites et exclusions ; orientation vers les organismes officiels pour vérifier les conditions exactes et actualisées. Les montants ne sont pas affichés dans Élan au lancement (D1-C1). Les détails réglementaires propres à chaque mécanisme peuvent rester dans les notes de recherche (D1-C3) ; ces notes ne constituent pas automatiquement du contenu destiné aux utilisateurs. Cette définition ne vaut pas validation juridique des conditions de garantie | [Décidé] arbitrage de cohérence D1-C7 (11 novembre 2026) ; conditions exactes [À vérifier] auprès des organismes officiels |
| **Cantonnement (P4 D1)** | Mesure réglementaire de sauvegarde des fonds des clients des établissements de paiement et de monnaie électronique. Elle est distincte des mécanismes institutionnels de garantie (FGDR, FGAP), soumis à leurs propres conditions et règles. Le cantonnement n'est jamais présenté comme une garantie de remboursement équivalente au FGDR ou au FGAP. Cette décision de rattachement ne vaut pas validation juridique du fonctionnement précis du cantonnement | [Décidé] arbitrage de cohérence D1-C8 (11 novembre 2026) ; fonctionnement précis [À vérifier] |

---

## 4. Remplacements explicites

Les documents de référence ne sont pas modifiés. Les tableaux ci-dessous établissent la formulation applicable pour le périmètre précisé.

### 4.1 Référentiel global

| Document et section | Formulation remplacée | Formulation applicable | Portée |
|---|---|---|---|
| Référentiel, §4 (tableau, ligne « Simulation numérique ») | « Simulation de crédit P4 : usage candidat à arbitrer » | « Premier usage identifié (candidat) : simulation entrepreneuriale P2, sous réserve de la validation de sa faisabilité, de ses calculs, hypothèses, limites et risques réglementaires. Simulation de crédit P4 : usage ultérieur candidat. » (12, 21, 27) | Uniquement le premier usage du moteur |
| Référentiel, §4.9 | « La simulation de crédit en P4 est un usage candidat. » | Même formulation que ci-dessus, en tête du paragraphe ; le reste du §4.9 est inchangé (12, 27) | Idem |
| Référentiel, §13.2 | « Statut définitif de la simulation numérique de crédit. » | « Étude de faisabilité de la simulation entrepreneuriale P2. » (21, 27) | Ce seul point ouvert |
| Référentiel, §7.1 | « Le contenu pédagogique déjà identifié comprend un programme de 3 niveaux, 9 modules, 45 leçons, 28 fiches et 7 outils. Les modules A1 à A3 sont validés. A4 et A5 restent à revoir. A6 à A9 restent à construire. » | « La structure métier actuelle du P1 est formée de cinq dimensions et quarante sous-domaines. Les anciens modules constituent une classification éditoriale historique ; leurs contenus pertinents pourront être remappés après examen. Aucun ancien module ne devient automatiquement une structure de parcours. » (9) | Structure du P1 ; le reste du §7.1 est inchangé |
| Référentiel, §7.4 | « Le bilan P4 corrigé constitue sa référence métier. » | « La synthèse du §7.4 et le bilan P4 constituent une vue d'ensemble provisoire. Les documents détaillés D1 à D8 restent les références métier ; la synthèse ne les remplace pas ; les éléments non documentés restent à vérifier. » (3, 30) | Statut documentaire de P4 |
| Référentiel, §8 | Tableau des liens entre piliers | Complété par la matrice du §2 du présent document | Complément ; le tableau existant reste applicable |
| Référentiel, §4.8 | — | Les définitions de « signal de vigilance » et d'« alerte » du §3 s'appliquent (25), sous réserve du point ouvert §6.1 | Complément |

### 4.2 Bilan P4

| Document et section | Formulation remplacée | Formulation applicable | Portée |
|---|---|---|---|
| Bilan P4, §2 et §12 | Les huit documents de dimension restent les références métier ; le bilan en constitue une synthèse | Formulation maintenue. Le bilan est une référence de travail provisoire ; P4 D1 est une référence métier validée ; P4 D2 à D8 existent depuis le 13 novembre 2026 comme propositions non validées (§6.3) ; toute décision qui en dépend reste à vérifier (3, 30) | Précision de statut |
| Bilan P4, D1 (« Protection des fonds ») | « expliquer la garantie des dépôts du FGDR, généralement jusqu'à 100 000 € par déposant et par établissement, sous réserve des règles et exclusions applicables » | Formulation maintenue dans le bilan, qui reste intact. Les montants de garantie (FGDR, FGAP) ne sont pas affichés dans Élan au lancement ; l'utilisateur est orienté vers le FGDR ou le FGAP pour consulter les montants et conditions en vigueur. [Décidé] arbitrage de cohérence D1-C1 (11 novembre 2026) | Affichage des montants de garantie |
| Notes de recherche et de vérification de P4 D1 | — | Les montants de garantie peuvent être conservés dans les notes de recherche et de vérification de D1. Ils y sont identifiés comme des informations externes à vérifier ; ils ne constituent pas des données fonctionnelles destinées aux utilisateurs ; leur conservation documentaire ne crée pas d'obligation de maintenance dans l'application. [Décidé] arbitrage de cohérence D1-C3 (11 novembre 2026) | Statut des montants dans la documentation de travail |
| Bilan P4, D1 (« Réflexes anti-fraude concrets ») | Réflexes énumérés au sein de D1 | Les réflexes anti-fraude concrets relèvent de la base anti-arnaque commune. D1 les réutilise en apportant le contexte propre aux acteurs financiers ; D1 ne crée pas une seconde base de réflexes anti-fraude. Le bilan reste intact. [Décidé] arbitrage de cohérence D1-C2 (11 novembre 2026) ; [Renvoi] bilan P4 §6.3 | Rattachement des réflexes anti-fraude |
| Bilan P4, D7, « Répartition entre les piliers » | P2, P3 et P4 D7 seulement | Ajout : « P1 traite les conséquences budgétaires et personnelles, les obligations de couverture et les doublons (P1 D4.3), en réutilisant les contenus techniques de D7. » (5) | Ajout de P1 |
| Bilan P4, §11 (« Décisions métier consolidées ») | « Les autres piliers réutilisent les contenus techniques d'assurance de D7 au lieu de les dupliquer. » | « Les autres piliers, dont P1, réutilisent les contenus techniques d'assurance de D7 au lieu de les dupliquer. » (5) | Ajout de P1 |
| Bilan P4, §5 (tableau, ligne « Moteur de simulation numérique ») et paragraphe suivant | « Usage crédit envisagé en P4 D4 ; le premier usage du moteur reste soumis au statut du référentiel global » | « Premier usage identifié (candidat) : simulation entrepreneuriale P2. Simulation de crédit P4 : usage ultérieur candidat, sous réserve de validation de ses calculs, hypothèses, limites et risques. » (12, 27) | Premier usage du moteur |
| Bilan P4, §11 (« Points à arbitrer ») | « Définition du premier usage du moteur de simulation numérique, conformément au statut exact du référentiel global. » | Point clos par les arbitrages 12 et 27 | Ce seul point |
| Bilan P4, D3-B | « relances et recouvrement ; échanges avec les créanciers » | Créanciers financiers, recouvrement financier, surendettement et fichiers ; les impayés et démarches auprès des créanciers non bancaires relèvent de P1 ou d'une ressource spécialisée (2, 23) | Périmètre des créanciers |
| Bilan P4, D4 | « capacité de remboursement et solvabilité » | Évaluation bancaire de la solvabilité, critères réglementaires et mécanismes de décision ; la capacité budgétaire réelle relève de P1 ; P4 peut réutiliser les données budgétaires pertinentes sans remplacer le diagnostic P1 (14, 31) | Partage P1/P4 |
| Bilan P4, D5 | « épargne de précaution » | Supports, garanties, disponibilité et liquidité ; utilité, montant, constitution, utilisation et reconstitution en P1 (11). Les « garanties » traitées en D5 sont les garanties contractuelles et les caractéristiques propres au support (capital garanti ou non) ; la protection institutionnelle des fonds relève de D1, vers laquelle D5 renvoie (arbitrage de cohérence D1-C5) | Partage P1/P4 ; partage D1/D5 |
| Bilan P4, D8 | « définition des objectifs » ; « distinction entre besoins et envies » | Méthode de choix entre solutions financières ; la définition et l'organisation des objectifs personnels relèvent de P1 ; D8 n'est pas une stratégie financière globale (15) | Partage P1/P4 |
| Bilan P4, D6 | — | Contenu détaillé, notamment immobilier, [À vérifier] (16, 30) ; P4 D6 existe comme proposition non validée | Statut |
| Bilan P4, §6.1 | Entrées « Je suis victime d'une fraude » et « Je n'arrive plus à rembourser » | L'entrée « Je n'arrive plus à rembourser » est commune et accessible depuis P1 et P4 (2) | Accès |
| Bilan P4, §1, §7, §10 ; D2, D4, D5, D6, D7, D8 | Formulations relatives à la comparaison, au conseil et à l'intermédiation | [En attente de revue juridique] : points J11 à J13 (§6.2) | Statut juridique |

### 4.3 P1 — lecture applicable des sous-domaines

Aucun sous-domaine n'est supprimé. Chacun conserve son angle P1 et renvoie vers le pilier de référence pour la partie technique.

| Sous-domaine P1 | Lecture applicable | Arbitrages | Revue juridique |
|---|---|---|---|
| 1.1 | Définitions de brut, net et net imposable reprises de P3 ; P1 traite les sommes perçues et les revenus réellement conservés | 7, 26 | — |
| 2.1 | P1 définit et organise les objectifs ; le choix entre solutions relève de P4 D8 | 15 | — |
| 2.4 | Inchangé ; supports en P4 D5 | 11 | — |
| 2.5 | Capacité budgétaire réelle à supporter une mensualité : P1 ; mécanismes des paiements différés et fractionnés : P4 D4 | 14, 31 ; [Renvoi] EP1 A2 | — |
| 2.7 | Inchangé ; renvois vers P3 D8, P4 D5, P5 D3 | 10 | — |
| 3.1 | Inchangé (capacité personnelle) | 14, 31 | — |
| 3.2 | Découvert : fonctionnement opérationnel et frais (service bancaire) : P4 D2 ; mécanismes de crédit (coût, TAEG, taux d'usure, solvabilité) : P4 D4 ; P1 garde les causes, la prévention et le retour à l'équilibre | 2 ; [Renvoi] EP1 A2 ; arbitrage du 14/11/2026 | — |
| 3.3 | P1 garde les impayés, leur priorisation et leurs conséquences, y compris loyer, énergie et factures courantes, ainsi que les démarches auprès des créanciers non bancaires (ou une ressource spécialisée) ; créanciers financiers et recouvrement financier : P4 D3-B | 2, 23 | — |
| 3.5 | Procédure de surendettement, Banque de France et fichiers : P4 D3-B ; P1 garde les signes d'alerte budgétaires et la prévention d'une nouvelle situation | 2, 23 | — |
| 4.1 | Définition du prélèvement à la source reprise de P3 ; l'impôt sur le revenu personnel (déclaration, avis) reste en P1 | 7 | — |
| 4.2 | Inchangé | — | En lien avec J3 |
| 4.3 | Contenus techniques de P4 D7 ; P1 garde le budget, les obligations de couverture et les doublons | 5 | — |
| 5.1 | Primes et heures supplémentaires : renvoi P3 ; P1 garde les revenus réellement conservés | 1, 7, 26 | J1, J3 |
| 5.2 | Activités indépendantes, coûts de démarrage, rentabilité : renvoi P2 ; P1 garde l'effet sur les revenus conservés, la compatibilité et les contraintes personnelles | 1, 26 | J1, J2, J4 |
| 5.3 | Compétences : P3 ; marché, offre, prix, test : P2 | 1 | — |
| 5.4 | Négociation et rémunération : P3 ; P1 garde l'évaluation financière d'une évolution de poste | 1, 7 | — |
| 5.5 | P1 garde les revenus immobiliers d'un particulier et leur effet budgétaire ; investissement, rendement et risques : P4 D6 (proposition non validée) [À vérifier] ; bien exploité dans une activité : P2 | 16 | J5 |
| 5.6 | Rémunération selon le statut : P2 ; définitions : P3 ; P1 garde ce qui reste réellement | 1, 7, 26 | J2, J3 |
| 5.7 | Inchangé | 1 | J1 |

---

## 5. Articulation avec les autres documents

| Document | Articulation |
|---|---|
| **I1** | Règles de réutilisation des dossiers personnel (§5.1) et entreprise (§4) ; réauthentification proportionnée (§6) (6, 17, 18, 24) |
| **P2** (`P2-decisions-entrepreneuriat.md`) | Formulations obsolètes du bilan P2 et application des arbitrages 1, 7, 8, 12, 13, 16, 18, 21, 22, 25, 26, 27, 32 |
| **P3** (`P3-decisions-travail-carriere.md`) | DP-5 et DP-8 pour le dossier professionnel ; frontières transversales (§8) |
| **M7** | §1 (aucun suivi entre sessions ; indicateurs P2) et §9 (ligne P2) : indicateur de complétion conditionnel (32) |
| **N1** | §1, définition de l'alerte : écart documentaire ouvert (§6.1) ; N1 n'est pas modifié |
| **AI1** | §1 : entrée commune « Je n'arrive plus à rembourser » accessible depuis P1 et P4 (2) |
| **EP1** | §1 : premier usage identifié (candidat) de la simulation numérique (12, 27) ; §10 : statut des anciens modules P1 (9) |
| **M2** | Les règles de sensibilité s'appliquent à toute réutilisation de données (6, 18, 31) |

---

## 6. Points ouverts

### 6.1 Vocabulaire des alertes : écart documentaire avec N1 §1

| Document | Formulation exacte |
|---|---|
| N1 §1 | « **Alerte** : Information ou évolution pertinente signalée par le moteur commun d'alertes » ; « Les alertes, les rappels et les notifications de service sont des mécanismes distincts, même lorsqu'ils utilisent un même canal de transmission. » |
| Arbitrage 25 | « "Alerte" désigne une notification déclenchée par le mécanisme technique commun selon une condition ou un seuil défini. » |

- **Compatible :** mécanisme d'origine (moteur commun) ; distinction avec le signal métier.
- **Complément :** l'arbitrage 25 précise la condition ou le seuil.
- **Écart :** N1 qualifie l'alerte d'« information… signalée » et réserve le mot « notification » à d'autres mécanismes (notification de service, notification système) ; l'arbitrage 25 qualifie l'alerte de « notification ».

N1 et l'arbitrage 25 sont maintenus en l'état. Une note d'articulation dans N1 pourra être proposée ultérieurement et soumise à validation. **[À vérifier]**

### 6.2 Revue juridique ciblée (arbitrage 22)

Tous les points sont **[En attente de revue juridique]**. Aucune conclusion juridique n'est validée.

| N° | Pilier | Point à examiner | Emplacements concernés |
|---|---|---|---|
| J1 | P1, dimension 5 | Revenus complémentaires | P1, sous-domaines 5.1, 5.2, 5.7 |
| J2 | P1, dimension 5 | Obligations fiscales et sociales | P1, sous-domaines 5.2, 5.6 |
| J3 | P1, dimension 5 | Cumul des aides | P1, sous-domaines 5.1, 5.6 ; lien avec 4.2 |
| J4 | P1, dimension 5 | Compatibilité avec un emploi | P1, sous-domaine 5.2 |
| J5 | P1, dimension 5 | Revenus locatifs | P1, sous-domaine 5.5 |
| J6 | P2 | Accompagnement entrepreneurial | P2 §1, §3 (espaces), §7 |
| J7 | P2 | Choix et conséquences des statuts | P2, dimensions 4.1, 6.2, 7.7 |
| J8 | P2 | Devis et facturation | P2 §5 ; dimension 6.3 |
| J9 | P2 | Financement | P2, dimensions 4.4, 7.7 |
| J10 | P2 | Obligations de l'employeur | P2, dimension 7 (« Points importants ») |
| J11 | P4 | Comparaison d'offres fournies par l'utilisateur | P4 §7 ; outils de D2, D4, D5, D7 |
| J12 | P4 | Limites entre information, comparaison et conseil | P4 §1, §7, §10 ; D5, D6, D8 |
| J13 | P4 | Risque de qualification en intermédiation financière | P4 §7 ; D7 (« Limites ») |
| J14 | P4 | Responsabilité liée à la présentation d'un résultat de vérification | P4 D1, D1.6 |
| J15 | P4 | Frontière entre information pédagogique et conseil réglementé | P4 D1, D1.1 |
| J16 | P4 | Exactitude de la description des mécanismes de garantie : FGDR, FGAP, cantonnement, cautions professionnelles et garantie des sociétés de gestion, sans montants. Hors périmètre : garantie de l'État sur les livrets réglementés, FGAO, FGAPDS, FPGIP | P4 D1, D1.4.a et D1.4.b (descriptions seulement ; le fonctionnement opérationnel du cantonnement n'est pas couvert) |
| J17 | P4 | Formulation de la non-garantie liée aux inscriptions à l'ORIAS et à l'adhésion à une association | P4 D1, D1.1, D1.2, D1.6 |
| J18 | P4 | Statut des PSCA après la période transitoire MiCA, et acteurs européens sous passeport | P4 D1, D1.1, D1.3 |
| J19 | P4 | Tentative amiable préalable à une action en justice pour certains litiges de moins de 5 000 € (D3A-M12). Intitulé juridique exact à préciser ; le seuil de 5 000 € est un élément relevé dans une source, non vérifié juridiquement. Ajout au suivi transversal par l'arbitrage du 13 novembre 2026 | Recherche sur les médiateurs (`docs/research/P4-D3-A-recherche-mediateurs.md`, archive de recherche créée le 13 novembre 2026, sans valeur de référence validée), D3A-M12 ; P4 D1 §6.1 |

### 6.3 Points documentaires

| Point | État | Statut |
|---|---|---|
| **P4 D1 à D8** | Recherche effectuée le 11 novembre 2026 dans `elan-v2` (aucun commit), dans l'ancien projet en lecture seule (fichiers et historique Git complet), et dans les dossiers locaux accessibles (Documents, Desktop, Downloads). Aucun document de dimension P4 trouvé ; pour chaque dimension, seule la synthèse du bilan P4 (§3) est disponible, avec les décisions de son §11 et du référentiel. Les sources externes (exports de conversations, stockage en ligne) n'ont pas pu être consultées. **Situation au 13 novembre 2026 :** le document P4 D1 (`docs/decisions/P4-D1-acteurs-registres-protection-fonds-fraude.md`) est une référence métier validée par décision explicite du 13 novembre 2026 ; ses points juridiques J14 à J19 restent en attente de revue juridique, ses lacunes de recherche et documentaires restent ouvertes, et il n'est pas considéré comme prêt pour la production. Le bilan P4 conserve son rôle de synthèse provisoire (3, 30). **Situation au 14 novembre 2026 :** les documents P4 D2 à D8, dont D3-A et D3-B, existent depuis le 13 novembre 2026 dans `docs/decisions/` comme propositions non validées ; aucun n'est validé. | [À vérifier] |
| Contenu détaillé de P4 D6 (immobilier) et de P4 D3-B (créanciers financiers) | P4 D6 et P4 D3-B existent comme propositions non validées ; l'immobilier locatif direct et le recouvrement financier n'y sont pas encore documentés | [À vérifier] (16, 23) |
| **P5 D6** | Aucune version trouvée. Formulations confirmées : P5 §1 (« Comprendre les grandes transitions et les enjeux économiques de demain »), P5 §10 (« Les transitions structurelles relèvent de D6 »), référentiel §7.5 (« Comprendre les transitions et les enjeux de demain »). Proposition à préparer selon les arbitrages 19 et 28 ; rien n'est intégré au document de référence. | [À vérifier] |
| Écart avec N1 §1 | §6.1 | [À vérifier] |

### 6.4 Points techniques

| Point | Conséquence | Statut |
|---|---|---|
| Seuils et actions de la réauthentification proportionnée (24) | Inscrits comme paramètre à compléter dans I1 §6 et §10.3 | [À vérifier] |
| Garanties de l'indicateur de complétion du dossier entreprise (32) | Maintien de l'indicateur, ou suppression si les garanties ne sont pas démontrées | [Conditionnel] |
| Étude de faisabilité de la simulation entrepreneuriale P2 (21, 27) : calculs, hypothèses et sources, limites, données demandées, maintenance, risques réglementaires, validation humaine | La simulation reste candidate | [Conditionnel] |

---

Fin du document FR1 — consolidation du 11 novembre 2026.
