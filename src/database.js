import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODRIVER)
  .then((data) => console.info("Connected to DataBase"))
  .catch((error) => console.error("Not connected to DataBase"));
