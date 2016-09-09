var mongoose = require('mongoose');
var recordingsSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
file_address: String,
caption: String,
category:[String],
type_id: integer,
location_id: integer,
Usersid:  integer,
user_galleries_id: integer,
created_at: date,
updated_at: date

});
