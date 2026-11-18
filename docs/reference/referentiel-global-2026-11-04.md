ÉLAN — Référentiel global de travail
Architecture des piliers, fondations, moteurs communs et expériences
Version consolidée de travail — 4 novembre 2026
 
⸻
 
1. Vision générale
1.1 Positionnement
« Avec Élan, tu comprends mieux pour agir mieux et avancer dans ta vie. »
Élan doit aider chacun à :
* apprendre et comprendre des sujets utiles à sa vie ;
* mieux comprendre les situations qu’il rencontre ;
* prendre des décisions plus éclairées ;
* passer de la connaissance à l’action ;
* gagner progressivement en autonomie ;
* trouver une aide concrète lorsqu’il en a besoin.
Élan ne doit pas être uniquement une plateforme de cours, une collection de fiches ou un ensemble de simulateurs indépendants.
Sa valeur repose sur sa capacité à accompagner une personne depuis une situation concrète jusqu’à une meilleure compréhension et, lorsque c’est pertinent, jusqu’à une action ou un résultat utile.
1.2 Les cinq piliers
1. Gestion de l’argent.
2. Entrepreneuriat.
3. Travail et carrière.
4. Banque et finance.
5. Économie et société.
Les cinq piliers doivent être présents au lancement d’Élan.
Cela ne signifie pas que toutes les fonctionnalités doivent être terminées dans chaque pilier. Un pilier peut commencer avec une base pédagogique solide si aucune expérience fonctionnelle suffisamment utile n’est prête.
Il ne faut pas imposer une symétrie artificielle entre les piliers.
1.3 Expérience phare
Le terme retenu est exclusivement « expérience phare ».
Une expérience phare est un parcours cohérent qui part d’une situation concrète et conduit l’utilisateur vers un résultat utile.
Elle peut combiner :
* des contenus pédagogiques ;
* plusieurs outils ;
* un ou plusieurs moteurs communs ;
* des documents ;
* des simulations ;
* un accompagnement progressif ;
* une orientation vers une ressource extérieure ou humaine.
Une expérience phare n’est donc pas nécessairement un outil isolé.
 
⸻
 
2. Architecture générale
Élan repose sur trois catégories distinctes.
2.1 Les fondations communes
Les fondations constituent le socle partagé par les cinq piliers.
Elles permettent d’assurer une cohérence de fonctionnement, de conception, de sécurité, de maintenance et de qualité.
Elles comprennent notamment :
* les règles de conception pédagogique ;
* les règles de traitement des données ;
* les règles de sécurité et de confidentialité ;
* la gestion et la traçabilité des sources ;
* les principes éditoriaux ;
* les règles de gouvernance ;
* les règles communes de fonctionnement des moteurs.
2.2 Les moteurs communs
Un moteur commun est une capacité fonctionnelle réutilisable dans plusieurs piliers.
Il peut être utilisé dans différentes expériences, avec des règles métier et des contenus adaptés à chaque situation.
Un moteur commun ne signifie pas que toutes les expériences doivent fonctionner de manière identique.
2.3 Les outils et expériences
Un outil répond à un besoin fonctionnel précis.
Une expérience assemble, lorsque cela apporte une réelle valeur, plusieurs contenus, outils et moteurs autour d’une situation utilisateur.
Les outils peuvent être propres à un pilier ou s’appuyer sur un moteur commun.
2.4 Règle de séparation
Il ne faut pas confondre :
* une fondation, qui définit une règle ou un socle partagé ;
* un moteur, qui fournit une capacité fonctionnelle réutilisable ;
* un outil, qui répond à un besoin concret ;
* une expérience phare, qui organise plusieurs éléments autour d’un résultat utile ;
* un dossier documentaire, qui constitue une ressource de connaissance et non un moteur à lui seul.
 
⸻
 
3. Principes transversaux de conception
3.1 Partir de situations réelles
Les contenus et fonctionnalités doivent répondre à des situations que l’utilisateur peut réellement rencontrer.
Un sujet entre dans Élan s’il aide à comprendre quelque chose qui touche la vie de l’utilisateur ou une information qu’il rencontre réellement.
Les contenus abstraits ou purement encyclopédiques ne doivent pas être privilégiés lorsqu’ils ne conduisent à aucune compréhension utile.
3.2 Transformer la connaissance en action
L’utilisateur doit pouvoir :
* comprendre une situation ;
* examiner des éléments ;
* faire un choix ou réaliser une action ;
* observer les conséquences ;
* comprendre ses erreurs ;
* réutiliser ce qu’il a appris dans une autre situation.
Les expériences ne doivent pas se limiter à une explication suivie d’un quiz.
3.3 Ne pas imposer des règles artificiellement rigides
Les situations de vie sont variables.
Les contenus doivent distinguer :
* les obligations réelles ;
* les bonnes pratiques ;
* les recommandations ;
* les possibilités ;
* les exceptions et limites.
Élan ne doit pas transformer une recommandation en règle absolue.
3.4 Accessibilité et autonomie
Les explications doivent être compréhensibles sans connaissances préalables excessives.
Les outils doivent aider à comprendre, et non créer une dépendance à une recommandation automatisée.
3.5 Ne pas construire prématurément
Un moteur commun doit d’abord être construit autour d’un premier usage réel.
Sa généralisation ne doit intervenir que lorsqu’un deuxième usage confirme qu’il existe une capacité réellement réutilisable.
Il ne faut pas construire une plateforme générique complexe avant d’avoir démontré son utilité.
 
⸻
 
4. Moteurs communs
Les moteurs communs identifiés sont les suivants.
Moteur	Fonction	Premier usage / statut
Simulation d’échanges	Simuler une conversation ou une interaction	Entretien d’embauche P3 D4
Analyse documentaire	Comprendre et analyser un document fourni	Décodeur d’offre de crédit P4 D4
Diagnostic et orientation	Aider à situer une situation et identifier des pistes	Grille de diagnostic des candidatures P3 D4
Suivi et dossier	Organiser les démarches, éléments et étapes d’un dossier	Suivi des candidatures P3 D4 : usage candidat, à arbitrer
Vérification d’acteurs	Vérifier un acteur à partir de sources et registres pertinents	Vérificateur d’acteurs financiers P4 D1
Lecture et interprétation des données	Lire et interpréter des indicateurs, tableaux et graphiques	P5 D5
Parcours guidés	Organiser un cheminement progressif adapté à une situation	Premier usage non arrêté
Alertes	Signaler une information ou une évolution pertinente	Premier usage non arrêté
Simulation numérique	Effectuer des calculs à partir d’hypothèses et de paramètres	Simulation de crédit P4 : usage candidat à arbitrer
Comparaison	Comparer des options selon des critères explicites	Usages à préciser selon les expériences
4.1 Simulation d’échanges
Le moteur permet de s’entraîner à une interaction réaliste.
Il peut notamment servir :
* à un entretien d’embauche en P3 ;
* à une négociation ou une vente en P2 ;
* à une situation d’encadrement en P3.
Le premier usage identifié est l’entretien d’embauche en P3 D4.
Les échanges doivent être contextualisés. Les retours doivent aider l’utilisateur à comprendre ce qui fonctionne, ce qui peut être amélioré et pourquoi.
4.2 Analyse documentaire
Le moteur aide à comprendre un document fourni par l’utilisateur.
Premier usage stabilisé : le décodeur d’offre de crédit en P4 D4.
Il doit distinguer :
* ce qui est explicitement présent dans le document ;
* ce qui peut être interprété ;
* ce qui manque ;
* ce qui doit être vérifié ;
* les limites de l’analyse.
Il ne doit pas inventer d’informations absentes du document.
La conservation des documents n’est pas automatique.
4.3 Diagnostic et orientation
Ce moteur aide à comprendre une situation et à identifier des pistes adaptées.
Premier usage stabilisé : la grille de diagnostic des candidatures en P3 D4.
Le diagnostic et le suivi sont deux moteurs distincts. Le premier aide à comprendre la situation ; le second aide à organiser les démarches et leur progression.
4.4 Suivi et dossier
Ce moteur permet d’organiser les démarches, les pièces, les étapes et les informations utiles à un dossier.
Le suivi des candidatures en P3 D4 constitue un premier usage candidat, mais son statut doit rester à arbitrer.
Il ne faut pas présenter ce premier usage comme une décision définitive.
4.5 Vérification d’acteurs
Ce moteur aide à vérifier l’identité, le statut ou la légitimité d’un acteur à partir de sources fiables et pertinentes.
Premier usage stabilisé : vérificateur d’acteurs financiers en P4 D1.
Il doit montrer les sources, leurs dates, leur portée et leurs limites.
Une absence de résultat ne doit pas être présentée comme une preuve automatique de fraude.
4.6 Lecture et interprétation des données
Il s’agit d’un seul moteur commun, qui peut alimenter plusieurs outils.
Il couvre notamment :
* la lecture des indicateurs ;
* les tableaux ;
* les graphiques ;
* les comparaisons ;
* les évolutions dans le temps ;
* les ordres de grandeur ;
* les limites d’interprétation.
Premier usage stabilisé : P5 D5.
Un lecteur de données et un décodeur de graphiques peuvent être deux outils différents, mais ils reposent sur le même moteur.
4.7 Parcours guidés
Ils permettent d’organiser une progression cohérente à partir d’une situation ou d’un objectif.
Ils ne doivent pas devenir des questionnaires interminables ni imposer des étapes sans utilité.
Leur premier usage n’est pas encore arrêté.
Lorsqu’un parcours guidé détecte une situation potentiellement urgente, il doit orienter immédiatement vers le service d’aide immédiate, sans retarder cette orientation par des questions supplémentaires ou une étape pédagogique.
4.8 Alertes
Les alertes constituent un moteur commun, et non un service transversal.
Elles doivent respecter les règles suivantes :
* ne pas créer de fausse urgence ;
* ne pas laisser croire à une surveillance continue si elle n’existe pas ;
* rendre visible l’origine de l’information ;
* afficher la date ou la dernière mise à jour lorsque cela est pertinent ;
* distinguer une alerte informative d’une urgence réelle.
Leur premier usage reste à définir.
4.9 Simulation numérique
Le moteur permet d’effectuer des calculs à partir d’hypothèses explicites.
La simulation de crédit en P4 est un usage candidat.
Il faut distinguer :
* les formules de calcul ;
* les paramètres réglementaires ;
* les hypothèses choisies ;
* les résultats estimatifs ;
* les limites du simulateur.
La simulation ne doit pas être présentée comme une décision ou une recommandation personnalisée.
4.10 Comparaison
La comparaison doit aider l’utilisateur à comprendre les différences entre plusieurs possibilités.
Elle doit rendre visibles :
* les critères retenus ;
* les données utilisées ;
* les hypothèses ;
* les différences importantes ;
* les limites de la comparaison.
Elle ne doit pas se transformer automatiquement en classement commercial, recommandation personnalisée ou système d’intermédiation.
 
⸻
 
5. Services transversaux
5.1 Aide immédiate
L’aide immédiate est un service transversal distinct du moteur d’alertes.
Il permet d’orienter rapidement l’utilisateur lorsqu’il rencontre une situation nécessitant une aide concrète ou urgente.
Ses contenus doivent être :
* rédigés par des humains ;
* vérifiés par des humains ;
* approuvés avant publication ;
* présentés sous forme de contenus fixes et préétablis.
Les coordonnées, premiers réflexes et instructions essentielles ne doivent jamais être générés librement par une IA au moment de l’affichage.
Toute modification doit faire l’objet d’une vérification et d’une validation humaines avant publication.
L’accès à l’aide immédiate ne doit pas être retardé par un diagnostic, un questionnaire ou une activité pédagogique.
5.2 Distinction avec les alertes
L’aide immédiate est un service transversal.
Les alertes sont un moteur commun.
Les deux restent distincts.
 
⸻
 
6. Sources, documentation et maintenance
6.1 Bibliothèque commune de sources
Élan doit disposer d’une base documentaire commune permettant de retrouver les sources utilisées dans les différents piliers.
Les catégories de sources identifiées sont :
1. Autorité publique ou régulateur.
2. Institution publique ou organisme de protection.
3. Médiateur ou organisme indépendant.
4. Source scientifique ou universitaire.
5. Organisation professionnelle.
6. Source commerciale.
7. Source non vérifiée ou insuffisamment documentée.
Une source commerciale ou professionnelle ne doit pas être présentée comme une autorité publique indépendante.
6.2 Informations à conserver pour chaque source
Chaque référence doit comporter autant que possible :
* l’organisation ;
* l’URL ou la référence ;
* le domaine ;
* la catégorie de source ;
* les sujets et dimensions concernés ;
* la date de vérification ;
* la date de publication ou de mise à jour ;
* les limites et réserves ;
* les contenus, outils et expériences qui l’utilisent.
6.3 Types de mise à jour
Les sources doivent être entretenues selon leur nature :
* concepts stables ;
* règles susceptibles d’évoluer ;
* données périodiques ;
* actualités ponctuelles ;
* prévisions et estimations.
Les contenus dépendant de règles ou de données évolutives doivent pouvoir être révisés.
6.4 Responsabilité éditoriale
Une source ne suffit pas à garantir la qualité d’un contenu.
Élan doit vérifier :
* la pertinence de la source ;
* sa fiabilité ;
* son actualité ;
* son indépendance éventuelle ;
* sa portée réelle ;
* les limites de ce qu’elle permet d’affirmer.
 
⸻
 
7. Architecture des cinq piliers
7.1 P1 — Gestion de l’argent
Objectif : aider l’utilisateur à comprendre et gérer son argent au quotidien.
Le pilier couvre notamment :
* les revenus ;
* les dépenses ;
* le budget ;
* les priorités ;
* les imprévus ;
* l’épargne ;
* les décisions financières quotidiennes.
Le contenu pédagogique déjà identifié comprend un programme de 3 niveaux, 9 modules, 45 leçons, 28 fiches et 7 outils.
Les modules A1 à A3 sont validés. A4 et A5 restent à revoir. A6 à A9 restent à construire.
La règle pédagogique concernant l’épargne doit rester souple : épargner si possible, après les dépenses essentielles et les priorités. L’épargne peut être réduite ou suspendue pendant un mois difficile.
Le P1 explique les décisions de gestion quotidienne. Il ne doit pas absorber tout le champ bancaire et financier du P4.
7.2 P2 — Entrepreneuriat
Objectif : aider l’utilisateur à comprendre les étapes de création et de développement d’une activité.
Le pilier doit notamment permettre de :
* partir d’un problème réel ;
* identifier des besoins ;
* examiner ses atouts ;
* choisir une piste ;
* construire une offre ;
* chiffrer des hypothèses ;
* tester une activité ;
* comprendre les premières décisions de gestion.
Expérience candidate conservée exactement :
« de l’idée à une offre chiffrée et ses hypothèses à tester ».
Cette formulation reste une expérience candidate et ne constitue pas une validation de son périmètre fonctionnel complet.
Le simulateur d’échanges peut notamment être réutilisé pour les situations de vente.
Les difficultés d’une activité professionnelle ne doivent pas être confondues avec une situation personnelle de surendettement.
7.3 P3 — Travail et carrière
Objectif : aider l’utilisateur à construire son parcours professionnel, trouver un emploi, comprendre ses droits et évoluer.
Le pilier comporte huit dimensions :
1. Se connaître et construire son orientation professionnelle.
2. Découvrir les métiers, les formes d’emploi et le monde du travail.
3. Se former et développer ses compétences.
4. Trouver un emploi et réussir son recrutement.
5. Comprendre son contrat, ses droits et sa rémunération.
6. Prévenir et faire face aux difficultés au travail.
7. S’intégrer, réussir dans son poste et évoluer.
8. Gérer les transitions et préparer la suite de sa carrière.
Le bilan P3 corrigé et ses huit documents détaillés par dimension constituent les références métier.
L’IA ne doit jamais inventer une expérience, une compétence ou un diplôme dans un CV ou une candidature. Les informations manquantes doivent être signalées et les contenus soumis à validation de l’utilisateur.
Les documents professionnels sensibles ne sont pas conservés par défaut. Leur archivage nécessite un choix explicite de l’utilisateur.
Le premier usage stabilisé du diagnostic et de l’orientation est la grille de diagnostic des candidatures en P3 D4.
Le suivi des candidatures demeure un usage candidat du moteur de suivi et de dossier, à arbitrer.
7.4 P4 — Banque et finance
Objectif : aider l’utilisateur à comprendre les acteurs financiers, les services bancaires, le crédit, l’épargne, les investissements, les assurances et les décisions financières.
Le pilier comporte huit dimensions :
1. Comprendre les acteurs financiers et protéger son argent.
2. Choisir et utiliser ses services bancaires.
3. Défendre ses droits et faire face aux difficultés bancaires et financières.
4. Comprendre le crédit et financer ses projets.
5. Comprendre l’épargne et ses enveloppes de placement.
6. Comprendre les investissements et les marchés financiers.
7. Comprendre et choisir ses assurances.
8. Construire sa méthode de décision financière à long terme.
Le bilan P4 corrigé constitue sa référence métier.
Premiers usages stabilisés :
* vérification d’acteurs financiers en P4 D1 ;
* analyse documentaire avec le décodeur d’offre de crédit en P4 D4.
Expérience candidate conservée exactement :
« comprendre un crédit avant de s’engager ».
Elle doit notamment aider à comprendre le cumul de plusieurs mensualités et les effets des paiements fractionnés en trois ou quatre fois.
Elle ne doit pas devenir une recommandation de crédit.
Élan ne doit pas demander les identifiants bancaires, mots de passe, codes de validation ou numéros de carte bancaire pour ses outils pédagogiques.
Les fonctionnalités suivantes sont à différer :
* agrégation automatique des comptes bancaires ;
* exécution de virements ou d’opérations ;
* recommandations financières personnalisées ;
* gestion automatique du patrimoine ;
* automatisation juridique complète ;
* certification religieuse ou éthique ;
* décisions automatisées concernant le crédit ou les litiges.
7.5 P5 — Économie et société
Objectif : aider l’utilisateur à comprendre les mécanismes économiques et les transformations sociales qui influencent sa vie.
Le pilier comporte six dimensions :
1. Comprendre l’économie du quotidien.
2. Comprendre les mécanismes économiques.
3. Comprendre les finances publiques et les politiques économiques.
4. Comprendre la société et ses transformations.
5. Développer son esprit critique et lire les données.
6. Comprendre les transitions et les enjeux de demain.
Le bilan P5 corrigé constitue actuellement la référence métier principale du pilier, y compris pour ses six dimensions, puisqu’il n’existe pas encore de documents détaillés par dimension.
Le moteur commun de lecture et d’interprétation des données a son premier usage stabilisé en P5 D5.
La lecture des données et le décodage des graphiques constituent un même moteur, même si plusieurs outils peuvent être proposés.
Principes éditoriaux :
* distinguer les faits, les mécanismes, les interprétations et les choix politiques ;
* présenter les limites des indicateurs ;
* ne pas confondre corrélation et causalité ;
* ne pas présenter une catégorie statistique comme une identité ;
* ne pas tirer de conclusion causale d’un simple écart statistique ;
* ne pas arbitrer à la place de l’utilisateur un débat économique ou politique.
Le simulateur personnalisé d’inflation de l’INSEE ne doit pas être reconstruit par Élan. Le pilier doit expliquer les mécanismes et orienter vers l’outil officiel lorsque c’est pertinent.
 
⸻
 
8. Liens entre les piliers
Les piliers doivent pouvoir se compléter sans se confondre.
Sujet	Pilier principal	Liens
Budget quotidien	P1	P4 pour les produits et services bancaires
Création d’activité	P2	P1 pour les finances personnelles, P4 pour les sujets financiers
Recherche d’emploi	P3	P1 pour le budget, P5 pour les mécanismes du marché du travail
Crédit personnel	P4	P1 pour les conséquences sur le budget
Argent et création monétaire	P5	P4 pour les effets pratiques sur les services financiers
Marché du travail	P5	P3 pour le parcours individuel
Épargne salariale	P3 pour le dispositif lié à l’emploi	P4 pour les placements et enveloppes
Difficultés financières	P1 et P4 selon la situation	P2 pour les difficultés d’activité professionnelle
Données économiques	P5	Autres piliers selon le sujet
Une expérience peut mobiliser plusieurs piliers, mais chaque pilier conserve son périmètre métier.
 
⸻
 
9. Données, confidentialité et sécurité
9.1 Principes généraux
Élan doit appliquer :
* la minimisation des données ;
* la limitation des accès ;
* la confidentialité ;
* la sécurisation des documents ;
* une durée de conservation justifiée ;
* la possibilité de suppression et d’export ;
* la traçabilité des accès et opérations lorsque nécessaire ;
* une transparence sur les usages et traitements.
9.2 Données personnelles et professionnelles
Les données personnelles et professionnelles doivent rester distinctes.
Le fait qu’une personne utilise Élan pour sa carrière ne signifie pas que ses informations professionnelles peuvent être réutilisées librement dans ses finances personnelles, et inversement.
Les documents appartenant à un employeur ou concernant des tiers exigent une vigilance particulière.
9.3 Conservation des documents
Par défaut :
* pas de conservation automatique des documents sensibles ;
* pas d’archivage implicite ;
* archivage uniquement sur choix explicite de l’utilisateur ;
* information claire sur les conséquences de ce choix.
L’analyse d’un document ne suppose pas sa conservation.
9.4 Interdictions concernant les données bancaires
Les outils pédagogiques ne doivent jamais demander :
* les identifiants de connexion bancaire ;
* les mots de passe ;
* les codes de validation ;
* les codes de sécurité ;
* les numéros complets de carte bancaire.
9.5 Échelle interne de sensibilité
Cette échelle sert à organiser les protections. Elle ne constitue pas une classification juridique RGPD.
Niveau 1 — Faible
* informations publiques ;
* concepts généraux ;
* préférences non sensibles ;
* exercices fictifs.
Niveau 2 — Modéré
* hypothèses de simulation ;
* informations personnelles limitées ;
* recherches ou offres.
Niveau 3 — Élevé
* contrats ;
* relevés bancaires ;
* données patrimoniales ;
* documents professionnels ;
* dossiers de litiges.
Niveau 4 — Très élevé
* endettement détaillé ;
* difficultés financières particulièrement sensibles ;
* données de santé ;
* harcèlement ;
* situations familiales sensibles.
Les protections doivent être adaptées au niveau de sensibilité.
Une analyse d’impact relative à la protection des données (AIPD) doit être réalisée lorsque la nature des traitements et les risques le justifient.
 
⸻
 
10. Intelligence artificielle et limites
L’IA peut aider à :
* expliquer ;
* reformuler ;
* organiser des informations ;
* analyser un document fourni ;
* simuler une interaction ;
* guider une réflexion ;
* aider à lire des données.
Elle ne doit pas :
* inventer des informations personnelles ;
* fabriquer des sources ;
* transformer une hypothèse en fait ;
* masquer les incertitudes ;
* prendre une décision sensible à la place de l’utilisateur ;
* produire librement les contenus d’aide immédiate ;
* arbitrer automatiquement un débat politique ou économique ;
* certifier une conformité religieuse, juridique ou réglementaire.
Les contenus sensibles doivent être soumis à des règles de vérification et de validation adaptées.
 
⸻
 
11. Grille de conception des outils et expériences
Chaque outil ou expérience doit être examiné à partir des critères suivants.
1. Besoin utilisateur concret.
2. Situation de départ.
3. Public et contexte d’utilisation.
4. Parcours utilisateur.
5. Résultat tangible.
6. Contenus nécessaires.
7. Fondations et moteurs nécessaires.
8. Données personnelles nécessaires.
9. Niveau de sensibilité.
10. Premier usage et critère de réussite.
11. Risques juridiques, réglementaires et opérationnels.
12. Dépendances techniques.
13. Sources à maintenir.
14. Temps et coût de maintenance humaine.
15. Limites fonctionnelles.
16. Évolutions possibles après lancement.
Cette grille doit servir à évaluer les expériences candidates avant de décider de leur réalisation.
Elle ne vaut pas validation automatique de toutes les fonctionnalités envisagées.
 
⸻
 
12. Gouvernance et méthode de travail
12.1 Références documentaires
Le référentiel global gouverne :
* les fondations communes ;
* les moteurs communs ;
* les règles transversales ;
* les principes de conception ;
* les règles de sécurité et de gouvernance.
Les bilans des piliers gouvernent leur périmètre métier.
Les documents détaillés par dimension restent les références métier de leur dimension lorsqu’ils existent.
Pour P5, le bilan du pilier constitue actuellement la référence métier principale pour les six dimensions.
En cas de contradiction, il faut identifier précisément les deux formulations et arbitrer explicitement. Il ne faut pas fusionner silencieusement des décisions différentes.
12.2 Traçabilité
Il faut distinguer :
* les décisions réellement remplacées ;
* les erreurs de consolidation corrigées ;
* les décisions stabilisées ;
* les propositions ;
* les usages candidats ;
* les sujets encore ouverts.
Une erreur introduite dans un document de synthèse ne doit pas être présentée comme une ancienne décision validée.
12.3 Approbation avant réalisation
Avant toute mise en œuvre :
1. présenter le besoin ;
2. expliquer la solution proposée ;
3. exposer les conséquences ;
4. identifier les risques et dépendances ;
5. obtenir l’approbation explicite.
Aucune implémentation, dépense, connexion externe ou modification architecturale majeure ne doit être engagée sans approbation préalable.
 
⸻
 
13. État général et décisions ouvertes
13.1 Éléments consolidés
* Les cinq piliers constituent l’architecture générale.
* Les cinq piliers doivent être présents au lancement.
* L’expérience phare est l’unité de réflexion pour les parcours concrets.
* Les fondations, moteurs, outils et expériences restent distincts.
* L’aide immédiate est un service transversal.
* Les alertes sont un moteur commun.
* Le diagnostic/orientation et le suivi/dossier sont deux moteurs distincts.
* L’analyse documentaire a son premier usage stabilisé en P4 D4.
* La vérification d’acteurs a son premier usage stabilisé en P4 D1.
* La lecture et l’interprétation des données ont leur premier usage stabilisé en P5 D5.
* La simulation d’échanges a son premier usage identifié en P3 D4.
* Les règles de données, de sécurité et de confidentialité sont communes.
13.2 Éléments qui restent à arbitrer
* Premier usage définitif du moteur de suivi et dossier.
* Premier usage des parcours guidés.
* Premier usage des alertes.
* Statut définitif de la simulation numérique de crédit.
* Périmètre fonctionnel précis de chaque expérience phare.
* Ordre de réalisation des expériences.
* Périmètre exact des fonctionnalités de lancement.
* Coûts et temps de maintenance humaine.
* Dépendances techniques et réglementaires de chaque expérience.
* Proposition de lien entre difficultés d’activité professionnelle en P2 et certaines situations de difficultés financières en P4, à valider.
13.3 Prochaine étape de travail
Les bilans P3, P4 et P5 sont terminés et constituent les références métier consolidées de ces piliers.
La prochaine étape est l’inventaire du P1 — Gestion de l’argent.
Cet inventaire doit distinguer :
* les éléments déjà conçus ;
* les contenus validés ;
* les contenus publiés ;
* les fonctionnalités réellement présentes ;
* les prototypes ;
* les éléments incomplets ;
* les éléments absents ;
* les besoins à réexaminer.
Il ne doit pas entraîner de développement automatique.
 
⸻
 
Fin du référentiel global de travail — version consolidée du 4 novembre 2026.
