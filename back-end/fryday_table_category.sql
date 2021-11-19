
-- --------------------------------------------------------

--
-- 테이블 구조 `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(1, '빵·냉동생지'),
(2, '과자·스낵'),
(3, '야채·샐러드'),
(4, '닭·오리'),
(5, '고기·육류'),
(6, '소고기'),
(7, '토스트·샌드위치'),
(8, '냉장·냉동'),
(9, '돼지고기'),
(10, '채소류'),
(11, '해물류'),
(12, '달걀·유제품');
