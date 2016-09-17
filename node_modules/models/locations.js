var mongoose = require('mongoose');
var locationsSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
logtitude: String,
latitude: string,
town_id: integer
//groups: [String]
});