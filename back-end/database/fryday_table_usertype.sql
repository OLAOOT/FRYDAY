
-- --------------------------------------------------------

--
-- 테이블 구조 `usertype`
--

CREATE TABLE `usertype` (
  `user_type` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `usertype`
--

INSERT INTO `usertype` (`user_type`, `type`) VALUES
(1, 'user'),
(2, 'administarator');
