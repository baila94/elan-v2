# AI1 — Aide immédiate

- **Statut :** ce document consolide les décisions validées relatives au service d'aide immédiate ; les points non arbitrés y restent explicitement indiqués comme ouverts.
- **Date de consolidation :** 9 novembre 2026.
- **Portée :** projet Élan v2 (`elan-v2`).
- **Documents liés :** C1 (`docs/decisions/C1-catalogue-contenus-points-entree.md`), M2 (`docs/decisions/M2-reference-sujets-sensibles.md`), M7 (`docs/decisions/M7-statistiques-utilisation.md`), R15 (`docs/decisions/R15-modele-pedagogique-progression-donnees.md`), I1 (`docs/decisions/I1-identite-acces-cloisonnement.md`), L1 (`docs/decisions/L1-cycle-de-vie-des-donnees.md`), documents de référence de `docs/reference/`.

---

## 0. Statut, sources et légende

Ce document consigne les décisions validées sur le service d'aide immédiate, dont les arbitrages AI-1, AI-2 et AI-3. Les formulations sont des restitutions structurées. Un écart avec un autre document est signalé et arbitré explicitement, jamais tranché silencieusement (référentiel global §12.1).

| Statut | Sens |
|---|---|
| **[Décidé]** | Arbitrage validé par le fondateur |
| **[Renvoi]** | Règle définie dans un autre document, appliquée sans être recopiée |
| **[Explicatif]** | Formulation qui décrit ou précise, sans créer de règle |
| **[Ouvert]** | Point technique ou organisationnel non décidé |

---

## 1. Finalité et principes

| Règle | Statut |
|---|---|
| L'aide immédiate est un service transversal qui oriente rapidement l'utilisateur lorsqu'il rencontre une situation nécessitant une aide concrète ou urgente. | [Renvoi] référentiel §5.1 |
| L'accès à l'aide immédiate n'est retardé par aucun diagnostic, questionnaire ou activité pédagogique. | [Renvoi] référentiel §5.1 |
| Les entrées directes prévues par les piliers comprennent notamment : « Je suis victime d'une fraude » et « Je n'arrive plus à rembourser » ; les situations de harcèlement, de danger ou de détresse au travail ; les difficultés graves d'une entreprise. | [Renvoi] P4 §6.1 ; P3 D6, D8, §7 ; P2 §7 (principe 8) |
| L'entrée « Je n'arrive plus à rembourser » est une entrée commune, accessible depuis P1 et P4. | [Décidé] arbitrage transversal 2 (FR1, 11 novembre 2026) |
| Les numéros et ressources sont contextualisés selon la situation et l'urgence ; ils ne sont pas présentés comme une liste indifférenciée. | [Renvoi] P3 D6 |
| Aucune preuve n'est exigée pour accéder aux premières informations. | [Renvoi] P3 D6 |
| L'aide ne culpabilise pas la personne et ne promet pas de solution automatique. | [Renvoi] P4 §6.1 |

---

## 2. Accès et disponibilité

| Règle | Statut |
|---|---|
| Le service est accessible dès l'écran d'accueil, **sans compte et sans condition d'âge.** | [Décidé] ; [Renvoi] I1 §2, §8 ; C1 §8, §9 |
| Il reste accessible **hors ligne**, y compris après l'expiration de l'état opérationnel en cache. | [Décidé] ; [Renvoi] C1 §7, §9 |
| Pour un utilisateur connecté, il reste accessible depuis l'application, indépendamment de tout point d'entrée et de l'état opérationnel. | [Renvoi] M2 §8, §12.1 ; C1 §9 |
| Les contenus d'aide immédiate restent consultables hors ligne (§9). | [Décidé] |
| Le fonctionnement du service ne dépend pas de l'IA. | [Décidé] ; [Renvoi] référentiel §5.1, §10 ; M2 §11 |

---

## 3. Séparation avec les autres services d'Élan

| Règle | Statut |
|---|---|
| Le service ne donne accès ni à la progression, ni aux dossiers, ni aux outils personnalisés, ni à l'abonnement. Un lien vers une autre fonctionnalité mène à la création de compte. | [Décidé] ; [Renvoi] I1 §2 ; C1 §8 |
| L'aide immédiate est distincte du moteur d'alertes. | [Renvoi] référentiel §4.8, §5.2 ; P3 §7 ; P4 §6.2 |
| Le service d'aide immédiate ne diffuse pas son contenu par notification et ne produit aucune notification liée à sa consultation. | [Décidé] ; [Renvoi] AI-1 |
| L'aide immédiate est distincte des contenus pédagogiques, des parcours et des outils. Un parcours guidé oriente vers l'aide immédiate en cas d'urgence. | [Renvoi] référentiel §4.7 ; C1 §6 |

---

## 4. Confidentialité et données exclues

| Règle | Statut |
|---|---|
| **Aucun événement ni statistique d'utilisation du service n'est enregistré au lancement,** y compris pour les pages non sensibles. Aucun événement de consultation n'est émis, mis en attente, transmis ou conservé. | [Décidé] AI-1 |
| Aucune progression n'est liée à l'utilisation du service. | [Décidé] ; [Renvoi] R15 §9 |
| Aucune donnée de consultation ni historique de navigation n'est conservé dans Élan. | [Décidé] AI-2 |
| L'aide immédiate ne demande aucune identification et n'en effectue aucune ; elle ne crée ni session ni identifiant persistant. | [Décidé] ; [Renvoi] I1 §2 |
| Aucune requête liée à l'aide ne porte de jeton de compte, même pour un utilisateur connecté ; Élan ne rattache pas l'utilisation de l'aide à un compte. | [Décidé] |
| Le téléchargement des paquets de contenus peut exposer des métadonnées techniques de connexion, notamment l'adresse IP et l'heure. Ces métadonnées sont soumises aux règles de minimisation des journaux techniques ordinaires et au registre des données. | [Décidé] ; [Renvoi] R15 A9, D1 ; L1 §3 |
| Le service n'est pas présenté comme anonyme de manière absolue : il garantit l'absence d'identification et de rattachement par Élan, pas l'absence de toute métadonnée réseau. | [Décidé] |
| Écran masqué dans le sélecteur d'applications et captures d'écran bloquées lorsque le système le permet | [Renvoi] M2 §8 ([Conception]) |

---

## 5. Sortie rapide et limites

| Règle | Statut |
|---|---|
| **Un bouton de sortie rapide est présent** dans le service. | [Décidé] AI-2 |
| **Aucune trace de navigation n'est conservée dans Élan.** | [Décidé] AI-2 |
| La sortie rapide et l'absence d'historique concernent uniquement les traces produites par Élan. Élan ne peut pas effacer l'historique d'un navigateur externe, l'historique des appels ou des SMS, les journaux du système, la liste des applications récentes, les suggestions du clavier, les notifications du système ni les traces d'autres applications. | [Explicatif] (limite) |
| Comportement et destination exacte du bouton de sortie rapide | [Ouvert] |
| Information de l'utilisateur sur les limites de la discrétion : principe et forme | [Ouvert] |

---

## 6. Contenus, vérification et date affichée

| Règle | Statut |
|---|---|
| Les contenus d'aide immédiate sont rédigés, vérifiés et approuvés sous responsabilité humaine avant publication. Le fonctionnement du service ne dépend pas de l'IA. | [Renvoi] référentiel §5.1 ; P3 D6 ; P4 §6.1 ; C1 §9 |
| **Chaque contenu affiche « Vérifié le … ».** | [Décidé] AI-3 |
| Cette date correspond à la **dernière vérification humaine réelle** du contenu, et non à sa date de publication ni à celle de son téléchargement. | [Décidé] AI-3 |
| Les contenus distinguent les obligations, les recommandations, les possibilités et les limites ; ils orientent vers un interlocuteur compétent lorsque la situation l'exige. | [Renvoi] référentiel §3.3 ; P3 D6 |

---

## 7. Contenus dont la date de revue est dépassée

| Règle | Statut |
|---|---|
| Les contenus d'aide immédiate **ne sont pas retirés automatiquement** lorsque leur date de revue est dépassée ; ils restent accessibles, y compris sans compte et hors ligne. | [Renvoi] C1 §9 (arbitrage 5) |
| Le dépassement déclenche une **revue prioritaire obligatoire** et une **escalade** en cas de retard. | [Renvoi] C1 §9 (arbitrage 5) |
| La revue prioritaire ne s'appuie sur aucune statistique d'utilisation. | [Décidé] AI-1 |
| Un contenu en retard de revue conserve sa date « Vérifié le … » d'origine, qui permet à l'utilisateur d'en apprécier la fraîcheur. | [Explicatif] (conséquence d'AI-3) |
| Délai de la revue prioritaire, destinataire et rythme de l'escalade | [Ouvert] ; [Renvoi] C1 §16.2 |

---

## 8. Points sensibles et reclassification

| Règle | Statut |
|---|---|
| Les points d'entrée de l'aide immédiate sont classés selon les mêmes critères que les autres ; l'accès à l'aide reste garanti quelle que soit la classification. | [Renvoi] M2 §8 |
| Les points sensibles sont traités de manière éphémère : aucune conservation durable, aucun événement de progression, aucune utilisation de l'IA. | [Décidé] ; [Renvoi] M2 §8, §11 ; R15 O4, A4 |
| Une information sensible communiquée spontanément n'est ni conservée, ni transmise à un tiers, ni transmise à une IA. | [Renvoi] M2 §9 |
| Un reclassement ne rend jamais le service général d'aide immédiate inaccessible. Le contenu ou le point d'entrée reclassé est neutralisé dans toutes ses utilisations ; aucun autre chemin ne permet de le retrouver. | [Décidé] ; [Renvoi] M2 §12.1 ; C1 §5, §8, §9 |
| Si la neutralisation effective ne peut pas être garantie, le blocage de repli obligatoire s'applique au contenu ou au parcours d'aide qui contient le point reclassé. Il ne s'étend jamais au service général d'aide immédiate. | [Décidé] ; [Renvoi] M2 §12.1 |
| Un appareil durablement hors ligne ne reçoit la neutralisation qu'à sa reconnexion. Cette limite ne concerne que l'affichage : l'aide ne produit ni données, ni événements, ni progression. | [Explicatif] (limite) ; [Renvoi] M2 §12.1 |

---

## 9. Téléchargement, versionnement et fonctionnement hors ligne

| Règle | Statut |
|---|---|
| La décision porte sur l'**accès aux contenus d'aide immédiate hors ligne** : ces contenus sont disponibles sur l'appareil sous forme de paquets. | [Décidé] |
| Les autres fonctions du service ne sont pas nécessairement autonomes ni intégralement locales ; leurs modalités techniques restent à préciser. | [Ouvert] |
| **Le téléchargement des paquets est déclenché indépendamment de l'ouverture ou de la consultation du service**, afin de ne révéler ni l'utilisation du service ni les contenus consultés. | [Décidé] |
| Les paquets sont versionnés. | [Décidé] |
| Avant remplacement, le nouveau paquet est vérifié ; en cas d'échec, le paquet précédent reste en place. | [Décidé] ; modalités [Ouvert] |
| Un appareil hors ligne peut conserver un ancien paquet jusqu'à sa reconnexion ; cette limite n'est pas supprimée techniquement. La date « Vérifié le … » permet d'en apprécier la fraîcheur. | [Explicatif] (limite) |
| Format, taille et contrôle d'intégrité des paquets ; fréquence de vérification des mises à jour | [Ouvert] |

---

## 10. Responsabilités éditoriales et contrôles humains

| Règle | Statut |
|---|---|
| Rédaction, vérification et approbation sous responsabilité humaine avant publication | [Renvoi] référentiel §5.1 ; C1 §9, §11 |
| Revue prioritaire et escalade | [Renvoi] C1 §9 (arbitrage 5) |
| Classement des points d'entrée et contrôle avant publication | [Renvoi] M2 §5, §6 ; C1 §11 |
| Rôles internes chargés de la rédaction, de la vérification et de la revue prioritaire | [Ouvert] ; [Renvoi] C1 §16.2 |

---

## 11. Cycle de vie des données

| Règle | Statut |
|---|---|
| Les contenus d'aide immédiate ne sont pas des données personnelles ; ils relèvent des sauvegardes longues. L'identité des validateurs est conservée séparément, en sauvegarde courte. | [Renvoi] L1 §3, §6 ; C1 §5, §14 |
| Aucune donnée de consultation n'est enregistrée, émise, mise en attente ou transmise : ni événement, ni historique de navigation, ni donnée permettant de rattacher la consultation à un compte. Les traitements temporaires strictement nécessaires à l'affichage et à l'orientation ne constituent pas une conservation de données de consultation. | [Décidé] AI-1, AI-2 ; §4 |
| Les connexions nécessaires au téléchargement des paquets peuvent produire des métadonnées techniques, notamment l'adresse IP et l'heure. Ces métadonnées peuvent constituer des données personnelles ; elles restent soumises aux règles ordinaires de minimisation, de conservation et d'inscription au registre des données. | [Décidé] ; [Renvoi] R15 A9, D1 ; L1 §3 |
| Le paquet présent sur l'appareil est un emplacement des contenus, inscrit au registre des données. | [Renvoi] L1 §3 |

---

## 12. Relations avec les autres décisions

| Document | Articulation |
|---|---|
| **Référentiel global** | §3.3, §4.7, §4.8, §5.1, §5.2, §10, §12.1 |
| **Piliers** | P2 §7 (principe 8) ; P3 D6, D8, §7 ; P4 §6.1, §6.2 |
| **C1** | §5, §7, §8, §9, §11, §14, §16 |
| **M2** | §8, §9, §11, §12.1 |
| **M7** | Aucun événement d'aide immédiate (AI-1), plus strict que M7 et compatible avec lui. M7 §2, « Choix de conception » : l'abandon n'est pas comptabilisé lorsque la sortie mène vers une entrée sensible ou vers l'aide immédiate (règle de statut [Conception], également reprise en M2 §13). |
| **R15** | §9 ; O4, A4 ; A9, D1 |
| **I1** | §2 (sans compte, sans condition d'âge) ; §8 (aide immédiate non soumise à l'âge minimal) |
| **L1** | §3, §6 |
| **N1** | Document à venir ; le service d'aide immédiate ne diffuse pas son contenu par notification et ne produit aucune notification liée à sa consultation |

---

## 13. Points restant à traiter [Ouvert]

### 13.1 Points techniques

- Comportement et destination exacte du bouton de sortie rapide.
- Modalités de vérification des paquets avant remplacement et de retour au paquet précédent.
- Format, taille et contrôle d'intégrité des paquets ; fréquence de vérification des mises à jour.
- Existence et fonctionnement d'une recherche dans le service, dans le respect des règles de confidentialité du §4.
- Absence de paramètre de suivi dans les liens vers des ressources externes.
- Désactivation des suggestions du clavier dans les champs de saisie, lorsque le système le permet.
- Exclusion des écrans d'aide des rapports techniques d'erreur.
- Accessibilité, notamment pour les personnes qui ne peuvent pas téléphoner.
- Niveau de détail de l'orientation, pour qu'elle ne devienne pas un questionnaire (référentiel §4.7).

### 13.2 Points organisationnels

- Délai de la revue prioritaire, destinataire et rythme de l'escalade.
- Rôles internes chargés de la rédaction, de la vérification et de la revue prioritaire.
- Information de l'utilisateur sur les limites de la discrétion : principe et forme.

### 13.3 Points de périmètre

- Champ territorial des contenus et langues.
