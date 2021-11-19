
-- --------------------------------------------------------

--
-- 테이블 구조 `bookmark`
--

CREATE TABLE `bookmark` (
  `user_id` int(11) DEFAULT NULL,
  `bookmark_category` int(11) DEFAULT NULL,
  `bookmark_post` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
