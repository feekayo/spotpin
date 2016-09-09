var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
username: String,
password: String,
first_name: String,
last_name: String,
email: String,
hover_mode: integer,
hidden: integer,
categories : 
date_visible: date,
created_at: date,
updated_at: date
});
