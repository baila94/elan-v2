// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

// Lot 1 : aucun stockage persistant, aucun réseau, aucune statistique, aucune IA.
const interdits = {
  paths: [
    { name: '@react-native-async-storage/async-storage', message: 'Aucun stockage persistant au lot 1.' },
    { name: 'expo-secure-store', message: 'Aucun stockage persistant au lot 1.' },
    { name: 'expo-sqlite', message: 'Aucun stockage persistant au lot 1.' },
    { name: 'expo-file-system', message: 'Aucun stockage persistant au lot 1.' },
    { name: 'react-native-mmkv', message: 'Aucun stockage persistant au lot 1.' },
    { name: 'axios', message: 'Aucun appel réseau au lot 1.' },
  ],
  patterns: [
    { group: ['@supabase/*', 'firebase*', '*analytics*', '@sentry/*', 'openai', '@anthropic-ai/*'], message: 'Service externe interdit au lot 1.' },
  ],
};

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': ['error', interdits],
      'no-restricted-globals': [
        'error',
        { name: 'fetch', message: 'Aucun appel réseau au lot 1.' },
        { name: 'XMLHttpRequest', message: 'Aucun appel réseau au lot 1.' },
        { name: 'WebSocket', message: 'Aucun appel réseau au lot 1.' },
      ],
    },
  },
  {
    // Calculs d'EP1 : module pur, sans React ni React Native.
    files: ['src/calculs/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        { paths: interdits.paths, patterns: [...interdits.patterns, { group: ['react', 'react-native', 'expo*', '../../*'], message: 'Le module de calculs reste pur.' }] },
      ],
    },
  },
  {
    // Aide immédiate : isolée du reste de l'application.
    files: ['src/aide-immediate/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: interdits.paths,
          patterns: [
            ...interdits.patterns,
            { group: ['../catalogue/*', '../experiences/*', '../lecteur/*', '../calculs/*', '../configuration', 'expo-router'], message: 'L’aide immédiate ne lit aucun état extérieur.' },
          ],
        },
      ],
    },
  },
]);
