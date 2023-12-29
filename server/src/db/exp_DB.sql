-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 29, 2023 at 04:12 PM
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
(1, '1', 'Kruopos', '2023-12-28', -8),
(2, '2', 'New Curtains', '2023-12-29', -300),
(3, '1', 'Kebbab', '2023-12-29', -6),
(4, '2', 'Chair', '2023-12-29', -60),
(6, '1', 'Kruopos', '2023-12-29', -3),
(10, '3', 'Drugs', '2023-12-29', -60),
(22, '4', 'Salary 12', '2023-12-28', 4005);

-- --------------------------------------------------------

--
-- Table structure for table `exp_cat`
--

CREATE TABLE `exp_cat` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exp_cat`
--

INSERT INTO `exp_cat` (`cat_id`, `cat_name`) VALUES
(1, 'food'),
(2, 'house'),
(3, 'health'),
(4, 'salary');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exp_cat`
--
ALTER TABLE `exp_cat`
  ADD PRIMARY KEY (`cat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
