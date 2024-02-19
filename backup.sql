-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2024 a las 02:47:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `megadigitalabm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id` int(11) NOT NULL,
  `habitacionpiso` int(11) DEFAULT NULL CHECK (`habitacionpiso` > 0 and `habitacionpiso` <= 10),
  `habitacionnro` int(11) DEFAULT NULL CHECK (`habitacionnro` > 0 and `habitacionnro` <= 20),
  `cantcamas` int(11) DEFAULT NULL CHECK (`cantcamas` >= 1 and `cantcamas` <= 4),
  `tienetelevision` tinyint(1) NOT NULL,
  `tienefrigobar` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id`, `habitacionpiso`, `habitacionnro`, `cantcamas`, `tienetelevision`, `tienefrigobar`) VALUES
(1, 1, 2, 4, 1, 1),
(2, 2, 1, 2, 1, 0),
(3, 1, 4, 3, 0, 0),
(4, 10, 20, 4, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombrecompleto` varchar(100) NOT NULL,
  `nrodocumento` varchar(20) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombrecompleto`, `nrodocumento`, `correo`, `telefono`) VALUES
(1, 'axel ruiz', '12345678', 'axel@gmail.com', '0991234567'),
(2, 'jose cubilla', '5657443', 'jose@gmail.com', '099865643');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id` int(11) NOT NULL,
  `fechareserva` datetime NOT NULL,
  `fechaentrada` datetime NOT NULL,
  `fechasalida` datetime NOT NULL,
  `habitacionid` int(11) DEFAULT NULL,
  `personaid` int(11) DEFAULT NULL,
  `montoreserva` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id`, `fechareserva`, `fechaentrada`, `fechasalida`, `habitacionid`, `personaid`, `montoreserva`) VALUES
(5, '2024-02-18 00:00:00', '2024-02-19 00:00:00', '2024-02-20 00:00:00', 1, 1, 480000.00),
(6, '2024-02-18 00:00:00', '2024-02-19 00:00:00', '2024-02-20 00:00:00', 3, 1, 120000.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `habitacionid` (`habitacionid`),
  ADD KEY `personaid` (`personaid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`habitacionid`) REFERENCES `habitacion` (`id`),
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`personaid`) REFERENCES `persona` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
