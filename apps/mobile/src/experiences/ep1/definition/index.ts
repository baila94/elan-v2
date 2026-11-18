import { DefinitionExperience, EcranDefinition } from '../../../lecteur/types';
import { ecransAmadou } from './amadou';
import { ecransMarc } from './marc';

const ecran13: EcranDefinition = {
  numero: 13,
  titre: 'Ce que tu emportes',
  blocs: [
    {
      type: 'paragraphe',
      texte:
        'Tu as aidé Amadou à bâtir un plan, à faire face à un imprévu et à préparer le mois suivant. Puis tu as appliqué la même méthode à Marc.',
    },
    { type: 'paragraphe', texte: 'Ce que tu peux réutiliser :' },
    {
      type: 'liste',
      elements: [
        { texte: 'organiser ses ressources et ses dépenses avant le mois, et non après ;' },
        { texte: 'distinguer ce qui est essentiel de ce qui peut attendre, quelle que soit la régularité de la dépense ;' },
        { texte: 'anticiper les imprévus et les dépenses de l’année ;' },
        { texte: 'reconnaître un plan qui n’est pas entièrement financé, avant que le compte ne le montre ;' },
        { texte: 'réagir en regardant l’argent vraiment disponible, sans confondre le plan avec le solde ;' },
        { texte: 'choisir si un changement vaut pour un mois ou devient une nouvelle habitude ;' },
        { texte: 'bâtir son plan sur un revenu qu’on reçoit même les mois faibles.' },
      ],
    },
    {
      type: 'paragraphe',
      texte:
        'Pour ton propre budget, tu peux reprendre la même démarche sur papier, dans une note ou dans un tableau : ce qui entre, ce qui est essentiel, ce qui peut attendre, ce que tu mets de côté, et une part pour les imprévus. Élan ne te demande pas tes chiffres.',
    },
    // Renvois conditionnels (EP1 §6, écran 13 ; réserve R-4) : affichés seulement si les
    // contenus correspondants sont publiés. Aucun ne l'est au lot 1 : ils sont masqués.
  ],
  boutons: [{ libelle: 'Terminer', action: 'terminer' }],
};

export const definitionEP1: DefinitionExperience = {
  id: 'EP1',
  version: 'ep1-transcription-1',
  ecrans: [...ecransAmadou, ...ecransMarc, ecran13],
  actionSignificative: { ecran: 4, evenement: 'plan_valide', pointEntree: 'EP1-PE-ECRAN4' },
  // Aucune fiche de classement M2 validée : la règle du doute s'applique (M2 §7).
  pointsEntree: [{ id: 'EP1-PE-ECRAN4', ficheM2Validee: false }],
  // Pas des réglages de montant : réserve EP1 R-5, valeur provisoire.
  reglages: { pasMontant: 1000 },
};
