-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-10-2019 a las 18:28:12
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `consultoriomedico`
--
CREATE DATABASE IF NOT EXISTS `consultoriomedico` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `consultoriomedico`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apm`
--

CREATE TABLE `apm` (
  `IdApm` int(11) NOT NULL,
  `IdPersona` int(11) NOT NULL,
  `IdLaboratorio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consulta`
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
-- Estructura de tabla para la tabla `gestionturnos`
--

CREATE TABLE `gestionturnos` (
  `IdGestionTurno` int(11) NOT NULL,
  `IdPaciente` int(11) NOT NULL,
  `IdObraSocial` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorio`
--

CREATE TABLE `laboratorio` (
  `IdLaboratorio` int(11) NOT NULL,
  `Descripcion` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obrasocial`
--

CREATE TABLE `obrasocial` (
  `IdObraSocial` int(11) NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `IdPaciente` int(11) NOT NULL,
  `IdPersona` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`IdPaciente`, `IdPersona`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacienteobrasocial`
--

CREATE TABLE `pacienteobrasocial` (
  `IdPaciente` int(11) NOT NULL,
  `IdObraSocial` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
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
-- Estructura de tabla para la tabla `persona`
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
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`IdPersona`, `Nombre`, `Apellido`, `Tel`, `FechaNacimiento`, `DNI`, `Direccion`, `Email`, `Celular`) VALUES
(1, 'Maria', 'Mendoza', '4550376', '0000-00-00 00:00:00', '2845978', 'Vallentin Gomez', '3260', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apm`
--
ALTER TABLE `apm`
  ADD PRIMARY KEY (`IdApm`);

--
-- Indices de la tabla `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`IdConsulta`);

--
-- Indices de la tabla `gestionturnos`
--
ALTER TABLE `gestionturnos`
  ADD PRIMARY KEY (`IdGestionTurno`);

--
-- Indices de la tabla `laboratorio`
--
ALTER TABLE `laboratorio`
  ADD PRIMARY KEY (`IdLaboratorio`);

--
-- Indices de la tabla `obrasocial`
--
ALTER TABLE `obrasocial`
  ADD PRIMARY KEY (`IdObraSocial`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`IdPaciente`);

--
-- Indices de la tabla `pacienteobrasocial`
--
ALTER TABLE `pacienteobrasocial`
  ADD PRIMARY KEY (`IdPaciente`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`IdPagos`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`IdPersona`);
