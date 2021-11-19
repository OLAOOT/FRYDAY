
-- --------------------------------------------------------

--
-- 테이블 구조 `userstate`
--

CREATE TABLE `userstate` (
  `user_state` int(11) NOT NULL,
  `state` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `userstate`
--

INSERT INTO `userstate` (`user_state`, `state`) VALUES
(1, 'activated'),
(2, 'unactivated');
