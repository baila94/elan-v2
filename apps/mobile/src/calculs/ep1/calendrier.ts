import {
  COURSES_PREMIERE_QUINZAINE,
  COURS_RECUS_LE_20,
  MoyensEcran5,
  PlanAmadou,
  REMBOURSEMENT_SOEUR,
  REPARATION,
  SALAIRE,
  SALLE_DE_SPORT,
  STREAMING,
  reprises,
  verifierMoyens,
  verifierPlan,
} from './amadou';
import { reduireDepuisLaFin, repartirPlusFortsRestes } from './arrondi';
import { Centimes, euros } from './montants';

// Calendrier de simulation d'Amadou (EP1 §7.2, C1 à C8).

export type CleLigne =
  | 'salaire'
  | 'salle'
  | 'misDeCote'
  | 'transport'
  | 'logement'
  | 'energie'
  | 'telephone'
  | 'coursesQuinzaine'
  | 'sortiesQuinzaine'
  | 'vetementsQuinzaine'
  | 'repriseEpargne'
  | 'repriseReserve'
  | 'repriseProjet'
  | 'reparation'
  | 'courses'
  | 'sorties'
  | 'vetements'
  | 'streaming'
  | 'cours'
  | 'soeur';

export interface LigneCalendrier {
  jour: number;
  cle: CleLigne;
  montant: Centimes; // positif : entrée ; négatif : sortie
  blocQuinzaine: boolean; // dépenses de la première quinzaine regroupées le 15 (C2)
  solde: Centimes; // solde après la ligne
}

const JOURS_SORTIES = [17, 23, 27, 29];
const POIDS_SORTIES = [30, 22, 30, 23];
const JOURS_VETEMENTS = [19, 24, 28];
const POIDS_VETEMENTS = [1, 1, 2];
const COURSES_SECONDE_QUINZAINE: [number, Centimes][] = [
  [16, euros(40)],
  [22, euros(32)],
  [26, euros(36)],
  [30, euros(36)],
];

export function calendrierOctobre(plan: PlanAmadou, moyens: MoyensEcran5): LigneCalendrier[] {
  verifierPlan(plan);
  verifierMoyens(plan, moyens);
  const brutes: Omit<LigneCalendrier, 'solde'>[] = [];
  const ajouter = (jour: number, cle: CleLigne, montant: Centimes, blocQuinzaine = false) => {
    if (montant !== 0) brutes.push({ jour, cle, montant, blocQuinzaine });
  };

  const misDeCote = plan.reserve + plan.projet + plan.epargne;
  ajouter(1, 'salaire', SALAIRE);
  ajouter(1, 'salle', -SALLE_DE_SPORT);
  ajouter(1, 'misDeCote', -misDeCote);
  ajouter(2, 'transport', -euros(43));
  ajouter(3, 'logement', -euros(621));
  ajouter(5, 'energie', -euros(48));
  ajouter(10, 'telephone', -euros(32));

  // C2 : bloc de la première quinzaine, puis reprises, puis réparation.
  ajouter(15, 'coursesQuinzaine', -COURSES_PREMIERE_QUINZAINE, true);
  ajouter(15, 'sortiesQuinzaine', -plan.sorties / 2, true);
  ajouter(15, 'vetementsQuinzaine', -plan.vetements / 2, true);
  ajouter(15, 'repriseEpargne', moyens.epargne);
  ajouter(15, 'repriseReserve', moyens.reserve);
  ajouter(15, 'repriseProjet', moyens.projet);
  ajouter(15, 'reparation', -REPARATION);

  // C4 à C6 : répartition de la seconde moitié, puis réductions depuis les dates tardives.
  const sorties = reduireDepuisLaFin(repartirPlusFortsRestes(plan.sorties / 2, POIDS_SORTIES), moyens.sorties);
  const vetements = reduireDepuisLaFin(
    repartirPlusFortsRestes(plan.vetements / 2, POIDS_VETEMENTS),
    moyens.vetements,
  );

  const parJour: Omit<LigneCalendrier, 'solde'>[] = [];
  const pousser = (jour: number, cle: CleLigne, montant: Centimes) => {
    if (montant !== 0) parJour.push({ jour, cle, montant, blocQuinzaine: false });
  };
  for (const [jour, montant] of COURSES_SECONDE_QUINZAINE) pousser(jour, 'courses', -montant);
  JOURS_SORTIES.forEach((jour, i) => pousser(jour, 'sorties', -sorties[i]));
  JOURS_VETEMENTS.forEach((jour, i) => pousser(jour, 'vetements', -vetements[i]));
  pousser(18, 'streaming', -STREAMING);
  pousser(20, 'cours', COURS_RECUS_LE_20);
  if (!moyens.decalerSoeur) pousser(25, 'soeur', -REMBOURSEMENT_SOEUR);
  parJour.sort((a, b) => a.jour - b.jour);

  let solde = 0;
  return [...brutes, ...parJour].map((ligne) => {
    solde += ligne.montant;
    return { ...ligne, solde };
  });
}

export interface PremierManque {
  jour: number;
  montant: Centimes;
  avantLe15: boolean;
}

export interface Remontee {
  debut: PremierManque;
  finJour: number;
  finAvantLe15: boolean;
  jour: number;
  cause: 'reprises' | 'cours';
}

/** C7 : premier jour où le solde, calculé ligne par ligne, passe sous zéro. */
export function premierManque(lignes: LigneCalendrier[]): PremierManque | null {
  const ligne = lignes.find((l) => l.solde < 0);
  return ligne ? { jour: ligne.jour, montant: ligne.solde, avantLe15: ligne.blocQuinzaine } : null;
}

/** C8 : remontée du solde après le premier manque, et sa cause. */
export function remontee(lignes: LigneCalendrier[]): Remontee | null {
  const debutIndex = lignes.findIndex((l) => l.solde < 0);
  if (debutIndex < 0) return null;
  for (let i = debutIndex + 1; i < lignes.length; i += 1) {
    const ligne = lignes[i];
    if (ligne.montant > 0 && ligne.solde >= 0) {
      const derniereNegative = lignes[i - 1];
      return {
        debut: premierManque(lignes)!,
        finJour: derniereNegative.jour,
        finAvantLe15: derniereNegative.blocQuinzaine,
        jour: ligne.jour,
        cause: ligne.cle === 'cours' ? 'cours' : 'reprises',
      };
    }
  }
  return null;
}

export interface SimulationOctobre {
  lignes: LigneCalendrier[];
  soldeFinal: Centimes;
  misDeCoteNet: { reserve: Centimes; projet: Centimes; epargne: Centimes; total: Centimes };
  duSoeur: Centimes;
  premierManque: PremierManque | null;
  remontee: Remontee | null;
  frise: { avantReparation: Centimes; apresReparation: Centimes; le20: Centimes; le25: Centimes; fin: Centimes };
  depensesPayees: Centimes;
  conservation: boolean;
}

const soldeApres = (lignes: LigneCalendrier[], predicat: (l: LigneCalendrier) => boolean): Centimes => {
  let solde = 0;
  for (const ligne of lignes) {
    if (!predicat(ligne)) break;
    solde = ligne.solde;
  }
  return solde;
};

export function simulerOctobre(plan: PlanAmadou, moyens: MoyensEcran5): SimulationOctobre {
  const lignes = calendrierOctobre(plan, moyens);
  const soldeFinal = lignes[lignes.length - 1].solde;
  const misDeCoteNet = {
    reserve: plan.reserve - moyens.reserve,
    projet: plan.projet - moyens.projet,
    epargne: plan.epargne - moyens.epargne,
    total: plan.reserve + plan.projet + plan.epargne - reprises(moyens),
  };
  const indexReparation = lignes.findIndex((l) => l.cle === 'reparation');
  const depensesPayees = -lignes
    .filter((l) => l.montant < 0 && l.cle !== 'misDeCote')
    .reduce((a, l) => a + l.montant, 0);
  return {
    lignes,
    soldeFinal,
    misDeCoteNet,
    duSoeur: moyens.decalerSoeur ? REMBOURSEMENT_SOEUR : 0,
    premierManque: premierManque(lignes),
    remontee: remontee(lignes),
    frise: {
      avantReparation: lignes[indexReparation - 1].solde,
      apresReparation: lignes[indexReparation].solde,
      le20: soldeApres(lignes, (l) => l.jour <= 20),
      le25: soldeApres(lignes, (l) => l.jour <= 25),
      fin: soldeFinal,
    },
    depensesPayees,
    // Contrôle de conservation : 1 680 = dépenses payées + mis de côté net + solde final.
    conservation: depensesPayees + misDeCoteNet.total + soldeFinal === SALAIRE + COURS_RECUS_LE_20,
  };
}
