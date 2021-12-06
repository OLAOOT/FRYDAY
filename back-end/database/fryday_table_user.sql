
-- --------------------------------------------------------

--
-- 테이블 구조 `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_nickname` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_state` int(11) NOT NULL,
  `user_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_nickname`, `user_state`, `user_type`) VALUES
(1, 'admin01', '16101375@seoultech.ac.kr', '33333333', 'suba', 1, 2),
(2, 'admin02', '17101228@seoultech.ac.kr', '55555555', 'seungwu', 1, 2),
(3, 'user01', 'abcabc@gmail.com', '12345', 'bnnmn', 1, 1);
