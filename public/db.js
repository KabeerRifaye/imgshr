/* Mongoose Connection*/

var mongoose = require('mongoose'),
    chalk = require('chalk');

var db = 'imgshr';
var URI = 'mongodb://localhost/' + db;

mongoose.connect(URI, function(e){
   console.log(e ? chalk.red("Error connecting with mongodb : " + e) : chalk.green.bold("Connected to database : " + db ));
});