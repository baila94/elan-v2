# P4 D1 — Acteurs, registres, protection des fonds et prévention de la fraude

- **Statut :**
  - **Statut métier :** **référence métier validée** pour la dimension D1 du pilier 4, par décision explicite de validation du 13 novembre 2026 (arbitrage A, sans identifiant), conformément à D1-DC8, selon lequel le document ne devenait pas automatiquement une référence validée. Les mentions [Proposition], [Ouvert] et [En attente de revue juridique] du document conservent leur portée : les propositions ne deviennent pas des décisions et les points ouverts restent ouverts.
  - **Réserves juridiques :** J14 à J19 restent **[En attente de revue juridique]** ; cette validation ne vaut validation d'aucune formulation juridique.
  - **Recherche :** les points non vérifiés et les lacunes documentaires restent ouverts (§6.2 ; annexes C et D).
  - **Maintenance :** le responsable et la fréquence de contrôle restent à définir (§5).
  - **Production :** le document n'est pas considéré comme prêt pour la production.
  - Le document ne modifie ni le bilan P4, qui conserve son rôle de synthèse provisoire (arbitrages transversaux 3 et 30), ni les autres documents de référence.
- **Fichier :** `docs/decisions/P4-D1-acteurs-registres-protection-fonds-fraude.md` ; nom fixé par l'arbitrage D1-AF20.
- **Base historique :** V3 de P4 D1 produite dans la session Claude Code le 11 novembre 2026 (identité avec une version partagée ailleurs non vérifiée) ; propositions V4 à V8.1 ; plan de corrections (troisième version) et annexe F corrigée, dont l'exécution a été autorisée le 13 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`), pilier 4 — Banque et finance, dimension D1.
- **Documents liés :** bilan P4 (`docs/reference/pilier-4-banque-finance-2026-11-04.md`) ; référentiel global (`docs/reference/referentiel-global-2026-11-04.md`, §4.5, §4.7, §9.1, §13.2) ; FR1 (`docs/decisions/FR1-frontieres-metier-piliers.md`) ; AI1 (`docs/decisions/AI1-aide-immediate.md`) ; M7 (`docs/decisions/M7-statistiques-utilisation.md`) ; L1 (`docs/decisions/L1-cycle-de-vie-des-donnees.md`) ; recherche sur les médiateurs (`docs/research/P4-D3-A-recherche-mediateurs.md`, archive de recherche existante, sans valeur de référence validée ; la référence métier P4 D3-A reste inexistante).

---

## 0. Statut, périmètre et gouvernance

### 0.1 Classifications

Aucun arbitrage ne vaut validation juridique ou technique d'une mise en œuvre. Un écart avec un autre document est signalé, jamais tranché silencieusement (référentiel §12.1).

| Classification | Étiquette | Sens |
|---|---|---|
| Décisions Élan | **[Élan validé]** | Règle du bilan P4 ou du référentiel |
| | **[Décidé + identifiant]** | Arbitrage validé par le fondateur |
| | **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| Faits externes (D1-A1, D1-AF5) | **[Établi]** | Source officielle lue intégralement, ou partie explicitement lue d'une source partielle (annexe E) |
| | **[À corriger]** | Formulation antérieure inexacte au regard d'une source lue (annexe B) |
| | **[Non étayé]** | Aucune source lue ne l'établit (annexe C) |
| Gouvernance et édition | **[Proposition]** | Formulation éditoriale non arbitrée |
| | **[Ouvert]** | Point non arbitré, en attente de preuve, ou lacune de recherche ; la mention « [Ouvert — à vérifier] » signale un point ouvert dont une vérification documentaire est attendue |
| | **[En attente de revue juridique]** | Sujet confié à la revue juridique ciblée (§6) ; aucune conclusion juridique |

**Notes de recherche.** Les notes `D1-N..` (annexe D) sont un **emplacement éditorial** pour des informations non destinées à l'utilisateur, et non un statut supplémentaire (D1-AF5). Chaque note conserve sa propre classification.

**Contenu principal.** Le contenu principal de D1 correspond aux seules sections D1.1 à D1.7. Le §6 et les annexes sont des espaces de gouvernance, de recherche et de traçabilité ; des montants peuvent y apparaître, accompagnés de leurs réserves.

### 0.2 Décisions appliquées

| Série | Objet | Statut |
|---|---|---|
| Q1 à Q6, option C | Arbitrages historiques de la V3 | [Décidé] |
| D1-C1 à D1-C8 | Arbitrages de cohérence consignés dans FR1 | [Décidé] ; [Renvoi] FR1 |
| D1-A1 à D1-A7 | Arbitrages de consolidation | [Décidé] |
| D1-DC1 à D1-DC9 | Décisions complémentaires | [Décidé] |
| D1-AF1 à D1-AF32 | Arbitrages de finalisation | [Décidé] |

Le registre complet figure à l'annexe F.

### 0.3 Identifiants internes au document

| Série | Usage | Remarque |
|---|---|---|
| E1 à E35 | Faits externes (annexe A) | Références internes à ce document. **E36 : retiré, non réattribuable** |
| K1 à K8 | Formulations à corriger (annexe B) | Internes |
| U1 à U15 | Informations non étayées (annexe C) | Internes |
| D1-N01 à D1-N17 | Notes de recherche de D1 (annexe D) | Remplacent les références de travail N1 à N12 |
| S1 à S50 | Sources (annexe E) | Internes |
| J14 à J19 | Points de revue juridique (§6) | Série transversale de FR1 §6.2 |
| D3A-M01 à D3A-M13 | Notes de recherche destinées à D3-A | Tenues dans le document de recherche, pas dans D1 |

### 0.4 Homonymies

| Sigle | Sens ici | Autre sens |
|---|---|---|
| D1-A, D1-DC, D1-AF | Décisions de P4 D1 | EP1 : A1 à A3 ; R15 : A1 à A10 |
| D1-C1 à D1-C8 | Arbitrages de cohérence de P4 D1 | Document C1 (catalogue des contenus) |
| D1-N.. | Notes de recherche de P4 D1 | Document N1 (notifications et alertes) |
| D3A-M.. | Notes de recherche destinées à P4 D3-A | Documents M2, M3, M7 |
| « V1 » à « V9 » | Libellés de travail d'arbitrages | Numéros de version du document |
| Garantie des cautions | Mécanisme FGDR au bénéfice des clients de professionnels réglementés | P4 D4 : se porter caution pour la dette d'un tiers |

---

## 1. Présentation du domaine

| Contenu | Statut |
|---|---|
| Aider à identifier les acteurs financiers, comprendre leur rôle et vérifier les autorisations correspondant à leurs activités ; la dimension couvre la protection des fonds et utilise la base anti-arnaque commune | [Élan validé] bilan P4, D1 |
| D1 porte le premier usage stabilisé du moteur de vérification d'acteurs | [Élan validé] référentiel §4.5, §13.1 |
| Élan n'est ni un service de certification, ni un détecteur autonome, ni un garant de la fiabilité d'un acteur | [Élan validé] bilan P4 §6.3, §10 ; [Décidé] Q4 |
| Finalité : « Savoir à qui l'on confie son argent : quel acteur, contrôlé par qui, autorisé pour quoi, protégé par quels mécanismes de garantie ou de sauvegarde et sous quelles conditions générales ; savoir vérifier soi-même, avec les limites de chaque vérification. » | [Proposition] |

## 2. Organisation du domaine

| Section | Objet | Décisions principales |
|---|---|---|
| D1.1 | Catégories d'acteurs | Q1, option C, D1-AF3, D1-AF22 |
| D1.2 | Autorités, organismes et registres | D1-A3, D1-A4, D1-AF2, D1-AF15 |
| D1.3 | Vérifier un acteur | Q2, Q5, D1-A7, D1-DC6, D1-AF10, D1-AF16, D1-AF22, D1-AF25 à D1-AF29, D1-AF31 |
| D1.4.a | Garanties institutionnelles | Q3, D1-C1, D1-C4, D1-C7, D1-A6, D1-DC2 à D1-DC4, D1-AF2, D1-AF14 |
| D1.4.b | Cantonnement | D1-C8, D1-DC5 |
| D1.5 | Base anti-arnaque commune | Q4, D1-C2, D1-A7, D1-DC6, D1-AF23 |
| D1.6 | Ce qu'Élan peut affirmer ou non | Q1, Q5, D1-AF3, D1-AF10 |
| D1.7 | Vérificateur d'acteur financier | D1-A5, Q2, D1-AF17, D1-AF18 |

Structure reprise de la V3, avec D1.4 scindé : [Proposition] structurelle, non arbitrée en tant que telle.

---

## 3. Contenus [Proposition]

Ce regroupement des sections D1.1 à D1.7 est une [Proposition] éditoriale ; il ne constitue pas une structure métier validée.

### D1.1 Catégories d'acteurs

| Contenu | Statut |
|---|---|
| Banques et établissements de crédit ; établissements de paiement et de monnaie électronique ; fintechs et néobanques ; courtiers et intermédiaires ; prestataires de services d'investissement ; sociétés de gestion et assureurs ; plateformes de financement participatif | [Élan validé] bilan P4, D1 |
| Pour une fintech ou une néobanque, distinguer la marque de l'entité juridique réelle et de son statut | [Élan validé] (« vérifier l'entité juridique réelle ») ; application [Proposition] |
| **Conseillers en investissements financiers :** adhésion à une association agréée par l'AMF et inscription à l'ORIAS, renouvelée chaque année (E6). Ces inscriptions ne garantissent ni la compétence, ni l'honnêteté, ni la qualité du conseil | [Décidé] Q1 ; [Établi] E6 ; [En attente de revue juridique] J15, J17 |
| **Prestataires de services sur crypto-actifs (PSCA) :** uniquement la vérification de leur statut et de leur autorisation réglementaires (D1.3). Depuis le 1er juillet 2026, seuls les prestataires autorisés conformément à MiCA, y compris dans le cadre du passeport européen, peuvent fournir des services sur crypto-actifs en France ; une entité éligible peut aussi les fournir après une notification au titre de l'article 60 (E10 ; détail en D1.3). Aucun conseil en investissement, aucune évaluation des crypto-actifs : renvoi vers P4 D6 | [Décidé] option C, D1-AF22, arbitrage C (sans identifiant) ; [Établi] E10 ; [En attente de revue juridique] J18 |
| **Financement participatif :** une offre d'investissement en titres exige le statut de prestataire de services de financement participatif ; vérification par la liste de l'AMF et le registre de l'ESMA ; ce prestataire n'a pas l'obligation de délivrer un conseil (E11) | [Établi] E11 |
| Retirés du contenu : « le conseiller n'est pas lui-même agréé par l'AMF » (U8) ; répartition PSFP / IFP (U9) | [Non étayé] ; [Décidé] D1-AF3 |

### D1.2 Autorités, organismes et registres

| Contenu | Statut |
|---|---|
| Organismes du bilan : ACPR, AMF, Banque de France, ORIAS, FGDR. D1 y ajoute le FGAP et les autres fonds signalés (D1.4.a), ainsi que l'identification des médiateurs | [Élan validé] ; [Décidé] D1-C4, D1-DC3, D1-A4 |
| **ACPR :** adossée à la Banque de France ; agrée et contrôle les banques, les assureurs et leurs intermédiaires ; protège la clientèle (E1). Référence de supervision, et non point d'entrée systématique pour une indemnisation | [Établi] E1 ; [Décidé] D1-AF2 |
| **AMF :** tient les listes blanches et les listes noires (E7, E8) | [Établi] ; missions générales [Non étayé] U5 |
| **Pôle commun ACPR-AMF :** existe et publie un rapport annuel (E9) | [Établi] ; rôle d'ABE Infoservice [Non étayé] U6 |
| **ORIAS :** association sous la tutelle du Trésor ; registre obligatoire des intermédiaires (E5) | [Établi] ; répartition des contrôles [Non étayé] U3 ; [En attente de revue juridique] J17 |
| **REGAFI :** registre unique de l'ACPR pour la banque et l'assurance (E2, E3) ; usage en D1.3 | [Établi] |
| **Banque de France :** rôle général ; l'ACPR lui est adossée (E1). Droit au compte : P4 D3-A. Fichiers d'incidents et surendettement : P4 D3-B | [Décidé] D1-A3, D1-AF6 ; détail des missions [Non étayé] U7 |
| **Médiateurs, identification seulement :** le médiateur de la consommation désigné par la banque (S27) ; le médiateur de l'AMF (S13) ; La Médiation de l'Assurance (S28). Leur traitement relève de P4 D3-A. La recherche correspondante (D3A-M01 à D3A-M13) est tenue dans l'archive de recherche `docs/research/P4-D3-A-recherche-mediateurs.md`, sans valeur de référence validée ; P4 D3-A existe depuis le 13 novembre 2026 comme proposition non validée | [Décidé] D1-A4, D1-DC7, D1-AF8, D1-AF15, D1-AF30 |

### D1.3 Vérifier un acteur

#### Principes

| Contenu | Statut |
|---|---|
| Consulter les registres adaptés à l'activité ; vérifier l'entité juridique réelle ; vérifier que l'activité proposée correspond à l'autorisation ; expliquer les limites de chaque vérification | [Élan validé] bilan P4, D1 |
| L'absence d'un acteur sur une liste noire ne prouve pas sa légitimité ; une société autorisée peut être usurpée | [Élan validé] ; [Établi] E8 |
| Vérification manuelle, guidée par Élan et effectuée par l'utilisateur ; aucune interrogation automatique des registres au lancement | [Décidé] Q2 |

#### Registres et listes

| Contenu | Statut |
|---|---|
| **REGAFI :** en ligne depuis le 1er juillet 2026, réunit regafi.fr et refassu.fr, mis à jour chaque jour (E2). On y vérifie la dénomination, l'adresse du siège et le périmètre d'agrément (E3) | [Établi] E2, E3 ; [À corriger] K2 ; critères de recherche [Non étayé] U1 |
| **ORIAS :** vérifier l'inscription dans la catégorie correspondant à l'activité proposée (E5) | [Établi] E5 ; [Décidé] Q1 |
| **Listes blanches de l'AMF :** trois listes (crypto-actifs, biens divers, financement participatif). Pour la liste du financement participatif, l'AMF indique qu'elle n'est pas mise à jour en temps réel et invite à consulter aussi le registre de l'ESMA (E7) ; cette indication n'est pas démontrée pour la liste des PSCA | [Établi] E7 ; [À corriger] K8 ; [Décidé] D1-AF31 |
| **Listes noires :** non exhaustives, avec des catégories « usurpation » (E8) | [Établi] E8 |

#### Prestataires de services sur crypto-actifs

| Contenu | Statut |
|---|---|
| **Cadre :** selon l'AMF (S12), seuls les prestataires autorisés conformément à MiCA, y compris dans le cadre du passeport européen, peuvent fournir des services sur crypto-actifs en France ; une entité éligible peut aussi les fournir après une notification au titre de l'article 60 auprès de l'autorité nationale compétente. Les catégories d'acteurs et les services couverts se vérifient à partir des informations officielles disponibles ; ils ne se déduisent pas de la seule catégorie d'un acteur. Aucune procédure de notification n'est décrite | [Établi] E10 ; [Décidé] arbitrage C (sans identifiant) ; [Non étayé] U15 ; procédure [Ouvert] (D1-AF29) |
| **Point d'entrée :** la liste blanche de l'AMF | [Décidé] D1-AF22, D1-AF25 |
| **Champs d'une fiche de la liste blanche et sens de la date affichée :** non décrits. Aucune source officielle consultée ne définit ces champs, ni ne distingue date d'autorisation, début d'activité en France et date de notification. Exemples ponctuels consultés : S33, S34, S47, S48. Aucune généralisation n'en est tirée, ni sur les champs, ni sur les dates | [Ouvert] E29 |
| **Source institutionnelle complémentaire :** « Le registre MiCA de l'ESMA est publié en fichiers CSV, chaque semaine ; les données sont transmises par les autorités nationales, avec un délai d'affichage possible ; il comporte les champs prévus par l'article 109 (S36, S38). » Ce n'est pas une étape obligatoire pour l'utilisateur. Le contenu réel des fichiers n'a pas été consulté | [Décidé] D1-AF25 ; [Établi] E30 ; contenu [Non étayé] U13 ; intégration annoncée : D1-N11 |
| **Mention « Licensed MiCA » :** « Sur la fiche consultée, la liste blanche de l'AMF affiche la mention “Licensed MICA”. Le commentaire de cette fiche indique que l'inscription relève de la procédure de notification prévue à l'article 60 de MiCA (S47). » Cette mention ne distingue pas, à elle seule, une autorisation classique d'une notification au titre de l'article 60 | [Établi] E33 (fiche unique, sans généralisation) ; réserve [Décidée] (sans identifiant) |
| **Entités notifiées au titre de l'article 60 :** « Selon l'AMF et l'ACPR (S45, S46), les catégories d'entités susceptibles de fournir des services sur crypto-actifs par notification au titre de l'article 60 de MiCA comprennent les établissements de crédit, dépositaires centraux de titres, entreprises d'investissement, établissements de monnaie électronique, sociétés de gestion de FIA ou d'OPCVM et opérateurs de marché. » **Aucune procédure de vérification n'est proposée à l'utilisateur.** Une absence dans un registre ne permet pas de conclure à une absence d'autorisation | [Établi] E32 ; [Décidé] D1-AF29 ; articulation AMF-ACPR et modalités [Non étayé] ; services selon la catégorie [Non étayé] U15 ; modalités : D1-N14 |
| **Contrôles, en deux étapes :** 1) vérifier que l'acteur apparaît sur la liste officielle pertinente ; 2) retrouver ses coordonnées indépendamment, auprès d'une source officielle fiable, avant de le contacter. Les coordonnées présentes sur une fiche ne suffisent pas à prouver l'identité de l'interlocuteur. Les champs et les dates de la liste ne sont pas interprétés (E29) | [Décidé] D1-A7, D1-AF22, arbitrage H (sans identifiant) ; E29 [Ouvert] |
| **Limites :** une inscription peut confirmer certains éléments relatifs au statut ou à l'autorisation d'un acteur, dans les limites des informations effectivement vérifiées auprès de la source officielle. Elle ne permet pas de déduire automatiquement l'ensemble des services autorisés. Elle ne garantit ni la fiabilité générale de l'acteur, ni l'absence de fraude, ni la valeur des crypto-actifs. « L'AMF indique, sur sa page des listes blanches, que les enregistrements et agréments ne constituent pas une incitation à investir (S11, version anglaise). » Les crypto-actifs ne sont pas couverts par la garantie des dépôts (E16). Aucun conseil en investissement | [Décidé] D1-AF10, D1-AF22, arbitrage A (sans identifiant) ; [Établi] E34, E16 |
| **Dérivés sur crypto-actifs :** « Selon ABE Infoservice (S42, S43), pour les investissements dans des produits dérivés sur crypto-actifs, il convient de vérifier dans REGAFI que la plateforme est autorisée en tant que prestataire de services d'investissement. » D1 vérifie l'acteur ; les produits et leurs risques relèvent de P4 D6 | [Décidé] D1-AF26 ; [Établi] E31 ; contenu des fiches REGAFI et couverture des prestataires sous passeport [Non étayé] |

#### Usurpation, passeport, acteur introuvable

| Contenu | Statut |
|---|---|
| **Usurpation, constat :** « Selon ABE Infoservice, dans le contexte des crypto-actifs, des escrocs usurpent l'identité de professionnels autorisés (S42, S43). » | [Établi] E35 |
| **Usurpation, précaution :** « Un renvoi vers un site officiel ne suffit pas, à lui seul, à établir que l'interlocuteur est bien le professionnel qui y figure. » Recouper l'identité déclarée avec le registre, puis retrouver les coordonnées de l'acteur indépendamment, auprès d'une source officielle fiable, avant de le contacter, par exemple en rappelant son siège depuis un numéro sûr (E14) | [Décidé] D1-A7, D1-DC6, arbitrage H (sans identifiant) ; [Établi] E14 ; « numéro d'agrément exact » [Non étayé] U2 |
| **Faux conseiller bancaire :** D1.3 couvre uniquement la vérification de l'identité de l'interlocuteur ; le scénario, les signaux et les réflexes relèvent de la base anti-arnaque commune (D1.5) | [Décidé] D1-DC6, D1-AF23 |
| **Acteurs exerçant en France sous passeport :** registre de l'autorité du pays d'origine (E4), puis registres européens, avec leurs limites. Le registre européen des établissements de crédit n'a pas de valeur juridique, les registres nationaux pouvant être plus détaillés ou plus à jour (E12). Le registre européen des établissements de paiement reflète les registres nationaux (E13) | [Décidé] Q5 ; [Établi] E4, E12, E13 ; [À corriger] K4 ; « EUCLID » [Non étayé] U10 ; [En attente de revue juridique] J18 |
| **Acteur introuvable :** vérifier les informations saisies ; vérifier la catégorie d'acteur et le registre approprié ; contacter l'organisme compétent en retrouvant ses coordonnées auprès d'une source officielle fiable ; ne pas conclure automatiquement à une fraude | [Décidé] D1-AF16, arbitrage B8 (sans identifiant) ; [Élan validé] référentiel §4.5 |
| **Prudence en l'absence de confirmation :** tant que l'autorisation d'un acteur n'est pas confirmée auprès d'une source officielle fiable, l'utilisateur ne doit pas lui confier de fonds. Une absence dans un registre n'est pas assimilée automatiquement à une fraude | [Décidé] arbitrage P7 de l'audit de fond (sans identifiant) ; [Renvoi] D1-AF16, non modifié |
| **Recours :** renvoi vers P4 D3-A (proposition non validée). Pour une fraude subie, l'entrée d'aide immédiate « Je suis victime d'une fraude » est prévue | [Décidé] D1-A4, D1-AF30 (renvoi vers P4 D3-A) ; renvoi vers AI1 §1 : [Proposition] |

### D1.4.a Garanties institutionnelles et conditions d'éligibilité

| Contenu | Statut |
|---|---|
| **Aucun montant de garantie n'est affiché au lancement.** L'utilisateur est orienté directement vers l'organisme compétent pour chaque mécanisme. La mention du bilan « généralement jusqu'à 100 000 € » reste dans le bilan et n'est pas affichée | [Décidé] Q3, D1-C1, D1-AF2 ; [Renvoi] FR1 §4.2 |
| Conditions d'éligibilité : présentation générale des fonds ou produits susceptibles d'être couverts, des établissements concernés et des principales limites et exclusions, avec orientation vers l'organisme officiel | [Décidé] D1-C7 ; [Renvoi] FR1 §3 |
| **Dépôts (FGDR) :** garantie par client et par établissement. Exclusions notables : assurance-vie, plans d'épargne retraite, crypto-actifs, monnaie électronique émise par un établissement de paiement ou de monnaie électronique (E16). Orientation : FGDR | [Élan validé] ; [Établi] E16 ; [En attente de revue juridique] J16 |
| **Livrets réglementés :** garantie de l'État mise en œuvre par le FGDR, distincte de la garantie des dépôts, avec un plafond qui lui est propre (E17). Aucun cumul automatique ni aucune équivalence n'est affirmé. Orientation : FGDR | [Élan validé] ; [Établi] E17 |
| **Titres (FGDR) :** la garantie joue si l'établissement ne peut plus restituer les titres ; elle ne couvre pas les variations de valeur de marché (E18). Orientation : FGDR | [Élan validé] ; [Établi] E18 ; [En attente de revue juridique] J16 |
| **Garantie des sociétés de gestion :** « Ce mécanisme porte sur la restitution éventuelle d'actifs manquants, lorsqu'une société de gestion n'est plus en mesure de restituer des instruments financiers ou des espèces ; il ne constitue pas une garantie contre les fluctuations du marché. Pour connaître ses conditions exactes, consultez le FGDR. » Aucune exclusion juridique générale n'est affirmée (E19 ; terminologie de la source : annexe A, sous E19) | [Décidé] D1-DC4, D1-AF14 ; [Établi] E19 ; exclusion explicite [Non étayé] U14 ; [En attente de revue juridique] J16 |
| **Garantie des cautions professionnelles :** protège les **clients** de professionnels tenus par la loi de leur fournir une caution délivrée par un établissement, lorsque cet établissement fait défaut (E20). Ne concerne pas la personne qui se porte caution pour la dette d'un tiers : voir P4 D4. Orientation : FGDR | [Décidé] D1-A6, D1-DC2 ; [Établi] E20 ; [À corriger] K6 ; [En attente de revue juridique] J16 |
| **Assurances de personnes, FGAP :** garantit les assurés des sociétés d'assurance de personnes agréées en France ; actionné par l'ACPR (E23). Hors de son champ : assureurs de l'Union ou de l'Espace économique européen exerçant en France en libre établissement ou en libre prestation de services ; mutuelles et institutions de prévoyance (E24). Orientation : FGAP | [Décidé] D1-C4, D1-DC3, D1-AF2 ; [Établi] E23, E24 ; [À corriger] K7 ; [En attente de revue juridique] J16 |
| **Autres fonds**, signalés brièvement lorsque c'est pertinent, sans catalogue : FGAO, FGAPDS, FPGIP (E25 à E27). L'ACPR reste la référence de supervision | [Décidé] D1-DC3, D1-AF2 ; [Établi] E25 à E27 |
| Le fonds des mutuelles n'est pas présenté (E28, non affiché) | [Établi] E28 |
| Aucune garantie n'est présentée comme une protection contre la perte de valeur d'un placement ; l'absence de protection n'est affirmée explicitement que lorsqu'une source l'établit (titres, E18) | [Élan validé] ; [Décidé] D1-AF4, D1-AF14 |

### D1.4.b Cantonnement

| Contenu | Statut |
|---|---|
| Les établissements de paiement et de monnaie électronique ne sont pas couverts par la garantie des dépôts et n'adhèrent pas au FGDR ; les fonds de leurs clients sont protégés par une assurance spéciale ou par un compte de cantonnement ouvert dans une banque ; en cas de faillite de l'établissement, le FGDR n'intervient pas (E21) | [Élan validé] ; [Établi] E21 ; [À corriger] K5 ; [En attente de revue juridique] J16 |
| Le cantonnement est une mesure réglementaire de protection des fonds ; **il n'est jamais présenté comme une garantie de remboursement équivalente au FGDR ou au FGAP** | [Décidé] D1-C8 ; [Renvoi] FR1 §2, §3 ; [En attente de revue juridique] J16 |
| Le fonctionnement des services de paiement relève de P4 D2, qui renvoie vers D1 pour ces mécanismes | [Décidé] D1-C8 |
| Le cas de la banque détenant le compte de cantonnement et faisant faillite reste en note de recherche (E22, D1-N07) | [Décidé] D1-DC5 |
| **Fonctionnement précis du cantonnement :** recherche distincte, non couverte par J16 (§6.2) | [Ouvert] |

### D1.5 Base anti-arnaque commune

| Contenu | Statut |
|---|---|
| Les techniques de fraude, les signaux d'alerte et les réflexes de protection relèvent de la base anti-arnaque commune ; D1 ne crée pas de seconde base ; aucune alerte automatique | [Décidé] Q4, D1-C2, D1-A7 ; [Renvoi] FR1 §4.2, arbitrage transversal 25 |
| **Gouvernance de la base :** responsabilité éditoriale transversale au niveau commun d'Élan ; les piliers contribuent selon leurs situations métier ; gouvernance et validation communes | [Décidé] D1-AF23 |
| La vérification de l'identité et du statut d'un acteur (D1.3) ne se confond pas avec les mécanismes de la base commune | [Décidé] D1-A7, D1-DC6 |
| Réflexes du bilan à porter par la base : ce qu'une banque ne demande jamais (codes de validation, mots de passe, identifiants, prétendu virement « de sécurité ») ; reconnaître les demandes suspectes ; repérer influenceurs et contenus sponsorisés ; distinguer information, publicité, partenariat et recommandation réglementée | [Élan validé] bilan P4, D1 ; [Décidé] D1-C2 |
| Contribution de D1 à la base : une banque ne demande jamais de codes ni de validation d'opération ; contacter sa banque par ses canaux habituels (E15). La technique de redirection vers des sites officiels est transmise à la base (D1-N17) | [Établi] E15 ; dépendance (§4.2) |
| Non transmis comme faits : signalement des SMS au 33 700 (U11) ; protection des lignes fixes (U12) | [Non étayé] |

### D1.6 Ce qu'Élan peut affirmer ou non

| Contenu | Statut |
|---|---|
| Le vérificateur guide vers les registres pertinents et présente un résultat prudent, sans verdict définitif de confiance | [Élan validé] bilan P4, D1 |
| Montrer les sources, leurs dates, leur portée et leurs limites ; une absence de résultat n'est pas une preuve automatique de fraude | [Élan validé] référentiel §4.5 |
| **Principe général de prudence et limites d'une vérification positive :** chaque vérification positive est présentée avec ses limites. Une inscription peut confirmer certains éléments relatifs au statut ou à l'autorisation d'un acteur, dans les limites des informations effectivement vérifiées auprès de la source officielle. Elle ne garantit ni l'absence de fraude, ni la qualité des services, ni la sécurité de toutes les opérations | [Décidé] D1-AF10 (décision historique conservée ; formulation harmonisée par l'arbitrage N, sans identifiant), Q1 ; [En attente de revue juridique] J17 |
| **Formulation opérationnelle affichée par le vérificateur :** « Une inscription peut confirmer certains éléments relatifs au statut ou à l'autorisation d'un acteur, dans les limites des informations effectivement vérifiées auprès de la source officielle. » | [Décidé] arbitrage P (sans identifiant) |
| **Résultats négatifs ou incertains du vérificateur :** aucune procédure opérationnelle n'est actuellement validée ; leur traitement reste à définir | [Ouvert] (arbitrage P8 de l'audit de fond, sans identifiant) |
| Seules les informations étayées par une source officielle lue intégralement sont conservées dans le contenu destiné à l'utilisateur | [Décidé] D1-A1, D1-AF3 |
| Phrase type proposée : « Vous avez trouvé cet acteur dans [registre]. Cela confirme : … Cela ne garantit pas : … » | [Proposition] ; [En attente de revue juridique] J14 |

### D1.7 Vérificateur d'acteur financier

| Contenu | Statut |
|---|---|
| Nom : **« Vérificateur d'acteur financier »** | [Décidé] D1-AF18 ; [Élan validé] bilan P4, référentiel §4.5 |
| Rattachement exclusif au moteur de vérification d'acteurs, dont il est le premier usage stabilisé. **Ce n'est pas un parcours guidé** ; il ne vaut pas premier usage du moteur de parcours guidés (référentiel §4.7, §13.2) | [Décidé] D1-A5 |
| Élan indique le registre adapté au type d'acteur (D1.1, D1.3), explique comment y chercher et comment lire le résultat ; c'est l'utilisateur qui consulte le registre ; aucune interrogation automatique au lancement | [Décidé] Q2 ; détail [Proposition] |
| **Conservation des recherches :** décision reportée ; aucune promesse, ni d'absence de conservation, ni d'historique temporaire, avant la définition de l'architecture technique et des garanties de confidentialité ; les cadres existants restent applicables | [Décidé] D1-AF17 ; [Ouvert] ; renvoi vers M7 et L1 : [Proposition] |
| REGAFI propose des interfaces automatiques (E2) ; sans objet au lancement ; toute utilisation relève du point 6.2 (§6.1) | [Établi] E2 ; [Décidé] Q2, D1-AF1, D1-AF21 |

---

## 4. Frontières métier et dépendances

### 4.1 Frontières

| Frontière | Règle | Décisions |
|---|---|---|
| D1 / D2 | « P4 D1 : cantonnement des fonds des clients, au titre des mesures réglementaires de sauvegarde des fonds ; P4 D2 : fonctionnement des services de paiement. P4 D2 renvoie vers P4 D1 pour la compréhension des mécanismes de sauvegarde des fonds » (FR1). D1-AF6 précise pour D2 : « et conséquences opérationnelles » | D1-C8, D1-AF6 |
| D1 / D3-A | D1 : rôle général de la Banque de France et identification des médiateurs. P4 D3-A : droit au compte, réclamations, traitement des médiateurs, fraude subie. **Le document D3-A existe depuis le 13 novembre 2026 comme proposition non validée** | D1-A3, D1-A4, D1-AF6, D1-AF8 |
| D1 / D3-B | P4 D3-B traite les difficultés de remboursement des crédits et les relations avec les créanciers financiers, les fichiers d'incidents bancaires et le surendettement. P1 traite les impayés personnels, leur priorisation et leurs conséquences budgétaires (loyer, énergie, factures…), ainsi que la capacité budgétaire personnelle | D1-A3, D1-AF6, arbitrage B29 (sans identifiant) ; [Renvoi] FR1, arbitrages 2, 14, 23 et 31 |
| D1 / D4 | D1 : garantie FGDR des cautions professionnelles réglementées. P4 D4 : engagement personnel de caution pour la dette d'un tiers et ses conséquences. Jamais présentés comme équivalents | D1-DC2, D1-AF6 |
| D1 / D5 | Protection institutionnelle des fonds dans D1 ; caractéristiques des supports d'épargne dans D5, qui renvoie vers D1 | D1-C5, D1-C6 |
| D1 / D6 | Crypto-actifs, dérivés, placements, immobilier et leurs risques relèvent de P4 D6 ; D1 vérifie l'acteur, y compris un prestataire de services d'investissement pour les dérivés ; D6 utilise le vérificateur | Option C, D1-AF22, D1-AF26 ; [Élan validé] |
| D1 / D7 | Organismes de garantie dans D1 ; contrats d'assurance dans D7 | D1-C4 |
| D1.3 / base commune | Identité, statut et usurpation dans D1.3 ; techniques, signaux et réflexes dans la base commune | Q4, D1-C2, D1-A7, D1-DC6, D1-AF23 |

### 4.2 Dépendances non intégrées

| Élément | Destination prévue | État de la destination | Référence |
|---|---|---|---|
| Effet de levier, CFD, options binaires (S43) ; risque des produits mentionné en S11 | P4 D6 | **Proposition non validée** depuis le 13 novembre 2026 ; D1-N15 et D1-N16 y sont reprises par renvoi (D6.12) | D1-N15, D1-N16 |
| Technique de redirection vers des sites officiels | Base anti-arnaque commune (D1-AF23) | **Inexistante** en tant que document | D1-N17 |
| Recherche sur les médiateurs (D3A-M01 à D3A-M13) | `docs/research/P4-D3-A-recherche-mediateurs.md`, puis P4 D3-A | Archive de recherche : existe depuis le 13 novembre 2026, sans valeur de référence validée ; référence métier P4 D3-A : **proposition non validée** depuis le 13 novembre 2026 | D1-AF15, D1-AF30 |

---

## 5. Maintenance

| Contenu | Statut |
|---|---|
| Un responsable est nommé dès le lancement ; vérifications datées ; en cas de retard, les éléments concernés sont retirés jusqu'à vérification | [Décidé] Q6 ; [Élan validé] bilan P4 §9 |
| Un responsable et une fréquence de contrôle adaptés à **chaque source** sont définis pendant la conception ; aucun nom ni aucune fréquence uniforme n'est fixé à ce stade (annexe E, colonne « Responsable / fréquence ») | [Décidé] D1-AF12, D1-AF24 ; [Ouvert] |
| Toute information obsolète est signalée et traitée avant réutilisation | [Décidé] D1-AF24 |

---

## 6. Points juridiques et recherches restant à traiter

### 6.1 Points juridiques

Sujets à examiner ; aucune conclusion juridique n'est validée.

| Point | Intitulé | Traitement | Statut |
|---|---|---|---|
| 6.1 | Responsabilité liée à la présentation d'un résultat de vérification | **J14** | [En attente de revue juridique] D1-A2, D1-DC9 |
| 6.2 | Réutilisation des données des registres | Pas de revue juridique spécifique pour un simple renvoi vers un registre officiel et sa description ; **revue juridique obligatoire avant toute fonctionnalité qui récupère ou exploite les données de ces registres** | [Décidé] D1-AF1 |
| 6.3 | Affichage de noms d'acteurs issus des listes noires | Sans objet si aucun nom n'est affiché ; à reconsidérer si des exemples nommés sont envisagés | État de la V3 |
| 6.4 | Frontière entre information pédagogique et conseil réglementé | **J15** | [En attente de revue juridique] |
| 6.5 | Exactitude et mise à jour des montants de garantie | Sans objet au lancement (Q3) ; remplacé par 6.7 | [Décidé] Q3 |
| 6.6 | Conditions d'utilisation des interfaces de REGAFI | Sans objet au lancement ; toute utilisation future relève du point 6.2 | [Décidé] Q2, D1-AF21 |
| 6.7 | Exactitude de la description des mécanismes de garantie (FGDR, FGAP, cantonnement, cautions), sans montants, y compris la garantie des sociétés de gestion | **J16** : descriptions du FGDR, du FGAP, du cantonnement, des cautions professionnelles et de la garantie des sociétés de gestion. Hors périmètre : garantie de l'État sur les livrets réglementés, FGAO, FGAPDS, FPGIP, et fonctionnement opérationnel du cantonnement | [En attente de revue juridique] D1-AF14, arbitrage B (sans identifiant) |
| 6.8 | Formulation de la non-garantie liée aux inscriptions à l'ORIAS et à l'adhésion à une association | **J17** | [En attente de revue juridique] |
| 6.9 | Statut des PSCA après la période transitoire MiCA, et acteurs européens sous passeport | **J18** | [En attente de revue juridique] D1-AF22 |
| D3A-M12 | Tentative amiable préalable à une action en justice pour certains litiges de moins de 5 000 € ; intitulé juridique exact à préciser | **J19** | [En attente de revue juridique] D1-AF8, D1-AF32 |

### 6.2 Recherches restant à traiter

| Sujet | Statut |
|---|---|
| Définition officielle des champs de la liste blanche de l'AMF et sens de la date affichée (E29) | [Ouvert] |
| Procédure de vérification des entités notifiées au titre de l'article 60 ; articulation entre l'AMF et l'ACPR ; services selon la catégorie (U15) | [Ouvert] ; [Non étayé] |
| Contenu réel du registre de l'ESMA (U13) ; réalisation de l'intégration annoncée (D1-N11) | [Non étayé] ; [Ouvert] |
| Exhaustivité de la liste blanche de l'AMF (page 1 sur 20 lue ; version française en erreur 404) | [Ouvert] |
| Contenu des fiches REGAFI pour les prestataires de services d'investissement ; présence dans REGAFI des prestataires sous passeport | [Non étayé] |
| Fonctionnement précis du cantonnement (recherche distincte de J16) | [Ouvert] |
| Registres pertinents pour les PSCA au-delà de la liste de l'AMF | [Ouvert] |
| D1-N05 : divergence entre l'information du FGDR (90 %, 3 000 €) et une référence réglementaire de 2014 ; conformité actuelle non vérifiée ; référence de 2014 non consultée | [Ouvert — à vérifier] |
| D1-N06 : périmètre exact des rentes du FGAP et exclusions éventuelles | [Ouvert] (J16) |
| Terminologie de la garantie des sociétés de gestion : équivalence juridique entre l'intitulé retenu par Élan et la terminologie du FGDR non établie (annexe A, sous E19) | [Ouvert] |
| Missions de la Banque de France (U7) ; répartition des contrôles entre l'ORIAS, l'ACPR et l'AMF (U3) ; périmètre des IFP (U9) ; 33 700 et lignes fixes (U11, U12) | [Non étayé] |
| Suite de D3A-M13 (anciens PSAN, services couverts, moment des faits) ; lacunes sur les médiateurs | [Ouvert] (document de recherche) |
| Pièces jointes des sources non ouvertes (annexe E) ; pages refusées (economie.gouv.fr ×4, ACPR ×1) ; pages tronquées de la Banque de France ; dates absentes de la plupart des pages | Limite documentaire |

---

## Annexe A — Faits externes

Toutes les sources ont été consultées le 12 novembre 2026 (détail à l'annexe E).

| N° | Fait | Sources | Statut |
|---|---|---|---|
| E1 | L'ACPR, adossée à la Banque de France, agrée et contrôle les banques, les assureurs et leurs intermédiaires, et protège la clientèle | S1 | [Établi] |
| E2 | REGAFI est en ligne depuis le 01/07/2026 ; il réunit regafi.fr et refassu.fr, est mis à jour chaque jour et propose des interfaces automatiques | S2, S4 | [Établi] |
| E3 | Dans REGAFI, on vérifie la dénomination, l'adresse du siège et le périmètre d'agrément | S4 | [Établi] |
| E4 | Pour un établissement d'un autre pays européen, il est conseillé de consulter le registre de l'autorité du pays d'origine | S4 | [Établi] |
| E5 | L'ORIAS est une association sous la tutelle de la Direction (générale) du Trésor ; l'immatriculation au registre est obligatoire ; le registre permet de vérifier qu'un intermédiaire est autorisé à distribuer des produits d'assurance, bancaires ou financiers ; ses catégories comprennent notamment l'assurance, les IOBSP, les conseillers en investissements financiers, les agents liés de prestataires de services d'investissement, les conseillers en investissements participatifs et les intermédiaires en financement participatif | S15 | [Établi] (légère divergence de libellé sur la tutelle dans la page) |
| E6 | Le conseiller en investissements financiers adhère à une association agréée par l'AMF et s'inscrit à l'ORIAS ; l'inscription est renouvelée chaque année | S6 | [Établi] |
| E7 | L'AMF publie trois listes blanches (crypto-actifs, biens divers, financement participatif). Pour la liste du financement participatif, l'AMF indique qu'elle n'est pas mise à jour en temps réel et invite à consulter aussi le registre de l'ESMA | S11 | [Établi] (corrigé par D1-AF31 ; voir K8) |
| E8 | Les listes noires ne sont pas exhaustives : l'absence d'un nom ne signifie pas qu'un acteur est autorisé ; elles comprennent des catégories « usurpation » | S5, S10 | [Établi] |
| E9 | Un pôle commun ACPR-AMF existe et publie un rapport annuel | S32 | [Établi] |
| E10 | Selon l'AMF, depuis le 01/07/2026, seuls les prestataires autorisés conformément à MiCA peuvent fournir des services sur crypto-actifs en France ; ils peuvent bénéficier du passeport européen ; une entité éligible peut aussi les fournir après une notification au titre de l'article 60 auprès de l'autorité nationale compétente | S12 | [Établi] |
| E11 | Une offre d'investissement en titres exige le statut de prestataire de services de financement participatif ; vérification : liste de l'AMF et registre de l'ESMA ; ce prestataire n'a pas l'obligation de délivrer un conseil | S8 | [Établi] |
| E12 | Le registre européen des établissements de crédit n'a pas de valeur juridique ; les registres nationaux peuvent être plus détaillés ou plus à jour | S29 | [Établi] |
| E13 | Le registre européen des établissements de paiement reflète les registres nationaux, est mis à jour au moins une fois par jour et contient les informations de passeport | S30 | [Établi] |
| E14 | Face à une possible usurpation, rappeler le siège depuis un numéro sûr | S5, S7 | [Établi] |
| E15 | Une banque ne demande jamais de codes ni de validation d'opération ; contacter sa banque par ses canaux habituels | S7, S31 | [Établi] |
| E16 | La garantie des dépôts s'applique par client et par établissement et est déclenchée par l'ACPR ; elle exclut notamment l'assurance-vie, les plans d'épargne retraite, les crypto-actifs et la monnaie électronique émise par un établissement de paiement ou de monnaie électronique | S17, S21 | [Établi] |
| E17 | Les livrets réglementés bénéficient d'une garantie de l'État mise en œuvre par le FGDR, distincte de la garantie des dépôts, avec un plafond qui lui est propre ; aucun cumul ni aucune équivalence n'est déduit | S16, S17 | [Établi] |
| E18 | La garantie des titres joue en cas d'incapacité de restituer les titres ; elle est déclenchée par l'ACPR après avis de l'AMF ; elle ne couvre pas les variations de valeur de marché ni les litiges entre le client et l'établissement | S18, S21 | [Établi] |
| E19 | La garantie des sociétés de gestion vise l'incapacité d'une société de gestion de portefeuille à restituer des instruments et des espèces disparus de ses livres ; elle n'est activée que par l'AMF ; elle fonctionne depuis le 05/08/2022 | S19 | [Établi] |
| E20 | La garantie des cautions protège les clients de professionnels tenus par la loi de leur fournir une caution délivrée par un établissement ; elle joue si l'établissement émetteur fait défaut et que la caution est appelée | S20 | [Établi] |
| E21 | Les établissements de paiement et de monnaie électronique ne sont pas couverts par la garantie des dépôts et n'adhèrent pas au FGDR ; les fonds de leurs clients sont protégés par une assurance spéciale ou par un compte de cantonnement ouvert dans une banque (art. L.522-17 du Code monétaire et financier) ; en cas de faillite de l'établissement, le FGDR n'intervient pas | S22, S26 | [Établi] |
| E22 | Si la banque détenant le compte de cantonnement fait faillite, la garantie des dépôts s'appliquerait à l'ensemble de ce compte, avec un plafond par client de l'établissement de paiement | S22 | [Établi] ; en note (D1-N07), non affiché (D1-DC5) |
| E23 | Le FGAP, « Fonds de garantie des assurés contre la défaillance des sociétés d'assurance de personnes », couvre les sociétés agréées en France ; il est actionné par l'ACPR | S3, S23 | [Établi] |
| E24 | Le FGAP écarte les assureurs de l'Union ou de l'Espace économique européen exerçant en France en libre établissement ou en libre prestation de services ; les mutuelles et les institutions de prévoyance relèvent d'autres mécanismes | S3, S23 | [Établi] |
| E25 | Le FGAO, « Fonds de garantie des assurances obligatoires de dommages », couvre la responsabilité civile automobile et la dommages-ouvrage en cas de retrait d'agrément | S3, S24, S25 | [Établi] |
| E26 | Le FGAPDS couvre la responsabilité civile médicale des professionnels de santé libéraux en cas de retrait d'agrément | S3 | [Établi] (source unique) |
| E27 | Le FPGIP, « Fonds paritaire de garantie des institutions de prévoyance », couvre les institutions relevant du Code de la sécurité sociale | S3 | [Établi] |
| E28 | Le fonds des mutuelles (FGMU) n'est pas opérationnel : ses statuts et son règlement intérieur n'existent pas à ce jour | S3 | [Établi] ; non affiché |
| E29 | Champs d'une fiche de la liste blanche des PSCA et sens de la date affichée | S33, S34, S47, S48 (exemples ponctuels ; aucune généralisation) | [Ouvert] : aucune définition officielle consultée |
| E30 | « Le registre MiCA de l'ESMA est publié en fichiers CSV, chaque semaine ; les données sont transmises par les autorités nationales, avec un délai d'affichage possible ; il comporte les champs prévus par l'article 109 (S36, S38). » La mise à jour du 11/11/2026 est une observation datée | S36, S38 | [Établi] ; contenu des fichiers [Non étayé] U13 |
| E31 | « Selon ABE Infoservice (S42, S43), pour les investissements dans des produits dérivés sur crypto-actifs, il convient de vérifier dans REGAFI que la plateforme est autorisée en tant que prestataire de services d'investissement. » | S42, S43 | [Établi] |
| E32 | « Selon l'AMF et l'ACPR (S45, S46), les catégories d'entités susceptibles de fournir des services sur crypto-actifs par notification au titre de l'article 60 de MiCA comprennent les établissements de crédit, dépositaires centraux de titres, entreprises d'investissement, établissements de monnaie électronique, sociétés de gestion de FIA ou d'OPCVM et opérateurs de marché. » | S45, S46 | [Établi] |
| E33 | « Sur la fiche consultée, la liste blanche de l'AMF affiche la mention “Licensed MICA”. Le commentaire de cette fiche indique que l'inscription relève de la procédure de notification prévue à l'article 60 de MiCA (S47). » | S47 | [Établi], pour cette seule fiche |
| E34 | « L'AMF indique, sur sa page des listes blanches, que les enregistrements et agréments ne constituent pas une incitation à investir (S11, version anglaise). » | S11 | [Établi] |
| E35 | « Selon ABE Infoservice, dans le contexte des crypto-actifs, des escrocs usurpent l'identité de professionnels autorisés (S42, S43). » | S42, S43 | [Établi] |
| E36 | — | — | **Retiré, non réattribuable** |

**Terminologie de la garantie des sociétés de gestion (sous E19)**

| Élément | Contenu |
|---|---|
| Intitulé retenu par Élan | « Garantie des sociétés de gestion » (arbitrage B19, sans identifiant) |
| Terminologie de la source | S19 : « guarantee of asset management services » ; S17 : « guarantee of management services » |
| Référence documentaire | S19 et S17 (FGDR, pages HTML lues intégralement, sans date) |
| Réserve | L'équivalence juridique entre l'intitulé d'Élan et la terminologie du FGDR **n'est pas établie** ; l'intitulé d'Élan est un choix éditorial |

## Annexe B — Formulations à corriger

| N° | Formulation antérieure | Correction appliquée |
|---|---|---|
| K1 | Statut « [Fait externe vérifié] » | Trois classifications des faits (D1-A1) |
| K2 | « Fusion des anciens registres bancaire et assurance » | « Réunit regafi.fr et refassu.fr » (E2) |
| K3 | « Listes blanches des PSCA et des PSFP » | Trois listes (E7) |
| K4 | « Les registres nationaux font foi » | « Le registre européen n'a pas de valeur juridique ; les registres nationaux peuvent être plus détaillés ou plus à jour » (E12) |
| K5 | « Protection par cantonnement ou par assurance », rangée parmi les garanties | « Assurance spéciale ou compte de cantonnement ouvert dans une banque », dans une section distincte (D1.4.b, E21, D1-C8) |
| K6 | « Existence d'une garantie des cautions réglementées » | Bénéficiaires précisés et distinction avec D4 (E20, D1-DC2) |
| K7 | « Garantie des assurés en cas de défaillance d'un assureur de personnes (FGAP) » | Champ et exclusions précisés (E23, E24) |
| K8 | « Pas de mise à jour en temps réel » appliqué à la liste blanche des PSCA | Mention limitée à la liste du financement participatif (E7, D1-AF31) |

## Annexe C — Informations non étayées

| N° | Information | Traitement |
|---|---|---|
| U1 | Recherche dans REGAFI par SIREN, code banque ou BIC | Retirée |
| U2 | Correspondance « exacte » du numéro d'agrément | Retirée |
| U3 | Répartition des contrôles entre l'ORIAS, l'ACPR et l'AMF | Retirée |
| U4 | « La protection des souscripteurs de titres financiers relève de l'AMF » | Retirée |
| U5 | Missions générales de l'AMF | Retirées |
| U6 | ABE Infoservice présenté comme le site d'information du pôle commun | Retiré |
| U7 | Détail des missions de la Banque de France | Retiré |
| U8 | « Le conseiller n'est pas lui-même agréé par l'AMF » | Retiré |
| U9 | Répartition PSFP / IFP selon le type de prêt ou les dons | Retirée |
| U10 | « EUCLID » | Retiré |
| U11 | Signalement des SMS au 33 700 | Non transmis comme fait |
| U12 | Protection des lignes fixes depuis le 01/10/2024 | Non transmis comme fait |
| U13 | Contenu réel du registre de l'ESMA | Non affirmé |
| U14 | Exclusion explicite des pertes de marché pour la garantie des sociétés de gestion | Non affirmée (D1-AF14) |
| U15 | Limites de services selon la catégorie d'entité notifiée au titre de l'article 60 | Non affirmées |

## Annexe D — Notes de recherche de D1 (non affichées)

Les montants sont des informations externes à revérifier avant tout usage ; ils ne constituent pas des données destinées à l'utilisateur (D1-C3). Aucun montant n'est affiché dans le contenu principal de D1.

| N° | Contenu | Sources | Statut |
|---|---|---|---|
| D1-N01 | Garantie des dépôts : 100 000 € par client et par établissement | S17, S21 | [Établi] |
| D1-N02 | Livrets réglementés : garantie de l'État jusqu'à 100 000 € | S17 | [Établi] |
| D1-N03 | Garantie des titres : selon le FGDR, 70 000 € par client et par établissement, pour la restitution des actifs manquants ; ce n'est pas une couverture des pertes de valeur dues aux fluctuations des marchés (voir E18) | S18, S21 | [Établi] |
| D1-N04 | Garantie des sociétés de gestion : selon le FGDR, 20 000 € par client et par société de gestion. Délai d'indemnisation divergent selon les pages (2 ou 3 mois) : point non résolu | S19, S17 | [Établi] ; divergence [Ouvert] |
| D1-N05 | Garantie des cautions professionnelles : selon l'information du FGDR (S20), indemnisation de 90 % du préjudice, franchise de 3 000 €. Divergence signalée avec une référence réglementaire de 2014, non consultée ; conformité actuelle non vérifiée | S20 | Attribution [Établi] ; divergence et conformité **[Ouvert — à vérifier]** |
| D1-N06 | FGAP : 70 000 €, porté à 90 000 € pour certaines rentes. Périmètre exact des rentes concernées et exclusions éventuelles : en attente de J16 | S3, S23 | [Établi] pour les montants ; périmètre [Ouvert] |
| D1-N07 | Selon le FGDR (S22, lue intégralement), jusqu'à 100 000 € par client d'un établissement de paiement ou de monnaie électronique. Application lorsque les fonds sont détenus auprès d'une banque : ouverte. Ce n'est pas une conclusion juridique générale (voir E22) | S22 | [Établi] pour l'attribution ; application [Ouvert] |
| D1-N08 | Divergences entre sources : point de départ du délai de 40 jours du FGAO (décision de retrait selon l'ACPR, publication au Journal officiel selon le Fonds de garantie des victimes) ; « FGFIP » dans le tableau de l'ACPR. Constats distincts, sans interprétation | S3, S24 | [Établi] (divergences constatées) |
| D1-N09 | Liste des PSAN radiés : radiation automatique à la date d'agrément MiCA, ou le 02/07/2026 lors de l'abrogation du cadre PACTE | S35 | [Établi] **pour la seule partie lue** (environ 57 %) ; outil non retenu pour D1.3 (D1-AF27) |
| D1-N10 | Registre ESMA des entités non conformes (article 110) : non exhaustif ; contenu minimal : nom commercial ou site web, et autorité ayant transmis l'information ; publié en CSV | S39, S36 | Existence et caractéristiques légales [Établi] ; contenu [Non étayé] ; non retenu pour D1.3 (D1-AF28) |
| D1-N11 | Renvoi vers E30. Intégration du registre de l'ESMA dans ses systèmes informatiques annoncée pour la mi-2026 | S36 | Annonce [Établi] ; réalisation **non confirmée** |
| D1-N12 | Les entités en période transitoire ne sont pas des prestataires de services sur crypto-actifs au sens de MiCA (questions-réponses ESMA 2295 du 02/10/2024) | S40 | [Établi] ; information historique |
| D1-N13 | Fiche citée par E33 : Bpifrance Investissement, numéro « N2026 – 006 » | S47 | [Établi] ; ni généralisation ni interprétation du préfixe « N » |
| D1-N14 | Modalités de notification au titre de l'article 60 : selon l'ACPR, portail de l'ACPR, au moins 40 jours ouvrables avant la fourniture des services ; selon l'AMF, notification à l'AMF ou à l'ACPR. Divergence non résolue | S46, S45 | [Établi] pour chaque attribution ; articulation [Non étayé] |
| D1-N15 | Pour P4 D6 : effet de levier limité à 2 pour les crypto-actifs ; commercialisation des CFD limitée depuis le 01/08/2018 ; options binaires interdites depuis le 02/07/2018 | S43 | [Établi] ; dépendance P4 D6 |
| D1-N16 | Pour P4 D6 : « … which are still by nature very risky » (risque des produits, page des listes blanches) | S11 | [Établi] ; dépendance P4 D6 |
| D1-N17 | Pour la base anti-arnaque commune : des escrocs peuvent renvoyer vers les sites officiels pour faire croire à leur agrément (formulation de substance, non citée mot pour mot) | S42 | [Établi] en substance ; dépendance base commune |

## Annexe E — Sources

Toutes les sources ont été consultées le 12 novembre 2026, en HTML. Aucune pièce jointe (PDF, CSV, DOCX, formulaire) n'a été ouverte ; une page HTML seule ne valide pas ses pièces jointes. Colonne « Responsable / fréquence » : [Ouvert] pour chaque source (D1-AF24).

| N° | Organisme | Page | Date affichée | Lecture |
|---|---|---|---|---|
| S1 | ACPR | [Qu'est-ce que l'ACPR](https://acpr.banque-france.fr/lacpr/presentation/quest-ce-que-lacpr) | Aucune | Intégrale |
| S2 | ACPR | [Lancement du registre unique REGAFI](https://acpr.banque-france.fr/fr/actualites/lancement-du-nouveau-registre-public-unique-banque-et-assurance-regafifr) | 01/07/2026, mise à jour 24/09/2026 | Intégrale |
| S3 | ACPR | [Fonds de garantie compétents en cas de défaillance d'entreprises d'assurance](https://acpr.banque-france.fr/autoriser/procedures-secteur-assurance/fonds-de-garantie-competents-en-cas-de-defaillance-dentreprises-dassurance) | Aucune | Intégrale |
| S4 | ABE Infoservice | [Portail unique](https://www.abe-infoservice.fr/fr/actualites/un-portail-desormais-unique-pour-verifier-lautorisation-dexercer-en-france-des-etablissements) | 21/07/2026, mise à jour 24/09/2026 | Intégrale |
| S5 | ABE Infoservice | [Listes noires](https://www.abe-infoservice.fr/fr/liste-noire) | 10/06/2025 | Intégrale |
| S6 | ABE Infoservice | [Les conseillers en investissements financiers](https://www.abe-infoservice.fr/fr/epargne/se-preparer-epargner/les-conseillers-en-investissements-financiers) | Aucune | Intégrale |
| S7 | ABE Infoservice | [Faux conseillers bancaires](https://www.abe-infoservice.fr/fr/prevention-arnaques/savoir-detecter-une-arnaque/les-differentes-techniques-des-escrocs/les-usurpations-didentite-de-professionnels/fraude-attention-aux-appels-de-faux-conseillers-bancaires) | Aucune | Intégrale |
| S8 | ABE Infoservice | [Financement participatif : investir en souscrivant des titres financiers](https://www.abe-infoservice.fr/fr/epargne/financement-participatif/financement-participatif-investir-en-souscrivant-des-titres-financiers) | Aucune | Intégrale |
| S9 | ABE Infoservice | [Que faire en cas de mécontentement ?](https://www.abe-infoservice.fr/fr/assurance-banque-placements-financiers-que-faire-en-cas-de-mecontentement) | Aucune | Page HTML consultée intégralement ; pièces jointes non ouvertes (recommandation de l'ACPR 2024-R-02 en PDF ; liens vers economie.gouv.fr) |
| S10 | AMF | [Listes noires](https://www.amf-france.org/en/warnings/blacklists) | Aucune | Intégrale |
| S11 | AMF | [Listes blanches](https://www.amf-france.org/en/warnings/white-lists) | Aucune | **Partielle** : en-tête et page 1 sur 20 ; version française en erreur 404 ; pièces jointes non ouvertes (exports CSV et PDF) |
| S12 | AMF | [Fin de la période transitoire MiCA](https://www.amf-france.org/en/news-publications/news/amf-reminds-digital-asset-service-providers-transitional-period-allowing-them-continue-providing) | 05/02/2026 | Intégrale |
| S13 | AMF | [Demande de médiation](https://www.amf-france.org/fr/le-mediateur-de-lamf/votre-dossier-de-mediation/vous-voulez-deposer-une-demande-de-mediation) | Aucune | Intégrale |
| S14 | AMF Protect Épargne | [Dans quel cas intervient le médiateur de l'AMF ?](https://protectepargne.amf-france.org/dans-quel-cas-intervient-le-mediateur-de-l-amf) | Aucune | Intégrale |
| S15 | ORIAS | [Accueil](https://www.orias.fr/) | Aucune (listes arrêtées au 06/11/2026) | Intégrale |
| S16 | FGDR | [Plaquette explicative, page web](https://www.garantiedesdepots.fr/fr/plaquette-explicative-la-protection-de-votre-argent-en-cas-de-defaillance-de-votre-etablissement) | « © 2020-2024 » | Intégrale |
| S17 | FGDR | [Découvrir mes garanties](https://garantiedesdepots.fr/en/discover-my-guarantees) | Aucune | Intégrale |
| S18 | FGDR | [Garantie des titres](https://www.garantiedesdepots.fr/en/discover-my-guarantees/i-own-securities) | Aucune | Intégrale |
| S19 | FGDR | [Titres gérés par une société de gestion de portefeuille](https://www.garantiedesdepots.fr/en/i-own-securities-managed-portfolio-management-company-what-are-my-guarantees) | Aucune | Intégrale |
| S20 | FGDR | [Garantie des cautions](https://www.garantiedesdepots.fr/en/discover-my-guarantees/i-am-protected-by-a-performance-bond-what-are-my-guarantees) | Aucune | Intégrale |
| S21 | FGDR | [Questions fréquentes](https://www.garantiedesdepots.fr/en/frequently-asked-questions) | Aucune | Intégrale |
| S22 | FGDR | [Vérifier la protection de mon établissement](https://www.garantiedesdepots.fr/fr/verifier-la-protection-de-mon-etablissement) | Aucune (adhérents au 30/09/2026) | Intégrale |
| S23 | FGAP | [Présentation](https://www.fgap.fr/?page_id=2) | Aucune | Intégrale |
| S24 | Fonds de garantie des victimes | [Victime de la défaillance d'une entreprise d'assurance](https://www.fondsdegarantie.fr/victime-defaillance-entreprise-assurance) | Aucune | Intégrale |
| S25 | Service-Public | [Annuaire, fiche du FGAO](https://lannuaire.service-public.gouv.fr/gouvernement/etablissement-public_171692) | 20/07/2026 | Intégrale |
| S26 | Banque de France | [Compte de paiement, questions fréquentes](https://www.banque-france.fr/en/node/1639379) | Aucune | Intégrale |
| S27 | Banque de France | [Que faire en cas de litige avec sa banque ?](https://www.banque-france.fr/en/node/2560) | Aucune | Intégrale |
| S28 | La Médiation de l'Assurance | [La Médiation étape par étape](https://www.mediation-assurance.org/la-mediation-etape-par-etape/) | Aucune | Intégrale |
| S29 | Autorité bancaire européenne | [Registre des établissements de crédit](https://www.eba.europa.eu/risk-and-data-analysis/data/registers-and-other-list-institutions/credit-institutions-register) | Aucune | Intégrale |
| S30 | Autorité bancaire européenne | [Registre des établissements de paiement](https://www.eba.europa.eu/eba-goes-live-with-its-central-register-of-payment-and-electronic-money-institutions-under-psd2) | 18/03/2019 | Intégrale |
| S31 | Cybermalveillance.gouv.fr | [Faux conseiller bancaire](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/fraude-faux-conseiller-bancaire) | 19/01/2023, mise à jour 07/05/2026 | Intégrale |
| S32 | ACPR | [Rapport du pôle commun 2025](https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/rapport-annuel-du-pole-commun-acpr-amf-2025) | Aucune | Page de présentation seulement |
| S33 | AMF | [Fiche COINHOUSE SAS](https://www.amf-france.org/en/warnings/white-lists/casp/coinhouse-sas) | 07/05/2026 | Intégrale |
| S34 | AMF | [Fiche UAB Micar assets](https://www.amf-france.org/en/warnings/white-lists/casp/uab-micar-assets) | 09/07/2026 | Intégrale |
| S35 | AMF | [Liste des PSAN radiés](https://www.amf-france.org/en/professionals/fintech/my-relations-amf/crypto-asset-service-provider-casp/list-dasps-delisted) | 10/07/2026 | **Partielle** (environ 57 %) |
| S36 | ESMA | [Markets in Crypto-Assets Regulation (MiCA)](https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica) | Registre intérimaire mis à jour le 11/11/2026 | Page HTML consultée intégralement ; pièces jointes non ouvertes (fichiers CSV, PDF, visuels de la rubrique « Warnings ») |
| S37 | ESMA | [Databases and Registers](https://www.esma.europa.eu/publications-and-data/databases-and-registers) | Aucune | **Partielle** (partie MiCA lue) |
| S38 | ESMA | [Article 109 de MiCA](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-109-register-crypto-asset-white) | Aucune | Intégrale |
| S39 | ESMA | [Article 110 de MiCA](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-110-register-non-compliant-entities) | Aucune | Intégrale |
| S40 | ESMA | [Questions-réponses 2295](https://www.esma.europa.eu/publications-data/questions-answers/2295) | 02/10/2024 | Intégrale |
| S41 | ABE Infoservice | [Quels registres consulter ?](https://www.abe-infoservice.fr/fr/prevention-arnaques/les-professionnels-autorises/quels-sont-les-registres-consulter-pour-verifier-quun-professionnel-est-autorise-exercer) | Aucune | Intégrale |
| S42 | ABE Infoservice | [Investir dans les crypto-actifs : attention aux risques !](https://www.abe-infoservice.fr/fr/epargne/autres-placements-risque/investir-dans-les-crypto-actifs-attention-aux-risques) | Aucune | Intégrale |
| S43 | ABE Infoservice | [Trading en ligne](https://www.abe-infoservice.fr/fr/epargne/autres-placements-risque/trading-en-ligne-forex-crypto-actifs-produits-derives-sur-crypto-actifs-cfd-de-quoi-parle-t) | Aucune | Intégrale |
| S44 | ACPR | [Je propose des services sur crypto-actifs ?](https://acpr.banque-france.fr/fr/professionnels/lacpr-vous-accompagne/parcours-fintech/contenus-pedagogiques/de-quel-statut-releve-mon-activite/je-propose-des-services-sur-crypto-actifs) | Aucune | Page HTML consultée intégralement ; pièces jointes non ouvertes (règlement MiCA sur EUR-Lex et principes de l'ACPR, en PDF) |
| S45 | AMF | [Formulaire commun de notification AMF-ACPR](https://www.amf-france.org/en/forms-and-declarations/casp/common-notification-form-amf-and-acpr) | 30/01/2026 | Page HTML consultée ; formulaires et documents associés non ouverts |
| S46 | ACPR | [Émetteur de crypto-actifs et prestataires de services sur crypto-actifs](https://acpr.banque-france.fr/autoriser/procedures-secteur-banque/agrement-autorisation-ou-enregistrement/emetteur-de-crypto-actifs) | Aucune | Page HTML consultée ; formulaires et documents associés non ouverts |
| S47 | AMF | [Fiche Bpifrance Investissement](https://www.amf-france.org/en/warnings/white-lists/daspcasp/bpifrance-investissement) | 24/06/2026 | Intégrale |
| S48 | AMF | [Fiche DIGITAL ASSETS LLC](https://www.amf-france.org/en/warnings/white-lists/daspcasp/digital-assets-limited-liability-company-intermediation-and-services) | 10/06/2026 | Intégrale |
| S49 | AMF Protect Épargne | [Foire aux questions](https://protectepargne.amf-france.org/s-informer/faq) | Aucune | Intégrale |
| S50 | AMF | [Dans quels cas saisir le médiateur ?](https://www.amf-france.org/fr/le-mediateur-de-lamf/le-mediateur-mode-demploi/dans-quels-cas-saisir-le-mediateur) | 08/10/2025 | Intégrale |

**Non lues :** pages refusées (erreur 403) — economie.gouv.fr (quatre pages), ACPR « Que faire en cas de litige » ; pages tronquées de la Banque de France (deux) ; fichiers CSV de l'ESMA, PDF et DOCX non téléchargés.

## Annexe F — Registre des décisions

**Avertissement méthodologique.** Ce registre n'est pas un registre historique exact. Chaque ligne résume une décision. Le niveau indique si le contenu est vérifiable dans une source disponible (**V**), connu sans texte d'origine disponible (**P**) ou impossible à reconstituer (**I**). Les sources de vérification sont des messages d'arbitrage de l'historique de session, désignés par un repère ; ce sont des sources de consolidation, et non nécessairement les décisions originales.

**Localisation des messages.** Historique : `~/.claude/projects/-Users-bailabah-Documents-elan-v2/0e1e48f0-3c6f-475e-a197-a2e4b894df70.jsonl` (les lignes 1 à 7807 figurent également dans `daa60b59-…jsonl`, session d'origine). Horodatages en temps universel (UTC).

**Avertissement sur les historiques locaux.** Les références aux historiques de session renvoient à des fichiers locaux. Ils ne constituent pas des archives pérennes intégrées au projet, et leur vérification par d'autres lecteurs n'est pas garantie. Aucun extrait de conversation n'est versé au dépôt.

| Repère | Ligne | Horodatage (UTC) | Message |
|---|---|---|---|
| M-DC | 7769 | 12/11/2026 20:39 | « Consolidation de P4 D1 après les arbitrages D1-A1 à D1-A7 et les 9 décisions complémentaires » |
| M-R1 | 8140 | 12/11/2026 21:08 | « Consolidation de P4 D1 V4 après arbitrages », §2 |
| M-R2 | 8189 | 12/11/2026 21:30 | « Consolidation P4 D1 V5 après arbitrages de finalisation », §3 et §4 |
| M-R3 | 8225 | 12/11/2026 21:53 | « Consolidation P4 D1 V6 et préparation de FR1 », §2 |
| M-V7 | 8327 | 12/11/2026 22:14 | « P4 D1.3 — Consolidation V7 après arbitrages PSCA », §1 |
| M-V8 | 8398 | 12/11/2026 22:21 | « Consolidation P4 D1 V8 en lecture seule », §2 |
| M-V81 | 8418 | 12/11/2026 22:24 | « Corrections ciblées de la proposition P4 D1 V8 » |
| M-E31 | 8447 | 12/11/2026 22:40 | Demande d'examen de E31 (« Décisions déjà prises ») |
| M-E32 | 8461 | 12/11/2026 22:42 | Demande d'examen de E32 |
| M-GRP | 8475 | 12/11/2026 22:43 | Demande de consolidation groupée de E33 à E35 |
| M-GRV | 8489 | 12/11/2026 22:49 | Validation de l'arbitrage groupé E33 à E35 et des notes |
| M-E32F | 8503 | 12/11/2026 22:51 | « P4 D1 V8.1 — dernière consolidation avant rédaction », §1 |
| M-RED | 8546 | 12/11/2026 22:57 | « Préparation de la rédaction intégrale », §2 |
| M-AUD | 8708 | 12/11/2026 23:51 | « D1 : vérification finale des corrections après audit » |
| M-FIN | 8723 | 12/11/2026 23:56 | « D1 : consolidation finale avant autorisation de modification » |
| M-PL2 | 8743 | 13/11/2026 13:46 | « Nous avons terminé les arbitrages sur le plan consolidé » |
| M-PL3 | 8758 | 13/11/2026 13:49 | « Le plan révisé est globalement conforme… » |
| M-AUDF | 9026 | 13/11/2026 14:08 | Demande d'audit de fond de P4 D1 |
| M-AUDR | 9050 | 13/11/2026 14:10 | Rapport d'audit de fond (assistant), problèmes P1 à P9 |
| M-RECH | 9054 | 13/11/2026 14:12 | Autorisation de création de `docs/research/P4-D3-A-recherche-mediateurs.md` |
| M-P10Q | 9110 | 13/11/2026 14:15 | Compte rendu de création de l'archive (assistant), question sur la mention [Partiel] |
| M-ARB | 9114 | 13/11/2026 14:16 | « Nous avons terminé les arbitrages de l'audit de fond de P4 D1 » : transmission des arbitrages P1 à P10 |
| M-EXEC | 9143 | 13/11/2026 14:20 | « Exécution des corrections finales de l'audit P4 D1 » |
| M-VALID | 9238 | 13/11/2026 14:24 | « Mise à jour du statut de P4 D1 — validation métier » |
| M-HARM | 9271 | 13/11/2026 14:26 | « Harmonisation du statut validé de P4 D1 » |

### F.1 Décisions complémentaires D1-DC1 à D1-DC9

Contenu : M-DC, §3, « Décision 1 » à « Décision 9 ». Validation des identifiants : M-R3, §2, « Identifiants ».

| Identifiant | Objet | Choix validé | Conséquence dans D1 | Section | Niveau | Source précise de vérification |
|---|---|---|---|---|---|---|
| D1-DC1 | Remplacement des six PDF illisibles | Uniquement les pages HTML officielles nécessaires au lancement ; lecture intégrale ; organisme, titre, lien et dates indiqués ; sources insuffisantes écartées ; pas de remplacement systématique | Sources HTML de l'annexe E ; répartition PSFP / IFP écartée (U9) | Annexe E ; D1.1 | V | M-DC, §3, « Décision 1 » ; M-R3, §2 |
| D1-DC2 | Frontière D1/D4 sur les cautions | D1 : garantie des cautions professionnelles ; D4 : engagement personnel de caution ; pas de confusion ; frontière préparée pour FR1 sans modification | Ligne « Garantie des cautions professionnelles » ; frontière D1/D4 | D1.4.a ; §4.1 | V | M-DC, §3, « Décision 2 » ; M-R3, §2 |
| D1-DC3 | Autres fonds de garantie | FGAP présenté ; FGAO, FPGIP et FGAPDS signalés brièvement ; orientation vers l'ACPR ; pas de catalogue ; appellations vérifiées | Lignes FGAP et « Autres fonds » ; orientation précisée par D1-AF2 | D1.4.a | V | M-DC, §3, « Décision 3 » ; M-R3, §2 |
| D1-DC4 | Quatrième mécanisme du FGDR | Mention brève, sans montant, renvoi vers le FGDR ; pas d'insinuation de couverture des pertes de valeur | Ligne « Garantie des sociétés de gestion » | D1.4.a | V | M-DC, §3, « Décision 4 » ; M-R3, §2 |
| D1-DC5 | Cantonnement et garantie des dépôts | Distinction ; question de la banque défaillante en notes tant que sa portée juridique n'est pas vérifiée | D1.4.b ; E22 ; D1-N07 | D1.4.b ; annexes A et D | V | M-DC, §3, « Décision 5 » ; M-R3, §2 |
| D1-DC6 | Faux conseillers bancaires | D1.3 : identité et statut, y compris l'usurpation ; base commune : techniques et réflexes ; pas de doublon | Lignes « Faux conseiller » et « Usurpation » ; renvoi en D1.5 | D1.3 ; D1.5 | V | M-DC, §3, « Décision 6 » ; M-R3, §2 |
| D1-DC7 | Médiateurs | Recherche officielle ; faits préparés pour D3-A ; D1 identifie et renvoie ; non établi = en attente | Ligne « Médiateurs, identification seulement » | D1.2 | V | M-DC, §3, « Décision 7 » ; M-R3, §2 |
| D1-DC8 | Statut du document D1 | Document autonome dans `docs/decisions/` ; bilan intact ; proposition en attente de validation | Ligne « Statut » de l'en-tête | En-tête | V | M-DC, §3, « Décision 8 » ; M-R3, §2 |
| D1-DC9 | Identifiants | D1-A1 à D1-A7 ; J14 à J18 = anciens points 6.1, 6.4, 6.7, 6.8, 6.9 ; unicité vérifiée ; traçabilité dans FR1 | §0.3 ; J14 à J18 | §0 ; §6.1 | V | M-DC, §3, « Décision 9 » ; M-R3, §2 |

### F.2 Arbitrages de finalisation D1-AF1 à D1-AF32

Numéros attribués dans les rapports V5, V6 et V7 ; validation : M-R3, §2 (D1-AF1 à D1-AF13) ; M-V7, §0 (« D1-AF et D1-DC déjà validées ») ; M-V8, §2 (D1-AF14 à D1-AF24 ; D1-AF25 à D1-AF31).

| Identifiant | Objet | Choix validé | Conséquence dans D1 | Section | Niveau | Source précise de vérification |
|---|---|---|---|---|---|---|
| D1-AF1 | Point 6.2 | Option C : pas de revue pour un simple renvoi ; revue obligatoire avant toute exploitation des données | Ligne 6.2 ; D1.7 | §6.1 ; D1.7 | V | M-R1, §2, « Point juridique 6.2 » |
| D1-AF2 | Orientation vers les organismes de garantie | Organisme compétent ; FGDR et FGAP comme points d'orientation ; ACPR comme référence de supervision ; autres fonds signalés brièvement | Ligne ACPR ; orientations en D1.4.a | D1.2 ; D1.4.a | V | M-R1, §2, « V1 » ; confirmation M-R2, §3, « V1 » |
| D1-AF3 | Informations sur les acteurs et les registres | Uniquement l'étayé ; limites ; une inscription n'est jamais une garantie de fiabilité ; non étayé retiré | Retraits U1 à U15 ; D1.6 | D1.1 ; D1.6 ; annexe C | V | M-R1, §2, « V2 » |
| D1-AF4 | Garantie des sociétés de gestion (désignée « services de gestion » dans l'arbitrage) | Mécanisme établi seulement ; pas de généralisation sur les pertes de valeur sans source ; prudence ; renvoi vers le FGDR ; J16 | Formulation prudente, précisée par D1-AF14 | D1.4.a | V | M-R1, §2, « Garantie des services de gestion » |
| D1-AF5 | Statuts | Trois catégories de faits ; ni « Fait relevé » ni « Note de recherche » comme catégories ; note de recherche = emplacement | §0.1 ; annexe D | §0.1 ; annexe D | V | M-R1, §2, « Statuts des informations » ; confirmé par M-R2, §3, « V4 », et M-R3, §2, « Statuts » |
| D1-AF6 | Frontières et matrice | Répartition D1, D2, D3-A, D3-B, D4 ; D3-A non présenté comme existant | Tableau des frontières | §4.1 ; D1.2 | V | M-R1, §2, « Frontières et matrice FR1 » |
| D1-AF7 | Médiateurs (1re série) | Faits préparés pour D3-A ; lacunes non inventées | Identification seulement | D1.2 | V | M-R1, §2, « Médiateurs » |
| D1-AF8 | Recherche sur les médiateurs | M1 à M12 hors de D1, dans un document de recherche ; M12 en attente de revue juridique | Renvoi ; J19 | D1.2 ; §6.1 | V | M-R2, §3, « Médiateurs » |
| D1-AF9 | Identifiants selon la provenance | Séries distinctes ; unicité ; aucune renumérotation | Séries D1-DC et D1-AF | §0 ; annexe F | V | M-R2, §3, « Identifiants » ; validation des séries M-R3, §2 |
| D1-AF10 | Limites d'une vérification positive | Une inscription confirme certains éléments ; elle ne garantit ni l'absence de fraude, ni la qualité, ni la sécurité. Formulation harmonisée par l'arbitrage N | D1.6, ligne « Principe général » ; D1.3, « Limites » | D1.6 ; D1.3 | V | M-R2, §3, « V2 » ; harmonisation M-FIN, §2, « N » |
| D1-AF11 | Garantie des sociétés de gestion (2e série) | Préciser l'absence de couverture des pertes de marché ; orienter vers le FGDR | **Remplacé par D1-AF14** ; non intégré | — | V | M-R2, §3, « V3 » ; remplacement par M-R3, §2, « formulation intermédiaire C » |
| D1-AF12 | Maintenance | Responsable et fréquence par source, en conception | §5 ; annexe E | §5 ; annexe E | V | M-R2, §3, « V5 » |
| D1-AF13 | Séquence de finalisation | Consolider, préparer FR1, contrôler, présenter, attendre l'autorisation | Règle de méthode, sans texte dans D1 | — | V | M-R2, §3, « V9 » |
| D1-AF14 | Garantie des sociétés de gestion (3e série) | Formulation C ; pas d'exclusion générale ; J16 | Ligne « Garantie des sociétés de gestion » ; U14 | D1.4.a ; annexe C | V | M-R3, §2, « Garantie des sociétés de gestion » |
| D1-AF15 | Emplacement de la recherche sur les médiateurs | `docs/research/P4-D3-A-recherche-mediateurs.md`, non normatif | Renvoi ; dépendance | D1.2 ; §4.2 ; en-tête | V | M-R3, §2, « Recherche sur les médiateurs » |
| D1-AF16 | Acteur introuvable | Procédure prudente, sans conclusion automatique de fraude (contact reformulé par l'arbitrage B8) | Ligne « Acteur introuvable » | D1.3 | V | M-R3, §2, proposition éditoriale 1 ; B8 dans M-PL2 |
| D1-AF17 | Conservation des recherches | Reportée ; aucune promesse | Ligne dédiée | D1.7 | V | M-R3, §2, proposition éditoriale 2 |
| D1-AF18 | Nom du moteur | « Vérificateur d'acteur financier » | Intitulé de D1.7 | D1.7 | V | M-R3, §2, proposition éditoriale 3 |
| D1-AF19 | Renvois internes | Corriger tous les renvois, dont « l'erreur D1/D2 sur le cantonnement » | Renvois vérifiés | Ensemble | V pour la décision ; **I pour l'erreur visée** | M-R3, §2, proposition éditoriale 4. **Manque :** la description de l'erreur D1/D2 visée, absente de M-R3 et des messages suivants |
| D1-AF20 | Nom du document | `docs/decisions/P4-D1-acteurs-registres-protection-fonds-fraude.md` | En-tête | En-tête | V | M-R3, §2, proposition éditoriale 5 |
| D1-AF21 | Point 6.6 | Renvoi vers le point 6.2 | Ligne 6.6 ; D1.7 | §6.1 ; D1.7 | V | M-R3, §2, proposition éditoriale 6 |
| D1-AF22 | Vérification des PSCA | Statut et autorisation seulement ; pas de garantie de fiabilité ; aucun conseil | Lignes sur les prestataires sur crypto-actifs | D1.1 ; D1.3 | V | M-R3, §2, « PSCA » |
| D1-AF23 | Base anti-arnaque | Responsabilité éditoriale commune ; contribution des piliers ; gouvernance commune | Ligne de gouvernance | D1.5 | V | M-R3, §2, « Base anti-arnaque » |
| D1-AF24 | Maintenance (précision) | Par source, en conception ; information obsolète signalée et traitée avant réutilisation | §5 ; annexe E | §5 ; annexe E | V | M-R3, §2, « Maintenance » ; validation M-V8, §2 |
| D1-AF25 | Registre de l'ESMA | Liste de l'AMF comme point d'entrée ; ESMA complémentaire, non obligatoire | Lignes « Point d'entrée » et « Source institutionnelle complémentaire » | D1.3 | V | M-V7, §1, arbitrage 1 ; libellé D1-AF25 dans M-V8, §2 |
| D1-AF26 | Dérivés sur crypto-actifs | REGAFI ; D1 vérifie l'acteur, D6 traite les produits | Ligne « Dérivés » ; frontière D1/D6 | D1.3 ; §4.1 | V | M-V7, §1, arbitrage 2 ; M-V8, §2 |
| D1-AF27 | Liste des PSAN radiés | En notes seulement | D1-N09 | Annexe D | V | M-V7, §1, arbitrage 3 ; M-V8, §2 |
| D1-AF28 | Registre de l'article 110 | En notes seulement | D1-N10 | Annexe D | V | M-V7, §1, arbitrage 4 ; M-V8, §2 |
| D1-AF29 | Entités notifiées au titre de l'article 60 | Recherche ; aucune procédure avant vérification | Ligne « Entités notifiées » ; E32 ; E33 ; D1-N14 | D1.3 | V | M-V7, §1, arbitrage 5 ; M-V8, §2 |
| D1-AF30 | M13 | Ajout au document de recherche ; à vérifier ; pas une règle | Renvoi « Recours » ; D3A-M13 | D1.2 ; D1.3 | V | M-V7, §1, arbitrage 6 ; M-V8, §2 |
| D1-AF31 | Correction de E7 | Temps réel limité au financement participatif ; [À corriger] pour l'usage PSCA | E7 ; K8 | D1.3 ; annexes A et B | V | M-V7, §1, arbitrage 7 ; M-V8, §2 |
| D1-AF32 | Création de J19 | J19 créé pour M12 ; M12 en attente ; intitulé exact à préciser | Ligne J19 | §6.1 | V pour le contenu et l'attribution ; **P pour la décision d'origine** | Contenu : M-V81, §1, « Rétablir la décision J19 ». Attribution : M-E31, « J19 = M12 ; D1-AF32 est attribué à la création de J19 ». **Manque pour l'origine :** le message où J19 a été arbitré pour la première fois, évoqué comme déjà décidé dans M-V8 et M-V81 mais absent de l'historique |

### F.3 Décisions sans identifiant

| Décision | Contenu | Niveau | Source précise de vérification |
|---|---|---|---|
| Confirmations « V1 » et « V4 » | Confirment D1-AF2 et D1-AF5 | V | M-R2, §3 |
| Rappels « V6 », « V7 », « V8 » | Rappellent D1-AF7 et D1-AF8, D1-DC2, D1-A2 et D1-DC9 | V | M-R2, §4 |
| Points J14 à J18 et création documentaire (1re série) | Rappels de D1-A2, D1-DC8 et D1-DC9 | V | M-R1, §2, « Revue juridique J14 à J18 » et « Création documentaire » |
| Validation des séries d'identifiants | Confirme D1-AF9 | V | M-R3, §2, « Identifiants » |
| E29, option A | En attente de vérification complète | V | M-E31, « Décisions déjà prises » |
| E30 | Périmètre strict ; N11 renvoie vers E30 | V | M-E31, « Décisions déjà prises » |
| E31 | Formulation attribuée à ABE Infoservice | V | M-E32, « Décisions déjà prises » |
| E32 | Formulation prudente sur les catégories d'entités | V | M-GRP, §1 ; formulation exacte rétablie dans M-E32F, §1 |
| E33, E34, E35 | Formulations validées (groupe B) | V | M-GRV, §1, « Groupe B » |
| N9, N10, N12, U15 (groupe A) | Statuts confirmés | V | M-GRV, §1, « Groupe A » |
| E36 | Retiré ; contenu déplacé en N12 (D1-N12) | V | M-V81, §3 ; M-GRV, §1 |
| Réserve « Licensed MiCA » | Mention conservée, avec réserve | V | M-E31, « Décisions déjà prises » |
| Convention D1-N et D3A-M | Préfixes des notes | V pour sa transmission ; **P pour l'arbitrage d'origine** | M-RED, §2 (« Cette convention est déjà arbitrée »). **Manque :** le message d'origine de l'arbitrage, absent de l'historique |
| Corrections de la V8.1 | Mention de D1-AF20 ; E29 à E35 « proposés » ; réexamen de E36 | V | M-V81, §3 |
| J16, périmètre historique | Inclut le FGDR, le FGAP, le cantonnement, les cautions et la garantie des sociétés de gestion | V | M-E31, « Décisions déjà prises » |
| J16, périmètre limité à cinq mécanismes | Exclut les livrets réglementés, le FGAO, le FGAPDS, le FPGIP et le fonctionnement opérationnel du cantonnement | V | M-AUD, §2, « B » ; M-FIN, §2, « B » |
| M13, recherche ouverte | — | V | M-E31 ; M-GRV, §1, « Groupe C » |
| Arbitrages postérieurs à l'audit A à D et options (annexe F, D1-N07, D1-N04 et D1-N05, liste blanche) | — | V | M-AUD, §2 et §3 |
| Arbitrages A à P | Statut et autorisation ; J16 ; MiCA ; E28 ; annexe F ; D1-N07 ; D1-N04 et D1-N05 ; liste blanche ; D1-N03 ; D1-N06 ; E17 ; E29 ; FR1 ; harmonisation de D1-AF10 ; pièces jointes ; D1.6 | V | M-FIN, §2 |
| Corrections B1 à B30 | Dont B8 (acteur introuvable), B19 (intitulé « Garantie des sociétés de gestion »), B29 (frontière P1/P4) | V | M-PL2 |
| Statut « [Ouvert — à vérifier] » de D1-N05 ; terminologie de la garantie des sociétés de gestion ; deux lignes en D1.6 ; ajout C2 à FR1 | — | V | M-PL3, §2 à §5 |
| Validations formulées avec ChatGPT | Connues seulement par leurs reprises | P | M-R1, §0 (« validations complémentaires formulées dans notre échange avec ChatGPT »). **Texte d'origine non disponible** : conversation ChatGPT non accessible |
| Ancienne « formulation prudente validée » du vérificateur | Remplacée par l'arbitrage P | I | Mentionnée dans M-E31 et M-GRV sans texte. **Manque :** le texte de la formulation, jamais transmis |
| Identité de la V3 avec la version partagée sur ChatGPT | — | I | **Manque :** la version partagée sur ChatGPT, à comparer avec l'historique de la session d'origine (`daa60b59-…jsonl`, ligne 7229) |
| Audit de fond, P1 | Renvois vers AI1 §1 (D1.3) et vers M7, L1 (D1.7) conservés comme [Proposition] | V pour la transmission ; **P pour l'arbitrage d'origine** | Problème identifié dans M-AUDR (P1) ; décision transmise dans M-ARB, §1 « P1 » ; précisions d'exécution dans M-EXEC, §1 (C1, C2). **Manque :** le message où le choix a été arrêté ; M-ARB indique que les arbitrages ont été terminés sans que leur échange d'origine figure dans l'historique |
| Audit de fond, P2 | Création de l'archive `docs/research/P4-D3-A-recherche-mediateurs.md`, sans valeur de référence | V | Autorisation directe dans M-RECH ; problème identifié dans M-AUDR (P2) ; rappel dans M-ARB, §1 « P2 » |
| Audit de fond, P3 | Avertissement sur les historiques de session locaux (annexe F) | V pour la transmission ; **P pour l'arbitrage d'origine** | Problème identifié dans M-AUDR (P3) ; décision transmise dans M-ARB, §1 « P3 » ; formulation d'exécution dans M-EXEC, §2 (T2). **Manque :** message d'origine du choix |
| Audit de fond, P4 | Propositions de §1, D1.1, §2, D1.6 et D1.7 conservées comme [Proposition] | V pour la transmission ; **P pour l'arbitrage d'origine** | Problème identifié dans M-AUDR (P4) ; décision transmise dans M-ARB, §1 « P4 ». **Manque :** message d'origine du choix |
| Audit de fond, P5 | Contenu principal limité à D1.1 à D1.7 ; §6 et annexes comme espaces de gouvernance, de recherche et de traçabilité | V pour la transmission ; **P pour l'arbitrage d'origine** | Problème identifié dans M-AUDR (P5) ; décision transmise dans M-ARB, §1 « P5 » ; formulation exacte dans M-EXEC, §1 (C4). **Manque :** message d'origine du choix |
| Audit de fond, P6 | Libellé de S19 « Titres gérés par une société de gestion de portefeuille » conservé | V pour la transmission ; **P pour l'arbitrage d'origine** | Écart signalé dans M-AUDR (P6) ; décision transmise dans M-ARB, §1 « P6 ». **Manque :** message d'origine du choix |
| Audit de fond, P7 | Consigne de prudence en l'absence de confirmation (D1.3) | V pour la transmission ; **P pour l'arbitrage d'origine** | Problème identifié dans M-AUDR (P7) ; décision transmise dans M-ARB, §1 « P7 » ; formulation exacte dans M-EXEC, §1 (C3). **Manque :** message d'origine du choix |
| Audit de fond, P8 | Traitement des résultats négatifs ou incertains maintenu ouvert, sans formulation ni procédure | V pour la transmission ; **P pour l'arbitrage d'origine** | Lacune identifiée dans M-AUDR (P8) ; décision transmise dans M-ARB, §1 « P8 » ; précision d'exécution dans M-EXEC, §1 (C5 : aucun renvoi). **Manque :** message d'origine du choix |
| Audit de fond, P9 | Responsable et fréquence de maintenance maintenus ouverts | V pour la transmission ; **P pour l'arbitrage d'origine** | Point identifié dans M-AUDR (P9) ; décision transmise dans M-ARB, §1 « P9 ». **Manque :** message d'origine du choix |
| Audit de fond, P10 | Mention [Partiel] conservée comme niveau documentaire dans l'archive de recherche seulement ; non introduite dans D1 (D1-AF5) | V | Question posée dans M-P10Q ; réponse dans M-ARB, §1 « P10 » |
| Validation de P4 D1 comme référence métier (arbitrage A, 13 novembre 2026) | D1 devient une référence métier ; ses propositions, points ouverts, réserves juridiques (J14 à J19) et limites de production restent inchangés. Décision distincte de D1-DC8, qui n'est pas modifiée | V pour la transmission ; **P pour l'arbitrage d'origine** | Décision transmise dans M-VALID ; harmonisation des mentions de statut autorisée dans M-HARM. **Manque :** l'échange où l'arbitrage A a été choisi ne figure pas dans l'historique ; M-VALID indique seulement qu'il a été validé |
| Correction ciblée des renvois obsolètes (arbitrages du 14 novembre 2026 : correction des mentions obsolètes, mention de D3-A, traçabilité dans l'annexe F ; sans identifiant) | Mise à jour des mentions de P4 D3-A et P4 D6 en D1.2 (médiateurs), D1.3 (recours), §4.1 (frontière D1/D3-A) et §4.2 (dépendances) : ces documents existent depuis le 13 novembre 2026 comme propositions non validées. Rubrique « Documents liés » inchangée (P4T-A34). Statut de référence métier validée, réserves J14 à J19 et autres contenus inchangés | V | Messages d'autorisation du lot LA et décisions du 14 novembre 2026 ; registre transversal P4 (P4T-A34) |

---

Fin du document P4 D1 — référence métier validée, avec les réserves juridiques, documentaires et opérationnelles précisées dans le document.
