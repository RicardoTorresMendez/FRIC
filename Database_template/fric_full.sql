-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2020 at 05:28 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fric`
--

-- --------------------------------------------------------

--
-- Table structure for table `analysts`
--

CREATE TABLE `analysts` (
  `ID` int(10) NOT NULL,
  `FirstName` varchar(80) NOT NULL,
  `LastName` varchar(80) NOT NULL,
  `Initial` varchar(10) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Role` int(10) NOT NULL,
  `IP` varchar(80) NOT NULL,
  `PDIP` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `analysts`
--

INSERT INTO `analysts` (`ID`, `FirstName`, `LastName`, `Initial`, `Title`, `Role`, `IP`, `PDIP`) VALUES
(2, '', '', 'HH', '', 0, '', ''),
(3, '', '', 'CP', '', 0, '', ''),
(4, '', '', 'BN', '', 0, '', ''),
(5, '', '', 'SC', '', 0, '', ''),
(6, '', '', 'BM', '', 0, '', ''),
(7, '', '', 'JS', '', 0, '', ''),
(8, '', '', 'CU', '', 0, '', ''),
(9, '', '', 'CT', '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `ID` int(10) NOT NULL,
  `Name` varchar(80) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Type` varchar(80) NOT NULL,
  `Version` varchar(80) NOT NULL,
  `AssessmentDate` date NOT NULL,
  `OrganizationName` varchar(80) NOT NULL,
  `SCTG` varchar(80) NOT NULL,
  `Classification` varchar(80) NOT NULL,
  `DeclassificationDate` date NOT NULL,
  `CustomerName` varchar(80) NOT NULL,
  `Analysts` varchar(255) NOT NULL,
  `Archived` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

-- --------------------------------------------------------

--
-- Table structure for table `finding`
--

CREATE TABLE `finding` (
  `ID` int(11) NOT NULL,
  `Title` varchar(256) NOT NULL,
  `Finding_System` varchar(1024) NOT NULL,
  `Task` varchar(1024) NOT NULL,
  `Subtask` varchar(1024) NOT NULL,
  `Analyst` varchar(256) NOT NULL,
  `Finding_Status` varchar(64) NOT NULL,
  `Classification` varchar(64) NOT NULL,
  `Type` varchar(256) NOT NULL,
  `Risk` varchar(64) NOT NULL,
  `Host_Name` varchar(64) NOT NULL,
  `IP_Port` varchar(64) NOT NULL,
  `Description` varchar(256) NOT NULL,
  `Long_Description` varchar(4096) NOT NULL,
  `Evidence` longblob NOT NULL,
  `Related_Findings` varchar(256) NOT NULL,
  `Confidentiality` varchar(64) NOT NULL,
  `Integrity` varchar(64) NOT NULL,
  `Availability` varchar(64) NOT NULL,
  `Archived` tinyint(1) NOT NULL,
  `Collaborator` varchar(256) NOT NULL,
  `Posture` varchar(64) NOT NULL,
  `Mitigation_Brief_Description` varchar(256) NOT NULL,
  `Mitigation_Long_Description` varchar(4096) NOT NULL,
  `Relevance` varchar(64) NOT NULL,
  `Effectiveness_Rating` varchar(64) NOT NULL,
  `Impact_Description` varchar(256) NOT NULL,
  `Impact_Level` varchar(64) NOT NULL,
  `Severity_Category_Score` varchar(64) NOT NULL,
  `Vulnerability_Severity` varchar(64) NOT NULL,
  `Quantitative_Vulnerability_Severity` varchar(64) NOT NULL,
  `Likelihood` varchar(64) NOT NULL,
  `Confidentiality_Finding_Impact_on_System` varchar(64) NOT NULL,
  `Integrity_Finding_Impact_on_System` varchar(64) NOT NULL,
  `Availability_Finding_Impact_on_System` varchar(64) NOT NULL,
  `Finding_Impact_Score` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finding`
--

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `DateTime` datetime NOT NULL,
  `Action Performed` varchar(255) NOT NULL,
  `Analyst` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subtask`
--

CREATE TABLE `subtask` (
  `ID` int(10) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Progress` varchar(80) NOT NULL,
  `DueDate` date NOT NULL,
  `Analysts` varchar(512) NOT NULL,
  `Collaborators` varchar(512) NOT NULL,
  `Task` varchar(512) NOT NULL,
  `Subtasks` varchar(512) NOT NULL,
  `Findings` varchar(512) NOT NULL,
  `Attachment` blob NOT NULL,
  `RelatedTask` varchar(255) NOT NULL,
  `RelatedSubtask` varchar(255) NOT NULL,
  `Archived` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subtask`
--

-- --------------------------------------------------------

--
-- Table structure for table `systems`
--

CREATE TABLE `systems` (
  `ID` int(10) NOT NULL,
  `Name` varchar(80) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Router` varchar(255) NOT NULL,
  `Switch` varchar(255) NOT NULL,
  `Room` varchar(255) NOT NULL,
  `TestPlan` varchar(255) NOT NULL,
  `ArchiveStatus` tinyint(1) NOT NULL,
  `Confidentiality` int(10) NOT NULL,
  `Integrity` int(10) NOT NULL,
  `Availability` int(10) NOT NULL,
  `RelatedEvent` varchar(255) NOT NULL,
  `Archived` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `systems`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `ID` int(10) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `System` varchar(80) NOT NULL,
  `Progress` varchar(80) NOT NULL,
  `DueDate` date NOT NULL,
  `Analysts` varchar(512) NOT NULL,
  `Collaborators` varchar(512) NOT NULL,
  `RelatedTasks` varchar(512) NOT NULL,
  `Subtasks` varchar(512) NOT NULL,
  `Findings` varchar(512) NOT NULL,
  `Attachment` blob NOT NULL,
  `Priority` varchar(20) NOT NULL,
  `RelatedSystem` varchar(255) NOT NULL,
  `Archived` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `analysts`
--
ALTER TABLE `analysts`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `finding`
--
ALTER TABLE `finding`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `subtask`
--
ALTER TABLE `subtask`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `systems`
--
ALTER TABLE `systems`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `analysts`
--
ALTER TABLE `analysts`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `finding`
--
ALTER TABLE `finding`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subtask`
--
ALTER TABLE `subtask`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `systems`
--
ALTER TABLE `systems`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
