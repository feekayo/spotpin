var mongoose = require('mongoose');
var likesSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
recording_id: integer,
post_id: integer,
user_id: integer
//groups: [String]
});