-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- 생성 시간: 21-12-04 09:55
-- 서버 버전: 10.4.21-MariaDB
-- PHP 버전: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `fryday`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `bookmark`
--

CREATE TABLE `bookmark` (
  `user_id` int(11) DEFAULT NULL,
  `bookmark_category` int(11) DEFAULT NULL,
  `bookmark_post` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, '빵·토스트'),
(2, '과자·스낵'),
(3, '야채·샐러드'),
(4, '냉동·냉장'),
(5, '고기·육류'),
(6, '닭·해산물');

-- --------------------------------------------------------

--
-- 테이블 구조 `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `texts` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `likes` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `comment`
--

INSERT INTO `comment` (`comment_id`, `post_id`, `user_id`, `texts`, `likes`) VALUES
(1, 1, 4, '맛있어요 :)', 0),
(2, 1, 5, '훌륭해요', 0),
(3, 1, 7, '저도 해먹어볼게요', 0),
(4, 1, 8, '굿', 0),
(5, 27, 5, '맛있어여', 0),
(6, 27, 6, '쉽네요', 0),
(7, 27, 10, '간편하네여', 0),
(8, 27, 1, '좋은 레시피 올려주셔서 감사합니다', 0),
(9, 2, 5, '맛있어여:)', 0),
(10, 30, 7, '그대로 보고 따라했는데 살짝 아쉬워요', 0),
(11, 31, 6, '시간이 너무 오래한거같아요 제대로 조리가 되지 않았네요', 0),
(12, 34, 7, '딱 적당한 조리 시간 이네요', 0),
(13, 29, 9, '버터 추천해줄실수 있나요?', 0),
(14, 35, 4, '다이어트할때 좋을것같아요', 0);

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
(1, '1. 원하는 크기대로 썰어서 200도 15분, 다시 흔들어서 200도 15분 돌려주세요.\r\n2. 달궈진 팬에 버터를 넣어주세요.\r\n3. 버터를 녹이고 소금, 후추, 파슬리가루를 취향껏 넣어서 볶아주세요.'),
(2, '1. 감자 껍질을 벗기고 2mm정도로 슬라이스해주세요\r\n2. 감자를 물에 담가 전분기를 제거해주세요\r\n3. 물기를 제거한 감자에 올리브유 조금과 소금을 살짝 뿌려주세요.\r\n4. 180도에서 6분, 뒤집어서 3분 튀겨주세요.'),
(25, '1. 냉동된 치킨너겟을 준비해 주세요.\r\n2. 180도에 15분간 돌려주세요.'),
(27, '1. 호일을 깔고 160도로 예열합니다.\r\n2. 10분간 가열합니다.\r\n3. 뒤집어서 다시 10분간 가열합니다'),
(28, '1. 호일을 깔고 160도로 예열합니다.\r\n2. 10분간 가열합니다.\r\n3. 뒤집이서 다시 10분간 가열합니다'),
(29, '1. 200도에서 10분간 예열시켜 주세요.\r\n2. 그릇에 버터와 다진 마늘, 설탕을 넣고 섞어주세요.\r\n3. 식빵 한쪽 면에 버터를 골고루 바르고 파슬리 가루를 뿌려주세요\r\n4. 200도에서 5분간 조리해주세요'),
(30, '1. 박력분, 베이킹파우더, 설탕, 소금을 체쳐주세요.\r\n2. 버터를 넣고 스크래퍼로 다져주세요.\r\n3. 생크림, 우유를 넣고 섞어주세요.\r\n4. 반죽을 30분 동안 냉장고에서 휴지해주세요.\r\n5. 160도에서 15분간 돌려주세요.'),
(31, '1. 계란을 상온에 꺼내어 냉기를 제거해주세요.\r\n2. 180도로 10분간 돌려주세요.'),
(32, '1. 껍질을 세척해주세요.\r\n2. 에어프라이어에 종일 포일을 깔아주세요.\r\n3. 200도에서 25분 돌려주세요.\r\n4. 상태를 보고 200도에서 15분 더 돌려주세요.'),
(33, '1. 마늘을 손질 후 슬라이스해주세요.\r\n2. 마늘에 올리브유를 살짝 발라주세요.\r\n3. 140도에서 10분 돌려주세요.\r\n4. 잘 섞어 다시 한번 10분 돌려주세요.'),
(34, '1. 종이호일을 깔고 세척한 단호박을 넣어주세요.\r\n2. 180도에서 10분간 돌려주세요.\r\n3. 뒤집어서 180도에서 10분간 돌려주세요.'),
(35, '1. 버섯에 소금이나 허브솔트를 뿌려주세요.\r\n2. 180도에서 5분간 돌려주세요.\r\n3. 뒤집어서 5분간 돌려주세요.'),
(36, '1. 양파를 링 모양으로 썰어주세요\r\n2. 달걀에 소금, 후추를 넣고 섞어 달걀물을 만들어주세요.\r\n3. 양파를 밀가루, 달걀물, 빵가루 순으로 묻혀주세요.\r\n4. 180도에서 10분간 돌려주세요'),
(37, '1. 식빵을 스틱모양으로 잘라주세요.\r\n2. 버터를 전제레인지로 살짝 녹여주세요\r\n3. 버터를 식빵에 발라주세요\r\n4. 190도에서 6분간 돌려주세요'),
(38, '1. 에어프라이어에 양파를 깔고 목살을 넣은 후 180도에서 10분간 구워주세요.\r\n2. 양념장을 만들어주세요\r\n3. 구워진 고기에 양념장을 발라 180도에 5분간 더 구워주세요.\r\n');

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
(3, 'user01', 'abcabc@gmail.com', '12345', 'bnnmn', 1, 1),
(4, 'user02', 'box@gmail.com', '12345', 'oxvin', 1, 1),
(5, 'user03', 'oxcpc@gmail.com', '12345', 'cvoih', 1, 1),
(6, 'user04', 'bnop@gmail.com', '12345', 'vocp', 2, 1),
(7, 'user05', 'oxicocvx@gmail.com', '12345', 'bnopxer', 1, 1),
(8, 'user06', 'lkpxoci@gmail.com', '12345', 'opicxu', 1, 1),
(9, 'user07', 'ichubnck@gmail.com', '12345', 'zoxc', 1, 1),
(10, 'user08', 'bxcvpxco@gmail.com', '12345', 'wemcx', 2, 1),
(11, 'user09', 'xcvnbie@gmail.com', '12345', 'enxcvb', 1, 1),
(12, 'user10', 'xocvhi@gmail.com', '12345', 'xcvoe', 1, 1),
(13, 'user11', 'akbei@gmail.com', '12345', 'bxcjvo', 1, 1);

-- --------------------------------------------------------

--
-- 테이블 구조 `userpost`
--

CREATE TABLE `userpost` (
  `post_id` int(11) NOT NULL,
  `post_title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `likes` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL,
  `upload_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `userpost`
--

INSERT INTO `userpost` (`post_id`, `post_title`, `user_id`, `views`, `likes`, `category_id`, `upload_date`) VALUES
(1, '알감자버터구이', 6, 0, 0, 3, '2021-12-04'),
(2, '감자칩', 8, 0, 0, 2, '2021-12-04'),
(25, '치킨너겟', 3, 0, 0, 6, '2021-12-04'),
(26, '새우튀김', 4, 0, 0, 6, '2021-12-04'),
(27, '호빵', 8, 0, 0, 1, '2021-12-04'),
(28, '찐빵', 10, 0, 0, 1, '2021-12-02'),
(29, '마늘빵', 11, 0, 0, 1, '2021-12-01'),
(30, '스콘', 5, 0, 0, 1, '2021-12-04'),
(31, '구운 달걀', 7, 0, 0, 6, '2021-12-04'),
(32, '군고구마', 4, 0, 0, 3, '2021-12-04'),
(33, '마늘칩', 6, 0, 0, 2, '2021-12-04'),
(34, '단호박구이', 9, 0, 0, 3, '2021-12-04'),
(35, '새송이 통구이', 9, 0, 0, 3, '2021-12-04'),
(36, '어니언링', 11, 0, 0, 2, '2021-12-04'),
(37, '식빵러스크', 10, 0, 0, 1, '2021-12-04'),
(38, '고추장 목살구이', 6, 0, 0, 5, '2021-12-04'),
(39, '데리야끼 막창구이', 12, 0, 0, 5, '2021-12-04'),
(40, '통삼겹살구이', 9, 0, 0, 5, '2021-12-04'),
(41, '몬테크리스토', 8, 0, 0, 1, '2021-12-04'),
(42, '코코넛쉬림프', 8, 0, 0, 6, '2021-12-04'),
(45, '가자미 버터구이', 6, 0, 0, 6, '2021-12-04'),
(46, '대파소스 고등어구이', 7, 0, 0, 6, '2021-12-04'),
(47, '통오징어구이', 9, 0, 0, 6, '2021-12-04'),
(48, '조개 술찜', 3, 0, 0, 6, '2021-12-04'),
(49, '모둠채소구이', 4, 0, 0, 3, '2021-12-04'),
(50, '명란 주먹밥구이', 5, 0, 0, 2, '2021-12-04'),
(51, '에그토스트', 6, 0, 0, 1, '2021-12-04'),
(52, '허니브레드', 6, 0, 0, 1, '2021-12-04'),
(53, '에그아보카도', 7, 0, 0, 1, '2021-12-04'),
(54, '감자튀김', 8, 0, 0, 2, '2021-12-04'),
(55, '군만두', 9, 0, 0, 4, '2021-12-04'),
(56, '깐풍만두', 9, 0, 0, 4, '2021-12-04'),
(57, '로제만두', 9, 0, 0, 4, '2021-12-04'),
(58, '오지치즈프라이', 7, 0, 0, 2, '2021-12-04'),
(59, '웨지감자', 10, 0, 0, 4, '2021-12-04');

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

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- 테이블의 인덱스 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- 테이블의 인덱스 `postcontent`
--
ALTER TABLE `postcontent`
  ADD PRIMARY KEY (`post_id`);

--
-- 테이블의 인덱스 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 테이블의 인덱스 `userpost`
--
ALTER TABLE `userpost`
  ADD PRIMARY KEY (`post_id`);

--
-- 테이블의 인덱스 `userstate`
--
ALTER TABLE `userstate`
  ADD PRIMARY KEY (`user_state`);

--
-- 테이블의 인덱스 `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`user_type`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 테이블의 AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 테이블의 AUTO_INCREMENT `postcontent`
--
ALTER TABLE `postcontent`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 테이블의 AUTO_INCREMENT `userpost`
--
ALTER TABLE `userpost`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
