import {
  AUCUN_MOYEN,
  CHOIX_NOVEMBRE_INITIAUX,
  ErreurBornes,
  PLAN_ESQUISSE,
  besoinDeCours,
  calculerPlan,
  calendrierOctobre,
  euros,
  margeNovembre,
  planNovembre,
  repartirPlusFortsRestes,
  resultatMoyens,
  simulerOctobre,
  situationAu15,
} from '..';

const PLAN_AJUSTE = { ...PLAN_ESQUISSE, sorties: euros(170), vetements: euros(60), epargne: euros(40) };

describe('Amadou — plan (EP1 §7.1, §8.1)', () => {
  test('dépenses fixes : 621 + 48 + 32 + 43 + 60 + 18 + 29 = 851 €', () => {
    expect(621 + 48 + 32 + 43 + 60 + 18 + 29).toBe(851);
  });

  test('plan esquissé, cours non comptés : T = 1 659 €, marge −19 €, imprévus couverts à 41 €', () => {
    const r = calculerPlan(PLAN_ESQUISSE, 0);
    expect(r.total).toBe(euros(1659));
    expect(r.marge).toBe(euros(-19));
    expect(r.couverture).toBe('partielle');
    expect(r.imprevusCouverts).toBe(euros(41));
    expect(r.misDeCote).toBe(euros(188));
  });

  test('plan esquissé, cours à la moyenne : marge +73,50 €, besoin de cours 19 €, marge réelle +21 €', () => {
    const r = calculerPlan(PLAN_ESQUISSE, euros(92.5));
    expect(r.marge).toBe(euros(73.5));
    const U = besoinDeCours(PLAN_ESQUISSE, euros(92.5));
    expect(U).toBe(euros(19));
    expect(U > 0 && U <= euros(40)).toBe(true);
    expect(euros(1640) + euros(40) - r.total).toBe(euros(21));
  });

  test('couverture des imprévus aux bornes : m = 0 totale, m = −I nulle', () => {
    const zero = { ...PLAN_ESQUISSE, sorties: euros(191) };
    expect(calculerPlan(zero, 0).marge).toBe(0);
    expect(calculerPlan(zero, 0).couverture).toBe('totale');
    const moinsI = { ...PLAN_ESQUISSE, sorties: euros(251) };
    expect(calculerPlan(moinsI, 0).marge).toBe(euros(-60));
    expect(calculerPlan(moinsI, 0).couverture).toBe('nulle');
    expect(calculerPlan(moinsI, 0).imprevusCouverts).toBe(0);
  });

  test('plan ajusté : T = 1 589 €, marge +51 €', () => {
    const r = calculerPlan(PLAN_AJUSTE, 0);
    expect(r.total).toBe(euros(1589));
    expect(r.marge).toBe(euros(51));
  });
});

describe('Amadou — le 15 octobre (écran 5)', () => {
  test('plan esquissé : compte 390 €, mis de côté 188 €, reste à payer 367 €, argent libre 23 €, manque 107 €', () => {
    const s = situationAu15(PLAN_ESQUISSE);
    expect(s.compteAvantReparation).toBe(euros(390));
    expect(s.misDeCote).toBe(euros(188));
    expect(s.resteAPayer).toBe(euros(367));
    expect(s.argentLibre).toBe(euros(23));
    expect(s.manque).toBe(euros(107));
  });

  test('L = 501 − M − S − V est indépendant des courses prévues', () => {
    const a = situationAu15({ ...PLAN_ESQUISSE, courses: euros(200) });
    const b = situationAu15({ ...PLAN_ESQUISSE, courses: euros(350) });
    expect(a.argentLibre).toBe(b.argentLibre);
  });

  test('plan ajusté : argent libre 93 €, manque 37 €', () => {
    const s = situationAu15(PLAN_AJUSTE);
    expect(s.argentLibre).toBe(euros(93));
    expect(s.manque).toBe(euros(37));
  });

  test('la projection L − 130 + 40 + R est égale au solde final simulé', () => {
    const moyens = { ...AUCUN_MOYEN, sorties: euros(30), decalerSoeur: true, epargne: euros(20) };
    const r = resultatMoyens(PLAN_ESQUISSE, moyens);
    expect(r.trouve).toBe(euros(110));
    expect(r.projection).toBe(simulerOctobre(PLAN_ESQUISSE, moyens).soldeFinal);
  });

  test('moyens hors bornes : erreur typée', () => {
    expect(() => resultatMoyens(PLAN_ESQUISSE, { ...AUCUN_MOYEN, sorties: euros(106) })).toThrow(ErreurBornes);
    expect(() => resultatMoyens(PLAN_ESQUISSE, { ...AUCUN_MOYEN, projet: euros(101) })).toThrow(ErreurBornes);
  });
});

describe('Amadou — calendrier (EP1 §7.2, §8.1)', () => {
  test('plus forts restes : 85 € de sorties → 24 / 18 / 24 / 19 ; 30 € de vêtements → 8 / 7 / 15', () => {
    expect(repartirPlusFortsRestes(euros(85), [30, 22, 30, 23])).toEqual([24, 18, 24, 19].map(euros));
    expect(repartirPlusFortsRestes(euros(30), [1, 1, 2])).toEqual([8, 7, 15].map(euros));
  });

  test('un reste de 0,50 € va à la dernière date', () => {
    const r = repartirPlusFortsRestes(euros(42.5), [1, 1, 2]);
    expect(r.reduce((a, b) => a + b, 0)).toBe(euros(42.5));
    expect(r[2] % 100).toBe(50);
  });

  test('la somme répartie est toujours égale au montant, pour tous les montants de 0 à 500 € par demi-euro', () => {
    for (let c = 0; c <= 50000; c += 50) {
      expect(repartirPlusFortsRestes(c, [30, 22, 30, 23]).reduce((a, b) => a + b, 0)).toBe(c);
      expect(repartirPlusFortsRestes(c, [1, 1, 2]).reduce((a, b) => a + b, 0)).toBe(c);
    }
  });

  test('plan esquissé, rien changé : 390 € puis 260 €, 202 € le 20, 78 € le 25, premier manque le 28 (−8 €), solde final −67 €', () => {
    const sim = simulerOctobre(PLAN_ESQUISSE, AUCUN_MOYEN);
    expect(sim.frise.avantReparation).toBe(euros(390));
    expect(sim.frise.apresReparation).toBe(euros(260));
    expect(sim.frise.le20).toBe(euros(202));
    expect(sim.frise.le25).toBe(euros(78));
    expect(sim.premierManque).toEqual({ jour: 28, montant: euros(-8), avantLe15: false });
    expect(sim.soldeFinal).toBe(euros(-67));
    expect(sim.misDeCoteNet.total).toBe(euros(188));
    expect(sim.remontee).toBeNull();
    expect(sim.conservation).toBe(true);
  });

  test('plan ajusté : 430 € puis 300 €, 250 € le 20, 133 € le 25, aucun manque, solde final +3 €', () => {
    const lignes = calendrierOctobre(PLAN_AJUSTE, AUCUN_MOYEN);
    expect(lignes.filter((l) => l.cle === 'sorties').map((l) => -l.montant)).toEqual([24, 18, 24, 19].map(euros));
    expect(lignes.filter((l) => l.cle === 'vetements').map((l) => -l.montant)).toEqual([8, 7, 15].map(euros));
    const sim = simulerOctobre(PLAN_AJUSTE, AUCUN_MOYEN);
    expect(sim.frise.avantReparation).toBe(euros(430));
    expect(sim.frise.apresReparation).toBe(euros(300));
    expect(sim.frise.le20).toBe(euros(250));
    expect(sim.frise.le25).toBe(euros(133));
    expect(sim.premierManque).toBeNull();
    expect(sim.soldeFinal).toBe(euros(3));
  });

  test('plan esquissé, sorties −67 € et vêtements −40 € : solde final +40 €, aucun manque', () => {
    const sim = simulerOctobre(PLAN_ESQUISSE, { ...AUCUN_MOYEN, sorties: euros(67), vetements: euros(40) });
    expect(sim.soldeFinal).toBe(euros(40));
    expect(sim.premierManque).toBeNull();
  });

  test('plan esquissé, remboursement décalé : solde final −7 €, premier manque le 30', () => {
    const sim = simulerOctobre(PLAN_ESQUISSE, { ...AUCUN_MOYEN, decalerSoeur: true });
    expect(sim.soldeFinal).toBe(euros(-7));
    expect(sim.premierManque?.jour).toBe(30);
    expect(sim.duSoeur).toBe(euros(60));
  });

  test('un manque dans le bloc de la première quinzaine s’affiche « avant le 15 » ; remontée par les reprises', () => {
    const plan = { ...PLAN_ESQUISSE, sorties: euros(800), vetements: euros(300) };
    const sim = simulerOctobre(plan, { ...AUCUN_MOYEN, projet: euros(100) });
    expect(sim.premierManque?.avantLe15).toBe(true);
    expect(sim.remontee?.cause).toBe('reprises');
  });

  test('remontée par les cours du 20', () => {
    // Solde à −30 € le 19, puis +40 € de cours le 20.
    const plan = { ...PLAN_ESQUISSE, epargne: euros(242) };
    const sim = simulerOctobre(plan, AUCUN_MOYEN);
    expect(sim.remontee?.cause).toBe('cours');
    expect(sim.remontee?.jour).toBe(20);
  });

  test('conservation sur un grand nombre de parcours', () => {
    for (let s = 0; s <= 300; s += 37) {
      for (let v = 0; v <= 150; v += 29) {
        const plan = { ...PLAN_ESQUISSE, sorties: euros(s), vetements: euros(v) };
        const moyens = { ...AUCUN_MOYEN, sorties: euros(Math.floor(s / 4)), decalerSoeur: s % 2 === 0 };
        const sim = simulerOctobre(plan, moyens);
        expect(sim.conservation).toBe(true);
        expect(sim.soldeFinal).toBe(resultatMoyens(plan, moyens).projection);
      }
    }
  });
});

describe('Amadou — novembre (écran 8)', () => {
  test('marge de novembre = compte au 31 + 1 640 € + cours retenus − total du plan', () => {
    const { totalNovembre } = planNovembre(PLAN_ESQUISSE, AUCUN_MOYEN, CHOIX_NOVEMBRE_INITIAUX);
    expect(totalNovembre).toBe(euros(1659));
    expect(margeNovembre(euros(-67), 0, totalNovembre)).toBe(euros(-86));
  });

  test('remboursement décalé, étalement : 90 € en novembre ; streaming arrêté et salle résiliée', () => {
    const moyens = { ...AUCUN_MOYEN, decalerSoeur: true };
    const choix = { ...CHOIX_NOVEMBRE_INITIAUX, soeur: 'etaler' as const, streaming: 'arreter' as const, salle: 'resilier' as const };
    const r = planNovembre(PLAN_ESQUISSE, moyens, choix);
    expect(r.novembre.depensesFixes).toBe(euros(851 + 30 - 18 - 29));
    expect(r.habituelDecembre.depensesFixes).toBe(euros(851 - 18 - 29));
    expect(r.soeurDecembre).toBe(euros(90));
  });

  test('courses à 288 € pour novembre seulement ; projet rattrapé', () => {
    const moyens = { ...AUCUN_MOYEN, projet: euros(40) };
    const choix = { ...CHOIX_NOVEMBRE_INITIAUX, courses: 'novembre' as const, projet: 'rattraper' as const };
    const r = planNovembre(PLAN_ESQUISSE, moyens, choix);
    expect(r.novembre.courses).toBe(euros(288));
    expect(r.habituelDecembre.courses).toBe(euros(270));
    expect(r.novembre.projet).toBe(euros(140));
    expect(r.habituelDecembre.projet).toBe(euros(100));
  });
});
