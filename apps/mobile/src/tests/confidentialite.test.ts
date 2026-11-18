import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

// Contrôles de confidentialité et d'isolation du lot 1 (préparation opérationnelle §4.3).

const RACINE = join(__dirname, '..', '..');
const SRC = join(RACINE, 'src');

function fichiers(dossier: string): string[] {
  return readdirSync(dossier).flatMap((nom) => {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) return nom === '__tests__' || nom === 'tests' ? [] : fichiers(chemin);
    return /\.(ts|tsx)$/.test(nom) ? [chemin] : [];
  });
}

const sources = fichiers(SRC).map((chemin) => ({ chemin: relative(RACINE, chemin), texte: readFileSync(chemin, 'utf8') }));
const importsDe = (texte: string) => [...texte.matchAll(/from\s+'([^']+)'/g)].map((m) => m[1]);

describe('Confidentialité et absence de persistance', () => {
  test('aucun module de stockage, de réseau, de statistiques ou d’IA n’est installé', () => {
    const paquet = JSON.parse(readFileSync(join(RACINE, 'package.json'), 'utf8'));
    const dependances = Object.keys({ ...paquet.dependencies, ...paquet.devDependencies });
    const interdits = /async-storage|secure-store|sqlite|mmkv|expo-file-system|supabase|firebase|analytics|sentry|amplitude|segment|axios|openai|anthropic|purchases/i;
    expect(dependances.filter((d) => interdits.test(d))).toEqual([]);
  });

  test('aucun code applicatif n’utilise le stockage local ni le réseau', () => {
    const motifs = /AsyncStorage|SecureStore|localStorage|sessionStorage|indexedDB|\bfetch\(|XMLHttpRequest|WebSocket|EventSource|sendBeacon/;
    expect(sources.filter((s) => motifs.test(s.texte)).map((s) => s.chemin)).toEqual([]);
  });

  test('le module de calculs d’EP1 est pur : aucun import de React, de React Native ni d’Expo', () => {
    const calculs = sources.filter((s) => s.chemin.startsWith('src/calculs/'));
    expect(calculs.length).toBeGreaterThan(0);
    for (const s of calculs) {
      expect(importsDe(s.texte).filter((i) => !i.startsWith('./') && !i.startsWith('..'))).toEqual([]);
      expect(importsDe(s.texte).filter((i) => i.startsWith('../') && !i.startsWith('../ep1'))).toEqual([]);
    }
  });

  test('le module d’aide immédiate n’importe que l’interface et son paquet', () => {
    const aide = sources.filter((s) => s.chemin.startsWith('src/aide-immediate/'));
    for (const s of aide) {
      const autorises = (i: string) => ['react', 'react-native'].includes(i) || i.startsWith('../ui/') || i === './paquet-demo.json';
      expect(importsDe(s.texte).filter((i) => !autorises(i))).toEqual([]);
    }
  });

  test('seules les routes importent le module d’aide immédiate', () => {
    const importeurs = sources.filter(
      (s) => !s.chemin.startsWith('src/aide-immediate/') && importsDe(s.texte).some((i) => i.includes('aide-immediate')),
    );
    expect(importeurs.every((s) => s.chemin.startsWith('src/app/'))).toBe(true);
  });

  test('le paquet d’aide est une démonstration : avertissement présent, aucune date de vérification, aucun numéro', () => {
    const paquet = JSON.parse(readFileSync(join(SRC, 'aide-immediate', 'paquet-demo.json'), 'utf8'));
    expect(paquet.demo).toBe(true);
    expect(paquet.avertissement).toContain('DÉMONSTRATION INTERNE');
    const texte = JSON.stringify(paquet);
    expect(texte).not.toMatch(/Vérifié le/);
    expect(texte).not.toMatch(/\d{2}[\s.]?\d{2}[\s.]?\d{2}/);
  });

  test('aucun champ de saisie de texte (TextInput) dans l’application', () => {
    expect(sources.filter((s) => /TextInput/.test(s.texte)).map((s) => s.chemin)).toEqual([]);
  });

  test('le port de progression du lot 1 ne conserve et ne transmet rien', () => {
    const port = sources.find((s) => s.chemin === 'src/lecteur/progression-port.ts')!;
    expect(port.texte).toMatch(/actionSignificative\(\)\s*\{\s*\/\/ Volontairement vide\.\s*\}/);
  });

  test('le mode interne est déclaré dans la configuration et signalé par un bandeau', () => {
    const app = JSON.parse(readFileSync(join(RACINE, 'app.json'), 'utf8'));
    expect(app.expo.extra.modeInterne).toBe(true);
    const accueil = sources.find((s) => s.chemin === 'src/app/(onglets)/index.tsx')!;
    expect(accueil.texte).toContain('Version interne de développement');
  });
});
