var mongoose = require('mongoose');
var countriesSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
country: String,
continent_id: integer,
//groups: [String]
});