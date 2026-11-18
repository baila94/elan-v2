// Contrat lecteur → progression. Au lot 1, aucune progression n'est enregistrée :
// le point déclencheur d'EP1 n'a pas de fiche M2 validée, la règle du doute
// s'applique (M2 §7 ; R15 D1). Le lot 3 remplacera l'implémentation.

export interface EvenementActionSignificative {
  experienceId: string;
  version: string;
  pointEntree: string;
}

export interface PortProgression {
  actionSignificative(evenement: EvenementActionSignificative): void;
}

/** Ne fait rien, ne conserve rien, ne transmet rien. */
export const progressionInactive: PortProgression = {
  actionSignificative() {
    // Volontairement vide.
  },
};
