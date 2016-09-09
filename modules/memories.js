var fs = require('fs');

//Read From JSON File
function read_json_file(){
	var file ='./data/memories.json';
	return fs.readFileSync(file);
}

/**
 * Functions To Exports To Routes
 */

//return all
exports.list = function(){
	return JSON.parse(read_json_file());
}

//return single result by primary key/unique id
exports.query = function(id){
	var json_result = JSON.parse(read_json_file());
	var result = json_result.result;
	
	for(var i = 0; i<result.length; i++){
		var query_result = result[i];
		if (query_result.id == id){
			return query_result;
		}
	}
	return null;
}

//return result(s) based on argument given
exports.query_by_arg = function(arg, val){
	var json_result = JSON.parse(read_json_file());
	var result = json_result.result;
	var resultArray = new Array ();
	for(var i = 0; i<result.length; i++){
		var query_result = result[i];
		if (query_result[arg]== val){
			resultArray.push(result[i]);
			
		}
	}
	return resultArray;
	
}
