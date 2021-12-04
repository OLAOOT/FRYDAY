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

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false }));

// 개별 데이터 조회
app.get('/category', function(request, response) {
    var id = Number(request.param('id'));

    if (isNaN(id)) {
        response.send({
            error:'Enter the number!'
        });
    } else if (items[id]) {
        response.send(items[id]);
    } else {
        response.send({
            error: "Not Exists!"
        });
    }
});

//likes 상위 10개 레시피 정보 GET
app.get('/top10', function(request, response) {
    client.query('SELECT * FROM userpost ORDER BY likes DESC LIMIT 10', function(error, data) {
        response.send(data);
    });
});

//해당하는 카테고리별 레시피 GET
app.get('/category/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('SELECT up.*, u.user_nickname FROM userpost AS up JOIN user AS u ON up.user_id = u.user_id WHERE category_id=?',[
        id], function(error, data) {
            response.send(data);
    });
});
 
//개별 레시피 GET + 댓글포함
app.get('/recipe/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('SELECT up.*, p.*, u.user_nickname, c.* FROM userpost AS up JOIN postcontent AS p ON + up.post_id = p.post_id JOIN comment AS c ON c.post_id = p.post_id JOIN user AS u ON up.user_id = u.user_id WHERE up.post_id=?',[
        id], function(error, data) {
            response.send(data);
    });
});

//개별 레시피 GET (댓글 미포함)
// app.get('/recipe/:id', function(request, response) {
//     var id = Number(request.param('id'));

//     client.query('SELECT up.*, p.*, u.user_nickname FROM userpost AS up JOIN postcontent AS p ON + up.post_id = p.post_id JOIN user AS u ON up.user_id = u.user_id WHERE up.post_id=?',[
//         id], function(error, data) {
//             response.send(data);
//     });
// });

//개별 레시피 삭제 DEL
app.del('/reciple/:id', function(request, response) {
    var id = Number(request.param('id'));

    var sql1 = 'DELETE FROM userpost WHERE post_id=?;';
    var sql2 = 'DELETE FROM postcontent WHERE post_id=?;';

    client.query(sql1+sql2, [
        id, id
    ], function(error, data) {
        response.send(data);
    });
});

//댓글 정보 갖고오기 GET /여기서 request로 받아오는 id는 post_id. comment_id가 아님에 유의
app.get('/comment/:id', function(request, response) {
    var id = Number(request.param('id'));

    client.query('SELECT c.* FROM comment AS c JOIN postcontent AS p ON c.post_id = p.post_id WHERE c.post_id=?',[
        id], function(error, data) {
            response.send(data);
    });
});

//게시글 작성
app.post('/recipe', function(request, response) {
    var title = request.param('title');
    var userid = request.param('id');
    var category = request.param('category');
    var nickname = request.param('nickname');

});

//데이터 추가
app.post('/products', function(request, response){
    var name = request.param('name');
    var price = request.param('price');
    var item = {
        name: name,
        price: price
    };

    items.pust(item);

    response.send({
        message: "Data Add Completed",
        data: item
    });
});

//데이터 수정
app.put('/products/:id', function(request, response) {
    var id = number(requset.param('id'));
    var name = request.param('name');
    var price = request.param('price');

    if (items[id]) {
        if(name) { items[id].name = name; }
        if(price) { items[id].price = price; }

        response.send({
            message: "Data Revised",
            data: items[id]
        });
    } else {
        response.send({
            error: "Not Exists!"
        });
    }
});

//데이터 삭제
app.del('/products', function(request, response) {
    var id = Number(request.param('id'));

    if (isNaN(id)) {
        response.send({
            error:'Enter the number!'
        });
    } else if (items[id]) {
        items.splice(id, 1);
        response.send({
            message: "Data Deleted"
        });
    } else {
        response.send({
            error: "Not Exists!"
        });
    }
});

http.createServer(app).listen(3333, function() {
    console.log('Server Running at http://127.0.0.1:3333');
});