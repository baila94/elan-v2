import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MODE_INTERNE } from '../../configuration';
import { Bandeau, Bouton, Carte, Paragraphe } from '../../ui/composants';
import { espace, useCouleurs } from '../../ui/theme';

export default function Aujourdhui() {
  const router = useRouter();
  const c = useCouleurs();
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      {MODE_INTERNE ? <Bandeau texte="Version interne de développement — aucun compte, aucune donnée conservée" /> : null}
      <ScrollView contentContainerStyle={styles.contenu}>
        <Carte titre="Construire son premier budget">
          <Paragraphe>Aide Amadou, puis Marc, à préparer leur mois et à réagir quand il ne se passe pas comme prévu.</Paragraphe>
          <Paragraphe style="note">Gestion de l’argent · Situation fictive</Paragraphe>
          <Bouton libelle="Ouvrir l’expérience" onPress={() => router.push('/experience/EP1')} />
        </Carte>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l, gap: espace.m } });
