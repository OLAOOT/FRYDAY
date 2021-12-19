-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- 생성 시간: 21-12-18 18:24
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
  `texts` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `comment`
--

INSERT INTO `comment` (`comment_id`, `post_id`, `user_id`, `texts`) VALUES
(1, 1, 4, '맛있어요 :)'),
(2, 1, 5, '훌륭해요'),
(3, 1, 7, '저도 해먹어볼게요'),
(4, 1, 8, '굿'),
(5, 27, 5, '맛있어여'),
(6, 27, 6, '쉽네요'),
(7, 27, 10, '간편하네여'),
(8, 27, 1, '좋은 레시피 올려주셔서 감사합니다'),
(9, 2, 5, '맛있어여:)'),
(10, 30, 7, '그대로 보고 따라했는데 살짝 아쉬워요'),
(11, 31, 6, '시간이 너무 오래한거같아요 제대로 조리가 되지 않았네요'),
(12, 34, 7, '딱 적당한 조리 시간 이네요'),
(13, 29, 9, '버터 추천해줄실수 있나요?'),
(14, 35, 4, '다이어트할때 좋을것같아요'),
(15, 60, 8, 'sdfjosaijfoa'),
(16, 32, 14, '우왕 초록색이다'),
(17, 32, 14, 'ㄴㅇㄻㄴㅇㄻㄴㄻㄴㅇㄹㄴㅇㅁㄻㄴㅇㄻㄴㄹㄴㄹㄴㅁㅇㄻㄴㅇㄹㄴㄻㄴㅇㄹ'),
(18, 45, 14, '시간 너무 짧아요'),
(19, 45, 14, '맛있어여'),
(20, 45, 14, '흠..');

-- --------------------------------------------------------

--
-- 테이블 구조 `likerecipe`
--

CREATE TABLE `likerecipe` (
  `id_like` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 테이블 구조 `loginlist`
--

CREATE TABLE `loginlist` (
  `user_name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bool_state` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `loginlist`
--

INSERT INTO `loginlist` (`user_name`, `bool_state`) VALUES
('bad', 1),
('bad', 1);

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
(3, 'Stent1960', 'KyleDCorder@armyspy.com', 'phei5Yoov8', 'Kyle', 1, 1),
(4, 'Blipts', 'JoseSSandoval@dayrep.com', 'Iexoe0yaij7u!', 'Jose', 1, 1),
(5, 'Oling1987', 'EdwinNJennings@dayrep.com', 'Ra1shei3!', 'Edwin', 1, 1),
(6, 'Mycou1980', ' StevenMKrajewski@rhyta.com', 'ekahk5siKai!', 'Steven', 2, 1),
(7, 'Therinueng', 'CharlesEGilliam@rhyta.com', 'coaha0Aija!', 'Charles', 1, 1),
(8, 'Himpeas', 'lkpxoci@gmail.com', 'Thig7eiJ2!', 'Ronald', 1, 1),
(9, 'Anderelik', 'MarjorieTDenton@rhyta.com', 'Ith!9ren3Vi', 'Marjorie', 1, 1),
(10, 'Pation', 'LauraMClaude@teleworm.us', 'fi1Q!uaijahp', 'Laura', 2, 1),
(11, 'Thaveling', 'ScottDMcDonald@rhyta.com', 'Ong5eich!2ea', 'Scott', 1, 1),
(12, 'Prompoing', 'CoriWJensen@armyspy.com', 'Ho!9ue5ief', 'Cori', 1, 1),
(13, 'Chismakey', 'MaryEBarbee@armyspy.com', 'tahB8q!uu6a', 'Mary', 1, 1),
(14, 'suba011', 'sdpf@naver.com', 'wjdgjs10!', 'subabus', 1, 1),
(15, 'ngho1202', 'ngho1202@naver.com', 'wjdgjs10!', 'leesen', 1, 1);

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
  `post_fyi` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contents` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 테이블의 덤프 데이터 `userpost`
--

INSERT INTO `userpost` (`post_id`, `post_title`, `user_id`, `views`, `likes`, `category_id`, `post_fyi`, `contents`) VALUES
(1, '알감자버터구이', 6, 0, 186, 3, '\\img1111111111', '원하는 크기대로 썰어서 200도 15분, 다시 흔들어서 200도 15분 돌려주세요.\r\n달궈진 팬에 버터를 넣어주세요.\r\n버터를 녹이고 소금, 후추, 파슬리가루를 취향껏 넣어서 볶아주세요.'),
(2, '감자칩', 8, 0, 156, 2, '감자는 너무 얇지도 두껍지도 않게 썰어주세요!\\img2222222222', '감자 껍질을 벗기고 2mm정도로 슬라이스해주세요\r\n감자를 물에 담가 전분기를 제거해주세요\r\n물기를 제거한 감자에 올리브유 조금과 소금을 살짝 뿌려주세요.\r\n180도에서 6분, 뒤집어서 3분 튀겨주세요.'),
(25, '치킨너겟', 3, 0, 99, 6, '\\img2525252525', '냉동된 치킨너겟을 준비해 주세요.\r\n180도에 15분간 돌려주세요.'),
(26, '새우튀김', 4, 0, 99, 6, '\\img2626262626', '새우를 손질해주세요\r\n한쪽면에 허브솔트를 뿌려주세요\r\n튀김가루, 계란물, 빵가루 순서대로 묻혀주세요\r\n180도에서 15분 돌려주세요'),
(27, '호빵', 8, 0, 0, 1, '\\img2727272727', '호일을 깔고 160도로 예열합니다.\r\n10분간 가열합니다.\r\n뒤집어서 다시 10분간 가열합니다'),
(28, '찐빵', 10, 0, 0, 1, NULL, '호일을 깔고 160도로 예열합니다.\r\n10분간 가열합니다.\r\n뒤집어서 다시 10분간 가열합니다'),
(29, '마늘빵', 11, 0, 72, 1, '\\img2929292929', '200도에서 10분간 예열시켜 주세요.\r\n그릇에 버터와 다진 마늘, 설탕을 넣고 섞어주세요.\r\n식빵 한쪽 면에 버터를 골고루 바르고 파슬리 가루를 뿌려주세요\r\n200도에서 5분간 조리해주세요'),
(30, '스콘', 5, 0, 12, 1, '\\img3030303030', '박력분, 베이킹파우더, 설탕, 소금을 체쳐주세요.\r\n버터를 넣고 스크래퍼로 다져주세요.\r\n생크림, 우유를 넣고 섞어주세요.\r\n반죽을 30분 동안 냉장고에서 휴지해주세요.\r\n160도에서 15분간 돌려주세요.'),
(31, '구운 달걀', 7, 0, 0, 6, '다이어트에 딱 이죠?', '계란을 상온에 꺼내어 냉기를 제거해주세요.\r\n180도로 10분간 돌려주세요.'),
(32, '군고구마', 4, 0, 2, 3, NULL, '껍질을 세척해주세요.\r\n에어프라이어에 종일 포일을 깔아주세요.\r\n200도에서 25분 돌려주세요.\r\n상태를 보고 200도에서 15분 더 돌려주세요.'),
(33, '마늘칩', 6, 0, 55, 2, '중간중간에 계속 확인해주세요 :)', '마늘을 손질 후 슬라이스해주세요.\r\n마늘에 올리브유를 살짝 발라주세요.\r\n140도에서 10분 돌려주세요.\r\n잘 섞어 다시 한번 10분 돌려주세요.'),
(34, '단호박구이', 9, 0, 0, 3, '\\img3434343434', '종이호일을 깔고 세척한 단호박을 넣어주세요.\r\n180도에서 10분간 돌려주세요.\r\n뒤집어서 180도에서 10분간 돌려주세요.'),
(35, '새송이 통구이', 9, 0, 77, 3, '\\img3535353535', '버섯에 소금이나 허브솔트를 뿌려주세요.\r\n180도에서 5분간 돌려주세요.\r\n뒤집어서 5분간 돌려주세요.'),
(36, '어니언링', 11, 0, 0, 2, '\\img3636363636', '양파를 링 모양으로 썰어주세요\r\n달걀에 소금, 후추를 넣고 섞어 달걀물을 만들어주세요.\r\n양파를 밀가루, 달걀물, 빵가루 순으로 묻혀주세요.\r\n180도에서 10분간 돌려주세요'),
(37, '식빵러스크', 10, 0, 60, 1, '너무오래가면 딱딱해져요 조심해주세요\\img3737373737', '식빵을 스틱모양으로 잘라주세요.\r\n버터를 전제레인지로 살짝 녹여주세요\r\n버터를 식빵에 발라주세요\r\n190도에서 6분간 돌려주세요'),
(38, '고추장 목살구이', 6, 0, 0, 5, '목살말고도 삼겹살 부위도 좋습니다. 자투리고기도 좋구요', '에어프라이어에 양파를 깔고 목살을 넣은 후 180도에서 10분간 구워주세요.\r\n구워진 고기에 양념장을 발라 180도에 5분간 더 구워주세요.\r\n'),
(39, '데리야끼 막창구이', 12, 0, 0, 5, '\\img3939393939', '양파를 4등분하고 에어프라이어 바닥에 깔아주세요.\r\n양파 위에 데리야기 소스를 바른 막창을 올려주세요.\r\n220도에서 15분동안 1차 초벌구이 해주세요.\r\n220도로 10분동안 2차로 구워주세요.\r\n마지막으로 야채와 함께 220도로 10분간 구워주세요.'),
(40, '통삼겹살구이', 9, 0, 0, 5, '\\img4040404040', '삼겹살에 칼집을 내주고 올리브유, 스테이크시즈닝을 뿌려주세요.\r\n종이호일을 깔고 160도에서 30분간 돌려주세요.\r\n뒤집어서 야채들과 함께 160도에서 20분간 돌려주세요.'),
(41, '몬테크리스토', 8, 0, 0, 1, '\\img4141414141', '식빵,잼,햄,치즈,식빵,잼,햄,치즈,식빵순으로 얹어주세요.\r\n계란물을 풀고 소금으로 간을 해주세요.\r\n계란물을 묻힌 후 빵가루를 뿌려주세요.\r\n180도로 8분동안 돌려주세요.'),
(42, '코코넛쉬림프', 8, 0, 0, 6, NULL, '손질한 새우에 소금,후추를 뿌려 밑간을 해주세요.\r\n밀가루, 달걀물, 코코넛 롱 순으로 묻혀주세요.\r\n에어프라이어 바스켓에 식용유를 약간 뿌린 후 180도에서 10분간 구워주세요.\r\n'),
(45, '가자미 버터구이', 6, 0, 2, 6, '\\img4545454545', '가자미를 손질하고 등에 칼집을 내어주세요.\r\n에어프라이어에 허브와 버터를 놓고 가자미를 넣어주세요.\r\n180도에서 20분 동안 돌려주세요.'),
(46, '대파소스 고등어구이', 7, 0, 0, 6, NULL, '파소스를 만들어주세요.\r\n물기를 충분히 뺀 후 식용유를 골고루 발라 에어프라이어에 넣어주세요.\r\n180도에서 10분간 껍질이 아래쪽을 향하게 돌려주세요.\r\n뒤집어서 4분간 돌려주세요.'),
(47, '통오징어구이', 9, 0, 0, 6, '\\img4747474747', '버터를 전자레인지로 살짝 녹인 후, 간장, 맛술, 파슬리와 같이 섞어주세요\r\n오징어 양끝을 살짝 가위로 자른 후 버터 간장소스를 발라주세요.\r\n180도에서 10분간 돌려주세요.\r\n뒤집어서 180도에서 10분간 돌려주세요.'),
(48, '조개 술찜', 3, 0, 86, 6, '술과 함께 드세요 ㅎ\\img4848484848', '바지락은 소금물에 해감해서 깨끗이 씻어주세요\r\n내열 그릇에 바지락을 넣고 물100ml, 맛술, 마늘, 고추, 소금, 후추를 뿌려주세요\r\n80도에서 5분간 돌려주세요\r\n바지락을 한 번 섞고 180도에서 5분 돌려주세요'),
(49, '모둠채소구이', 4, 0, 3, 3, NULL, '넣을 채소들을 손질해주세요\r\n허브솔트와 허브를 섞어주세요\r\n200도에서 10분간 돌려주세요\r\n뒤집어서 5분간 더 돌려주세요'),
(50, '명란 주먹밥구이', 5, 0, 0, 2, NULL, '밥, 명란젓, 참기름, 마요네즈, 맛술을 넣고 잘 섞어주세요\r\n주먹밥모양을 만들고 180도에서 10분간 돌려주세요'),
(51, '에그토스트', 6, 0, 0, 1, NULL, '식빵 2개를 준비하고 1개의 식빵에 원형 구멍을 뚫어주세요\r\n하나의 식빵에 치즈를 올리고 구멍뚫은 식빵을 올려주세요\r\n구멍 안쪽에 마요네즈를 살짝 짜넣고 식빵 테두리를 따라서도 마요네즈를 짜주세요\r\n구멍에 계란을 풀고 소금, 후추, 파슬리를 뿌려주세요\r\n180도에서 10분간 돌려주세요'),
(52, '허니브레드', 6, 0, 0, 1, '\\img5252525252', '버터를 전자레인지로 녹여주세요\r\n식빵에 버터를 발라주세요\r\n180도에서 6분간 돌려주세요\r\n빵 위에 생크림, 계피가루, 시럽을 뿌린 뒤 자유롭게 드세요.'),
(53, '에그아보카도', 7, 0, 0, 3, '\\img5353535353', '베이컨을 잘게 썰고 아보카도는 반으로 썰어주세요\r\n아보카도를 살짝 파내 계란이 들어갈수있는 공간을 만들어주세요\r\n아보카도안에 계란과 베이컨을 넣어주세요\r\n180도에서 15분 동안 돌려주세요'),
(54, '감자튀김', 8, 0, 0, 2, NULL, '감자를 너무 굵지않게 썰어주세요\r\n물에 3~4번 행궈서 전분을 제거해주세요\r\n물기를 제거하고 소금, 파슬리, 식용유를 넣고 버무려주세요\r\n180도에서 10분간 돌려주세요\r\n한번 흔들어서 180도에서 10분간 돌려주세요'),
(55, '군만두', 9, 0, 0, 4, NULL, '냉동만두에 기름을 살짝 발라주세요\r\n종이호일을 깔고 만두를 올려주세요\r\n예열없이 180도에서 10분간 구워주세요\r\n뒤집어서 180도에서 3분간 구워주세요'),
(56, '깐풍만두', 9, 0, 0, 4, NULL, '냉동만두에 기름을 살짝 발라주세요\r\n종이호일을 깔고 만두를 올려주세요\r\n예열없이 180도에서 10분간 구워주세요\r\n뒤집어서 180도에서 3분간 구워주세요\r\n준비해둔 깐풍소스에 버무려주세요'),
(57, '로제만두', 9, 0, 0, 4, NULL, '냉동만두에 기름을 살짝 발라주세요\r\n종이호일을 깔고 만두를 올려주세요\r\n예열없이 180도에서 10분간 구워주세요\r\n뒤집어서 180도에서 3분간 구워주세요\r\n준비해둔 로제소스에 버무려주세요'),
(58, '오지치즈프라이', 7, 0, 0, 2, NULL, '치즈,베이컨,햄을 잘게 썰어주세요\r\n냉동 후렌치후라이를 꺼내 180도에서 10분간 돌려주세요\r\n위에서 손질한 재료들을 넣고 3분간 더 돌려주세요'),
(59, '웨지감자', 10, 0, 0, 4, NULL, '손질한 감자를 끓는 물에 5분간 삶아주세요\r\n올리브유, 소금, 파슬리감자에 버무려주세요\r\n180도에서 15분 동안 돌려주세요\r\n뒤집어서 7분 더 돌려주세요'),
(61, '원두볶음', 5, 0, 0, 6, '먹을수없는음식입니다', '원두를간장에볶아주세요'),
(64, '닭껍질 튀김', 15, 0, 0, 6, '', 'HI~\r\n안녕하세요, 여러분~ 오늘은 제가 닭껍질튀김을 소개해드릴게요\r\n닭껍질은 구하기 어려우니 인터넷으로 주문하세요\r\n닭껍질을 소주나 청주에 재워두시고 물기를 제거해주세요\r\n튀김가루, 달걀물, 빵가루 순으로 묻혀서 에어프라이어에 넣어주세요\r\n200도에서 15분 돌려주세요'),
(65, '보리새우깡', 15, 0, 0, 2, '튀김가루는 비닐봉지에 넣어서 흔들면 편해요!!', '보리새우를 프라이팬에 살짝 볶아주세요\r\n채에 넣어서 잔 먼지가 날아가게 털어주세요\r\n튀김가루를 묻혀서 흔들어주세요\r\n에어프라이어에 120도로 5분간 돌려주세요'),
(66, '미트파이', 15, 0, 0, 5, '', '통목살을 준비해주세요\r\n통목살에 후추, 소금, 올리브유를 바르고 200도 에서 10분 돌려주세요\r\n뒤집어서 200도에서 10분 돌려주세요');

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
-- 테이블의 인덱스 `likerecipe`
--
ALTER TABLE `likerecipe`
  ADD PRIMARY KEY (`id_like`);

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
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 테이블의 AUTO_INCREMENT `likerecipe`
--
ALTER TABLE `likerecipe`
  MODIFY `id_like` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 테이블의 AUTO_INCREMENT `userpost`
--
ALTER TABLE `userpost`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;