# P4 D2 — Services bancaires

- **Statut :**
  - **Statut métier :** proposition de reconstruction rédigée le 13 novembre 2026, sur autorisation explicite (P4T-A25). **Document non validé** : il ne constitue pas une référence métier validée. Les mentions [Proposition] ne sont pas des décisions et les mentions [Ouvert] restent ouvertes.
  - **Réserves juridiques :** aucune formulation n'est validée juridiquement. Points J11, J12 et J20 : [En attente de revue juridique]. J20 est provisoire tant qu'il n'est pas inscrit dans FR1 (P4T-A31) ; ce n'est pas une règle transversale validée.
  - **Droit et paramètres :** état au 13 novembre 2026. Les paramètres chiffrés sont datés (§6).
  - **Production :** non prêt pour la production.
- **Fichier :** `docs/decisions/P4-D2-services-bancaires.md`.
- **Base :**
  - le bilan P4, D2 (`docs/reference/pilier-4-banque-finance-2026-11-04.md`) ;
  - FR1 ;
  - P4 D1 ;
  - les recherches documentaires du 13 novembre 2026, restituées en session et non archivées dans le projet.
  - **Aucun contenu de l'ancien projet n'est repris.**
- **Portée :** projet Élan v2, pilier 4 (Banque et finance), dimension D2.
- **Documents liés :**
  - le registre transversal P4 (`docs/decisions/P4-registre-transversal.md`) ;
  - P4 D1 (`docs/decisions/P4-D1-acteurs-registres-protection-fonds-fraude.md`) ;
  - P4 D3-A, D3-B et D4 ;
  - FR1 (`docs/decisions/FR1-frontieres-metier-piliers.md`) ;
  - EP1 (arbitrage A2).

---

## 0. Statut, périmètre et gouvernance

### 0.1 Classifications

Statuts, colonne « Nature » et décisions : [Renvoi] registre transversal §1. Le document emploie uniquement les statuts de D1.

### 0.2 Décisions appliquées

| Décision | Objet | Statut |
|---|---|---|
| Bilan P4, D2 et §7 | Périmètre ; comparateurs publics pour les frais ; comparaison limitée aux offres fournies par l'utilisateur | [Élan validé] |
| D1-C8, D1-AF6 | Cantonnement traité dans D1 ; D2 traite le fonctionnement des services de paiement et leurs conséquences opérationnelles | [Décidé] ; [Renvoi] D1 §4.1 |
| P4T-A04 (arbitrage 4 du plan) | D2 couvre les incidents opérationnels du compte ; D3-A couvre les contestations, fraudes et recours. D2 couvre le découvert comme service ; D4 couvre sa dimension crédit et coût | [Décidé] |
| P4T-A20 (arbitrage complémentaire 7) | Frais des clients fragiles : D2 traite les services et les plafonnements ; D3-B traite les difficultés financières | [Décidé] |
| FR1, arbitrage 2 et §4.3 (3.2) | Les frais et mécanismes du découvert relèvent de P4 D2 ; P1 garde les causes, la prévention et le retour à l'équilibre | [Décidé] ; [Renvoi] FR1 |
| D1-A3, FR1 §2 | Le droit au compte relève de P4 D3-A | [Décidé] ; [Renvoi] |

### 0.3 Identifiants

| Série | Usage |
|---|---|
| D2-E01 à D2-E19 | Faits externes (D2-E19 ajouté le 18/11/2026 après vérification d'unicité dans `docs/`) |
| D2-E16, D2-E18 | Retirés, non réattribuables (P4T-A29) ; D2-E18 devenu D2-O09 |
| D2-P01 à D2-P06 | Propositions |
| D2-O01 à D2-O09 | Points ouverts |
| D2-S01 à D2-S19 | Sources (annexe A) ; D2-S14 à D2-S19 ajoutés le 18/11/2026 après vérification d'unicité dans `docs/` |

Unicité vérifiée dans le projet le 13 novembre 2026 : [Renvoi] registre §1.3.

---

## 1. Périmètre et objectifs

| Contenu | Nature | Statut |
|---|---|---|
| Objectif : aider à comprendre les services bancaires du quotidien, leurs coûts, leurs conditions et les démarches associées | Élan | [Élan validé] bilan P4, D2 |
| Sujets du bilan : comptes, choix d'une banque, cartes, moyens de paiement, frais, découverts et incidents, mobilité bancaire, sécurité des usages numériques ; situations particulières : décès d'un proche, virements internationaux | Élan | [Élan validé] |
| Finalité proposée : « Savoir comment fonctionne son compte et ses moyens de paiement, ce qu'ils coûtent, quelles limites s'appliquent, et quoi faire lorsqu'un incident de fonctionnement survient. » | Prop. | [Proposition] D2-P01 |

**Hors périmètre** (renvois au §5) :
- la protection des fonds et le cantonnement (D1) ;
- les contestations, fraudes, réclamations, le droit au compte et la clôture par la banque (D3-A) ;
- les difficultés financières et les fichiers d'incidents (D3-B) ;
- le découvert comme crédit et le taux d'usure (D4) ;
- les causes budgétaires d'un incident (P1).

## 2. Organisation

| Section | Objet |
|---|---|
| D2.1 | Compte et changement de banque |
| D2.2 | Moyens de paiement |
| D2.3 | Frais bancaires et plafonnements |
| D2.4 | Découvert comme service bancaire |
| D2.5 | Situations particulières |
| D2.6 | Sécurité des usages numériques |

Structure : [Proposition] D2-P02.

---

## 3. Contenus

### D2.1 Compte et changement de banque

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D2-E01 | Le service d'aide à la mobilité bancaire est gratuit. Il couvre les comptes de dépôt et de paiement des particuliers, mais pas les livrets ni les comptes à terme. **Texte :** l'établissement d'arrivée propose, gratuitement et sans condition, un service de changement automatisé des domiciliations des prélèvements valides et virements récurrents, sur accord formel du client ; le service s'applique aux comptes de dépôt ou de paiement des personnes physiques n'agissant pas pour des besoins professionnels ; les établissements mettent gratuitement à disposition une documentation sur la mobilité (L312-1-7 II, III et VII ; R312-4-4 II) | Admin. ; Droit | SP-F33881, D2-S14 (CMF-L312-1), D2-S15 (CMF-R312) | [Établi] |
| D2-E02 | Les étapes de la mobilité représentent 22 jours ouvrés à partir de l'accord écrit (2, 5, 5 et 10 jours ; le total est un calcul, non énoncé par la page). **Texte :** demande à l'établissement de départ sous deux jours ouvrés après l'accord formel ; transfert des informations sous cinq jours ouvrés ; communication des nouvelles coordonnées aux émetteurs sous cinq jours ouvrés (L312-1-7 III) ; prise en compte par les émetteurs de prélèvements et de virements sous dix jours ouvrés (R312-4-4 IX et X) ; virements et prélèvements récurrents : opérations présentées au moins deux fois par le même émetteur au cours des treize mois précédents (R312-4-4 I) | Admin. ; Droit | SP-F33881, D2-S14, D2-S15 | [Établi] ; total de 22 jours : calcul, non énoncé par les textes |
| D2-E03 | Un compte à solde négatif ne peut pas être clôturé dans le cadre de la mobilité. Après la clôture, l'ancienne banque informe gratuitement le client pendant 13 mois. **Texte :** l'établissement de départ transfère le solde positif éventuel et clôture le compte si le client le demande ; il signale les obligations en suspens ou toute circonstance empêchant le transfert du solde et la clôture (R312-4-4 VI) ; après la clôture, il informe gratuitement pendant treize mois, sous trois jours ouvrés, de toute présentation d'un virement, d'un prélèvement ou d'un chèque sur le compte clos (L312-1-7 IV) ; aucun frais ni pénalité ne peut être mis à la charge du client en cas de manquement d'un établissement à la procédure (R312-4-4 IV), qui l'indemnise sans délai du préjudice direct (L312-1-7 VI) | Admin. ; Droit | SP-F33881, D2-S14, D2-S15 | [Établi] ; « solde négatif » : formulation administrative ; le texte parle d'obligations en suspens |
| D2-O01 | Types de comptes, critères de choix d'une banque et guide du premier compte : aucune source lue | — | — | [Ouvert] |

### D2.2 Moyens de paiement

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D2-E04 | Carte à débit immédiat : débit sous 48 heures au plus. Carte à débit différé : débit à la date prévue au contrat. Carte à autorisation systématique : utilisée notamment pour le droit au compte et l'offre clientèle fragile | Admin. | BDF-CARTE | [Établi] |
| D2-E05 | Le paiement sans contact par carte est limité à 50 € par opération. Les plafonds cumulés sont fixés par la banque | Admin. | SP-F10410 | [Établi] ; plafonds cumulés : D2-O02 |
| D2-O02 | Plafonds cumulés du paiement sans contact : fixés par chaque banque, aucune source générale | — | SP-F10410 | [Ouvert] |
| D2-E06 | Depuis le 9 octobre 2025, la banque vérifie, pour les virements SEPA, que le nom du bénéficiaire correspond à l'IBAN. **Texte (règlement (UE) n° 260/2012, art. 5 quater, inséré par le règlement (UE) 2024/886) :** le prestataire du payeur propose un service de vérification du bénéficiaire, effectué immédiatement après la saisie des informations et avant l'autorisation du virement, quel que soit le canal ; en cas de non-concordance, il en informe le payeur et lui signale le risque d'un virement vers un compte non détenu par le bénéficiaire indiqué ; en cas de quasi-concordance, il indique le nom associé à l'identifiant ; obligation applicable au plus tard le 9 octobre 2025 dans la zone euro (art. 5 quater, 9) ; service gratuit (art. 5 ter, 2) | Admin. ; Droit | BDF-SEPA, SP-F2384, D2-S18 (UE-2024-886) | [Établi] ; conséquences d'une notification ignorée sur la responsabilité et le remboursement : [Renvoi] D3-A |
| D2-E07 | Le virement instantané et le virement classique doivent être facturés au même tarif. **Texte :** les frais facturés pour l'envoi et la réception de virements instantanés ne doivent pas être **supérieurs** aux frais des autres virements d'un type correspondant, au plus tard depuis le 9 janvier 2025 dans la zone euro (règlement (UE) n° 260/2012, art. 5 ter, 1 et 3) | Admin. ; Droit | SP-F2384, D2-S18 | [Établi] ; le texte fixe un plafond (« pas supérieurs ») et non une stricte égalité |
| D2-E08 | Un ordre de virement reçu par la banque ne peut plus être annulé. Un virement programmé peut être révoqué jusqu'à la veille ouvrable de son exécution ; des frais de révocation sont possibles | Admin. | BDF-SEPA | [Établi] |
| D2-E09 | Un mandat de prélèvement devient caduc après 36 mois sans prélèvement présenté. L'opposition à un prélèvement se fait avant la fin du jour ouvrable qui précède le débit | Admin. | SP-F20752 | [Établi] |
| D2-E10 | Chèque : encaissable pendant 1 an et 8 jours. Un commerçant peut le refuser s'il en informe sa clientèle. Le chéquier est délivré gratuitement et un refus doit être motivé | Admin. | BDF-CHEQUE | [Établi] |
| D2-E11 | Plafonds de paiement en espèces : 1 000 € d'un particulier à un professionnel ; 300 € aux guichets des finances publiques ; 1 500 € par mois pour un salaire. Pas de plafond entre particuliers, mais un écrit est nécessaire au-delà de 1 500 € | Admin. | SP-F10999 | [Établi] ; paramètre daté |
| — | Délais de contestation d'un paiement (carte, virement, prélèvement autorisé ou non) | — | — | [Renvoi] D3-A §3, D3A.2 |
| D2-P03 | Tableau unique des moyens de paiement : fonctionnement, plafonds, révocation ou opposition, avec un renvoi vers D3-A pour toute contestation | Prop. | — | [Proposition] |

### D2.3 Frais bancaires et plafonnements

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D2-E12 | Seuls les frais figurant dans la documentation tarifaire peuvent être facturés. Une modification tarifaire est annoncée au moins 2 mois à l'avance. Un récapitulatif annuel des frais est envoyé en janvier. **Texte :** le client est informé gratuitement, par son relevé mensuel, du montant et de la dénomination des frais liés aux irrégularités et incidents que l'établissement entend débiter ; le débit intervient au minimum quatorze jours après la date d'arrêté du relevé (L312-1-5) ; R312-1-2 énumère les frais concernés ; les dénominations des frais sont normalisées (D312-1-1) | Admin. ; Droit | BDF-FRAIS, D2-S14, D2-S15 | [Établi] ; préavis de 2 mois et récapitulatif annuel : sources administratives seulement |
| D2-E13 | La commission d'intervention est plafonnée à 8 € par opération et 80 € par mois. Ces plafonds passent à 4 € et 20 € pour l'offre spécifique et pour le droit au compte. **Texte :** commissions perçues à raison du traitement des irrégularités de fonctionnement du compte, plafonnées pour les personnes physiques n'agissant pas pour des besoins professionnels (L312-1-3) : 8 € par opération et 80 € par mois et par compte (R312-4-1) ; 4 € et 20 € pour l'offre spécifique et le compte ouvert au titre du droit au compte (R312-4-2) ; définition : somme perçue pour une opération entraînant une irrégularité de fonctionnement du compte nécessitant un traitement particulier (ordre irrégulier, coordonnées inexactes, absence ou insuffisance de provision) (D312-1-1, A, 12°) | Admin. ; Droit | BDF-FRAIS, SP-F2417, SP-F31423, D2-S14, D2-S15 | [Établi] ; paramètre daté |
| D2-E14 | Frais de rejet : 30 € pour un chèque de 50 € ou moins ; 50 € au-delà ; pour un prélèvement ou un virement, 20 € au plus et jamais plus que le montant rejeté. Un nouveau rejet de la même opération ne donne pas lieu à de nouveaux frais. **Texte :** chèque : l'ensemble des sommes facturées au titre du rejet, y compris la lettre d'information ou d'injonction, ne peut dépasser 30 € (chèque de 50 € ou moins) ou 50 € (au-delà) ; un chèque représenté plusieurs fois dans les 30 jours suivant le premier rejet constitue un incident unique (D131-25). Autres incidents de paiement (rejet pour défaut ou insuffisance de provision, quel que soit le moyen de paiement, D133-5) : frais limités au montant de l'ordre rejeté, dans la limite de 20 € ; en cas de rejets successifs de la même opération, le payeur **peut demander le remboursement** des frais au-delà du premier rejet, la preuve qu'il s'agit de la même opération lui incombant (D133-6) | Admin. ; Droit | BDF-FRAIS, SP-F20752, D2-S16 (CMF-D131-25), D2-S17 (CMF-D133) | [Établi] ; paramètre daté ; **écart signalé :** la formulation administrative « ne donne pas lieu à de nouveaux frais » diffère du texte (remboursement sur demande du payeur) |
| D2-E15 | Clientèle fragile : les frais d'incidents sont plafonnés à 25 € par mois (neuf frais listés ; frais de saisie et agios exclus). L'offre spécifique coûte au plus 3 € par mois, comprend au moins 10 services, plafonne les frais à 20 € par mois et 200 € par an, et peut être résiliée à tout moment. **Texte (R312-4-3) :** la fragilité est appréciée par l'établissement à partir des irrégularités ou incidents répétés pendant trois mois consécutifs (fragilité d'au moins trois mois lorsqu'ils sont au moins cinq dans un même mois) et du montant des ressources ; sont aussi en situation de fragilité les personnes inscrites trois mois consécutifs au FCC pour un chèque impayé ou un retrait de carte, et les débiteurs en surendettement recevable ou bénéficiant de mesures, pendant leur inscription au FICP. L'offre spécifique est proposée sur support durable ; elle comprend au moins dix services (dont une carte à autorisation systématique, quatre virements SEPA par mois, des prélèvements illimités, deux chèques de banque par mois, des alertes sur le solde et le plafonnement de R312-4-2) ; son tarif ne peut dépasser **3 € par mois, revalorisés chaque année** selon l'indice des prix hors tabac ; la renonciation est recueillie sur support durable | Admin. ; Droit | BDF-FRAGILE, D2-S14, D2-S15 | [Établi] ; paramètre daté ; montant revalorisé en vigueur non vérifié ; plafonds de 25 € par mois (clientèle fragile) et de 20 € par mois et 200 € par an (offre spécifique) : non retrouvés dans les articles lus (L312-1-3, R312-4-1 à R312-4-3), présentés par BDF-FRAGILE seulement |
| — | Effets des frais sur une personne en difficulté ; procédure de surendettement | — | — | [Renvoi] D3-B (P4T-A20) |
| — | Pour les frais bancaires, Élan privilégie les comparateurs publics pertinents plutôt qu'une base exhaustive de tarifs | Élan | Bilan P4, D2 et §7 | [Élan validé] |
| D2-P04 | Fiche « plafonds de frais » : chaque montant y est accompagné de sa source et de sa date de vérification (§6) | Prop. | — | [Proposition] |
| D2-O03 | Comparateurs publics à retenir et leur périmètre : non identifiés | — | — | [Ouvert] |

### D2.4 Découvert comme service bancaire

État au 13 novembre 2026 uniquement. La réforme annoncée pour le 20 novembre 2026 n'est pas présentée comme applicable (P4T-A14) : [Renvoi] D4 §3, D4.6.

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D2-E17 | Il n'existe pas de droit au découvert | Admin. | SP-F31423, SP-A18569 | [Établi] (régime au 13/11/2026) |
| D2-O09 | Application des plafonds de D2.3 aux opérations liées à un découvert : non énoncée par BDF-FRAIS. Textes lus le 18/11/2026 : la commission d'intervention plafonnée vise une opération entraînant une irrégularité, dont l'absence ou l'insuffisance de provision (D312-1-1, A, 12° ; R312-4-1) ; les intérêts débiteurs sont une rubrique distincte (D312-1-1, C, 22°), dont le coût relève de D4 ; l'application à une opération restant dans la limite d'un découvert autorisé n'est pas énoncée. Point partiellement traité ; clôture à décider | — | BDF-FRAIS, D2-S15 | [Ouvert] |
| — | Coût du découvert comme crédit, TAEG et taux d'usure, analyse de solvabilité, proposition d'un crédit au-delà de 3 mois | — | — | [Renvoi] D4 §3, D4.6 |
| — | Causes budgétaires, prévention, retour à l'équilibre | — | — | [Renvoi] P1 (FR1 §4.3, 3.2) |
| D2-O04 | Contenus sur le découvert à revoir dès que la réforme sera vérifiée après son entrée en vigueur | — | SP-A18569 | [Ouvert] |

### D2.5 Situations particulières

| Réf. | Contenu | Statut |
|---|---|---|
| D2-E19 | Frais bancaires liés à une succession (comptes de dépôt, comptes sur livret et certains produits d'épargne réglementée du défunt, tenus par l'établissement) : Les trois cas de gratuité prévus par l'ancienne rédaction de L312-1-4-1 ont été abrogés à compter de la publication de la décision n° 2026-1207 QPC. Il s'agissait de la justification de la qualité d'héritier sans complexité manifeste, des soldes inférieurs au montant fixé par arrêté et du défunt mineur ; la décision du Conseil constitutionnel du 19/06/2026 les a déclarés contraires à la Constitution, sans report de ses effets (art. 1er et § 17). Le **plafonnement** des frais est maintenu : un décret le fixe dans la limite de 1 % du montant total des soldes et de la valorisation des produits du défunt, limite déclarée conforme (art. 2), et dans la limite d'un montant fixé par décret (L312-1-4-1) ; ce montant est de **857 €**, revalorisé chaque année selon l'indice des prix hors tabac (D312-1-3, 2°, en vigueur depuis le 01/01/2026). Source : D2-S19 (CC-2026-1207-QPC), D2-S14, D2-S15 | [Établi] ; paramètre daté (857 €, revalorisé chaque année) ; **réserves :** la rédaction consolidée de L312-1-4-1 sur Légifrance est lacunaire après la censure, et son dernier alinéa renvoie encore au « 1° » abrogé ; D312-1-3, 1° (cas de « complexité manifeste ») renvoie au 1° abrogé et n'a pas été modifié à ce jour : sa portée actuelle n'est pas établie ; le champ exact des opérations plafonnées n'est pas reformulé par un texte postérieur ; produits exclus du dispositif (sections 6, 6 bis, 6 ter et 7 ter du chapitre Ier du titre II du livre II du CMF) : non détaillés |
| D2-O05 | Décès d'un proche (démarches auprès de la banque, comptes individuels ou joints, lien avec l'assurance-vie). Frais bancaires de succession : D2-E19. Restent non établis : L312-1-4 (débit des frais funéraires et des actes conservatoires, clôture des comptes de faible montant : montants fixés par arrêté, non lus) ; les réserves de D2-E19 ; les comptes joints. Le lien avec l'assurance-vie relève de D5 | [Ouvert] |
| D2-O06 | Virements internationaux (SEPA ou non, frais, change, montant réellement reçu) : aucune source lue | [Ouvert] |

### D2.6 Sécurité des usages numériques

| Contenu | Statut |
|---|---|
| Techniques de fraude, signaux et réflexes : base anti-arnaque commune ; D2 n'en crée pas de seconde | [Décidé] D1-C2, D1-AF23 ; [Renvoi] D1.5 |
| Élan ne demande jamais d'identifiants, de mots de passe, de codes bancaires ni de numéro de carte pour un outil pédagogique | [Élan validé] bilan P4 §8 |
| Vérification du bénéficiaire d'un virement (D2-E06) : mécanisme de service. La fraude subie relève de D3-A | [Renvoi] D3-A |

---

## 4. Usages possibles dans Élan

Mécanismes communs décrits une seule fois : [Renvoi] registre §4.

| Usage | Mécanisme | Statut |
|---|---|---|
| Comparaison guidée d'offres fournies par l'utilisateur | P4T-M02 | [Élan validé] bilan §7 ; J11, J13 [En attente de revue juridique] |
| Lecture de tarifs et de relevés | P4T-M01 (décodeur documentaire, extension future) | Envisagé par le bilan ; extension non décidée [Ouvert] |
| Assistant à la mobilité bancaire ; guide du premier compte | — | Envisagés par le bilan ; [Proposition] D2-P05 |
| Rappel des paramètres datés affichés avec leur date (D2.3) | P4T-M08 | [Proposition] D2-P06 |

---

## 5. Frontières et renvois

| Frontière | Règle | Référence |
|---|---|---|
| D2 / D1 | D1 couvre le cantonnement et la protection des fonds ; D2 couvre le fonctionnement des services de paiement | P4T-F01 |
| D2 / D3-A | D2 couvre les incidents opérationnels ; D3-A couvre les contestations, fraudes, recours, le droit au compte et la clôture par la banque | P4T-F02, P4T-F03 |
| D2 / D3-B | D2 couvre les services et les plafonnements de frais (y compris pour la clientèle fragile) ; D3-B couvre les difficultés et les fichiers (FCC, FICP) | P4T-F04 |
| D2 / D4 | D2 couvre le découvert comme service ; D4 couvre le crédit, le coût, l'usure et la solvabilité | P4T-F05 |
| D2 / P1 | Causes et prévention des incidents ; budget | FR1 §4.3 |

## 6. Maintenance et paramètres datés

| Paramètre | Source | Vérifié le | Responsable / fréquence |
|---|---|---|---|
| Plafond sans contact (D2-E05) | SP-F10410 | 13/11/2026 | [Ouvert] |
| Plafonds d'espèces (D2-E11) | SP-F10999 | 13/11/2026 | [Ouvert] |
| Plafonds de frais et offre spécifique (D2-E13 à D2-E15) | BDF-FRAIS, BDF-FRAGILE ; textes D2-S14 à D2-S17 | 18/11/2026 | [Ouvert] ; tarif maximal de l'offre spécifique revalorisé chaque année (R312-4-3 IV) : montant en vigueur à vérifier |
| Durées de la mobilité (D2-E02) | SP-F33881 | 13/11/2026 | [Ouvert] |

Règle commune : [Renvoi] registre §9. Une fonction qui dépend d'un paramètre sans responsable de maintenance n'est pas lancée (bilan P4 §9, [Élan validé]).

## 7. Points juridiques et recherches restant à traiter

| Point | Statut |
|---|---|
| J11, J13 : comparaison d'offres fournies et risque d'intermédiation | [En attente de revue juridique] |
| J12 : limites entre information, comparaison et conseil | [En attente de revue juridique] |
| J20 : portée du délai de 120 jours prévu par contrat et base légale du délai de 70 jours hors EEE (partagé avec D3-A) | [En attente de revue juridique] ; provisoire jusqu'à son éventuelle inscription formelle dans FR1 (P4T-A31) |
| D2-O01 à D2-O06 ; D2-O09 | [Ouvert] |
| D2-O07 : SP-F31423 affiche « Vérifié le 22/10/2024 », mais cite des textes de 2025 et 2026 ; la date affichée n'est pas fiable | [Ouvert] |
| D2-O08 : SP-F2384 ne date pas la vérification du bénéficiaire ; la date du 9/10/2025 vient de BDF-SEPA seule. Date confirmée par le règlement (UE) n° 260/2012, art. 5 quater, 9 (D2-E06, D2-S18) : point traité ; clôture à décider | [Ouvert] |

---

## Annexe A — Sources

Consultées le 13 novembre 2026, en HTML ; D2-S14 à D2-S19 consultées le 18 novembre 2026. SP = Service-Public.gouv.fr (DILA) ; BdF = Banque de France.

| N° | Clé | Organisme | Titre | Lien | Date affichée | Lecture |
|---|---|---|---|---|---|---|
| D2-S01 | SP-F33881 | SP | Changer de banque : qu'est-ce que la mobilité bancaire ? | https://www.service-public.gouv.fr/particuliers/vosdroits/F33881 | Vérifié le 21/09/2026 | Intégrale |
| D2-S02 | SP-F10410 | SP | Qu'est-ce que le paiement sans contact ? | https://www.service-public.gouv.fr/particuliers/vosdroits/F10410 | Vérifié le 10/09/2026 | Intégrale |
| D2-S03 | SP-F2384 | SP | Virement bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F2384 | Vérifié le 01/09/2026 | Intégrale |
| D2-S04 | SP-F20752 | SP | Prélèvement bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F20752 | Vérifié le 09/09/2026 | Intégrale |
| D2-S05 | SP-F10999 | SP | Paiement en espèces | https://www.service-public.gouv.fr/particuliers/vosdroits/F10999 | Vérifié le 26/06/2026 | Intégrale |
| D2-S06 | SP-F2417 | SP | Refus d'ouverture de compte bancaire : droit au compte | https://www.service-public.gouv.fr/particuliers/vosdroits/F2417 | Vérifié le 19/10/2026 | Intégrale |
| D2-S07 | SP-F31423 | SP | Autorisation de découvert bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F31423 | Vérifié le 22/10/2024 (date non fiable, D2-O07) | Intégrale |
| D2-S08 | SP-A18569 | SP | Découverts bancaires : la réglementation change le 20 novembre | https://www.service-public.gouv.fr/particuliers/actualites/A18569 | Publié le 03/11/2025, mis à jour le 12/11/2026 | Intégrale |
| D2-S09 | BDF-FRAIS | BdF | Les frais bancaires | https://www.banque-france.fr/fr/a-votre-service/particuliers/connaitre-pratiques-bancaires-assurance/compte-frais/les-frais-bancaires | Aucune | Intégrale |
| D2-S10 | BDF-FRAGILE | BdF | Le plafonnement des frais bancaires et l'offre clientèle fragile | https://www.banque-france.fr/fr/a-votre-service/particuliers/connaitre-pratiques-bancaires-assurance/compte-frais/offre-clientele-fragile | Aucune | Intégrale |
| D2-S11 | BDF-CARTE | BdF | La carte de paiement | https://www.banque-france.fr/fr/a-votre-service/particuliers/mieux-connaitre-moyens-paiement/carte-paiement | Aucune | Intégrale |
| D2-S12 | BDF-CHEQUE | BdF | Le chèque | https://www.banque-france.fr/fr/a-votre-service/particuliers/mieux-connaitre-moyens-paiement/cheque | Aucune | Intégrale |
| D2-S13 | BDF-SEPA | BdF | Foire aux questions – Les incidents et litiges relatifs aux virements SEPA | https://www.banque-france.fr/en/node/303363 (contenu en français) | Aucune | Intégrale |
| D2-S14 | CMF-L312-1 | Légifrance | Code monétaire et financier, art. L312-1-3, L312-1-4, L312-1-4-1, L312-1-5 et L312-1-7 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006170365/ | L312-1-3 depuis le 23/06/2017 ; L312-1-5 depuis le 28/07/2013 ; L312-1-7 depuis le 28/05/2026 ; L312-1-4-1 depuis le 19/06/2026 (QPC) | Intégrale pour L312-1-3, L312-1-5, L312-1-7 ; L312-1-4 lu (montants des arrêtés non lus) ; L312-1-4-1 lu avec la décision n° 2026-1207 QPC (D2-E19) |
| D2-S15 | CMF-R312 | Légifrance | Code monétaire et financier, art. D312-1-1, R312-1-2, D312-1-3, R312-4-1 à R312-4-4 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006169759/ | R312-4-1 depuis le 01/01/2014 ; R312-4-2 depuis le 23/06/2017 ; R312-4-3 depuis le 01/11/2020 ; R312-4-4 depuis le 01/04/2018 ; D312-1-1 et R312-1-2 depuis le 01/01/2019 ; D312-1-3 depuis le 29/12/2025 | Intégrale |
| D2-S16 | CMF-D131-25 | Légifrance | Code monétaire et financier, art. D131-25 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006184466/ | En vigueur depuis le 16/05/2008 | Intégrale |
| D2-S17 | CMF-D133 | Légifrance | Code monétaire et financier, art. D133-5 et D133-6 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000020932299/ | En vigueur depuis le 01/11/2009 | Intégrale |
| D2-S19 | CC-2026-1207-QPC | Conseil constitutionnel | Décision n° 2026-1207 QPC du 19 juin 2026, Caisse d'Épargne Grand Est Europe [Encadrement des frais bancaires sur succession] | https://www.conseil-constitutionnel.fr/decision/2026/20261207QPC.htm | Rendue publique le 19/06/2026 ; JORF n° 0143 du 20/06/2026 | Intégrale ; lue le 18/11/2026 |
| D2-S18 | UE-2024-886 | EUR-Lex | Règlement (UE) 2024/886 du 13 mars 2024 (virements instantanés), art. 5 ter et 5 quater insérés dans le règlement (UE) n° 260/2012 | https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32024R0886 | JO UE du 19/03/2024 | Ciblée : art. 5 ter et 5 quater |

Fin du document — proposition non validée.
