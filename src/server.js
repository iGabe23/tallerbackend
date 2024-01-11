import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import routerGifts from "./routes/routeGifts.js";
import routerUsers from "./routes/routeUsers.js";

const server = express();
const port = process.env.PORT;

server.set("port", port);

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/gifts", routerGifts);
server.use("/users", routerUsers);

server.get("/", (request, response) => {
  response.json({ message: "Hello from root!" });
});

export default server;
