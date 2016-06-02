var express = require('express');
var path = require('path');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/carbon', function(req, res) {
  res.redirect('https://github.com/koush/support-wiki/wiki/Helium-Desktop-Installer-and-Android-App');
});

// legacy?
app.get('/allcast/discover', function(req, res) {
  res.redirect('https://play.google.com/store/apps/details?id=com.koushikdutta.cast');
});

app.get('/tether/drivers', function(req, res) {
  res.redirect('https://github.com/koush/support-wiki/wiki/Android-ADB-Drivers');
});

app.get('/carbon/drivers', function(req, res) {
  res.redirect('https://github.com/koush/support-wiki/wiki/Android-ADB-Drivers');
});
// end legacy?


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

var debug = require('debug')('allcast-site');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
