
-- --------------------------------------------------------

--
-- 테이블 구조 `postcontent`
--

CREATE TABLE `postcontent` (
  `post_id` int(11) NOT NULL,
  `contents` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `postcontent`
--

INSERT INTO `postcontent` (`post_id`, `contents`) VALUES
(1, '1. 옥수수콘과 치즈, 마요네즈까지 맛있는 것만 가득 섞은 모닝빵요리!'),
(2, '1.채소도 에어프라이어와 함께라면 그 맛이 업그레이드!'),
(3, '1.버터와 꿀을 섞어 칼집 낸 고구마에 발라 구워주세요! 달콤한 고구마간식 완성~'),
(4, '1.양송이버섯에 동그랗게 올린 다진고기에 빵가루 묻혀 에어프라이어에 쏙!'),
(5, '에어프라이어로 재료 가늗 넣은 맛있는 피자빵 만들기'),
(6, '그냥 먹어도 맛있는 만두를 에어프라이어에 굽고 매콤한 양념에 볶아주세요!');
