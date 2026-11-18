import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { element, enfants } from '../../../../catalogue/chargement';
import { Bouton, Paragraphe } from '../../../../ui/composants';
import { espace, useCouleurs } from '../../../../ui/theme';

export default function Pilier() {
  const { pilier } = useLocalSearchParams<{ pilier: string }>();
  const router = useRouter();
  const c = useCouleurs();
  const p = element(pilier);
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      <Stack.Screen options={{ title: p?.titre ?? 'Pilier' }} />
      <ScrollView contentContainerStyle={styles.contenu}>
        {p ? (
          enfants(p.id, 'dimension').map((d) => (
            <Bouton key={d.id} libelle={d.titre} secondaire onPress={() => router.push(`/parcours/${p.id}/${d.id}`)} />
          ))
        ) : (
          <Paragraphe>Pilier introuvable.</Paragraphe>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l, gap: espace.s } });
