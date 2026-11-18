# EP1 — Manuscrit éditorial : « Construire son premier budget »

- **Statut :** manuscrit éditorial proposé, soumis à la validation du fondateur. Il rédige les textes destinés à l'utilisateur ; il ne crée aucune règle. La conception de référence reste EP1 (`docs/decisions/EP1-experience-phare-construire-son-premier-budget.md`), qui prévaut en cas d'écart.
- **Date de rédaction :** 11 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`), pilier 1 — Gestion de l'argent.
- **Documents liés :** EP1 (conception), R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), documents de référence de `docs/reference/`.

---

## 0. Mode d'emploi

### Conventions

| Notation | Sens |
|---|---|
| « … » | Texte affiché à l'utilisateur, à reprendre tel quel |
| [valeur] | Valeur calculée selon EP1 §7 ; entre parenthèses, l'exemple du parcours de référence |
| *Italique* | Note pour le design ou l'intégration, jamais affichée |
| **V4.2** | Identifiant d'une variante conditionnelle (écran 4, variante 2) |
| **[R-n]** | Texte concerné par une réserve de publication d'EP1 §9 |

### Choix éditoriaux constants

- **Adresse :** les consignes s'adressent à l'utilisateur (« tu ») ; les situations, plans et résultats sont ceux d'Amadou et de Marc (« il », « son plan »). L'utilisateur agit pour eux ; il ne parle jamais de sa propre situation.
- **Vocabulaire des montants,** identique sur tous les écrans (EP1 §3) :

| Terme affiché | Sens |
|---|---|
| « prévu » | inscrit dans le plan |
| « dépensé » | déjà payé |
| « sur le compte » | solde réel du compte courant |
| « argent libre » | solde moins ce qui reste à payer jusqu'à la fin du mois |
| « mis de côté » | transféré sur un autre compte |
| « projection » | estimation de fin de mois |
| « non affecté » | part du plan sans destination, qui reste sur le compte |
| « plan habituel » | répartition que Marc applique chaque mois tant que rien ne l'oblige à changer |

- **Montants :** espace insécable avant « € », séparateur de milliers par espace (« 1 640 € »), virgule décimale (« 92,50 € »). Signe « − » affiché pour un solde négatif.
- **Aucun texte de félicitation, score ou récompense.** Les retours décrivent des conséquences.

### Harmonisations par rapport aux textes d'EP1

Ces ajustements de formulation ne changent ni les règles ni les montants :

| Écran | Texte d'EP1 | Texte du manuscrit | Raison |
|---|---|---|---|
| 4 | « Tes [I] € d'imprévus sont entièrement couverts. » | « Ses [I] € d'imprévus sont entièrement couverts. » | Ce sont les imprévus d'Amadou (adresse constante) |
| 5 | « Ton plan en comptait [K] € » | « Son plan en comptait [K] € » | Idem |
| 8 | « Ton plan habituel, à partir de décembre » | « Son plan habituel, à partir de décembre » | Idem |
| 12 | « Tu en mets [A] € de côté » | « Marc en met [A] € de côté » | Idem |

---

## Écran 1 — Le mois d'Amadou

**Titre :** « Le mois d'Amadou »

**Introduction :**
> « Amadou a 23 ans. Il vient de signer son premier CDI de technicien de maintenance et vit seul dans un studio.
>
> Le mois dernier, le 20, il ne lui restait presque rien, sans vraiment savoir où son argent était passé.
>
> En octobre, il veut décider à l'avance à quoi servira chaque euro. Aide-le à préparer son mois, puis regarde ce qui se passe vraiment. »

**Mention :**
> « Situation fictive : tu ne saisis aucune donnée te concernant. »

**Carte « Ce qu'Amadou sait déjà » :**
> « Salaire : 1 640 €, versé le 1er. »
>
> « Cours de soutien le week-end, ces quatre derniers mois : 160 €, 0 €, 90 €, 120 €. »
>
> « Ce qu'il a dépensé le mois dernier : tu le verras à l'étape suivante. »
>
> « Un projet : remplacer son ordinateur dans 4 mois (400 €). »
>
> « Chaque année : cadeaux de fin d'année 150 €, entretien du vélo 60 €, séjour d'été en famille 240 €. »

**Transition :** bouton « Commencer ».

---

## Écran 2 — Ce qui va entrer

**Titre :** « Ce qui va entrer »

**Introduction :**
> « Le 1er, son salaire arrive : 1 640 €. Les cours de soutien, eux, changent chaque mois. »

**Détail replié — « Ses cours ces quatre derniers mois » :**
> « 160 €, 0 €, 90 €, 120 €. En moyenne : 92,50 € par mois. »

**Consigne :**
> « Combien Amadou compte-t-il de cours dans son plan d'octobre ? »

**Choix** (un seul, aucun présélectionné) :
- « Ne pas compter les cours : son plan part de 1 640 €. »
- « Compter la moyenne, 92,50 € : son plan part de 1 732,50 €. »
- « Compter son meilleur mois, 160 € : son plan part de 1 800 €. »

**Retour :**

| Code | Condition | Texte |
|---|---|---|
| V2.1 | Choix fait | « C'est noté : son plan part de [1 640 + K] €. Tu verras à la fin du mois ce que ce choix change. » |

**Aide :**

| Code | Condition | Texte |
|---|---|---|
| V2.2 | « Continuer » sans choix | « Choisis une option pour continuer. » |

**Transition :** bouton « Continuer ».

*Retour possible depuis l'écran 4 (lien « Changer » sur la ligne des ressources).*

---

## Écran 3 — Ce que coûte un mois

**Titre :** « Ce que coûte un mois »

**Introduction :**
> « Pour chaque dépense, tu vois si elle revient au même montant chaque mois ou si elle varie. Mais une dépense régulière n'est pas forcément indispensable. »

**Six cartes déjà décrites** (lien « Pourquoi ? » sur chaque carte) :

| Carte | Régularité | Priorité | « Pourquoi ? » |
|---|---|---|---|
| « Logement (loyer et assurance), 621 € » | « Le 3, même montant » | « Essentielle » | « Un toit, chaque mois. » |
| « Énergie, 48 € » | « Le 5, mensualité fixe » | « Essentielle » | « Une régularisation peut arriver une fois par an. » |
| « Téléphone et internet, 32 € » | « Le 10, même montant » | « Essentielle » | « Il en a besoin pour travailler. » |
| « Transport, 43 € » | « Le 2, abonnement » | « Essentielle » | « Pour aller travailler. » |
| « Salle de sport, 29 € » | « Le 1er, sans engagement » | « Peut passer après » | « Résiliable pour le mois suivant. » |
| « Sorties » | « Varie : 210 € le mois dernier » | « Peut passer après » | « Ça compte pour lui, mais ça peut attendre. » |

**Consigne :**
> « Pour ces quatre dépenses, c'est à toi de dire si elles sont essentielles ou si elles peuvent passer après. »

**Quatre cartes à classer** (boutons « Essentielle » / « Peut passer après », aucun présélectionné) :
- « Streaming, 18 € : le 18, même montant. »
- « Courses et produits du quotidien : varie, 270 € le mois dernier. »
- « Remboursement à sa sœur : 60 € chaque mois, le 25, par virement. Elle lui a avancé sa caution. Ce remboursement est prévu tous les mois ; s'il en a besoin, Amadou peut lui demander de le décaler. »
- « Vêtements : varie, 80 € le mois dernier. »

**Bouton :** « Voir ce que ça donne ».

**Retours :**

| Code | Carte et réponse | Texte |
|---|---|---|
| V3.1 | Streaming — Essentielle | « Il revient au même montant, mais Amadou peut s'en passer : c'est une dépense fixe qui peut passer après. Il ne pourra l'arrêter qu'à partir de novembre. » |
| V3.2 | Streaming — Peut passer après | « Oui : fixe, mais pas indispensable. Il pourra l'arrêter à partir de novembre. » |
| V3.3 | Courses — Peut passer après | « Le montant varie, mais il faut manger chaque mois : c'est une dépense variable essentielle. Il peut changer sa façon d'acheter, pas supprimer le besoin. » |
| V3.4 | Courses — Essentielle | « Oui : elle varie, mais elle est indispensable. » |
| V3.5 | Sœur — Essentielle | « Ça se défend : c'est un engagement, au même montant chaque mois. » |
| V3.6 | Sœur — Peut passer après | « Ça se défend aussi, à condition de ne rien décaler sans la prévenir. Le virement part le 25 : d'ici là, il peut lui en parler. » |
| V3.7 | Vêtements — l'une ou l'autre | « Ça se défend dans les deux sens : essentiel s'il a un vrai besoin ce mois-ci, comme des chaussures de travail usées ; sinon, ça peut souvent attendre. » |

**Aide :**

| Code | Condition | Texte |
|---|---|---|
| V3.8 | « Voir ce que ça donne » avec des cartes non classées | « Il te reste [n] carte(s) à classer. » |

**Transition :** bouton « Continuer ».

---

## Écran 4 — Le plan d'octobre

**Titre :** « Le plan d'octobre »

**Introduction :**
> « Amadou a commencé son plan : d'un côté ce qu'il a dépensé le mois dernier, de l'autre ce qu'il voudrait faire en octobre. »

**Consigne :**
> « Modifie ce qui te semble nécessaire, ou garde-le tel quel, puis valide-le. »

**Tableau « Plan esquissé par Amadou » :**

| Libellé affiché | Montant | Action |
|---|---|---|
| « Ressources retenues » | [1 640 + K] € | Lien « Changer » (retour à l'écran 2) |
| *Intertitre :* « Ce qu'il a dépensé le mois dernier » | | |
| « Dépenses fixes » | 851 € | Non modifiable : « Ces prélèvements d'octobre sont déjà prévus. » |
| « Courses » | 270 € | Modifiable |
| « Sorties » | 210 € | Modifiable |
| « Vêtements » | 80 € | Modifiable |
| *Intertitre :* « Ce qu'il voudrait faire en octobre » | | |
| « Réserve pour les dépenses de l'année » | 38 € | Modifiable |
| « Projet ordinateur » | 100 € | Modifiable |
| « Épargne du mois » | 50 € | Modifiable |
| « Imprévus » | 60 € | Modifiable |
| « Total du plan » | [T] € (1 659 €) | |
| « Marge » | [1 640 + K − T] € (−19 €) | |

**Détails repliés :**
- « Détail des dépenses fixes » : « Logement 621 €, transport 43 €, énergie 48 €, téléphone 32 €, salle de sport 29 €, streaming 18 €, remboursement à sa sœur 60 €. »
- « Pourquoi 38 € de réserve ? » : « 150 + 60 + 240 = 450 € par an, soit 37,50 € par mois, arrondis à 38 €. »

**Aide permanente :**
> « La réserve, le projet et l'épargne partent le 1er sur un autre compte. Les imprévus et la marge restent sur le compte courant. »

**Message de marge** (mis à jour à chaque modification ; m = marge, I = imprévus prévus) :

| Code | Condition | Texte |
|---|---|---|
| V4.1 | m ≥ 0 et K = 0 | « Marge : +[m] €. Cet argent reste sur le compte, sans affectation. » Si I > 0, ajouter : « Ses [I] € d'imprévus sont entièrement couverts. » |
| V4.2 | m ≥ 0 et K > 0, T ≤ 1 640 | « Marge : +[m] €, en comptant [K] € de cours qui ne sont pas encore arrivés. Avec son salaire seul (1 640 €, déjà reçu), le plan laisse +[1 640 − T] €. » |
| V4.3 | m ≥ 0 et K > 0, T > 1 640 | « Marge : +[m] €, en comptant [K] € de cours qui ne sont pas encore arrivés. Avec son salaire seul, le plan dépasse de [T − 1 640] € : il a besoin d'au moins [T − 1 640] € de cours pour être financé. » |
| V4.4 | −I < m < 0 | « Marge : −[|m|] €. Le plan prévoit [|m|] € de plus que les ressources retenues. Ce n'est pas un découvert : c'est un plan qui n'est pas entièrement financé. Ses [I] € d'imprévus ne sont couverts qu'à hauteur de [I + m] €. » (exemple : −19 €, couverts à hauteur de 41 €) |
| V4.5 | m ≤ −I et I > 0 | « Marge : −[|m|] €. Le plan prévoit [|m|] € de plus que les ressources retenues. Ce n'est pas un découvert : c'est un plan qui n'est pas entièrement financé. Ses [I] € d'imprévus ne sont pas couverts du tout. » Si m < −I, ajouter : « Et [−m − I] € d'autres lignes de son plan ne le sont pas non plus. » |
| V4.6 | m < 0 et I = 0 | « Marge : −[|m|] €. Le plan prévoit [|m|] € de plus que les ressources retenues. Ce n'est pas un découvert : c'est un plan qui n'est pas entièrement financé. Son plan ne prévoit pas d'imprévus, et [|m|] € de ses lignes ne sont pas financés. » |
| V4.7 | m < 0 et K > 0 (en complément de V4.4 à V4.6) | « Les ressources retenues comptent déjà [K] € de cours qui ne sont pas encore arrivés. » |

**Bouton :** « Valider ce plan ».

**Confirmation :**

| Code | Condition | Texte et boutons |
|---|---|---|
| V4.8 | Marge négative au moment de valider | « La marge de ce plan est de −[|m|] €. Tu peux le garder tel quel ou le modifier. » — Boutons : « Garder ce plan » · « Revenir au plan » |

**Retour après validation :**
> « Plan validé. Voyons comment se passe le mois. »

**Aide et erreurs :**

| Code | Condition | Texte |
|---|---|---|
| V4.9 | Saisie d'un montant négatif | « Ce montant ne peut pas être négatif. » |

**Transition :** automatique après le retour de validation, ou bouton « Continuer ».

*La validation (confirmée si la marge est négative) déclenche « Première exploration ». Aucun texte ne l'annonce à l'utilisateur sur cet écran (aucune gamification).*

---

## Écran 5 — Le 15 octobre

**Titre :** « Le 15 octobre »

**Introduction :**
> « Le 15 octobre, l'écran du téléphone d'Amadou casse. Il en a besoin pour son travail. La réparation coûte 130 €, à payer aujourd'hui. »

### Temps 1 — « Où en est son compte »

> « Sur le compte aujourd'hui : [723 − M − S/2 − V/2] € » (390 €)
>
> « Mis de côté le 1er sur l'autre compte : [M] € » (188 €)
>
> « D'ici la fin du mois, il reste à payer : [222 + S/2 + V/2] € » (367 €)

**Détail replié — « Ce qui reste à payer » :**
> « Streaming 18 € (le 18), remboursement à sa sœur 60 € (le 25), courses 144 €, sorties [S/2] €, vêtements [V/2] €. »

**Ligne courses :**

| Code | Condition | Texte |
|---|---|---|
| V5.1 | C/2 < 144 | « Courses : 144 € déjà dépensés au lieu de [C/2] € prévus. Amadou compte le même écart d'ici la fin du mois. » (exemple : 135 € prévus) |
| V5.2 | C/2 = 144 | « Courses : 144 € dépensés, comme prévu. » |
| V5.3 | C/2 > 144 | « Courses : 144 € dépensés, soit [C/2 − 144] € de moins que prévu. Amadou compte le même rythme d'ici la fin du mois. » |

**Ligne cours :**

| Code | Condition | Texte |
|---|---|---|
| V5.4 | Toujours | « Les cours ne sont pas encore arrivés. » |
| V5.5 | K > 0 (en complément) | « Son plan en comptait [K] € : rien n'est arrivé pour l'instant. » |

### Temps 2 — « Ce qui est vraiment libre »

> « Argent libre aujourd'hui : [L] € » (23 €)
>
> « Les cours ne sont pas comptés : ils ne sont pas encore arrivés. »
>
> « Réparation : 130 € »

**Ligne imprévus** (seulement si I > 0) :

| Code | Condition | Texte |
|---|---|---|
| V5.6 | L ≥ I | « Ses [I] € d'imprévus font partie de cet argent libre : c'est à ça qu'ils servent. » |
| V5.7 | 0 < L < I | « Ses [I] € d'imprévus font partie de cet argent libre, mais il n'en reste que [L] € : le reste de son plan et ses dépenses du mois en ont déjà absorbé une partie. » (exemple : 60 € prévus, 23 € restants) |
| V5.8 | L ≤ 0 | « Ses [I] € d'imprévus étaient comptés dans cet argent libre, mais il n'en reste rien aujourd'hui. » |

**Face à la réparation :**

| Code | Condition | Texte |
|---|---|---|
| V5.9 | L ≥ 130 | « L'argent libre suffit à payer la réparation. » |
| V5.10 | 0 ≤ L < 130 | « L'argent libre ([L] €) ne suffit pas : il manque [130 − L] €. » (exemple : il manque 107 €) |
| V5.11 | L < 0 | « Même sans la réparation, il manquerait [|L|] € pour finir le mois. Avec la réparation, il manque [130 − L] €. » |

### Temps 3 — « Comment trouver le reste »

**Consigne :**

| Code | Condition | Texte |
|---|---|---|
| V5.12 | Un manque existe | « Choisis un ou plusieurs moyens, ou ne change rien et regarde ce qui se passe. » |
| V5.13 | Aucun manque (L ≥ 130) | « Rien ne l'oblige à changer quoi que ce soit. Tu peux quand même utiliser un de ces moyens, ou ne rien changer. » |

**Moyens** (curseurs à 0 € au départ, aucun présélectionné) :

| Libellé | Maximum affiché | Conséquence affichée |
|---|---|---|
| « Sortir moins d'ici la fin du mois » | « jusqu'à [S/2] € » | « Dépense réellement évitée ; rien à rattraper. » |
| « Reporter un achat de vêtements » | « jusqu'à [V/2] € » | « Dépense réellement évitée ; rien à rattraper. » |
| « Demander à sa sœur de décaler le remboursement d'octobre » | « 60 €, en une fois » | « Elle accepte s'il la prévient aujourd'hui. En novembre, il lui devra 120 €, ou un étalement convenu avec elle. » |
| « Reprendre de l'épargne du mois » | « jusqu'à [E] € » | « L'épargne d'octobre baisse d'autant. » |
| « Reprendre la réserve des dépenses de l'année » | « jusqu'à [réserve prévue] € » | « À reconstituer avant ces dépenses. » |
| « Reprendre l'argent du projet ordinateur » | « jusqu'à [projet prévu] € » | « L'achat sera retardé. » |
| « Arrêter le streaming » *(grisé)* | — | « Ne peut être arrêté qu'en novembre. » |
| « Ne pas payer la salle de sport » *(grisé)* | — | « Déjà prélevée le 1er. » |

**Résumé en direct :**

| Code | Condition | Texte |
|---|---|---|
| V5.14 | Un manque existe | « Trouvé : [R] € sur [manque] €. » |
| V5.15 | Aucun manque | « Aucun manque à couvrir. » |
| V5.16 | R dépasse le manque (en complément) | « [R − manque] € de plus que nécessaire : ils restent sur le compte. » |
| V5.17 | Toujours | « Projection de fin de mois : vers [L − 130 + 40 + R] €. Dans cette simulation, 40 € de cours arriveront le 20 : ils sont comptés ici comme une rentrée attendue, pas comme de l'argent disponible. Aucun autre cours n'est compté. » (exemple sans action : vers −67 €) |

**Boutons :** « Payer la réparation ainsi » · « Ne rien changer ».

**Confirmation, seulement si le manque n'est pas entièrement couvert :**

| Code | Condition | Texte et boutons |
|---|---|---|
| V5.18 | Projection négative | « Il manque encore [Y] €. Même avec les 40 € de cours du 20, le compte finirait le mois en dessous de zéro, vers [projection] €. » — Boutons : « Continuer ainsi » · « Revenir » |
| V5.19 | Projection positive ou nulle | « Il manque encore [Y] € par rapport à l'argent libre d'aujourd'hui. Avec les 40 € de cours du 20, le compte finirait le mois vers [projection] €. » — Boutons : « Continuer ainsi » · « Revenir » |

**Aide :**

| Code | Condition | Texte |
|---|---|---|
| V5.20 | Curseur au maximum | « C'est le maximum possible pour ce moyen. » |

**Transition :** après « Payer la réparation ainsi » ou « Ne rien changer » (et la confirmation éventuelle), passage à l'écran 6.

---

## Écran 6 — Fin octobre

**Titre :** « Fin octobre »

**Introduction :**
> « Voici le mois d'Amadou, tel qu'il s'est vraiment passé. »

**Carte principale :**
> « Sur le compte fin octobre : [solde] € » (−67 €)
>
> « Mis de côté : [M − reprises] € — réserve [ ] €, projet [ ] €, épargne [ ] € » (188 € : 38 €, 100 €, 50 €)

| Code | Condition | Texte |
|---|---|---|
| V6.1 | Remboursement fait | « Dû à sa sœur : 0 € » |
| V6.2 | Remboursement décalé | « Dû à sa sœur : 60 € » |
| V6.3 | Aucun manque dans le mois | « Premier jour où le solde ne suffit pas : aucun » |
| V6.4 | Premier manque après le 15 | « Premier jour où le solde ne suffit pas : le [jour] ([montant] €) » (exemple : le 28, −8 €) |
| V6.5 | Premier manque dans la première quinzaine | « Premier jour où le solde ne suffit pas : avant le 15 ([montant] €) » |

**Message si le solde passe sous zéro à un moment du mois** (toujours dans la carte principale, jamais replié) [R-1] :

| Code | Condition | Texte |
|---|---|---|
| V6.6 | Premier manque après le 15 | « Si tous les paiements passaient, son compte serait à [solde] € à la fin du mois. Le solde ne suffirait plus à partir du [jour] ([montant] €). Selon les conditions de sa banque, un paiement pourrait être refusé ou le compte passer à découvert, avec des frais possibles. » |
| V6.7 | Premier manque dans la première quinzaine | « Si tous les paiements passaient, son compte serait à [solde] € à la fin du mois. Le solde ne suffirait plus avant le 15 ([montant] €). Selon les conditions de sa banque, un paiement pourrait être refusé ou le compte passer à découvert, avec des frais possibles. » |
| V6.8 | Le solde remonte grâce aux cours | « Le solde a été insuffisant du [jour] au [jour]. Il est remonté le 20 (les cours reçus). » |
| V6.9 | Le solde remonte grâce aux reprises | « Le solde a été insuffisant avant le 15. Il est remonté le 15 (l'argent repris). » |

*V6.8 et V6.9 complètent V6.6 ou V6.7. Si le manque commence dans la première quinzaine et que le solde remonte avec les cours, V6.8 devient : « Le solde a été insuffisant d'avant le 15 au [jour]. Il est remonté le 20 (les cours reçus). »*

**Détail replié — « Le mois jour par jour » :**

| Libellé | Valeur (exemple) |
|---|---|
| « Le 15, avant la réparation » | [ ] € (390 €) |
| « Le 15, après la réparation » | [ ] € (260 €) |
| « Le 20, après les cours » | [ ] € (202 €) |
| « Le 25, après le remboursement » — ou, si décalé : « Le 25, sans remboursement ce mois-ci » | [ ] € (78 €) |
| « Fin du mois » | [ ] € (−67 €) |

> « Dans cette simulation, les dépenses de la première quinzaine sont regroupées au 15. »

**Détail replié — « Prévu et réel, ligne par ligne » :** colonnes « Prévu » et « Réel », une ligne par poste du plan, plus « Réparation » (prévu : 0 €, réel : 130 €) et « Cours » (prévu : [K] €, réel : 40 €).

**Transition :** bouton « Continuer ».

---

## Écran 7 — Ce que montrent ses choix

**Titre :** « Ce que montrent ses choix »

*Un à quatre blocs, toujours dans cet ordre : cours, marge, courses, sources. U = min(K ; max(0 ; T − 1 640)).*

**Bloc cours** (un seul texte) :

| Code | Condition | Texte |
|---|---|---|
| V7.1 | K > 0 et U > 40 | « Son plan comptait sur [U] € de cours pour financer ses dépenses au-delà de son salaire. Seuls 40 € sont arrivés, le 20. Les [U − 40] € qui manquaient n'ont jamais été sur son compte : ils pèsent sur la fin du mois. » |
| V7.2 | K > 0 et 0 < U ≤ 40 | « Son plan comptait [K] € de cours ; 40 € sont arrivés, soit [K − 40] € de moins. Le plan n'en avait besoin que de [U] € : cette fois, l'écart n'a pas créé de manque. Mais la marge affichée (+[1 640 + K − T] €) supposait ces [K] € ; avec les 40 € reçus, elle n'était que de [1 640 + 40 − T] €. » |
| V7.3 | K > 0 et T ≤ 1 640 | « Son salaire suffisait à financer son plan : il n'avait pas besoin des cours. Les 40 € arrivés le 20 sont venus en plus et ont augmenté son solde de 40 €, même si le plan en comptait [K]. » |
| V7.4 | K = 0 | « Les 40 € de cours sont arrivés le 20 sans avoir été prévus : ils ont amorti la fin du mois. » |

**Bloc marge** (seulement si la marge affichée à l'écran 4 était négative). Phrase d'ouverture, toujours :
> « Son plan avait une marge de −[|m|] € : ses intentions dépassaient ses ressources. Ce n'était pas encore un découvert. »

Puis une phrase sur les imprévus et une sur l'argent libre :

| Code | Condition | Texte |
|---|---|---|
| V7.5 | −I < m < 0 | « Ses imprévus n'étaient couverts qu'en partie ([I + m] € sur [I] €). » |
| V7.6 | m ≤ −I et I > 0 | « Ses imprévus n'étaient pas couverts du tout. » |
| V7.7 | I = 0 | « Il n'avait rien prévu pour les imprévus. » |
| V7.8 | 0 ≤ L < 130 | « Le jour de la réparation, il ne restait que [L] € de libres. » |
| V7.9 | L ≥ 130 | « Le jour de la réparation, il restait [L] € de libres. » |
| V7.10 | L < 0 | « Le jour de la réparation, il manquait déjà [|L|] € pour finir le mois. » |

**Bloc courses** (un seul texte) :

| Code | Condition | Texte |
|---|---|---|
| V7.11 | C < 270 | « Baisser la ligne des courses à [C] € n'a pas réduit le besoin : elles ont coûté 288 €. Les [288 − C] € d'écart ont été pris ailleurs dans le mois. » |
| V7.12 | C = 270 | « Les courses ont coûté 288 €, soit 18 € de plus que prévu, en deux fois. Un écart n'est pas une faute : c'est une information pour le mois suivant. » |
| V7.13 | 270 < C < 288 | « Les courses ont coûté 288 €, soit [288 − C] € de plus que les [C] € prévus. Prévoir un peu plus que le mois dernier a réduit l'écart, sans le supprimer. » |
| V7.14 | C = 288 | « Les courses ont coûté 288 €, exactement le montant prévu. » |
| V7.15 | C > 288 | « Les courses ont coûté 288 €, soit [C − 288] € de moins que les [C] € prévus. Cette somme n'a pas été dépensée : elle est restée sur le compte. » |

**Bloc sources** (une phrase par moyen utilisé à l'écran 5, ou V7.21 si le manque n'a pas été couvert) :

| Code | Condition | Texte |
|---|---|---|
| V7.16 | Sorties ou vêtements réduits | « Moins de sorties, un achat reporté : ces dépenses pouvaient attendre, et rien ne reste à rattraper. » |
| V7.17 | Remboursement décalé | « Le remboursement décalé a libéré 60 € ce mois-ci. En novembre, il doit 120 € à sa sœur, ou un étalement convenu. » |
| V7.18 | Épargne reprise | « Reprendre [X] € d'épargne a protégé le compte : l'épargne du mois tombe à [E − X] €. Un mois comme celui-ci, la réduire se défend. » |
| V7.19 | Réserve reprise | « La réserve sert aux cadeaux de fin d'année, à l'entretien du vélo et au séjour d'été : elle devra être reconstituée avant ces dépenses. » |
| V7.20 | Projet repris | « L'ordinateur attendra : il manque [X] € au projet. » |
| V7.21 | Manque non couvert | « Rien n'a été changé pour couvrir le manque : il s'est reporté sur la fin du mois. » |

**Option facultative :** bouton « Et si… ? »
> « Rejouer le 15 octobre avec le même plan. Ce rejeu ne change rien à la suite : novembre part du mois réellement joué. »

*À la fin du rejeu, bouton « Revenir au mois joué ». Rien n'est conservé, rien n'est redéclenché.*

**Transition :** bouton « Continuer ».

---

## Écran 8 — Préparer novembre

**Titre :** « Préparer novembre »

### Partie 1 — « Où en est Amadou le 31 octobre »

> « Sur le compte : [solde] € »
>
> « Mis de côté : réserve [ ] €, projet [ ] €, épargne d'octobre [ ] € »
>
> « Octobre a montré : courses 288 € pour [C] € prévus ; imprévus utilisés. »

| Code | Condition | Texte |
|---|---|---|
| V8.1 | Remboursement fait | « Encore dû à sa sœur : 0 € » |
| V8.2 | Remboursement décalé | « Encore dû à sa sœur : 60 € » |
| V8.3 | Solde négatif [R-1] | « Le compte commence novembre à −[X] €. Des frais ont pu s'ajouter selon les conditions de sa banque : ils ne sont pas comptés ici. » |

### Partie 2 — « Le plan de novembre »

**Consigne :**
> « Chaque ligne reprend le plan d'octobre. Garde-la ou change-la. Pour chaque changement, choisis s'il vaut pour novembre seulement ou pour les mois suivants aussi. »

**Lignes touchées par octobre** (affichées d'emblée) :

| Ligne | Libellés |
|---|---|
| « Compte au 31 octobre » | « [solde] € » (non modifiable) |
| « Cours comptés pour novembre » | « 0 € » · « 92,50 € » · « 160 € » (aucun présélectionné) |
| « Courses » | « Garder [C] € » · « Prévoir 288 € pour novembre seulement » · « Prévoir 288 € — à conserver les mois suivants » |
| « Remboursement à sa sœur » (si décalé) | « Lui rembourser 120 € en novembre » · « Étaler avec elle : 90 € en novembre et 90 € en décembre, puis retour à 60 € » |
| « Projet ordinateur » (si repris) | « Rattraper [reprise] € en novembre seulement » · « Garder 100 € par mois et décaler l'achat » · « Suspendre en novembre seulement » · « Suspendre — à conserver les mois suivants » |
| « Réserve pour les dépenses de l'année » (si reprise) | « La reconstituer en novembre (+[reprise] €) » · « Ne rien changer » |
| « Épargne du mois » (si reprise) | « La compenser en novembre (+[reprise] €) » · « Ne rien changer » |

**Section repliable — « Autres lignes ([n] modifiée(s)) » :**

| Ligne | Libellés |
|---|---|
| « Streaming » | « Le garder » · « L'arrêter — à conserver les mois suivants » |
| « Salle de sport » | « La garder » · « Ne pas la payer en novembre seulement » · « La résilier — à conserver les mois suivants » |
| « Imprévus », « Sorties », « Vêtements » | Nouveau montant, puis « Pour novembre seulement » · « À conserver les mois suivants » ; ou « Garder » |

**Retour en direct :**

| Code | Condition | Texte |
|---|---|---|
| V8.4 | Toujours | « Avec ce plan, la marge de novembre serait de [X] €. » |
| V8.5 | Marge négative (en complément) | « Le plan de novembre n'est pas entièrement financé de [|X|] €. » |
| V8.6 | Toujours | « Son plan habituel, à partir de décembre : [aperçu avec les seuls changements à conserver]. » |
| V8.7 | Toujours | « Novembre reste un plan : on ne sait pas encore ce qui se passera, ni ce que rapporteront les cours. » |

*Marge de novembre = compte au 31 octobre + 1 640 € + cours retenus pour novembre − total du plan (EP1 §6, écran 8).*

**Aide :**

| Code | Condition | Texte |
|---|---|---|
| V8.8 | Validation sans cours choisis | « Choisis les cours comptés pour novembre. » |
| V8.9 | Validation sans choix pour la ligne « Remboursement à sa sœur » ou « Projet ordinateur » (lignes sans option « garder ») | « Choisis ce qu'Amadou fait pour cette ligne. » |

**Transition :** bouton « Valider le plan de novembre ».

---

## Écran 9 — Ce qu'Amadou a appris

**Titre :** « Ce qu'Amadou a appris »

**Texte :**
> « Ce qu'Amadou a fait ce mois-ci tient en cinq repères :
>
> 1. **Ce qui entre :** compter ce qui est sûr ; ce qui varie arrive en plus.
> 2. **Régulier ne veut pas dire indispensable,** et variable ne veut pas dire facultatif.
> 3. **Une marge négative se voit avant le compte :** c'est un plan pas entièrement financé, pas encore un découvert.
> 4. **Face à un imprévu :** l'argent vraiment libre d'abord, puis ce qui peut attendre, puis ce qu'on renonce à mettre de côté. Et prévenir avant de décaler un engagement.
> 5. **Un écart est une information :** on corrige le plan du mois suivant.
>
> Ce sont des repères, pas des règles : chaque situation est différente. »

**Encadré** [R-2] :
> « Si le budget ne tient pas alors que l'essentiel est déjà au plus juste, ce n'est pas un échec personnel : certains revenus ne suffisent pas. Il existe une aide gratuite et confidentielle, les Points conseil budget. »

**Transition :** bouton « Continuer ».

---

## Écran 10 — Marc, des revenus qui changent

**Titre :** « Marc, des revenus qui changent »

**Introduction :**
> « Même méthode, autre situation : des revenus qui changent chaque mois. »
>
> « Marc a 41 ans. Il est intérimaire et vit en colocation. Ses revenus changent chaque mois : 1 280 €, 1 750 €, 1 900 € et 1 410 € ces quatre derniers mois.
>
> Il veut un plan habituel : la façon dont il répartit son argent chaque mois, tant que rien ne l'oblige à changer. »

**Carte « Ses dépenses » :**
> « Essentielles : 910 €. »
>
> « Peuvent passer après : loisirs 120 €, musique 11 €. »
>
> « Réserve pour l'assurance auto : 35 € par mois (420 € par an), mise de côté. »
>
> « Total : 1 076 €. »
>
> « Avant octobre : coussin 0 €, réserve assurance 0 €. »

**Détail replié — « Détail des dépenses essentielles » :**
> « Colocation 495 €, téléphone 25 €, énergie 60 € (720 € par an), courses 250 €, carburant 80 €. »

### Étape 1

**Consigne :** « Sur quel montant Marc bâtit-il son plan ? »

**Choix** (aucun présélectionné) :
- « 1 280 € : le plus bas de ses quatre derniers revenus »
- « 1 585 € : la moyenne de ses quatre derniers revenus »
- « 1 900 € : le plus haut de ses quatre derniers revenus »

### Étape 2

**Consigne :** « Pourquoi ce montant ? »

**Choix** (aucun présélectionné) :
- « C'est un montant qu'il a reçu même lors de son mois le plus faible récemment »
- « C'est ce qu'il gagne en moyenne »
- « Il compte sur un bon mois »

### Étape 3

**Consigne :** « Que fait-il des [B − 1 076] € qui restent ? » (204 €, 509 € ou 824 €)

**Réglages** (tous à 0 € au départ) :
- « Coussin : argent mis de côté pour les mauvais mois »
- « Imprévus (laissés sur le compte) »
- « Dépenses en plus »

**Affichage permanent :** « Non réparti : [X] € (reste sur le compte, sans affectation) »

**Aide :**

| Code | Condition | Texte |
|---|---|---|
| V10.1 | Étape 1 sans choix | « Choisis un montant pour continuer. » |
| V10.2 | Étape 2 sans choix | « Choisis une raison pour continuer. » |
| V10.3 | Un réglage atteint son maximum | « La somme des trois réglages ne peut pas dépasser [B − 1 076] €. » |

### Mois 1 — « Le 1er octobre »

> « Le 1er octobre, Marc reçoit 1 410 €. Son plan prévoyait [B] €. »

**Carte « Ce mois-ci » :**
> « Reçu : 1 410 € »
>
> « Dépenses prévues : [1 041 + Dm] € »
>
> « À mettre de côté : [35 + Cm] € »
>
> « Compte en fin de mois s'il suit son plan : [334 − Dm − Cm] € »

| Code | Condition | Texte |
|---|---|---|
| V10.4 | Compte positif ou nul | « Son plan tient ce mois-ci. » |
| V10.5 | Compte négatif [R-1] | « S'il suit son plan sans rien changer, il lui manquerait [X] € ce mois-ci. Un compte en dessous de zéro n'est pas une solution acquise : selon les conditions de son compte, des paiements pourraient être refusés ou entraîner des frais. Marc peut adapter ce mois-ci. » |
| V10.6 | Compte négatif (en complément) | « À ce stade, Marc ne mobilise pas ses réserves : il ajuste d'abord ce qu'il dépense et ce qu'il met de côté ce mois-ci. » |

**Leviers** (seulement si V10.5 ; un levier n'apparaît que si son montant dépasse 0 € ; curseurs à 0 €) :

| Libellé | Maximum | Conséquence affichée |
|---|---|---|
| « Renoncer aux dépenses en plus » | « jusqu'à [Dm] € » | « Dépense évitée. » |
| « Réduire ses loisirs » | « jusqu'à 120 € » | « Dépense évitée. » |
| « Ne pas verser au coussin ce mois-ci » | « jusqu'à [Cm] € » | « Versement suspendu. » |
| « Ne pas verser à la réserve assurance ce mois-ci » | « jusqu'à 35 € » | « Versement suspendu. L'assurance auto reste à payer. » |

**Résumé en direct :**

| Code | Condition | Texte |
|---|---|---|
| V10.7 | Manque restant | « Il manque encore [X] €. » |
| V10.8 | Leviers égaux au manque | « Le manque de ce mois-ci est couvert. » |
| V10.9 | Leviers supérieurs au manque | « [Y] € de plus que nécessaire : ils restent sur son compte. » |

**Portée de chaque levier réglé au-dessus de 0 €** (question repliée ; « Seulement ce mois-ci » sélectionné par défaut) :
> « Ce changement vaut-il seulement pour ce mois-ci, ou pour son plan habituel ? »

| Code | Option | Texte |
|---|---|---|
| V10.10 | « Seulement ce mois-ci » | « Le mois prochain, son plan habituel reprend tel quel. » |
| V10.11 | « Changer son plan habituel » | « À partir du mois prochain, [ce changement] fait partie de son plan. » |

**Si un changement durable libère une somme :**

| Code | Condition | Texte |
|---|---|---|
| V10.12 | Somme libérée F > 0 | « À partir du mois prochain, ce changement libère [F] € par mois. Par défaut, ils restent sur son compte, sans affectation. » |
| V10.13 | F comprend un versement au coussin suspendu durablement | « Les [Fnc] € libérés en arrêtant le versement au coussin ne peuvent pas y retourner : ils restent sur son compte. » |

**Choix :** « Laisser non affecté » (sélectionné par défaut) · « Mettre de côté dans le coussin » (curseur de 0 à [Fc] €).

**Aperçu « Son plan habituel à partir de novembre » :** lignes « Dépenses », « Réserve assurance », « Coussin », « Imprévus », « Non affecté », « Total » ([B] €).

**Note affichée :**
> « Mettre de côté ne crée pas d'argent : chaque euro placé dans le coussin quitte son compte, chaque mois, à partir du mois prochain. »

**Conséquence :**
> « Fin octobre : [compte] € sur son compte. »

**Retour selon la base :**

| Code | Base | Texte |
|---|---|---|
| V10.14 | 1 280 € | « Les bons mois arrivent en plus ; les mois bas sont déjà couverts. » |
| V10.15 | 1 585 € | « Ça tient un mois moyen ; un mois plus bas laisse un trou. » |
| V10.16 | 1 900 € | « Le plan suppose que chaque mois est le meilleur. » |

**Transition :** bouton « Voir le mois suivant ».

---

## Écran 11 — Novembre : un bon mois

**Titre :** « Novembre : un bon mois »

| Code | Condition | Texte |
|---|---|---|
| V11.1 | Base 1 280 € ou 1 585 €, plan habituel non modifié | « En novembre, Marc a eu beaucoup de missions : 1 900 €. Il suit son plan habituel, versements prévus compris. Il reste [1 900 − B] € de plus. Qu'en fait-il ? » |
| V11.2 | Base 1 280 € ou 1 585 €, plan modifié en octobre | « En novembre, Marc a eu beaucoup de missions : 1 900 €. Il suit son plan habituel, tel qu'il l'a modifié en octobre, versements prévus compris. Il reste [1 900 − B] € de plus. Qu'en fait-il ? » |

**Choix** (bases 1 280 € et 1 585 €, aucun présélectionné) :

| Libellé | Base 1 280 € | Base 1 585 € |
|---|---|---|
| « Tout mettre dans le coussin » | « 620 € au coussin » | « 315 € au coussin » |
| « Un peu de tout » | « 300 € au coussin, 200 € pour un projet, 120 € de plaisir » | « 150 € au coussin, 100 € pour un projet, 65 € de plaisir » |
| « Tout dépenser » | « 620 € de dépenses » | « 315 € de dépenses » |

**Base 1 900 € :**

| Code | Condition | Texte |
|---|---|---|
| V11.3 | Toujours | « En novembre, Marc a reçu 1 900 €, le montant de son plan habituel. Il n'a rien en plus à répartir. » |
| V11.4 | Compte d'octobre resté négatif | « Le manque d'octobre n'est pas rattrapé. » |
| V11.5 | Réaffectation au coussin A > 0 | « [A] € sont allés dans son coussin, comme prévu par son plan. » |
| V11.6 | Imprévus ou non affecté dans le plan | « [Im + NA] € restent sur son compte (imprévus et argent non affecté). » |

**Conséquence** (toutes bases) :
> « Fin novembre : [compte] € sur son compte, coussin [ ] €, réserve assurance [ ] €. »

| Code | Condition | Texte |
|---|---|---|
| V11.7 | Projet créé (« Un peu de tout ») | La conséquence devient : « Fin novembre : [compte] € sur son compte, coussin [ ] €, projet [ ] €, réserve assurance [ ] €. » |
| V11.8 | « Continuer » sans choix (bases 1 280 € et 1 585 €) | « Choisis ce que fait Marc de ces [1 900 − B] € pour continuer. » |

**Transition :** bouton « Voir le mois suivant ».

---

## Écran 12 — Décembre : un mois difficile

**Titre :** « Décembre : un mois difficile »

**Introduction :**
> « En décembre, une semaine sans mission : Marc reçoit 900 €. Et sa voiture a besoin d'une réparation à 300 €. »

### Temps 1 — « Si Marc ne change rien »

> « S'il suit son plan habituel sans rien changer, son compte serait à [X] € fin décembre. »

| Code | Condition | Texte |
|---|---|---|
| V12.1 | Im > 0 | « Ses imprévus ([Im] € par mois dans son plan) sont restés sur son compte : ils sont déjà comptés dans ce montant. C'est à ça qu'ils servent. » |
| V12.2 | X < 0 [R-1] | « Selon les conditions de son compte, des paiements pourraient être refusés ou entraîner des frais. » |
| V12.3 | X ≥ 0 | « Son plan absorbe ce mois difficile. » |

### Temps 2 — « Réduire ce qui peut l'être ce mois-ci »

**Consigne :**

| Code | Condition | Texte |
|---|---|---|
| V12.4 | X < 0 | « Commence par ce que Marc peut réduire ce mois-ci. » |
| V12.5 | X ≥ 0 | « Rien n'oblige Marc à changer ce mois-ci. Tu peux tout de même regarder ce qu'il pourrait réduire. » |

**Leviers** (un levier n'apparaît que si sa ligne dépasse 0 € dans le plan en vigueur ; curseurs à 0 €) :

| Libellé | Maximum | Conséquence affichée |
|---|---|---|
| « Renoncer aux dépenses en plus » | « jusqu'à [dépenses en plus prévues] € » | « Dépense évitée. » |
| « Réduire ses loisirs » | « jusqu'à [loisirs prévus] € » | « Dépense évitée. » |
| « Ne pas verser au coussin ce mois-ci » | « jusqu'à [versement prévu] € » | « Versement suspendu : ce qu'il a déjà mis de côté ne bouge pas. » |
| « Ne pas verser à la réserve assurance ce mois-ci » | « jusqu'à [versement prévu] € » | « Versement suspendu. L'assurance reste due. » |
| « Musique, 11 € » *(grisée)* | — | « Abonnement non réductible ce mois-ci. » |

| Code | Condition | Texte |
|---|---|---|
| V12.6 | Manque restant R1 > 0 | « Après ces choix, il manque encore [R1] €. » |
| V12.7 | R1 = 0 et X < 0 | « Après ces choix, le manque de ce mois-ci est couvert. » |

### Temps 3 — « Mobiliser ses réserves » (seulement si R1 > 0)

**Consigne :**
> « Il manque encore [R1] €. Tu peux reprendre de l'argent mis de côté, sans dépasser ce montant. »

| Libellé | Disponible affiché | Conséquence affichée |
|---|---|---|
| « Reprendre de l'argent du coussin » | « [solde du coussin + part non suspendue du versement de décembre] € disponibles » | « Le coussin baisse d'autant : c'est son rôle, mais il protégera moins la prochaine fois. » |
| « Reprendre l'argent du projet » (si un projet a été créé) | « [projet] € disponibles » | « Le projet recule. » |
| « Reprendre la réserve assurance » | « [solde de la réserve + part non suspendue du versement de décembre] € disponibles » | « L'assurance auto devra être payée sans cette réserve. » |

| Code | Condition | Texte |
|---|---|---|
| V12.8 | Projet créé mais solde nul | Ligne grisée : « Le projet n'a plus d'argent disponible. » |
| V12.9 | Toujours, en direct | « Repris : [Y] €. Il manque encore [R1 − Y] €. » |
| V12.10 | Reprises égales à R1 | « Repris : [Y] €. Le manque de ce mois-ci est couvert. » |
| V12.11 | Tout le disponible mobilisé et manque restant | « Même en mobilisant tout ce qui est possible, il manque [R2] €. » |
| V12.12 | Curseur bloqué par le manque restant | « Marc ne peut pas reprendre plus que ce qui manque ([R1] €). » |
| V12.13 | Curseur bloqué par le disponible | « C'est tout ce qui est disponible ici. » |

**Bouton :** « Ne rien changer ».

### Portée des leviers du temps 2

Question repliée sur chaque levier réglé au-dessus de 0 € (« Seulement ce mois-ci » sélectionné par défaut) :
> « Ce changement vaut-il seulement pour ce mois-ci, ou pour son plan habituel ? Ce mois-ci, l'effet est le même dans les deux cas ; la différence apparaît dans son plan des mois suivants. »

| Code | Condition | Texte |
|---|---|---|
| V12.14 | « Changer son plan habituel » avec somme libérée X | « À partir du mois prochain, ce changement libère [X] € par mois. » |
| V12.15 | X vient du versement au coussin | Option « coussin » grisée : « Cet argent vient du versement au coussin : il ne peut pas y retourner. » |
| V12.16 | Pas de projet créé | Option « projet » absente. |
| V12.17 | Réaffectation A > 0 | « Marc en met [A] € de côté dans [le coussin / le projet]. » |
| V12.18 | X − A > 0 | « [X − A] € restent sur son compte, sans affectation. » |
| V12.19 | Toujours (aperçu) | « Les mois où il reçoit [B] €, [X − A] € restent en plus sur son compte, au lieu de [X] € s'il n'avait rien mis de côté. » |

**Choix :** « Laisser non affecté » (sélectionné par défaut) · « Mettre de côté » dans « le coussin » ou « le projet » (curseur de 0 à [maximum] €).

**Aperçu « Son plan habituel à partir de janvier » :**

| Libellé | « Avant » | « Après » |
|---|---|---|
| « [Ligne réduite] » | [ ] € | [ − X] € |
| « [Objectif choisi] » | [ ] € | [ + A] € |
| « Non affecté » | [ ] € | [ + X − A] € |
| « Total » | [B] € | [B] € |

**Suspension durable du versement à la réserve** [R-3] :

| Code | Condition | Texte |
|---|---|---|
| V12.20 | Suspension totale | « L'assurance auto (420 € par an) restera à payer : avec [réserve] € de côté, il faudra trouver [420 − réserve] € à l'échéance. » |
| V12.21 | Suspension partielle | « L'assurance auto (420 € par an) restera à payer : avec [réserve] € de côté, il faudra trouver jusqu'à [420 − réserve] € à l'échéance, selon les versements d'ici là. » |

*Les mois après décembre ne sont pas simulés.*

### Retours (affichés dans cet ordre)

| Code | Condition | Texte |
|---|---|---|
| V12.22 | Toujours | « Marc n'était pas obligé de garder son plan habituel. Réduire d'abord ce qui pouvait l'être protège ce qu'il a mis de côté. Toucher à la réserve de l'assurance déplace le problème. » |
| V12.23 | Réserves reprises alors que des dépenses restaient réductibles (Y > 0 et Z > 0) | « Il a repris [Y] € de ses réserves alors que [Z] € de dépenses pouvaient encore être réduits ce mois-ci. Les deux étaient permis : réduire ces dépenses aurait gardé cet argent de côté pour un prochain coup dur. » |
| V12.24 | Base 1 280 € ou 1 585 € | « Son choix de novembre se voit ici, dans ce que Marc peut mobiliser. » |
| V12.25 | Compte d'octobre resté négatif, sans réaction | « Réagir dès octobre aurait évité d'accumuler le manque. » |
| V12.26 | Réaffectation faite à l'écran 10 | « Mettre de côté ne change pas ce que Marc possède ; ça change ce qu'il risque de dépenser sans y penser. » |

**Transition :** bouton « Continuer ».

---

## Écran 13 — Ce que tu emportes

**Titre :** « Ce que tu emportes »

**Texte :**
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

**Pour aller plus loin** [R-4] :

| Code | Condition | Texte |
|---|---|---|
| V13.1 | Contenu publié | « Comment fonctionnent un découvert et un paiement refusé » (Banque et finance) |
| V13.2 | Contenu publié | « Constituer une réserve de sécurité » (Gestion de l'argent) |

*Si aucun des deux contenus n'est publié, la rubrique « Pour aller plus loin » n'apparaît pas.*

**Transition :** bouton « Terminer ».

---

## Points à valider avant design

| N° | Point | Écran |
|---|---|---|
| P-1 | Les harmonisations d'adresse du §0 (« son plan », « ses imprévus », « Marc en met ») remplacent quatre formulations d'EP1. | 4, 5, 8, 12 |
| P-2 | Textes rédigés pour des états prévus par EP1 mais sans libellé : aucun manque le 15 (V5.13, V5.15), manque couvert exactement (V10.8, V12.7, V12.10), consigne du temps 2 (V12.4, V12.5), projet vide (V12.8), messages d'aide (V2.2, V3.8, V4.9, V5.20, V8.8, V8.9, V10.1 à V10.3, V11.8, V12.12, V12.13). | Plusieurs |
| P-3 | Éléments d'interface implicites dans EP1 et nommés ici : lien « Changer » (écran 4), lien « Pourquoi ? » (écran 3), bouton « Revenir au mois joué » à la fin du rejeu (écran 7), aperçu « à partir de janvier » (écran 12). | 3, 4, 7, 12 |
| P-4 | Les textes marqués [R-1] à [R-4] dépendent des réserves de publication d'EP1 §9, inchangées. Les titres de V13.1 et V13.2 sont provisoires. | 6, 8, 9, 10, 12, 13 |
| P-5 | Le projet de Marc n'est pas décrit dans EP1 (objet, montant visé). Le manuscrit écrit « pour un projet » à l'écran 11, sans inventer son objet. | 11, 12 |
| P-6 | EP1 ne précise pas si les lignes « Remboursement à sa sœur » et « Projet ordinateur » de l'écran 8 ont une option par défaut. Le manuscrit les traite comme des choix requis (V8.9), sans présélection. | 8 |
| P-7 | Les lignes grisées de l'écran 5 sont nommées « Arrêter le streaming » et « Ne pas payer la salle de sport » ; EP1 ne donnait que le nom de la dépense. | 5 |

---

Fin du manuscrit éditorial EP1 — rédaction du 11 novembre 2026.
