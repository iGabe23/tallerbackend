import "dotenv/config";
import "./database.js";
import server from "./server.js";

const port = server.get("port");

server.listen(port, () => {
  console.log(`Server working on port: ${port}`);
});
