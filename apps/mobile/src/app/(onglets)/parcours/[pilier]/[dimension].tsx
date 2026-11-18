import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { element, enfants } from '../../../../catalogue/chargement';
import { Bouton, Carte, EtatVide, Paragraphe } from '../../../../ui/composants';
import { espace, useCouleurs } from '../../../../ui/theme';

export default function Dimension() {
  const { dimension } = useLocalSearchParams<{ dimension: string }>();
  const router = useRouter();
  const c = useCouleurs();
  const d = element(dimension);
  const experiences = d ? enfants(d.id, 'experience') : [];
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      <Stack.Screen options={{ title: d?.titre ?? 'Dimension' }} />
      <ScrollView contentContainerStyle={styles.contenu}>
        {experiences.length === 0 ? (
          <EtatVide titre="Contenus à venir" texte="Aucun contenu n’est encore disponible dans cette dimension." />
        ) : (
          experiences.map((e) => (
            <Carte key={e.id} titre={e.titre}>
              <Paragraphe style="note">Expérience · situation fictive</Paragraphe>
              <Bouton libelle="Ouvrir l’expérience" onPress={() => router.push(`/experience/${e.id}`)} />
            </Carte>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l, gap: espace.s } });
