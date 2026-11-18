import { Bloc, EcranDefinition } from '../../../lecteur/types';

// Écrans 10 à 12 : Marc. Textes affichés repris d'EP1 §6.

const porteeOctobre = (cle: string): Bloc => ({
  type: 'detailReplie',
  condition: `levierOct_${cle}`,
  libelle: 'Ce changement vaut-il seulement pour ce mois-ci, ou pour son plan habituel ?',
  blocs: [
    {
      type: 'choixUnique',
      chemin: `marc.durablesOctobre.${cle}`,
      options: [
        { valeur: false, libelle: 'Seulement ce mois-ci' },
        { valeur: true, libelle: 'Changer son plan habituel' },
      ],
    },
    { type: 'paragraphe', condition: `!durableOct_${cle}`, texte: 'Le mois prochain, son plan habituel reprend tel quel.' },
    { type: 'paragraphe', condition: `durableOct_${cle}`, texte: 'À partir du mois prochain, ce changement fait partie de son plan.' },
  ],
});

const porteeDecembre = (cle: string): Bloc => ({
  type: 'detailReplie',
  condition: `levierDec_${cle}`,
  libelle: 'Ce mois-ci, l’effet est le même dans les deux cas ; la différence apparaît dans son plan des mois suivants.',
  blocs: [
    {
      type: 'choixUnique',
      chemin: `marc.durablesDecembre.${cle}`,
      options: [
        { valeur: false, libelle: 'Seulement ce mois-ci' },
        { valeur: true, libelle: 'Changer son plan habituel' },
      ],
    },
  ],
});

const ecran10: EcranDefinition = {
  numero: 10,
  titre: 'Marc, des revenus qui changent',
  blocs: [
    { type: 'paragraphe', style: 'citation', texte: 'Même méthode, autre situation : des revenus qui changent chaque mois.' },
    {
      type: 'paragraphe',
      style: 'citation',
      texte:
        'Marc a 41 ans. Il est intérimaire et vit en colocation. Ses revenus changent chaque mois : 1 280 €, 1 750 €, 1 900 € et 1 410 € ces quatre derniers mois.\nIl veut un plan habituel : la façon dont il répartit son argent chaque mois, tant que rien ne l’oblige à changer.',
    },
    {
      type: 'carte',
      titre: 'Ses dépenses',
      blocs: [
        {
          type: 'liste',
          elements: [
            { texte: 'Essentielles : 910 €.' },
            { texte: 'Peuvent passer après : loisirs 120 €, musique 11 €.' },
            { texte: 'Réserve pour l’assurance auto : 35 € par mois (420 € par an), mise de côté.' },
            { texte: 'Total : 1 076 €.' },
            { texte: 'Avant octobre : coussin 0 €, réserve assurance 0 €.' },
          ],
        },
        {
          type: 'detailReplie',
          libelle: 'Détail des dépenses essentielles',
          blocs: [
            {
              type: 'paragraphe',
              texte: 'colocation 495 €, téléphone 25 €, énergie 60 € (720 € par an), courses 250 €, carburant 80 €.',
            },
          ],
        },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'marc.base',
      titre: 'Sur quel montant Marc bâtit-il son plan ?',
      options: [
        { valeur: 128000, libelle: '1 280 € : le plus bas de ses quatre derniers revenus' },
        { valeur: 158500, libelle: '1 585 € : la moyenne de ses quatre derniers revenus' },
        { valeur: 190000, libelle: '1 900 € : le plus haut de ses quatre derniers revenus' },
      ],
    },
    {
      type: 'choixUnique',
      chemin: 'raisonMarc',
      titre: 'Pourquoi ce montant ?',
      condition: 'baseChoisie',
      options: [
        { valeur: 'plusFaible', libelle: 'C’est un montant qu’il a reçu même lors de son mois le plus faible récemment' },
        { valeur: 'moyenne', libelle: 'C’est ce qu’il gagne en moyenne' },
        { valeur: 'bonMois', libelle: 'Il compte sur un bon mois' },
      ],
    },
    { type: 'intertitre', condition: 'baseChoisie', texte: 'Que fait-il des {margeMarc} qui restent ?' },
    {
      type: 'montant',
      chemin: 'marc.reglages.coussin',
      condition: 'baseChoisie',
      libelle: 'Coussin : argent mis de côté pour les mauvais mois',
    },
    { type: 'montant', chemin: 'marc.reglages.imprevus', condition: 'baseChoisie', libelle: 'Imprévus (laissés sur le compte)' },
    { type: 'montant', chemin: 'marc.reglages.depensesEnPlus', condition: 'baseChoisie', libelle: 'Dépenses en plus' },
    {
      type: 'resume',
      condition: 'baseChoisie',
      texte: 'Non réparti : {nonReparti} (reste sur le compte, sans affectation)',
    },
    { type: 'intertitre', condition: 'marcPret', texte: 'Le 1er octobre' },
    {
      type: 'paragraphe',
      style: 'citation',
      condition: 'marcPret',
      texte: 'Le 1er octobre, Marc reçoit 1 410 €. Son plan prévoyait {B}.',
    },
    {
      type: 'carte',
      titre: 'Ce mois-ci',
      condition: 'marcPret',
      blocs: [
        {
          type: 'liste',
          elements: [
            { texte: 'Reçu : 1 410 €' },
            { texte: 'Dépenses prévues : {depensesPrevuesOct}' },
            { texte: 'À mettre de côté : {aMettreOct}' },
            { texte: 'Compte en fin de mois s’il suit son plan : {compteAvantOct}' },
          ],
        },
      ],
    },
    { type: 'paragraphe', condition: 'compteOctPositif', texte: 'Son plan tient ce mois-ci.' },
    {
      type: 'paragraphe',
      essentiel: true,
      condition: 'compteOctNegatif',
      texte:
        'S’il suit son plan sans rien changer, il lui manquerait {manqueAvantOct} ce mois-ci. Un compte en dessous de zéro n’est pas une solution acquise : selon les conditions de son compte, des paiements pourraient être refusés ou entraîner des frais. Marc peut adapter ce mois-ci.',
    },
    {
      type: 'paragraphe',
      condition: 'compteOctNegatif',
      texte: 'À ce stade, Marc ne mobilise pas ses réserves : il ajuste d’abord ce qu’il dépense et ce qu’il met de côté ce mois-ci.',
    },
    {
      type: 'montant',
      chemin: 'marc.leviersOctobre.depensesEnPlus',
      condition: 'levierOctAffiche_depensesEnPlus',
      libelle: 'Renoncer aux dépenses en plus',
      aide: 'Jusqu’à {maxOct_depensesEnPlus}. Dépense évitée.',
    },
    porteeOctobre('depensesEnPlus'),
    {
      type: 'montant',
      chemin: 'marc.leviersOctobre.loisirs',
      condition: 'levierOctAffiche_loisirs',
      libelle: 'Réduire ses loisirs',
      aide: 'Jusqu’à 120 €. Dépense évitée.',
    },
    porteeOctobre('loisirs'),
    {
      type: 'montant',
      chemin: 'marc.leviersOctobre.coussin',
      condition: 'levierOctAffiche_coussin',
      libelle: 'Ne pas verser au coussin ce mois-ci',
      aide: 'Jusqu’à {maxOct_coussin}. Versement suspendu.',
    },
    porteeOctobre('coussin'),
    {
      type: 'montant',
      chemin: 'marc.leviersOctobre.reserve',
      condition: 'levierOctAffiche_reserve',
      libelle: 'Ne pas verser à la réserve assurance ce mois-ci',
      aide: 'Jusqu’à 35 €. L’assurance auto reste à payer.',
    },
    porteeOctobre('reserve'),
    { type: 'resume', condition: 'compteOctNegatif', texte: 'Il manque encore {manqueRestantOct}.' },
    {
      type: 'paragraphe',
      condition: 'surplusOct',
      texte: '{surplusOctMontant} de plus que nécessaire : ils restent sur son compte.',
    },
    {
      type: 'paragraphe',
      condition: 'liberationOct',
      texte: 'À partir du mois prochain, ce changement libère {FOct} par mois. Par défaut, ils restent sur son compte, sans affectation.',
    },
    {
      type: 'choixUnique',
      chemin: 'ui.reaffOctMode',
      condition: 'liberationOct',
      options: [
        { valeur: 'non', libelle: 'Laisser non affecté' },
        { valeur: 'coussin', libelle: 'Mettre de côté dans le coussin : 0 à {FcOct}', condition: 'FcOctPositif' },
      ],
    },
    {
      type: 'montant',
      chemin: 'marc.reaffectationOctobre',
      condition: 'reaffOctCoussin',
      libelle: 'Montant mis de côté dans le coussin chaque mois',
    },
    {
      type: 'paragraphe',
      condition: 'FncOctPositif',
      texte: 'Les {FncOct} libérés en arrêtant le versement au coussin ne peuvent pas y retourner : ils restent sur son compte.',
    },
    {
      type: 'tableau',
      condition: 'liberationOct',
      lignes: [
        { libelle: 'Aperçu du plan habituel', valeur: '', intertitre: true },
        { libelle: 'Dépenses', valeur: '{planOct_depenses}' },
        { libelle: 'Réserve', valeur: '{planOct_reserve}' },
        { libelle: 'Coussin', valeur: '{planOct_coussin}' },
        { libelle: 'Imprévus', valeur: '{planOct_imprevus}' },
        { libelle: 'Non affecté', valeur: '{planOct_nonAffecte}' },
        { libelle: 'Total', valeur: '{planOct_total}', gras: true },
      ],
    },
    {
      type: 'paragraphe',
      style: 'note',
      condition: 'liberationOct',
      texte:
        'Mettre de côté ne crée pas d’argent : chaque euro placé dans le coussin quitte son compte, chaque mois, à partir du mois prochain.',
    },
    { type: 'resume', condition: 'marcPret', texte: 'Fin octobre : {compteApresOct} sur son compte.' },
    { type: 'paragraphe', condition: 'marcPret1280', texte: 'Les bons mois arrivent en plus ; les mois bas sont déjà couverts.' },
    { type: 'paragraphe', condition: 'marcPret1585', texte: 'Ça tient un mois moyen ; un mois plus bas laisse un trou.' },
    { type: 'paragraphe', condition: 'marcPret1900', texte: 'Le plan suppose que chaque mois est le meilleur.' },
  ],
  boutons: [{ libelle: 'Voir le mois suivant', action: 'suivant', actif: 'marcPret' }],
};

const ecran11: EcranDefinition = {
  numero: 11,
  titre: 'Novembre : un bon mois',
  blocs: [
    {
      type: 'paragraphe',
      style: 'citation',
      condition: '!base1900',
      texte:
        'En novembre, Marc a eu beaucoup de missions : 1 900 €. Il suit son plan habituel{modifieEnOctobre}, versements prévus compris. Il reste {aRepartir} de plus. Qu’en fait-il ?',
    },
    {
      type: 'choixUnique',
      chemin: 'marc.choixNovembre',
      condition: '!base1900',
      options: [
        { valeur: 'coussin', libelle: 'Tout mettre dans le coussin ({optionCoussin})' },
        { valeur: 'unPeuDeTout', libelle: 'Un peu de tout ({optionUnPeuDeTout})' },
        { valeur: 'depenser', libelle: 'Tout dépenser ({optionDepenser})' },
      ],
    },
    {
      type: 'paragraphe',
      style: 'citation',
      condition: 'base1900',
      texte: 'En novembre, Marc a reçu 1 900 €, le montant de son plan habituel. Il n’a rien en plus à répartir.',
    },
    { type: 'paragraphe', condition: 'base1900OctNegatif', texte: 'Le manque d’octobre n’est pas rattrapé.' },
    {
      type: 'paragraphe',
      condition: 'base1900Reaffectation',
      texte: '{reaffectationOct} sont allés dans son coussin, comme prévu par son plan.',
    },
    {
      type: 'paragraphe',
      condition: 'base1900ImNA',
      texte: '{imNA} restent sur son compte (imprévus et argent non affecté).',
    },
    {
      type: 'resume',
      condition: 'novembrePret',
      texte: 'Fin novembre : {compteNov} sur son compte, coussin {coussinNov}{projetNovTexte}, réserve assurance {reserveNov}.',
    },
  ],
  boutons: [{ libelle: 'Voir le mois suivant', action: 'suivant', actif: 'novembrePret' }],
};

const ecran12: EcranDefinition = {
  numero: 12,
  titre: 'Décembre : un mois difficile',
  blocs: [
    { type: 'intertitre', texte: 'Si Marc ne change rien' },
    {
      type: 'paragraphe',
      style: 'citation',
      texte: 'En décembre, une semaine sans mission : Marc reçoit 900 €. Et sa voiture a besoin d’une réparation à 300 €.',
    },
    { type: 'paragraphe', texte: 'S’il suit son plan habituel sans rien changer, son compte serait à {Xdec} fin décembre.' },
    {
      type: 'paragraphe',
      condition: 'imDecPositif',
      texte:
        'Ses imprévus ({imDec} par mois dans son plan) sont restés sur son compte : ils sont déjà comptés dans ce montant. C’est à ça qu’ils servent.',
    },
    {
      type: 'paragraphe',
      essentiel: true,
      condition: 'xDecNegatif',
      texte: 'Selon les conditions de son compte, des paiements pourraient être refusés ou entraîner des frais.',
    },
    { type: 'paragraphe', condition: '!xDecNegatif', texte: 'Son plan absorbe ce mois difficile.' },
    { type: 'intertitre', texte: 'Réduire ce qui peut l’être ce mois-ci' },
    {
      type: 'montant',
      chemin: 'marc.leviersDecembre.depensesEnPlus',
      condition: 'levierDecAffiche_depensesEnPlus',
      libelle: 'Renoncer aux dépenses en plus',
      aide: 'Jusqu’à {maxDec_depensesEnPlus}. Dépense évitée.',
    },
    porteeDecembre('depensesEnPlus'),
    {
      type: 'montant',
      chemin: 'marc.leviersDecembre.loisirs',
      condition: 'levierDecAffiche_loisirs',
      libelle: 'Réduire ses loisirs',
      aide: 'Jusqu’à {maxDec_loisirs}. Dépense évitée.',
    },
    porteeDecembre('loisirs'),
    {
      type: 'montant',
      chemin: 'marc.leviersDecembre.coussin',
      condition: 'levierDecAffiche_coussin',
      libelle: 'Ne pas verser au coussin ce mois-ci',
      aide: 'Jusqu’à {maxDec_coussin}. Versement suspendu : ce qu’il a déjà mis de côté ne bouge pas.',
    },
    porteeDecembre('coussin'),
    {
      type: 'montant',
      chemin: 'marc.leviersDecembre.reserve',
      condition: 'levierDecAffiche_reserve',
      libelle: 'Ne pas verser à la réserve assurance ce mois-ci',
      aide: 'Jusqu’à {maxDec_reserve}. L’assurance reste due.',
    },
    porteeDecembre('reserve'),
    { type: 'ligneGrisee', libelle: 'Musique, 11 €', raison: 'Abonnement non réductible ce mois-ci.' },
    { type: 'resume', texte: 'Après ces choix, il manque encore {R1}.' },
    { type: 'intertitre', condition: 'R1Positif', texte: 'Mobiliser ses réserves' },
    {
      type: 'paragraphe',
      condition: 'R1Positif',
      texte: 'Il manque encore {R1}. Tu peux reprendre de l’argent mis de côté, sans dépasser ce montant.',
    },
    {
      type: 'montant',
      chemin: 'marc.retraitsDecembre.coussin',
      condition: 'R1Positif',
      libelle: 'Reprendre de l’argent du coussin',
      aide: 'Disponible : {dispoCoussin}. Le coussin baisse d’autant : c’est son rôle, mais il protégera moins la prochaine fois.',
    },
    {
      type: 'montant',
      chemin: 'marc.retraitsDecembre.projet',
      condition: 'retraitProjetAffiche',
      libelle: 'Reprendre l’argent du projet',
      aide: 'Disponible : {dispoProjet}. Le projet recule.',
    },
    { type: 'ligneGrisee', condition: 'retraitProjetGrise', libelle: 'Reprendre l’argent du projet', raison: 'Disponible : 0 €.' },
    {
      type: 'montant',
      chemin: 'marc.retraitsDecembre.reserve',
      condition: 'R1Positif',
      libelle: 'Reprendre la réserve assurance',
      aide: 'Disponible : {dispoReserve}. L’assurance auto devra être payée sans cette réserve.',
    },
    { type: 'resume', condition: 'R1Positif', texte: 'Repris : {Ydec}. Il manque encore {R1moinsY}.' },
    {
      type: 'paragraphe',
      essentiel: true,
      condition: 'toutMobilise',
      texte: 'Même en mobilisant tout ce qui est possible, il manque {R2}.',
    },
    { type: 'bouton', libelle: 'Ne rien changer', action: 'reinitialiserDecembre' },
    { type: 'paragraphe', condition: 'liberationDec', texte: 'À partir du mois prochain, ce changement libère {F12} par mois.' },
    {
      type: 'choixUnique',
      chemin: 'ui.reaffDecMode',
      condition: 'liberationDec',
      options: [
        { valeur: 'non', libelle: 'Laisser non affecté' },
        { valeur: 'coussin', libelle: 'Mettre de côté dans le coussin, de 0 à {Fc12}', condition: 'Fc12Positif' },
        { valeur: 'projet', libelle: 'Mettre de côté dans le projet, de 0 à {FcFnc12}', condition: 'projetExiste' },
      ],
    },
    {
      type: 'paragraphe',
      condition: 'coussinGriseDec',
      texte: 'Cet argent vient du versement au coussin : il ne peut pas y retourner.',
    },
    {
      type: 'montant',
      chemin: 'marc.reaffectationDecembre.montant',
      condition: 'reaffDecActive',
      libelle: 'Montant mis de côté chaque mois',
    },
    { type: 'paragraphe', condition: 'A12Positif', texte: 'Tu en mets {A12} de côté dans {cibleDec}.' },
    { type: 'paragraphe', condition: 'XmoinsA12Positif', texte: '{XmoinsA12} restent sur son compte, sans affectation.' },
    {
      type: 'tableau',
      condition: 'liberationDec',
      lignes: [
        { libelle: 'Aperçu du plan habituel', valeur: 'Avant → Après', intertitre: true },
        { libelle: 'Dépenses en plus', valeur: '{planDec_depensesEnPlus}' },
        { libelle: 'Loisirs', valeur: '{planDec_loisirs}' },
        { libelle: 'Réserve', valeur: '{planDec_reserve}' },
        { libelle: 'Coussin', valeur: '{planDec_coussin}' },
        { libelle: 'Projet', valeur: '{planDec_projet}', condition: 'projetExiste' },
        { libelle: 'Non affecté', valeur: '{planDec_nonAffecte}' },
        { libelle: 'Total', valeur: '{planDec_total}', gras: true },
      ],
    },
    {
      type: 'paragraphe',
      condition: 'A12Positif',
      texte: 'Les mois où il reçoit {B}, {XmoinsA12} restent en plus sur son compte, au lieu de {F12} s’il n’avait rien mis de côté.',
    },
    {
      type: 'paragraphe',
      condition: 'reserveSuspendueTotale',
      texte:
        'L’assurance auto (420 € par an) restera à payer : avec {reserveFinDec} de côté, il faudra trouver {assuranceManquante} à l’échéance.',
    },
    {
      type: 'paragraphe',
      condition: 'reserveSuspenduePartielle',
      texte:
        'L’assurance auto (420 € par an) restera à payer : avec {reserveFinDec} de côté, il faudra trouver jusqu’à {assuranceManquante} à l’échéance, selon les versements d’ici là.',
    },
    {
      type: 'carte',
      blocs: [
        {
          type: 'paragraphe',
          texte:
            'Marc n’était pas obligé de garder son plan habituel. Réduire d’abord ce qui pouvait l’être protège ce qu’il a mis de côté. Toucher à la réserve de l’assurance déplace le problème.',
        },
        { type: 'paragraphe', condition: '!base1900', texte: 'Ton choix de novembre se voit ici, dans ce que Marc peut mobiliser.' },
        { type: 'paragraphe', condition: 'octNegatifSansReaction', texte: 'Réagir dès octobre aurait évité d’accumuler le manque.' },
        {
          type: 'paragraphe',
          condition: 'reaffectationOctFaite',
          texte: 'Mettre de côté ne change pas ce que Marc possède ; ça change ce qu’il risque de dépenser sans y penser.',
        },
        {
          type: 'paragraphe',
          condition: 'reservesRepriseAvecReductible',
          texte:
            'Il a repris {Ydec} de ses réserves alors que {Zdec} de dépenses pouvaient encore être réduits ce mois-ci. Les deux étaient permis : réduire ces dépenses aurait gardé cet argent de côté pour un prochain coup dur.',
        },
      ],
    },
  ],
  boutons: [{ libelle: 'Continuer', action: 'suivant' }],
};

export const ecransMarc = [ecran10, ecran11, ecran12];
