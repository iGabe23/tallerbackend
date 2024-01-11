import { Router } from "express";
import ControllerUsers from "../controllers/controllerUsers.js";

const routerUsers = Router();

routerUsers.post("/", ControllerUsers.create);
routerUsers.get("/", ControllerUsers.readAll);
routerUsers.get("/:id", ControllerUsers.read);
routerUsers.put("/:id", ControllerUsers.update);
routerUsers.delete("/:id", ControllerUsers.delete);

export default routerUsers;
