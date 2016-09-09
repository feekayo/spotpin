/**
 * this route handles all requests for categories
 */
var http = require('http');
var express = require('express');
var app = express();
var url = require('url');


//this function returns results based on arguments and values specified in the URI
app.get('/categories', function(request, response) {
	var get_params = url.parse(request.url, true).query;
	if(Object.keys(get_params).length == 0){
		response.send('All Results');
	}else if(Object.keys(get_params).length == 2){
		response.send(get_params.arg +' ' +get_params.val);
	}else{
		response.send('hmmm... something is wrong, are you sure you have the URI in the right format? ')
	}
	
});
app.listen(3000);
console.log('listening....');
