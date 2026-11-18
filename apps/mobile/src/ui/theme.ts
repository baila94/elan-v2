import { useColorScheme } from 'react-native';

export interface Couleurs {
  fond: string;
  surface: string;
  texte: string;
  texteSecondaire: string;
  bordure: string;
  accent: string;
  texteSurAccent: string;
  inactif: string;
  avertissementFond: string;
  avertissementTexte: string;
  aideFond: string;
  aideTexte: string;
}

const clair: Couleurs = {
  fond: '#F7F7F5',
  surface: '#FFFFFF',
  texte: '#1C1C1E',
  texteSecondaire: '#5A5A60',
  bordure: '#D4D4D8',
  accent: '#1F5FA8',
  texteSurAccent: '#FFFFFF',
  inactif: '#9A9AA0',
  avertissementFond: '#FFF4D6',
  avertissementTexte: '#5C4300',
  aideFond: '#B42318',
  aideTexte: '#FFFFFF',
};

const sombre: Couleurs = {
  fond: '#121214',
  surface: '#1E1E21',
  texte: '#F2F2F5',
  texteSecondaire: '#B4B4BB',
  bordure: '#3A3A40',
  accent: '#7FB0EB',
  texteSurAccent: '#0B1A2B',
  inactif: '#6E6E75',
  avertissementFond: '#3D3000',
  avertissementTexte: '#FFE7A3',
  aideFond: '#F97066',
  aideTexte: '#1C0402',
};

export function useCouleurs(): Couleurs {
  return useColorScheme() === 'dark' ? sombre : clair;
}

export const espace = { xs: 4, s: 8, m: 12, l: 16, xl: 24 };
