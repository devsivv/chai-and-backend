// require("dotenv").config({path: "./env"});


import dotenv from "dotenv";  
import mongoose, { Mongoose } from "mongoose";
import { DB__NAME } from "./constant.js";
// databse is always in another continent so it takes time to connect so use async await
// database connection causes problems so use fetch timeout or promise timeout

/* 2nd approach */

import connectDB from "./db/index.js";

dotenv.config({ 
  path: './env'
});


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {  
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  });
})
.catch((error) => {
  console.log("mongo connection failed:", error);
  throw error;
}



/* first approach
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`)
    app.on("error", (error) => {
      console.log("Error:" , error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });

  } catch (error) {
    console.log("Error:" , error);
    throw error;
  }
})();
*/