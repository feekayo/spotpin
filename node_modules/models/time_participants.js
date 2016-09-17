var mongoose = require('mongoose');
var recordingsSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
time_capsule_id: integer,
user_id: integer
});
