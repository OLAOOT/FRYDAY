
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
-- 테이블의 AUTO_INCREMENT `postcontent`
--
ALTER TABLE `postcontent`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 테이블의 AUTO_INCREMENT `userpost`
--
ALTER TABLE `userpost`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
