-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 07, 2020 at 06:51 PM
-- Server version: 10.3.22-MariaDB
-- PHP Version: 7.3.18

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
  `PROP_DESC` text NOT NULL COMMENT 'Property Description',
  `PROP_ADDRESS` text NOT NULL COMMENT 'Property Address',
  `PROP_LAT` float(10,6) NOT NULL COMMENT 'Property''s Latitude coordinate',
  `PROP_LNG` float(10,6) NOT NULL COMMENT 'Property''s Longitude coordinate'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Reroot Pontiac''s Properties';

--
-- Dumping data for table `PROPERTIES`
--

INSERT INTO `PROPERTIES` (`PROP_ID`, `PROP_NAME`, `PROP_DESC`, `PROP_ADDRESS`, `PROP_LAT`, `PROP_LNG`) VALUES
(1, 'Reroot Pontiac Headquarters', 'Lorem Ipsum dolor limit ipsum lorem lorem ipsum.', '76 Henderson Street\r\nPontiac, MI 48341 ', 42.638294, -83.306725),
(2, 'Sustainability Center ', 'Lorem Ipsum dolor limit ipsum lorem lorem ipsum.', '75 Henderson Street\r\nPontiac, MI 48341', 43.323627, -84.464645);

-- --------------------------------------------------------

--
-- Table structure for table `TASKS`
--

CREATE TABLE `TASKS` (
  `TASK_ID` int(11) NOT NULL COMMENT 'Task ID #',
  `TASK_NAME` varchar(45) CHARACTER SET utf8 NOT NULL COMMENT 'Task Name',
  `TASK_DESC` text CHARACTER SET utf8 NOT NULL COMMENT 'Task Description',
  `TASK_LOCATION` varchar(45) CHARACTER SET utf8 NOT NULL COMMENT 'Task Location Name',
  `ASSIGNED_TO` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT 'Person assigned to',
  `TASK_RECURRING` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Is Task recurring?',
  `TASK_FREQUENCY` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Once' COMMENT 'Task Frequency',
  `TASK_DATE` date NOT NULL DEFAULT '2021-01-01' COMMENT 'Task date',
  `TASK_COMPLETE` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Task completion status',
  `TASK_PRIORITY` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Low'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Tasks';

--
-- Dumping data for table `TASKS`
--

INSERT INTO `TASKS` (`TASK_ID`, `TASK_NAME`, `TASK_DESC`, `TASK_LOCATION`, `ASSIGNED_TO`, `TASK_RECURRING`, `TASK_FREQUENCY`, `TASK_DATE`, `TASK_COMPLETE`, `TASK_PRIORITY`) VALUES
(1, 'Feed chickens', 'Feed chickens in the coup', 'Reroot Pontiac HQ', 'Bob Holmes', 0, 'Daily', '2020-01-20', 0, 'Low'),
(2, 'Finish tax forms', 'Complete quarterly tax forms', 'Reroot Pontiac HQ', 'Mary Potter', 0, 'Once', '0000-00-00', 1, 'Low'),
(3, 'Tend to the bees', 'Feed bees and check honey production', 'Reroot Pontiac HQ', 'Xavier Dandon', 1, 'Daily', '0000-00-00', 0, 'Low'),
(4, 'Gather eggs', 'Collect hen eggs for distribution', 'Reroot Pontiac HQ', 'Kelsey Farmer', 1, 'Once', '0000-00-00', 0, 'Low'),
(5, 'Plant seedlings', 'Water and rotate seedling trays', 'Reroot Pontiac HQ', 'Diana Watson', 0, 'Once', '0000-00-00', 0, 'Low'),
(6, 'Purchase plant supplies', 'Buy seeds and potting trays', 'Reroot Pontiac HQ', 'Sal Khan', 0, 'Once', '0000-00-00', 1, 'Low'),
(7, 'Finish evaluations', 'Evaluations for Interns', 'Reroot Pontiac HQ', 'Olivia Roseman', 0, 'Once', '0000-00-00', 0, 'Low'),
(8, 'Prepare presentation', 'Presentation to city council', 'Reroot Pontiac HQ', 'Fred Mcfferson', 1, 'Once', '0000-00-00', 1, 'Low'),
(9, 'Sell produce', 'Offer fresh produce to locals and friends', 'Reroot Pontiac HQ', 'Harley Davis', 1, 'Once', '0000-00-00', 0, 'Low'),
(10, 'Weed gardens', 'Gardens in orchard', 'Some place', 'Erica Jones', 0, 'Once', '0000-00-00', 0, 'Low'),
(11, 'Research GI', 'Examples of GI technologies', 'Reroot Pontiac HQ', 'Carol Tulorian', 0, 'Once', '0000-00-00', 0, 'Low'),
(12, 'Research GIS technolgies', 'Integration of KML map data into GIS Todos App', 'Reroot Pontiac HQ', 'Karen Koltziak', 0, 'Once', '0000-00-00', 0, 'Low'),
(13, 'Harvest produce', 'Pick ripe items from orchards plus gardens', 'Reroot Pontiac HQ', 'Cliff Fatelli', 1, 'Once', '0000-00-00', 0, 'Low'),
(14, 'Soil Testing', 'Prepare soil samples for testing', 'Reroot Pontiac HQ', 'Pakita Singh ', 0, 'Once', '0000-00-00', 0, 'Low'),
(15, 'Monitor crops', 'Check plants and identify any pests', 'Other place', 'Jerry Baker', 0, 'Once', '0000-00-00', 0, 'Low'),
(16, 'Fill bird feeders', 'Load feeders with seed', 'Some place', 'Saul Hudson', 0, 'Once', '0000-00-00', 0, 'Low'),
(17, 'Recruit interns', 'Recruit a groups of interns for winter semester', 'Reroot Pontiac HQ', 'Fred Mcfferson', 0, 'Once', '0000-00-00', 0, 'Low'),
(18, 'Reroot HQ overseer  ', 'Individual renter to watch Reroot HQ.', 'Reroot Pontiac HQ', 'Don Mclean', 0, 'Once', '0000-00-00', 1, 'Low'),
(19, 'Clean yard of Reroot HQ', 'Clean leaves, and debris from yard', 'Reroot Pontiac HQ', 'Olivia Gavulić', 0, 'Once', '0000-00-00', 0, 'Low'),
(20, 'Schedule meeting', 'Meeting with city council', 'Reroot Pontiac HQ', 'Karen Koltziak', 0, 'Once', '0000-00-00', 0, 'Low'),
(21, 'Buy supplies', 'Items for spring planting', 'Reroot Pontiac HQ', 'Kevin Mckalester', 0, 'Once', '0000-00-00', 0, 'Low'),
(22, 'Update task list', 'Check list of tasks', 'Some place', 'Judy Pickles', 1, 'Once', '0000-00-00', 0, 'Low'),
(23, 'Setup security system', 'Alarm system for HQs', 'Reroot Pontiac HQ', 'Sam Denard', 0, 'Once', '0000-00-00', 0, 'Low'),
(24, 'Pick vegetables', 'Collect vegetables in the Garden', 'Reroot Pontiac HQ', 'Annie Devine', 1, 'Once', '0000-00-00', 0, 'Low'),
(25, 'Clean chicken coop', 'Sanitize the chicken\'s living space', 'Reroot Pontiac HQ', 'Jenni Hyden', 0, 'Once', '0000-00-00', 0, 'Low'),
(26, 'Research web hosting', 'Find web hosting for new Reroot Env.', 'Reroot Pontiac HQ', 'Samuel Milton', 0, 'Once', '0000-00-00', 0, 'Low'),
(27, 'Finish Task webapp', 'Complete Task Scheduler application', 'Reroot Pontiac HQ', 'Evan Hassan', 0, 'Once', '0000-00-00', 0, 'Low'),
(28, 'Harvest honey', 'Collect honey from beehives', 'Reroot Pontiac HQ', 'Clifford Gunnarsson', 0, 'Once', '0000-00-00', 0, 'Low'),
(29, 'Clean out tool shed', 'Repair and clean garden tools', 'Reroot Pontiac HQ', 'Yoko Kawasaki', 0, 'Once', '0000-00-00', 0, 'Low'),
(30, 'Plan volunteer event', 'Schedule activities for volunteers', 'Other place', 'Sadiq Khan', 0, 'Once', '0000-00-00', 0, 'Low'),
(31, 'Paint fence', 'Paint backyard fence', 'Reroot Sustainability Center', 'Ferida Kilpatrick', 0, 'Once', '0000-00-00', 0, 'Low'),
(32, 'Clean gutters', 'Remove debris from gutters at HQs', 'Reroot Pontiac HQ', 'Tony Gomes', 0, 'Daily', '0000-00-00', 0, 'Low'),
(33, 'Water crops', 'Turn on sprinkling system', 'Reroot Pontiac HQ', 'Carol Bernado', 1, 'Once', '0000-00-00', 0, 'Low'),
(34, 'Rake leaves', 'Pick up and bag leaves', 'Reroot Sustainability Center', 'Jimmy Dean', 0, 'Once', '0000-00-00', 0, 'Low'),
(35, 'Call lawn crew', 'Setup fall cleanup', 'Reroot Sustainability Center', 'Merle Langford', 0, 'Once', '0000-00-00', 0, 'Low'),
(36, 'Generate task report', 'Update task list and get PDF version', 'Reroot Sustainability Center', 'Leon Terrel', 0, 'Once', '0000-00-00', 0, 'Low'),
(37, '...', '...', '...', 'Karl Münschel', 0, 'Once', '0000-00-00', 0, 'Low'),
(38, '...', '......', 'Reroot Pontiac HQ', 'Frank Lloyd Webber', 0, 'Once', '0000-00-00', 0, 'Low'),
(39, '..............', '...............................', 'Reroot Sustainability Center', 'Agata Rablewicz', 0, 'Once', '0000-00-00', 0, 'Low'),
(40, 'Repair chicken coop', 'Fix wiring and fencing', 'Reroot Pontiac HQ', 'Leong Tan', 0, 'Once', '0000-00-00', 0, 'Low'),
(41, 'Draft presentation', 'Create presentation for new sponsor event', 'Other place', 'Piotr Korovsky', 0, 'Once', '0000-00-00', 0, 'Low'),
(42, '...', '....', 'Reroot Sustainability Center', 'Bob Welch', 0, 'Once', '0000-00-00', 0, 'Low'),
(43, '.................', '..............B;ahahlhallhalhlh', 'Reroot Sustainability Center', 'Sonjay Gupta', 0, 'Once', '0000-00-00', 0, 'Low'),
(44, 'Eh RP whatsup?', 'Helllo jfgjfgjfgjfjfgjf!', 'Reroot Sustainability Center', 'Tara Reid', 0, 'Once', '0000-00-00', 0, 'Low'),
(45, '................', '........................', 'Other place', 'Henri  Lisanno', 1, 'Once', '0000-00-00', 0, 'Low'),
(46, '...........', '....', 'Some place', 'Sangsoon Koh', 1, 'Monthly', '2020-10-04', 0, 'Low'),
(47, 'Testing ... ... ...', 'Reroot Pontiac test....', 'Reroot Pontiac HQ', 'Ben Park', 1, 'Yearly', '2021-01-01', 0, 'Low'),
(48, 'Aid al bashir ', 'Radii kasam aid bashir', 'Some place', 'Dean Calhoun', 1, 'Daily', '2020-11-30', 0, 'Low'),
(49, 'Attend GI Conference', 'Travel and attend GI tech conference', 'Other place', 'Zoé K. Shank', 0, 'Once', '2020-08-20', 0, 'Low'),
(50, 'Distribute GI pamphlets', 'Enroll people into GI training program', 'Reroot Pontiac HQ', 'Helen Nikhela', 0, 'Once', '2020-11-02', 0, 'High'),
(51, 'Empty compost bin', 'Clear contents of compost', 'Reroot Sustainability Center', 'Homer Simpson', 0, 'Once', '2021-01-01', 0, 'Low'),
(52, 'Redesign rerootpontiac.org site', 'Design new version of main website', 'Reroot Pontiac HQ', 'Eugène De Rouge', 0, 'Once', '2021-01-01', 0, 'Low'),
(53, 'Start marketing campaign', 'Social media marketing for RP', 'Reroot Pontiac HQ', 'Jade Williams', 0, 'Once', '2021-01-01', 0, 'Low'),
(54, 'Read ....', '........', 'Other place', 'Jerrold F. Nadler', 0, 'Once', '2021-01-01', 0, 'Low'),
(55, 'Testing... ...', '........', 'Some place', 'Alexandria Hernadez', 0, 'Once', '2021-01-01', 0, 'Low'),
(56, '.blah...', '..bobo.....', 'Reroot Sustainability Center', 'Eva Jensen', 0, 'Once', '2021-01-01', 0, 'Low'),
(57, '..............wrqwegeg', '......', 'Reroot Pontiac HQ', 'Mohamed Ali', 0, 'Once', '2021-01-01', 0, 'Low'),
(58, '..f...ggsgdg', '..e......dhdfhf', 'Reroot Sustainability Center', 'Kris Kristophersson', 0, 'Once', '2021-01-01', 0, 'Low'),
(59, '...', '...blah', 'Reroot Pontiac HQ', 'Selim Fernando', 0, 'Once', '2021-01-01', 0, 'Low'),
(60, 'Record expenses', 'Update monthly expense spreadsheets', 'Reroot Sustainability Center', 'Shlomo Katz', 0, 'Once', '2021-01-01', 0, 'Low');

-- --------------------------------------------------------

--
-- Table structure for table `TASK_HISTORY`
--

CREATE TABLE `TASK_HISTORY` (
  `TASK_ID` int(11) NOT NULL COMMENT 'Task ID #',
  `TASK_COMPLT_TIME` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Task Completion Time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PROPERTIES`
--
ALTER TABLE `PROPERTIES`
  ADD PRIMARY KEY (`PROP_ID`);

--
-- Indexes for table `TASKS`
--
ALTER TABLE `TASKS`
  ADD PRIMARY KEY (`TASK_ID`);

--
-- Indexes for table `TASK_HISTORY`
--
ALTER TABLE `TASK_HISTORY`
  ADD PRIMARY KEY (`TASK_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PROPERTIES`
--
ALTER TABLE `PROPERTIES`
  MODIFY `PROP_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Property ID #', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `TASKS`
--
ALTER TABLE `TASKS`
  MODIFY `TASK_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Task ID #', AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
