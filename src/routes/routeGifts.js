import { Router } from "express";
import ControllerGifts from "../controllers/controllerGifts.js";

const routerGifts = Router();

routerGifts.post("/", ControllerGifts.createGift);
routerGifts.get("/", ControllerGifts.readGifts);
routerGifts.get("/:id", ControllerGifts.readGift);
routerGifts.put("/:id", ControllerGifts.updateGift);
routerGifts.delete("/:id", ControllerGifts.deleteGift);

export default routerGifts;
