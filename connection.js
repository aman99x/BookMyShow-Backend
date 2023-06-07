require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection established with MongoDB server online");
  } catch (err) {
    console.error("Error while connecting to MongoDB:", err);
  }
};

exports.connection = connectToMongo;
