var mongoose = require('mongoose');
var recordingTypeSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
category: String
});