var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var exec = require("child_process").exec;
var rimraf = require("rimraf");

gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./_book/"
        }
    });

    gulp.watch("./src/**/*.md", gulp.series("gitbook", function (done) {
        console.log("Starting browserSync.reload()...")
        browserSync.reload();
        done();
    }));
});

gulp.task("gitbook", function (cb) {
    console.log("Starting gitbook build...");
    exec("gitbook build ./src ./_book", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });

    console.log("Finished gitbook build...");
});

gulp.task("default", gulp.series("gitbook", "serve"));

