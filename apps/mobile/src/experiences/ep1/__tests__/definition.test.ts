import { definitionEP1 } from '../definition';
import { ETAT_EP1_INITIAL, EtatEP1, reducteur } from '../etat';
import { contexteEP1 } from '../liaisons';
import { clesDuGabarit, remplir, verifie } from '../../../lecteur/gabarits';
import { Bloc, Contexte, EcranDefinition } from '../../../lecteur/types';
import { euros } from '../../../calculs/ep1';

const PAS = definitionEP1.reglages.pasMontant;

function appliquer(etat: EtatEP1, valeurs: [string, unknown][]): EtatEP1 {
  return valeurs.reduce((e, [chemin, valeur]) => reducteur(e, { type: 'definir', chemin, valeur }), etat);
}

// États représentatifs, couvrant les principales branches des écrans.
const ETATS: Record<string, EtatEP1> = {
  initial: ETAT_EP1_INITIAL,
  esquisseK0: appliquer(ETAT_EP1_INITIAL, [['K', 0]]),
  moyenne: appliquer(ETAT_EP1_INITIAL, [['K', 9250]]),
  meilleurMois: appliquer(ETAT_EP1_INITIAL, [['K', 16000], ['plan.sorties', euros(300)]]),
  margePositive: appliquer(ETAT_EP1_INITIAL, [['K', 0], ['plan.sorties', euros(100)], ['plan.imprevus', 0]]),
  sansImprevus: appliquer(ETAT_EP1_INITIAL, [['K', 9250], ['plan.imprevus', 0], ['plan.sorties', euros(400)]]),
  manqueAvant15: appliquer(ETAT_EP1_INITIAL, [
    ['K', 0],
    ['plan.sorties', euros(800)],
    ['plan.vetements', euros(300)],
    ['moyens.projet', euros(100)],
    ['moyens.reserve', euros(38)],
    ['moyens.epargne', euros(50)],
  ]),
  tousMoyens: appliquer(ETAT_EP1_INITIAL, [
    ['K', 0],
    ['cartes.streaming', 'essentielle'],
    ['cartes.courses', 'apres'],
    ['cartes.soeur', 'apres'],
    ['cartes.vetements', 'essentielle'],
    ['ui.cartesVues', true],
    ['plan.courses', euros(300)],
    ['moyens.sorties', euros(50)],
    ['moyens.vetements', euros(20)],
    ['moyens.decalerSoeur', true],
    ['moyens.epargne', euros(10)],
    ['novembreSaisie.coursNovembre', 9250],
    ['novembreSaisie.soeur', 'etaler'],
    ['novembreSaisie.projet', 'rattraper'],
    ['novembreModes.imprevus', 'durable'],
    ['novembreMontants.imprevus', euros(80)],
    ['novembreSaisie.streaming', 'arreter'],
  ]),
  coursesBasses: appliquer(ETAT_EP1_INITIAL, [['K', 0], ['plan.courses', euros(200)], ['moyens.reserve', euros(38)]]),
  coursesEntre: appliquer(ETAT_EP1_INITIAL, [['K', 0], ['plan.courses', euros(280)], ['moyens.projet', euros(40)]]),
  courses288: appliquer(ETAT_EP1_INITIAL, [['K', 0], ['plan.courses', euros(288)]]),
  remonteeCours: appliquer(ETAT_EP1_INITIAL, [['K', 0], ['plan.epargne', euros(242)]]),
  marc1280: appliquer(ETAT_EP1_INITIAL, [
    ['marc.base', euros(1280)],
    ['raisonMarc', 'plusFaible'],
    ['marc.reglages.coussin', euros(100)],
    ['marc.reglages.imprevus', euros(104)],
    ['marc.choixNovembre', 'unPeuDeTout'],
    ['marc.leviersDecembre.loisirs', euros(120)],
    ['marc.leviersDecembre.coussin', euros(50)],
    ['marc.durablesDecembre.coussin', true],
    ['ui.reaffDecMode', 'projet'],
    ['marc.reaffectationDecembre.montant', euros(20)],
    ['marc.retraitsDecembre.projet', euros(30)],
  ]),
  marc1585: appliquer(ETAT_EP1_INITIAL, [
    ['marc.base', euros(1585)],
    ['raisonMarc', 'moyenne'],
    ['marc.reglages.depensesEnPlus', euros(300)],
    ['marc.reglages.imprevus', euros(209)],
    ['marc.choixNovembre', 'coussin'],
    ['marc.leviersDecembre.reserve', euros(35)],
    ['marc.durablesDecembre.reserve', true],
    ['marc.retraitsDecembre.coussin', euros(200)],
  ]),
  marc1900Reaction: appliquer(ETAT_EP1_INITIAL, [
    ['marc.base', euros(1900)],
    ['raisonMarc', 'bonMois'],
    ['marc.reglages.depensesEnPlus', euros(500)],
    ['marc.reglages.coussin', euros(324)],
    ['marc.leviersOctobre.depensesEnPlus', euros(500)],
    ['marc.leviersOctobre.coussin', euros(10)],
    ['marc.durablesOctobre.depensesEnPlus', true],
    ['marc.durablesOctobre.coussin', true],
    ['ui.reaffOctMode', 'coussin'],
    ['marc.reaffectationOctobre', euros(250)],
  ]),
  marc1900SansReaction: appliquer(ETAT_EP1_INITIAL, [
    ['marc.base', euros(1900)],
    ['raisonMarc', 'bonMois'],
    ['marc.reglages.depensesEnPlus', euros(824)],
  ]),
};

function parcourir(blocs: Bloc[], visiter: (b: Bloc) => void) {
  for (const b of blocs) {
    visiter(b);
    if (b.type === 'carte' || b.type === 'detailReplie') parcourir(b.blocs, visiter);
  }
}

function verifierVisible(blocs: Bloc[], ctx: Contexte) {
  for (const b of blocs) {
    if (!verifie(b.condition, ctx)) continue;
    const textes: string[] = [];
    switch (b.type) {
      case 'paragraphe':
      case 'intertitre':
      case 'resume':
        textes.push(b.texte);
        break;
      case 'liste':
        b.elements.filter((e) => verifie(e.condition, ctx)).forEach((e) => textes.push(e.texte));
        break;
      case 'carte':
        if (b.titre) textes.push(b.titre);
        verifierVisible(b.blocs, ctx);
        break;
      case 'detailReplie':
        textes.push(b.libelle);
        verifierVisible(b.blocs, ctx);
        break;
      case 'choixUnique':
        if (b.titre) textes.push(b.titre);
        b.options.filter((o) => verifie(o.condition, ctx)).forEach((o) => textes.push(o.libelle));
        break;
      case 'montant':
        textes.push(b.libelle);
        if (b.aide) textes.push(b.aide);
        expect(ctx.bornes[b.chemin]).toBeDefined();
        break;
      case 'interrupteur':
        textes.push(b.libelle);
        if (b.aide) textes.push(b.aide);
        break;
      case 'ligneGrisee':
        textes.push(b.libelle, b.raison);
        break;
      case 'tableau':
        b.lignes.filter((l) => verifie(l.condition, ctx)).forEach((l) => textes.push(l.libelle, l.valeur));
        break;
      case 'bouton':
        textes.push(b.libelle);
        break;
    }
    for (const t of textes) expect(() => remplir(t, ctx)).not.toThrow();
  }
}

function verifierBoutons(ecran: EcranDefinition, ctx: Contexte) {
  for (const b of ecran.boutons) {
    if (!verifie(b.condition, ctx)) continue;
    verifie(b.actif, ctx);
    remplir(b.libelle, ctx);
    if (b.confirmation && verifie(b.confirmation.condition, ctx)) {
      b.confirmation.textes.filter((t) => verifie(t.condition, ctx)).forEach((t) => remplir(t.texte, ctx));
    }
  }
}

describe('Définition structurée d’EP1', () => {
  test('exactement 13 écrans, numérotés de 1 à 13, avec les titres d’EP1', () => {
    expect(definitionEP1.ecrans.map((e) => e.numero)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(definitionEP1.ecrans.map((e) => e.titre)).toEqual([
      'Le mois d’Amadou',
      'Ce qui va entrer',
      'Ce que coûte un mois',
      'Le plan d’octobre',
      'Le 15 octobre',
      'Fin octobre',
      'Ce que montrent ses choix',
      'Préparer novembre',
      'Ce qu’Amadou a appris',
      'Marc, des revenus qui changent',
      'Novembre : un bon mois',
      'Décembre : un mois difficile',
      'Ce que tu emportes',
    ]);
  });

  test('aucune information essentielle n’est reléguée dans un détail replié (R15 P11)', () => {
    for (const ecran of definitionEP1.ecrans) {
      parcourir(ecran.blocs, (b) => {
        if (b.type === 'detailReplie') {
          parcourir(b.blocs, (interne) => {
            if (interne.type === 'paragraphe') expect(interne.essentiel).not.toBe(true);
          });
        }
      });
    }
  });

  test('aucun champ de texte libre : seuls des choix, des montants et un interrupteur sont saisis', () => {
    const typesSaisie = new Set<string>();
    for (const ecran of definitionEP1.ecrans) {
      parcourir(ecran.blocs, (b) => {
        if (['choixUnique', 'montant', 'interrupteur'].includes(b.type)) typesSaisie.add(b.type);
      });
    }
    expect([...typesSaisie].sort()).toEqual(['choixUnique', 'interrupteur', 'montant']);
  });

  test('l’action significative est la validation du plan à l’écran 4 ; aucune fiche M2 n’est validée', () => {
    expect(definitionEP1.actionSignificative).toEqual({ ecran: 4, evenement: 'plan_valide', pointEntree: 'EP1-PE-ECRAN4' });
    expect(definitionEP1.pointsEntree.every((p) => !p.ficheM2Validee)).toBe(true);
    const ecran4 = definitionEP1.ecrans[3];
    expect(ecran4.boutons.some((b) => b.action === 'validerPlan')).toBe(true);
    const autres = definitionEP1.ecrans.filter((e) => e.numero !== 4);
    expect(autres.every((e) => e.boutons.every((b) => b.action !== 'validerPlan'))).toBe(true);
  });

  test('les renvois de l’écran 13 sont absents (réserve EP1 R-4)', () => {
    const textes = JSON.stringify(definitionEP1.ecrans[12]);
    expect(textes).not.toContain('Comment fonctionnent un découvert');
    expect(textes).not.toContain('Constituer une réserve de sécurité');
  });

  test('l’état initial ne présélectionne aucun choix', () => {
    const e = ETAT_EP1_INITIAL;
    expect(e.K).toBeNull();
    expect(Object.values(e.cartes).every((x) => x === null)).toBe(true);
    expect(Object.values(e.novembreSaisie).every((x) => x === null)).toBe(true);
    expect(Object.values(e.novembreModes).every((x) => x === null)).toBe(true);
    expect(e.marc.base).toBeNull();
    expect(e.raisonMarc).toBeNull();
    expect(e.marc.choixNovembre).toBeNull();
    // Les deux seules valeurs par défaut décidées (EP1 §2).
    expect(Object.values(e.marc.durablesOctobre).every((x) => x === false)).toBe(true);
    expect(e.ui.reaffOctMode).toBe('non');
    expect(e.ui.reaffDecMode).toBe('non');
  });

  test.each(Object.entries(ETATS))('état « %s » : toutes les valeurs et conditions visibles sont définies', (_nom, etat) => {
    for (const rejeu of [false, true]) {
      const ctx = contexteEP1(etat, { pasMontant: PAS, rejeu });
      for (const ecran of definitionEP1.ecrans) {
        if (ecran.numero >= 11 && !ctx.conditions.marcPret) continue;
        if (ecran.numero === 12 && !ctx.conditions.novembrePret) continue;
        remplir(ecran.titre, ctx);
        verifierVisible(ecran.blocs, ctx);
        verifierBoutons(ecran, ctx);
      }
    }
  });

  test('toutes les conditions citées par la définition existent dans le contexte', () => {
    const ctx = contexteEP1(ETATS.marc1280, { pasMontant: PAS });
    const conditions = new Set<string>();
    const noter = (cond?: string) => cond && conditions.add(cond.replace(/^!/, ''));
    for (const ecran of definitionEP1.ecrans) {
      ecran.boutons.forEach((b) => {
        noter(b.condition);
        noter(b.actif);
        noter(b.confirmation?.condition);
        b.confirmation?.textes.forEach((t) => noter(t.condition));
      });
      parcourir(ecran.blocs, (b) => {
        noter(b.condition);
        if (b.type === 'liste') b.elements.forEach((e) => noter(e.condition));
        if (b.type === 'choixUnique') b.options.forEach((o) => noter(o.condition));
        if (b.type === 'tableau') b.lignes.forEach((l) => noter(l.condition));
      });
    }
    const inconnues = [...conditions].filter((c) => ctx.conditions[c] === undefined);
    expect(inconnues).toEqual([]);
  });

  test('les gabarits ne citent que des clés connues lorsque tout est calculable', () => {
    const ctx = contexteEP1(ETATS.tousMoyens, { pasMontant: PAS });
    const ctxMarc = contexteEP1(ETATS.marc1280, { pasMontant: PAS });
    const toutes = new Set([...Object.keys(ctx.valeurs), ...Object.keys(ctxMarc.valeurs)]);
    const cles = new Set<string>();
    const json = JSON.stringify(definitionEP1);
    clesDuGabarit(json).forEach((k) => cles.add(k));
    // Valeurs propres à certains états (manque, remontée) vérifiées dans les tests par état.
    const conditionnelles = new Set(['periodeInsuffisante', 'jourRemontee', 'causeRemontee']);
    expect([...cles].filter((k) => !toutes.has(k) && !conditionnelles.has(k))).toEqual([]);
  });
});

describe('Liaisons : valeurs affichées pour le plan esquissé', () => {
  test('écran 4 : total 1 659 €, marge −19 €, imprévus couverts à hauteur de 41 €', () => {
    const ctx = contexteEP1(ETATS.esquisseK0, { pasMontant: PAS });
    expect(ctx.valeurs.T).toBe('1 659 €');
    expect(ctx.valeurs.margeSignee).toBe('−19 €');
    expect(ctx.valeurs.IplusM).toBe('41 €');
    expect(ctx.conditions.couverturePartielle).toBe(true);
  });

  test('écran 6 : premier jour de manque « le 28 (−8 €) », solde final −67 €', () => {
    const ctx = contexteEP1(ETATS.esquisseK0, { pasMontant: PAS });
    expect(ctx.valeurs.premierManque).toBe('le 28 (−8 €)');
    expect(ctx.valeurs.solde).toBe('−67 €');
    expect(ctx.valeurs.frise20).toBe('202 €');
  });

  test('un manque dans le bloc de la première quinzaine s’affiche « avant le 15 »', () => {
    const ctx = contexteEP1(ETATS.manqueAvant15, { pasMontant: PAS });
    expect(ctx.valeurs.premierManque.startsWith('avant le 15')).toBe(true);
    expect(ctx.valeurs.aPartirDu).toBe('avant le 15');
  });
});
