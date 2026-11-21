import { ComponentRef, ReactNode, useMemo, useReducer, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Bouton, Confirmation, TAILLE_MAX_BARRES, Titre } from '../ui/composants';
import { espace, useCouleurs } from '../ui/theme';
import { remplir, verifie } from './gabarits';
import { PortProgression } from './progression-port';
import { RenduBlocs } from './RenduBloc';
import { Action, BoutonPassage, Contexte, DefinitionExperience } from './types';

// Lecteur générique : enchaîne les écrans d'une définition, sans connaître leur contenu.
// L'état de session vit dans ce composant : il est détruit à sa sortie (aucune persistance).

export interface AdaptateurExperience<E> {
  etatInitial: E;
  reducteur: (etat: E, action: { type: 'definir'; chemin: string; valeur: unknown } | { type: string }) => E;
  contexte: (etat: E, options: { pasMontant: number; rejeu?: boolean }) => Contexte;
  lire: (etat: E, chemin: string) => unknown;
}

interface EtatLecteur {
  ecran: number; // index dans la définition
  rejeu: boolean;
}

export function LecteurExperience<E>({
  definition,
  adaptateur,
  progression,
  onQuitter,
  enTete,
}: {
  definition: DefinitionExperience;
  adaptateur: AdaptateurExperience<E>;
  progression: PortProgression;
  onQuitter: () => void;
  enTete?: ReactNode;
}) {
  const c = useCouleurs();
  const [etat, dispatch] = useReducer(adaptateur.reducteur, adaptateur.etatInitial);
  const [lecteur, setLecteur] = useState<EtatLecteur>({ ecran: 0, rejeu: false });
  const [confirmation, setConfirmation] = useState<BoutonPassage | null>(null);
  const [quitter, setQuitter] = useState(false);
  const actionSignificativeEmise = useRef(false);
  const defilement = useRef<ComponentRef<typeof ScrollView>>(null);

  const ecran = definition.ecrans[lecteur.ecran];
  const contexte = useMemo(
    () => adaptateur.contexte(etat, { pasMontant: definition.reglages.pasMontant, rejeu: lecteur.rejeu }),
    [adaptateur, etat, definition.reglages.pasMontant, lecteur.rejeu],
  );

  const cheminEffectif = (chemin: string) => (lecteur.rejeu && chemin.startsWith('moyens.') ? `rejeu.${chemin.slice(7)}` : chemin);
  const aller = (index: number, rejeu = false) => {
    setLecteur({ ecran: index, rejeu });
    defilement.current?.scrollTo({ y: 0, animated: false });
  };
  const indexDe = (numero: number) => definition.ecrans.findIndex((e) => e.numero === numero);

  function executer(action: Action) {
    switch (action) {
      case 'suivant':
        aller(lecteur.ecran + 1);
        break;
      case 'precedent':
        aller(Math.max(0, lecteur.ecran - 1));
        break;
      case 'validerPlan': {
        // Action significative : transmise au port, qui ne conserve rien au lot 1.
        if (!actionSignificativeEmise.current) {
          actionSignificativeEmise.current = true;
          progression.actionSignificative({
            experienceId: definition.id,
            version: definition.version,
            pointEntree: definition.actionSignificative.pointEntree,
          });
        }
        aller(lecteur.ecran + 1);
        break;
      }
      case 'payerAinsi':
        aller(lecteur.ecran + 1);
        break;
      case 'neRienChanger':
        dispatch({ type: 'aucunMoyen' });
        aller(lecteur.ecran + 1);
        break;
      case 'voirCartes':
        dispatch({ type: 'definir', chemin: 'ui.cartesVues', valeur: true });
        break;
      case 'rejouer':
        dispatch({ type: 'reinitialiserRejeu' });
        aller(indexDe(5), true);
        break;
      case 'finRejeu':
        dispatch({ type: 'reinitialiserRejeu' });
        aller(indexDe(7));
        break;
      case 'allerEcran2':
        aller(indexDe(2));
        break;
      case 'reinitialiserDecembre':
        dispatch({ type: 'reinitialiserDecembre' });
        break;
      case 'terminer':
        onQuitter();
        break;
    }
  }

  function presser(bouton: BoutonPassage) {
    if (bouton.confirmation && verifie(bouton.confirmation.condition, contexte)) {
      setConfirmation(bouton);
      return;
    }
    executer(bouton.action);
  }

  // En rejeu (« Et si… ? »), l'écran 5 est rejoué : rien n'est conservé ni redéclenché.
  const boutons: BoutonPassage[] = lecteur.rejeu
    ? [{ libelle: 'Revenir à ce que montrent ses choix', action: 'finRejeu' }]
    : ecran.boutons.filter((b) => verifie(b.condition, contexte));
  const retourPossible = lecteur.ecran > 0 && !lecteur.rejeu;

  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      <View style={[styles.barre, { borderBottomColor: c.bordure, backgroundColor: c.surface }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Quitter l’expérience"
          onPress={() => setQuitter(true)}
          style={styles.boutonBarre}
        >
          <Text maxFontSizeMultiplier={TAILLE_MAX_BARRES} style={{ color: c.accent, fontSize: 16 }}>
            Quitter
          </Text>
        </Pressable>
        <Text
          maxFontSizeMultiplier={TAILLE_MAX_BARRES}
          style={[styles.position, { color: c.texteSecondaire }]} accessibilityLabel={`Écran ${ecran.numero} sur ${definition.ecrans.length}`}>
          {lecteur.rejeu ? 'Et si… ?' : `${ecran.numero} / ${definition.ecrans.length}`}
        </Text>
        <View style={styles.boutonBarre}>{enTete}</View>
      </View>
      <ScrollView ref={defilement} contentContainerStyle={styles.contenu} testID="defilement-lecteur">
        <Titre>{remplir(ecran.titre, contexte)}</Titre>
        <RenduBlocs
          blocs={ecran.blocs}
          contexte={contexte}
          lireValeur={(chemin) => adaptateur.lire(etat, cheminEffectif(chemin))}
          definir={(chemin, valeur) => dispatch({ type: 'definir', chemin: cheminEffectif(chemin), valeur })}
          agir={executer}
        />
        <View style={styles.boutons}>
          {boutons.map((b) => (
            <Bouton
              key={b.libelle}
              libelle={remplir(b.libelle, contexte)}
              secondaire={b.secondaire}
              desactive={b.actif ? !verifie(b.actif, contexte) : false}
              onPress={() => presser(b)}
            />
          ))}
          {retourPossible ? <Bouton libelle="Écran précédent" onPress={() => executer('precedent')} secondaire /> : null}
        </View>
      </ScrollView>
      <Confirmation
        visible={confirmation !== null}
        texte={
          confirmation?.confirmation
            ? confirmation.confirmation.textes
                .filter((x) => verifie(x.condition, contexte))
                .map((x) => remplir(x.texte, contexte))
                .join('\n\n')
            : ''
        }
        confirmer={confirmation?.confirmation?.confirmer ?? ''}
        annuler={confirmation?.confirmation?.annuler ?? ''}
        onConfirmer={() => {
          const action = confirmation!.action;
          setConfirmation(null);
          executer(action);
        }}
        onAnnuler={() => setConfirmation(null)}
      />
      <Confirmation
        visible={quitter}
        texte="Quitter l’expérience ? Rien de ce que tu as fait ici n’est conservé."
        confirmer="Quitter"
        annuler="Continuer l’expérience"
        onConfirmer={() => {
          setQuitter(false);
          onQuitter();
        }}
        onAnnuler={() => setQuitter(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  racine: { flex: 1 },
  barre: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: espace.l,
    paddingVertical: espace.s,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boutonBarre: { minWidth: 88, minHeight: 44, justifyContent: 'center' },
  position: { fontSize: 14 },
  contenu: { padding: espace.l, paddingBottom: espace.xl * 2, gap: espace.s },
  boutons: { marginTop: espace.l, gap: espace.s },
});
