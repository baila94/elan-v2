import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RacineLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(onglets)" />
        <Stack.Screen name="experience/[id]" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
        <Stack.Screen name="aide" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
