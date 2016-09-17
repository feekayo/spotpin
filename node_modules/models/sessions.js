var mongoose = require('mongoose');
var sessionsSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
session_id: String,
platform_id : integer,
user_id : integer
});