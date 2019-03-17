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

    gulp.watch("**/*.md", {ignored: "./_book/**/*.md"}, gulp.series("gitbook", function (done) {
        console.log("Starting browserSync.reload()...")
        browserSync.reload();
        done();
    }));
});

gulp.task("gitbook", function (cb) {
    console.log("Starting rimraf...");
    rimraf("./_book", function (err) {
        if (err) {
            console.log(err);
            cb(err);
        }
        else {
            console.log("Starting gitbook build...");
            exec("gitbook build", function (err, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
                cb(err);
            });
            
            console.log("Finished gitbook build...");
        }
    });
    console.log("Finished rimraf...");

});

gulp.task("default", gulp.series("gitbook", "serve"));

