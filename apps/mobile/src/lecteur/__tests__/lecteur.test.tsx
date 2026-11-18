import { fireEvent, render, screen } from '@testing-library/react-native';
import { adaptateurEP1, definitionEP1 } from '../../experiences/ep1';
import { LecteurExperience } from '../LecteurExperience';
import { PortProgression } from '../progression-port';

async function monter(progression: PortProgression = { actionSignificative: jest.fn() }, onQuitter = jest.fn()) {
  await render(
    <LecteurExperience definition={definitionEP1} adaptateur={adaptateurEP1} progression={progression} onQuitter={onQuitter} />,
  );
  return { progression, onQuitter };
}

const appuyer = async (texte: string | RegExp) => fireEvent.press(screen.getByRole('button', { name: texte }));
const choisir = async (texte: string | RegExp) => fireEvent.press(screen.getAllByRole('radio', { name: texte })[0]);

async function jusquAEcran4() {
  await appuyer('Commencer');
  await choisir('Ne pas compter les cours : son plan part de 1 640 €.');
  await appuyer('Continuer');
  for (const r of screen.getAllByRole('radio', { name: 'Essentielle' })) await fireEvent.press(r);
  await appuyer('Voir ce que ça donne');
  await appuyer('Continuer');
}

describe('Lecteur d’expérience : EP1', () => {
  test('écran 2 : aucun choix présélectionné et « Continuer » inactif tant que rien n’est choisi', async () => {
    await monter();
    await appuyer('Commencer');
    expect(screen.getByText('Ce qui va entrer')).toBeTruthy();
    screen.getAllByRole('radio').forEach((r) => expect(r.props.accessibilityState.checked).toBe(false));
    expect(screen.getByRole('button', { name: 'Continuer' }).props.accessibilityState.disabled).toBe(true);
    await choisir('Compter la moyenne, 92,50 € : son plan part de 1 732,50 €.');
    expect(screen.getByText(/C’est noté : son plan part de 1 732,50 €/)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Continuer' }).props.accessibilityState.disabled).toBe(false);
  });

  test('écran 3 : « Voir ce que ça donne » exige les quatre choix, aucune bonne réponse n’est exigée', async () => {
    await monter();
    await appuyer('Commencer');
    await choisir(/Ne pas compter les cours/);
    await appuyer('Continuer');
    expect(screen.getByRole('button', { name: 'Voir ce que ça donne' }).props.accessibilityState.disabled).toBe(true);
    for (const r of screen.getAllByRole('radio', { name: 'Peut passer après' })) await fireEvent.press(r);
    await appuyer('Voir ce que ça donne');
    expect(screen.getByText(/Oui : fixe, mais pas indispensable/)).toBeTruthy();
    expect(screen.getByText(/c’est une dépense variable essentielle/)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Continuer' })).toBeTruthy();
  });

  test('écran 4 : marge −19 €, confirmation si la marge est négative, puis un seul appel au port de progression', async () => {
    const { progression } = await monter();
    await jusquAEcran4();
    expect(screen.getByText('Le plan d’octobre')).toBeTruthy();
    expect(screen.getAllByText('−19 €').length).toBeGreaterThan(0);
    expect(screen.getByText(/ne sont couverts qu’à hauteur de 41 €/)).toBeTruthy();
    await appuyer('Valider ce plan');
    expect(screen.getByText(/La marge de ce plan est de −19 €/)).toBeTruthy();
    await appuyer('Revenir au plan');
    expect(progression.actionSignificative).not.toHaveBeenCalled();
    await appuyer('Valider ce plan');
    await appuyer('Garder ce plan');
    expect(progression.actionSignificative).toHaveBeenCalledTimes(1);
    expect(progression.actionSignificative).toHaveBeenCalledWith({
      experienceId: 'EP1',
      version: definitionEP1.version,
      pointEntree: 'EP1-PE-ECRAN4',
    });
    expect(screen.getByText('Le 15 octobre')).toBeTruthy();
    expect(screen.getByText(/Argent libre aujourd’hui : 23 €/)).toBeTruthy();
  });

  test('écran 4 : retour à l’écran 2 pour modifier les cours, et mise à jour du plan', async () => {
    await monter();
    await jusquAEcran4();
    await appuyer('Modifier les cours comptés');
    await choisir(/Compter son meilleur mois/);
    await appuyer('Continuer');
    await appuyer('Continuer');
    expect(screen.getAllByText('1 800 €').length).toBeGreaterThan(0);
  });

  test('écran 5 : moyens non présélectionnés, lignes grisées, confirmation si le manque n’est pas couvert', async () => {
    await monter();
    await jusquAEcran4();
    await appuyer('Valider ce plan');
    await appuyer('Garder ce plan');
    expect(screen.getByText('Trouvé : 0 € sur 107 €.')).toBeTruthy();
    expect(screen.getByText('Ne peut être arrêté qu’en novembre.')).toBeTruthy();
    expect(screen.getByText('Déjà prélevée le 1er.')).toBeTruthy();
    await appuyer('Payer la réparation ainsi');
    expect(screen.getByText(/Il manque encore 107 €. Même avec les 40 € de cours du 20/)).toBeTruthy();
    await appuyer('Continuer ainsi');
    expect(screen.getByText('Fin octobre')).toBeTruthy();
    expect(screen.getByText('Sur le compte fin octobre : −67 €')).toBeTruthy();
    expect(screen.getByText('Premier jour où le solde ne suffit pas : le 28 (−8 €)')).toBeTruthy();
    // Le message sur le solde insuffisant n'est pas replié.
    expect(screen.getByText(/Selon les conditions de sa banque, un paiement pourrait être refusé/)).toBeTruthy();
  });

  test('écran 7 : « Et si… ? » rejoue l’écran 5 sans rien conserver ; l’écran 8 part du mois réel', async () => {
    await monter();
    await jusquAEcran4();
    await appuyer('Valider ce plan');
    await appuyer('Garder ce plan');
    await appuyer('Ne rien changer');
    await appuyer('Continuer');
    expect(screen.getByText('Ce que montrent ses choix')).toBeTruthy();
    expect(screen.getByText(/Les 40 € de cours sont arrivés le 20 sans avoir été prévus/)).toBeTruthy();
    await appuyer('Et si… ?');
    expect(screen.getByText('Le 15 octobre')).toBeTruthy();
    await fireEvent(screen.getByRole('adjustable', { name: 'Sortir moins d’ici la fin du mois' }), 'accessibilityAction', {
      nativeEvent: { actionName: 'increment' },
    });
    expect(screen.getByText('Trouvé : 10 € sur 107 €.')).toBeTruthy();
    await appuyer('Revenir à ce que montrent ses choix');
    await appuyer('Continuer');
    expect(screen.getByText('Préparer novembre')).toBeTruthy();
    expect(screen.getAllByText('Sur le compte : −67 €').length).toBe(1);
  });

  test('écran 8 : choix des cours requis, sans présélection, avant de valider', async () => {
    await monter();
    await jusquAEcran4();
    await appuyer('Valider ce plan');
    await appuyer('Garder ce plan');
    await appuyer('Ne rien changer');
    await appuyer('Continuer');
    await appuyer('Continuer');
    expect(screen.getByRole('button', { name: 'Valider le plan de novembre' }).props.accessibilityState.disabled).toBe(true);
    await choisir('0 €');
    expect(screen.getByText('Avec ce plan, la marge de novembre serait de −86 €.')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Valider le plan de novembre' }).props.accessibilityState.disabled).toBe(false);
  });

  test.each([
    ['1 280 €', '1 280 € : le plus bas de ses quatre derniers revenus', 'Un peu de tout (300 € au coussin, 200 € au projet, 120 € de plaisir)'],
    ['1 900 €', '1 900 € : le plus haut de ses quatre derniers revenus', null],
  ])('parcours complet des 13 écrans avec la base %s, jusqu’à « Terminer »', async (_base, libelleBase, choixNovembre) => {
    const { onQuitter } = await monter();
    await jusquAEcran4();
    await appuyer('Valider ce plan');
    await appuyer('Garder ce plan');
    await appuyer('Ne rien changer');
    await appuyer('Continuer');
    await appuyer('Continuer');
    await choisir('92,50 €');
    await appuyer('Valider le plan de novembre');
    expect(screen.getByText('Ce qu’Amadou a appris')).toBeTruthy();
    await appuyer('Continuer');
    expect(screen.getByText('Marc, des revenus qui changent')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Voir le mois suivant' }).props.accessibilityState.disabled).toBe(true);
    await choisir(libelleBase);
    await choisir('C’est ce qu’il gagne en moyenne');
    expect(screen.getByText(/Fin octobre : .* sur son compte\./)).toBeTruthy();
    await appuyer('Voir le mois suivant');
    expect(screen.getByText('Novembre : un bon mois')).toBeTruthy();
    if (choixNovembre) {
      expect(screen.getByRole('button', { name: 'Voir le mois suivant' }).props.accessibilityState.disabled).toBe(true);
      await choisir(choixNovembre);
    } else {
      expect(screen.queryAllByRole('radio')).toHaveLength(0);
    }
    expect(screen.getByText(/Fin novembre : /)).toBeTruthy();
    await appuyer('Voir le mois suivant');
    expect(screen.getByText('Décembre : un mois difficile')).toBeTruthy();
    expect(screen.getByText('Abonnement non réductible ce mois-ci.')).toBeTruthy();
    await appuyer('Continuer');
    expect(screen.getByText('Ce que tu emportes')).toBeTruthy();
    expect(screen.queryByText(/Comment fonctionnent un découvert/)).toBeNull();
    await appuyer('Terminer');
    expect(onQuitter).toHaveBeenCalledTimes(1);
  });

  test('écran 10 : base 1 900 € et répartition en dépenses en plus, leviers d’octobre et portée repliée', async () => {
    await monter();
    await jusquAEcran4();
    await appuyer('Valider ce plan');
    await appuyer('Garder ce plan');
    await appuyer('Ne rien changer');
    await appuyer('Continuer');
    await appuyer('Continuer');
    await choisir('0 €');
    await appuyer('Valider le plan de novembre');
    await appuyer('Continuer');
    await choisir('1 900 € : le plus haut de ses quatre derniers revenus');
    await choisir('Il compte sur un bon mois');
    const augmenter = async (nom: string, fois: number) => {
      for (let i = 0; i < fois; i += 1) {
        await fireEvent(screen.getByRole('adjustable', { name: nom }), 'accessibilityAction', { nativeEvent: { actionName: 'increment' } });
      }
    };
    await augmenter('Dépenses en plus', 50);
    expect(screen.getByText(/il lui manquerait 166 € ce mois-ci/)).toBeTruthy();
    expect(screen.getByText('Il manque encore 166 €.')).toBeTruthy();
    await augmenter('Renoncer aux dépenses en plus', 20);
    expect(screen.getByText('34 € de plus que nécessaire : ils restent sur son compte.')).toBeTruthy();
    expect(screen.getByText('Fin octobre : 34 € sur son compte.')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Ce changement vaut-il seulement pour ce mois-ci, ou pour son plan habituel ?' })).toBeTruthy();
  });

  test('quitter détruit la session et ne transmet aucune progression supplémentaire', async () => {
    const { onQuitter, progression } = await monter();
    await appuyer('Quitter l’expérience');
    await appuyer('Quitter');
    expect(onQuitter).toHaveBeenCalledTimes(1);
    expect(progression.actionSignificative).not.toHaveBeenCalled();
  });
});
