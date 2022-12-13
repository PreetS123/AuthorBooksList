let mongoose= require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

let connection= mongoose.connect(process.env.MONGO_URL);

module.exports=connection;