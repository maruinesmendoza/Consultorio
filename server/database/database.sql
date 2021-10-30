-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2021 at 03:15 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `consultoriomedico`
--
CREATE DATABASE IF NOT EXISTS `consultoriomedico` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `consultoriomedico`;

-- --------------------------------------------------------

--
-- Table structure for table `apm`
--

CREATE TABLE `apm` (
  `IdApm` int(11) NOT NULL,
  `IdPersona` int(11) NOT NULL,
  `IdLaboratorio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `consulta`
--

CREATE TABLE `consulta` (
  `IdConsulta` int(11) NOT NULL,
  `IdObraSocial` int(11) NOT NULL,
  `IdGestionturno` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `IdPaciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gestionturnos`
--

CREATE TABLE `gestionturnos` (
  `IdGestionTurno` int(11) NOT NULL,
  `IdPaciente` int(11) NOT NULL,
  `IdObraSocial` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `laboratorio`
--

CREATE TABLE `laboratorio` (
  `IdLaboratorio` int(11) NOT NULL,
  `Descripcion` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `obrasocial`
--

CREATE TABLE `obrasocial` (
  `IdObraSocial` int(11) NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `obrasocial`
--

INSERT INTO `obrasocial` (`IdObraSocial`, `Descripcion`) VALUES
(1, 'Ospac');

-- --------------------------------------------------------

--
-- Table structure for table `paciente`
--

CREATE TABLE `paciente` (
  `IdPaciente` int(11) NOT NULL,
  `IdPersona` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paciente`
--

INSERT INTO `paciente` (`IdPaciente`, `IdPersona`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pacienteobrasocial`
--

CREATE TABLE `pacienteobrasocial` (
  `IdPaciente` int(11) NOT NULL,
  `IdObraSocial` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pagos`
--

CREATE TABLE `pagos` (
  `IdPagos` int(11) NOT NULL,
  `IdPaciente` int(11) NOT NULL,
  `IdConsulta` int(11) NOT NULL,
  `Monto` decimal(10,0) NOT NULL,
  `Observaciones` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `persona`
--

CREATE TABLE `persona` (
  `IdPersona` int(11) NOT NULL,
  `Nombre` varchar(250) DEFAULT NULL,
  `Apellido` varchar(250) DEFAULT NULL,
  `Tel` varchar(250) DEFAULT NULL,
  `FechaNacimiento` datetime DEFAULT NULL,
  `DNI` varchar(250) DEFAULT NULL,
  `Direccion` varchar(250) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Celular` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `persona`
--

INSERT INTO `persona` (`IdPersona`, `Nombre`, `Apellido`, `Tel`, `FechaNacimiento`, `DNI`, `Direccion`, `Email`, `Celular`) VALUES
(1, 'Maria', 'Mendoza', '4550376', '0000-00-00 00:00:00', '2845978', 'Vallentin Gomez', '3260', '1');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apm`
--
ALTER TABLE `apm`
  ADD PRIMARY KEY (`IdApm`);

--
-- Indexes for table `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`IdConsulta`);

--
-- Indexes for table `gestionturnos`
--
ALTER TABLE `gestionturnos`
  ADD PRIMARY KEY (`IdGestionTurno`);

--
-- Indexes for table `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`IdLaboratorio`);

--
-- Indexes for table `obrasocial`
--
ALTER TABLE `obrasocial`
  ADD PRIMARY KEY (`IdObraSocial`);

--
-- Indexes for table `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`IdPaciente`);

--
-- Indexes for table `pacienteobrasocial`
--
ALTER TABLE `pacienteobrasocial`
  ADD PRIMARY KEY (`IdPaciente`);

--
-- Indexes for table `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`IdPagos`);

--
-- Indexes for table `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`IdPersona`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdUsuario`);
--

