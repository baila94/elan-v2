import { Fragment } from 'react';
import {
  Bouton,
  Carte,
  ChoixUnique,
  DetailReplie,
  Interrupteur,
  LigneGrisee,
  Paragraphe,
  Puce,
  ReglageMontant,
  Resume,
  SousTitre,
  Tableau,
} from '../ui/composants';
import { eur } from '../ui/format';
import { remplir, verifie } from './gabarits';
import { Action, Bloc, Contexte, ValeurChoix } from './types';

export interface ProprietesRendu {
  contexte: Contexte;
  lireValeur: (chemin: string) => unknown;
  definir: (chemin: string, valeur: unknown) => void;
  agir: (action: Action) => void;
}

export function RenduBlocs({ blocs, ...p }: ProprietesRendu & { blocs: Bloc[] }) {
  return (
    <>
      {blocs.map((bloc, i) => (
        <Fragment key={i}>{verifie(bloc.condition, p.contexte) ? <RenduBloc bloc={bloc} {...p} /> : null}</Fragment>
      ))}
    </>
  );
}

function RenduBloc({ bloc, contexte, lireValeur, definir, agir }: ProprietesRendu & { bloc: Bloc }) {
  const t = (g: string) => remplir(g, contexte);
  const p = { contexte, lireValeur, definir, agir };
  switch (bloc.type) {
    case 'paragraphe':
      return <Paragraphe style={bloc.style}>{t(bloc.texte)}</Paragraphe>;
    case 'intertitre':
      return <SousTitre>{t(bloc.texte)}</SousTitre>;
    case 'liste':
      return (
        <>
          {bloc.elements
            .filter((e) => verifie(e.condition, contexte))
            .map((e, i) => (
              <Puce key={i}>{t(e.texte)}</Puce>
            ))}
        </>
      );
    case 'carte':
      return (
        <Carte titre={bloc.titre ? t(bloc.titre) : undefined}>
          <RenduBlocs blocs={bloc.blocs} {...p} />
        </Carte>
      );
    case 'detailReplie':
      return (
        <DetailReplie libelle={t(bloc.libelle)}>
          <RenduBlocs blocs={bloc.blocs} {...p} />
        </DetailReplie>
      );
    case 'choixUnique':
      return (
        <ChoixUnique<ValeurChoix>
          titre={bloc.titre ? t(bloc.titre) : undefined}
          options={bloc.options.filter((o) => verifie(o.condition, contexte)).map((o) => ({ valeur: o.valeur, libelle: t(o.libelle) }))}
          valeur={(lireValeur(bloc.chemin) as ValeurChoix) ?? null}
          onChoix={(valeur) => definir(bloc.chemin, valeur)}
        />
      );
    case 'montant': {
      const bornes = contexte.bornes[bloc.chemin];
      if (!bornes) throw new Error(`Bornes inconnues : ${bloc.chemin}`);
      return (
        <ReglageMontant
          libelle={t(bloc.libelle)}
          aide={bloc.aide ? t(bloc.aide) : undefined}
          valeur={lireValeur(bloc.chemin) as number}
          min={bornes.min}
          max={bornes.max}
          pas={bornes.pas}
          format={eur}
          onChange={(valeur) => definir(bloc.chemin, valeur)}
        />
      );
    }
    case 'interrupteur':
      return (
        <Interrupteur
          libelle={t(bloc.libelle)}
          aide={bloc.aide ? t(bloc.aide) : undefined}
          valeur={lireValeur(bloc.chemin) as boolean}
          onChange={(valeur) => definir(bloc.chemin, valeur)}
        />
      );
    case 'ligneGrisee':
      return <LigneGrisee libelle={t(bloc.libelle)} raison={t(bloc.raison)} />;
    case 'resume':
      return <Resume>{t(bloc.texte)}</Resume>;
    case 'tableau':
      return (
        <Tableau
          lignes={bloc.lignes
            .filter((l) => verifie(l.condition, contexte))
            .map((l) => ({ libelle: t(l.libelle), valeur: t(l.valeur), gras: l.gras, intertitre: l.intertitre }))}
        />
      );
    case 'bouton':
      return <Bouton libelle={t(bloc.libelle)} onPress={() => agir(bloc.action)} secondaire />;
  }
}
