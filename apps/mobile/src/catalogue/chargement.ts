import brut from './catalogue-interne.json';
import { Catalogue, ElementCatalogue } from './types';

export function validerCatalogue(catalogue: Catalogue): Catalogue {
  const ids = new Set<string>();
  for (const e of catalogue.elements) {
    if (ids.has(e.id)) throw new Error(`Identifiant en double dans le catalogue : ${e.id}`);
    ids.add(e.id);
  }
  for (const e of catalogue.elements) {
    if (e.parent && !ids.has(e.parent)) throw new Error(`Parent inconnu pour ${e.id} : ${e.parent}`);
    if (e.type === 'experience' && !e.version) throw new Error(`Expérience sans version : ${e.id}`);
  }
  return catalogue;
}

export const catalogue: Catalogue = validerCatalogue(brut as Catalogue);

/** Seuls les éléments actifs sont proposés à la navigation. */
export function enfants(parent: string | undefined, type: ElementCatalogue['type']): ElementCatalogue[] {
  return catalogue.elements.filter((e) => e.type === type && e.parent === parent && e.etat === 'actif');
}

export function element(id: string): ElementCatalogue | undefined {
  return catalogue.elements.find((e) => e.id === id && e.etat === 'actif');
}
