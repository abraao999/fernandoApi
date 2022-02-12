import { Router } from "express";
import OrcamentoController from "../controllers/OrcamentoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, OrcamentoController.update);
router.post("/", loginRequered, OrcamentoController.storage);
router.get("/", OrcamentoController.index);
router.get("/:id", OrcamentoController.show);
router.delete("/:id", loginRequered, OrcamentoController.delete);
export default router;
