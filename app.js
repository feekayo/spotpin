/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('routes');
var bodyParser = require('body-parser');
var user = require('routes/user');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');
var http = require('http');
var path = require('path');
var url = require('url');
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

//Connect to the database before starting the application server.
mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/spotpin', function(err,
		database) {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Save database object from the callback for reuse.
	db = database;
	console.log("Database connection ready");
});



// Require Routes
var categoryRoute = require('routes/categories');
var memoryRoute = require('routes/memories');
var continentRoute = require('routes/continents');
var countryRoute = require('routes/countries');
var likeRoute = require('routes/likes');
var locationRoute = require('routes/locations');
var passwordChangeRoute = require('routes/password_change');
var platformRoute = require('routes/platforms');
var recordingTypeRoute = require('routes/recording_types');
var sessionRoute = require('routes/sessions');
var stateRoute = require('routes/states');
var townRoute = require('routes/towns');
var userGalleryRoute = require('routes/user_galleries');
var userRoute = require('routes/users');
var timeParticipantRoute = require('routes/time_participants');
// ..........End

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/categories', categoryRoute);
app.use('/memories', memoryRoute);
app.use('/continents', continentRoute);
app.use('/countries', countryRoute);
app.use('/likes', likeRoute);
app.use('/locations', locationRoute);
app.use('/password_change', passwordChangeRoute);
app.use('/platforms', platformRoute);
app.use('/recording_types', recordingTypeRoute);
app.use('/sessions', sessionRoute);
app.use('/states', stateRoute);
app.use('/towns', townRoute);
app.use('/user_galleries', userGalleryRoute);
app.use('/users', userRoute);
app.use('/time_participants', timeParticipantRoute);
// ..........End

// development only
if ('development' == app.get('env')) {
	app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});