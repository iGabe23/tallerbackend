import express from "express";
import routerGifts from "./routes/routeGifts.js";

const server = express();
const port = process.env.PORT;

server.set("port", port);

server.use(express.json());
server.use("/gifts/", routerGifts);

server.get("/", (request, response) => {
  response.json({ message: "Hello from root!" });
});

export default server;
