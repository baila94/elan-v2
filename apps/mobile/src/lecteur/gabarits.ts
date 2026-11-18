import { Condition, Contexte, Gabarit } from './types';

export class ErreurGabarit extends Error {}

/** Remplace chaque « {cle} » par sa valeur ; une clé inconnue est une erreur, jamais un texte vide. */
export function remplir(gabarit: Gabarit, contexte: Contexte): string {
  return gabarit.replace(/\{([A-Za-z0-9_]+)\}/g, (_, cle: string) => {
    const valeur = contexte.valeurs[cle];
    if (valeur === undefined) throw new ErreurGabarit(`Valeur inconnue : ${cle}`);
    return valeur;
  });
}

export function clesDuGabarit(gabarit: Gabarit): string[] {
  return [...gabarit.matchAll(/\{([A-Za-z0-9_]+)\}/g)].map((m) => m[1]);
}

/** Évalue une condition ; « !nom » en est la négation. Une condition inconnue est une erreur. */
export function verifie(condition: Condition | undefined, contexte: Contexte): boolean {
  if (!condition) return true;
  const negation = condition.startsWith('!');
  const nom = negation ? condition.slice(1) : condition;
  const valeur = contexte.conditions[nom];
  if (valeur === undefined) throw new ErreurGabarit(`Condition inconnue : ${nom}`);
  return negation ? !valeur : valeur;
}
