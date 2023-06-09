import Mongoose, { ConnectOptions } from "mongoose";
require("dotenv").config();

let database: Mongoose.Connection;

export const connect = () => {
  const url = process.env.ATLAS_URI;
  console.log("from connect: process.env.ATLAS_URI  :::", process.env.ATLAS_URI);
  if (database) {
    return;
  }

  Mongoose.connect(url!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();

  database.once("close", async () => {
    console.log("Diconnected  to database");
  });
};
