var express = require('express');
var router = express.Router();
var app = express();

//Sucsessful Connection to Local MYSQL Server
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'celestial'
});
 
connection.connect();
//end of Mysql connection
 
connection.query('SELECT 1 + 1 AS answer', function (error, results, fields) {
  if (error) throw error;
  console.log('The answer is: ', results[0].answer);
});
 
connection.end();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mordor' });
});
//Post Method
app.post('/', (req, res) => {
  res.send('Got a post reqest')
})

//Put Method
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

//Delete Method 
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
