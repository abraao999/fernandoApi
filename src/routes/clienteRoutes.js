import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ClienteController.update);
router.post("/", loginRequered, ClienteController.storage);
router.get("/", ClienteController.index);
router.get("/:id", ClienteController.show);
router.delete("/:id", loginRequered, ClienteController.delete);
export default router;
