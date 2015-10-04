/* Node Modules */
var express = require('express'),
    app = express(),
    chalk = require('chalk'),
    stylus = require('stylus'),
    bodyParser = require('body-parser');

/* Stylus Configuration*/
function compile(str, path){
    return stylus(str).set('filename', path);
}

/* Express Configuration */
app.set("views", __dirname + "/server/views");
app.set("view engine", "jade");
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(stylus.middleware({
    src: __dirname + "/public",
    compile: compile
}));
app.use(express.static(__dirname + "/public"));

/* Routes */
app.get('/partials/:partialPath', function(req, res){
   res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index');
});

/* Mongoose Connection */
require('./public/db');

/* Listen to server */
var port = process.env.PORT || 3000;
app.listen(port, function(){
   console.log(chalk.green.underline("Listening on port : ",port));
});
