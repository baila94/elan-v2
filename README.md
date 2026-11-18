# Élan

Ce dépôt contient la **nouvelle version indépendante d'Élan**.

Il est entièrement séparé de l'ancien projet : code, historique Git, dépendances, configuration et base de données sont propres à cette version. Aucun élément de l'ancien projet n'y est repris automatiquement.

## Principes de travail

1. **Les documents de référence font autorité.**
   Les documents métier et produit placés dans `docs/reference/` priment sur tous les choix de conception. En cas de conflit entre une proposition technique et un document de référence, c'est le document de référence qui s'applique.

2. **Aucune architecture n'est validée par défaut.**
   Une architecture technique, même rédigée dans `docs/architecture/`, n'est pas considérée comme validée tant qu'elle n'a pas été examinée et approuvée explicitement. Chaque approbation est consignée dans `docs/decisions/`.

3. **Aucun développement sans validation explicite.**
   Aucune ligne de code, aucune installation de dépendance et aucune configuration technique ne doit être engagée sans une validation explicite préalable.

## Organisation de la documentation

| Dossier | Rôle |
|---|---|
| `docs/reference/` | Documents de référence métier et produit (source d'autorité) |
| `docs/decisions/` | Décisions prises et approuvées, datées |
| `docs/architecture/` | Propositions d'architecture technique, soumises à examen |

## État actuel

Phase de préparation documentaire. Aucun développement n'a commencé.
