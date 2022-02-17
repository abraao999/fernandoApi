import { Router } from "express";
import TipoQuartoController from "../controllers/TipoQuartoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, TipoQuartoController.update);
router.post("/", loginRequered, TipoQuartoController.storage);
router.get("/", TipoQuartoController.index);
router.get("/:id", TipoQuartoController.show);
router.delete("/:id", loginRequered, TipoQuartoController.delete);
export default router;
