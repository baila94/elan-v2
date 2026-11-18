// Description structurée d'une expérience (contrat définition → lecteur).
// Les textes sont des gabarits : « {cle} » est remplacé par une valeur calculée.
// Une condition est le nom d'un booléen du contexte ; « !nom » en est la négation.

export type Gabarit = string;
export type Condition = string;

export type Action =
  | 'suivant'
  | 'precedent'
  | 'validerPlan'
  | 'payerAinsi'
  | 'neRienChanger'
  | 'voirCartes'
  | 'rejouer'
  | 'finRejeu'
  | 'allerEcran2'
  | 'reinitialiserDecembre'
  | 'terminer';

export type ValeurChoix = string | number | boolean | null;

interface Conditionnel {
  condition?: Condition;
}

export type Bloc =
  | ({ type: 'paragraphe'; texte: Gabarit; style?: 'citation' | 'note'; essentiel?: boolean } & Conditionnel)
  | ({ type: 'liste'; elements: ({ texte: Gabarit } & Conditionnel)[] } & Conditionnel)
  | ({ type: 'carte'; titre?: Gabarit; blocs: Bloc[] } & Conditionnel)
  | ({ type: 'detailReplie'; libelle: Gabarit; blocs: Bloc[] } & Conditionnel)
  | ({ type: 'intertitre'; texte: Gabarit } & Conditionnel)
  | ({
      type: 'choixUnique';
      chemin: string;
      titre?: Gabarit;
      options: ({ valeur: ValeurChoix; libelle: Gabarit } & Conditionnel)[];
    } & Conditionnel)
  | ({ type: 'montant'; chemin: string; libelle: Gabarit; aide?: Gabarit } & Conditionnel)
  | ({ type: 'interrupteur'; chemin: string; libelle: Gabarit; aide?: Gabarit } & Conditionnel)
  | ({ type: 'ligneGrisee'; libelle: Gabarit; raison: Gabarit } & Conditionnel)
  | ({ type: 'resume'; texte: Gabarit } & Conditionnel)
  | ({
      type: 'tableau';
      lignes: ({ libelle: Gabarit; valeur: Gabarit; gras?: boolean; intertitre?: boolean } & Conditionnel)[];
    } & Conditionnel)
  | ({ type: 'bouton'; libelle: Gabarit; action: Action } & Conditionnel);

export interface Confirmation {
  condition: Condition;
  textes: ({ texte: Gabarit } & Conditionnel)[];
  confirmer: string;
  annuler: string;
}

export interface BoutonPassage {
  libelle: Gabarit;
  action: Action;
  actif?: Condition;
  secondaire?: boolean;
  confirmation?: Confirmation;
  condition?: Condition;
}

export interface EcranDefinition {
  numero: number;
  titre: Gabarit;
  blocs: Bloc[];
  boutons: BoutonPassage[];
}

export interface DefinitionExperience {
  id: string;
  version: string;
  ecrans: EcranDefinition[];
  actionSignificative: { ecran: number; evenement: 'plan_valide'; pointEntree: string };
  pointsEntree: { id: string; ficheM2Validee: boolean }[];
  reglages: { pasMontant: number };
}

export interface Bornes {
  min: number;
  max: number;
  pas: number;
}

export interface Contexte {
  valeurs: Record<string, string>;
  conditions: Record<string, boolean>;
  bornes: Record<string, Bornes>;
}
