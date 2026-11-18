import { ScrollView, StyleSheet, View } from 'react-native';
import { MODE_INTERNE } from '../../configuration';
import { Bandeau, EtatVide } from '../../ui/composants';
import { espace, useCouleurs } from '../../ui/theme';

export default function Profil() {
  const c = useCouleurs();
  return (
    <View style={[styles.racine, { backgroundColor: c.fond }]}>
      {MODE_INTERNE ? <Bandeau texte="Version interne de développement" /> : null}
      <ScrollView contentContainerStyle={styles.contenu}>
        <EtatVide titre="Profil" texte="Ton compte, tes réglages et la vue d’ensemble de ta progression seront disponibles ici. Cette version interne n’a pas de compte et ne conserve aucune progression." />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ racine: { flex: 1 }, contenu: { padding: espace.l } });
