import { AdaptateurExperience } from '../../lecteur/LecteurExperience';
import { definitionEP1 } from './definition';
import { ETAT_EP1_INITIAL, EtatEP1, lire, reducteur } from './etat';
import { contexteEP1 } from './liaisons';

export { definitionEP1 };

export const adaptateurEP1: AdaptateurExperience<EtatEP1> = {
  etatInitial: ETAT_EP1_INITIAL,
  reducteur,
  contexte: contexteEP1,
  lire,
};
