import { Centimes } from './montants';

/**
 * Répartition d'un montant entre des dates selon des poids (EP1 §7.2, C5).
 * Arrondi à l'euro par la méthode des plus forts restes ; une égalité de restes
 * est départagée au profit de la date la plus tôt ; les centimes restants
 * (0,50 € pour un montant saisi impair) vont à la dernière date.
 */
export function repartirPlusFortsRestes(total: Centimes, poids: number[]): Centimes[] {
  const sommePoids = poids.reduce((a, b) => a + b, 0);
  const eurosEntiers = Math.floor(total / 100);
  const centimesRestants = total - eurosEntiers * 100;
  const denominateur = sommePoids * 100;

  const parts = poids.map((p, index) => {
    const numerateur = total * p;
    const plancher = Math.floor(numerateur / denominateur);
    return { index, plancher, reste: numerateur - plancher * denominateur };
  });

  let aDistribuer = eurosEntiers - parts.reduce((a, b) => a + b.plancher, 0);
  const ordre = [...parts].sort((a, b) => b.reste - a.reste || a.index - b.index);
  const bonus = new Array(poids.length).fill(0);
  for (const part of ordre) {
    if (aDistribuer <= 0) break;
    bonus[part.index] = 1;
    aDistribuer -= 1;
  }

  const resultat = parts.map((part) => (part.plancher + bonus[part.index]) * 100);
  resultat[resultat.length - 1] += centimesRestants;
  return resultat;
}

/** Réductions appliquées en partant des dates les plus tardives (EP1 §7.2, C6). */
export function reduireDepuisLaFin(montants: Centimes[], reduction: Centimes): Centimes[] {
  const resultat = [...montants];
  let reste = reduction;
  for (let i = resultat.length - 1; i >= 0 && reste > 0; i -= 1) {
    const retrait = Math.min(resultat[i], reste);
    resultat[i] -= retrait;
    reste -= retrait;
  }
  return resultat;
}
