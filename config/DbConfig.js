/*
    @Developed by: Shubham rawat; 
*/
'use strict';

var mongoose                    = require('mongoose');
var Mongo_options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE, 
  reconnectInterval: 500, 
  poolSize: 5,
  bufferMaxEntries: 0,
  connectTimeoutMS: 12000,
  socketTimeoutMS: 12000,
  family: 4
};
var uri = 'mongodb://localhost/customer';
exports.StartConnection = () => {
    mongoose.connect(uri, Mongo_options)
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}
exports.DB = mongoose.connection;



// const mongoDB = 'mongodb://127.0.0.1/customer';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// // mongoose.connect('mongodb://localhost:27017/customer'); //No password used to keep this example short

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error'));
// db.on('open', function(callback) {
//     console.log('Connected to database.');
// });


