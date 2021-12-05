var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { response } = require('express');

var client = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password:'1234',
    database: 'fryday'
});

client.connect(e => {
    if (e) {
        throw e
    }
    console.log('Connected!')
})

/*
client.query('SELECT 1 FROM user WHERE user_name IN ("user18") LIMIT 1', function(error, result){
    if(error) {
        console.log("쿼리문장에 오류가 있습니다!");
    } else {
        console.log(result);
    }
});
*/

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.get('/login/:username/:password', function(request, response) {
    var username = request.param('username');
    var password = request.param('password');
    // user 테이블에 username과 password 모두 일치하는 것이 있으면 쿼리가 1을 반환, 없으면 empty 반환
	client.query('SELECT 1 FROM user WHERE user_name=? AND user_password=? LIMIT 1', [username, password],
    function(error, data) {
        if (data==1) {
            client.query('INSERT INTO loginlist(user_name, bool_state) VALUES (?, 1)', [username],
            function(error, data) {
                response.send(data);
            });
        }
    });
});

//로그인
app.post('/login', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		client.query('SELECT * FROM user WHERE user_name = ? AND user_password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
				response.end();
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


//회원가입
app.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var password2 = request.body.password2;
	var email = request.body.email;
    var nickname = request.body.nickname;
	if (username && password && email && nickname) {
		client.query('SELECT * FROM user WHERE user_name = ? AND user_password = ? AND user_email = ? AND user_nickname = ?', [username, password, email, nickname], function(error, results, fields) {
			if (error) throw error;
			if (results.length <= 0) {
        client.query('INSERT INTO user (user_id, user_name, user_email, user_password, user_nickname, user_state, user_type) VALUES(NULL, ?,?,?,?,1,1)', [username, email, password, nickname],
            function (error, data) {
                if (error)
                  console.log(error);
                else
                  console.log(data);
        });
			  response.send(username + ' Registered Successfully!<br><a href="/home">Home</a>');
			} else {
				response.send(username + ' Already exists!<br><a href="/home">Home</a>');
			}			
			response.end();
		});
	} else {
		response.send('Please enter User Information!');
		response.end();
	}
});

// username 중복검사
app.get('/duplicate/:username', function(request, response) {
    var username = request.param('username');

    // username이 없으면 NULL 반환 
    client.query('SELECT 1 FROM user WHERE user_name IN (?) LIMIT 1', [username], function(error, data) {
        response.send(data);
    });
});

// email 중복검사
app.get('/duplicate/:email', function(request, response) {
    var email = request.param('email');

    // username이 없으면 NULL 반환 
    client.query('SELECT 1 FROM user WHERE user_email IN (?) LIMIT 1', [email], function(error, data) {
        response.send(data);
    });
});    

// nickname 중복검사
app.get('/duplicate/:nickname', function(request, response) {
    var nickname = request.param('nickname');

    // username이 없으면 NULL 반환 
    client.query('SELECT 1 FROM user WHERE user_nickname IN (?) LIMIT 1', [nickname], function(error, data) {
        response.send(data);
    });
});    

//로그아웃
app.get('/logout', function(request, response) {
    request.session.loggedin = false;
    response.send(request.session.loggedin);
    response.end();
});

//likes 상위 10개 레시피 정보 GET
app.get('/top10', function(request, response) {
    client.query('SELECT up.*, u.user_nickname, COUNT(c.post_id) AS com_count FROM userpost AS up JOIN user AS u ON up.user_id = u.user_id LEFT OUTER JOIN comment AS c ON up.post_id = c.post_id GROUP BY up.post_id ORDER BY up.likes DESC LIMIT 10', function(error, data) {
        response.send(data);
    });
});

//해당하는 카테고리별 레시피 GET
app.get('/category/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('SELECT up.*, u.user_nickname, COUNT(c.post_id) AS com_count FROM userpost AS up JOIN user AS u ON up.user_id = u.user_id LEFT OUTER JOIN comment AS c ON up.post_id = c.post_id WHERE up.category_id=? GROUP BY up.post_id',[
        id], function(error, data) {
            response.send(data);
    });
});
 
//개별 레시피 GET
app.get('/recipe/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('SELECT up.*, u.user_nickname FROM userpost AS up JOIN user AS u ON up.user_id = u.user_id WHERE up.post_id=?',[
        id], function(error, data) {
            response.send(data);
    });
});

//댓글 정보 갖고오기 GET
app.get('/comment/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('SELECT c.*, u.user_nickname FROM comment AS c JOIN user AS u ON c.user_id = u.user_id WHERE c.post_id=?',[
        id], function(error, data) {
            response.send(data);
    });
});

//개별 레시피 삭제 DELETE
app.delete('/recipe/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('DELETE FROM userpost WHERE post_id=?' , [
        id
    ], function(error, data) {
        response.send(data);
    });
});

//개별 댓글 삭제 DELETE
app.delete('/comment/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('DELETE FROM comment WHERE comment_id=?' , [
        id
    ], function(error, data) {
        response.send(data);
    });
});

//게시글 작성 POST
app.post('/recipe', function(request, response) {
    var title = request.body.title;
    var userid = request.body.id;
    var category = request.body.category;
    var postfyi = request.body.post_fyi;
    var text = request.body.content;

    client.query('INSERT INTO userpost(post_id, post_title, user_id, views, likes, category_id, post_fyi, contents) VALUES(NULL, ?, ?, 0, 0, ?, ?, ?)', [
        title, userid, category, postfyi, text
    ], function(error, data) {
        response.send(data);
    });
});

//댓글 작성 POST
app.post('/comment', function(request, response) {
    var postid = request.body.post_id;
    var text = request.body.text;
    var userid = request.body.user_id;

    client.query('INSERT INTO comment (comment_id, post_id, user_id, texts) VALUES(NULL,?,?,?)', [
        postid, userid, text
    ], function(error, data) {
        response.send(data);
    });
}); 

//게시글 수정 PUT
app.put('/recipe/:id', function(request, response) {
    var title = request.body.title;
    var userid = request.body.id;
    var category = request.body.category;
    var postfyi = request.body.post_fyi;
    var text = request.body.content;
    var id = Number(request.param('id'));

    client.query('UPDATE userpost SET post_title=?, category_id=?, post_fyi=?, contents=? WHERE post_id=? AND user_id=?', [
        title, category, postfyi, text, id, userid
    ], function(error, data) {
        response.send(data);
    });
});

//댓글 수정 PUT
app.put('/comment/:id', function(request, response) {
    var postid = request.body.post_id;
    var text = request.body.text;
    var userid = request.body.user_id;
    var id = Number(request.param('id'));

    client.query('UPDATE comment SET texts=? WHERE post_id=? AND user_id=? AND comment_id=?', [
        text, postid, userid, id
    ], function(error, data) {
        response.send(data);
    });
});

http.createServer(app).listen(3333, function() {
    console.log('Server Running at http://127.0.0.1:3333');
});
