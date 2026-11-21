import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Bandeau, Bouton, Carte, Paragraphe, TAILLE_MAX_BARRES, Titre } from '../ui/composants';
import { espace, useCouleurs } from '../ui/theme';
import paquet from './paquet-demo.json';

// Module d'aide immédiate (AI1) : isolé du reste de l'application.
// Il ne lit aucun état extérieur, n'écrit rien, n'émet aucun événement et ne fait aucun appel réseau.
// Au lot 1, il affiche seulement un paquet de démonstration interne, non vérifié.

export interface ContenuAide {
  id: string;
  titre: string;
  paragraphes: string[];
}

interface PaquetAide {
  demo: boolean;
  version: string;
  avertissement: string;
  contenus: ContenuAide[];
}

export const paquetAide: PaquetAide = paquet as PaquetAide;

/** Bouton d'aide immédiate, présent sur tous les écrans. */
export function BoutonAide({ onPress }: { onPress: () => void }) {
  const c = useCouleurs();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Aide immédiate"
      accessibilityHint="Ouvre l’aide immédiate"
      onPress={onPress}
      style={[styles.bouton, { backgroundColor: c.aideFond }]}
      hitSlop={8}
    >
      <Text maxFontSizeMultiplier={TAILLE_MAX_BARRES} style={[styles.texteBouton, { color: c.aideTexte }]}>
        Aide
      </Text>
    </Pressable>
  );
}

function BandeauDemo() {
  return paquetAide.demo ? <Bandeau texte={paquetAide.avertissement} variante="demo" /> : null;
}

/** Sortie rapide : ferme l'aide immédiatement (comportement provisoire, AI1 §5). */
export function SortieRapide({ onSortir }: { onSortir: () => void }) {
  return <Bouton libelle="Sortie rapide" onPress={onSortir} />;
}

export function AccueilAide({ onOuvrir, onSortir }: { onOuvrir: (id: string) => void; onSortir: () => void }) {
  const c = useCouleurs();
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      <BandeauDemo />
      <ScrollView contentContainerStyle={styles.contenu}>
        <SortieRapide onSortir={onSortir} />
        <Titre>Aide immédiate</Titre>
        {paquetAide.contenus.map((contenu) => (
          <Bouton key={contenu.id} libelle={contenu.titre} onPress={() => onOuvrir(contenu.id)} secondaire />
        ))}
        {/* Aucune date « Vérifié le … » : ce contenu de démonstration n'a fait l'objet d'aucune vérification humaine (AI1 §6). */}
        <Paragraphe style="note">Contenu de démonstration : non vérifié.</Paragraphe>
      </ScrollView>
    </View>
  );
}

export function ContenuAideEcran({ id, onSortir }: { id: string; onSortir: () => void }) {
  const c = useCouleurs();
  const contenu = paquetAide.contenus.find((x) => x.id === id);
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      <BandeauDemo />
      <ScrollView contentContainerStyle={styles.contenu}>
        <SortieRapide onSortir={onSortir} />
        {contenu ? (
          <Carte titre={contenu.titre}>
            {contenu.paragraphes.map((p, i) => (
              <Paragraphe key={i}>{p}</Paragraphe>
            ))}
          </Carte>
        ) : (
          <Paragraphe>Contenu introuvable.</Paragraphe>
        )}
        <Paragraphe style="note">Contenu de démonstration : non vérifié.</Paragraphe>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bouton: { paddingHorizontal: espace.m, paddingVertical: espace.s, borderRadius: 18, minHeight: 36, justifyContent: 'center' },
  texteBouton: { fontSize: 15, fontWeight: '700' },
  racine: { flex: 1 },
  contenu: { padding: espace.l, gap: espace.m },
});
