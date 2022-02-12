import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, UsuarioController.update);
router.post("/", UsuarioController.storage);
router.get("/", loginRequered, UsuarioController.index);
router.get("/:id", UsuarioController.show);
router.delete("/:id", loginRequered, UsuarioController.delete);
export default router;
