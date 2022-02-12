"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UsuarioController = require('../controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _UsuarioController2.default.update);
router.post("/", _UsuarioController2.default.storage);
router.get("/", _loginRequered2.default, _UsuarioController2.default.index);
router.get("/:id", _UsuarioController2.default.show);
router.delete("/:id", _loginRequered2.default, _UsuarioController2.default.delete);
exports. default = router;
