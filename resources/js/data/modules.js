
const modules = [
    {
        id: 1,
        activites_ids: [6],
        title: "Menaces et conflits locaux contemporains",
        description: `Le module vise la connaissance, voire la maitrise des facteurs qui déterminent l’environnement stratégique contemporain : les catégories de menace à la sécurité nationale et humaine, les sources endogènes des conflictualités et les paramètres externes, les types d’acteurs, les facteurs amplificateurs, etc..
    • Gestion des Sources et Forces d’opposition aujourd'hui
        ◦ Irrédentisme – Terrorisme
        ◦ Criminalité organisée
        ◦ Cybermenaces
    • Gestion des facteurs d’incertitude
    • L’analyse systémique des acteurs de crises contemporaines
    • Travaux dirigés`,
    },
    {
        id: 2,
        activites_ids: [3],
        title: "Connaissance du processus décisionnel",
        description: `Il s’agit de s’approprier les systèmes décisionnels de gestion de crise mis en place par les Etats ou les organisations régionales/sous régionales en charge de la gestion des crises. Le but étant de permettre une prise rapide des décisions,  une transmission fluide des ordres et  une mise en œuvre cohérente et efficace des plans
    • Le processus national de gestion de crise
    • Connaissance des structures de commandements nationaux
    • Maitrise de l’organisation du commandement territorial national
    • Connaissance des structures décisionnelles sous- régionales
    • Maitrise des plans de secours nationaux.
    • Travaux dirigés. `,
    },
    {
        id: 3,
        activites_ids: [6],
        title: "Doctrine et Concept militaires d’emploi des forces.",
        description: `Dans le contexte militaire, les concepts constituent d’une part des outils de compréhension et de représentation d’un situation et d’autres part des cadres  de développement  des approches retenues en vue de mettre en œuvre les forces. Cette approche quant à elle est fondée et  validée par les éléments doctrinaux. Concepts et doctrines constituent donc des préalables à toute réflexion stratégique et opérationnelle  pour laquelle ils constituent des axiomes, des postulats`,
    },
    {
        id: 4,
        activites_ids:[6],
        title: "approche capacitaire : FORMAT D’ARMEE",
        description: `Une prise en compte efficace des menaces avérées et potentielles, le choix d’une posture stratégique, la participation aux alliances et coalition stratégiques exigent pour les Etats de se doter des capacités en quantité et qualité adéquates à mesure d’agir partout et en tout temps dans les spectres de sollicitations. 
L’approche capacitaire vise à faire appréhender le processus de développement des forces basé sur les capacités (PAC : planification axée sur les capacités/Capability-based-planification)
    • Réflexions stratégiques et Programmation militaire
    • Méthodologie d’analyse et d’anticipation des crises
    • Construction d’une capacité militaire
    • Spécificité terre dans l’approche capacitaire
    • Spécificité air dans l’approche capacitaire
    • Spécificité mer dans l’approche capacitaire
    • Spécificité gendarmerie dans l’approche capacitaire
    • Travaux dirigés.`,
    },
    {
        id: 5,
        activites_ids: [6],
        title: " Approche technologique dans les affaires militaires",
        description: `Facteurs déterminants des stratégies opérationnelles, l’acquisition et la mise en œuvre de la technique et de la technologie deviennent des impératifs pour les systèmes de défense et de sécurité.  Il s’agira de décrire le rôle et les enjeux de l’emploi de la technologie dans la production des effets, l’anticipation, la protection des forces et la précision
    • Revolution dans les affaires militaires et approche technologique de la stratégie
    • Utilisation militaire des drones
    • Protectionet l’assistance au combattant
    • Utilisation et risques du cyberespace au combat.
    • Travaux dirigés`,
    },
    {
        id: 6,
        activites_ids: [3, 6],
        title: " veille et enseignement des opérations",
        description: `Il s’agit pour un théâtre donné, d’identifier et de maitriser les facteurs déterminants de l’environnement stratégique dans le but d’identifier les indices de survenance, aggravation, ou mutation d’une crise. Ce module développe le sens de l’anticipation et de la prospective utiles à nos armées.
    • Appropriation d’une zone d’intérêt
    • Méthode de veille stratégique/opérative
    • Travaux dirigés.`,
    },
    {
        id: 7,
        activites_ids: [3, 4, 2],
        title: "techniques et réflexions d’état-major",
        description: `Il est question de former les cadres des Etats-Major sur les techniques d’analyse des problématiques, de synthèse des études ainsi  que sur la rédaction des documents divers d’Etat-Major. Le but de permettre une fluidité de circulation des informations, afin de pour faciliter a prise des décisions

    • Méthodologie d’exploitation et d’opérationnalisation de l’information
    • Méthodologie d’analyse et de synthèse opérationnelles
    • Méthodologie de la fiche décisionnelle
    • Méthodologie d’une SIA (Séance InterActive)
    • Travaux dirigés`,
    },
    {
        id: 8,
        activites_ids: [4, 2],
        title: "les fonctions opérationnelles principales en planification des opérations",
        description: `Ce module se propose de présenter les fonctions opérationnelles principales et les effets qui découlent de la combinaison dynamique de  leurs capacités opérationnelles en vue d’exercer un rôle particulier contribuant à l’action militaire
    • La fonction renseignement – ISR
    • La fonction logistique
    • Les opérations militaires d’influence
    • La fonction commandement
    • La fonction SIC `,
    },
    {
        id: 9,
        activites_ids: [3, 6],
        title: " l’anticipation stratégique dans la gestion des crises sécuritaires",
        description: `    • Analyse de la structure et du fonctionnement de l’EMA national,
    • Organisation d’un EMA – MEP d’un Groupe d’anticipation stratégique (GAS)
    • Méthodologie des dossiers thématiques d’anticipation stratégiques (DTA)
    • Processus d’élaboration des Directives Annuelles de Renseignement (DAR), 
    • Processus d’élaboration des Directives Annuelles de Planification des opérations (DAP), 
    • Processus d’élaboration des Directives Annuelles d’Instruction des Armées (DAI), 
    • Processus d’élaboration des Directives Annuelles des Relations Internationales des Armées (DARI).
    • Travaux dirigés.`,
    },
    {
        id: 10,
        activites_ids: [3, 6],
        title: `l’approche globale (AG) – résolution des crises en multisectoriels intégrés`,
        description: `L'action militaire de la conception à la planification ne peut plus aujourd'hui s'appréhender de façon isolée mais dans un contexte beaucoup plus large de la gestion globale des crises mêlant à la fois politique, diplomatie, économie, information dans les modes opératoires utilisés.
Ce module est un complément indispensable à l'apprentissage de la conception et la planification des opérations interarmées
    • Présentation de l’approche globale : problématiques liées.
    • Analyse de la politique de défense nationale – réponse globale aux crises – identification des options sectorielles.
    • Analyse des planifications stratégiques et identification des objectifs stratégiques sectoriels
    • Identification de la contribution militaire dans une planification intégrée (AG)
    • Mise en œuvre de l’approche globale dans la résolution d’une crise
    • Travaux dirigés`,
    },
    {
        id: 11,
        activites_ids: [3],
        title: "les travaux pré décisionnels de l’EMA : une aide à la décision du pouvoir politique",
        description: `    • Organisation de l’EMA pour la production des travaux pré décisionnels
    • Identification des EFR et des objectifs stratégiques d’une opération militaire
    • Les options stratégiques : Méthodologie d’élaboration d’un mémoire de proposition
    • Méthodologie d’élaboration de la directive de planification politico-militaire (DIP)
    • Méthodologie d’élaboration de la directive stratégique de planification militaire (DSP)
    • Travaux dirigés.`,
    },
    {
        id: 12,
        activites_ids: [3, 4, 5, 2],
        title: "la planification opérationnelle : le CEMA et les opérations",
        description: `Ce module vise à faire connaitre une méthode de gestion des situations complexes : la MGPO. Dans un contexte de gestion des crises sécuritaires de manière multidimensionnelle, la MGPO vise à mieux cerner la contribution des Forces Armées à l’Approche Globale
    • Les niveaux de planification opérationnels,
    • L’art opératif en planification opérationnelle,
    • L’analyse de mission du niveau opératif : élaboration d’un exposé d’analyse de mission (MAB)
    • L’exposé de décision des MA du niveau opératif : le Décision Brief (DB)
    • Méthodologie de rédaction d’un Concept d’Opération stratégique (CONOPS)
    • Méthodologie d’élaboration d’un Plan d’Opération Stratégique (OPLAN)
    • Méthodologie de rédaction d’un Concept d’Opération Opératif 
    • Méthodologie d’élaboration d’un Plan d’Opération Opératif
    • Processus de génération des forces en National.`,
    },
    {
        id: 13,
        activites_ids: [4, 5, 2],
        title: "Conduite des exercices de planification",
        description: `    • Exercices d’illustration de la Méthode Globale de Planification Opérationnelle (MGPO)
    • Exercice de mise en œuvre de la MGPO
    • Exercice d’application de la MGPO 
    • Exercice d’approfondissement de la MGPO.`,
    },
    {
        id: 14,
        activites_ids: [3, 6],
        title: `la contre insurrection (COIN)/contre - terrorisme (CT) `,
        description: `Dans un environnement marqué par la prégnance des conflits asymétriques, l’intérêt de développer l’enseignement de la contre insurrection / contreterrorisme s’impose comme une nécessité. Il s’agit pour ATT de préparer les décideurs à définir des objectifs propres à leurs différents contextes, et créer des bases de références propices à l’interopérabilité entre les pays dans le cadre de la lutte engagée sous l’égide des organisations régionales ou internationales    

    • Développement des réflexions sur la COIN en Afrique.
    • Méthodologie de conception des doctrines en Afrique 
    • Evolution des procédés tactiques de COIN 
    • Utilisation des forces locales et irrégulières
    • Emploi des forces spéciales en COIN/CT
    • Techniques de recueil de renseignement en COIN/CT
    • L’emploi de l’arme aérienne en COIN/CT
    • Le contrôle des populations : l’administration militaire des territoires et les opérations d’influence
    • Etude de cas de solution régionale : la FMM et BH`,
    },
    {
        id: 15,
        activites_ids: [4, 5, 2],
        title: "conduite des opérations du niveau opératif",
        description: `    • Les principes de la conduite opérative : La boucle OODA et la relation J3-J5
    • Structure et organisation d’un PC opératif
    • La conduite opérative : L’évaluation du plan d’opération.
    • Les documents périodiques en conduite opérative
    • Conduite d’un Joint Coordination Board (JCB)
    • Exercice de conduite d’une opération`,
    },
    {
        id: 16,
        activites_ids: [6],
        title: "appui à la restructuration du secteur de sécurité",
        description: `La RSS est un élément intégral des programmes de paix et de prévention des conflits des Nations Unies. Il s’agit à la fois d’une mesure préventive, et d’un objectif de développement à long terme. Les aspects abordés dans ce module visent à permettre aux institutions de sécurité et de justice de fonctionner équitablement et dans le respect de l’état de droit afin de le maintenir, et de prévenir les conflits
    • Le concept de RSS
    • La gouvernance locale et la RSS
    • Acteurs extérieurs aux FDS et RSS
    • Le rôle de la RSS dans les contextes post-conflit
    • Réforme de la Défense et RSS
    • Travaux dirigés.`,
    },
    {
        id: 17,
        activites_ids: [1],
        title: "montage des écoles de l’enseignement militaire superieur et des instituts de défense",
        description: `Conceptions des curricula pour
        ◦ Ecole d’etat-major
        ◦ Ecole de guerre
        ◦ Centre d’études stratégiques et défense (CHEM, IHDN)`,
    },
    {
        id: 18,
        activites_ids: [3, 5],
        title: "CONCEPTEX",
        description: `Ce module a pour but de :
-faire acquérir les outils indispensables à la planification de niveau opératif
-mieux appréhender le dialogue itératif entre les niveaux opératif et tactique
-savoir prendre en compte les problématiques de nos réalités locales et les adapter aux opérations.

    • Conception des exercices de niveaux opératif et tactique adaptés aux réalités locales`,
    },
];

export default modules;