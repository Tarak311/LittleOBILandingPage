
const mongoose = require('mongoose')


var mongoDB =  "mongodb+srv://tarak311:Lalohel311@littlemongocluster.ge3qg.mongodb.net/nimbusapp?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db2 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db 