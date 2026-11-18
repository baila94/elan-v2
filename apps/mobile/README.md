# Élan — application mobile (lot 1, version interne)

Version interne de développement. Elle ne doit pas être diffusée.

- **Navigation :** cinq onglets, Aujourd'hui, Parcours, Bibliothèque, Atelier et Profil.
- **Aide immédiate :** bouton permanent, avec un contenu de démonstration interne non vérifié.
- **EP1 « Construire son premier budget » :** jouable de bout en bout.
- **Exclus :** compte, serveur, réseau, persistance, statistiques et IA.

## Lancer

```bash
npm install
npx expo run:ios      # nécessite Xcode
npx expo run:android  # nécessite le SDK Android
```

## Vérifier

```bash
npm test              # tests unitaires, de composants et de confidentialité
npm run typecheck     # TypeScript strict
npx eslint src        # lint, dont les importations interdites (stockage, réseau, services externes)
npx expo export --platform ios --platform android --output-dir /tmp/elan-bundles
```

## Organisation

| Dossier | Rôle |
|---|---|
| `src/app/` | Routes Expo Router : onglets, lecteur d'expérience, aide immédiate |
| `src/calculs/ep1/` | Calculs d'EP1, purs et testés, en centimes entiers |
| `src/experiences/ep1/` | Définition structurée des 13 écrans, état de session en mémoire, liaisons |
| `src/lecteur/` | Lecteur générique d'expériences, port de progression (inactif au lot 1) |
| `src/aide-immediate/` | Module isolé, paquet de démonstration |
| `src/catalogue/` | Catalogue interne : piliers, dimensions, EP1 |
| `src/ui/` | Composants de présentation |

Les règles appliquées figurent dans `docs/decisions/` (EP1, C1, R15, M2, AI1, I1, L1). Aucune n'est modifiée par ce code.
