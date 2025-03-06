const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    console.log('Attempting to connect to MongoDB...'); 
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connection is successful"); 
    })
    .catch((error) => {
        console.error("Error occurred while connecting to MongoDB:", error); 
    });
};

module.exports = dbConnect;  


