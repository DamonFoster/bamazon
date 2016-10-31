var mysql = require('mysql');
var inquirer = require('inquirer');

var connnection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "a1-a12sd3",
	database: "bamazon"
})

connnection.connect(function(err) {
	if (err) throw err;
	runSearch();
})

var runSearch = function() {
	connection.query(query, function( err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i]);
		}
	})
}