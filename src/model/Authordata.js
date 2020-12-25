const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.lptm0.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    nationality : String,
    genre: String,
    works: String,
    image: String
});

var Authordata = mongoose.model("authordata",AuthorSchema);

module.exports = Authordata;