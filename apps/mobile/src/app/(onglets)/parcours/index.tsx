import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { enfants } from '../../../catalogue/chargement';
import { MODE_INTERNE } from '../../../configuration';
import { Bandeau, Bouton, Paragraphe } from '../../../ui/composants';
import { espace, useCouleurs } from '../../../ui/theme';

export default function Piliers() {
  const router = useRouter();
  const c = useCouleurs();
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      {MODE_INTERNE ? <Bandeau texte="Version interne de développement" /> : null}
      <ScrollView contentContainerStyle={styles.contenu}>
        <Paragraphe style="note">Explore librement les cinq piliers, dans l’ordre que tu veux.</Paragraphe>
        {enfants(undefined, 'pilier').map((p) => (
          <Bouton key={p.id} libelle={p.titre} secondaire onPress={() => router.push(`/parcours/${p.id}`)} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l, gap: espace.s } });
