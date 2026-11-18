import {
  AUCUN_MOYEN,
  CHOIX_NOVEMBRE_INITIAUX,
  ETAT_MARC_INITIAL,
  EtatMarc,
  MONTANT_MAX_LIGNE,
  MoyensEcran5,
  OPTIONS_COURS,
  PLAN_ESQUISSE,
  PlanAmadou,
  PlanNovembreChoix,
  bornesReglages,
  maximumsMoyens,
  novembre,
  sommesLiberees,
  decembre,
  CleLevier,
  LOISIRS,
  RESERVE_ASSURANCE,
} from '../../calculs/ep1';

// État de session d'EP1 : en mémoire seulement, détruit à la sortie de l'expérience.
// Aucune donnée personnelle : situations fictives d'Amadou et de Marc.

export type Priorite = 'essentielle' | 'apres';
export type ModeLigne = 'garder' | 'novembre' | 'durable';

export interface EtatEP1 {
  K: number | null;
  cartes: { streaming: Priorite | null; courses: Priorite | null; soeur: Priorite | null; vetements: Priorite | null };
  plan: PlanAmadou;
  moyens: MoyensEcran5;
  rejeu: MoyensEcran5;
  // Saisie de l'écran 8 : aucune option présélectionnée (EP1 §2) ; tant qu'une ligne
  // n'est pas choisie, le plan de novembre reprend la ligne d'octobre.
  novembreSaisie: {
    coursNovembre: number | null;
    courses: PlanNovembreChoix['courses'] | null;
    soeur: PlanNovembreChoix['soeur'];
    projet: PlanNovembreChoix['projet'];
    reserve: PlanNovembreChoix['reserve'];
    epargne: PlanNovembreChoix['epargne'];
    streaming: PlanNovembreChoix['streaming'] | null;
    salle: PlanNovembreChoix['salle'] | null;
  };
  novembre: PlanNovembreChoix; // dérivé de la saisie par la normalisation
  novembreModes: { imprevus: ModeLigne | null; sorties: ModeLigne | null; vetements: ModeLigne | null };
  novembreMontants: { imprevus: number; sorties: number; vetements: number };
  marc: EtatMarc;
  raisonMarc: string | null;
  ui: {
    cartesVues: boolean;
    reaffOctMode: 'non' | 'coussin';
    reaffDecMode: 'non' | 'coussin' | 'projet';
  };
}

export const ETAT_EP1_INITIAL: EtatEP1 = {
  K: null,
  cartes: { streaming: null, courses: null, soeur: null, vetements: null },
  plan: PLAN_ESQUISSE,
  moyens: AUCUN_MOYEN,
  rejeu: AUCUN_MOYEN,
  novembreSaisie: {
    coursNovembre: null,
    courses: null,
    soeur: null,
    projet: null,
    reserve: null,
    epargne: null,
    streaming: null,
    salle: null,
  },
  novembre: CHOIX_NOVEMBRE_INITIAUX,
  novembreModes: { imprevus: null, sorties: null, vetements: null },
  novembreMontants: { imprevus: PLAN_ESQUISSE.imprevus, sorties: PLAN_ESQUISSE.sorties, vetements: PLAN_ESQUISSE.vetements },
  marc: ETAT_MARC_INITIAL,
  raisonMarc: null,
  ui: { cartesVues: false, reaffOctMode: 'non', reaffDecMode: 'non' },
};

// ---------------------------------------------------------------- Accès par chemin

export function lire(etat: unknown, chemin: string): unknown {
  return chemin.split('.').reduce<unknown>((objet, cle) => (objet as Record<string, unknown> | undefined)?.[cle], etat);
}

export function ecrire<T>(etat: T, chemin: string, valeur: unknown): T {
  const [tete, ...reste] = chemin.split('.');
  const objet = etat as Record<string, unknown>;
  return {
    ...objet,
    [tete]: reste.length === 0 ? valeur : ecrire(objet[tete], reste.join('.'), valeur),
  } as T;
}

// ---------------------------------------------------------------- Normalisation

const borner = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const LEVIERS: CleLevier[] = ['depensesEnPlus', 'loisirs', 'coussin', 'reserve'];

function normaliserMoyens(plan: PlanAmadou, m: MoyensEcran5): MoyensEcran5 {
  const max = maximumsMoyens(plan);
  return {
    sorties: borner(m.sorties, 0, max.sorties),
    vetements: borner(m.vetements, 0, max.vetements),
    decalerSoeur: m.decalerSoeur,
    epargne: borner(m.epargne, 0, max.epargne),
    reserve: borner(m.reserve, 0, max.reserve),
    projet: borner(m.projet, 0, max.projet),
  };
}

function normaliserNovembre(e: EtatEP1): EtatEP1 {
  const m = e.moyens;
  const saisie = {
    ...e.novembreSaisie,
    coursNovembre:
      e.novembreSaisie.coursNovembre !== null && OPTIONS_COURS.includes(e.novembreSaisie.coursNovembre)
        ? e.novembreSaisie.coursNovembre
        : null,
    soeur: m.decalerSoeur ? e.novembreSaisie.soeur : null,
    projet: m.projet > 0 ? e.novembreSaisie.projet : null,
    reserve: m.reserve > 0 ? e.novembreSaisie.reserve : null,
    epargne: m.epargne > 0 ? e.novembreSaisie.epargne : null,
  };
  const choix: PlanNovembreChoix = {
    ...CHOIX_NOVEMBRE_INITIAUX,
    coursNovembre: saisie.coursNovembre,
    courses: saisie.courses ?? 'garder',
    soeur: saisie.soeur,
    projet: m.projet > 0 ? (saisie.projet ?? 'garder') : null,
    reserve: m.reserve > 0 ? (saisie.reserve ?? 'rien') : null,
    epargne: m.epargne > 0 ? (saisie.epargne ?? 'rien') : null,
    streaming: saisie.streaming ?? 'garder',
    salle: saisie.salle ?? 'garder',
  };
  for (const ligne of ['imprevus', 'sorties', 'vetements'] as const) {
    const mode = e.novembreModes[ligne];
    const montant = borner(e.novembreMontants[ligne], 0, MONTANT_MAX_LIGNE);
    choix[ligne] = mode === null || mode === 'garder' ? null : { montant, portee: mode };
  }
  return { ...e, novembreSaisie: saisie, novembre: choix };
}

export function normaliserMarc(marc: EtatMarc, ui: EtatEP1['ui']): EtatMarc {
  if (marc.base === null) return marc;
  const B = marc.base;
  const r = { ...marc.reglages };
  for (const cle of ['coussin', 'imprevus', 'depensesEnPlus'] as const) {
    r[cle] = borner(r[cle], 0, bornesReglages(B, r)[cle]);
  }
  const compteAvant = 334_00 - r.depensesEnPlus - r.coussin;
  const maxOct = { depensesEnPlus: r.depensesEnPlus, loisirs: LOISIRS, coussin: r.coussin, reserve: RESERVE_ASSURANCE };
  const leviersOctobre = { ...marc.leviersOctobre };
  const durablesOctobre = { ...marc.durablesOctobre };
  for (const cle of LEVIERS) {
    leviersOctobre[cle] = compteAvant < 0 ? borner(leviersOctobre[cle], 0, maxOct[cle]) : 0;
    if (leviersOctobre[cle] === 0) durablesOctobre[cle] = false;
  }
  const { Fc } = sommesLiberees(leviersOctobre, durablesOctobre);
  const reaffectationOctobre = ui.reaffOctMode === 'coussin' ? borner(marc.reaffectationOctobre, 0, Fc) : 0;
  const choixNovembre = B === 190000 ? null : marc.choixNovembre;
  let suite: EtatMarc = { ...marc, reglages: r, leviersOctobre, durablesOctobre, reaffectationOctobre, choixNovembre };
  if (choixNovembre === null && B !== 190000) return suite;

  const plan = novembre(suite).planHabituel;
  const maxDec = { depensesEnPlus: plan.depensesEnPlus, loisirs: plan.loisirs, coussin: plan.coussin, reserve: plan.reserve };
  const leviersDecembre = { ...marc.leviersDecembre };
  const durablesDecembre = { ...marc.durablesDecembre };
  for (const cle of LEVIERS) {
    leviersDecembre[cle] = borner(leviersDecembre[cle], 0, maxDec[cle]);
    if (leviersDecembre[cle] === 0) durablesDecembre[cle] = false;
  }
  suite = {
    ...suite,
    leviersDecembre,
    durablesDecembre,
    retraitsDecembre: { coussin: 0, projet: 0, reserve: 0 },
    reaffectationDecembre: { cible: 'coussin', montant: 0 },
  };
  const base = decembre(suite);
  const retraits = { coussin: 0, projet: 0, reserve: 0 };
  let restant = base.R1;
  for (const cle of ['coussin', 'projet', 'reserve'] as const) {
    retraits[cle] = borner(marc.retraitsDecembre[cle], 0, Math.max(0, Math.min(base.disponibles[cle], restant)));
    restant -= retraits[cle];
  }
  const projetExiste = base.novembre.projetExiste;
  let cible: 'coussin' | 'projet' = ui.reaffDecMode === 'projet' && projetExiste ? 'projet' : 'coussin';
  if (ui.reaffDecMode === 'projet' && !projetExiste) cible = 'coussin';
  const maxReaff = ui.reaffDecMode === 'non' ? 0 : cible === 'coussin' ? base.Fc : base.Fc + base.Fnc;
  return {
    ...suite,
    retraitsDecembre: retraits,
    reaffectationDecembre: { cible, montant: borner(marc.reaffectationDecembre.montant, 0, maxReaff) },
  };
}

/** Ramène toutes les valeurs dépendantes dans leurs bornes après une modification. */
export function normaliser(e: EtatEP1): EtatEP1 {
  const K = e.K !== null && OPTIONS_COURS.includes(e.K) ? e.K : null;
  const plan = Object.fromEntries(
    Object.entries(e.plan).map(([k, v]) => [k, borner(v, 0, MONTANT_MAX_LIGNE)]),
  ) as unknown as PlanAmadou;
  const suite = normaliserNovembre({
    ...e,
    K,
    plan,
    moyens: normaliserMoyens(plan, e.moyens),
    rejeu: normaliserMoyens(plan, e.rejeu),
  });
  return { ...suite, marc: normaliserMarc(suite.marc, suite.ui) };
}

export type ActionEtat =
  | { type: 'definir'; chemin: string; valeur: unknown }
  | { type: 'reinitialiserRejeu' }
  | { type: 'aucunMoyen' }
  | { type: 'reinitialiserDecembre' };

export function reducteur(etat: EtatEP1, action: ActionEtat | { type: string }): EtatEP1 {
  switch (action.type) {
    case 'definir': {
      const a = action as Extract<ActionEtat, { type: 'definir' }>;
      return normaliser(ecrire(etat, a.chemin, a.valeur));
    }
    case 'reinitialiserRejeu':
      return { ...etat, rejeu: AUCUN_MOYEN };
    case 'aucunMoyen':
      return normaliser({ ...etat, moyens: AUCUN_MOYEN });
    case 'reinitialiserDecembre':
      return normaliser({
        ...etat,
        ui: { ...etat.ui, reaffDecMode: 'non' },
        marc: {
          ...etat.marc,
          leviersDecembre: ETAT_MARC_INITIAL.leviersDecembre,
          durablesDecembre: ETAT_MARC_INITIAL.durablesDecembre,
          retraitsDecembre: ETAT_MARC_INITIAL.retraitsDecembre,
          reaffectationDecembre: ETAT_MARC_INITIAL.reaffectationDecembre,
        },
      });
    default:
      return etat;
  }
}
