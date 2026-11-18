// Format des montants affichés : « 1 640 € », « 92,50 € », « −19 € », « +73,50 € ».
const MOINS = '−';
const ESPACE_INSECABLE = ' ';

function groupe(euros: number): string {
  return String(euros).replace(/\B(?=(\d{3})+(?!\d))/g, ESPACE_INSECABLE);
}

/** Montant sans unité, à partir de centimes : « 1 640 », « 92,50 ». */
export function nombre(centimes: number): string {
  const absolu = Math.abs(centimes);
  const entiers = Math.floor(absolu / 100);
  const reste = absolu % 100;
  const texte = reste === 0 ? groupe(entiers) : `${groupe(entiers)},${String(reste).padStart(2, '0')}`;
  return centimes < 0 ? `${MOINS}${texte}` : texte;
}

/** Montant avec unité : « 1 640 € », « −67 € ». */
export const eur = (centimes: number): string => `${nombre(centimes)}${ESPACE_INSECABLE}€`;

/** Montant signé : « +51 € », « −19 € ». */
export const eurSigne = (centimes: number): string => (centimes > 0 ? `+${eur(centimes)}` : eur(centimes));

/** Valeur absolue : « 19 € ». */
export const eurAbs = (centimes: number): string => eur(Math.abs(centimes));
