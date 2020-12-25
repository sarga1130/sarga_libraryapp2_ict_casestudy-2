const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.lptm0.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email:String,
    mobile:Number,
    pwd:String,
    Repwd:String
});

var Userdata = mongoose.model("userdata",UserSchema);

module.exports = Userdata;