import { Centimes, ErreurBornes, euros, verifierBornes } from './montants';

// Données de la simulation d'Amadou (EP1 §4.1). Situation fictive.
export const SALAIRE = euros(1640);
export const DEPENSES_FIXES = euros(851);
export const COURS_RECUS_LE_20 = euros(40);
export const REPARATION = euros(130);
export const COURSES_REELLES = euros(288);
export const COURSES_PREMIERE_QUINZAINE = euros(144);
export const REMBOURSEMENT_SOEUR = euros(60);
export const SALLE_DE_SPORT = euros(29);
export const STREAMING = euros(18);
export const OPTIONS_COURS: Centimes[] = [euros(0), euros(92.5), euros(160)];
export const MONTANT_MAX_LIGNE = euros(2000);

export interface PlanAmadou {
  courses: Centimes; // C
  sorties: Centimes; // S
  vetements: Centimes; // V
  reserve: Centimes;
  projet: Centimes;
  epargne: Centimes; // E
  imprevus: Centimes; // I
}

// Plan esquissé par Amadou (EP1 écran 4).
export const PLAN_ESQUISSE: PlanAmadou = {
  courses: euros(270),
  sorties: euros(210),
  vetements: euros(80),
  reserve: euros(38),
  projet: euros(100),
  epargne: euros(50),
  imprevus: euros(60),
};

export type Couverture = 'totale' | 'partielle' | 'nulle';

export interface ResultatPlan {
  ressources: Centimes;
  misDeCote: Centimes; // M
  total: Centimes; // T
  marge: Centimes; // m
  couverture: Couverture;
  imprevusCouverts: Centimes;
}

export function verifierPlan(plan: PlanAmadou): void {
  for (const [nom, valeur] of Object.entries(plan)) {
    verifierBornes(`plan.${nom}`, valeur, 0, MONTANT_MAX_LIGNE);
  }
}

export function verifierCours(K: Centimes): void {
  if (!OPTIONS_COURS.includes(K)) {
    throw new ErreurBornes('cours comptés : 0 €, 92,50 € ou 160 € seulement');
  }
}

/** EP1 §7.1 : plan, total et marge. */
export function calculerPlan(plan: PlanAmadou, K: Centimes): ResultatPlan {
  verifierPlan(plan);
  verifierCours(K);
  const misDeCote = plan.reserve + plan.projet + plan.epargne;
  const total = DEPENSES_FIXES + plan.courses + plan.sorties + plan.vetements + misDeCote + plan.imprevus;
  const ressources = SALAIRE + K;
  const marge = ressources - total;
  const I = plan.imprevus;
  let couverture: Couverture;
  let imprevusCouverts: Centimes;
  if (marge >= 0) {
    couverture = 'totale';
    imprevusCouverts = I;
  } else if (marge > -I) {
    couverture = 'partielle';
    imprevusCouverts = I + marge;
  } else {
    couverture = 'nulle';
    imprevusCouverts = 0;
  }
  return { ressources, misDeCote, total, marge, couverture, imprevusCouverts };
}

export interface Situation15 {
  compteAvantReparation: Centimes;
  misDeCote: Centimes;
  resteAPayer: Centimes;
  argentLibre: Centimes; // L
  manque: Centimes;
}

/** EP1 §7.1 et écran 5 : le compte le 15, avant la réparation. */
export function situationAu15(plan: PlanAmadou): Situation15 {
  verifierPlan(plan);
  const misDeCote = plan.reserve + plan.projet + plan.epargne;
  const compteAvantReparation = euros(723) - misDeCote - plan.sorties / 2 - plan.vetements / 2;
  const resteAPayer = euros(222) + plan.sorties / 2 + plan.vetements / 2;
  const argentLibre = euros(501) - misDeCote - plan.sorties - plan.vetements;
  return {
    compteAvantReparation,
    misDeCote,
    resteAPayer,
    argentLibre,
    manque: Math.max(0, REPARATION - argentLibre),
  };
}

export interface MoyensEcran5 {
  sorties: Centimes;
  vetements: Centimes;
  decalerSoeur: boolean;
  epargne: Centimes;
  reserve: Centimes;
  projet: Centimes;
}

export const AUCUN_MOYEN: MoyensEcran5 = {
  sorties: 0,
  vetements: 0,
  decalerSoeur: false,
  epargne: 0,
  reserve: 0,
  projet: 0,
};

export function maximumsMoyens(plan: PlanAmadou) {
  return {
    sorties: plan.sorties / 2,
    vetements: plan.vetements / 2,
    soeur: REMBOURSEMENT_SOEUR,
    epargne: plan.epargne,
    reserve: plan.reserve,
    projet: plan.projet,
  };
}

export function verifierMoyens(plan: PlanAmadou, moyens: MoyensEcran5): void {
  const max = maximumsMoyens(plan);
  verifierBornes('moyens.sorties', moyens.sorties, 0, max.sorties);
  verifierBornes('moyens.vetements', moyens.vetements, 0, max.vetements);
  verifierBornes('moyens.epargne', moyens.epargne, 0, max.epargne);
  verifierBornes('moyens.reserve', moyens.reserve, 0, max.reserve);
  verifierBornes('moyens.projet', moyens.projet, 0, max.projet);
}

export function reprises(moyens: MoyensEcran5): Centimes {
  return moyens.epargne + moyens.reserve + moyens.projet;
}

export interface ResultatMoyens {
  trouve: Centimes; // R
  manque: Centimes;
  surplus: Centimes;
  manqueRestant: Centimes; // Y
  projection: Centimes;
}

/** EP1 §7.1 et écran 5 : somme trouvée et projection de fin de mois. */
export function resultatMoyens(plan: PlanAmadou, moyens: MoyensEcran5): ResultatMoyens {
  verifierMoyens(plan, moyens);
  const { argentLibre, manque } = situationAu15(plan);
  const trouve =
    moyens.sorties + moyens.vetements + (moyens.decalerSoeur ? REMBOURSEMENT_SOEUR : 0) + reprises(moyens);
  return {
    trouve,
    manque,
    surplus: Math.max(0, trouve - manque),
    manqueRestant: Math.max(0, manque - trouve),
    projection: argentLibre - REPARATION + COURS_RECUS_LE_20 + trouve,
  };
}

/** U = min(K ; max(0 ; T − 1 640)) : besoin de cours du plan (écran 7). */
export function besoinDeCours(plan: PlanAmadou, K: Centimes): Centimes {
  const { total } = calculerPlan(plan, K);
  return Math.min(K, Math.max(0, total - SALAIRE));
}

// ---------------------------------------------------------------- Novembre (écran 8)

export type ChoixCourses = 'garder' | 'novembre' | 'durable';
export type ChoixSoeur = 'rembourser120' | 'etaler';
export type ChoixProjet = 'rattraper' | 'garder' | 'suspendreNovembre' | 'suspendreDurable';
export type ChoixReconstituer = 'reconstituer' | 'rien';
export type ChoixStreaming = 'garder' | 'arreter';
export type ChoixSalle = 'garder' | 'novembre' | 'resilier';
export type Portee = 'novembre' | 'durable';

export interface ChangementMontant {
  montant: Centimes;
  portee: Portee;
}

export interface PlanNovembreChoix {
  coursNovembre: Centimes | null;
  courses: ChoixCourses;
  soeur: ChoixSoeur | null; // seulement si le remboursement a été décalé
  projet: ChoixProjet | null; // seulement si le projet a été repris
  reserve: ChoixReconstituer | null; // seulement si la réserve a été reprise
  epargne: ChoixReconstituer | null; // seulement si l'épargne a été reprise
  streaming: ChoixStreaming;
  salle: ChoixSalle;
  imprevus: ChangementMontant | null; // null : garder
  sorties: ChangementMontant | null;
  vetements: ChangementMontant | null;
}

export const CHOIX_NOVEMBRE_INITIAUX: PlanNovembreChoix = {
  coursNovembre: null,
  courses: 'garder',
  soeur: null,
  projet: null,
  reserve: null,
  epargne: null,
  streaming: 'garder',
  salle: 'garder',
  imprevus: null,
  sorties: null,
  vetements: null,
};

export interface LignesPlan {
  depensesFixes: Centimes;
  courses: Centimes;
  sorties: Centimes;
  vetements: Centimes;
  reserve: Centimes;
  projet: Centimes;
  epargne: Centimes;
  imprevus: Centimes;
}

export const totalLignes = (l: LignesPlan): Centimes =>
  l.depensesFixes + l.courses + l.sorties + l.vetements + l.reserve + l.projet + l.epargne + l.imprevus;

/** Plan de novembre et plan habituel à partir de décembre (écran 8). */
export function planNovembre(plan: PlanAmadou, moyens: MoyensEcran5, choix: PlanNovembreChoix) {
  const soeurNovembre = !moyens.decalerSoeur
    ? REMBOURSEMENT_SOEUR
    : choix.soeur === 'etaler'
      ? euros(90)
      : euros(120);
  const streamingArrete = choix.streaming === 'arreter';
  const salleNovembre = choix.salle === 'garder' ? SALLE_DE_SPORT : 0;
  const salleHabituelle = choix.salle === 'resilier' ? 0 : SALLE_DE_SPORT;

  const fixesHorsSoeurSalleStreaming = DEPENSES_FIXES - REMBOURSEMENT_SOEUR - SALLE_DE_SPORT - STREAMING;
  const streaming = streamingArrete ? 0 : STREAMING;

  const projetNovembre = (() => {
    switch (choix.projet) {
      case 'rattraper':
        return plan.projet + moyens.projet;
      case 'suspendreNovembre':
      case 'suspendreDurable':
        return 0;
      default:
        return plan.projet;
    }
  })();
  const projetHabituel = choix.projet === 'suspendreDurable' ? 0 : plan.projet;

  const montant = (base: Centimes, c: ChangementMontant | null) => (c ? c.montant : base);
  const habituel = (base: Centimes, c: ChangementMontant | null) => (c && c.portee === 'durable' ? c.montant : base);

  const novembre: LignesPlan = {
    depensesFixes: fixesHorsSoeurSalleStreaming + soeurNovembre + salleNovembre + streaming,
    courses: choix.courses === 'garder' ? plan.courses : COURSES_REELLES,
    sorties: montant(plan.sorties, choix.sorties),
    vetements: montant(plan.vetements, choix.vetements),
    reserve: plan.reserve + (choix.reserve === 'reconstituer' ? moyens.reserve : 0),
    projet: projetNovembre,
    epargne: plan.epargne + (choix.epargne === 'reconstituer' ? moyens.epargne : 0),
    imprevus: montant(plan.imprevus, choix.imprevus),
  };

  const habituelDecembre: LignesPlan = {
    depensesFixes: fixesHorsSoeurSalleStreaming + REMBOURSEMENT_SOEUR + salleHabituelle + streaming,
    courses: choix.courses === 'durable' ? COURSES_REELLES : plan.courses,
    sorties: habituel(plan.sorties, choix.sorties),
    vetements: habituel(plan.vetements, choix.vetements),
    reserve: plan.reserve,
    projet: projetHabituel,
    epargne: plan.epargne,
    imprevus: habituel(plan.imprevus, choix.imprevus),
  };

  return {
    novembre,
    totalNovembre: totalLignes(novembre),
    habituelDecembre,
    soeurDecembre: moyens.decalerSoeur && choix.soeur === 'etaler' ? euros(90) : REMBOURSEMENT_SOEUR,
  };
}

/** Marge de novembre = compte au 31 octobre + 1 640 € + cours retenus − total du plan (écran 8, [Décidé]). */
export function margeNovembre(compte31: Centimes, coursNovembre: Centimes, totalNovembre: Centimes): Centimes {
  verifierCours(coursNovembre);
  return compte31 + SALAIRE + coursNovembre - totalNovembre;
}
