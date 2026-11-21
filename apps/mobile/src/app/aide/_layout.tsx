import { Stack, useRouter } from 'expo-router';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { Pressable, Text } from 'react-native';
import { TAILLE_MAX_BARRES } from '../../ui/composants';
import { useCouleurs } from '../../ui/theme';

// Captures d'écran bloquées pendant l'aide immédiate, lorsque le système le permet (M2 §8 ; AI1 §4).
export default function AideLayout() {
  usePreventScreenCapture();
  const router = useRouter();
  const c = useCouleurs();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: 'Aide immédiate',
        headerBackTitle: 'Retour',
        // En-tête opaque et aux couleurs du thème : sans cela, il se superposait au bandeau de démonstration.
        headerTransparent: false,
        headerStyle: { backgroundColor: c.surface },
        headerTintColor: c.texte,
        contentStyle: { backgroundColor: c.fond },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          // Fermeture visible, équivalente au glissement vers le bas : revient là où l'aide a été ouverte.
          headerLeft: () => (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Fermer l’aide"
              onPress={() => router.back()}
              hitSlop={8}
            >
              <Text maxFontSizeMultiplier={TAILLE_MAX_BARRES} style={{ color: c.accent, fontSize: 17 }}>
                Fermer
              </Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
