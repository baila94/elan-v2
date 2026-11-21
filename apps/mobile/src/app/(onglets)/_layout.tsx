import { Tabs, useRouter } from 'expo-router';
import { Text } from 'react-native';
import { BoutonAide } from '../../aide-immediate';
import { TAILLE_MAX_BARRES } from '../../ui/composants';
import { useCouleurs } from '../../ui/theme';

const ONGLETS = [
  { name: 'index', titre: 'Aujourd’hui', symbole: '◎' },
  { name: 'parcours', titre: 'Parcours', symbole: '➚' },
  { name: 'bibliotheque', titre: 'Bibliothèque', symbole: '▤' },
  { name: 'atelier', titre: 'Atelier', symbole: '✎' },
  { name: 'profil', titre: 'Profil', symbole: '◉' },
] as const;

export default function OngletsLayout() {
  const router = useRouter();
  const c = useCouleurs();
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <BoutonAide onPress={() => router.push('/aide')} />,
        headerRightContainerStyle: { paddingRight: 16 },
        tabBarActiveTintColor: c.accent,
        // Sans cette couleur, les onglets inactifs prenaient le gris du thème clair et devenaient invisibles en mode sombre.
        tabBarInactiveTintColor: c.texteSecondaire,
        headerStyle: { backgroundColor: c.surface },
        headerTintColor: c.texte,
        tabBarStyle: { backgroundColor: c.surface },
        // Titre de l'en-tête plafonné : à la plus grande taille de texte, il était coupé verticalement.
        headerTitle: ({ children }) => (
          <Text
            accessibilityRole="header"
            maxFontSizeMultiplier={TAILLE_MAX_BARRES}
            style={{ color: c.texte, fontSize: 17, fontWeight: '600' }}
          >
            {children}
          </Text>
        ),
      }}
    >
      {ONGLETS.map((o) => (
        <Tabs.Screen
          key={o.name}
          name={o.name}
          options={{
            title: o.titre,
            headerShown: o.name !== 'parcours',
            tabBarAccessibilityLabel: o.titre,
            tabBarIcon: ({ color }) => (
              <Text
                accessibilityElementsHidden
                importantForAccessibility="no"
                maxFontSizeMultiplier={TAILLE_MAX_BARRES}
                style={{ color, fontSize: 18 }}
              >
                {o.symbole}
              </Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
