import {
  COURSES_REELLES,
  MONTANT_MAX_LIGNE,
  REPARATION,
  SALAIRE,
  CleLevier,
  besoinDeCours,
  calculerPlan,
  decembre,
  depensesDuPlan,
  margeBase,
  margeNovembre,
  maximumsMoyens,
  nonReparti,
  novembre,
  octobre,
  planNovembre,
  resultatMoyens,
  simulerOctobre,
  situationAu15,
  totalLignes,
  totalPlan,
  bornesReglages,
  PlanHabituel,
} from '../../calculs/ep1';
import { Bornes, Contexte } from '../../lecteur/types';
import { eur, eurAbs, eurSigne, nombre } from '../../ui/format';
import { EtatEP1 } from './etat';

// Liaisons entre l'état de session, le module de calculs et les gabarits de la définition.
// Ce fichier ne contient aucune règle de calcul : il formate et nomme ce que calcule `calculs/ep1`.

const LEVIERS: CleLevier[] = ['depensesEnPlus', 'loisirs', 'coussin', 'reserve'];

export function contexteEP1(etat: EtatEP1, options: { pasMontant: number; rejeu?: boolean }): Contexte {
  const v: Record<string, string> = {};
  const c: Record<string, boolean> = {};
  const b: Record<string, Bornes> = {};
  const pas = options.pasMontant;
  c.modeRejeu = !!options.rejeu;

  // ------------------------------------------------------------ Écrans 2 à 4 : cours, cartes, plan
  const plan = etat.plan;
  const K = etat.K ?? 0;
  c.kChoisi = etat.K !== null;
  c.kPositif = K > 0;
  v.K = eur(K);
  v.Knombre = nombre(K);
  const carte = etat.cartes;
  c.cartesVues = etat.ui.cartesVues;
  c.cartesToutesChoisies = Object.values(carte).every((x) => x !== null);
  c.streamingEssentielle = carte.streaming === 'essentielle';
  c.streamingApres = carte.streaming === 'apres';
  c.coursesEssentielle = carte.courses === 'essentielle';
  c.coursesApres = carte.courses === 'apres';
  c.soeurEssentielle = carte.soeur === 'essentielle';
  c.soeurApres = carte.soeur === 'apres';

  const p = calculerPlan(plan, K);
  const m = p.marge;
  const I = plan.imprevus;
  v.ressources = eur(p.ressources);
  v.T = eur(p.total);
  v.M = eur(p.misDeCote);
  v.margeSignee = eurSigne(m);
  v.margeAbs = eurAbs(m);
  v.I = eur(I);
  v.IplusM = eur(I + m);
  v.moinsMmoinsI = eur(-m - I);
  v.salaireMoinsTSigne = eurSigne(SALAIRE - p.total);
  v.TmoinsSalaire = eur(p.total - SALAIRE);
  v.C = eur(plan.courses);
  v.S = eur(plan.sorties);
  v.V = eur(plan.vetements);
  v.reservePlan = eur(plan.reserve);
  v.projetPlan = eur(plan.projet);
  v.epargnePlan = eur(plan.epargne);
  c.margeNegative = m < 0;
  c.margeK0Positive = m >= 0 && K === 0;
  c.margeK0PositiveAvecI = c.margeK0Positive && I > 0;
  c.margeKPositive = m >= 0 && K > 0;
  c.margeKPositiveSalaireSuffit = c.margeKPositive && p.total <= SALAIRE;
  c.margeKPositiveSalaireDepasse = c.margeKPositive && p.total > SALAIRE;
  c.couverturePartielle = m < 0 && m > -I;
  c.couvertureNulleAvecI = m <= -I && I > 0;
  c.margeSousMoinsI = m < -I && I > 0;
  c.margeNegativeSansI = m < 0 && I === 0;
  c.margeNegativeAvecK = m < 0 && K > 0;
  c.iNul = I === 0;
  for (const cle of Object.keys(plan)) b[`plan.${cle}`] = { min: 0, max: MONTANT_MAX_LIGNE, pas };

  // ------------------------------------------------------------ Écran 5 : le 15 octobre
  const moyens = options.rejeu ? etat.rejeu : etat.moyens;
  const s = situationAu15(plan);
  const L = s.argentLibre;
  const max = maximumsMoyens(plan);
  v.compte15 = eur(s.compteAvantReparation);
  v.reste15 = eur(s.resteAPayer);
  v.S2 = eur(plan.sorties / 2);
  v.V2 = eur(plan.vetements / 2);
  v.C2 = eur(plan.courses / 2);
  v.C2moins144 = eur(plan.courses / 2 - 14400);
  c.demiCoursesInf144 = plan.courses / 2 < 14400;
  c.demiCoursesEgal144 = plan.courses / 2 === 14400;
  c.demiCoursesSup144 = plan.courses / 2 > 14400;
  v.L = eur(L);
  v.LAbs = eurAbs(L);
  v.manque = eur(REPARATION - L);
  c.imprevusLSupI = I > 0 && L >= I;
  c.imprevusLEntre0EtI = I > 0 && L > 0 && L < I;
  c.imprevusLNul = I > 0 && L <= 0;
  c.lSuffit = L >= REPARATION;
  c.lInsuffisant = L >= 0 && L < REPARATION;
  c.lNegatif = L < 0;
  v.maxSorties = eur(max.sorties);
  v.maxVetements = eur(max.vetements);
  v.maxEpargne = eur(max.epargne);
  v.maxReserve = eur(max.reserve);
  v.maxProjet = eur(max.projet);
  for (const cle of ['sorties', 'vetements', 'epargne', 'reserve', 'projet'] as const) {
    b[`moyens.${cle}`] = { min: 0, max: max[cle], pas };
  }
  const r = resultatMoyens(plan, moyens);
  v.R = eur(r.trouve);
  v.manque = eur(r.manque);
  v.surplus = eur(r.surplus);
  v.Y = eur(r.manqueRestant);
  v.projection = eur(r.projection);
  c.trouveDepasse = r.trouve > r.manque;
  c.manqueNonCouvert = r.manqueRestant > 0;
  c.projectionNegative = r.projection < 0;
  if (L < 0) v.manque = eur(REPARATION - L);

  // ------------------------------------------------------------ Écrans 6 à 8 : mois réellement joué
  const reel = etat.moyens;
  const sim = simulerOctobre(plan, reel);
  v.solde = eur(sim.soldeFinal);
  c.soldeFinalNegatif = sim.soldeFinal < 0;
  v.misNet = eur(sim.misDeCoteNet.total);
  v.misReserve = eur(sim.misDeCoteNet.reserve);
  v.misProjet = eur(sim.misDeCoteNet.projet);
  v.misEpargne = eur(sim.misDeCoteNet.epargne);
  v.duSoeur = eur(sim.duSoeur);
  const pm = sim.premierManque;
  c.soldeSousZero = pm !== null;
  v.premierManque = pm ? `${pm.avantLe15 ? 'avant le 15' : `le ${pm.jour}`} (${eur(pm.montant)})` : 'Aucun';
  v.aPartirDu = pm ? (pm.avantLe15 ? 'avant le 15' : `à partir du ${pm.jour}`) : '';
  v.montantManque = pm ? eur(pm.montant) : '';
  v.jourManque = pm ? String(pm.jour) : '';
  c.manqueApres25 = pm !== null && pm.jour > 25;
  const rem = sim.remontee;
  c.soldeRemonte = rem !== null;
  if (rem) {
    const debut = rem.debut.avantLe15 ? 'avant le 15' : `du ${rem.debut.jour}`;
    const memeJour = rem.finAvantLe15 || rem.finJour === rem.debut.jour;
    v.periodeInsuffisante = memeJour ? (rem.debut.avantLe15 ? 'avant le 15' : `le ${rem.debut.jour}`) : `${debut} au ${rem.finJour}`;
    v.jourRemontee = String(rem.jour);
    v.causeRemontee = rem.cause === 'cours' ? 'les cours reçus' : 'l’argent repris';
  }
  v.frise15Avant = eur(sim.frise.avantReparation);
  v.frise15Apres = eur(sim.frise.apresReparation);
  v.frise20 = eur(sim.frise.le20);
  v.frise25 = eur(sim.frise.le25);
  v.fixesReel = eur(85100 - (reel.decalerSoeur ? 6000 : 0));
  v.sortiesReel = eur(plan.sorties - reel.sorties);
  v.vetementsReel = eur(plan.vetements - reel.vetements);

  // Écran 7
  const U = besoinDeCours(plan, K);
  v.U = eur(U);
  v.UmoinsQuarante = eur(U - 4000);
  v.KmoinsQuarante = eur(K - 4000);
  v.margeAfficheeSignee = eurSigne(m);
  v.margeAvec40 = eur(SALAIRE + 4000 - p.total);
  c.coursAuDela40 = K > 0 && U > 4000;
  c.coursJusqua40 = K > 0 && U > 0 && U <= 4000;
  c.coursSalaireSuffisait = K > 0 && p.total <= SALAIRE;
  c.coursNonComptes = K === 0;
  const C = plan.courses;
  v.deuxCentQuatreVingtHuitMoinsC = eur(COURSES_REELLES - C);
  v.CmoinsDeuxCentQuatreVingtHuit = eur(C - COURSES_REELLES);
  c.coursesInf270 = C < 27000;
  c.coursesEgal270 = C === 27000;
  c.coursesEntre270Et288 = C > 27000 && C < COURSES_REELLES;
  c.coursesEgal288 = C === COURSES_REELLES;
  c.coursesSup288 = C > COURSES_REELLES;
  const rReel = resultatMoyens(plan, reel);
  c.sourceSortiesVetements = reel.sorties > 0 || reel.vetements > 0;
  c.sourceSoeur = reel.decalerSoeur;
  c.sourceEpargne = reel.epargne > 0;
  c.sourceReserve = reel.reserve > 0;
  c.sourceProjet = reel.projet > 0;
  c.sourceRien = rReel.manque > 0 && rReel.trouve === 0;
  v.repriseEpargne = eur(reel.epargne);
  v.epargneRestante = eur(plan.epargne - reel.epargne);
  v.repriseProjet = eur(reel.projet);
  v.repriseReserve = eur(reel.reserve);

  // Écran 8
  c.soeurDecalee = reel.decalerSoeur;
  c.projetRepris = reel.projet > 0;
  c.reserveReprise = reel.reserve > 0;
  c.epargneReprise = reel.epargne > 0;
  const modes = etat.novembreModes;
  const modifie = (mode: string | null) => mode !== null && mode !== 'garder';
  c.imprevusNovModifies = modifie(modes.imprevus);
  c.sortiesNovModifiees = modifie(modes.sorties);
  c.vetementsNovModifies = modifie(modes.vetements);
  for (const cle of ['imprevus', 'sorties', 'vetements'] as const) {
    b[`novembreMontants.${cle}`] = { min: 0, max: MONTANT_MAX_LIGNE, pas };
  }
  const n = etat.novembre;
  const modifiees =
    (n.streaming !== 'garder' ? 1 : 0) +
    (n.salle !== 'garder' ? 1 : 0) +
    (modifie(modes.imprevus) ? 1 : 0) +
    (modifie(modes.sorties) ? 1 : 0) +
    (modifie(modes.vetements) ? 1 : 0);
  v.nbAutresModifiees = modifiees === 0 ? 'aucune ligne modifiée' : modifiees === 1 ? '1 ligne modifiée' : `${modifiees} lignes modifiées`;
  const pn = planNovembre(plan, reel, n);
  c.coursNovChoisi = n.coursNovembre !== null;
  const mn = n.coursNovembre !== null ? margeNovembre(sim.soldeFinal, n.coursNovembre, pn.totalNovembre) : 0;
  v.margeNov = eur(mn);
  v.margeNovAbs = eurAbs(mn);
  c.margeNovNegative = c.coursNovChoisi && mn < 0;
  c.novembreComplet = c.coursNovChoisi && (!reel.decalerSoeur || n.soeur !== null);
  const h = pn.habituelDecembre;
  const apercu = [
    `dépenses fixes ${eur(h.depensesFixes)}`,
    `courses ${eur(h.courses)}`,
    `sorties ${eur(h.sorties)}`,
    `vêtements ${eur(h.vetements)}`,
    `réserve ${eur(h.reserve)}`,
    `projet ${eur(h.projet)}`,
    `épargne ${eur(h.epargne)}`,
    `imprévus ${eur(h.imprevus)}, soit ${eur(totalLignes(h))}`,
  ].join(', ');
  v.apercuHabituel =
    pn.soeurDecembre !== 6000 ? `${apercu} (remboursement à sa sœur : ${eur(pn.soeurDecembre)} en décembre, puis 60 €)` : apercu;

  // ------------------------------------------------------------ Écrans 10 à 12 : Marc
  contexteMarc(etat, v, c, b, pas);

  return { valeurs: v, conditions: c, bornes: b };
}

const planLignes = (pl: PlanHabituel) => ({
  depenses: depensesDuPlan(pl),
  reserve: pl.reserve,
  coussin: pl.coussin,
  imprevus: pl.imprevus,
  nonAffecte: pl.nonAffecte,
  total: totalPlan(pl),
});

function contexteMarc(
  etat: EtatEP1,
  v: Record<string, string>,
  c: Record<string, boolean>,
  b: Record<string, Bornes>,
  pas: number,
) {
  const marc = etat.marc;
  const B = marc.base;
  c.baseChoisie = B !== null;
  c.marcPret = B !== null && etat.raisonMarc !== null;
  c.base1900 = B === 190000;
  for (const cle of LEVIERS) {
    c[`levierOctAffiche_${cle}`] = false;
    c[`levierOct_${cle}`] = false;
    c[`durableOct_${cle}`] = false;
    c[`levierDecAffiche_${cle}`] = false;
    c[`levierDec_${cle}`] = false;
  }
  for (const nom of [
    'compteOctPositif',
    'compteOctNegatif',
    'surplusOct',
    'liberationOct',
    'FcOctPositif',
    'reaffOctCoussin',
    'FncOctPositif',
    'marcPret1280',
    'marcPret1585',
    'marcPret1900',
    'base1900OctNegatif',
    'base1900Reaffectation',
    'base1900ImNA',
    'novembrePret',
    'imDecPositif',
    'xDecNegatif',
    'R1Positif',
    'retraitProjetAffiche',
    'retraitProjetGrise',
    'toutMobilise',
    'liberationDec',
    'Fc12Positif',
    'projetExiste',
    'coussinGriseDec',
    'reaffDecActive',
    'A12Positif',
    'XmoinsA12Positif',
    'reserveSuspendueTotale',
    'reserveSuspenduePartielle',
    'octNegatifSansReaction',
    'reaffectationOctFaite',
    'reservesRepriseAvecReductible',
  ]) {
    c[nom] = false;
  }
  if (B === null) return;

  v.B = eur(B);
  v.margeMarc = eur(margeBase(B));
  v.nonReparti = eur(nonReparti(B, marc.reglages));
  const maxReglages = bornesReglages(B, marc.reglages);
  b['marc.reglages.coussin'] = { min: 0, max: maxReglages.coussin, pas };
  b['marc.reglages.imprevus'] = { min: 0, max: maxReglages.imprevus, pas };
  b['marc.reglages.depensesEnPlus'] = { min: 0, max: maxReglages.depensesEnPlus, pas };

  const o = octobre(marc);
  v.depensesPrevuesOct = eur(104100 + marc.reglages.depensesEnPlus);
  v.aMettreOct = eur(3500 + marc.reglages.coussin);
  v.compteAvantOct = eur(o.compteAvant);
  v.manqueAvantOct = eur(o.manqueAvant);
  v.manqueRestantOct = eur(o.manqueRestant);
  v.surplusOctMontant = eur(o.surplus);
  v.compteApresOct = eur(o.compteApres);
  c.compteOctPositif = c.marcPret && o.compteAvant >= 0;
  c.compteOctNegatif = c.marcPret && o.compteAvant < 0;
  c.surplusOct = c.compteOctNegatif && o.surplus > 0;
  for (const cle of LEVIERS) {
    v[`maxOct_${cle}`] = eur(o.maximums[cle]);
    c[`levierOctAffiche_${cle}`] = c.compteOctNegatif && o.maximums[cle] > 0;
    c[`levierOct_${cle}`] = c[`levierOctAffiche_${cle}`] && marc.leviersOctobre[cle] > 0;
    c[`durableOct_${cle}`] = marc.durablesOctobre[cle];
    b[`marc.leviersOctobre.${cle}`] = { min: 0, max: o.leviersAffiches ? o.maximums[cle] : 0, pas };
  }
  v.FOct = eur(o.Fc + o.Fnc);
  v.FcOct = eur(o.Fc);
  v.FncOct = eur(o.Fnc);
  c.liberationOct = c.compteOctNegatif && o.Fc + o.Fnc > 0;
  c.FcOctPositif = o.Fc > 0;
  c.reaffOctCoussin = c.liberationOct && etat.ui.reaffOctMode === 'coussin';
  c.FncOctPositif = c.liberationOct && o.Fnc > 0;
  b['marc.reaffectationOctobre'] = { min: 0, max: o.Fc, pas };
  const lo = planLignes(o.planHabituel);
  for (const [cle, montant] of Object.entries(lo)) v[`planOct_${cle}`] = eur(montant);
  c.marcPret1280 = c.marcPret && B === 128000;
  c.marcPret1585 = c.marcPret && B === 158500;
  c.marcPret1900 = c.marcPret && B === 190000;
  c.octNegatifSansReaction =
    o.compteApres < 0 && LEVIERS.every((cle) => marc.leviersOctobre[cle] === 0);
  c.reaffectationOctFaite = marc.reaffectationOctobre > 0;

  // Novembre
  const aRepartir = 190000 - B;
  v.aRepartir = eur(aRepartir);
  const durableOct = LEVIERS.some((cle) => marc.durablesOctobre[cle]);
  v.modifieEnOctobre = durableOct ? ', tel qu’il l’a modifié en octobre' : '';
  const options: Record<number, [string, string, string]> = {
    128000: ['620 €', '300 € au coussin, 200 € au projet, 120 € de plaisir', '620 €'],
    158500: ['315 €', '150 € au coussin, 100 € au projet, 65 € de plaisir', '315 €'],
    190000: ['', '', ''],
  };
  [v.optionCoussin, v.optionUnPeuDeTout, v.optionDepenser] = options[B];
  c.base1900OctNegatif = B === 190000 && o.compteApres < 0;
  c.base1900Reaffectation = B === 190000 && marc.reaffectationOctobre > 0;
  v.reaffectationOct = eur(marc.reaffectationOctobre);
  c.base1900ImNA = B === 190000 && o.planHabituel.imprevus + o.planHabituel.nonAffecte > 0;
  v.imNA = eur(o.planHabituel.imprevus + o.planHabituel.nonAffecte);
  c.novembrePret = B === 190000 || marc.choixNovembre !== null;
  if (!c.novembrePret) return;

  const n = novembre(marc);
  v.compteNov = eur(n.compteFin);
  v.coussinNov = eur(n.soldes.coussin);
  v.reserveNov = eur(n.soldes.reserve);
  v.projetNovTexte = n.projetExiste ? `, projet ${eur(n.soldes.projet)}` : '';

  // Décembre
  const d = decembre(marc);
  v.Xdec = eur(d.X);
  v.imDec = eur(d.planAvant.imprevus);
  c.imDecPositif = d.planAvant.imprevus > 0;
  c.xDecNegatif = d.X < 0;
  for (const cle of LEVIERS) {
    v[`maxDec_${cle}`] = eur(d.maximums[cle]);
    c[`levierDecAffiche_${cle}`] = d.maximums[cle] > 0;
    c[`levierDec_${cle}`] = marc.leviersDecembre[cle] > 0;
    b[`marc.leviersDecembre.${cle}`] = { min: 0, max: d.maximums[cle], pas };
  }
  v.R1 = eur(d.R1);
  c.R1Positif = d.R1 > 0;
  v.dispoCoussin = eur(d.disponibles.coussin);
  v.dispoProjet = eur(d.disponibles.projet);
  v.dispoReserve = eur(d.disponibles.reserve);
  c.projetExiste = n.projetExiste;
  c.retraitProjetAffiche = c.R1Positif && n.projetExiste && d.disponibles.projet > 0;
  c.retraitProjetGrise = c.R1Positif && n.projetExiste && d.disponibles.projet === 0;
  const retraits = marc.retraitsDecembre;
  const total = retraits.coussin + retraits.projet + retraits.reserve;
  for (const cle of ['coussin', 'projet', 'reserve'] as const) {
    const autres = total - retraits[cle];
    b[`marc.retraitsDecembre.${cle}`] = { min: 0, max: Math.max(0, Math.min(d.disponibles[cle], d.R1 - autres)), pas };
  }
  v.Ydec = eur(d.totalRetraits);
  v.R1moinsY = eur(d.R1 - d.totalRetraits);
  v.R2 = eur(d.R2);
  c.toutMobilise = d.toutDisponibleMobilise;
  v.F12 = eur(d.Fc + d.Fnc);
  v.Fc12 = eur(d.Fc);
  v.FcFnc12 = eur(d.Fc + d.Fnc);
  c.liberationDec = d.Fc + d.Fnc > 0;
  c.Fc12Positif = d.Fc > 0;
  c.coussinGriseDec = c.liberationDec && d.Fnc > 0 && d.Fc === 0;
  const modeDec = etat.ui.reaffDecMode;
  c.reaffDecActive = c.liberationDec && modeDec !== 'non';
  const reaff = marc.reaffectationDecembre;
  b['marc.reaffectationDecembre.montant'] = {
    min: 0,
    max: modeDec === 'non' ? 0 : reaff.cible === 'coussin' ? d.Fc : d.Fc + d.Fnc,
    pas,
  };
  v.A12 = eur(reaff.montant);
  c.A12Positif = c.liberationDec && reaff.montant > 0;
  v.cibleDec = reaff.cible === 'coussin' ? 'le coussin' : 'le projet';
  v.XmoinsA12 = eur(d.Fc + d.Fnc - reaff.montant);
  c.XmoinsA12Positif = c.liberationDec && d.Fc + d.Fnc - reaff.montant > 0;
  const fleche = (avant: number, apres: number) => `${eur(avant)} → ${eur(apres)}`;
  v.planDec_depensesEnPlus = fleche(d.planAvant.depensesEnPlus, d.planApres.depensesEnPlus);
  v.planDec_loisirs = fleche(d.planAvant.loisirs, d.planApres.loisirs);
  v.planDec_reserve = fleche(d.planAvant.reserve, d.planApres.reserve);
  v.planDec_coussin = fleche(d.planAvant.coussin, d.planApres.coussin);
  v.planDec_projet = fleche(d.planAvant.projet, d.planApres.projet);
  v.planDec_nonAffecte = fleche(d.planAvant.nonAffecte, d.planApres.nonAffecte);
  v.planDec_total = fleche(totalPlan(d.planAvant), totalPlan(d.planApres));
  const reserveDurable = marc.durablesDecembre.reserve && marc.leviersDecembre.reserve > 0;
  c.reserveSuspendueTotale = reserveDurable && d.planApres.reserve === 0;
  c.reserveSuspenduePartielle = reserveDurable && d.planApres.reserve > 0;
  v.reserveFinDec = eur(d.soldesFin.reserve);
  v.assuranceManquante = eur(42000 - d.soldesFin.reserve);
  v.Zdec = eur(d.Z);
  c.reservesRepriseAvecReductible = d.totalRetraits > 0 && d.Z > 0;
}
