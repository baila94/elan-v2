import { ScrollView, StyleSheet, View } from 'react-native';
import { MODE_INTERNE } from '../../configuration';
import { Bandeau, EtatVide } from '../../ui/composants';
import { espace, useCouleurs } from '../../ui/theme';

export default function Atelier() {
  const c = useCouleurs();
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      {MODE_INTERNE ? <Bandeau texte="Version interne de développement" /> : null}
      <ScrollView contentContainerStyle={styles.contenu}>
        <EtatVide titre="Atelier" texte="Les outils utilisables seuls et tes dossiers (personnel, professionnel, entreprise) seront disponibles ici. Aucun dossier n’existe dans cette version interne." />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l } });
