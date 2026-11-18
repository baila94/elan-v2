import Constants from 'expo-constants';

/**
 * Version interne de développement (lot 1) : aucun compte n'existe encore,
 * la règle « compte requis » (C1 §8) n'est donc pas appliquée. Ce mode est
 * toujours signalé par un bandeau et ne doit jamais être diffusé.
 */
export const MODE_INTERNE: boolean = Constants.expoConfig?.extra?.modeInterne !== false;
