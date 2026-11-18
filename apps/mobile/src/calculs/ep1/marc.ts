import { Centimes, ErreurBornes, euros, verifierBornes } from './montants';

// Données de la simulation de Marc (EP1 §4.2). Situation fictive.
export const BASES: Centimes[] = [euros(1280), euros(1585), euros(1900)];
export const ESSENTIELLES = euros(910);
export const MUSIQUE = euros(11);
export const LOISIRS = euros(120);
export const RESERVE_ASSURANCE = euros(35);
export const TOTAL_DEPENSES_ET_RESERVE = euros(1076);
export const REVENU_OCTOBRE = euros(1410);
export const REVENU_NOVEMBRE = euros(1900);
export const REVENU_DECEMBRE = euros(900);
export const REPARATION_VOITURE = euros(300);
export const ASSURANCE_ANNUELLE = euros(420);

export type CleLevier = 'depensesEnPlus' | 'loisirs' | 'coussin' | 'reserve';
export type Leviers = Record<CleLevier, Centimes>;
export type Durables = Record<CleLevier, boolean>;
export type ChoixNovembre = 'coussin' | 'unPeuDeTout' | 'depenser';

export interface ReglagesMarc {
  coussin: Centimes; // Cm
  imprevus: Centimes; // Im
  depensesEnPlus: Centimes; // Dm
}

export interface Reaffectation {
  cible: 'coussin' | 'projet';
  montant: Centimes; // A
}

export interface EtatMarc {
  base: Centimes | null;
  reglages: ReglagesMarc;
  leviersOctobre: Leviers;
  durablesOctobre: Durables;
  reaffectationOctobre: Centimes; // vers le coussin seulement
  choixNovembre: ChoixNovembre | null;
  leviersDecembre: Leviers;
  durablesDecembre: Durables;
  retraitsDecembre: { coussin: Centimes; projet: Centimes; reserve: Centimes };
  reaffectationDecembre: Reaffectation;
}

const AUCUN_LEVIER: Leviers = { depensesEnPlus: 0, loisirs: 0, coussin: 0, reserve: 0 };
const AUCUN_DURABLE: Durables = { depensesEnPlus: false, loisirs: false, coussin: false, reserve: false };

export const ETAT_MARC_INITIAL: EtatMarc = {
  base: null,
  reglages: { coussin: 0, imprevus: 0, depensesEnPlus: 0 },
  leviersOctobre: AUCUN_LEVIER,
  durablesOctobre: AUCUN_DURABLE,
  reaffectationOctobre: 0,
  choixNovembre: null,
  leviersDecembre: AUCUN_LEVIER,
  durablesDecembre: AUCUN_DURABLE,
  retraitsDecembre: { coussin: 0, projet: 0, reserve: 0 },
  reaffectationDecembre: { cible: 'coussin', montant: 0 },
};

const sommeLeviers = (l: Leviers) => l.depensesEnPlus + l.loisirs + l.coussin + l.reserve;

function base(etat: EtatMarc): Centimes {
  if (etat.base === null || !BASES.includes(etat.base)) {
    throw new ErreurBornes('base : 1 280 €, 1 585 € ou 1 900 € seulement');
  }
  return etat.base;
}

// ---------------------------------------------------------------- Réglages (écran 10, étape 3)

export const margeBase = (B: Centimes): Centimes => B - TOTAL_DEPENSES_ET_RESERVE;

export function bornesReglages(B: Centimes, r: ReglagesMarc): ReglagesMarc {
  const marge = margeBase(B);
  return {
    coussin: marge - r.imprevus - r.depensesEnPlus,
    imprevus: marge - r.coussin - r.depensesEnPlus,
    depensesEnPlus: marge - r.coussin - r.imprevus,
  };
}

export function nonReparti(B: Centimes, r: ReglagesMarc): Centimes {
  return margeBase(B) - r.coussin - r.imprevus - r.depensesEnPlus;
}

function verifierReglages(B: Centimes, r: ReglagesMarc): void {
  const max = bornesReglages(B, r);
  verifierBornes('réglages.coussin', r.coussin, 0, max.coussin);
  verifierBornes('réglages.imprévus', r.imprevus, 0, max.imprevus);
  verifierBornes('réglages.dépensesEnPlus', r.depensesEnPlus, 0, max.depensesEnPlus);
}

// ---------------------------------------------------------------- Plan habituel

export interface PlanHabituel {
  essentielles: Centimes;
  musique: Centimes;
  loisirs: Centimes;
  depensesEnPlus: Centimes;
  reserve: Centimes;
  coussin: Centimes;
  projet: Centimes;
  imprevus: Centimes;
  nonAffecte: Centimes;
}

export const totalPlan = (p: PlanHabituel): Centimes =>
  p.essentielles + p.musique + p.loisirs + p.depensesEnPlus + p.reserve + p.coussin + p.projet + p.imprevus + p.nonAffecte;

export const depensesDuPlan = (p: PlanHabituel): Centimes => p.essentielles + p.musique + p.loisirs + p.depensesEnPlus;
export const versementsDuPlan = (p: PlanHabituel): Centimes => p.reserve + p.coussin + p.projet;

function planDeDepart(B: Centimes, r: ReglagesMarc): PlanHabituel {
  return {
    essentielles: ESSENTIELLES,
    musique: MUSIQUE,
    loisirs: LOISIRS,
    depensesEnPlus: r.depensesEnPlus,
    reserve: RESERVE_ASSURANCE,
    coussin: r.coussin,
    projet: 0,
    imprevus: r.imprevus,
    nonAffecte: nonReparti(B, r),
  };
}

/** Somme libérée durablement : Fc (réaffectable au coussin ou au projet) et Fnc (versement au coussin suspendu). */
export function sommesLiberees(leviers: Leviers, durables: Durables) {
  const part = (cle: CleLevier) => (durables[cle] ? leviers[cle] : 0);
  return {
    Fc: part('depensesEnPlus') + part('loisirs') + part('reserve'),
    Fnc: part('coussin'),
  };
}

function appliquerDurables(plan: PlanHabituel, leviers: Leviers, durables: Durables): PlanHabituel {
  const part = (cle: CleLevier) => (durables[cle] ? leviers[cle] : 0);
  const { Fc, Fnc } = sommesLiberees(leviers, durables);
  return {
    ...plan,
    depensesEnPlus: plan.depensesEnPlus - part('depensesEnPlus'),
    loisirs: plan.loisirs - part('loisirs'),
    reserve: plan.reserve - part('reserve'),
    coussin: plan.coussin - part('coussin'),
    nonAffecte: plan.nonAffecte + Fc + Fnc,
  };
}

function reaffecter(plan: PlanHabituel, cible: 'coussin' | 'projet', A: Centimes): PlanHabituel {
  return { ...plan, [cible]: plan[cible] + A, nonAffecte: plan.nonAffecte - A };
}

// ---------------------------------------------------------------- Octobre (écran 10, mois 1)

export function octobre(etat: EtatMarc) {
  const B = base(etat);
  const r = etat.reglages;
  verifierReglages(B, r);

  const compteAvant = REVENU_OCTOBRE - (ESSENTIELLES + MUSIQUE + LOISIRS + r.depensesEnPlus) - (RESERVE_ASSURANCE + r.coussin);
  const leviersAffiches = compteAvant < 0;
  const maximums: Leviers = {
    depensesEnPlus: r.depensesEnPlus,
    loisirs: LOISIRS,
    coussin: r.coussin,
    reserve: RESERVE_ASSURANCE,
  };
  const l = etat.leviersOctobre;
  for (const cle of Object.keys(maximums) as CleLevier[]) {
    verifierBornes(`octobre.${cle}`, l[cle], 0, leviersAffiches ? maximums[cle] : 0);
    if (etat.durablesOctobre[cle] && l[cle] === 0) {
      throw new ErreurBornes(`octobre.${cle} : « durable » seulement pour un levier supérieur à 0 €`);
    }
  }
  const total = sommeLeviers(l);
  const compteApres = compteAvant + total;
  const manqueAvant = Math.max(0, -compteAvant);
  const { Fc, Fnc } = sommesLiberees(l, etat.durablesOctobre);
  verifierBornes('octobre.réaffectation', etat.reaffectationOctobre, 0, Fc);

  const plan = reaffecter(
    appliquerDurables(planDeDepart(B, r), l, etat.durablesOctobre),
    'coussin',
    etat.reaffectationOctobre,
  );

  return {
    B,
    compteAvant,
    leviersAffiches,
    maximums,
    manqueAvant,
    manqueRestant: Math.max(0, manqueAvant - total),
    surplus: Math.max(0, total - manqueAvant),
    compteApres,
    Fc,
    Fnc,
    planHabituel: plan,
    soldes: { coussin: r.coussin - l.coussin, reserve: RESERVE_ASSURANCE - l.reserve, projet: 0 },
    depensesPayees: ESSENTIELLES + MUSIQUE + LOISIRS - l.loisirs + r.depensesEnPlus - l.depensesEnPlus,
  };
}

// ---------------------------------------------------------------- Novembre (écran 11)

const REPARTITIONS: Record<number, Record<ChoixNovembre, { coussin: Centimes; projet: Centimes; plaisir: Centimes }>> = {
  [euros(1280)]: {
    coussin: { coussin: euros(620), projet: 0, plaisir: 0 },
    unPeuDeTout: { coussin: euros(300), projet: euros(200), plaisir: euros(120) },
    depenser: { coussin: 0, projet: 0, plaisir: euros(620) },
  },
  [euros(1585)]: {
    coussin: { coussin: euros(315), projet: 0, plaisir: 0 },
    unPeuDeTout: { coussin: euros(150), projet: euros(100), plaisir: euros(65) },
    depenser: { coussin: 0, projet: 0, plaisir: euros(315) },
  },
};

export function novembre(etat: EtatMarc) {
  const oct = octobre(etat);
  const B = oct.B;
  const plan = oct.planHabituel;
  const aRepartir = REVENU_NOVEMBRE - B;
  if (aRepartir > 0 && etat.choixNovembre === null) {
    throw new ErreurBornes('novembre : choix obligatoire si la base est inférieure à 1 900 €');
  }
  if (aRepartir === 0 && etat.choixNovembre !== null) {
    throw new ErreurBornes('novembre : aucun choix pour la base de 1 900 €');
  }
  const repartition = aRepartir > 0 ? REPARTITIONS[B][etat.choixNovembre!] : { coussin: 0, projet: 0, plaisir: 0 };
  const projetExiste = etat.choixNovembre === 'unPeuDeTout';
  return {
    B,
    aRepartir,
    repartition,
    projetExiste,
    compteFin: oct.compteApres + plan.imprevus + plan.nonAffecte,
    soldes: {
      coussin: oct.soldes.coussin + plan.coussin + repartition.coussin,
      reserve: oct.soldes.reserve + plan.reserve,
      projet: plan.projet + repartition.projet,
    },
    depensesPayees: oct.depensesPayees + depensesDuPlan(plan) + repartition.plaisir,
    planHabituel: plan,
    octobre: oct,
  };
}

// ---------------------------------------------------------------- Décembre (écran 12)

export function decembre(etat: EtatMarc) {
  const nov = novembre(etat);
  const plan = nov.planHabituel;
  const X = nov.compteFin + REVENU_DECEMBRE - (depensesDuPlan(plan) + REPARATION_VOITURE) - versementsDuPlan(plan);
  const deficitInitial = Math.max(0, -X);

  const maximums: Leviers = {
    depensesEnPlus: plan.depensesEnPlus,
    loisirs: plan.loisirs,
    coussin: plan.coussin,
    reserve: plan.reserve,
  };
  const l = etat.leviersDecembre;
  for (const cle of Object.keys(maximums) as CleLevier[]) {
    verifierBornes(`décembre.${cle}`, l[cle], 0, maximums[cle]);
    if (etat.durablesDecembre[cle] && l[cle] === 0) {
      throw new ErreurBornes(`décembre.${cle} : « durable » seulement pour un levier supérieur à 0 €`);
    }
  }
  const reductions = sommeLeviers(l);
  const R1 = Math.max(0, deficitInitial - reductions);

  const disponibles = {
    coussin: nov.soldes.coussin + plan.coussin - l.coussin,
    projet: nov.projetExiste ? nov.soldes.projet : 0,
    reserve: nov.soldes.reserve + plan.reserve - l.reserve,
  };
  const retraits = etat.retraitsDecembre;
  const totalRetraits = retraits.coussin + retraits.projet + retraits.reserve;
  if (R1 === 0 && totalRetraits > 0) {
    throw new ErreurBornes('décembre : voie 2 seulement si un manque reste après la voie 1');
  }
  for (const cle of ['coussin', 'projet', 'reserve'] as const) {
    const autres = totalRetraits - retraits[cle];
    verifierBornes(`décembre.retrait.${cle}`, retraits[cle], 0, Math.max(0, Math.min(disponibles[cle], R1 - autres)));
  }
  const totalDisponible = disponibles.coussin + disponibles.projet + disponibles.reserve;
  const R2 = Math.max(0, R1 - totalRetraits);

  const { Fc, Fnc } = sommesLiberees(l, etat.durablesDecembre);
  const reaff = etat.reaffectationDecembre;
  if (reaff.cible === 'projet' && !nov.projetExiste && reaff.montant > 0) {
    throw new ErreurBornes('décembre : le projet n’existe pas');
  }
  verifierBornes('décembre.réaffectation', reaff.montant, 0, reaff.cible === 'coussin' ? Fc : Fc + Fnc);
  const planApres = reaffecter(appliquerDurables(plan, l, etat.durablesDecembre), reaff.cible, reaff.montant);

  const soldesFin = {
    coussin: disponibles.coussin - retraits.coussin,
    projet: nov.soldes.projet - retraits.projet,
    reserve: disponibles.reserve - retraits.reserve,
  };
  const compteFin = X + reductions + totalRetraits;
  const depensesPayees =
    nov.depensesPayees + depensesDuPlan(plan) - l.depensesEnPlus - l.loisirs + REPARATION_VOITURE;
  const Z = plan.depensesEnPlus - l.depensesEnPlus + (plan.loisirs - l.loisirs);

  return {
    X,
    deficitInitial,
    maximums,
    reductions,
    R1,
    disponibles,
    totalRetraits,
    toutDisponibleMobilise: R2 > 0 && totalRetraits === Math.min(totalDisponible, R1),
    R2,
    Fc,
    Fnc,
    planAvant: plan,
    planApres,
    compteFin,
    soldesFin,
    Z,
    depensesPayees,
    novembre: nov,
  };
}

/** Contrôle de conservation : 4 210 = dépenses payées + coussin + réserve + projet + compte (EP1 §7.4). */
export function conservationMarc(etat: EtatMarc): boolean {
  const d = decembre(etat);
  return (
    d.depensesPayees + d.soldesFin.coussin + d.soldesFin.reserve + d.soldesFin.projet + d.compteFin ===
    REVENU_OCTOBRE + REVENU_NOVEMBRE + REVENU_DECEMBRE
  );
}
