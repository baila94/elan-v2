import { ReactNode, useState } from 'react';
import { Modal, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { espace, useCouleurs } from './theme';

// Composants de présentation, sans logique métier.

/**
 * Agrandissement maximal du texte dans les barres de hauteur fixe (en-têtes, onglets, barre du lecteur).
 * Au-delà, le bouton Aide et les icônes d'onglets étaient coupés ou sortaient de l'écran.
 * Le contenu des écrans, lui, suit la taille de texte choisie sans limite.
 */
export const TAILLE_MAX_BARRES = 1.35;

export function Titre({ children }: { children: ReactNode }) {
  const c = useCouleurs();
  return (
    <Text accessibilityRole="header" style={[styles.titre, { color: c.texte }]}>
      {children}
    </Text>
  );
}

export function SousTitre({ children }: { children: ReactNode }) {
  const c = useCouleurs();
  return (
    <Text accessibilityRole="header" style={[styles.sousTitre, { color: c.texte }]}>
      {children}
    </Text>
  );
}

export function Paragraphe({ children, style }: { children: ReactNode; style?: 'citation' | 'note' | 'normal' }) {
  const c = useCouleurs();
  return (
    <Text
      style={[
        styles.paragraphe,
        { color: style === 'note' ? c.texteSecondaire : c.texte },
        style === 'citation' && { borderLeftColor: c.bordure, ...styles.citation },
      ]}
    >
      {children}
    </Text>
  );
}

export function Carte({ titre, children }: { titre?: string; children: ReactNode }) {
  const c = useCouleurs();
  return (
    <View style={[styles.carte, { backgroundColor: c.surface, borderColor: c.bordure }]}>
      {titre ? <SousTitre>{titre}</SousTitre> : null}
      {children}
    </View>
  );
}

export function Puce({ children }: { children: ReactNode }) {
  const c = useCouleurs();
  return (
    <View style={styles.puce}>
      <Text style={[styles.paragraphe, { color: c.texte }]}>{'•  '}</Text>
      <Text style={[styles.paragraphe, styles.flex, { color: c.texte }]}>{children}</Text>
    </View>
  );
}

export function DetailReplie({ libelle, children }: { libelle: string; children: ReactNode }) {
  const c = useCouleurs();
  const [ouvert, setOuvert] = useState(false);
  return (
    <View style={[styles.detail, { borderColor: c.bordure }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: ouvert }}
        accessibilityLabel={libelle}
        onPress={() => setOuvert((o) => !o)}
        style={styles.detailEntete}
      >
        <Text style={[styles.paragraphe, styles.flex, { color: c.accent }]}>{libelle}</Text>
        <Text style={{ color: c.accent }}>{ouvert ? '▲' : '▼'}</Text>
      </Pressable>
      {ouvert ? <View style={styles.detailContenu}>{children}</View> : null}
    </View>
  );
}

export interface OptionChoix<T> {
  valeur: T;
  libelle: string;
}

export function ChoixUnique<T>({
  titre,
  options,
  valeur,
  onChoix,
}: {
  titre?: string;
  options: OptionChoix<T>[];
  valeur: T | null;
  onChoix: (v: T) => void;
}) {
  const c = useCouleurs();
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel={titre} style={styles.groupe}>
      {titre ? <Text style={[styles.libelleGroupe, { color: c.texte }]}>{titre}</Text> : null}
      {options.map((o) => {
        const choisi = valeur === o.valeur;
        return (
          <Pressable
            key={String(o.valeur)}
            accessibilityRole="radio"
            accessibilityState={{ checked: choisi }}
            accessibilityLabel={o.libelle}
            onPress={() => onChoix(o.valeur)}
            style={[
              styles.option,
              { borderColor: choisi ? c.accent : c.bordure, backgroundColor: c.surface },
              choisi && styles.optionChoisie,
            ]}
          >
            <View style={[styles.radio, { borderColor: choisi ? c.accent : c.inactif }]}>
              {choisi ? <View style={[styles.radioPlein, { backgroundColor: c.accent }]} /> : null}
            </View>
            <Text style={[styles.paragraphe, styles.flex, { color: c.texte }]}>{o.libelle}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function ReglageMontant({
  libelle,
  valeur,
  min,
  max,
  pas,
  format,
  onChange,
  aide,
}: {
  libelle: string;
  valeur: number;
  min: number;
  max: number;
  pas: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
  aide?: string;
}) {
  const c = useCouleurs();
  const borner = (v: number) => Math.max(min, Math.min(max, v));
  const bouton = (texte: string, delta: number, etiquette: string) => {
    const desactive = borner(valeur + delta) === valeur;
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${etiquette} : ${libelle}`}
        accessibilityState={{ disabled: desactive }}
        disabled={desactive}
        onPress={() => onChange(borner(valeur + delta))}
        style={[styles.boutonReglage, { borderColor: desactive ? c.bordure : c.accent }]}
      >
        <Text style={{ color: desactive ? c.inactif : c.accent, fontSize: 15 }}>{texte}</Text>
      </Pressable>
    );
  };
  return (
    <View
      style={[styles.reglage, { borderColor: c.bordure, backgroundColor: c.surface }]}
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel={libelle}
      accessibilityValue={{ text: format(valeur) }}
      accessibilityActions={[
        { name: 'increment', label: 'Augmenter' },
        { name: 'decrement', label: 'Diminuer' },
      ]}
      onAccessibilityAction={(e) => {
        if (e.nativeEvent.actionName === 'increment') onChange(borner(valeur + pas));
        if (e.nativeEvent.actionName === 'decrement') onChange(borner(valeur - pas));
      }}
    >
      <Text style={[styles.paragraphe, { color: c.texte }]}>{libelle}</Text>
      {aide ? <Text style={[styles.note, { color: c.texteSecondaire }]}>{aide}</Text> : null}
      <View style={styles.ligneReglage}>
        {bouton(`−${pas / 100}`, -pas, `Diminuer de ${pas / 100} €`)}
        {bouton('−1', -100, 'Diminuer de 1 €')}
        <Text style={[styles.valeurReglage, { color: c.texte }]}>{format(valeur)}</Text>
        {bouton('+1', 100, 'Augmenter de 1 €')}
        {bouton(`+${pas / 100}`, pas, `Augmenter de ${pas / 100} €`)}
      </View>
    </View>
  );
}

export function Interrupteur({
  libelle,
  valeur,
  onChange,
  aide,
}: {
  libelle: string;
  valeur: boolean;
  onChange: (v: boolean) => void;
  aide?: string;
}) {
  const c = useCouleurs();
  return (
    <View style={[styles.reglage, { borderColor: c.bordure, backgroundColor: c.surface }]}>
      <View style={styles.ligneInterrupteur}>
        <Text style={[styles.paragraphe, styles.flex, { color: c.texte }]}>{libelle}</Text>
        <Switch accessibilityLabel={libelle} value={valeur} onValueChange={onChange} />
      </View>
      {aide ? <Text style={[styles.note, { color: c.texteSecondaire }]}>{aide}</Text> : null}
    </View>
  );
}

export function LigneGrisee({ libelle, raison }: { libelle: string; raison: string }) {
  const c = useCouleurs();
  return (
    <View
      accessible
      accessibilityLabel={`${libelle}, indisponible : ${raison}`}
      style={[styles.reglage, { borderColor: c.bordure, backgroundColor: c.fond }]}
    >
      <Text style={[styles.paragraphe, { color: c.inactif }]}>{libelle}</Text>
      <Text style={[styles.note, { color: c.texteSecondaire }]}>{raison}</Text>
    </View>
  );
}

export function Resume({ children }: { children: ReactNode }) {
  const c = useCouleurs();
  return (
    <View
      accessibilityLiveRegion="polite"
      style={[styles.resume, { backgroundColor: c.surface, borderColor: c.accent }]}
    >
      <Text style={[styles.paragraphe, { color: c.texte }]}>{children}</Text>
    </View>
  );
}

export function Tableau({ lignes }: { lignes: { libelle: string; valeur: string; gras?: boolean; intertitre?: boolean }[] }) {
  const c = useCouleurs();
  return (
    <View style={[styles.carte, { backgroundColor: c.surface, borderColor: c.bordure }]}>
      {lignes.map((l, i) => (
        <View key={`${l.libelle}-${i}`} accessible accessibilityLabel={`${l.libelle} ${l.valeur}`} style={styles.ligneTableau}>
          <Text
            style={[
              styles.paragraphe,
              styles.flex,
              { color: l.intertitre ? c.texteSecondaire : c.texte },
              l.gras && styles.gras,
              l.intertitre && styles.italique,
            ]}
          >
            {l.libelle}
          </Text>
          <Text style={[styles.paragraphe, { color: c.texte }, l.gras && styles.gras]}>{l.valeur}</Text>
        </View>
      ))}
    </View>
  );
}

export function Bouton({
  libelle,
  onPress,
  secondaire,
  desactive,
}: {
  libelle: string;
  onPress: () => void;
  secondaire?: boolean;
  desactive?: boolean;
}) {
  const c = useCouleurs();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={libelle}
      accessibilityState={{ disabled: !!desactive }}
      disabled={desactive}
      onPress={onPress}
      style={[
        styles.bouton,
        secondaire
          ? { borderColor: desactive ? c.bordure : c.accent, borderWidth: 1 }
          : { backgroundColor: desactive ? c.inactif : c.accent },
      ]}
    >
      <Text style={[styles.texteBouton, { color: secondaire ? (desactive ? c.inactif : c.accent) : c.texteSurAccent }]}>
        {libelle}
      </Text>
    </Pressable>
  );
}

export function Confirmation({
  visible,
  texte,
  confirmer,
  annuler,
  onConfirmer,
  onAnnuler,
}: {
  visible: boolean;
  texte: string;
  confirmer: string;
  annuler: string;
  onConfirmer: () => void;
  onAnnuler: () => void;
}) {
  const c = useCouleurs();
  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onAnnuler}>
      <View style={styles.voile}>
        <View accessibilityViewIsModal style={[styles.dialogue, { backgroundColor: c.surface }]}>
          <Paragraphe>{texte}</Paragraphe>
          <Bouton libelle={confirmer} onPress={onConfirmer} />
          <Bouton libelle={annuler} onPress={onAnnuler} secondaire />
        </View>
      </View>
    </Modal>
  );
}

export function Bandeau({ texte, variante = 'interne' }: { texte: string; variante?: 'interne' | 'demo' }) {
  const c = useCouleurs();
  return (
    <View
      accessible
      accessibilityLabel={texte}
      style={[styles.bandeau, { backgroundColor: variante === 'demo' ? c.aideFond : c.avertissementFond }]}
    >
      <Text style={[styles.texteBandeau, { color: variante === 'demo' ? c.aideTexte : c.avertissementTexte }]}>{texte}</Text>
    </View>
  );
}

export function EtatVide({ titre, texte }: { titre: string; texte: string }) {
  return (
    <Carte titre={titre}>
      <Paragraphe style="note">{texte}</Paragraphe>
    </Carte>
  );
}

const styles = StyleSheet.create({
  titre: { fontSize: 26, fontWeight: '700', marginBottom: espace.m },
  sousTitre: { fontSize: 18, fontWeight: '600', marginBottom: espace.s },
  paragraphe: { fontSize: 16, lineHeight: 23 },
  note: { fontSize: 14, lineHeight: 20, marginTop: espace.xs },
  citation: { borderLeftWidth: 3, paddingLeft: espace.m },
  carte: { borderWidth: 1, borderRadius: 12, padding: espace.l, marginVertical: espace.s, gap: espace.s },
  puce: { flexDirection: 'row' },
  flex: { flex: 1, flexShrink: 1 },
  detail: { borderWidth: 1, borderRadius: 10, marginVertical: espace.s },
  detailEntete: { flexDirection: 'row', alignItems: 'center', padding: espace.m, gap: espace.s },
  detailContenu: { paddingHorizontal: espace.m, paddingBottom: espace.m, gap: espace.s },
  groupe: { gap: espace.s, marginVertical: espace.s },
  libelleGroupe: { fontSize: 16, fontWeight: '600' },
  option: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, padding: espace.m, gap: espace.m },
  optionChoisie: { borderWidth: 2 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  radioPlein: { width: 12, height: 12, borderRadius: 6 },
  reglage: { borderWidth: 1, borderRadius: 10, padding: espace.m, marginVertical: espace.xs, gap: espace.xs },
  ligneReglage: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: espace.s, gap: espace.xs },
  boutonReglage: { borderWidth: 1, borderRadius: 8, paddingVertical: espace.s, paddingHorizontal: espace.m, minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  valeurReglage: { fontSize: 18, fontWeight: '600', flexShrink: 1, textAlign: 'center' },
  ligneInterrupteur: { flexDirection: 'row', alignItems: 'center', gap: espace.m },
  resume: { borderLeftWidth: 4, borderWidth: 1, borderRadius: 10, padding: espace.m, marginVertical: espace.s },
  ligneTableau: { flexDirection: 'row', justifyContent: 'space-between', gap: espace.m },
  gras: { fontWeight: '700' },
  italique: { fontStyle: 'italic' },
  bouton: { borderRadius: 12, paddingVertical: espace.m + 2, paddingHorizontal: espace.l, alignItems: 'center', marginVertical: espace.xs, minHeight: 48, justifyContent: 'center' },
  texteBouton: { fontSize: 17, fontWeight: '600', textAlign: 'center' },
  voile: { flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', justifyContent: 'center', padding: espace.xl },
  dialogue: { borderRadius: 14, padding: espace.xl, gap: espace.m },
  bandeau: { paddingVertical: espace.s, paddingHorizontal: espace.l },
  texteBandeau: { fontSize: 13, fontWeight: '600', textAlign: 'center' },
});
