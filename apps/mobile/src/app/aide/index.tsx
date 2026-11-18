import { useRouter } from 'expo-router';
import { AccueilAide } from '../../aide-immediate';

export default function Aide() {
  const router = useRouter();
  return (
    <AccueilAide
      onOuvrir={(id) => router.push(`/aide/${id}`)}
      onSortir={() => router.dismissTo('/')}
    />
  );
}
