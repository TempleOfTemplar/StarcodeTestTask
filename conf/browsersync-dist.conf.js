const conf = require('./gulp.conf');

module.exports = function () {
    return {
        server: {
            baseDir: [
                conf.paths.dist
            ],
            middleware: function (req, res, next) {
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
                next();
            }
        },
        open: false
    };
};
