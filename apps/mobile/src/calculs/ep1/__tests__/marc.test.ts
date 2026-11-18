import {
  BASES,
  ETAT_MARC_INITIAL,
  EtatMarc,
  ErreurBornes,
  bornesReglages,
  conservationMarc,
  decembre,
  euros,
  novembre,
  octobre,
  totalPlan,
} from '..';

const etat = (partiel: Partial<EtatMarc>): EtatMarc => ({ ...ETAT_MARC_INITIAL, ...partiel });

const REF_1280 = etat({ base: euros(1280), reglages: { coussin: euros(100), imprevus: euros(104), depensesEnPlus: 0 } });
const REF_1585 = etat({ base: euros(1585), reglages: { coussin: 0, imprevus: euros(209), depensesEnPlus: euros(300) } });
const REF_1900 = etat({ base: euros(1900), reglages: { coussin: euros(324), imprevus: 0, depensesEnPlus: euros(500) } });

const reaction1900 = (durable: boolean, A: number): EtatMarc => ({
  ...REF_1900,
  leviersOctobre: { depensesEnPlus: euros(500), loisirs: 0, coussin: 0, reserve: 0 },
  durablesOctobre: { depensesEnPlus: durable, loisirs: false, coussin: false, reserve: false },
  reaffectationOctobre: euros(A),
});

/** Grand livre indépendant des formules (EP1 §7.6 : deux calculs comparés). */
function grandLivre(e: EtatMarc) {
  const B = e.base!;
  const r = e.reglages;
  const lo = e.leviersOctobre;
  const dur = e.durablesOctobre;
  let compte = 0;
  let coussin = 0;
  let reserve = 0;
  let projet = 0;
  let depenses = 0;
  const payer = (m: number) => {
    compte -= m;
    depenses += m;
  };
  const verser = (m: number, cible: 'coussin' | 'reserve' | 'projet') => {
    compte -= m;
    if (cible === 'coussin') coussin += m;
    if (cible === 'reserve') reserve += m;
    if (cible === 'projet') projet += m;
  };
  // Octobre
  compte += euros(1410);
  payer(euros(910) + euros(11) + euros(120) - lo.loisirs + r.depensesEnPlus - lo.depensesEnPlus);
  verser(euros(35) - lo.reserve, 'reserve');
  verser(r.coussin - lo.coussin, 'coussin');
  const compteOctobre = compte;
  // Plan habituel
  const loisirs = euros(120) - (dur.loisirs ? lo.loisirs : 0);
  const dm = r.depensesEnPlus - (dur.depensesEnPlus ? lo.depensesEnPlus : 0);
  const res = euros(35) - (dur.reserve ? lo.reserve : 0);
  const cou = r.coussin - (dur.coussin ? lo.coussin : 0) + e.reaffectationOctobre;
  // Novembre
  compte += euros(1900);
  payer(euros(921) + loisirs + dm);
  verser(res, 'reserve');
  verser(cou, 'coussin');
  const extra = euros(1900) - B;
  if (extra > 0) {
    const table: Record<number, Record<string, [number, number, number]>> = {
      [euros(1280)]: { coussin: [620, 0, 0], unPeuDeTout: [300, 200, 120], depenser: [0, 0, 620] },
      [euros(1585)]: { coussin: [315, 0, 0], unPeuDeTout: [150, 100, 65], depenser: [0, 0, 315] },
    };
    const [c, p, plaisir] = table[B][e.choixNovembre!];
    verser(euros(c), 'coussin');
    verser(euros(p), 'projet');
    payer(euros(plaisir));
  }
  const compteNovembre = compte;
  // Décembre, si rien ne change
  compte += euros(900);
  payer(euros(300) + euros(921) + loisirs + dm);
  verser(res, 'reserve');
  verser(cou, 'coussin');
  return { compteOctobre, compteNovembre, compteDecembre: compte, coussin, reserve, projet, depenses };
}

describe('Marc — bornes (EP1 §7.3)', () => {
  test('marge 204, 509 ou 824 € selon la base', () => {
    expect(BASES.map((B) => bornesReglages(B, { coussin: 0, imprevus: 0, depensesEnPlus: 0 }).coussin)).toEqual(
      [204, 509, 824].map(euros),
    );
  });

  test('avec la base 1 280 €, le compte d’octobre vaut toujours au moins 130 €', () => {
    for (let c = 0; c <= 204; c += 17) {
      for (let d = 0; c + d <= 204; d += 13) {
        const o = octobre(etat({ base: euros(1280), reglages: { coussin: euros(c), imprevus: 0, depensesEnPlus: euros(d) } }));
        expect(o.compteAvant).toBeGreaterThanOrEqual(euros(130));
        expect(o.leviersAffiches).toBe(false);
      }
    }
  });

  test('saisies invalides : erreur typée', () => {
    expect(() => octobre(etat({ base: euros(1280), reglages: { coussin: euros(205), imprevus: 0, depensesEnPlus: 0 } }))).toThrow(ErreurBornes);
    expect(() => octobre(etat({ base: euros(1300) }))).toThrow(ErreurBornes);
    expect(() => octobre({ ...REF_1280, leviersOctobre: { depensesEnPlus: 0, loisirs: euros(10), coussin: 0, reserve: 0 } })).toThrow(ErreurBornes);
    expect(() => octobre({ ...reaction1900(true, 0), reaffectationOctobre: euros(501) })).toThrow(ErreurBornes);
    expect(() => novembre(REF_1280)).toThrow(ErreurBornes);
    expect(() => novembre({ ...REF_1900, choixNovembre: 'coussin' })).toThrow(ErreurBornes);
  });
});

describe('Marc — valeurs de contrôle (EP1 §8.2)', () => {
  const cas: [string, EtatMarc, number, number, number, Record<string, number>][] = [
    ['1 280 € réf., option i', { ...REF_1280, choixNovembre: 'coussin' }, 234, 338, -238, { coussin: 920, reserve: 105, projet: 0 }],
    ['1 280 € réf., option ii', { ...REF_1280, choixNovembre: 'unPeuDeTout' }, 234, 338, -238, { coussin: 600, reserve: 105, projet: 200 }],
    ['1 280 € réf., option iii', { ...REF_1280, choixNovembre: 'depenser' }, 234, 338, -238, { coussin: 300, reserve: 105, projet: 0 }],
    ['1 585 € réf., option i', { ...REF_1585, choixNovembre: 'coussin' }, 34, 243, -533, { coussin: 315, reserve: 105, projet: 0 }],
    ['1 585 € réf., option ii', { ...REF_1585, choixNovembre: 'unPeuDeTout' }, 34, 243, -533, { coussin: 150, reserve: 105, projet: 100 }],
    ['1 585 € réf., option iii', { ...REF_1585, choixNovembre: 'depenser' }, 34, 243, -533, { coussin: 0, reserve: 105, projet: 0 }],
    ['1 900 € réf., sans réaction', REF_1900, -490, -490, -1790, { coussin: 972, reserve: 105, projet: 0 }],
    ['1 900 € réf., réaction ponctuelle', reaction1900(false, 0), 10, 10, -1290, { coussin: 972, reserve: 105, projet: 0 }],
    ['1 900 € réf., réaction durable, A = 0', reaction1900(true, 0), 10, 510, -290, { coussin: 972, reserve: 105, projet: 0 }],
    ['1 900 € réf., réaction durable, A = 250', reaction1900(true, 250), 10, 260, -790, { coussin: 1472, reserve: 105, projet: 0 }],
    ['1 900 € réf., réaction durable, A = 500', reaction1900(true, 500), 10, 10, -1290, { coussin: 1972, reserve: 105, projet: 0 }],
    [
      'L14 (§7.5)',
      etat({
        base: euros(1900),
        reglages: { coussin: 0, imprevus: 0, depensesEnPlus: euros(824) },
        leviersOctobre: { depensesEnPlus: euros(824), loisirs: 0, coussin: 0, reserve: 0 },
        durablesOctobre: { depensesEnPlus: true, loisirs: false, coussin: false, reserve: false },
        reaffectationOctobre: euros(824),
      }),
      334,
      334,
      -966,
      { coussin: 1648, reserve: 105, projet: 0 },
    ],
  ];

  test.each(cas)('%s', (_nom, e, oct, nov, dec, reserves) => {
    const d = decembre(e);
    expect(d.novembre.octobre.compteApres).toBe(euros(oct));
    expect(d.novembre.compteFin).toBe(euros(nov));
    expect(d.X).toBe(euros(dec));
    expect(d.soldesFin.coussin).toBe(euros(reserves.coussin));
    expect(d.soldesFin.reserve).toBe(euros(reserves.reserve));
    expect(d.soldesFin.projet).toBe(euros(reserves.projet));
    expect(conservationMarc(e)).toBe(true);

    const gl = grandLivre(e);
    expect(gl.compteOctobre).toBe(euros(oct));
    expect(gl.compteNovembre).toBe(euros(nov));
    expect(gl.compteDecembre).toBe(euros(dec));
    expect(gl.depenses + gl.coussin + gl.reserve + gl.projet + gl.compteDecembre).toBe(euros(4210));
  });

  test('L14 : surplus ponctuel de 334 € en octobre ; non affecté 0 € ; plan égal à la base', () => {
    const o = octobre(cas[11][1]);
    expect(o.surplus).toBe(euros(334));
    expect(o.planHabituel.nonAffecte).toBe(0);
    expect(totalPlan(o.planHabituel)).toBe(euros(1900));
  });

  test('neutralité de la réaffectation : compte + coussin fin décembre = 682 € pour A = 0, 412 ou 824 €', () => {
    for (const A of [0, 412, 824]) {
      const e = { ...cas[11][1], reaffectationOctobre: euros(A) };
      const d = decembre(e);
      expect(d.X + d.soldesFin.coussin).toBe(euros(682));
    }
  });
});

describe('Marc — décembre (écran 12)', () => {
  test('disponible en voie 2 : coussin de 648 €, versement de 324 € dont 100 € suspendus → 872 €', () => {
    const e = { ...REF_1900, leviersDecembre: { depensesEnPlus: 0, loisirs: 0, coussin: euros(100), reserve: 0 } };
    const d = decembre(e);
    expect(d.novembre.soldes.coussin).toBe(euros(648));
    expect(d.disponibles.coussin).toBe(euros(872));
  });

  test('R1 = max(0 ; déficit − réductions) ; retraits plafonnés à R1 ; R2 et conservation', () => {
    const e: EtatMarc = {
      ...REF_1585,
      choixNovembre: 'coussin',
      leviersDecembre: { depensesEnPlus: euros(300), loisirs: euros(100), coussin: 0, reserve: 0 },
    };
    const d = decembre(e);
    expect(d.deficitInitial).toBe(euros(533));
    expect(d.R1).toBe(euros(133));
    expect(d.Z).toBe(euros(20));
    const avecRetrait = { ...e, retraitsDecembre: { coussin: euros(133), projet: 0, reserve: 0 } };
    expect(decembre(avecRetrait).R2).toBe(0);
    expect(conservationMarc(avecRetrait)).toBe(true);
    expect(() => decembre({ ...e, retraitsDecembre: { coussin: euros(134), projet: 0, reserve: 0 } })).toThrow(ErreurBornes);
  });

  test('voie 2 interdite si R1 = 0', () => {
    const e: EtatMarc = { ...REF_1280, choixNovembre: 'coussin', leviersDecembre: { depensesEnPlus: 0, loisirs: euros(120), coussin: euros(100), reserve: euros(18) } };
    expect(decembre(e).R1).toBe(0);
    expect(() => decembre({ ...e, retraitsDecembre: { coussin: euros(1), projet: 0, reserve: 0 } })).toThrow(ErreurBornes);
  });

  test('réaffectation durable : le versement au coussin suspendu ne peut retourner au coussin', () => {
    const e: EtatMarc = {
      ...REF_1280,
      choixNovembre: 'unPeuDeTout',
      leviersDecembre: { depensesEnPlus: 0, loisirs: 0, coussin: euros(100), reserve: 0 },
      durablesDecembre: { depensesEnPlus: false, loisirs: false, coussin: true, reserve: false },
    };
    expect(() => decembre({ ...e, reaffectationDecembre: { cible: 'coussin', montant: euros(50) } })).toThrow(ErreurBornes);
    const d = decembre({ ...e, reaffectationDecembre: { cible: 'projet', montant: euros(50) } });
    expect(d.planApres.projet).toBe(euros(50));
    expect(totalPlan(d.planApres)).toBe(euros(1280));
  });
});
