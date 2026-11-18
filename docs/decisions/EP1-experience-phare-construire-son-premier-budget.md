# EP1 — Expérience phare du pilier 1 : « Construire son premier budget »

- **Statut :** ce document consolide la conception pédagogique et la rédaction éditoriale définitive de l'expérience phare « Construire son premier budget », stabilisées par les arbitrages successifs du fondateur. Les réserves de publication y sont indiquées séparément (§9). Il ne vaut ni validation de réalisation (référentiel global §12.3), ni validation du périmètre fonctionnel complet des expériences phares (référentiel global §13.2).
- **Date de consolidation :** 9 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`), pilier 1 — Gestion de l'argent.
- **Documents liés :** R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), C1 (`docs/decisions/C1-catalogue-contenus-points-entree.md`), AI1 (`docs/decisions/AI1-aide-immediate.md`), L1 (`docs/decisions/L1-cycle-de-vie-des-donnees.md`), documents de référence de `docs/reference/` (notamment `pilier-1-gestion-argent.md` et `referentiel-global-2026-11-04.md`).

---

## 0. Statut, sources et légende

Ce document consigne la conception validée de l'expérience phare « Construire son premier budget » : ses 13 écrans, leurs objectifs pédagogiques, les textes affichés, les comportements interactifs, les règles de calcul et les conditions d'affichage. Les formulations des arbitrages sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1).

Aucun contenu de l'ancien projet n'est repris dans ce document. Les personnages, montants et situations sont fictifs.

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Conception]** | Rédaction, comportement ou règle de calcul stabilisés pendant la conception, sans arbitrage de fond distinct |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Explicatif]** | Formulation qui décrit ou précise, sans créer de règle |
| **[Réserve]** | Information à établir ou à vérifier avant publication (§9 uniquement) |

### Homonymies à ne pas confondre

| Sigle | Sens dans ce document | Autres sens existants |
|---|---|---|
| **P1** | Pilier 1 — Gestion de l'argent | R15 : décision pédagogique P1 |
| **A1, A2, A3** | Arbitrages de conception de l'expérience (§2) | R15 : décisions A1 à A10 ; référentiel §7.1 : modules A1 à A3 du programme pédagogique |
| **EP1** | Identifiant de ce document | — |

### Conventions de lecture des écrans

- Le **texte entre guillemets « »** est le texte affiché à l'utilisateur.
- Le **texte en italique** décrit un comportement, non affiché.
- Les **[crochets]** désignent une valeur calculée.

---

## 1. Objet, périmètre et positionnement

| Règle | Statut |
|---|---|
| L'expérience est une expérience phare au sens du référentiel : un parcours cohérent qui part d'une situation concrète et conduit vers un résultat utile, en combinant contenus, simulation et accompagnement progressif. | [Renvoi] référentiel §1.3 |
| Elle relève de la dimension 1 du pilier 1 (comprendre ses revenus, construire et gérer son budget, maîtriser ses dépenses, gérer sa trésorerie personnelle, épargner au quotidien, anticiper les dépenses et les imprévus). | [Renvoi] pilier 1, dimension 1 |
| Elle est la première expérience phare conçue pour le pilier 1. | [Décidé] A3 |
| Elle comprend **13 écrans** : Amadou (1 à 9), Marc (10 à 12), conclusion (13). Aucun écran n'est fusionné, supprimé ou ajouté. | [Décidé] |
| Ce document ne désigne pas le premier usage du moteur de parcours guidés, qui reste ouvert. Le premier usage identifié (candidat) du moteur de simulation numérique est la simulation entrepreneuriale P2 ; EP1 n'en est pas un usage désigné. | [Renvoi] référentiel §13.2 ; FR1, arbitrages transversaux 12 et 27 |
| Ce document n'autorise aucune réalisation technique. | [Renvoi] référentiel §12.3 ; README du dépôt |
| Accès : règle « compte requis », comme pour tout élément autre que l'aide immédiate. | [Renvoi] C1 §8 |

---

## 2. Arbitrages structurants

| Règle | Statut |
|---|---|
| **A1 :** les contenus de l'ancien programme ne sont qu'une source éditoriale, à revalider. Leurs volumes sont un inventaire de sujets, pas un objectif de production. | [Décidé] A1 |
| **A2 :** le pilier 1 traite le budget, y compris les conséquences budgétaires d'un découvert. Le pilier 4 traite les mécanismes bancaires, les moyens de paiement, le crédit et le paiement fractionné. | [Décidé] A2 |
| **A3 :** « Construire son premier budget » est la première expérience phare du pilier 1. | [Décidé] A3 |
| « Première exploration » est déclenchée par la validation du plan à l'écran 4, confirmée si la marge est négative. Le signe de la marge n'intervient pas. Rien d'autre ne la déclenche. | [Décidé] ; [Renvoi] R15 D2, A6 |
| Aucune gamification : ni XP, ni badge, ni série, ni classement, ni score, ni récompense, ni déblocage. | [Renvoi] R15 §3 |
| Aucun marqueur de capacité vérifiée n'est attribué par l'expérience. | [Renvoi] R15 D5, D6, O8 (capacités non encore définies) |
| Réponses défendables (écran 3) : conséquences expliquées, sans hiérarchie artificielle. | [Renvoi] R15 P7, O7 |
| Aucune présélection d'une base ou d'un choix. Deux seules valeurs par défaut : « Seulement ce mois-ci » pour la portée d'un changement, et « Laisser non affecté » pour l'argent libéré. | [Décidé] |
| Aucun choix, aucune dépense évitée et aucune réaffectation ne s'appliquent sans action de l'utilisateur. | [Décidé] |
| Calendrier d'Amadou : règle unique de répartition et d'arrondi (§7.2), sans exception pour le plan ajusté. | [Décidé] (calendrier ajusté : option A) |
| Les 40 € de cours reçus le 20 octobre sont exclus de l'argent disponible le 15 et intégrés uniquement à la projection de fin de mois, présentés comme une rentrée attendue dans la simulation. | [Décidé] |
| Réaction de Marc : réduire d'abord les dépenses et versements (voie 1), mobiliser les réserves ensuite (voie 2). | [Décidé] |
| Voie 2 : retraits cumulés plafonnés au manque restant après la voie 1. | [Décidé] |
| Un projet créé reste un objectif existant, même si son solde est nul, et peut recevoir une réaffectation. | [Décidé] |
| L'argent libéré par un changement durable reste non affecté par défaut. Aucune affectation automatique. | [Décidé] |
| La réaffectation est volontaire. Elle prend effet à partir du mois suivant. Chaque euro réaffecté diminue le compte courant et augmente l'objectif destinataire du même montant. | [Décidé] |
| La somme libérée par la suspension durable du versement au coussin ne peut pas être réaffectée à ce même coussin. | [Décidé] |
| Les changements sont ponctuels par défaut. Un changement durable exige une décision explicite et modifie le plan habituel à partir du mois suivant. | [Décidé] |
| Le surplus d'une réaction d'octobre chez Marc reste sur son compte. | [Décidé] |
| Aucune progression dans une entrée sensible. Un point d'entrée sans fiche validée est traité comme sensible. | [Renvoi] M2 §6, §7 ; R15 D1 |

---

## 3. Vocabulaire des montants

| Terme | Sens | Statut |
|---|---|---|
| **Prévu** | Montant inscrit dans le plan | [Conception] |
| **Dépensé** | Montant déjà payé | [Conception] |
| **Sur le compte** | Solde réel du compte courant | [Conception] |
| **Libre** | Solde moins ce qui reste à payer jusqu'à la fin du mois | [Conception] |
| **Mis de côté** | Montant transféré vers un autre compte (réserve, projet, épargne, coussin) | [Conception] |
| **Projeté** | Estimation de fin de mois, qui peut inclure une rentrée attendue | [Conception] |

**Distinction obligatoire pour Marc (écrans 10 à 12)** [Décidé] :

| Notion | Nature | Où se trouve l'argent | Quand |
|---|---|---|---|
| **Surplus ponctuel d'une réaction** | Écart positif entre les leviers activés et le manque d'un mois donné | Reste sur le compte courant | Le mois de la réaction seulement |
| **Non affecté mensuel du plan habituel** | Ligne du plan : part de la base sans destination (non réparti initial + sommes libérées non réaffectées) | Reste sur le compte courant, chaque mois où le revenu atteint la base | Chaque mois, à partir du mois qui suit le changement |
| **Réaffectation volontaire** | Ligne du plan dirigée vers un objectif (coussin ou projet) | Quitte le compte courant et entre dans l'objectif, euro pour euro | Chaque mois, à partir du mois suivant le choix |

---

## 4. Données de la simulation [Conception]

### 4.1 Amadou

| Élément | Valeur |
|---|---|
| Situation | 23 ans, premier CDI de technicien de maintenance, vit seul dans un studio |
| Salaire | 1 640 €, versé le 1er |
| Cours de soutien, quatre derniers mois | 160 €, 0 €, 90 €, 120 € ; moyenne 92,50 € |
| Cours reçus en octobre | 40 €, le 20 |
| Dépenses fixes (851 €) | Logement 621 € (le 3), énergie 48 € (le 5), téléphone et internet 32 € (le 10), transport 43 € (le 2), salle de sport 29 € (le 1er), streaming 18 € (le 18), remboursement à sa sœur 60 € (le 25) |
| Dépenses variables du mois dernier | Courses 270 €, sorties 210 €, vêtements 80 € |
| Courses réelles d'octobre | 288 €, quel que soit le montant prévu : 144 € du 1er au 15, puis 40 € le 16, 32 € le 22, 36 € le 26, 36 € le 30 |
| Intentions du plan esquissé | Réserve 38 €, projet ordinateur 100 €, épargne du mois 50 €, imprévus 60 € |
| Dépenses annuelles | Cadeaux 150 €, entretien du vélo 60 €, séjour d'été 240 € (450 € par an, soit 37,50 € par mois, arrondis à 38 €) |
| Projet | Remplacer son ordinateur dans 4 mois (400 €) |
| Imprévu | Réparation de l'écran du téléphone, 130 €, le 15 octobre |

### 4.2 Marc

| Élément | Valeur |
|---|---|
| Situation | 41 ans, intérimaire, vit en colocation |
| Revenus des quatre derniers mois | 1 280 €, 1 750 €, 1 900 €, 1 410 € |
| Bases proposées | 1 280 € (le plus bas), 1 585 € (la moyenne), 1 900 € (le plus haut) |
| Dépenses essentielles (910 €) | Colocation 495 €, téléphone 25 €, énergie 60 € (720 € par an), courses 250 €, carburant 80 € |
| Peuvent passer après | Loisirs 120 €, musique 11 € |
| Réserve pour l'assurance auto | 35 € par mois (420 € par an) |
| Total des dépenses et de la réserve | 1 076 € |
| Soldes au 1er octobre | Coussin 0 €, réserve 0 €, projet inexistant |
| Octobre | 1 410 € reçus |
| Novembre | 1 900 € reçus |
| Décembre | 900 € reçus, réparation de voiture 300 € |

---

## 5. Règles communes à tous les écrans [Conception]

- Aucun score, badge ni série. Aucun texte libre. Aucune donnée personnelle demandée.
- Chaque détail secondaire est replié et s'ouvre d'un appui. Une information essentielle sur la sécurité, les droits ou les obligations n'est jamais reléguée dans un détail replié ([Renvoi] R15 P11).
- Les écrans restent utilisables sans présélection d'une base ou d'un choix (§2).
- Le vocabulaire des montants (§3) est appliqué sans exception.

---

## 6. Les 13 écrans

### Écran 1 — Le mois d'Amadou

**Objectif pédagogique :** entrer dans une situation crédible, sans jugement, et poser l'enjeu : décider avant le mois plutôt que constater après.

**Titre :** « Le mois d'Amadou »

> « Amadou a 23 ans. Il vient de signer son premier CDI de technicien de maintenance et vit seul dans un studio.
> Le mois dernier, le 20, il ne lui restait presque rien, sans vraiment savoir où son argent était passé.
> En octobre, il veut décider à l'avance à quoi servira chaque euro. Aide-le à préparer son mois, puis regarde ce qui se passe vraiment. »
>
> « Situation fictive : tu ne saisis aucune donnée te concernant. »

**Carte « Ce qu'Amadou sait déjà » :**
- « Salaire : 1 640 €, versé le 1er. »
- « Cours de soutien le week-end, ces quatre derniers mois : 160 €, 0 €, 90 €, 120 €. »
- « Ce qu'il a dépensé le mois dernier : tu le verras à l'étape suivante. »
- « Un projet : remplacer son ordinateur dans 4 mois (400 €). »
- « Chaque année : cadeaux de fin d'année 150 €, entretien du vélo 60 €, séjour d'été en famille 240 €. »

**Choix :** « Commencer ».

### Écran 2 — Ce qui va entrer

**Objectif pédagogique :** distinguer un revenu sûr d'un revenu variable, et choisir comment compter ce dernier.

**Titre :** « Ce qui va entrer »

> « Le 1er, son salaire arrive : 1 640 €. Les cours de soutien, eux, changent chaque mois.
> Combien Amadou compte-t-il de cours dans son plan d'octobre ? »

**Détail replié « Ses cours ces quatre derniers mois » :** 160 €, 0 €, 90 €, 120 €, soit une moyenne de 92,50 €.

**Choix,** un seul, sans présélection :
- « Ne pas compter les cours : son plan part de 1 640 €. »
- « Compter la moyenne, 92,50 € : son plan part de 1 732,50 €. »
- « Compter son meilleur mois, 160 € : son plan part de 1 800 €. »

**Conséquence affichée :**
> « C'est noté : son plan part de [1 640 + K] €. Tu verras à la fin du mois ce que ce choix change. »

*K désigne les cours comptés (0 €, 92,50 € ou 160 €). Un choix est requis pour continuer. L'utilisateur peut revenir à cet écran depuis l'écran 4.*

### Écran 3 — Ce que coûte un mois

**Objectif pédagogique :** séparer deux questions souvent confondues : une dépense revient-elle au même montant, et est-elle indispensable ?

**Titre :** « Ce que coûte un mois »

> « Pour chaque dépense, tu vois si elle revient au même montant chaque mois ou si elle varie. Mais une dépense régulière n'est pas forcément indispensable. Pour quatre d'entre elles, c'est à toi de le dire. »

**Six cartes déjà décrites** (l'explication s'ouvre d'un appui) :

| Carte | Régularité | Priorité | Explication |
|---|---|---|---|
| Logement (loyer et assurance), 621 € | « Le 3, même montant » | Essentielle | « Un toit, chaque mois. » |
| Énergie, 48 € | « Le 5, mensualité fixe » | Essentielle | « Une régularisation peut arriver une fois par an. » |
| Téléphone et internet, 32 € | « Le 10, même montant » | Essentielle | « Il en a besoin pour travailler. » |
| Transport, 43 € | « Le 2, abonnement » | Essentielle | « Pour aller travailler. » |
| Salle de sport, 29 € | « Le 1er, sans engagement » | Peut passer après | « Résiliable pour le mois suivant. » |
| Sorties | « Varie : 210 € le mois dernier » | Peut passer après | « Ça compte pour lui, mais ça peut attendre. » |

**Quatre cartes à décider,** chacune avec « Essentielle » ou « Peut passer après », sans présélection :
- « Streaming, 18 € : le 18, même montant. »
- « Courses et produits du quotidien : varie, 270 € le mois dernier. »
- « Remboursement à sa sœur : 60 € chaque mois, le 25, par virement. Elle lui a avancé sa caution. Ce remboursement est prévu tous les mois ; s'il en a besoin, Amadou peut lui demander de le décaler. »
- « Vêtements : varie, 80 € le mois dernier. »

**Choix :** un choix par carte, puis « Voir ce que ça donne ».

**Conséquences affichées :**

| Carte | Réponse | Texte |
|---|---|---|
| Streaming | Essentielle | « Il revient au même montant, mais Amadou peut s'en passer : c'est une dépense fixe qui peut passer après. Il ne pourra l'arrêter qu'à partir de novembre. » |
| Streaming | Peut passer après | « Oui : fixe, mais pas indispensable. Il pourra l'arrêter à partir de novembre. » |
| Courses | Peut passer après | « Le montant varie, mais il faut manger chaque mois : c'est une dépense variable essentielle. Il peut changer sa façon d'acheter, pas supprimer le besoin. » |
| Courses | Essentielle | « Oui : elle varie, mais elle est indispensable. » |
| Sœur | Essentielle | « Ça se défend : c'est un engagement, au même montant chaque mois. » |
| Sœur | Peut passer après | « Ça se défend aussi, à condition de ne rien décaler sans la prévenir. Le virement part le 25 : d'ici là, il peut lui en parler. » |
| Vêtements | L'une ou l'autre | « Ça se défend dans les deux sens : essentiel s'il a un vrai besoin ce mois-ci, comme des chaussures de travail usées ; sinon, ça peut souvent attendre. » |

*Classement des éléments ([Renvoi] R15 P7) : streaming et courses ont une réponse objectivement vérifiable ; sœur et vêtements ont plusieurs réponses défendables.*

**Passage :** « Continuer ». Aucune bonne réponse n'est exigée.

### Écran 4 — Le plan esquissé par Amadou

**Objectif pédagogique :** construire et valider un plan, et voir une marge négative comme un plan pas entièrement financé, pas comme un découvert.

**Titre :** « Le plan d'octobre »

> « Amadou a commencé son plan : d'un côté ce qu'il a dépensé le mois dernier, de l'autre ce qu'il voudrait faire en octobre. Modifie ce qui te semble nécessaire, ou garde-le tel quel, puis valide-le. »

**Plan affiché** (libellé validé : « Plan esquissé par Amadou ») :

| Ligne | Montant | Modifiable |
|---|---|---|
| **Ressources retenues** | [1 640 + K] € | Par retour à l'écran 2 |
| *Ce qu'il a dépensé le mois dernier* | | |
| Dépenses fixes | 851 € | Non : « Ces prélèvements d'octobre sont déjà prévus. » |
| Courses | 270 € | Oui, par pas de 10 € ou par saisie |
| Sorties | 210 € | Oui |
| Vêtements | 80 € | Oui |
| *Ce qu'il voudrait faire en octobre* | | |
| Réserve pour les dépenses de l'année | 38 € | Oui |
| Projet ordinateur | 100 € | Oui |
| Épargne du mois | 50 € | Oui |
| Imprévus | 60 € | Oui |
| **Total du plan** | **[T] €** (1 659 € au départ) | |
| **Marge** | **[1 640 + K − T] €** | |

**Détails repliés :**
- « Détail des dépenses fixes » : logement 621 €, transport 43 €, énergie 48 €, téléphone 32 €, salle de sport 29 €, streaming 18 €, sœur 60 €.
- « Pourquoi 38 € de réserve ? » : « 150 + 60 + 240 = 450 € par an, soit 37,50 € par mois, arrondis à 38 €. »

**Aide affichée :**
> « La réserve, le projet et l'épargne partent le 1er sur un autre compte. Les imprévus et la marge restent sur le compte courant. »

**Message de marge,** mis à jour à chaque modification (m = marge, I = imprévus prévus) :

| Condition | Texte |
|---|---|
| m ≥ 0, K = 0 | « Marge : +[m] €. Cet argent reste sur le compte, sans affectation. » Si I > 0 : « Tes [I] € d'imprévus sont entièrement couverts. » |
| m ≥ 0, K > 0 | « Marge : +[m] €, en comptant [K] € de cours qui ne sont pas encore arrivés. » Si T ≤ 1 640 : « Avec son salaire seul (1 640 €, déjà reçu), le plan laisse +[1 640 − T] €. » Si T > 1 640 : « Avec son salaire seul, le plan dépasse de [T − 1 640] € : il a besoin d'au moins [T − 1 640] € de cours pour être financé. » |
| −I < m < 0 | « Marge : −[|m|] €. Le plan prévoit [|m|] € de plus que les ressources retenues. Ce n'est pas un découvert : c'est un plan qui n'est pas entièrement financé. Ses [I] € d'imprévus ne sont couverts qu'à hauteur de [I + m] €. » |
| m ≤ −I, I > 0 | Même début, puis : « Ses [I] € d'imprévus ne sont pas couverts du tout. » Si m < −I, ajouter : « Et [−m − I] € d'autres lignes de son plan ne le sont pas non plus. » |
| m < 0, I = 0 | Même début, puis : « Son plan ne prévoit pas d'imprévus, et [|m|] € de ses lignes ne sont pas financés. » |
| m < 0 et K > 0 | En complément : « Les ressources retenues comptent déjà [K] € de cours qui ne sont pas encore arrivés. » |

*Bornes : m = 0 donne une couverture totale ; m = −I donne une couverture nulle.*

**Exemple au départ :** cours non comptés, marge −19 €, imprévus couverts à hauteur de 41 €.

**Choix :** « Valider ce plan ».
- **Si la marge est négative, confirmation :**
  > « La marge de ce plan est de −[|m|] €. Tu peux le garder tel quel ou le modifier. »
  >
  > Boutons : « Garder ce plan » · « Revenir au plan »
- **Conséquence affichée :**
  > « Plan validé. Voyons comment se passe le mois. »

*La validation, confirmée si la marge est négative, déclenche « Première exploration » (§2). Le plan peut être validé sans aucune modification. Le plan validé sert à tous les calculs qui suivent ; il n'est utilisé que pendant l'expérience (§9, R15 O1).*

### Écran 5 — Le 15 octobre

**Objectif pédagogique :** faire face à un imprévu en regardant l'argent réellement libre, puis choisir où trouver le reste en connaissant le prix de chaque solution.

**Titre :** « Le 15 octobre »

> « Le 15 octobre, l'écran du téléphone d'Amadou casse. Il en a besoin pour son travail. La réparation coûte 130 €, à payer aujourd'hui. »

**Temps 1 — « Où en est son compte »**

- « Sur le compte aujourd'hui : [723 − M − S/2 − V/2] € » (390 € avec le plan esquissé).
- « Mis de côté le 1er sur l'autre compte : [M] € » (188 €).
- « D'ici la fin du mois, il reste à payer : [222 + S/2 + V/2] € » (367 €). Le détail se déplie : streaming 18 € (le 18), sœur 60 € (le 25), courses 144 €, sorties [S/2] €, vêtements [V/2] €.

**Ligne courses :**
- si C/2 < 144 : « Courses : 144 € déjà dépensés au lieu de [C/2] € prévus. Amadou compte le même écart d'ici la fin du mois. »
- si C/2 = 144 : « Courses : 144 € dépensés, comme prévu. »
- si C/2 > 144 : « Courses : 144 € dépensés, soit [C/2 − 144] € de moins que prévu. Amadou compte le même rythme d'ici la fin du mois. »

**Ligne cours :**
- « Les cours ne sont pas encore arrivés. »
- Si K > 0 : « Ton plan en comptait [K] € : rien n'est arrivé pour l'instant. »

**Temps 2 — « Ce qui est vraiment libre »**

- « Argent libre aujourd'hui : [L] € » (23 €). Les cours ne sont pas comptés, puisqu'ils ne sont pas encore arrivés.
- « Réparation : 130 € »

**Ligne imprévus** (seulement si I > 0) :
- L ≥ I : « Ses [I] € d'imprévus font partie de cet argent libre : c'est à ça qu'ils servent. »
- 0 < L < I : « Ses [I] € d'imprévus font partie de cet argent libre, mais il n'en reste que [L] € : le reste de son plan et ses dépenses du mois en ont déjà absorbé une partie. »
- L ≤ 0 : « Ses [I] € d'imprévus étaient comptés dans cet argent libre, mais il n'en reste rien aujourd'hui. »

*Exemple avec le plan esquissé : I = 60 €, L = 23 € (60 − 19 de marge négative − 18 d'écart sur les courses).*

**Message selon L :**
- L ≥ 130 : « L'argent libre suffit à payer la réparation. »
- 0 ≤ L < 130 : « L'argent libre ([L] €) ne suffit pas : il manque [130 − L] €. »
- L < 0 : « Même sans la réparation, il manquerait [|L|] € pour finir le mois. Avec la réparation, il manque [130 − L] €. »

**Temps 3 — « Comment trouver le reste »**

> « Choisis un ou plusieurs moyens, ou ne change rien et regarde ce qui se passe. »

Aucun moyen n'est présélectionné.

| Moyen | Maximum | Ce que ça implique |
|---|---|---|
| « Sortir moins d'ici la fin du mois » | [S/2] € | « Dépense réellement évitée ; rien à rattraper. » |
| « Reporter un achat de vêtements » | [V/2] € | « Dépense réellement évitée ; rien à rattraper. » |
| « Demander à sa sœur de décaler le remboursement d'octobre » | 60 €, en une fois | « Elle accepte s'il la prévient aujourd'hui. En novembre, il lui devra 120 €, ou un étalement convenu avec elle. » |
| « Reprendre de l'épargne du mois » | [E] € | « L'épargne d'octobre baisse d'autant. » |
| « Reprendre la réserve des dépenses de l'année » | [réserve prévue] € | « À reconstituer avant ces dépenses. » |
| « Reprendre l'argent du projet ordinateur » | [projet prévu] € | « L'achat sera retardé. » |
| Streaming *(grisé)* | — | « Ne peut être arrêté qu'en novembre. » |
| Salle de sport *(grisée)* | — | « Déjà prélevée le 1er. » |

**Résumé en direct :**
> « Trouvé : [R] € sur [manque] €. »
- si R dépasse le manque : « [R − manque] € de plus que nécessaire : ils restent sur le compte. »

> « Projection de fin de mois : vers [L − 130 + 40 + R] €. Dans cette simulation, 40 € de cours arriveront le 20 : ils sont comptés ici comme une rentrée attendue, pas comme de l'argent disponible. Aucun autre cours n'est compté. »

**Boutons :** « Payer la réparation ainsi » · « Ne rien changer ».

**Confirmation, seulement si le manque n'est pas couvert :**
- Projection négative :
  > « Il manque encore [Y] €. Même avec les 40 € de cours du 20, le compte finirait le mois en dessous de zéro, vers [projection] €. »
- Projection positive ou nulle :
  > « Il manque encore [Y] € par rapport à l'argent libre d'aujourd'hui. Avec les 40 € de cours du 20, le compte finirait le mois vers [projection] €. »

Boutons : « Continuer ainsi » · « Revenir ».

*Les réductions portent d'abord sur les dates les plus tardives. Les reprises sont datées du 15. Le décalage du remboursement supprime le virement du 25.*

### Écran 6 — La fin d'octobre

**Objectif pédagogique :** voir le mois réel produit par le plan et les choix, sans jugement.

**Titre :** « Fin octobre »

> « Voici le mois d'Amadou, tel qu'il s'est vraiment passé. »

**Carte principale :**
- « Sur le compte fin octobre : [solde] € »
- « Mis de côté : [M − reprises] € (réserve [ ] €, projet [ ] €, épargne [ ] €) »
- « Dû à sa sœur : [0 € ou 60 €] »
- « Premier jour où le solde ne suffit pas : le [jour] ([montant] €) ». Selon le cas : « avant le 15 » ou « Aucun ».

**Si le solde passe sous zéro à un moment du mois :**
> « Si tous les paiements passaient, son compte serait à [solde] € à la fin du mois. Le solde ne suffirait plus à partir du [jour] ([montant] €). Selon les conditions de sa banque, un paiement pourrait être refusé ou le compte passer à découvert, avec des frais possibles. »

- Si le premier manque tombe dans la première quinzaine : « à partir du [jour] » devient « avant le 15 ».
- Si le solde passe sous zéro puis remonte à zéro ou au-dessus : « Le solde a été insuffisant du [jour] au [jour]. Il est remonté le [jour] ([cause]). » *[cause] dépend du flux réellement joué qui fait remonter le solde : « les cours reçus » (le 20) ou « l'argent repris » (reprises du 15). Si le manque commence dans la première quinzaine, « du [jour] » devient « avant le 15 ».*

**Précision sur le calendrier simulé** [Décidé] : le premier manque est calculé selon le calendrier de simulation (§7.2). Les dépenses variables de la première quinzaine y sont regroupées au 15. Cette date ne représente donc pas nécessairement le jour réel où le compte aurait manqué d'argent : c'est pourquoi un manque survenu dans ce bloc s'affiche « avant le 15 ».

**Détails repliés :**
- **« Le mois jour par jour » :** frise avec le solde du 15 avant et après la réparation, du 20 après les cours, du 25 après le remboursement, et de fin de mois. Avec le plan esquissé sans changement : 390 € puis 260 €, 202 €, 78 €, −8 € le 28, −67 € en fin de mois.
- **« Prévu et réel, ligne par ligne ».**

*Le message sur un solde insuffisant reste dans la carte principale : il n'est jamais replié ([Renvoi] R15 P11).*

**Passage :** « Continuer ».

### Écran 7 — Ce que montrent ses choix

**Objectif pédagogique :** relier chaque résultat à une décision précise : cours comptés, marge, courses, sources mobilisées.

**Titre :** « Ce que montrent ses choix »

*Un à quatre blocs, dans cet ordre : cours, marge, courses, sources.*

**Bloc cours.** U = min(K ; max(0 ; T − 1 640)).

| Condition | Texte |
|---|---|
| K > 0 et U > 40 | « Son plan comptait sur [U] € de cours pour financer ses dépenses au-delà de son salaire. Seuls 40 € sont arrivés, le 20. Les [U − 40] € qui manquaient n'ont jamais été sur son compte : ils pèsent sur la fin du mois. » |
| K > 0 et 0 < U ≤ 40 | « Son plan comptait [K] € de cours ; 40 € sont arrivés, soit [K − 40] € de moins. Le plan n'en avait besoin que de [U] € : cette fois, l'écart n'a pas créé de manque. Mais la marge affichée (+[1 640 + K − T] €) supposait ces [K] € ; avec les 40 € reçus, elle n'était que de [1 640 + 40 − T] €. » |
| K > 0 et T ≤ 1 640 | « Son salaire suffisait à financer son plan : il n'avait pas besoin des cours. Les 40 € arrivés le 20 sont venus en plus et ont augmenté son solde de 40 €, même si le plan en comptait [K]. » |
| K = 0 | « Les 40 € de cours sont arrivés le 20 sans avoir été prévus : ils ont amorti la fin du mois. » |

**Bloc marge,** seulement si la marge affichée était négative. Il commence toujours par :
> « Son plan avait une marge de −[|m|] € : ses intentions dépassaient ses ressources. Ce n'était pas encore un découvert. »

Puis, selon la couverture des imprévus :
- −I < m < 0 : « Ses imprévus n'étaient couverts qu'en partie ([I + m] € sur [I] €). »
- m ≤ −I, I > 0 : « Ses imprévus n'étaient pas couverts du tout. »
- I = 0 : « Il n'avait rien prévu pour les imprévus. »

Et selon l'argent libre :
- 0 ≤ L < 130 : « Le jour de la réparation, il ne restait que [L] € de libres. »
- L ≥ 130 : « Le jour de la réparation, il restait [L] € de libres. »
- L < 0 : « Le jour de la réparation, il manquait déjà [|L|] € pour finir le mois. »

**Bloc courses :**

| C | Texte |
|---|---|
| < 270 | « Baisser la ligne des courses à [C] € n'a pas réduit le besoin : elles ont coûté 288 €. Les [288 − C] € d'écart ont été pris ailleurs dans le mois. » |
| = 270 | « Les courses ont coûté 288 €, soit 18 € de plus que prévu, en deux fois. Un écart n'est pas une faute : c'est une information pour le mois suivant. » |
| 270 < C < 288 | « Les courses ont coûté 288 €, soit [288 − C] € de plus que les [C] € prévus. Prévoir un peu plus que le mois dernier a réduit l'écart, sans le supprimer. » |
| = 288 | « Les courses ont coûté 288 €, exactement le montant prévu. » |
| > 288 | « Les courses ont coûté 288 €, soit [C − 288] € de moins que les [C] € prévus. Cette somme n'a pas été dépensée : elle est restée sur le compte. » |

**Bloc sources :** une phrase par source utilisée à l'écran 5.
- Sorties ou vêtements réduits : « Moins de sorties, un achat reporté : ces dépenses pouvaient attendre, et rien ne reste à rattraper. »
- Remboursement décalé : « Le remboursement décalé a libéré 60 € ce mois-ci. En novembre, il doit 120 € à sa sœur, ou un étalement convenu. »
- Épargne reprise : « Reprendre [X] € d'épargne a protégé le compte : l'épargne du mois tombe à [E − X] €. Un mois comme celui-ci, la réduire se défend. »
- Réserve reprise : « La réserve sert aux cadeaux de fin d'année, à l'entretien du vélo et au séjour d'été : elle devra être reconstituée avant ces dépenses. »
- Projet repris : « L'ordinateur attendra : il manque [X] € au projet. »
- Manque non couvert : « Rien n'a été changé pour couvrir le manque : il s'est reporté sur la fin du mois. »

**Choix facultatif :** « Et si… ? » rejoue l'écran 5 avec le même plan. Rien n'est conservé, rien n'est redéclenché.

*L'écran 8 part toujours du mois réellement joué, jamais du rejeu facultatif.*

**Passage :** « Continuer ».

### Écran 8 — Préparer novembre

**Objectif pédagogique :** partir de la situation réelle pour corriger le plan, en décidant pour chaque changement s'il vaut pour un mois ou devient une habitude.

**Titre :** « Préparer novembre »

**Partie 1 — « Où en est Amadou le 31 octobre »**

- « Sur le compte : [solde] € »
- « Encore dû à sa sœur : [0 € ou 60 €] »
- « Mis de côté : réserve [ ] €, projet [ ] €, épargne d'octobre [ ] € »
- « Octobre a montré : courses 288 € pour [C] € prévus ; imprévus utilisés. »

**Si le solde est négatif :**
> « Le compte commence novembre à −[X] €. Des frais ont pu s'ajouter selon les conditions de sa banque : ils ne sont pas comptés ici. »

**Partie 2 — « Le plan de novembre »**

> « Chaque ligne reprend le plan d'octobre. Garde-la ou change-la. Pour chaque changement, choisis s'il vaut pour novembre seulement ou pour les mois suivants aussi. »

*Affichage progressif : les lignes touchées par octobre s'affichent d'abord ; les autres lignes sont regroupées dans une section repliable. Toutes les lignes restent accessibles et comptent dans la marge.*

**Lignes touchées par octobre** (affichées d'emblée) :

| Ligne | Choix proposés |
|---|---|
| Départ | « Compte au 31 octobre : [solde] € » (non modifiable) |
| Cours | « Cours comptés pour novembre : 0 € / 92,50 € / 160 € » — *choix requis, sans présélection, comme à l'écran 2* |
| Courses | « Garder [C] € » / « Prévoir 288 € pour novembre seulement » / « Prévoir 288 € — à conserver les mois suivants » |
| Sœur, si décalée | « Lui rembourser 120 € en novembre » / « Étaler avec elle : 90 € en novembre et 90 € en décembre, puis retour à 60 € » |
| Projet, si repris | « Rattraper [reprise] € en novembre seulement » / « Garder 100 € par mois et décaler l'achat » / « Suspendre en novembre seulement » / « Suspendre — à conserver les mois suivants » |
| Réserve, si reprise | « La reconstituer en novembre (+[reprise] €) » / « Ne rien changer » |
| Épargne, si reprise | « La compenser en novembre (+[reprise] €) » / « Ne rien changer » |

**Section repliable « Autres lignes »** (le nombre de lignes modifiées s'affiche sur l'en-tête) :

| Ligne | Choix proposés |
|---|---|
| Streaming | « Le garder » / « L'arrêter — à conserver les mois suivants » |
| Salle de sport | « La garder » / « Ne pas la payer en novembre seulement » / « La résilier — à conserver les mois suivants » |
| Imprévus, sorties, vêtements | Nouveau montant, avec « pour novembre seulement » ou « à conserver les mois suivants », ou « Garder » |

**Règle de calcul de la marge de novembre** [Décidé] :

> Marge de novembre = compte au 31 octobre + 1 640 € + cours retenus pour novembre − total du plan de novembre.

**Conséquence affichée :**
> « Avec ce plan, la marge de novembre serait de [X] €. »
- si elle est négative : « Le plan de novembre n'est pas entièrement financé de [|X|] €. »

> « Ton plan habituel, à partir de décembre : [aperçu avec les seuls changements à conserver]. »
>
> « Novembre reste un plan : on ne sait pas encore ce qui se passera, ni ce que rapporteront les cours. »

*Les frais bancaires éventuels ne sont pas comptés.*

**Passage :** « Valider le plan de novembre ». Aucune progression n'est déclenchée.

### Écran 9 — La méthode d'Amadou

**Objectif pédagogique :** dégager une méthode transférable, sans la transformer en règles.

**Titre :** « Ce qu'Amadou a appris »

> « Ce qu'Amadou a fait ce mois-ci tient en cinq repères :
> 1. **Ce qui entre :** compter ce qui est sûr ; ce qui varie arrive en plus.
> 2. **Régulier ne veut pas dire indispensable**, et variable ne veut pas dire facultatif.
> 3. **Une marge négative se voit avant le compte :** c'est un plan pas entièrement financé, pas encore un découvert.
> 4. **Face à un imprévu :** l'argent vraiment libre d'abord, puis ce qui peut attendre, puis ce qu'on renonce à mettre de côté. Et prévenir avant de décaler un engagement.
> 5. **Un écart est une information :** on corrige le plan du mois suivant.
>
> Ce sont des repères, pas des règles : chaque situation est différente. »

**Encadré :**
> « Si le budget ne tient pas alors que l'essentiel est déjà au plus juste, ce n'est pas un échec personnel : certains revenus ne suffisent pas. Il existe une aide gratuite et confidentielle, les Points conseil budget. »

*Cohérence de référence : principe du pilier 1, dimension 3 (« Les difficultés ne viennent pas toujours d'une mauvaise gestion »). Source sur les Points conseil budget : réserve §9.*

**Passage :** « Continuer ».

### Écran 10 — Marc, intérimaire

**Objectif pédagogique :** bâtir un plan habituel sur un revenu irrégulier, et réagir dès le premier mois si ce plan ne tient pas.

**Titre :** « Marc, des revenus qui changent »

> « Même méthode, autre situation : des revenus qui changent chaque mois. »
>
> « Marc a 41 ans. Il est intérimaire et vit en colocation. Ses revenus changent chaque mois : 1 280 €, 1 750 €, 1 900 € et 1 410 € ces quatre derniers mois.
> Il veut un plan habituel : la façon dont il répartit son argent chaque mois, tant que rien ne l'oblige à changer. »

**Carte « Ses dépenses » :**
- « Essentielles : 910 €. »
- « Peuvent passer après : loisirs 120 €, musique 11 €. »
- « Réserve pour l'assurance auto : 35 € par mois (420 € par an), mise de côté. »
- « Total : 1 076 €. »
- « Avant octobre : coussin 0 €, réserve assurance 0 €. »

**Détail replié :** colocation 495 €, téléphone 25 €, énergie 60 € (720 € par an), courses 250 €, carburant 80 €.

**Étape 1 — « Sur quel montant Marc bâtit-il son plan ? »** Aucune présélection.
- « 1 280 € : le plus bas de ses quatre derniers revenus »
- « 1 585 € : la moyenne de ses quatre derniers revenus »
- « 1 900 € : le plus haut de ses quatre derniers revenus »

**Étape 2 — « Pourquoi ce montant ? »** Aucune présélection.
- « C'est un montant qu'il a reçu même lors de son mois le plus faible récemment »
- « C'est ce qu'il gagne en moyenne »
- « Il compte sur un bon mois »

**Étape 3 — « Que fait-il des [B − 1 076] € qui restent ? »** Trois réglages, tous à 0 € au départ :
- « Coussin : argent mis de côté pour les mauvais mois »
- « Imprévus (laissés sur le compte) »
- « Dépenses en plus »

Affichage permanent : « Non réparti : [X] € (reste sur le compte, sans affectation) ».

*Bornes : chaque réglage va de 0 € à la marge moins les deux autres ; la somme des trois ne peut pas dépasser la marge (204 €, 509 € ou 824 €).*

**Mois 1 — « Le 1er octobre »**

> « Le 1er octobre, Marc reçoit 1 410 €. Son plan prévoyait [B] €. »

Carte « Ce mois-ci » :
- « Reçu : 1 410 € »
- « Dépenses prévues : [1 041 + Dm] € »
- « À mettre de côté : [35 + Cm] € »
- « Compte en fin de mois s'il suit son plan : [334 − Dm − Cm] € »

**Si ce compte est positif ou nul :**
> « Son plan tient ce mois-ci. »

**S'il est négatif :**
> « S'il suit son plan sans rien changer, il lui manquerait [X] € ce mois-ci. Un compte en dessous de zéro n'est pas une solution acquise : selon les conditions de son compte, des paiements pourraient être refusés ou entraîner des frais. Marc peut adapter ce mois-ci. »
>
> « À ce stade, Marc ne mobilise pas ses réserves : il ajuste d'abord ce qu'il dépense et ce qu'il met de côté ce mois-ci. »

*Avec la base 1 280 €, ce cas n'arrive jamais (compte d'octobre d'au moins 130 €). Avec 1 585 € ou 1 900 €, il dépend de la répartition choisie.*

**Leviers,** affichés seulement si leur montant dépasse 0 €, tous à 0 € au départ :

| Levier | Maximum | Ce que ça implique |
|---|---|---|
| « Renoncer aux dépenses en plus » | [Dm] € | Dépense évitée |
| « Réduire ses loisirs » | 120 € | Dépense évitée |
| « Ne pas verser au coussin ce mois-ci » | [Cm] € | Versement suspendu |
| « Ne pas verser à la réserve assurance ce mois-ci » | 35 € | « L'assurance auto reste à payer. » |

**Résumé en direct :**
> « Il manque encore [X] €. »
- si les leviers dépassent le manque : « [Y] € de plus que nécessaire : ils restent sur son compte. » *(surplus ponctuel, §3)*

**Portée, après chaque levier réglé au-dessus de 0 €** (question repliée, « Seulement ce mois-ci » par défaut) :
> « Ce changement vaut-il seulement pour ce mois-ci, ou pour son plan habituel ? »
- « Seulement ce mois-ci » : « Le mois prochain, son plan habituel reprend tel quel. »
- « Changer son plan habituel » : « À partir du mois prochain, [ce changement] fait partie de son plan. »

**Si un changement durable libère une somme :**
> « À partir du mois prochain, ce changement libère [F] € par mois. Par défaut, ils restent sur son compte, sans affectation. »

- Choix : « Laisser non affecté » (par défaut) / « Mettre de côté dans le coussin : 0 à [Fc] € ».
- Si F comprend un versement au coussin suspendu durablement :
  > « Les [Fnc] € libérés en arrêtant le versement au coussin ne peuvent pas y retourner : ils restent sur son compte. »
- Aperçu du plan habituel : dépenses, réserve, coussin, imprévus, non affecté. Le total est toujours égal à [B].
- Note affichée :
  > « Mettre de côté ne crée pas d'argent : chaque euro placé dans le coussin quitte son compte, chaque mois, à partir du mois prochain. »

*Le projet n'existe pas encore au mois 1 : il ne peut pas être visé.*

**Conséquence affichée :**
> « Fin octobre : [compte] € sur son compte. »

**Retour selon la base :**
- 1 280 € : « Les bons mois arrivent en plus ; les mois bas sont déjà couverts. »
- 1 585 € : « Ça tient un mois moyen ; un mois plus bas laisse un trou. »
- 1 900 € : « Le plan suppose que chaque mois est le meilleur. »

**Passage :** « Voir le mois suivant ».

### Écran 11 — Un mois à 1 900 €

**Objectif pédagogique :** décider consciemment de ce qu'on fait d'un bon mois, au lieu de le laisser se dissoudre.

**Titre :** « Novembre : un bon mois »

**Bases 1 280 € et 1 585 € :**
> « En novembre, Marc a eu beaucoup de missions : 1 900 €. Il suit son plan habituel[, tel qu'il l'a modifié en octobre], versements prévus compris. Il reste [1 900 − B] € de plus. Qu'en fait-il ? »

Choix, sans présélection :

| Base | « Tout mettre dans le coussin » | « Un peu de tout » | « Tout dépenser » |
|---|---|---|---|
| 1 280 € | 620 € | 300 € au coussin, 200 € au projet, 120 € de plaisir | 620 € |
| 1 585 € | 315 € | 150 € au coussin, 100 € au projet, 65 € de plaisir | 315 € |

*« Un peu de tout » crée le projet, qui reste ensuite un objectif existant, même vidé.*

**Base 1 900 € :**
> « En novembre, Marc a reçu 1 900 €, le montant de son plan habituel. Il n'a rien en plus à répartir. »

Puis, selon le cas :
- compte d'octobre resté négatif : « Le manque d'octobre n'est pas rattrapé. »
- réaffectation A > 0 : « [A] € sont allés dans son coussin, comme prévu par son plan. »
- imprévus ou non affecté dans le plan : « [Im + NA] € restent sur son compte (imprévus et argent non affecté). »

*Aucun choix n'est proposé.*

**Conséquence affichée :**
> « Fin novembre : [compte] € sur son compte, coussin [ ] €[, projet [ ] €], réserve assurance [ ] €. »

**Passage :** « Voir le mois suivant ».

### Écran 12 — Un mois difficile

**Objectif pédagogique :** réagir à un mauvais mois dans le bon ordre (réduire d'abord, mobiliser les réserves ensuite) et comprendre ce qu'un changement durable fait au plan.

**Titre :** « Décembre : un mois difficile »

**Temps 1 — « Si Marc ne change rien »**

> « En décembre, une semaine sans mission : Marc reçoit 900 €. Et sa voiture a besoin d'une réparation à 300 €. »

- « S'il suit son plan habituel sans rien changer, son compte serait à [X] € fin décembre. »
- Si Im > 0 : « Ses imprévus ([Im] € par mois dans son plan) sont restés sur son compte : ils sont déjà comptés dans ce montant. C'est à ça qu'ils servent. »
- Si X < 0 : « Selon les conditions de son compte, des paiements pourraient être refusés ou entraîner des frais. »
- Si X ≥ 0 : « Son plan absorbe ce mois difficile. » Les temps 2 et 3 restent consultables, sans être nécessaires.

**Temps 2 — « Réduire ce qui peut l'être ce mois-ci »** (voie 1)

Tous les leviers sont à 0 € au départ. Un levier n'est affiché que si sa ligne dépasse 0 € dans le plan en vigueur.

| Levier | Maximum | Ce que ça implique |
|---|---|---|
| « Renoncer aux dépenses en plus » | [dépenses en plus en vigueur] € | Dépense évitée |
| « Réduire ses loisirs » | [loisirs en vigueur] € | Dépense évitée |
| « Ne pas verser au coussin ce mois-ci » | [versement en vigueur] € | « Versement suspendu : ce qu'il a déjà mis de côté ne bouge pas. » |
| « Ne pas verser à la réserve assurance ce mois-ci » | [versement en vigueur] € | « L'assurance reste due. » |
| Musique, 11 € *(grisée)* | — | « Abonnement non réductible ce mois-ci. » |

> « Après ces choix, il manque encore [R1] €. »

**Règle du manque restant** [Décidé] :

> R1 = max(0 ; déficit initial − réductions de la voie 1), où déficit initial = max(0 ; −X).

**Temps 3 — « Mobiliser ses réserves »** (voie 2)

*Affiché seulement si R1 > 0.*

> « Il manque encore [R1] €. Tu peux reprendre de l'argent mis de côté, sans dépasser ce montant. »

| Réserve | Disponible | Ce que ça implique |
|---|---|---|
| « Reprendre de l'argent du coussin » | [solde du coussin + part non suspendue du versement de décembre] € | « Le coussin baisse d'autant : c'est son rôle, mais il protégera moins la prochaine fois. » |
| « Reprendre l'argent du projet » | [projet] € ; ligne masquée si le projet n'existe pas, grisée si son solde est nul | « Le projet recule. » |
| « Reprendre la réserve assurance » | [solde de la réserve + part non suspendue du versement de décembre] € | « L'assurance auto devra être payée sans cette réserve. » |

*Disponible du coussin et de la réserve = solde actuel + part non suspendue du versement de décembre. Exemple de contrôle : coussin de 648 €, versement de 324 € dont 100 € suspendus → 648 + 224 = 872 € disponibles. Chaque curseur est plafonné au plus petit de deux montants : le disponible de cette réserve et ce qui reste à couvrir. Les retraits cumulés ne peuvent jamais dépasser R1. Aucun retrait n'est automatique.*

> « Repris : [Y] €. Il manque encore [R1 − Y] €. »
- Si tout le disponible est mobilisé et qu'il manque encore : « Même en mobilisant tout ce qui est possible, il manque [R2] €. »

**Bouton :** « Ne rien changer ».

**Portée des leviers du temps 2** (question repliée, « Seulement ce mois-ci » par défaut) :
> « Ce mois-ci, l'effet est le même dans les deux cas ; la différence apparaît dans son plan des mois suivants. »

**Si « Changer son plan habituel » libère une somme X :**
> « À partir du mois prochain, ce changement libère [X] € par mois. »

- Choix : « Laisser non affecté » (par défaut) / « Mettre de côté » dans le coussin ou dans le projet s'il existe, de 0 à [maximum] €.
- Si X vient du versement au coussin, le coussin est grisé :
  > « Cet argent vient du versement au coussin : il ne peut pas y retourner. »
- Texte de conséquence :
  - si A > 0 : « Tu en mets [A] € de côté dans [le coussin / le projet]. »
  - si X − A > 0 : « [X − A] € restent sur son compte, sans affectation. »

| Aperçu du plan habituel | Avant | Après |
|---|---|---|
| [Ligne réduite] | [ ] | [ − X] |
| [Objectif choisi] | [ ] | [ + A] |
| Non affecté | [ ] | [ + X − A] |
| **Total** | **[B]** | **[B]** |

> « Les mois où il reçoit [B] €, [X − A] € restent en plus sur son compte, au lieu de [X] € s'il n'avait rien mis de côté. »

**Si le versement à la réserve est suspendu durablement** ([réserve] = solde de la réserve fin décembre, après les éventuelles reprises) :
- suspension totale (versement habituel ramené à 0 €) :
  > « L'assurance auto (420 € par an) restera à payer : avec [réserve] € de côté, il faudra trouver [420 − réserve] € à l'échéance. »
- suspension partielle (des versements réduits continuent) :
  > « L'assurance auto (420 € par an) restera à payer : avec [réserve] € de côté, il faudra trouver jusqu'à [420 − réserve] € à l'échéance, selon les versements d'ici là. »

*Les changements durables se cumulent avec ceux de l'écran 10. Les mois après décembre ne sont pas simulés : seul l'aperçu du plan est montré.*

**Retours :**
- **Toujours :**
  > « Marc n'était pas obligé de garder son plan habituel. Réduire d'abord ce qui pouvait l'être protège ce qu'il a mis de côté. Toucher à la réserve de l'assurance déplace le problème. »
- **Base 1 280 € ou 1 585 € :**
  > « Ton choix de novembre se voit ici, dans ce que Marc peut mobiliser. »
- **Compte d'octobre resté négatif, sans réaction :**
  > « Réagir dès octobre aurait évité d'accumuler le manque. »
- **Réaffectation faite à l'écran 10 :**
  > « Mettre de côté ne change pas ce que Marc possède ; ça change ce qu'il risque de dépenser sans y penser. »
- **Réserves reprises alors que des dépenses pouvaient encore être réduites** (Y > 0 et Z > 0) :
  > « Il a repris [Y] € de ses réserves alors que [Z] € de dépenses pouvaient encore être réduits ce mois-ci. Les deux étaient permis : réduire ces dépenses aurait gardé cet argent de côté pour un prochain coup dur. »

  *Y = total des retraits de la voie 2. Z = (dépenses en plus en vigueur − réduction choisie) + (loisirs en vigueur − réduction choisie). Les versements non suspendus au coussin ou à la réserve ne sont pas comptés dans Z : les suspendre aurait le même effet sur les réserves qu'un retrait, le retour ne peut donc pas les présenter comme une meilleure solution.*

*Aucun marqueur de capacité ([Renvoi] R15 D5).*

**Passage :** « Continuer ».

### Écran 13 — Ce que tu emportes

**Objectif pédagogique :** nommer les gestes réutilisables, sans promettre d'outil ni de contenu indisponible.

**Titre :** « Ce que tu emportes »

> « Tu as aidé Amadou à bâtir un plan, à faire face à un imprévu et à préparer le mois suivant. Puis tu as appliqué la même méthode à Marc.
>
> Ce que tu peux réutiliser :
> - **organiser** ses ressources et ses dépenses avant le mois, et non après ;
> - **distinguer** ce qui est essentiel de ce qui peut attendre, quelle que soit la régularité de la dépense ;
> - **anticiper** les imprévus et les dépenses de l'année ;
> - **reconnaître** un plan qui n'est pas entièrement financé, avant que le compte ne le montre ;
> - **réagir** en regardant l'argent vraiment disponible, sans confondre le plan avec le solde ;
> - **choisir** si un changement vaut pour un mois ou devient une nouvelle habitude ;
> - **bâtir** son plan sur un revenu qu'on reçoit même les mois faibles.
>
> Pour ton propre budget, tu peux reprendre la même démarche sur papier, dans une note ou dans un tableau : ce qui entre, ce qui est essentiel, ce qui peut attendre, ce que tu mets de côté, et une part pour les imprévus. Élan ne te demande pas tes chiffres. »

**Renvois conditionnels** (affichés seulement si le contenu correspondant est publié, réserve §9) :
- « Comment fonctionnent un découvert et un paiement refusé » (Banque et finance).
- « Constituer une réserve de sécurité » (Gestion de l'argent).

*Aucun modèle de budget n'est promis tant qu'un modèle n'a pas été adapté et revalidé ([Renvoi] A1).*

**Choix :** « Terminer ».

---

## 7. Règles de calcul [Conception]

### 7.1 Amadou : plan, argent libre et projection

| Grandeur | Formule |
|---|---|
| Ressources retenues | 1 640 + K |
| Mis de côté le 1er | M = réserve + projet + épargne |
| Total du plan | T = 851 + C + S + V + M + I |
| Marge | m = 1 640 + K − T |
| Couverture des imprévus | Totale si m ≥ 0 ; partielle (I + m) si −I < m < 0 ; nulle si m ≤ −I |
| Compte le 15, avant la réparation | 723 − M − S/2 − V/2 |
| Reste à payer après le 15 | 222 + S/2 + V/2 |
| Argent libre le 15 (sans les cours) | L = 501 − M − S − V (indépendant de C, les courses réelles étant de 288 €) |
| Manque face à la réparation | max(0 ; 130 − L) |
| Somme trouvée | R = sorties réduites + vêtements réduits + 60 si le remboursement est décalé + reprises (épargne, réserve, projet) |
| Projection de fin de mois | L − 130 + 40 + R |
| Contrôle de conservation | 1 680 = dépenses payées + mis de côté net + solde final |

### 7.2 Calendrier de simulation d'Amadou [Décidé] règle unique

| N° | Règle |
|---|---|
| C1 | Dates fixes : salaire, salle de sport et virements le 1er ; transport le 2 ; logement le 3 ; énergie le 5 ; téléphone le 10 ; streaming le 18 ; cours +40 € le 20 ; sœur −60 € le 25, sauf si le remboursement est décalé. |
| C2 | Première quinzaine : courses 144 €, sorties S/2 et vêtements V/2, regroupées en un seul bloc le 15, avant les reprises puis la réparation. Aucune rentrée n'arrive entre le 2 et le 15 : un solde négatif dans ce bloc s'affiche « avant le 15 » (voir la précision de l'écran 6). |
| C3 | Courses de la seconde quinzaine : 40 € le 16, 32 € le 22, 36 € le 26, 36 € le 30. |
| C4 | Sorties restantes (S/2) réparties les 17, 23, 27 et 29, proportionnellement aux poids 30, 22, 30, 23. Vêtements restants (V/2) répartis les 19, 24 et 28, proportionnellement aux poids 1, 1, 2. |
| C5 | Arrondi à l'euro par la méthode des plus forts restes. Une égalité de restes est départagée au profit de la date la plus proche, c'est-à-dire la plus tôt dans le mois. Un reste de 0,50 € (montant saisi impair) va à la dernière date. |
| C6 | Réductions décidées à l'écran 5 : appliquées après la répartition, en partant des dates les plus tardives. Reprises datées du 15. |
| C7 | Premier jour de manque : premier jour où le solde, calculé ligne par ligne, passe sous zéro. Il n'est jamais déduit du solde final. |
| C8 | Remontée du solde : la cause affichée est le flux positif qui ramène le solde à zéro ou au-dessus, soit les reprises du 15 (« l'argent repris »), soit les cours du 20 (« les cours reçus »). |

### 7.3 Marc : notations et bornes

| Notation | Sens |
|---|---|
| B | Base choisie (1 280, 1 585 ou 1 900 €) |
| Cm, Im, Dm | Coussin, imprévus, dépenses en plus (réglages de l'étape 3) |
| NR | Non réparti initial = B − 1 076 − Cm − Im − Dm |
| d, l, c, r | Leviers : dépenses en plus, loisirs, coussin, réserve |
| Fc | Somme libérée durablement par d, l ou r, réaffectable au coussin ou au projet |
| Fnc | Somme libérée par la suspension durable du versement au coussin, réaffectable au projet seulement |
| A | Montant réaffecté par mois |
| NA | Non affecté mensuel du plan habituel |

| Étape | Bornes |
|---|---|
| Réglages de départ | Cm, Im, Dm ≥ 0 ; Cm + Im + Dm ≤ B − 1 076 |
| Octobre | Leviers seulement si 334 − Dm − Cm < 0 ; d ≤ Dm ; l ≤ 120 ; c ≤ Cm ; r ≤ 35 ; « durable » seulement pour un levier > 0 ; A ≤ Fc, vers le coussin seulement |
| Novembre | Choix obligatoire (i, ii ou iii) si B < 1 900 ; aucun choix si B = 1 900 |
| Décembre, voie 1 | Chaque levier ≤ sa ligne dans le plan en vigueur ; masqué si cette ligne vaut 0 € |
| Décembre, voie 2 | Seulement si R1 > 0 ; chaque reprise ≤ son disponible ; total des reprises ≤ R1 |
| Écran 12, durable | Vers le coussin : A ≤ Fc ; vers le projet (s'il a été créé) : total réaffecté ≤ Fc + Fnc |

### 7.4 Marc : formules

| Grandeur | Formule |
|---|---|
| Compte d'octobre avant réaction | 334 − Dm − Cm |
| Compte d'octobre après réaction | 334 − Dm − Cm + d + l + c + r (un éventuel surplus reste sur le compte) |
| Plan habituel à partir de novembre | Dépenses en plus = Dm − d durable ; loisirs = 120 − l durable ; réserve = 35 − r durable ; coussin = Cm − c durable + A(coussin) ; projet = A(projet) ; imprévus = Im ; NA = NR + Fc + Fnc − A |
| Contrôle du plan | Somme des lignes = B, aucune ligne négative |
| Somme à répartir en novembre | 1 900 − B (620 € ou 315 € ; 0 € pour la base 1 900 €) |
| Compte fin novembre | Compte fin octobre + Im + NA |
| Compte fin décembre si rien ne change | X = compte fin novembre + 900 − (dépenses du plan + 300) − versements du plan |
| Déficit initial de décembre | max(0 ; −X) |
| Manque restant après la voie 1 | R1 = max(0 ; déficit initial − réductions de la voie 1) |
| Disponible en voie 2 | Coussin : solde actuel + part non suspendue du versement de décembre ; réserve : même règle ; projet : solde. Contrôle : 648 + (324 − 100) = 872 € |
| Manque final | R2 = max(0 ; R1 − retraits) |
| Retour « réserves reprises » (écran 12) | Affiché si Y > 0 et Z > 0, avec Y = retraits de la voie 2 et Z = dépenses en plus et loisirs encore réductibles après les choix de la voie 1 |
| Contrôle de conservation | 4 210 = dépenses payées + coussin + réserve + projet + compte |

### 7.5 Réconciliation du cas L14 [Décidé]

**Cas :** base 1 900 €, marge entièrement en dépenses en plus (Dm = 824 €, Cm = 0, Im = 0, NR = 0) ; en octobre, renoncement durable aux 824 € de dépenses en plus ; réaffectation de 824 € par mois au coussin.

| Étape | Flux | Compte | Coussin | Réserve | Projet | Dépenses cumulées |
|---|---|---|---|---|---|---|
| Octobre | Salaire +1 410 € | 1 410 | 0 | 0 | 0 | 0 |
| | Sans réaction, le plan prévoyait 1 865 € de dépenses et 35 € de réserve : compte à −490 € | | | | | |
| | Réaction : 824 € de dépenses en plus évités. Dépenses de base et loisirs −1 041 € | 369 | 0 | 0 | 0 | 1 041 |
| | Réserve −35 € | **334** | 0 | 35 | 0 | 1 041 |
| 1er novembre | Plan habituel : dépenses en plus 0 € ; somme libérée 824 €/mois ; réaffectation 824 €/mois au coussin ; NA = 0 + 824 − 824 = 0 € | | | | | |
| Novembre | Revenu +1 900 €, dépenses −1 041 €, réserve −35 € | 1 158 | 0 | 70 | 0 | 2 082 |
| | Versement au coussin −824 € (réaffectation) | **334** | 824 | 70 | 0 | 2 082 |
| Décembre, si rien ne change | Revenu +900 €, réparation −300 €, dépenses −1 041 €, réserve −35 € | −142 | 824 | 105 | 0 | 3 423 |
| | Versement au coussin −824 € (réaffectation) | **−966** | 1 648 | 105 | 0 | 3 423 |

| Notion (§3) | Valeur dans L14 |
|---|---|
| Surplus ponctuel d'octobre | 334 € (824 € évités pour un manque de 490 €) ; il reste sur le compte |
| Non affecté mensuel du plan habituel | 0 € |
| Réaffectation volontaire | 824 € par mois au coussin, à partir de novembre : retirés du compte le 1er novembre, puis le 1er décembre |

**Conservation :** 3 423 + 1 648 + 105 + 0 − 966 = 4 210 €. Les 824 € d'octobre sont une dépense évitée, jamais versée. Les versements de novembre et de décembre sont deux flux distincts. Aucune somme n'est comptée deux fois.

**Neutralité de la réaffectation** (tous les autres choix étant identiques) :

| A | Compte fin novembre | Compte fin décembre | Coussin fin décembre | Compte + coussin |
|---|---|---|---|---|
| 0 € | 1 158 | 682 | 0 | 682 |
| 412 € | 746 | −142 | 824 | 682 |
| 824 € | 334 | −966 | 1 648 | 682 |

### 7.6 Contrôles réalisés pendant la conception [Explicatif]

- Calendrier d'Amadou : sommes réparties égales aux montants prévus pour tous les montants testés ; 300 000 parcours tirés avec contrôle de la projection, de la conservation et de la mention « avant le 15 », sans erreur.
- Marc : deux calculs indépendants (grand livre et formules) comparés sur 2 000 000 de parcours, avec bornes forcées ; contrôles de conservation, d'équilibre des plans, de neutralité des réaffectations et de plafonnement de la voie 2, sans erreur ; 18 cas limites et 15 saisies invalides vérifiés. Ces contrôles ne remplacent pas le contrôle automatique des calculs dans l'outil final (§9).

---

## 8. Valeurs de contrôle [Conception]

### 8.1 Amadou

| Situation | Valeurs |
|---|---|
| Dépenses fixes | 621 + 48 + 32 + 43 + 60 + 18 + 29 = 851 € |
| Plan esquissé, validé tel quel, rien changé le 15 | T = 1 659 € ; marge −19 € ; imprévus couverts à 41 € ; compte le 15 : 390 € puis 260 € ; argent libre 23 € ; manque 107 € ; 202 € le 20 ; 78 € le 25 ; premier manque le 28 (−8 €) ; solde final −67 € ; mis de côté 188 € |
| Plan esquissé, cours comptés à la moyenne | Marge affichée +73,50 € ; besoin de cours 19 € ; bloc cours « 0 < U ≤ 40 » ; marge réelle 1 640 + 40 − 1 659 = +21 € |
| Plan ajusté (sorties 170 €, vêtements 60 €, épargne 40 €) | T = 1 589 € ; marge +51 € ; argent libre 93 € ; manque 37 € ; compte le 15 : 430 € puis 300 € ; 250 € le 20 ; 133 € le 25 ; aucun manque ; solde final +3 € ; sorties de fin de mois 24 / 18 / 24 / 19 € ; vêtements 8 / 7 / 15 € |
| Plan esquissé, sorties −67 € et vêtements −40 € | Solde final +40 € ; aucun manque |
| Plan esquissé, remboursement décalé | Solde final −7 € ; premier manque le 30 |

### 8.2 Marc (choix de novembre précisé)

| Parcours | Octobre | Novembre | Décembre si rien ne change | Réserves fin décembre si rien ne change |
|---|---|---|---|---|
| 1 280 € réf. (coussin 100, imprévus 104), option i | 234 | 338 | −238 | Coussin 920, réserve 105 |
| 1 280 € réf., option ii | 234 | 338 | −238 | Coussin 600, projet 200, réserve 105 |
| 1 280 € réf., option iii | 234 | 338 | −238 | Coussin 300, réserve 105 |
| 1 585 € réf. (dépenses en plus 300, imprévus 209), option i | 34 | 243 | −533 | Coussin 315, réserve 105 |
| 1 585 € réf., option ii | 34 | 243 | −533 | Coussin 150, projet 100, réserve 105 |
| 1 585 € réf., option iii | 34 | 243 | −533 | Coussin 0, réserve 105 |
| 1 900 € réf. (dépenses en plus 500, coussin 324), sans réaction | −490 | −490 | −1 790 | Coussin 972, réserve 105 |
| 1 900 € réf., réaction ponctuelle (500 € évités) | 10 | 10 | −1 290 | Coussin 972, réserve 105 |
| 1 900 € réf., réaction durable, A = 0 | 10 | 510 | −290 | Coussin 972, réserve 105 |
| 1 900 € réf., réaction durable, A = 250 | 10 | 260 | −790 | Coussin 1 472, réserve 105 |
| 1 900 € réf., réaction durable, A = 500 | 10 | 10 | −1 290 | Coussin 1 972, réserve 105 |
| L14 (§7.5) | 334 | 334 | −966 | Coussin 1 648, réserve 105 |

---

## 9. Réserves de publication [Réserve]

Ces réserves ne bloquent pas la conception. Elles doivent être levées avant publication.

| N° | Réserve | Écrans concernés |
|---|---|---|
| R-1 | **Sources réglementaires sur le découvert et les paiements refusés,** à établir après la réforme du 20 novembre 2026. Les textes actuels restent conditionnels (« selon les conditions de sa banque »). | 6, 8, 10, 12, 13 |
| R-2 | **Source des Points conseil budget,** à revérifier (référentiel §6). | 9 |
| R-3 | **Dates d'échéance des dépenses annuelles** d'Amadou et de l'assurance auto de Marc : non définies. Les textes donnent un montant, jamais une date. | 4, 7, 12 |
| R-4 | **Existence et titres définitifs des contenus de renvoi** (découvert et paiement refusé ; réserve de sécurité). Les renvois ne s'affichent que si les contenus sont publiés. | 13 |
| R-5 | **Pas des réglages et des curseurs d'interface** (à l'euro, par 5 € ou par 10 €). Choix d'interface sans effet sur les règles de calcul. | 4, 5, 10, 11, 12 |
| R-6 | **Classification M2** des éléments interactifs (fiches des points d'entrée, liste minimale). Tant qu'elle n'est pas faite, la règle de doute s'applique et aucune progression n'est possible ([Renvoi] M2 §7). Sujet distinct de R-7. | 4 (déclencheur) |
| R-7 | **Conservation du plan validé au-delà de l'expérience** ([Renvoi] R15 O1, M3) : à concevoir. Pendant l'expérience, le plan n'est utilisé que temporairement. Sujet distinct de R-6. | 4 à 8 |

---

## 10. Points d'attention vis-à-vis des documents de référence [Explicatif]

Aucune contradiction n'impose de modifier ce document ou une décision validée. Trois formulations sont à garder en vue :

1. **Référentiel §7.1 :** « Les modules A1 à A3 sont validés. » L'arbitrage A1 de cette conception traite les contenus de l'ancien programme comme une source éditoriale à revalider. Les deux formulations ne portent pas sur le même objet : le référentiel décrit un programme existant, l'arbitrage A1 fixe la manière de l'utiliser dans `elan-v2`. Aucun texte de l'ancien programme n'est repris ici. Ce point est tranché par l'arbitrage transversal 9 (FR1) : les cinq dimensions et les quarante sous-domaines constituent la seule structure métier actuelle du P1 ; les anciens modules sont une classification éditoriale historique.
2. **Référentiel §13.2 :** le premier usage des parcours guidés et le périmètre fonctionnel précis de chaque expérience phare restent à arbitrer. Ce document décrit une conception ; il ne tranche ni l'un ni l'autre (§1).
3. **Référentiel §4.9 :** la simulation numérique doit distinguer formules, hypothèses, résultats estimatifs et limites. L'expérience respecte cette distinction (§4, §7, précision de l'écran 6, projection présentée comme une estimation), sans désigner pour autant le premier usage du moteur.

---

Fin du document EP1 — consolidation du 9 novembre 2026.
