var gulp = require('gulp'),
    chalk = require('chalk'),
    nodemon = require('gulp-nodemon');

/* Restart server */
gulp.task('start', function(){
    nodemon({
        script: 'server.js'
    })
    .on('restart', function(){
        console.log(chalk.red.bold("Server Restarted..!!!"));
    })
});

gulp.task('default',['start']);