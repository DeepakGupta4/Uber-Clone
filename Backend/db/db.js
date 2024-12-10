const mongoose = require('mongoose');

async function connectToDb() {
  mongoose.connect( process.env.DB_CONNECT).then(()=>{
    console.log('Connected to DB');
  }).catch(err => console.log(err));
}

module.exports = connectToDb;



// This code help us to connect our Data Base const     