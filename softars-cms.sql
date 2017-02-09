-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 08, 2017 at 08:07 PM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softars-cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(6, '2014_10_12_000000_create_users_table', 1),
(7, '2014_10_12_100000_create_password_resets_table', 1),
(8, '2016_12_05_173847_create_pages_table', 1),
(9, '2016_12_05_174524_create_roles_table', 1),
(10, '2016_12_05_174612_create_posts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `media` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `content`, `slug`, `media`, `user_id`, `updated_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Hola Mundo', 'Este es el Primer Post', 'hola-mundo', '/images/pages/hola-mundo.jpg', 1, NULL, '2016-12-22 18:04:09', '2016-12-22 18:04:09', NULL),
(2, 'Segunda Pagina', 'Esta es la segunda pagina', 'segunda-pagina', '/images/posts/segunda-pagina.jpg', 1, NULL, '2016-12-22 19:29:30', '2016-12-22 19:29:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(10) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `media` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `slug`, `media`, `user_id`, `updated_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Post de prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nunc sit amet nulla fermentum imperdiet vel quis ex. Curabitur aliquam erat non justo tristique, eget sollicitudin velit feugiat. Duis interdum dui dui, ut consectetur risus eleifend sit amet. Cras imperdiet metus a nunc vehicula scelerisque. Mauris aliquet elit est, a tristique neque venenatis vel. Ut sit amet felis congue, viverra ex sed, imperdiet diam. Suspendisse sollicitudin sit amet neque a pharetra. Aenean commodo aliquet rhoncus. Ut fringilla felis at fermentum mattis. Donec aliquet orci in mauris molestie, et lacinia est posuere. Phasellus nec turpis diam.  Phasellus nulla neque, eleifend quis ligula nec, dictum volutpat arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus iaculis ornare faucibus. Maecenas mattis viverra cursus. Suspendisse ac dapibus nisi. Maecenas imperdiet urna ut magna imperdiet, eget sodales arcu elementum. Etiam dignissim efficitur neque vitae iaculis. Vestibulum fringilla scelerisque mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus porta iaculis massa, vitae aliquam leo efficitur quis. Vestibulum quis libero condimentum, rutrum justo ut, condimentum nulla. Vestibulum tristique semper commodo. Fusce vel quam massa. Maecenas porta nibh quam, sit amet dapibus ligula tristique eu.  Maecenas tincidunt, libero a finibus dictum, justo tortor pulvinar ligula, eu porttitor massa nunc id purus. Nam ullamcorper tortor et lorem volutpat, porttitor ultricies purus blandit. Nullam volutpat orci nisl, elementum vestibulum metus interdum ac. Nam semper iaculis dui eget egestas. Vivamus commodo fermentum lobortis. Nunc quis aliquet metus. Aliquam mi diam, pulvinar ut lorem a, volutpat rhoncus nibh. Aliquam in semper nulla, vitae suscipit massa. Maecenas sed ligula nisi. Aliquam in elit tellus. Vestibulum id rutrum mi. Pellentesque ac sagittis elit.  Cras placerat nisl eget condimentum iaculis. Fusce non finibus dui. Praesent ultricies pulvinar ipsum et blandit. Nullam id erat sed dui aliquet commodo et quis turpis. Phasellus tincidunt vitae quam eu mollis. Nullam mollis vulputate eros quis maximus. Sed nibh tellus, porttitor eleifend ultrices vitae, pulvinar vitae sapien. Proin odio sem, pharetra id lorem eget, tristique pharetra elit. Praesent et nibh sed nulla bibendum elementum at non est. Proin tempus consequat felis eu posuere. Etiam luctus orci arcu, at accumsan ipsum dictum eu. Praesent lacus mi, varius nec varius consequat, efficitur a nisi. Curabitur a ex ac magna tempus convallis. Sed mattis dui id leo finibus malesuada. Sed finibus tellus sit amet sem ultrices vulputate. Maecenas at erat ac dolor egestas aliquet sed ac felis.  Sed vulputate purus eros, id lacinia tortor sagittis sed. Ut quis augue nec sapien ultrices sagittis. Nulla fermentum dolor mi, porttitor luctus ante euismod eu. Phasellus ultrices elit nec posuere faucibus. In hac habitasse platea dictumst. Nullam laoreet varius egestas. Praesent in enim nec orci commodo efficitur at sed enim. Sed fringilla lectus eu nibh sollicitudin elementum. Fusce eget neque felis. Aenean massa metus, sodales vel suscipit vitae, ornare ac felis. Phasellus cursus lectus eu dapibus rutrum. Morbi sed quam ac ex egestas finibus nec a est. Proin pretium lacus quis elementum dignissim. Vivamus ullamcorper porttitor nisi, porttitor fringilla ex tristique vitae. Curabitur blandit ipsum ut dapibus posuere.', 'post-de-prueba', '/images/posts/post-de-prueba.jpg', 1, NULL, '2016-12-22 18:31:58', '2016-12-30 15:42:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Administrator', '2016-12-22 20:00:21', '2016-12-22 20:00:21', NULL),
(2, 'Supervisor', '2016-12-22 20:00:21', '2016-12-22 20:00:21', NULL),
(3, 'User', '2016-12-22 20:00:21', '2016-12-22 20:00:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role_id`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Julmer Olivero', 'jolivero.03@gmail.com', '$2y$10$QJiE/biSCFD0vC3Zu..3nOsSVlv5EPjaXGDKMuT2qI8ysj2uJPo/C', 1, NULL, '2016-12-22 18:01:58', '2016-12-22 18:01:58', NULL),
(2, 'Javier Rincon', 'jjrincon@gmail.com', '$2y$10$FEuJ72fKjAGnt4mzivkzl.pjdb/3RSfDF8uQnI8gvBZGXQsfNiqhq', 3, NULL, '2016-12-22 19:44:52', '2016-12-22 19:44:52', NULL),
(3, 'qwer', 'q@softars.com', '$2y$10$P8TE/4FdLhezpuUYDx0b8OMX2DOgzpEpx4Zgfq6JXMoX/l7770hKe', 3, NULL, '2016-12-27 18:29:51', '2016-12-27 18:29:51', NULL),
(4, 'Julmer Olivero', 'jolivero03@gmail.com', '$2y$10$U4yUGdSUcDzy1jdv3uxlx.uY3lEb44v6gmgszElkQn4WWMhAfDoRa', 3, NULL, '2016-12-27 18:30:57', '2016-12-27 18:30:57', NULL),
(5, 'asdf', 'asd@asd.com', '$2y$10$TgNq3mSyUCdF2i5hXRTUDuDMR1nRfBR3CD7sUT52NppKGYdOqg.AC', 3, NULL, '2016-12-27 18:33:46', '2016-12-27 18:33:46', NULL),
(6, 'asdfg', 'a@a.com', '$2y$10$atCEbTc.eQi94HKSphfTiuqSQeZVUsBJarehEhpUyfpGObwiD7jhe', 3, NULL, '2016-12-27 18:45:34', '2016-12-27 18:45:34', NULL),
(7, 'a', 'a@ab.com', '$2y$10$hPqVU6IUPlSbjSpGwTv12eddHmtwS5aao4e5VQHfhDd2brNRaHiWG', 3, NULL, '2016-12-27 21:25:44', '2016-12-27 21:25:44', NULL),
(8, 'aaaaaa', 'a@w.com', '$2y$10$XmyM4VoY9SsT8qLUzZjl6e1PFHdlEUqoK9v0y2kV/SKhMgw5gD3VW', 3, NULL, '2016-12-29 14:53:23', '2016-12-29 14:53:23', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
