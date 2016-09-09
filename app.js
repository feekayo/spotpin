/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var user = require('./routes/user');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');
var http = require('http');
var path = require('path');
url = require('url');


//Require Modules
var memories = require('./modules/memories')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/memories/:id', function(request, response){
	response.send(JSON.stringify(memories.query(request.params.id)))
});

app.get('/memories', function(request, response) {
	var get_params = url.parse(request.url, true).query;
	if(Object.keys(get_params).length == 2){
		var arg = get_params.arg;
		var value = get_params.value;
		if(arg!=''&&value!=''&&arg!=null&&value!=null){
			response.send(JSON.stringify(memories.query_by_arg(arg, value)));
		}else{
			response.send('Hmmmm... something\'s not right, Are you sure you specified the URI in the right format?')
		}
		
	}else if(Object.keys(get_params).length == 0){
		//response.send('All Results');
		response.send(JSON.stringify(memories.list()));
	}else{
		response.send('Hmmmm... something\'s not right, Are you sure you specified the URI in the right format?')
	}
	
});

// development only
if ('development' == app.get('env')) {
	app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});