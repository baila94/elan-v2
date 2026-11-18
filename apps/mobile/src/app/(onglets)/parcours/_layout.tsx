import { Stack, useRouter } from 'expo-router';
import { BoutonAide } from '../../../aide-immediate';
import { useCouleurs } from '../../../ui/theme';

export default function ParcoursLayout() {
  const router = useRouter();
  const c = useCouleurs();
  return (
    <Stack
      screenOptions={{
        headerRight: () => <BoutonAide onPress={() => router.push('/aide')} />,
        headerStyle: { backgroundColor: c.surface },
        headerTintColor: c.texte,
        headerBackTitle: 'Retour',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Parcours' }} />
      <Stack.Screen name="[pilier]/index" options={{ title: 'Pilier' }} />
      <Stack.Screen name="[pilier]/[dimension]" options={{ title: 'Dimension' }} />
    </Stack>
  );
}
