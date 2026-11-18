# M7 — Statistiques d'utilisation

- **Statut :** décisions validées par le fondateur, consolidées dans ce document.
- **Documents liés :** R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), documents de référence de `docs/reference/`.

---

## 0. Statut, sources et légende

Ce document consigne les décisions M7 validées. Les formulations sont des restitutions structurées, pas des citations mot pour mot. Un écart avec un autre document est signalé, jamais tranché silencieusement (référentiel global §12.1).

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Corpus]** | Règle issue d'un document de référence |
| **[Conception]** | Détail technique délégué, sans création de règle de fond |
| **[À vérifier]** | Faisabilité technique ou conformité juridique non démontrée |
| **[À compléter]** | Référence ou paramètre précis qui manque encore |

**Aucune anonymisation, aucune impossibilité de réidentification, aucune purge et aucune sécurité n'est garantie par ce document.** Ce sont des exigences, dont la réalisation devra être démontrée.

---

## 1. Objet, finalité et périmètre

| Règle | Statut |
|---|---|
| M7 encadre des **statistiques minimales d'utilisation,** destinées à améliorer le produit. | [Décidé] |
| Événements couverts : consultations, démarrages, terminaisons, abandons, erreurs techniques. | [Décidé] |
| **Exclusions :** aucune réponse individuelle, réflexion, simulation, donnée sensible, progression, personnalisation ou publicité. | [Décidé] |
| **M7 est distinct de la progression pédagogique** (R15). Les statistiques ne sont jamais de la progression, ni une source de personnalisation individuelle. | [Décidé] ; R15 §10 |
| **Aucun suivi d'une session à l'autre.** Les mesures qui supposent un tel suivi, comme le retour à 30 jours ou la réutilisation d'un outil dans un autre contexte, ne sont pas réalisées. **M7 prévaut sur les indicateurs de P2** qui nécessiteraient ce suivi. | [Décidé] |
| Alternatives possibles : des statistiques **au sein d'une même session,** ou des **retours qualitatifs volontaires.** Les statistiques de même session restent limitées à **une seule expérience** (§2) : aucun indicateur ne relie plusieurs expériences ou plusieurs outils. | [Décidé] |
| Les retours qualitatifs volontaires ne sont pas des événements M7. Leur régime propre (recueil, conservation, accès, contenus sensibles) n'est pas défini par ce document. | **[À compléter]** |

---

## 2. Événements et granularité

| Règle | Statut |
|---|---|
| Événements communs : consultation, démarrage, terminaison, abandon, erreur technique. | [Décidé] |
| **Aucun événement ne contient de réponse.** | [Décidé] |
| L'identifiant d'expérience peut être conservé pour comparer les usages par expérience, **sans reconstituer de parcours individuel.** | [Décidé] |
| **Précision temporelle arrondie à l'heure.** | [Décidé] |
| **Un identifiant de session ne peut être utilisé que si sa nécessité est justifiée.** | [Décidé] |
| **Portée de l'identifiant de session, s'il est utilisé :** | [Décidé] |
| — il sert **uniquement au calcul d'un indicateur strictement nécessaire, dans une seule expérience** ; | |
| — il **ne permet pas de relier entre eux les événements de plusieurs expériences** ; | |
| — le rapprochement des événements se limite aux **données strictement nécessaires au calcul,** par exemple un démarrage et une terminaison, ou un abandon ; | |
| — **aucun historique détaillé du parcours** n'est constitué ; | |
| — les **événements détaillés sont supprimés** après la période d'analyse et l'agrégation prévues (§3) ; | |
| — **aucune liaison avec le compte, aucun identifiant persistant, aucun suivi entre sessions.** | |
| Durée de la période d'analyse et des événements détaillés | **[À compléter]** (§3) |
| **Événements spécifiques à une expérience :** autorisés seulement si leur utilité est démontrée. Leur finalité, leurs données, leur durée, leurs accès et leur suppression sont documentés. | [Décidé] |
| **Aucun identifiant de point d'entrée n'est ajouté au schéma des événements.** La documentation d'un événement spécifique indique, le cas échéant, le ou les points d'entrée auxquels il se rattache, pour permettre sa purge en cas de reclassification (M2 §12.1). Cette documentation n'ajoute aucun champ à l'événement. | [Décidé] |
| **Codes d'erreur :** les codes normalisés sont génériques et partagés ; aucun n'est propre à un point d'entrée. Leur rattachement éventuel à des points d'entrée est documenté dans le catalogue (C1 §2), selon les règles applicables aux événements spécifiques, sans champ ajouté à l'événement. | [Décidé] |
| Une forme adaptée d'un événement reçoit un nouvel identifiant de type (M2 §12.1). | [Décidé] |
| **Aucun événement provenant d'une entrée sensible, ni de la navigation vers celle-ci.** | [Décidé] ; M2 §8 |

### Choix de conception

- **Identifiant de session,** seulement si sa nécessité est justifiée :
  - aléatoire ;
  - conservé en mémoire sur l'appareil ;
  - **propre à une seule expérience,** et renouvelé à chaque nouvelle expérience, après une période d'inactivité ou au redémarrage ;
  - jamais dérivé du compte ;
  - jamais conservé avec lui.
- **Collecte propre à Élan,** sans kit de mesure tiers et sans identifiant persistant (appareil, publicité, compte).
- **Schéma d'événement fermé :** type, expérience, heure arrondie, identifiant de session éventuel, code d'erreur normalisé. Aucun champ libre, aucune route, aucun titre.
- **Abandon :** il n'est pas comptabilisé lorsque la sortie mène vers une entrée sensible ou vers l'aide immédiate.
- **Erreurs techniques :** un code normalisé, sans contenu saisi ni identifiant de compte. Ces événements restent distincts des journaux techniques ordinaires (R15 A9).
- **Tests automatiques :** le test échoue si une entrée sensible émet un événement, si un événement contient un champ non prévu, ou si un même identifiant de session apparaît dans deux expériences différentes.

---

## 3. Conservation et agrégation

| Règle | Statut |
|---|---|
| Durées de conservation **définies par catégorie d'événements,** proportionnées à leur utilité. | [Décidé] |
| Valeurs de ces durées | **[À compléter]**, puis [À vérifier] |
| **Suppression automatique** à l'échéance. | [Décidé] |
| Après une **période d'analyse limitée,** les événements sont transformés en statistiques agrégées et anonymisées. Les événements détaillés sont supprimés à leur échéance. | [Décidé] |
| **Période d'agrégation adaptée à chaque statistique,** selon le volume et le risque. Il n'existe pas de règle hebdomadaire ou mensuelle universelle. | [Décidé] |
| Valeurs des périodes d'agrégation | **[À compléter]** |
| **Mise à jour régulière et programmée** des statistiques. | [Décidé] |
| Calendrier exact | **[À compléter]** |
| **Seules les statistiques globales suffisamment anonymisées** peuvent être conservées à long terme. | [Décidé] |
| **Périodes incomplètes et ruptures de série.** Un agrégat qui couvre une période incomplète ou une rupture de série résultant d'un reclassement, d'une suspension, d'une purge ou d'une adaptation d'événements (M2 §12.1) le signale. **Toute estimation est explicitement présentée comme une estimation. Elle n'est jamais présentée comme une mesure réellement observée.** **Le signalement ne révèle jamais le point d'entrée devenu sensible et ne permet jamais de l'isoler.** Il ne contient aucune donnée personnelle ni aucun identifiant de point d'entrée. | [Décidé] |
| Modalités techniques du signalement, au niveau de l'expérience et de la période, qui doivent garantir qu'il ne révèle pas le point d'entrée devenu sensible et ne permet pas de l'isoler | [Conception ; À vérifier] |

---

## 4. Anonymisation et protection contre la réidentification

| Règle | Statut |
|---|---|
| **Seuil minimal** et **analyse contextuelle** du risque de réidentification. | [Décidé] |
| Les **groupes réduits** et les **croisements risqués** sont regroupés ou supprimés. | [Décidé] |
| **Méthode du seuil :** définie après analyse des catégories et des risques, avec un **minimum commun** et des **exigences renforcées** si nécessaire. Aucun chiffre arbitraire. | [Décidé] |
| Valeur du minimum commun et cas d'exigence renforcée | **[À compléter]**, après analyse des données réelles |
| **Vérification de l'anonymisation :** des contrôles automatisés, plus une revue humaine pour toute situation inhabituelle, risquée ou incertaine. | [Décidé] |
| **En cas de doute sérieux, aucune conservation longue durée.** | [Décidé] |
| **Contrôles contre la réidentification** par comparaison de périodes, de publications, d'accès ou de demandes répétées. | [Décidé] |
| **Blocage de l'opération** si le risque de réidentification persiste. | [Décidé] |
| Masquage automatique des résultats sous le seuil avant tout affichage ou export. | [Conception] |
| Efficacité réelle de l'anonymisation et des contrôles | [À vérifier] |

---

## 5. Accès interne

| Règle | Statut |
|---|---|
| Accès **strictement limité** aux personnes explicitement autorisées qui ont un besoin professionnel. | [Décidé] |
| Accès **contrôlé et traçable.** | [Décidé] |
| Journaux d'accès aux statistiques : une durée propre, justifiée, avec suppression automatique. Cette durée est distincte des 12 mois des journaux d'intervention (R15 D25) et du régime des traces de suppression (R15 C4). | Traçabilité : [Décidé] ; durée : **[À compléter]** |

---

## 6. Exports externes

### 6.1 Principe

| Règle | Statut |
|---|---|
| Exports **exceptionnels uniquement.** | [Décidé] |
| **Uniquement des statistiques agrégées suffisamment anonymisées.** Jamais d'événements individuels ni pseudonymisés. | [Décidé] |
| **Contrôles préalables :** anonymisation, nécessité, destinataire, finalité, sécurité de la transmission. | [Décidé] |
| Un export qui contient des statistiques couvrant une période incomplète ou une rupture de série résultant d'un reclassement, d'une suspension, d'une purge ou d'une adaptation d'événements (M2 §12.1) conserve leur signalement et la distinction entre estimation et mesure réellement observée (§3). Le signalement ne révèle jamais le point d'entrée devenu sensible et ne permet jamais de l'isoler. Ce point fait partie des contrôles préalables. | [Décidé] |

### 6.2 Double validation

| Règle | Statut |
|---|---|
| **Deux validations indépendantes :** l'une porte sur la **finalité et la nécessité**, l'autre sur l'**anonymisation, le risque, la sécurité, le destinataire et la transmission.** | [Décidé] |
| **Contrôle du signalement (§6.1), partagé entre les deux validations :** chaque validateur vérifie, dans son domaine, la présence et l'exhaustivité du signalement. Le premier validateur contrôle la présentation honnête des estimations et la cohérence de leur interprétation avec la finalité de l'export ; il vérifie que le signalement est présent et complet au regard de cette interprétation et de cette finalité. Le second validateur contrôle la discrétion du signalement et les risques de comparaison ou d'isolement du point d'entrée devenu sensible ; il vérifie que le signalement est présent et complet au regard de cette discrétion et de ces risques. | [Décidé] |
| **Contrôle automatique préalable :** l'outil d'export (§6.7) effectue un contrôle automatique préalable, en complément des deux validations humaines, y compris des vérifications de présence et d'exhaustivité du signalement. Ce contrôle ne remplace jamais la décision humaine. Les deux validations humaines restent obligatoires. | [Décidé] |
| **Une même personne ne peut pas assurer les deux validations.** | [Décidé] |
| **Une nouvelle double validation est requise pour chaque export.** | [Décidé] |

### 6.3 Destinataires

| Règle | Statut |
|---|---|
| Toute organisation peut être examinée **au cas par cas,** après vérification de son identité, de sa fiabilité, de sa sécurité, de sa confidentialité, de sa finalité et de ses garanties. | [Décidé] |
| **Garanties insuffisantes : refus.** | [Décidé] |

### 6.4 Obligations du destinataire

| Règle | Statut |
|---|---|
| Utilisation **exclusivement pour la finalité autorisée.** | [Décidé] |
| **Interdiction de réidentification.** | [Décidé] |
| **Interdiction de transmission ultérieure** sans nouvelle autorisation. | [Décidé] |
| Protection des fichiers. | [Décidé] |
| Suppression à la fin de la finalité. | [Décidé] |
| Acceptation des conditions de vérification. | [Décidé] |
| **Si le destinataire refuse ces obligations, l'export est interdit.** | [Décidé] |
| **En cas d'incident grave, les exports concernés sont suspendus** jusqu'au contrôle. | [Décidé] |

### 6.5 Finalités autorisées

| Règle | Statut |
|---|---|
| Recherche, évaluation pédagogique, amélioration du produit, et études qui contribuent directement à l'amélioration d'Élan. | [Décidé] |
| **Aucun intérêt commercial** sans lien avec ces finalités. | [Décidé] |

### 6.6 Trace d'export

| Règle | Statut |
|---|---|
| **Contenu :** date, identifiant d'opération, identifiants des deux validateurs, finalité, destinataire, catégories de statistiques exportées, résultats des contrôles, décision. | [Décidé] |
| **Aucune copie du fichier exporté ni contenu des statistiques** dans la trace. | [Décidé] |
| **Durée :** selon le besoin réel d'audit et les obligations applicables, documentée par catégorie, avec suppression automatique. **Aucune durée de 12 mois imposée automatiquement.** | [Décidé] |
| Valeurs des durées par catégorie | **[À compléter]**, puis [À vérifier] |

### 6.7 Outil d'export [Conception]

L'outil :

- refuse toute donnée non agrégée ;
- exécute les contrôles de recoupement ;
- effectue un contrôle automatique préalable du signalement des périodes incomplètes et des ruptures de série (§6.1), en complément des deux validations humaines, sans jamais les remplacer (§6.2) ;
- vérifie que les deux validateurs sont des personnes distinctes ;
- enregistre l'acceptation des obligations par le destinataire ;
- produit la trace d'export.

---

## 7. Publication externe des résultats

| Règle | Statut |
|---|---|
| Toute publication externe de résultats demande une **autorisation spécifique et préalable d'Élan.** | [Décidé] |
| **Portée :** cette exigence s'applique à toutes les publications externes, qu'elles soient réalisées par Élan lui-même ou par les destinataires d'un export. | [Décidé] |
| Cette autorisation est **distincte de l'autorisation de recevoir l'export.** | [Décidé] |
| **Responsabilités :** une personne autorisée accorde l'autorisation de publication ; elle vérifie l'honnêteté de la présentation des estimations et leur distinction avec les mesures réellement observées. Une personne distincte contrôle le signalement, sa discrétion et les risques de comparaison ou d'isolement du point d'entrée devenu sensible, selon le rôle du second validateur d'export (§6.2). La décision de publier et le contrôle du risque restent deux responsabilités distinctes. | [Décidé] |
| **Cumul des fonctions :** aucune séparation supplémentaire n'est imposée entre la validation des événements après reclassement (M2 §12.1), la validation des exports et l'autorisation ou le contrôle des publications. Une même personne peut exercer plusieurs de ces fonctions, sous réserve des séparations déjà prévues : deux validateurs distincts pour un même export (§6.2), et deux personnes distinctes pour autoriser et contrôler une même publication. | [Décidé] |
| Toute publication externe de résultats qui couvrent une période incomplète ou une rupture de série résultant d'un reclassement, d'une suspension, d'une purge ou d'une adaptation d'événements (M2 §12.1) la signale, et présente toute estimation comme une estimation, jamais comme une mesure réellement observée (§3). Le signalement ne révèle jamais le point d'entrée devenu sensible et ne permet jamais de l'isoler. | [Décidé] |
| **Trace d'autorisation de publication :** toute autorisation de publication fait l'objet d'une trace, sur le modèle de la trace d'export (§6.6). Contenu : date, identifiant d'opération, identifiants de la personne qui a autorisé et de la personne qui a contrôlé, finalité, destinataire ou support, résultats des contrôles, notamment celui du signalement, décision. | [Décidé] |
| **Aucune copie de la publication** dans la trace. | [Décidé] |
| Durée de conservation de la trace d'autorisation de publication | **[À compléter]** |

---

## 8. Articulation avec M2 et R15

### 8.1 M2 prévaut pour la classification des entrées sensibles [Décidé]

- Aucune statistique issue d'une entrée sensible.
- Aucun événement relatif à la navigation vers une entrée sensible.
- Aucune collecte permettant de reconstituer la consultation d'un sujet sensible.
- **En cas de reclassification vers « sensible »** (M2 §12.1) :
  - **Arrêt immédiat :** les événements communs susceptibles de révéler, même indirectement, le passage par le point d'entrée reclassé ou la navigation vers celui-ci sont immédiatement suspendus ou neutralisés. En cas de doute sur le caractère révélateur d'un événement commun ou spécifique, ou lorsque son caractère non révélateur n'est pas suffisamment établi, cet événement est suspendu par précaution jusqu'à son examen et sa validation humaine. Seuls les événements dont le caractère non révélateur ne fait aucun doute ne sont pas suspendus du seul fait du reclassement ; les événements révélateurs, douteux ou dont le caractère non révélateur n'est pas suffisamment établi restent soumis à la suspension préventive définie par M2 §12.1.
  - **Aucun enregistrement :** un événement suspendu n'est pas enregistré, n'est pas mis en attente localement, n'est pas envoyé ultérieurement et ne peut pas être réintroduit après la validation.
  - **Refus par le serveur :** tout événement d'un type suspendu reçu pendant la suspension est refusé et n'est pas enregistré, même s'il a été produit avant le reclassement. Cette règle couvre les appareils hors ligne, les transmissions retardées et les contenus conservés en cache.
  - **Preuve du refus :** le bon fonctionnement des mécanismes de refus est démontré par une preuve de conception ; aucun journal ni compteur dédié n'enregistre les refus individuels. Les journaux techniques ordinaires restent minimisés et ne permettent ni d'identifier le point d'entrée sensible ni de relier un compte à celui-ci (M2 §12.1).
  - **Événements spécifiques rattachés :** ceux dont le rattachement au point d'entrée est documenté sont purgés, et leur émission cesse.
  - **Purge :** si l'isolation fiable est impossible, tous les événements statistiques détaillés de l'expérience concernée encore conservés sont purgés, quelle que soit leur date, sans modifier les durées de conservation du §3.
  - **Agrégats :** ils sont examinés séparément, et ceux qui permettent encore d'isoler le point d'entrée reclassé sont supprimés. Après une restauration, les agrégats restaurés qui permettent encore d'isoler le point d'entrée reclassé sont supprimés avant leur remise à disposition (M2 §12.1 ; L1 §6).
  - **Réexamen :** les événements communs et spécifiques de l'expérience sont réexaminés. Tout événement révélateur est supprimé ou adapté. Une forme adaptée reçoit un nouvel identifiant de type.
  - **Validation humaine :** une personne habilitée valide obligatoirement la conformité d'un événement avant sa reprise ou avant la republication. Les contrôles automatiques peuvent compléter cette validation, mais ne la remplacent jamais. Un événement suspendu ne reprend qu'après cette validation, dans sa forme d'origine ou adaptée. Avant republication, chaque événement de l'expérience est validé, adapté puis validé, ou supprimé.
  - **Période intermédiaire :** le point d'entrée reclassé est masqué et désactivé jusqu'à la republication ; la partie générale peut rester accessible dès le reclassement ; seuls ses événements dont le caractère non révélateur ne fait aucun doute continuent d'être émis, les autres sont suspendus (M2 §12.1).
  - **Événements jugés révélateurs après coup :** les occurrences enregistrées depuis le reclassement sont purgées, l'émission cesse sous la forme révélatrice, et les occurrences antérieures de cet événement relèvent du périmètre de purge (M2 §12.1).
  - **Délai :** le réexamen des événements est achevé dans un délai maximal de 14 jours calendaires à compter du reclassement ; son dépassement entraîne une escalade, jamais une reprise ni une republication automatique (M2 §12.1).
  - **Non-réintroduction :** les événements différés, suspendus ou issus d'un contenu en cache ne doivent pas pouvoir réintroduire des données purgées ou non enregistrées, y compris après la reprise.
  - **Signalement :** les périodes incomplètes et les ruptures de série résultant d'un reclassement, d'une suspension, d'une purge ou d'une adaptation d'événements sont signalées dans les agrégats, exports et publications. Toute estimation est présentée comme une estimation, jamais comme une mesure réellement observée. Le signalement ne révèle jamais le point d'entrée devenu sensible et ne permet jamais de l'isoler (§3, §6.1, §7).
  - **Trace :** la purge doit pouvoir être réappliquée après une restauration, à l'aide d'une trace technique minimale sans donnée personnelle. Cette trace est conservée uniquement tant que des sauvegardes contenant les événements purgés restent restaurables, dans la limite maximale de 30 jours à compter de la fin effective de la purge (M2 §12.1). Toute sauvegarde contenant les événements statistiques purgés cesse d'être restaurable au plus tard à l'expiration de ce délai ; la trace n'est jamais conservée au-delà, y compris pour une enquête (M2 §12.1).
  - **Protection de la trace :** les garanties de R15 D32 à D35 s'appliquent à la trace de purge statistique (M2 §12.1).
  - Aucune de ces étapes n'entraîne d'ajout d'identifiant de point d'entrée ni de collecte supplémentaire.
  - Aucune promesse de suppression des données déjà irréversiblement anonymisées.

### 8.2 R15 prévaut pour la progression et les données pédagogiques [Décidé]

- Les statistiques d'utilisation ne sont pas de la progression.
- Aucune réponse, erreur ou réflexion individuelle n'est conservée dans M7.
- Les règles de suppression et de sauvegarde de R15 restent applicables à leurs propres données.

**Conséquence de conception [Conception ; À vérifier] :** puisque les événements M7 ne sont jamais liés au compte, la réinitialisation (R15 D13) et la suppression du compte n'ont pas d'événement M7 à retrouver. Cela suppose qu'il n'existe effectivement aucune liaison, ce qui devra être vérifié.

---

## 9. Articulation avec le référentiel, le document fondateur et les piliers

| Document | Articulation |
|---|---|
| **Référentiel global** | §9.1 : minimisation, accès limité, durée justifiée, traçabilité. §4.8 : aucune impression de surveillance continue. §6.1 : qualification des sources pour les études publiées. |
| **Document fondateur** | §2.3 : l'adaptation « en fonction de l'utilisation » ne repose jamais sur les statistiques M7. |
| **P2 — Entrepreneuriat** | §6 : les indicateurs 2 (retour aux outils sous 30 jours) et 3 (réutilisation d'un outil à l'autre) sont incompatibles avec M7, qui prévaut. L'indicateur 1 n'est compatible que s'il est mesuré par un événement de terminaison, sans lire le contenu du dossier. |
| **P1, P3, P4, P5** | Aucune statistique issue de leurs entrées sensibles (M2). Pour les simulations de P3, ni contenu ni réponse dans M7. |

---

## 10. Points restant à traiter

### 10.1 Paramètres à compléter [À compléter]

- Les durées de conservation par catégorie d'événements.
- La durée de la période d'analyse et des événements détaillés.
- Les périodes d'agrégation par statistique.
- Le calendrier de mise à jour.
- La valeur du minimum commun d'anonymisation et les cas d'exigence renforcée.
- La durée des journaux d'accès aux statistiques.
- Les durées des traces d'export par catégorie.
- La durée de conservation de la trace d'autorisation de publication (§7).
- Le régime des retours qualitatifs volontaires.

### 10.2 Exigences techniques [Conception ; À vérifier]

- La justification et les modalités de l'identifiant de session, limité à une seule expérience.
- L'impossibilité de relier des événements de plusieurs expériences.
- L'absence de liaison avec le compte et d'identifiant persistant.
- Le schéma d'événement fermé et les tests associés.
- L'exclusion des entrées sensibles et de la navigation vers elles.
- L'agrégation, le masquage et les contrôles de recoupement.
- La purge en cas de reclassification : purge des événements spécifiques rattachés, purge de tous les événements détaillés de l'expérience à défaut d'isolation fiable, et vérification du résultat.
- L'identification des agrégats qui permettent encore d'isoler le point d'entrée reclassé.
- L'identification, au moment du reclassement, des événements communs révélateurs, qui sont suspendus ou neutralisés, et des événements communs ou spécifiques douteux, qui sont suspendus par précaution, ainsi que leur suspension ou neutralisation immédiate sur l'appareil et sur le serveur. Les événements spécifiques dont le rattachement au point d'entrée reclassé est documenté ne sont pas suspendus : ils relèvent de la purge et de l'arrêt de leur émission (autres points de cette liste et M2 §12.1).
- L'absence de toute mise en attente locale et de tout envoi ultérieur d'un événement suspendu.
- Le refus côté serveur de tout événement d'un type suspendu reçu pendant la suspension, même produit avant le reclassement, y compris depuis un appareil hors ligne, une transmission retardée ou un contenu en cache.
- Le refus, après la reprise, des événements produits avant celle-ci, malgré l'arrondi des horodatages et l'imprécision des horloges des appareils.
- L'arrêt de l'émission des événements spécifiques rattachés, y compris depuis un contenu conservé en cache.
- Le réexamen des événements communs et spécifiques, et le blocage de la reprise et de la republication tant qu'une personne habilitée n'a pas validé leur conformité, sans contournement possible par un contrôle uniquement automatisé.
- Les modalités techniques du signalement des périodes incomplètes et des ruptures de série, au niveau de l'expérience et de la période, qui doivent garantir qu'il ne révèle pas le point d'entrée devenu sensible et ne permet pas de l'isoler, et la distinction entre estimations et mesures réellement observées.
- La trace de purge statistique sans donnée personnelle, sa suppression dans le délai prévu et la réapplication de la purge après une restauration.
- La purge des occurrences émises pendant la période intermédiaire puis jugées révélatrices, le refus durable de leur forme révélatrice, et la distinction technique avec une éventuelle forme adaptée, émise sous un nouvel identifiant de type.
- La référence temporelle des événements (production ou réception) et les dimensions des agrégats nécessaires à l'examen des agrégats restaurés (L1 §6).
- Le rétablissement des suspensions et des réglages de refus après toute restauration.
- Des minuteurs de délai de réexamen sans aucun effet sur la suspension ni sur la reprise des événements.
- Le contrôle automatique préalable du signalement par l'outil d'export, son efficacité, et l'impossibilité qu'il se substitue aux deux validations humaines.
- La production et la protection de la trace d'autorisation de publication.
- La preuve de conception des mécanismes de refus, sans journal ni compteur dédié aux refus individuels.
- L'application à la trace de purge statistique des garanties de R15 D32 à D35 : accès, intégrité, anomalies, vérification indépendante.
- L'outil d'export et la vérification de la séparation des validateurs.
- La séparation entre événements d'erreur statistiques et journaux techniques ordinaires.

### 10.3 Vérifications juridiques [À vérifier]

- La base juridique de la mesure d'usage et la nécessité éventuelle d'un consentement.
- La notion de statistiques « suffisamment anonymisées » au sens juridique.
- Les durées de conservation par catégorie.
- Le cadre contractuel des exports et les éventuels transferts hors de l'Union européenne.
- Les conditions de publication par des tiers.
- Le régime juridique des retours qualitatifs volontaires.
- L'analyse d'impact relative à la protection des données (AIPD) (référentiel §9.5).

### 10.4 Organisation [À vérifier]

- **Validateurs des exports :** la capacité à désigner **deux validateurs distincts** pour chaque export. Si cette condition ne peut pas être remplie, aucun export n'est possible.
- **Autorisation et contrôle des publications :** la capacité à désigner une personne autorisée à accorder l'autorisation de publication, qui vérifie aussi l'honnêteté de la présentation des estimations, et une personne distincte chargée du contrôle du signalement, de sa discrétion et des risques (§7). Tant que ces deux fonctions ne peuvent pas être assurées par deux personnes distinctes, aucune autorisation de publication ne peut être accordée.
- **Revue de l'anonymisation :** la revue humaine des cas d'anonymisation à risque.
- **Personnes habilitées à valider les événements après reclassement :** la capacité à désigner des personnes habilitées pour valider la conformité des événements après un reclassement (M2 §12.1). Tant que cette validation n'est pas assurée, les événements suspendus ne reprennent pas et l'expérience n'est pas republiée. Le profil précis de ces personnes (niveau d'habilitation, responsabilités, éventuelle séparation avec les concepteurs des événements) reste à définir lors de la conception.
- **Responsable destinataire des escalades :** la capacité à désigner un responsable destinataire des escalades lorsque le délai de réexamen de 14 jours calendaires est dépassé, chargé de mobiliser une personne habilitée pour la validation (M2 §12.1).
