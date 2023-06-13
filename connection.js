require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      //  give  a message when connection is successfull
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      // give  error message, error occurs during the connection
      console.log("error while connection", err);
    });
};

exports.connection = connectToMongo;

