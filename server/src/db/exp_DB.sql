-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 07, 2024 at 05:35 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exp_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `cat_id` char(1) NOT NULL,
  `comment` char(20) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `amount` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `cat_id`, `comment`, `date`, `amount`) VALUES
(89, '3', 'Chaira', '2024-01-03', -195),
(91, '', 'Maxima', '2024-01-03', -30),
(93, '1', 'LIDL', '2024-01-03', -40),
(102, '', '30', '2024-01-05', -20),
(104, '', 'test', '2024-01-05', -22),
(105, '', 'test', '2024-01-05', -22),
(106, '', 'test', '2024-01-05', -222),
(108, '', '22', '2024-01-05', -22),
(110, '', '22', '2024-01-05', -222),
(112, '', 'test', '2024-01-05', -22),
(116, '', 'test', '2024-01-05', -20),
(119, '', 'test', '2024-01-05', -22),
(121, '', 'gg', '2024-01-05', -20),
(123, '', 'test', '2024-01-05', -44),
(126, '', 'test', '2024-01-05', -55),
(128, '', 'test', '2024-01-05', -44),
(132, '', 'ddd', '2024-01-05', -10),
(134, '', 'test', '2024-01-05', -33),
(135, '', 'test', '2024-01-05', -33),
(149, '4', 'Salary 01-10', '2024-01-07', 4000);

-- --------------------------------------------------------

--
-- Table structure for table `exp_cats`
--

CREATE TABLE `exp_cats` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exp_cats`
--

INSERT INTO `exp_cats` (`cat_id`, `cat_name`) VALUES
(1, 'Food'),
(2, 'House'),
(3, 'Health'),
(4, 'Salary');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `date`) VALUES
(2, 'james@secure2.com', '$2a$10$lsXkjVR3vd5XdRblgDki4emp6A3UQ99NbpC4ZHlr.xkW21HpaOxB2', '2024-01-04 20:08:58'),
(8, 'test@test.lt', '$2a$10$SNTILiNHm4QOeDPs/.2mNOCOk72GjZuuJecCDnXvokbHufnv//yRq', '2024-01-07 10:01:10'),
(9, 'test1@test.lt', '$2a$10$oq61RJCRCHMYASMwnc0qOuMkjHEtI09yZtO8xWNneRHTU.VQDf5yW', '2024-01-07 14:18:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exp_cats`
--
ALTER TABLE `exp_cats`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
