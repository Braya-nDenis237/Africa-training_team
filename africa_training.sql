-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 10 mars 2026 à 10:35
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `africa_training`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `type` enum('article','news') NOT NULL DEFAULT 'article',
  `status` enum('draft','published') NOT NULL DEFAULT 'draft',
  `views` int(11) NOT NULL DEFAULT 0,
  `author_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keywords` varchar(255) DEFAULT NULL,
  `author_name` varchar(255) NOT NULL DEFAULT 'Africa Training Team'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `title`, `slug`, `content`, `image`, `type`, `status`, `views`, `author_id`, `created_at`, `updated_at`, `meta_title`, `meta_description`, `meta_keywords`, `author_name`) VALUES
(1, 'Pourquoi les formations en ligne sont l’avenir en Afrique en 2026', 'pourquoi-les-formations-en-ligne-sont-lavenir-en-afrique-en-2026', '<p>&nbsp;🌍 L’Afrique entre dans une nouvelle ère digitale</p><p><br></p><p>L’éducation en Afrique connaît une transformation rapide grâce au numérique. Avec l’augmentation de l’accès à Internet et aux smartphones, les formations en ligne deviennent une solution efficace pour apprendre sans contrainte géographique.</p><p><br></p><p><br></p><p><br></p><p>📈 Une demande en forte croissance</p><p><br></p><p>Les jeunes africains recherchent des compétences pratiques dans :</p><p>•	Le développement web</p><p>•	La cybersécurité</p><p>•	Le marketing digital</p><p>•	L’intelligence artificielle</p><p>•	L’entrepreneuriat</p><p><br></p><p>Les plateformes de formation en ligne permettent d’acquérir ces compétences à moindre coût.</p><p><br></p><p><br></p><p><br></p><p>💡 Accessibilité et flexibilité</p><p><br></p><p>Contrairement aux systèmes traditionnels, les formations en ligne offrent :</p><p>•	Apprentissage à son rythme</p><p>•	Accès 24h/24</p><p>•	Coûts réduits</p><p>•	Contenus mis à jour régulièrement</p><p><br></p><p><br></p><p><br></p><p>🚀 Opportunités économiques</p><p><br></p><p>Les freelances, développeurs et entrepreneurs formés en ligne peuvent travailler pour des clients internationaux, générant ainsi des revenus en devises.</p><p><br></p><p><br></p><p><br></p><p>🔥 Conclusion</p><p><br></p><p>En 2026, la formation en ligne n’est plus une alternative : c’est une nécessité stratégique pour l’Afrique.</p>', NULL, 'article', 'published', 19, 1, '2026-02-27 22:35:55', '2026-03-09 15:58:12', 'Formation en ligne en Afrique : opportunité et avenir 2026', 'Découvrez pourquoi les formations en ligne transforment l’éducation en Afrique en 2026 et comment en profiter dès aujourd’hui.', 'formation en ligne Afrique, e-learning Afrique, éducation digitale, formation numérique 2026, apprentissage en ligne, compétences digitales Afrique', 'Africa Training Team'),
(2, 'Africa Training lance officiellement sa plateforme de formation', 'africa-training-lance-officiellement-sa-plateforme-de-formation', '<p>&nbsp;Africa Training annonce le lancement officiel de sa plateforme de formation en ligne dédiée aux compétences digitales.</p><p><br></p><p>Les utilisateurs peuvent désormais :</p><p>•	S’abonner à différents packs</p><p>•	Accéder à des contenus premium</p><p>•	Lire des articles éducatifs</p><p>•	Suivre les actualités tech</p><p><br></p><p>Cette initiative vise à accélérer la digitalisation des compétences en Afrique.</p>', 'articles/1772239887.jpg', 'news', 'published', 23, 1, '2026-02-27 23:51:27', '2026-03-09 18:23:35', 'Lancement Africa Training – Plateforme de formation en ligne', 'Africa Training lance officiellement sa plateforme dédiée aux formations digitales en Afrique.', 'Africa Training, plateforme formation Afrique, formation digitale Cameroun, abonnement formation en ligne, actualité tech Afrique', 'Africa Training Team'),
(7, 'aaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaaaa', '<p>sdfghjkluyhssssssssssssssssssssssssssssssssssssssssshggggggggggggggggggg</p>', 'articles/1772296175.jpg', 'article', 'published', 10, 1, '2026-02-28 15:29:35', '2026-03-09 18:18:34', 'aaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbb', 'ccccccccccccccccccccccc', 'Africa Training Team'),
(8, 'Africa Training Team lance officiellement sa plateforme de formation', 'africa-training-team-lance-officiellement-sa-plateforme-de-formation', '<p>Africa Training Team annonce le lancement de sa plateforme de formation</p><p><br></p><p>Africa Training Team annonce officiellement le lancement de sa nouvelle plateforme dédiée à la formation et au développement des compétences stratégiques en Afrique. Cette initiative vise à renforcer l’autonomie stratégique des institutions africaines en matière de formation, de planification et d’analyse opérationnelle.</p><p><br></p><p>Grâce à cette plateforme, les utilisateurs pourront accéder à un ensemble de ressources pédagogiques et de contenus spécialisés conçus pour répondre aux défis actuels du continent.</p><p><br></p><p>Une plateforme pensée pour le développement des compétences</p><p><br></p><p>La plateforme propose plusieurs fonctionnalités destinées à accompagner les professionnels et les institutions dans leur montée en compétences.</p><p><br></p><p>Les utilisateurs pourront notamment :</p><p>•	accéder à des contenus pédagogiques spécialisés</p><p>•	suivre des programmes de formation structurés</p><p>•	consulter des analyses et des publications stratégiques</p><p>•	bénéficier de ressources dédiées aux questions de sécurité et de gouvernance</p><p><br></p><p>Cette approche vise à favoriser le partage de connaissances et à soutenir le développement des capacités locales.</p><p><br></p><p>Un engagement pour l’autonomie stratégique africaine</p><p><br></p><p>Africa Training Team s’inscrit dans une démarche visant à promouvoir l’africanisation des réponses aux défis sécuritaires et stratégiques. En mettant l’accent sur la formation et le renforcement des compétences, l’organisation souhaite contribuer à une meilleure préparation des acteurs institutionnels et professionnels.</p><p><br></p><p>La plateforme constitue ainsi un espace d’échange, d’apprentissage et d’innovation pour les experts et les institutions engagés dans le développement du continent.</p><p><br></p><p>Perspectives de développement</p><p><br></p><p>Dans les prochains mois, Africa Training Team prévoit d’enrichir la plateforme avec de nouveaux contenus, des modules de formation interactifs et des analyses approfondies sur les enjeux stratégiques en Afrique.</p><p><br></p><p>L’objectif est de construire progressivement un écosystème de formation capable d’accompagner les transformations institutionnelles et technologiques du continent.</p>', 'articles/1773080146.jpg', 'article', 'published', 3, 1, '2026-03-09 16:32:15', '2026-03-09 18:27:18', 'Africa Training Team lance officiellement sa plateforme de formation', 'Plateforme de formation Africa Training Team dédiée au développement des compétences stratégiques, sécuritaires et numériques en Afrique.', 'formation afrique, africa training team, formation sécurité, formation numérique afrique, compétences africaines', 'Africa Training Team'),
(9, 'L’importance de la formation stratégique en Afrique', 'limportance-de-la-formation-strategique-en-afrique', '<p>•	Pourquoi la formation stratégique est essentielle</p><p>	•	Les défis actuels des institutions africaines</p><p>	•	Le rôle de la formation dans la prise de décision</p><p>	•	L’exemple des programmes de formation spécialisés</p>', 'articles/1773079650.jpg', 'article', 'draft', 1, 1, '2026-03-09 17:07:30', '2026-03-09 18:12:15', 'L’importance de la formation stratégique en Afrique', 'La formation stratégique joue un rôle clé dans le renforcement des capacités institutionnelles et la gestion des défis sécuritaires en Afrique.', 'formation stratégique leadership institutions africaines', 'Africa Training Team');

-- --------------------------------------------------------

--
-- Structure de la table `article_slug_histories`
--

CREATE TABLE `article_slug_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `article_id` bigint(20) UNSIGNED NOT NULL,
  `old_slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_02_26_231036_create_articles_table', 1),
(5, '2026_02_27_000303_create_packs_table', 1),
(6, '2026_02_27_000311_create_subscriptions_table', 1),
(7, '2026_02_27_014228_add_google_id_to_users_table', 1),
(8, '2026_02_27_020730_add_pack_id_to_users_table', 1),
(9, '2026_02_27_040832_add_auto_renew_to_subscriptions_table', 1),
(10, '2026_02_27_045427_add_role_to_users_table', 1),
(11, '2026_02_27_055747_create_visits_table', 1),
(12, '2026_02_27_174808_add_seo_fields_to_articles_table', 1),
(13, '2026_02_27_182117_create_article_slug_histories_table', 1),
(14, '2026_02_27_224932_add_author_name_to_articles_table', 2);

-- --------------------------------------------------------

--
-- Structure de la table `packs`
--

CREATE TABLE `packs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `packs`
--

INSERT INTO `packs` (`id`, `name`, `description`, `price`, `features`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Basic', 'Accès limité', 0.00, '\"[\\\"Acc\\\\u00e8s blog\\\",\\\"Newsletter\\\"]\"', 1, '2026-02-28 02:51:30', '2026-02-28 02:51:30'),
(2, 'Pro', 'Accès formations', 50000.00, '\"[\\\"Formations\\\",\\\"Support\\\"]\"', 1, '2026-02-28 02:51:31', '2026-02-28 02:51:31'),
(3, 'Premium Elite', 'Accès complet aux formations et accompagnement personnalisé.', 100000.00, '[\"Acc\\u00e8s illimit\\u00e9 \\u00e0 toutes les formations\",\"Pr\\u00e9parations concours avanc\\u00e9es (EMIA, Police, Gendarmerie)\",\"Support prioritaire WhatsApp\",\"Sessions live exclusives\",\"Correction personnalis\\u00e9e des exercices\",\"Certificat Premium officiel\",\"Acc\\u00e8s anticip\\u00e9 aux nouvelles publications\"]', 1, '2026-02-28 03:40:13', '2026-02-28 03:40:13');

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('zLvuINqKc1KqXpBJNac0WGLVB9P95rSp9jYwb9hc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVURha2pqSjh4V00wcVg0U1dMaHVFS0tHYnpHcjFMbWhDWmhwTTFteCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1773135251);

-- --------------------------------------------------------

--
-- Structure de la table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `pack_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `auto_renew` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `google_id` varchar(255) DEFAULT NULL,
  `pack_id` bigint(20) UNSIGNED DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `google_id`, `pack_id`, `role`) VALUES
(1, 'Super Admin', 'admin@att.com', NULL, '$2y$12$E5lAieTZtIa73uv.DbbdruzuvzJzFxTj4BqYA3kaBjNQ7SUXjLYoG', 'lKg2iiEyeAQMtYYSqoUW9qwTeVbg5C1GBO7nSk6de0cOqzQ9CsgsWJxB7RFY', '2026-02-27 20:42:11', '2026-02-27 20:42:11', NULL, NULL, 'admin'),
(2, 'Brayan Denis', 'brayandenisv45@gmail.com', NULL, '$2y$12$k9y09oAA8e7ONslNvtVQFej2zgm/kbtjgtmghQ5tPX4DMWW0zgFe2', NULL, '2026-02-28 01:47:19', '2026-02-28 01:47:19', NULL, NULL, 'user'),
(5, 'brayan denis', 'brayandenisv17@gmail.com', NULL, '$2y$12$rSFPTVH9dbQlDygd7oUg1.5Qf.h2Gs78AUTs/smiCn1UaiUHxRB3u', NULL, '2026-03-09 15:38:42', '2026-03-09 15:38:42', NULL, NULL, 'user');

-- --------------------------------------------------------

--
-- Structure de la table `visits`
--

CREATE TABLE `visits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(255) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `page` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `visits`
--

INSERT INTO `visits` (`id`, `ip`, `country`, `page`, `created_at`, `updated_at`) VALUES
(1, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 20:54:20', '2026-02-27 20:54:20'),
(2, '127.0.0.1', 'Unknown', 'login', '2026-02-27 21:08:22', '2026-02-27 21:08:22'),
(3, '127.0.0.1', 'Unknown', '.well-known/appspecific/com.chrome.devtools.json', '2026-02-27 21:08:23', '2026-02-27 21:08:23'),
(4, '127.0.0.1', 'Unknown', 'login', '2026-02-27 21:08:35', '2026-02-27 21:08:35'),
(5, '127.0.0.1', 'Unknown', 'admin', '2026-02-27 21:08:36', '2026-02-27 21:08:36'),
(6, '127.0.0.1', 'Unknown', 'admin/articles', '2026-02-27 21:08:43', '2026-02-27 21:08:43'),
(7, '127.0.0.1', 'Unknown', '.well-known/appspecific/com.chrome.devtools.json', '2026-02-27 21:08:43', '2026-02-27 21:08:43'),
(8, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 21:08:50', '2026-02-27 21:08:50'),
(9, '127.0.0.1', 'Unknown', '.well-known/appspecific/com.chrome.devtools.json', '2026-02-27 21:08:50', '2026-02-27 21:08:50'),
(10, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 21:18:05', '2026-02-27 21:18:05'),
(11, '127.0.0.1', 'Unknown', '.well-known/appspecific/com.chrome.devtools.json', '2026-02-27 21:18:06', '2026-02-27 21:18:06'),
(12, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 21:18:56', '2026-02-27 21:18:56'),
(13, '127.0.0.1', 'Unknown', '.well-known/appspecific/com.chrome.devtools.json', '2026-02-27 21:18:57', '2026-02-27 21:18:57'),
(14, '127.0.0.1', 'Unknown', 'admin/articles', '2026-02-27 21:39:32', '2026-02-27 21:39:32'),
(15, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 21:39:33', '2026-02-27 21:39:33'),
(16, '127.0.0.1', 'Unknown', 'admin/articles', '2026-02-27 22:03:22', '2026-02-27 22:03:22'),
(17, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 22:03:22', '2026-02-27 22:03:22'),
(18, '127.0.0.1', 'Unknown', 'admin/articles/create', '2026-02-27 22:03:29', '2026-02-27 22:03:29'),
(19, '127.0.0.1', 'Unknown', '.well-known/appspecific/com.chrome.devtools.json', '2026-02-27 22:03:30', '2026-02-27 22:03:30');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_author_id_foreign` (`author_id`);

--
-- Index pour la table `article_slug_histories`
--
ALTER TABLE `article_slug_histories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `article_slug_histories_old_slug_unique` (`old_slug`),
  ADD KEY `article_slug_histories_article_id_foreign` (`article_id`);

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Index pour la table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `packs`
--
ALTER TABLE `packs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_foreign` (`user_id`),
  ADD KEY `subscriptions_pack_id_foreign` (`pack_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_google_id_unique` (`google_id`),
  ADD KEY `users_pack_id_foreign` (`pack_id`);

--
-- Index pour la table `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `article_slug_histories`
--
ALTER TABLE `article_slug_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `packs`
--
ALTER TABLE `packs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `article_slug_histories`
--
ALTER TABLE `article_slug_histories`
  ADD CONSTRAINT `article_slug_histories_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_pack_id_foreign` FOREIGN KEY (`pack_id`) REFERENCES `packs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subscriptions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_pack_id_foreign` FOREIGN KEY (`pack_id`) REFERENCES `packs` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
