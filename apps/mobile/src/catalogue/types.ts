// Objets du catalogue utilisés au lot 1 (C1 §2). Aucune donnée personnelle.
export type Acces = 'sans_compte' | 'compte_requis';
export type TypeElement = 'pilier' | 'dimension' | 'experience';

export interface ElementCatalogue {
  id: string;
  type: TypeElement;
  parent?: string;
  titre: string;
  acces: Acces;
  etat: 'actif' | 'desactive';
  version?: string;
}

export interface Catalogue {
  version: string;
  elements: ElementCatalogue[];
}
