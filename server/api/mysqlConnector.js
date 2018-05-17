let mysql = require('mysql');

let x = "none";
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: "test"
});
    
connection.connect();

connection.query('SELECT pass AS sol FROM authData WHERE login LIKE "admin"', (err, rows, fields) => {
    x = rows[0].sol;    
    console.log(x);     
});
connection.end(); 






    




