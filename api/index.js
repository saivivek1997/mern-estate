import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Sever is running on port 3000!!!");
});
