// Montants en centimes entiers : aucun calcul en virgule flottante.
export type Centimes = number;

export const euros = (e: number): Centimes => Math.round(e * 100);

export class ErreurBornes extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ErreurBornes';
  }
}

export function verifierEntier(nom: string, valeur: Centimes): void {
  if (!Number.isInteger(valeur)) {
    throw new ErreurBornes(`${nom} doit être un nombre entier de centimes`);
  }
}

export function verifierBornes(nom: string, valeur: Centimes, min: Centimes, max: Centimes): void {
  verifierEntier(nom, valeur);
  if (valeur < min || valeur > max) {
    throw new ErreurBornes(`${nom} hors bornes (${valeur} pour ${min} à ${max})`);
  }
}

export const somme = (valeurs: Centimes[]): Centimes => valeurs.reduce((a, b) => a + b, 0);
