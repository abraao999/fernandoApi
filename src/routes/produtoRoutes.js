import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ProdutoController.update);
router.post("/", loginRequered, ProdutoController.storage);
router.get("/", ProdutoController.index);
router.get("/:id", ProdutoController.show);
router.delete("/:id", loginRequered, ProdutoController.delete);
export default router;
