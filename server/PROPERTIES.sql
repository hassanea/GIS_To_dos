-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 20, 2019 at 07:48 PM
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
-- Table structure for table `PROPERTIES`
--

CREATE TABLE `PROPERTIES` (
  `PROP_ID` int(11) NOT NULL COMMENT 'Property ID #',
  `PROP_NAME` varchar(30) NOT NULL COMMENT 'Property Name',
  `PROP_ADDRESS` text NOT NULL COMMENT 'Property Address',
  `PROP_LAT` float(10,6) NOT NULL COMMENT 'Property''s Latitude coordinate',
  `PROP_LNG` float(10,6) NOT NULL COMMENT 'Property''s Longitude coordinate'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Reroot Pontiac''s Properties';

--
-- Dumping data for table `PROPERTIES`
--

INSERT INTO `PROPERTIES` (`PROP_ID`, `PROP_NAME`, `PROP_ADDRESS`, `PROP_LAT`, `PROP_LNG`) VALUES
(1, 'Reroot Pontiac Headquarters', '76 Henderson Street\r\nPontiac, MI 48341 ', 42.638294, -83.306725);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PROPERTIES`
--
ALTER TABLE `PROPERTIES`
  ADD PRIMARY KEY (`PROP_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PROPERTIES`
--
ALTER TABLE `PROPERTIES`
  MODIFY `PROP_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Property ID #', AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
