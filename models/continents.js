var mongoose = require('mongoose');
var continentsSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
continent: String
//groups: [String]
});