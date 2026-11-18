# P4 D3-A — Litiges et incidents bancaires

- **Statut :**
  - **Statut métier :** proposition de reconstruction rédigée le 13 novembre 2026, sur autorisation explicite (P4T-A25). **Document non validé** : il ne constitue pas une référence métier validée. Les [Proposition] ne sont pas des décisions et les [Ouvert] restent ouverts.
  - **Réserves juridiques :** aucune formulation n'est validée juridiquement. J19, J20, J21 et J22 : [En attente de revue juridique]. J20, J21 et J22 sont provisoires tant qu'ils ne sont pas inscrits dans FR1 (P4T-A31) ; ce ne sont pas des règles transversales validées. Les articles de loi cités sont restitués, pas interprétés.
  - **Droit applicable :** état au 13 novembre 2026.
  - **Production :** non prêt pour la production.
- **Fichier :** `docs/decisions/P4-D3-A-litiges-incidents-bancaires.md` ; document distinct de D3-B (P4T-A09).
- **Base :**
  - le bilan P4, D3-A ;
  - P4 D1 (D1-A3, D1-A4, D1-AF8, D1-AF30) ;
  - l'archive de recherche `docs/research/P4-D3-A-recherche-mediateurs.md` (notes D3A-M01 à D3A-M13 ; sans valeur de référence validée) ;
  - les recherches du 13 novembre 2026, restituées en session, dont la lecture d'articles du Code monétaire et financier (P4T-A15) et du PDF de la recommandation OSMP (P4T-A16), dont aucune copie n'a été conservée.
  - Aucun contenu de l'ancien projet n'est repris.
- **Portée :** projet Élan v2, pilier 4, dimension D3, espace A.
- **Documents liés :** registre transversal P4 ; P4 D1 ; P4 D2 ; P4 D3-B ; P4 D7 ; AI1 (`docs/decisions/AI1-aide-immediate.md`) ; FR1.

---

## 0. Statut, périmètre et gouvernance

### 0.1 Classifications

[Renvoi] registre transversal §1. Seuls les statuts de D1 sont employés.

### 0.2 Décisions appliquées

| Décision | Objet | Statut |
|---|---|---|
| Bilan P4, D3 et D3-A | Deux espaces distincts ; situations couvertes ; principes de traitement ; accès immédiat à « Je suis victime d'une fraude » | [Élan validé] |
| Bilan P4 §8 | Données de litige et de fraude : protection renforcée ; espaces D3-A et D3-B distincts | [Élan validé] |
| D1-A3, D1-A4, D1-AF8, D1-AF30 | Droit au compte, réclamations, traitement des médiateurs et fraude subie relèvent de D3-A ; D1 identifie seulement les médiateurs | [Décidé] ; [Renvoi] D1 §4.1 |
| P4T-A04 | D3-A couvre les contestations, fraudes et recours, et les litiges bancaires. D2 couvre les incidents opérationnels et D7 les litiges d'assurance | [Décidé] |
| P4T-A07 | Moteurs D3 : besoins, premiers usages et expériences, sans architecture technique | [Décidé] |
| P4T-A11 | Identifiants D3A-M (historiques, non renommés), D3A-N, D3A-DC, D3A-S | [Décidé] |

### 0.3 Identifiants

| Série | Usage | Statut de la série |
|---|---|---|
| D3A-M01 à D3A-M13 | Notes de recherche historiques (archive) ; citées, jamais renommées | [Décidé] P4T-A11 |
| D3A-N.. | Nouvelles notes | [Décidé] P4T-A11 ; **aucune créée** |
| D3A-DC.. | Décisions de conception | [Décidé] P4T-A11 ; **aucune créée** (aucune décision nouvelle validée) |
| D3A-S01 à D3A-S30 | Sources (annexe A) ; D3A-S24 à D3A-S30 ajoutés le 18/11/2026 après vérification d'unicité dans `docs/` | [Décidé] P4T-A11 |
| D3A-E01 à D3A-E33 (D3A-E31 à D3A-E33 ajoutés le 18/11/2026 après vérification d'unicité dans `docs/`) ; D3A-K01, D3A-K02 ; D3A-P01 à D3A-P07 ; D3A-O01 à D3A-O11 | Faits externes documentés, anciennes formulations Élan à corriger, propositions, points ouverts | [Décidé] P4T-A33 (registre §1.3) |
| D3A-E20, D3A-E27, D3A-E29, D3A-E30 | Retirés, non réattribuables | P4T-A29 ; D3A-E27 devenu D3A-O11 |
| D3A-K01, D3A-K02 | Retirés, non réattribuables | P4T-A28 ; devenus D3A-O09 et D3A-O10 |

### 0.4 Homonymies

| Sigle | Sens ici | Autre sens |
|---|---|---|
| D3A-DC | Décisions de conception de D3-A | D1-DC : décisions complémentaires de D1. Préfixes complets différents, sans collision |
| D3A-M | Notes de recherche (archive) | Documents M2, M7 du projet |

---

## 1. Périmètre et objectifs

| Contenu | Nature | Statut |
|---|---|---|
| Objectif : aider une personne confrontée à un incident ou à un litige avec sa banque à sécuriser sa situation, comprendre ses droits et organiser ses recours | Élan | [Élan validé] bilan P4, D3-A |
| Situations : opérations non autorisées ; fraude à la carte ; fraude au virement ; opposition ; contestation ; délais, justificatifs, responsabilités et remboursement ; réclamations, médiation et recours ; blocage ou clôture d'un compte ; droit au compte | Élan | [Élan validé] |
| Principes : distinguer l'opposition sur carte d'un virement frauduleux déjà exécuté ; sécuriser ; préserver les éléments utiles ; identifier les canaux officiels ; ne jamais promettre catégoriquement un remboursement ; ne pas laisser un fraudeur ou un faux service de récupération reprendre contact | Élan | [Élan validé] |

**Hors périmètre :**
- le fonctionnement des moyens de paiement (D2) ;
- l'identification des acteurs et des médiateurs (D1) ;
- les techniques de fraude et les réflexes de prévention (base anti-arnaque commune) ;
- les difficultés de remboursement (D3-B) ;
- les litiges d'assurance (D7).

## 2. Organisation [Proposition] D3A-P01

| Section | Objet |
|---|---|
| D3A.1 | Sécuriser : opposition et blocage |
| D3A.2 | Contester une opération |
| D3A.3 | Remboursement et responsabilités |
| D3A.4 | Réclamation, médiation, recours |
| D3A.5 | Droit au compte et clôture du compte |
| D3A.6 | Aide immédiate, sécurité et données |
| D3A.7 | Premiers usages et expériences |

---

## 3. Contenus

### D3A.1 Sécuriser : opposition et blocage

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3A-E01 | Dès qu'il reçoit un instrument de paiement, l'utilisateur de services de paiement prend toute mesure raisonnable pour préserver la sécurité de ses données de sécurité personnalisées. Lorsqu'il a connaissance de la perte, du vol, du détournement ou de toute utilisation non autorisée de son instrument de paiement ou des données qui lui sont liées, il en informe sans tarder, aux fins de blocage de l'instrument, son prestataire de services de paiement ou l'entité désignée par celui-ci | Droit | CMF-L133-16, CMF-L133-17 (I) | [Établi] |
| D3A-E02 | L'opposition se fait au plus vite, auprès de la banque ou au 0 892 705 705 (ouvert 24 h/24). Elle est définitive | Admin. | SP-F31324, SP-F31241, SP-F2428, BDF-CARTE | [Établi] |
| D3A-E03 | Après la notification, la banque ne peut facturer que les coûts de remplacement directement imputables à l'instrument. Elle ne facture ni ses obligations d'information ni les mesures correctives | Droit | CMF-L133-26 (I et IV) | [Établi] |
| D3A-E04 | L'OSMP recommande des mécanismes de blocage gratuits, accessibles et utilisables à tout moment (recommandation n° 12) | Recomm. | OSMP-REC | [Établi] (contenu de la recommandation ; sans valeur obligatoire) |
| D3A-E31 | Moyens de notification : le prestataire met en place, **à titre gratuit**, les moyens appropriés permettant à l'utilisateur de procéder **à tout moment** à l'information prévue à L133-17, et lui fournit sur demande les moyens de prouver qu'il l'a effectuée ; après cette information, il empêche toute utilisation de l'instrument (L133-15 II et III). Le prestataire supporte le risque lié à l'envoi au payeur de l'instrument ou de ses données de sécurité (L133-15 IV) | Droit | D3A-S24 (CMF-L133-15) | [Établi] ; articulation avec le coût d'appel du numéro d'opposition (D3A-O01) et avec la mention « l'opposition peut être payante » (D3A-O09) non tranchée : J22 |
| D3A-E32 | Blocage de l'instrument **par la banque** : si la convention de compte de dépôt ou le contrat-cadre le prévoit, le prestataire peut se réserver le droit de bloquer l'instrument pour des raisons objectivement motivées tenant à sa sécurité, à la présomption d'une utilisation non autorisée ou frauduleuse, ou au risque sensiblement accru que le payeur ne puisse s'acquitter de son obligation de paiement. Il informe le payeur du blocage et de ses raisons, si possible avant et au plus tard immédiatement après, sauf raisons de sécurité objectivement motivées ou interdiction légale ; il débloque ou remplace l'instrument dès que les raisons du blocage n'existent plus, et met en place les moyens permettant de demander le déblocage à tout moment (D133-1) | Droit | D3A-S25 (CMF-D133-1) | [Établi] ; motif tiré du risque d'impayé : frontière avec D3-B (difficultés de remboursement), sans modification de D3-B ; blocage du **compte** (et non de l'instrument) : aucune source lue |
| D3A-O09 | Divergence : Service-Public indique que « l'opposition peut être payante » ; CMF-L133-26 IV limite les frais facturables après notification aux coûts de remplacement de l'instrument ; divergence non résolue (lien avec J22) ; L133-15 II impose en outre des moyens de notification gratuits (D3A-E31), sans que la divergence soit tranchée | Admin. ; Droit | SP-F31324, SP-F31241, SP-F2428, CMF-L133-26, D3A-S24 | [Ouvert] |
| D3A-O01 | Coût de l'appel au numéro surtaxé (0,34 €/min selon BDF-FAQ, 0,35 €/min selon BDF-CARTE) : divergence de montant. Distinction entre coût d'appel et frais bancaire : lecture non validée (J22) ; texte de L133-15 II (moyens de notification gratuits) versé au point (D3A-E31) | Admin. | BDF-FAQ, BDF-CARTE, D3A-S24 | [Ouvert] ; [En attente de revue juridique] J22 |
| D3A-O02 | Blocage par la banque après une fraude. Instrument (carte) : point traité par D3A-E32 (D133-1). Compte : aucune source lue. Point partiellement traité ; clôture à décider | — | D3A-S25 | [Ouvert] |

### D3A.2 Contester une opération

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3A-E05 | L'utilisateur signale sans tarder à son prestataire de services de paiement une opération non autorisée ou mal exécutée, et au plus tard dans les treize mois suivant la date de débit, sous peine de forclusion, à moins que le prestataire ne lui ait pas fourni ou n'ait pas mis à sa disposition les informations relatives à cette opération. Pour une personne physique agissant pour des besoins non professionnels, aucun délai distinct ne peut être convenu | Droit | CMF-L133-24 | [Établi] |
| D3A-E06 | Hors Espace économique européen : délai de 70 jours, porté jusqu'à 120 jours si le contrat le prévoit | Admin. | SP-F31324, SP-F20752, BDF-CARTE, BDF-SEPA, BDF-FAQ, OSMP-ACT | [Établi] (information administrative) ; base légale non lue : J20 |
| D3A-E07 | Prélèvement autorisé : contestation possible pendant 8 semaines et remboursement sous 10 jours ouvrables. Prélèvement non autorisé : 13 mois et remboursement au plus tard à la fin du jour ouvrable suivant | Admin. | SP-F20752 | [Établi] |
| D3A-E08 | La plainte est conseillée, mais ce n'est pas une condition du remboursement. Perceval permet de signaler en ligne une fraude sur internet lorsque la carte est toujours en possession du titulaire | Admin. | SP-F31324, BDF-FAQ, BDF-CARTE | [Établi] |
| D3A-P02 | Tableau des délais de contestation par moyen de paiement, distinguant opération autorisée ou non, et EEE ou hors EEE ; D2 y renvoie | Prop. | — | [Proposition] |

### D3A.3 Remboursement et responsabilités

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3A-E09 | En cas d'opération non autorisée signalée dans les conditions de L133-24, le prestataire du payeur rembourse le montant immédiatement après avoir pris connaissance de l'opération ou en avoir été informé, et au plus tard à la fin du premier jour ouvrable suivant, sauf s'il a de bonnes raisons de soupçonner une fraude de l'utilisateur et communique ces raisons par écrit à la Banque de France ; il rétablit le compte dans l'état où il se serait trouvé sans l'opération. En cas de manquement, les sommes dues produisent intérêt au taux légal majoré de 5 points, de 10 points au-delà de 7 jours de retard et de 15 points au-delà de 30 jours | Droit | CMF-L133-18 | [Établi] |
| D3A-E10 | Avant la notification, en cas d'opération consécutive à la perte ou au vol de l'instrument, le payeur supporte les pertes dans la limite de 50 € | Droit | CMF-L133-19 I | [Établi] |
| D3A-E11 | Le payeur ne supporte aucune perte, notamment : opération effectuée sans utilisation des données de sécurité personnalisées ; perte ou vol non détectable avant le paiement ; perte due à un agent de la banque ; détournement à son insu ou contrefaçon ; absence de moyen de notification ; absence d'authentification forte, sauf agissement frauduleux du payeur | Droit | CMF-L133-19 I, II, III, V | [Établi] |
| D3A-E12 | Le payeur supporte toutes les pertes en cas d'agissement frauduleux, ou s'il n'a pas satisfait intentionnellement ou par négligence grave à ses obligations | Droit | CMF-L133-19 IV | [Établi] ; critères : J21 |
| D3A-E13 | La banque doit prouver que l'opération a été authentifiée, dûment enregistrée et comptabilisée. L'utilisation de l'instrument, telle qu'enregistrée, ne suffit pas nécessairement à prouver que l'opération a été autorisée, ni que le payeur a commis une négligence grave | Droit | CMF-L133-23 | [Établi] |
| D3A-E14 | L'authentification forte ne vaut pas, à elle seule, autorisation de l'opération | Admin. | BDF-FAQ, BDF-SEPA, OSMP-CP | [Établi] ; cohérent avec D3A-E13 |
| D3A-E15 | Usurpation de numéro (faux conseiller qui fait valider l'opération) : selon la Banque de France, la banque doit rembourser, sauf négligence qualifiée qu'elle doit prouver | Admin. | BDF-FAQ (question 3), OSMP-CP | [Établi] (position de la Banque de France) ; portée : J21 |
| D3A-E16 | Recommandation n° 6 de l'OSMP (opération authentifiée de manière forte) : première analyse sous un jour ouvré, sur trois familles de paramètres (techniques, modalités d'authentification, contexte, y compris les procédés de manipulation rapportés). Trois issues : remboursement sans délai si l'opération n'est pas autorisée ou en cas de doute ; refus du remboursement immédiat en cas de fraude soupçonnée et signalée à la Banque de France ; refus motivé si la banque prouve l'autorisation, la négligence grave ou le manquement intentionnel | Recomm. | OSMP-REC | [Établi] (contenu) |
| D3A-E17 | Recommandations n° 1 à 4 de l'OSMP : investigations limitées à 30 jours ; reprise éventuelle des fonds dans les 30 jours avec information du client ; refus motivé accompagné des pièces justificatives ; sans authentification forte, une négligence, même grave, ne peut pas fonder un refus | Recomm. | OSMP-REC | [Établi] (contenu) |
| D3A-E18 | Ces recommandations sont des pratiques de référence ; elles ne se substituent ni à la réglementation ni à la jurisprudence. Les banques s'engagent à prendre en considération les recommandations n° 1 à 6 | Recomm. | OSMP-REC (§7) | [Établi] |
| D3A-E19 | Les escroqueries où l'opération a été autorisée par la victime (faux placements, crypto-actifs frauduleux) sont hors du champ de ces recommandations | Recomm. | OSMP-REC | [Établi] ; renvoi vers D1.3 et la base anti-arnaque |
| D3A-O10 | Divergence : la page OSMP « activités » mentionne des débits frauduleux plafonnés à 150 € ; CMF-L133-19 I fixe 50 € (D3A-E10). Le chiffre de 150 € correspond au plafond de L133-19 I dans sa version en vigueur du 01/11/2009 au 13/01/2018 (lue le 18/11/2026) ; la page OSMP n'est pas datée, et l'attribution du chiffre à cette version n'est pas affirmée par la page. D3-A retient 50 € (droit en vigueur). Point traité ; clôture à décider | Admin. ; Droit | OSMP-ACT, CMF-L133-19 | [Ouvert] |
| — | Ne jamais promettre catégoriquement un remboursement ; aucune décision automatisée de responsabilité ou de remboursement | Élan | Bilan P4, D3-A et §10 | [Élan validé] |
| D3A-O03 | Critères de la négligence grave : les textes ne les définissent pas. L'OSMP signalait en 2023 l'absence de jurisprudence de la Cour de cassation postérieure à la deuxième directive sur les services de paiement | Recomm. | OSMP-REC | [En attente de revue juridique] J21 |
| D3A-O04 | Manipulation de la victime et usurpation de numéro : portée de la position de la Banque de France et de la recommandation n° 6 | — | — | [En attente de revue juridique] J21 |
| D3A-O05 | Existence d'une version révisée des recommandations OSMP (un bilan était prévu sous 18 mois) | — | OSMP-REC | [Ouvert] |
| D3A-O06 | Franchise de 50 € en cas de fraude sans perte ni vol de la carte. Texte (L133-19, lu intégralement) : la limite de 50 € vise l'opération « consécutive à la perte ou au vol de l'instrument » (I) ; la responsabilité du payeur n'est pas engagée si l'opération a été effectuée en détournant, à son insu, l'instrument ou les données qui lui sont liées, ni en cas de contrefaçon si le payeur était en possession de l'instrument (II). Les sources administratives ne tranchent pas ; la qualification d'un cas concret et la négligence grave (IV) relèvent de J21. Point traité par D3A-E10 et D3A-E11 ; clôture à décider | Droit | CMF-L133-19 | [Ouvert] ; J21 pour la qualification |

### D3A.4 Réclamation, médiation, recours

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3A-E21 | Réclamation par écrit sur support durable ; accusé de réception sous 10 jours ouvrables ; réponse sous 2 mois, qui indique le médiateur compétent | Admin. | ACPR-RECLA, BDF-FAQ (question 8), ABE-RECLA | [Établi] |
| D3A-E22 | Services de paiement : le prestataire répond sur support papier ou, si convenu, sur un autre support durable, en abordant tous les points soulevés, dans les meilleurs délais et au plus tard dans les **quinze jours ouvrables** suivant la réception de la réclamation ; dans des situations exceptionnelles échappant à son contrôle, il envoie une réponse d'attente motivant le délai complémentaire et précisant la date de la réponse définitive, qui intervient au plus tard **trente-cinq jours ouvrables** après la réception. Il informe le consommateur d'au moins une instance de règlement extrajudiciaire compétente (L133-45) | Droit ; Admin. | D3A-S26 (CMF-L133-45), BDF-FAQ (question 8) | [Établi] ; champ : réclamations portant sur les dispositions énumérées par L133-45 (services de paiement) |
| D3A-E23 | Le médiateur peut être saisi sans délai après une réponse définitive, ou 2 mois après la réclamation écrite. Médiation gratuite, confidentielle et impartiale ; avis sous 90 jours. Le tribunal reste toujours possible. L'ACPR ne traite pas les litiges individuels | Admin. | ACPR-RECLA, BDF-FAQ | [Établi] |
| D3A-E33 | Médiation bancaire, cadre légal : tout consommateur a droit de recourir gratuitement à un médiateur, dans les conditions du chapitre II du titre Ier du livre VI du code de la consommation, pour un litige avec un établissement de crédit, une société de financement, un établissement de monnaie électronique, un établissement de paiement ou un prestataire de services d'information sur les comptes (CMF L316-1). Le médiateur ne peut examiner le litige lorsque : le consommateur ne justifie pas d'une réclamation écrite préalable auprès du professionnel ; la demande est manifestement infondée ou abusive ; le litige a été ou est examiné par un autre médiateur ou par un tribunal ; **la demande au médiateur est introduite plus d'un an après la réclamation écrite** ; le litige sort de sa compétence. Le rejet est notifié dans les trois semaines de la réception du dossier (C. consom. L612-2). Toute clause imposant une médiation préalable à la saisine du juge est interdite (L612-4) | Droit | D3A-S29 (CMF-L316-1), D3A-S30 (CONSO-L612) | [Établi] ; cohérent avec l'archive (D3A-M06 : procédure judiciaire faisant obstacle ; D3A-M07 : avis non contraignant) ; archive non modifiée (lacune ML2 traitée ici) |
| D3A-E24 | Les médiateurs bancaires sont désignés par un comité du CCSF | Admin. | CCSF-MED | [Établi] |
| D3A-E25 | Juridiction : tribunal de proximité ou judiciaire jusqu'à 10 000 €, tribunal judiciaire au-delà | Admin. | SP-F31324 | [Établi] |
| — | Réclamation écrite, délais, médiateur compétent, coordonnées, gratuité, préalables, portée de l'avis, médiateur de l'AMF, crypto-actifs | Archive | D3A-M01 à D3A-M09, D3A-M13 | [Renvoi] archive ; statuts propres à chaque note |
| — | Tentative amiable préalable pour certains litiges de moins de 5 000 € | Archive | D3A-M12 | [En attente de revue juridique] J19 |
| D3A-O07 | Médiation bancaire : délai maximal de saisine du médiateur après la réclamation (par exemple un an) non étayé pour la banque (archive, lacune ML2). **Lu le 18/11/2026 :** un an à compter de la réclamation écrite (CMF L316-1, qui renvoie au code de la consommation ; C. consom. L612-2, 4°) : point traité par D3A-E33 ; clôture à décider. Un délai d'un an est établi pour le médiateur de l'AMF (D3A-M09) et pour La Médiation de l'Assurance (D3A-M11). Sont en revanche établis par l'archive : l'avis du médiateur ne lie pas les parties (D3A-M07) ; une procédure judiciaire engagée fait obstacle à la saisine (D3A-M06) | — | Archive D3A-M06, M07, M09, M11 ; BDF-LITIGE-B (lecture partielle, non utilisée comme preuve) | [Ouvert] (délai maximal de saisine seulement) |
| D3A-O08 | Délai de saisine du médiateur plus court pour les paiements : aucun chiffre trouvé. Les textes lus (L316-1, L612-2, L133-45) ne prévoient pas de délai propre aux paiements ; le délai d'un an de L612-2 s'applique à la médiation de la consommation (D3A-E33). Point traité ; clôture à décider | — | ABE-RECLA, D3A-S26, D3A-S29, D3A-S30 | [Ouvert] |
| D3A-P03 | Modèle de réclamation écrite, sans promesse de résultat | Prop. | — | [Proposition] |

### D3A.5 Droit au compte et clôture du compte

| Réf. | Contenu | Nature | Sources | Statut |
|---|---|---|---|---|
| D3A-E26 | Droit au compte : un silence de 15 jours de la banque vaut refus. La Banque de France désigne une banque, puis l'ouverture intervient sous 3 jours ouvrés. Les services bancaires de base sont gratuits. La clôture n'est possible que pour des motifs listés. **Texte (L312-1) :** en cas de refus, l'établissement remet gratuitement et sans délai une attestation de refus et propose de transmettre lui-même la demande à la Banque de France ; la Banque de France désigne un établissement « dans un délai d'un jour ouvré à compter de la réception des pièces requises » ; l'établissement désigné ouvre le compte dans les trois jours ouvrés suivant la réception des pièces et offre les services bancaires de base ; il ne peut résilier la convention que pour l'un des six motifs du IV, par courrier motivé (sauf sécurité nationale ou ordre public), avec un préavis d'au moins deux mois (sauf opérations soupçonnées illégales ou informations inexactes) ; le droit au compte s'applique aux personnes inscrites aux fichiers de la Banque de France (V ; fichiers : D3-B) | Admin. ; Droit | SP-F2417, BDF-DAC, D3A-S27 (CMF-L312-1) | [Établi] ; règle du silence de 15 jours : sources administratives seulement |
| D3A-O11 | Délai de désignation divergent : « 1 jour ouvré » (Service-Public) ou « 24 heures » (Banque de France). Texte (L312-1 III) : « un jour ouvré à compter de la réception des pièces requises » ; Service-Public reprend le texte, la Banque de France emploie une formulation simplifiée. Point traité par D3A-E26 ; clôture à décider (registre §11, n° 1) | Admin. ; Droit | SP-F2417, BDF-DAC, D3A-S27 | [Ouvert] |
| D3A-E28 | Clôture par la banque : sans motivation, par écrit, avec un préavis d'au moins 2 mois. Clôture par le client : gratuite, avec un préavis de 30 jours au plus, par lettre. **Texte (L312-1-1 V, convention à durée indéterminée) :** le client peut résilier à tout moment, sauf préavis contractuel d'au plus trente jours ; au-delà de six mois, la résiliation est sans frais ; dans les autres cas, les frais sont proportionnés aux coûts induits ; l'établissement résilie moyennant un préavis d'au moins deux mois, sur support papier ou durable ; les frais de services de paiement ne sont dus qu'au prorata | Admin. ; Droit | BDF-FAQ (question 5), D3A-S28 (CMF-L312-1-1) | [Établi] ; **écart signalé, non tranché :** BDF-FAQ présente la clôture par le client comme « gratuite », alors que L312-1-1 V ne prévoit la gratuité qu'au-delà de six mois ; absence de motivation : BDF-FAQ seulement ; autres articles de la section non lus |
| — | Plafonds de frais de l'offre liée au droit au compte | — | — | [Renvoi] D2.3 |

### D3A.6 Aide immédiate, sécurité et données

| Réf. | Contenu | Statut |
|---|---|---|
| — | L'entrée « Je suis victime d'une fraude » est accessible sans cours ni questionnaire préalable. Ses informations essentielles sont fixes, rédigées, vérifiées et validées humainement, jamais générées à la volée | [Élan validé] bilan P4 §6.1 ; [Renvoi] AI1 |
| — | Données de litige et de fraude : protection renforcée, niveau de sensibilité 3 ; espace distinct de D3-B ; aucun archivage par défaut des documents transmis | [Élan validé] bilan P4 §8 ; [Renvoi] I1 (cloisonnement), L1, M2 |
| D3A-P07 | Classement éventuel de certaines données de litige ou de fraude au niveau de sensibilité 4 ; sans effet tant qu'il n'est pas arbitré ; ne crée aucune règle supplémentaire par rapport au cloisonnement de I1 | [Proposition] |
| D3A-P04 | Parcours « fraude » en quatre temps : opposition, contestation écrite, plainte facultative, recours | [Proposition] |

### D3A.7 Premiers usages et expériences (P4T-A07)

| Réf. | Contenu | Statut |
|---|---|---|
| D3A-P05 | Premiers usages prioritaires : chronologie des faits ; préparation d'une réclamation ; suivi des délais (13 mois, 2 mois, 90 jours) | [Proposition] |
| D3A-P06 | Expérience envisageable : l'entrée « Je suis victime d'une fraude » suivie, au choix de l'utilisateur, d'un dossier de litige. Limites : aucune promesse de remboursement ; aucune automatisation juridique ; aucun contact avec le fraudeur. Aucune architecture technique n'est décidée | [Proposition] |

---

## 4. Usages possibles dans Élan

| Usage | Mécanisme commun | Statut |
|---|---|---|
| Dossier de litige, chronologie, classement des documents, suivi des démarches et échéances | P4T-M04 (suivi), P4T-M05 (diagnostic et orientation) | Envisagés par le bilan ; aucun premier usage stabilisé (bilan §5) |
| Préparation d'une réclamation | P4T-M04 | [Proposition] D3A-P03 |
| Aide immédiate | P4T-M06 | [Élan validé] |

## 5. Frontières et renvois

| Frontière | Règle | Référence |
|---|---|---|
| D3-A / D1 | D1 identifie les acteurs et les médiateurs ; D3-A traite les médiateurs, réclamations, droit au compte et fraude subie | P4T-F06 |
| D3-A / D2 | Contestation et fraude dans D3-A ; fonctionnement des moyens de paiement dans D2 | P4T-F02, P4T-F03 |
| D3-A / D3-B | Deux documents et deux espaces de données distincts | P4T-F07 |
| D3-A / D7 | Litiges bancaires dans D3-A ; litiges d'assurance dans D7. Procédure commune de réclamation (ACPR) : cadre bancaire ici, spécificités d'assurance dans D7 | P4T-F08, P4T-X02 |
| D3-A / base anti-arnaque | Escroqueries où l'opération a été autorisée : prévention dans la base commune, vérification des acteurs dans D1 | P4T-F09 |

## 6. Maintenance

| Élément | Source | Vérifié le | Responsable / fréquence |
|---|---|---|---|
| Numéro d'opposition et son coût d'appel | SP, BdF | 13/11/2026 | [Ouvert] |
| Délais de réclamation et de médiation | ACPR-RECLA, BDF-FAQ | 13/11/2026 | [Ouvert] |
| Recommandations OSMP (révision éventuelle) | OSMP-REC | 13/11/2026 | [Ouvert] D3A-O05 |

## 7. Points juridiques et recherches restant à traiter

| Point | Statut |
|---|---|
| J19 : tentative amiable préalable sous 5 000 € (D3A-M12) | [En attente de revue juridique] |
| J20 : délais hors EEE (70 et 120 jours) : base légale et portée | [En attente de revue juridique] ; provisoire jusqu'à son éventuelle inscription formelle dans FR1 (P4T-A31) |
| J21 : critères de la négligence grave ; manipulation de la victime ; usurpation de numéro | [En attente de revue juridique] ; provisoire jusqu'à son éventuelle inscription formelle dans FR1 (P4T-A31) |
| J22 : coût d'appel au numéro d'opposition et règle de L133-26 IV | [En attente de revue juridique] ; provisoire jusqu'à son éventuelle inscription formelle dans FR1 (P4T-A31) |
| D3A-O01 à D3A-O11 | [Ouvert] ou [En attente de revue juridique] selon la ligne |
| Lacunes de l'archive (ML1 à ML5) | [Renvoi] archive §3 |

---

## Annexe A — Sources

Consultées le 13 novembre 2026, sauf mention contraire. Les sources de l'archive (S9, S13, S14, S27, S28, S42, S49, S50, consultées le 12 novembre 2026) restent décrites dans l'archive et ne sont pas renumérotées.

| N° | Clé | Organisme | Titre | Lien | Date affichée | Lecture / nature |
|---|---|---|---|---|---|---|
| D3A-S01 | CMF-L133-16 | Légifrance | Code monétaire et financier, art. L133-16 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430501 | En vigueur depuis le 13/01/2018 | Intégrale ; droit en vigueur |
| D3A-S02 | CMF-L133-17 | Légifrance | Code monétaire et financier, art. L133-17 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430495 | En vigueur depuis le 13/01/2018 | Intégrale ; droit en vigueur |
| D3A-S03 | CMF-L133-18 | Légifrance | Code monétaire et financier, art. L133-18 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046194314 | En vigueur depuis le 18/08/2022 | Intégrale ; droit en vigueur |
| D3A-S04 | CMF-L133-19 | Légifrance | Code monétaire et financier, art. L133-19 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430527 | En vigueur depuis le 13/01/2018 | Intégrale ; droit en vigueur ; relue le 18/11/2026, avec la version en vigueur du 01/11/2009 au 13/01/2018 (plafond de 150 euros ; D3A-O10) |
| D3A-S05 | CMF-L133-23 | Légifrance | Code monétaire et financier, art. L133-23 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430567 | En vigueur depuis le 13/01/2018 | Intégrale ; droit en vigueur |
| D3A-S06 | CMF-L133-24 | Légifrance | Code monétaire et financier, art. L133-24 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430562 | En vigueur depuis le 13/01/2018 | Intégrale ; droit en vigueur |
| D3A-S07 | CMF-L133-26 | Légifrance | Code monétaire et financier, art. L133-26 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046194306 | En vigueur depuis le 01/02/2023 | Intégrale ; droit en vigueur |
| D3A-S08 | OSMP-REC | Banque de France / OSMP | Recommandations de l'Observatoire : modalités de remboursement des opérations de paiement frauduleuses (PDF, 16 pages) | https://www.banque-france.fr/system/files/2023-10/Banque%20de%20France%20-%20OSMP%20-%20Recommandations_modalites_de_remboursement_des_operations_de_paiement_frauduleuses.pdf | Travaux d'octobre 2022 à février 2023 ; adoption annoncée le 16/05/2023 | Intégrale ; recommandation. Consultée sur autorisation (P4T-A16) ; copies temporaires supprimées |
| D3A-S09 | OSMP-CP | Banque de France | L'Observatoire de la sécurité des moyens de paiement émet des recommandations sur le remboursement des victimes de fraude | https://www.banque-france.fr/fr/espace-presse/communiques-de-presse/lobservatoire-de-la-securite-des-moyens-de-paiement-emet-des-recommandations-sur-le-remboursement | En ligne le 16/05/2023, mis à jour le 24/09/2026 | Intégrale |
| D3A-S10 | OSMP-ACT | Banque de France | Les activités de l'Observatoire de la sécurité des moyens de paiement (OSMP) | https://www.banque-france.fr/fr/strategie-monetaire/moyens-de-paiement/osmp/activites-osmp | Aucune | Intégrale |
| D3A-S11 | SP-F31324 | Service-Public | Fraude à la carte bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F31324 | Vérifié le 13/02/2026 | Intégrale |
| D3A-S12 | SP-F31241 | Service-Public | Perte de sa carte bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F31241 | Vérifié le 06/02/2025 | Intégrale |
| D3A-S13 | SP-F2428 | Service-Public | Vol de sa carte bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F2428 | Vérifié le 06/02/2025 | Intégrale |
| D3A-S14 | SP-F20752 | Service-Public | Prélèvement bancaire | https://www.service-public.gouv.fr/particuliers/vosdroits/F20752 | Vérifié le 09/09/2026 | Intégrale |
| D3A-S15 | SP-F2417 | Service-Public | Refus d'ouverture de compte bancaire : droit au compte | https://www.service-public.gouv.fr/particuliers/vosdroits/F2417 | Vérifié le 19/10/2026 | Intégrale |
| D3A-S16 | BDF-CARTE | Banque de France | La carte de paiement | https://www.banque-france.fr/fr/a-votre-service/particuliers/mieux-connaitre-moyens-paiement/carte-paiement | Aucune | Intégrale |
| D3A-S17 | BDF-SEPA | Banque de France | Foire aux questions – Les incidents et litiges relatifs aux virements SEPA | https://www.banque-france.fr/en/node/303363 (contenu en français) | Aucune | Intégrale |
| D3A-S18 | BDF-FAQ | Banque de France | Aide et FAQ, rubrique Banques et assurances (9 questions) | https://www.banque-france.fr/fr/aide-faq/Banques%20et%20assurances | Aucune | Intégrale (relue) |
| D3A-S19 | BDF-DAC | Banque de France | Droit au compte bancaire | https://www.banque-france.fr/fr/a-votre-service/particuliers/droit-au-compte-bancaire | Aucune | Intégrale |
| D3A-S20 | ACPR-RECLA | ACPR | Formuler une réclamation | https://acpr.banque-france.fr/fr/particuliers/vos-moyens-daction/formuler-une-reclamation | Aucune | Intégrale |
| D3A-S21 | ABE-RECLA | ABE Infoservice | Assurance, banque, placements financiers : que faire en cas de mécontentement ? | https://www.abe-infoservice.fr/fr/assurance-banque-placements-financiers-que-faire-en-cas-de-mecontentement | Aucune | Intégrale |
| D3A-S22 | CCSF-MED | Banque de France / CCSF | Médiation de la consommation : le rôle du CCSF | https://www.banque-france.fr/fr/comites-consultatifs/ccsf/connaitre-le-ccsf/mediation-du-ccsf | Aucune | Intégrale |
| D3A-S23 | BDF-LITIGE-B | Banque de France | Que faire en cas de litige avec sa banque ? | https://www.banque-france.fr/fr/a-votre-service/particuliers/connaitre-pratiques-bancaires-assurance/que-faire-en-cas-de-litige/que-faire-en-cas-de-litige-banque | Aucune | **Partielle** : jamais utilisée comme preuve (D3A-O07) |
| D3A-S24 | CMF-L133-15 | Légifrance | Code monétaire et financier, art. L133-15 | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035430505 | En vigueur depuis le 13/01/2018 | Intégrale ; lue le 18/11/2026 |
| D3A-S25 | CMF-D133-1 | Légifrance | Code monétaire et financier, art. D133-1 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000020932048/ | En vigueur depuis le 01/11/2009 | Intégrale ; lue le 18/11/2026 |
| D3A-S26 | CMF-L133-45 | Légifrance | Code monétaire et financier, art. L133-45 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000035407262/ | En vigueur depuis le 06/08/2018 | Intégrale ; lue le 18/11/2026 |
| D3A-S27 | CMF-L312-1 | Légifrance | Code monétaire et financier, art. L312-1 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000020861267/ | En vigueur depuis le 27/12/2021 | Intégrale ; lue le 18/11/2026 |
| D3A-S28 | CMF-L312-1-1 | Légifrance | Code monétaire et financier, art. L312-1-1 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000006170365/ | En vigueur depuis le 24/05/2019 | **Ciblée** : V (résiliation) lu le 18/11/2026 ; autres paragraphes non lus |
| D3A-S29 | CMF-L316-1 | Légifrance | Code monétaire et financier, art. L316-1 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072026/LEGISCTA000020861482/ | En vigueur depuis le 13/01/2018 | Intégrale ; lue le 18/11/2026 |
| D3A-S30 | CONSO-L612 | Légifrance | Code de la consommation, art. L612-1 à L612-5 | https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032223347/ | En vigueur depuis le 01/07/2016 | Intégrale ; lue le 18/11/2026 |

Article L133-44 du Code monétaire et financier (LEGIARTI000047293281, en vigueur depuis le 11/03/2023) : lu, dispositions transitoires non lues ; aucun fait n'en est tiré.

Fin du document — proposition non validée.
