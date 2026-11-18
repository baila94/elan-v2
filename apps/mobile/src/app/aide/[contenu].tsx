import { useLocalSearchParams, useRouter } from 'expo-router';
import { ContenuAideEcran } from '../../aide-immediate';

export default function ContenuAide() {
  const { contenu } = useLocalSearchParams<{ contenu: string }>();
  const router = useRouter();
  return <ContenuAideEcran id={contenu} onSortir={() => router.dismissTo('/')} />;
}
