var mongoose = require('mongoose');
var passwordChangeSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
user_id: integer
});