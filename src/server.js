import express from "express";
import routerGifts from "./routes/gifts.js";

const server = express();
const port = process.env.port;

server.set("port", port);

server.use("/gifts/", routerGifts);

server.get("/", (request, response) => {
  response.json({ message: "Hello from root!" });
});

export default server;
