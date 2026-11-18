import { Stack } from 'expo-router';
import { usePreventScreenCapture } from 'expo-screen-capture';

// Captures d'écran bloquées pendant l'aide immédiate, lorsque le système le permet (M2 §8 ; AI1 §4).
export default function AideLayout() {
  usePreventScreenCapture();
  return <Stack screenOptions={{ headerShown: true, title: 'Aide immédiate', headerBackTitle: 'Retour' }} />;
}
