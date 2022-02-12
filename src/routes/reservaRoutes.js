import { Router } from "express";
import ReservaController from "../controllers/ReservaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ReservaController.update);
router.post("/", loginRequered, ReservaController.storage);
router.get("/", ReservaController.index);
router.get("/:id", ReservaController.show);
router.delete("/:id", loginRequered, ReservaController.delete);
export default router;
