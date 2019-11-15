/* Drafts of TASKS table */

-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 15, 2019 at 09:06 PM
-- Server version: 10.3.17-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `TASKS`
--

CREATE TABLE `TASKS` (
  `TASK_ID` int(11) NOT NULL COMMENT 'Task ID #',
  `TASK_NAME` varchar(25) CHARACTER SET utf8 NOT NULL COMMENT 'Task Name',
  `TASK_DESC` text CHARACTER SET utf8 NOT NULL COMMENT 'Task Description',
  `ASSIGNED_TO` varchar(30) CHARACTER SET utf8 NOT NULL COMMENT 'Person assigned to',
  `TASK_COMPLETE` tinyint(1) NOT NULL COMMENT 'Task completion'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tasks';

--
-- Dumping data for table `TASKS`
--

INSERT INTO `TASKS` (`TASK_ID`, `TASK_NAME`, `TASK_DESC`, `ASSIGNED_TO`, `TASK_COMPLETE`) VALUES
(1, 'Feed chickens', 'Feed chickens in the coup', 'Bob Huister', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TASKS`
--
ALTER TABLE `TASKS`
  ADD PRIMARY KEY (`TASK_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `TASKS`
--
ALTER TABLE `TASKS`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Task ID #', AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
