var mongoose = require('mongoose');
var userGalleriesSchema = new mongoose.Schema({
id: {type: integer, index: {unique: true}},
name: String,
created_at: date,
updated_at: date

});
