import { EcranDefinition } from '../../../lecteur/types';

// Écrans 1 à 9 : Amadou. Textes affichés repris d'EP1 §6 (texte entre « » du document).

const ecran1: EcranDefinition = {
  numero: 1,
  titre: 'Le mois d’Amadou',
  blocs: [
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Amadou a 23 ans. Il vient de signer son premier CDI de technicien de maintenance et vit seul dans un studio.\nLe mois dernier, le 20, il ne lui restait presque rien, sans vraiment savoir où son argent était passé.\nEn octobre, il veut décider à l’avance à quoi servira chaque euro. Aide-le à préparer son mois, puis regarde ce qui se passe vraiment.',
    },
    { type: 'paragraphe', style: 'note', essentiel: true, texte: 'Situation fictive : tu ne saisis aucune donnée te concernant.' },
    {
      type: 'carte',
      titre: 'Ce qu’Amadou sait déjà',
      blocs: [
        {
          type: 'liste',
          elements: [
            { texte: 'Salaire : 1 640 €, versé le 1er.' },
            { texte: 'Cours de soutien le week-end, ces quatre derniers mois : 160 €, 0 €, 90 €, 120 €.' },
            { texte: 'Ce qu’il a dépensé le mois dernier : tu le verras à l’étape suivante.' },
            { texte: 'Un projet : remplacer son ordinateur dans 4 mois (400 €).' },
            { texte: 'Chaque année : cadeaux de fin d’année 150 €, entretien du vélo 60 €, séjour d’été en famille 240 €.' },
          ],
        },
      ],
    },
  ],
  boutons: [{ libelle: 'Commencer', action: 'suivant' }],
};

const ecran2: EcranDefinition = {
  numero: 2,
  titre: 'Ce qui va entrer',
  blocs: [
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Le 1er, son salaire arrive : 1 640 €. Les cours de soutien, eux, changent chaque mois.\nCombien Amadou compte-t-il de cours dans son plan d’octobre ?',
    },
    {
      type: 'detailReplie',
      libelle: 'Ses cours ces quatre derniers mois',
      blocs: [{ type: 'paragraphe', texte: '160 €, 0 €, 90 €, 120 €, soit une moyenne de 92,50 €.' }],
    },
    {
      type: 'choixUnique',
      chemin: 'K',
      options: [
        { valeur: 0, libelle: 'Ne pas compter les cours : son plan part de 1 640 €.' },
        { valeur: 9250, libelle: 'Compter la moyenne, 92,50 € : son plan part de 1 732,50 €.' },
        { valeur: 16000, libelle: 'Compter son meilleur mois, 160 € : son plan part de 1 800 €.' },
      ],
    },
    {
      type: 'paragraphe',
      condition: 'kChoisi',
      texte: 'C’est noté : son plan part de {ressources}. Tu verras à la fin du mois ce que ce choix change.',
    },
  ],
  boutons: [{ libelle: 'Continuer', action: 'suivant', actif: 'kChoisi' }],
};

const carteDecrite = (titre: string, explication: string) => ({
  type: 'detailReplie' as const,
  libelle: titre,
  blocs: [{ type: 'paragraphe' as const, texte: explication }],
});

const prioriteOptions = [
  { valeur: 'essentielle', libelle: 'Essentielle' },
  { valeur: 'apres', libelle: 'Peut passer après' },
];

const ecran3: EcranDefinition = {
  numero: 3,
  titre: 'Ce que coûte un mois',
  blocs: [
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Pour chaque dépense, tu vois si elle revient au même montant chaque mois ou si elle varie. Mais une dépense régulière n’est pas forcément indispensable. Pour quatre d’entre elles, c’est à toi de le dire.',
    },
    carteDecrite('Logement (loyer et assurance), 621 € · Le 3, même montant · Essentielle', 'Un toit, chaque mois.'),
    carteDecrite('Énergie, 48 € · Le 5, mensualité fixe · Essentielle', 'Une régularisation peut arriver une fois par an.'),
    carteDecrite('Téléphone et internet, 32 € · Le 10, même montant · Essentielle', 'Il en a besoin pour travailler.'),
    carteDecrite('Transport, 43 € · Le 2, abonnement · Essentielle', 'Pour aller travailler.'),
    carteDecrite('Salle de sport, 29 € · Le 1er, sans engagement · Peut passer après', 'Résiliable pour le mois suivant.'),
    carteDecrite('Sorties · Varie : 210 € le mois dernier · Peut passer après', 'Ça compte pour lui, mais ça peut attendre.'),
    { type: 'choixUnique', chemin: 'cartes.streaming', titre: 'Streaming, 18 € : le 18, même montant.', options: prioriteOptions },
    {
      type: 'choixUnique',
      chemin: 'cartes.courses',
      titre: 'Courses et produits du quotidien : varie, 270 € le mois dernier.',
      options: prioriteOptions,
    },
    {
      type: 'choixUnique',
      chemin: 'cartes.soeur',
      titre:
        'Remboursement à sa sœur : 60 € chaque mois, le 25, par virement. Elle lui a avancé sa caution. Ce remboursement est prévu tous les mois ; s’il en a besoin, Amadou peut lui demander de le décaler.',
      options: prioriteOptions,
    },
    { type: 'choixUnique', chemin: 'cartes.vetements', titre: 'Vêtements : varie, 80 € le mois dernier.', options: prioriteOptions },
    {
      type: 'carte',
      condition: 'cartesVues',
      blocs: [
        {
          type: 'paragraphe',
          condition: 'streamingEssentielle',
          texte:
            'Il revient au même montant, mais Amadou peut s’en passer : c’est une dépense fixe qui peut passer après. Il ne pourra l’arrêter qu’à partir de novembre.',
        },
        {
          type: 'paragraphe',
          condition: 'streamingApres',
          texte: 'Oui : fixe, mais pas indispensable. Il pourra l’arrêter à partir de novembre.',
        },
        {
          type: 'paragraphe',
          condition: 'coursesApres',
          texte:
            'Le montant varie, mais il faut manger chaque mois : c’est une dépense variable essentielle. Il peut changer sa façon d’acheter, pas supprimer le besoin.',
        },
        { type: 'paragraphe', condition: 'coursesEssentielle', texte: 'Oui : elle varie, mais elle est indispensable.' },
        {
          type: 'paragraphe',
          condition: 'soeurEssentielle',
          texte: 'Ça se défend : c’est un engagement, au même montant chaque mois.',
        },
        {
          type: 'paragraphe',
          condition: 'soeurApres',
          texte:
            'Ça se défend aussi, à condition de ne rien décaler sans la prévenir. Le virement part le 25 : d’ici là, il peut lui en parler.',
        },
        {
          type: 'paragraphe',
          texte:
            'Ça se défend dans les deux sens : essentiel s’il a un vrai besoin ce mois-ci, comme des chaussures de travail usées ; sinon, ça peut souvent attendre.',
        },
      ],
    },
  ],
  boutons: [
    { libelle: 'Voir ce que ça donne', action: 'voirCartes', actif: 'cartesToutesChoisies', condition: '!cartesVues' },
    { libelle: 'Continuer', action: 'suivant', condition: 'cartesVues' },
  ],
};

const ecran4: EcranDefinition = {
  numero: 4,
  titre: 'Le plan d’octobre',
  blocs: [
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Amadou a commencé son plan : d’un côté ce qu’il a dépensé le mois dernier, de l’autre ce qu’il voudrait faire en octobre. Modifie ce qui te semble nécessaire, ou garde-le tel quel, puis valide-le.',
    },
    { type: 'intertitre', texte: 'Plan esquissé par Amadou' },
    { type: 'tableau', lignes: [{ libelle: 'Ressources retenues', valeur: '{ressources}', gras: true }] },
    { type: 'bouton', libelle: 'Modifier les cours comptés', action: 'allerEcran2' },
    {
      type: 'tableau',
      lignes: [
        { libelle: 'Ce qu’il a dépensé le mois dernier', valeur: '', intertitre: true },
        { libelle: 'Dépenses fixes', valeur: '851 €' },
      ],
    },
    { type: 'paragraphe', style: 'note', texte: 'Ces prélèvements d’octobre sont déjà prévus.' },
    {
      type: 'detailReplie',
      libelle: 'Détail des dépenses fixes',
      blocs: [
        {
          type: 'paragraphe',
          texte: 'logement 621 €, transport 43 €, énergie 48 €, téléphone 32 €, salle de sport 29 €, streaming 18 €, sœur 60 €.',
        },
      ],
    },
    { type: 'montant', chemin: 'plan.courses', libelle: 'Courses' },
    { type: 'montant', chemin: 'plan.sorties', libelle: 'Sorties' },
    { type: 'montant', chemin: 'plan.vetements', libelle: 'Vêtements' },
    { type: 'intertitre', texte: 'Ce qu’il voudrait faire en octobre' },
    { type: 'montant', chemin: 'plan.reserve', libelle: 'Réserve pour les dépenses de l’année' },
    {
      type: 'detailReplie',
      libelle: 'Pourquoi 38 € de réserve ?',
      blocs: [{ type: 'paragraphe', texte: '150 + 60 + 240 = 450 € par an, soit 37,50 € par mois, arrondis à 38 €.' }],
    },
    { type: 'montant', chemin: 'plan.projet', libelle: 'Projet ordinateur' },
    { type: 'montant', chemin: 'plan.epargne', libelle: 'Épargne du mois' },
    { type: 'montant', chemin: 'plan.imprevus', libelle: 'Imprévus' },
    {
      type: 'tableau',
      lignes: [
        { libelle: 'Total du plan', valeur: '{T}', gras: true },
        { libelle: 'Marge', valeur: '{margeSignee}', gras: true },
      ],
    },
    {
      type: 'paragraphe',
      style: 'note',
      texte:
        'La réserve, le projet et l’épargne partent le 1er sur un autre compte. Les imprévus et la marge restent sur le compte courant.',
    },
    { type: 'resume', condition: 'margeK0Positive', texte: 'Marge : {margeSignee}. Cet argent reste sur le compte, sans affectation.' },
    { type: 'paragraphe', condition: 'margeK0PositiveAvecI', texte: 'Tes {I} d’imprévus sont entièrement couverts.' },
    {
      type: 'resume',
      condition: 'margeKPositive',
      texte: 'Marge : {margeSignee}, en comptant {K} de cours qui ne sont pas encore arrivés.',
    },
    {
      type: 'paragraphe',
      condition: 'margeKPositiveSalaireSuffit',
      texte: 'Avec son salaire seul (1 640 €, déjà reçu), le plan laisse {salaireMoinsTSigne}.',
    },
    {
      type: 'paragraphe',
      condition: 'margeKPositiveSalaireDepasse',
      texte:
        'Avec son salaire seul, le plan dépasse de {TmoinsSalaire} : il a besoin d’au moins {TmoinsSalaire} de cours pour être financé.',
    },
    {
      type: 'resume',
      condition: 'margeNegative',
      texte:
        'Marge : {margeSignee}. Le plan prévoit {margeAbs} de plus que les ressources retenues. Ce n’est pas un découvert : c’est un plan qui n’est pas entièrement financé.',
    },
    {
      type: 'paragraphe',
      condition: 'couverturePartielle',
      texte: 'Ses {I} d’imprévus ne sont couverts qu’à hauteur de {IplusM}.',
    },
    { type: 'paragraphe', condition: 'couvertureNulleAvecI', texte: 'Ses {I} d’imprévus ne sont pas couverts du tout.' },
    {
      type: 'paragraphe',
      condition: 'margeSousMoinsI',
      texte: 'Et {moinsMmoinsI} d’autres lignes de son plan ne le sont pas non plus.',
    },
    {
      type: 'paragraphe',
      condition: 'margeNegativeSansI',
      texte: 'Son plan ne prévoit pas d’imprévus, et {margeAbs} de ses lignes ne sont pas financés.',
    },
    {
      type: 'paragraphe',
      condition: 'margeNegativeAvecK',
      texte: 'Les ressources retenues comptent déjà {K} de cours qui ne sont pas encore arrivés.',
    },
  ],
  boutons: [
    {
      libelle: 'Valider ce plan',
      action: 'validerPlan',
      actif: 'kChoisi',
      confirmation: {
        condition: 'margeNegative',
        textes: [{ texte: 'La marge de ce plan est de {margeSignee}. Tu peux le garder tel quel ou le modifier.' }],
        confirmer: 'Garder ce plan',
        annuler: 'Revenir au plan',
      },
    },
  ],
};

const ecran5: EcranDefinition = {
  numero: 5,
  titre: 'Le 15 octobre',
  blocs: [
    { type: 'paragraphe', style: 'note', condition: '!modeRejeu', texte: 'Plan validé. Voyons comment se passe le mois.' },
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Le 15 octobre, l’écran du téléphone d’Amadou casse. Il en a besoin pour son travail. La réparation coûte 130 €, à payer aujourd’hui.',
    },
    { type: 'intertitre', texte: 'Où en est son compte' },
    {
      type: 'liste',
      elements: [
        { texte: 'Sur le compte aujourd’hui : {compte15}' },
        { texte: 'Mis de côté le 1er sur l’autre compte : {M}' },
        { texte: 'D’ici la fin du mois, il reste à payer : {reste15}' },
      ],
    },
    {
      type: 'detailReplie',
      libelle: 'Détail de ce qui reste à payer',
      blocs: [
        {
          type: 'paragraphe',
          texte: 'streaming 18 € (le 18), sœur 60 € (le 25), courses 144 €, sorties {S2}, vêtements {V2}',
        },
      ],
    },
    {
      type: 'paragraphe',
      condition: 'demiCoursesInf144',
      texte: 'Courses : 144 € déjà dépensés au lieu de {C2} prévus. Amadou compte le même écart d’ici la fin du mois.',
    },
    { type: 'paragraphe', condition: 'demiCoursesEgal144', texte: 'Courses : 144 € dépensés, comme prévu.' },
    {
      type: 'paragraphe',
      condition: 'demiCoursesSup144',
      texte: 'Courses : 144 € dépensés, soit {C2moins144} de moins que prévu. Amadou compte le même rythme d’ici la fin du mois.',
    },
    { type: 'paragraphe', texte: 'Les cours ne sont pas encore arrivés.' },
    { type: 'paragraphe', condition: 'kPositif', texte: 'Ton plan en comptait {K} : rien n’est arrivé pour l’instant.' },
    { type: 'intertitre', texte: 'Ce qui est vraiment libre' },
    {
      type: 'liste',
      elements: [{ texte: 'Argent libre aujourd’hui : {L}' }, { texte: 'Réparation : 130 €' }],
    },
    { type: 'paragraphe', style: 'note', texte: 'Les cours ne sont pas comptés, puisqu’ils ne sont pas encore arrivés.' },
    {
      type: 'paragraphe',
      condition: 'imprevusLSupI',
      texte: 'Ses {I} d’imprévus font partie de cet argent libre : c’est à ça qu’ils servent.',
    },
    {
      type: 'paragraphe',
      condition: 'imprevusLEntre0EtI',
      texte:
        'Ses {I} d’imprévus font partie de cet argent libre, mais il n’en reste que {L} : le reste de son plan et ses dépenses du mois en ont déjà absorbé une partie.',
    },
    {
      type: 'paragraphe',
      condition: 'imprevusLNul',
      texte: 'Ses {I} d’imprévus étaient comptés dans cet argent libre, mais il n’en reste rien aujourd’hui.',
    },
    { type: 'paragraphe', essentiel: true, condition: 'lSuffit', texte: 'L’argent libre suffit à payer la réparation.' },
    {
      type: 'paragraphe',
      essentiel: true,
      condition: 'lInsuffisant',
      texte: 'L’argent libre ({L}) ne suffit pas : il manque {manque}.',
    },
    {
      type: 'paragraphe',
      essentiel: true,
      condition: 'lNegatif',
      texte: 'Même sans la réparation, il manquerait {LAbs} pour finir le mois. Avec la réparation, il manque {manque}.',
    },
    { type: 'intertitre', texte: 'Comment trouver le reste' },
    { type: 'paragraphe', texte: 'Choisis un ou plusieurs moyens, ou ne change rien et regarde ce qui se passe.' },
    {
      type: 'montant',
      chemin: 'moyens.sorties',
      libelle: 'Sortir moins d’ici la fin du mois',
      aide: 'Jusqu’à {maxSorties}. Dépense réellement évitée ; rien à rattraper.',
    },
    {
      type: 'montant',
      chemin: 'moyens.vetements',
      libelle: 'Reporter un achat de vêtements',
      aide: 'Jusqu’à {maxVetements}. Dépense réellement évitée ; rien à rattraper.',
    },
    {
      type: 'interrupteur',
      chemin: 'moyens.decalerSoeur',
      libelle: 'Demander à sa sœur de décaler le remboursement d’octobre (60 €, en une fois)',
      aide: 'Elle accepte s’il la prévient aujourd’hui. En novembre, il lui devra 120 €, ou un étalement convenu avec elle.',
    },
    {
      type: 'montant',
      chemin: 'moyens.epargne',
      libelle: 'Reprendre de l’épargne du mois',
      aide: 'Jusqu’à {maxEpargne}. L’épargne d’octobre baisse d’autant.',
    },
    {
      type: 'montant',
      chemin: 'moyens.reserve',
      libelle: 'Reprendre la réserve des dépenses de l’année',
      aide: 'Jusqu’à {maxReserve}. À reconstituer avant ces dépenses.',
    },
    {
      type: 'montant',
      chemin: 'moyens.projet',
      libelle: 'Reprendre l’argent du projet ordinateur',
      aide: 'Jusqu’à {maxProjet}. L’achat sera retardé.',
    },
    { type: 'ligneGrisee', libelle: 'Streaming', raison: 'Ne peut être arrêté qu’en novembre.' },
    { type: 'ligneGrisee', libelle: 'Salle de sport', raison: 'Déjà prélevée le 1er.' },
    { type: 'resume', texte: 'Trouvé : {R} sur {manque}.' },
    { type: 'paragraphe', condition: 'trouveDepasse', texte: '{surplus} de plus que nécessaire : ils restent sur le compte.' },
    {
      type: 'resume',
      texte:
        'Projection de fin de mois : vers {projection}. Dans cette simulation, 40 € de cours arriveront le 20 : ils sont comptés ici comme une rentrée attendue, pas comme de l’argent disponible. Aucun autre cours n’est compté.',
    },
  ],
  boutons: [
    {
      libelle: 'Payer la réparation ainsi',
      action: 'payerAinsi',
      confirmation: {
        condition: 'manqueNonCouvert',
        textes: [
          {
            condition: 'projectionNegative',
            texte:
              'Il manque encore {Y}. Même avec les 40 € de cours du 20, le compte finirait le mois en dessous de zéro, vers {projection}.',
          },
          {
            condition: '!projectionNegative',
            texte:
              'Il manque encore {Y} par rapport à l’argent libre d’aujourd’hui. Avec les 40 € de cours du 20, le compte finirait le mois vers {projection}.',
          },
        ],
        confirmer: 'Continuer ainsi',
        annuler: 'Revenir',
      },
    },
    { libelle: 'Ne rien changer', action: 'neRienChanger', secondaire: true },
  ],
};

const ecran6: EcranDefinition = {
  numero: 6,
  titre: 'Fin octobre',
  blocs: [
    { type: 'paragraphe', style: 'citation', texte: 'Voici le mois d’Amadou, tel qu’il s’est vraiment passé.' },
    {
      type: 'carte',
      blocs: [
        {
          type: 'liste',
          elements: [
            { texte: 'Sur le compte fin octobre : {solde}' },
            { texte: 'Mis de côté : {misNet} (réserve {misReserve}, projet {misProjet}, épargne {misEpargne})' },
            { texte: 'Dû à sa sœur : {duSoeur}' },
            { texte: 'Premier jour où le solde ne suffit pas : {premierManque}' },
          ],
        },
        {
          type: 'paragraphe',
          essentiel: true,
          condition: 'soldeSousZero',
          texte:
            'Si tous les paiements passaient, son compte serait à {solde} à la fin du mois. Le solde ne suffirait plus {aPartirDu} ({montantManque}). Selon les conditions de sa banque, un paiement pourrait être refusé ou le compte passer à découvert, avec des frais possibles.',
        },
        {
          type: 'paragraphe',
          essentiel: true,
          condition: 'soldeRemonte',
          texte: 'Le solde a été insuffisant {periodeInsuffisante}. Il est remonté le {jourRemontee} ({causeRemontee}).',
        },
      ],
    },
    {
      type: 'detailReplie',
      libelle: 'Le mois jour par jour',
      blocs: [
        {
          type: 'liste',
          elements: [
            { texte: 'Le 15, avant la réparation : {frise15Avant}' },
            { texte: 'Le 15, après la réparation : {frise15Apres}' },
            { texte: 'Le 20, après les cours : {frise20}' },
            { texte: 'Le 25 : {frise25}' },
            { condition: 'manqueApres25', texte: 'Le {jourManque} : {montantManque}' },
            { texte: 'Fin du mois : {solde}' },
          ],
        },
      ],
    },
    {
      type: 'detailReplie',
      libelle: 'Prévu et réel, ligne par ligne',
      blocs: [
        {
          type: 'tableau',
          lignes: [
            { libelle: 'Dépenses fixes', valeur: 'prévu 851 € · réel {fixesReel}' },
            { libelle: 'Courses', valeur: 'prévu {C} · réel 288 €' },
            { libelle: 'Sorties', valeur: 'prévu {S} · réel {sortiesReel}' },
            { libelle: 'Vêtements', valeur: 'prévu {V} · réel {vetementsReel}' },
            { libelle: 'Réserve', valeur: 'prévu {reservePlan} · réel {misReserve}' },
            { libelle: 'Projet', valeur: 'prévu {projetPlan} · réel {misProjet}' },
            { libelle: 'Épargne', valeur: 'prévu {epargnePlan} · réel {misEpargne}' },
            { libelle: 'Imprévus', valeur: 'prévu {I} · réel 130 €' },
          ],
        },
      ],
    },
  ],
  boutons: [{ libelle: 'Continuer', action: 'suivant' }],
};

const ecran7: EcranDefinition = {
  numero: 7,
  titre: 'Ce que montrent ses choix',
  blocs: [
    {
      type: 'paragraphe',
      condition: 'coursAuDela40',
      texte:
        'Son plan comptait sur {U} de cours pour financer ses dépenses au-delà de son salaire. Seuls 40 € sont arrivés, le 20. Les {UmoinsQuarante} qui manquaient n’ont jamais été sur son compte : ils pèsent sur la fin du mois.',
    },
    {
      type: 'paragraphe',
      condition: 'coursJusqua40',
      texte:
        'Son plan comptait {K} de cours ; 40 € sont arrivés, soit {KmoinsQuarante} de moins. Le plan n’en avait besoin que de {U} : cette fois, l’écart n’a pas créé de manque. Mais la marge affichée ({margeAfficheeSignee}) supposait ces {K} ; avec les 40 € reçus, elle n’était que de {margeAvec40}.',
    },
    {
      type: 'paragraphe',
      condition: 'coursSalaireSuffisait',
      texte:
        'Son salaire suffisait à financer son plan : il n’avait pas besoin des cours. Les 40 € arrivés le 20 sont venus en plus et ont augmenté son solde de 40 €, même si le plan en comptait {Knombre}.',
    },
    {
      type: 'paragraphe',
      condition: 'coursNonComptes',
      texte: 'Les 40 € de cours sont arrivés le 20 sans avoir été prévus : ils ont amorti la fin du mois.',
    },
    {
      type: 'carte',
      condition: 'margeNegative',
      blocs: [
        {
          type: 'paragraphe',
          texte: 'Son plan avait une marge de {margeSignee} : ses intentions dépassaient ses ressources. Ce n’était pas encore un découvert.',
        },
        {
          type: 'paragraphe',
          condition: 'couverturePartielle',
          texte: 'Ses imprévus n’étaient couverts qu’en partie ({IplusM} sur {I}).',
        },
        { type: 'paragraphe', condition: 'couvertureNulleAvecI', texte: 'Ses imprévus n’étaient pas couverts du tout.' },
        { type: 'paragraphe', condition: 'iNul', texte: 'Il n’avait rien prévu pour les imprévus.' },
        {
          type: 'paragraphe',
          condition: 'lInsuffisant',
          texte: 'Le jour de la réparation, il ne restait que {L} de libres.',
        },
        { type: 'paragraphe', condition: 'lSuffit', texte: 'Le jour de la réparation, il restait {L} de libres.' },
        {
          type: 'paragraphe',
          condition: 'lNegatif',
          texte: 'Le jour de la réparation, il manquait déjà {LAbs} pour finir le mois.',
        },
      ],
    },
    {
      type: 'paragraphe',
      condition: 'coursesInf270',
      texte:
        'Baisser la ligne des courses à {C} n’a pas réduit le besoin : elles ont coûté 288 €. Les {deuxCentQuatreVingtHuitMoinsC} d’écart ont été pris ailleurs dans le mois.',
    },
    {
      type: 'paragraphe',
      condition: 'coursesEgal270',
      texte:
        'Les courses ont coûté 288 €, soit 18 € de plus que prévu, en deux fois. Un écart n’est pas une faute : c’est une information pour le mois suivant.',
    },
    {
      type: 'paragraphe',
      condition: 'coursesEntre270Et288',
      texte:
        'Les courses ont coûté 288 €, soit {deuxCentQuatreVingtHuitMoinsC} de plus que les {C} prévus. Prévoir un peu plus que le mois dernier a réduit l’écart, sans le supprimer.',
    },
    { type: 'paragraphe', condition: 'coursesEgal288', texte: 'Les courses ont coûté 288 €, exactement le montant prévu.' },
    {
      type: 'paragraphe',
      condition: 'coursesSup288',
      texte:
        'Les courses ont coûté 288 €, soit {CmoinsDeuxCentQuatreVingtHuit} de moins que les {C} prévus. Cette somme n’a pas été dépensée : elle est restée sur le compte.',
    },
    {
      type: 'liste',
      elements: [
        {
          condition: 'sourceSortiesVetements',
          texte: 'Moins de sorties, un achat reporté : ces dépenses pouvaient attendre, et rien ne reste à rattraper.',
        },
        {
          condition: 'sourceSoeur',
          texte: 'Le remboursement décalé a libéré 60 € ce mois-ci. En novembre, il doit 120 € à sa sœur, ou un étalement convenu.',
        },
        {
          condition: 'sourceEpargne',
          texte:
            'Reprendre {repriseEpargne} d’épargne a protégé le compte : l’épargne du mois tombe à {epargneRestante}. Un mois comme celui-ci, la réduire se défend.',
        },
        {
          condition: 'sourceReserve',
          texte:
            'La réserve sert aux cadeaux de fin d’année, à l’entretien du vélo et au séjour d’été : elle devra être reconstituée avant ces dépenses.',
        },
        { condition: 'sourceProjet', texte: 'L’ordinateur attendra : il manque {repriseProjet} au projet.' },
        {
          condition: 'sourceRien',
          texte: 'Rien n’a été changé pour couvrir le manque : il s’est reporté sur la fin du mois.',
        },
      ],
    },
    { type: 'bouton', libelle: 'Et si… ?', action: 'rejouer' },
  ],
  boutons: [{ libelle: 'Continuer', action: 'suivant' }],
};

const portee3 = (chemin: string, titre: string, garder: string) => ({
  type: 'choixUnique' as const,
  chemin,
  titre,
  options: [
    { valeur: 'garder', libelle: garder },
    { valeur: 'novembre', libelle: 'Nouveau montant, pour novembre seulement' },
    { valeur: 'durable', libelle: 'Nouveau montant, à conserver les mois suivants' },
  ],
});

const ecran8: EcranDefinition = {
  numero: 8,
  titre: 'Préparer novembre',
  blocs: [
    { type: 'intertitre', texte: 'Où en est Amadou le 31 octobre' },
    {
      type: 'liste',
      elements: [
        { texte: 'Sur le compte : {solde}' },
        { texte: 'Encore dû à sa sœur : {duSoeur}' },
        { texte: 'Mis de côté : réserve {misReserve}, projet {misProjet}, épargne d’octobre {misEpargne}' },
        { texte: 'Octobre a montré : courses 288 € pour {C} prévus ; imprévus utilisés.' },
      ],
    },
    {
      type: 'paragraphe',
      essentiel: true,
      condition: 'soldeFinalNegatif',
      texte:
        'Le compte commence novembre à {solde}. Des frais ont pu s’ajouter selon les conditions de sa banque : ils ne sont pas comptés ici.',
    },
    { type: 'intertitre', texte: 'Le plan de novembre' },
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Chaque ligne reprend le plan d’octobre. Garde-la ou change-la. Pour chaque changement, choisis s’il vaut pour novembre seulement ou pour les mois suivants aussi.',
    },
    { type: 'tableau', lignes: [{ libelle: 'Compte au 31 octobre', valeur: '{solde}' }] },
    {
      type: 'choixUnique',
      chemin: 'novembreSaisie.coursNovembre',
      titre: 'Cours comptés pour novembre',
      options: [
        { valeur: 0, libelle: '0 €' },
        { valeur: 9250, libelle: '92,50 €' },
        { valeur: 16000, libelle: '160 €' },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'novembreSaisie.courses',
      titre: 'Courses',
      options: [
        { valeur: 'garder', libelle: 'Garder {C}' },
        { valeur: 'novembre', libelle: 'Prévoir 288 € pour novembre seulement' },
        { valeur: 'durable', libelle: 'Prévoir 288 € — à conserver les mois suivants' },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'novembreSaisie.soeur',
      titre: 'Remboursement à sa sœur',
      condition: 'soeurDecalee',
      options: [
        { valeur: 'rembourser120', libelle: 'Lui rembourser 120 € en novembre' },
        { valeur: 'etaler', libelle: 'Étaler avec elle : 90 € en novembre et 90 € en décembre, puis retour à 60 €' },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'novembreSaisie.projet',
      titre: 'Projet ordinateur',
      condition: 'projetRepris',
      options: [
        { valeur: 'rattraper', libelle: 'Rattraper {repriseProjet} en novembre seulement' },
        { valeur: 'garder', libelle: 'Garder {projetPlan} par mois et décaler l’achat' },
        { valeur: 'suspendreNovembre', libelle: 'Suspendre en novembre seulement' },
        { valeur: 'suspendreDurable', libelle: 'Suspendre — à conserver les mois suivants' },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'novembreSaisie.reserve',
      titre: 'Réserve pour les dépenses de l’année',
      condition: 'reserveReprise',
      options: [
        { valeur: 'reconstituer', libelle: 'La reconstituer en novembre (+{repriseReserve})' },
        { valeur: 'rien', libelle: 'Ne rien changer' },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'novembreSaisie.epargne',
      titre: 'Épargne du mois',
      condition: 'epargneReprise',
      options: [
        { valeur: 'reconstituer', libelle: 'La compenser en novembre (+{repriseEpargne})' },
        { valeur: 'rien', libelle: 'Ne rien changer' },
      ],
    },
    {
      type: 'detailReplie',
      libelle: 'Autres lignes ({nbAutresModifiees})',
      blocs: [
        {
          type: 'choixUnique',
          chemin: 'novembreSaisie.streaming',
          titre: 'Streaming',
          options: [
            { valeur: 'garder', libelle: 'Le garder' },
            { valeur: 'arreter', libelle: 'L’arrêter — à conserver les mois suivants' },
          ],
        },
        {
          type: 'choixUnique',
          chemin: 'novembreSaisie.salle',
          titre: 'Salle de sport',
          options: [
            { valeur: 'garder', libelle: 'La garder' },
            { valeur: 'novembre', libelle: 'Ne pas la payer en novembre seulement' },
            { valeur: 'resilier', libelle: 'La résilier — à conserver les mois suivants' },
          ],
        },
        portee3('novembreModes.imprevus', 'Imprévus', 'Garder {I}'),
        { type: 'montant', chemin: 'novembreMontants.imprevus', libelle: 'Nouveau montant des imprévus', condition: 'imprevusNovModifies' },
        portee3('novembreModes.sorties', 'Sorties', 'Garder {S}'),
        { type: 'montant', chemin: 'novembreMontants.sorties', libelle: 'Nouveau montant des sorties', condition: 'sortiesNovModifiees' },
        portee3('novembreModes.vetements', 'Vêtements', 'Garder {V}'),
        { type: 'montant', chemin: 'novembreMontants.vetements', libelle: 'Nouveau montant des vêtements', condition: 'vetementsNovModifies' },
      ],
    },
    { type: 'resume', condition: 'coursNovChoisi', texte: 'Avec ce plan, la marge de novembre serait de {margeNov}.' },
    {
      type: 'paragraphe',
      condition: 'margeNovNegative',
      texte: 'Le plan de novembre n’est pas entièrement financé de {margeNovAbs}.',
    },
    { type: 'paragraphe', texte: 'Ton plan habituel, à partir de décembre : {apercuHabituel}.' },
    {
      type: 'paragraphe',
      texte: 'Novembre reste un plan : on ne sait pas encore ce qui se passera, ni ce que rapporteront les cours.',
    },
    { type: 'paragraphe', style: 'note', texte: 'Les frais bancaires éventuels ne sont pas comptés.' },
  ],
  boutons: [{ libelle: 'Valider le plan de novembre', action: 'suivant', actif: 'novembreComplet' }],
};

const ecran9: EcranDefinition = {
  numero: 9,
  titre: 'Ce qu’Amadou a appris',
  blocs: [
    { type: 'paragraphe', texte: 'Ce qu’Amadou a fait ce mois-ci tient en cinq repères :' },
    {
      type: 'liste',
      elements: [
        { texte: 'Ce qui entre : compter ce qui est sûr ; ce qui varie arrive en plus.' },
        { texte: 'Régulier ne veut pas dire indispensable, et variable ne veut pas dire facultatif.' },
        { texte: 'Une marge négative se voit avant le compte : c’est un plan pas entièrement financé, pas encore un découvert.' },
        {
          texte:
            'Face à un imprévu : l’argent vraiment libre d’abord, puis ce qui peut attendre, puis ce qu’on renonce à mettre de côté. Et prévenir avant de décaler un engagement.',
        },
        { texte: 'Un écart est une information : on corrige le plan du mois suivant.' },
      ],
    },
    { type: 'paragraphe', texte: 'Ce sont des repères, pas des règles : chaque situation est différente.' },
    {
      type: 'carte',
      blocs: [
        {
          type: 'paragraphe',
          essentiel: true,
          texte:
            'Si le budget ne tient pas alors que l’essentiel est déjà au plus juste, ce n’est pas un échec personnel : certains revenus ne suffisent pas. Il existe une aide gratuite et confidentielle, les Points conseil budget.',
        },
      ],
    },
  ],
  boutons: [{ libelle: 'Continuer', action: 'suivant' }],
};

export const ecransAmadou = [ecran1, ecran2, ecran3, ecran4, ecran5, ecran6, ecran7, ecran8, ecran9];
