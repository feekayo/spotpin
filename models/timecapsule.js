var mongoose = require('mongoose');
var recordingsSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
name: String,
decription: String,
expires_at: date,
created_at: date,
updated_at: date

});
