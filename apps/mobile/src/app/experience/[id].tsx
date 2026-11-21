import { useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BoutonAide } from '../../aide-immediate';
import { element } from '../../catalogue/chargement';
import { adaptateurEP1, definitionEP1 } from '../../experiences/ep1';
import { LecteurExperience } from '../../lecteur/LecteurExperience';
import { progressionInactive } from '../../lecteur/progression-port';
import { Paragraphe } from '../../ui/composants';
import { useCouleurs } from '../../ui/theme';

export default function Experience() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const c = useCouleurs();
  const entree = element(id);
  const quitter = () => (router.canGoBack() ? router.back() : router.replace('/'));
  // Marges explicites : dans cet écran plein écran, SafeAreaView ne recevait pas les marges sur iPhone,
  // et la barre (Quitter, position, Aide) passait sous l'heure et l'encoche.
  const marges = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.surface,
        paddingTop: marges.top,
        paddingBottom: marges.bottom,
        paddingLeft: marges.left,
        paddingRight: marges.right,
      }}
    >
      {entree && entree.id === 'EP1' && entree.version === definitionEP1.version ? (
        <LecteurExperience
          definition={definitionEP1}
          adaptateur={adaptateurEP1}
          progression={progressionInactive}
          onQuitter={quitter}
          enTete={<BoutonAide onPress={() => router.push('/aide')} />}
        />
      ) : (
        <Paragraphe>Expérience indisponible.</Paragraphe>
      )}
    </View>
  );
}
