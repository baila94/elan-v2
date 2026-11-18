import { ScrollView, StyleSheet, View } from 'react-native';
import { MODE_INTERNE } from '../../configuration';
import { Bandeau, EtatVide } from '../../ui/composants';
import { espace, useCouleurs } from '../../ui/theme';

export default function Bibliotheque() {
  const c = useCouleurs();
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      {MODE_INTERNE ? <Bandeau texte="Version interne de développement" /> : null}
      <ScrollView contentContainerStyle={styles.contenu}>
        <EtatVide titre="Bibliothèque" texte="Les contenus publiés et la recherche seront disponibles ici." />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l } });
