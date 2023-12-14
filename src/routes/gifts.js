import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.json({ message: "Hello from GET!" });
});
router.post("/", (request, response) => {
  response.json({ message: "Hello from POST!" });
});
router.put("/", (request, response) => {
  response.json({ message: "Hello from PUT!" });
});
router.delete("/", (request, response) => {
  response.json({ message: "Hello from DELETE!" });
});

export default router;