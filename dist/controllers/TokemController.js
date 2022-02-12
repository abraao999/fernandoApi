"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
// import Tokem from '../models/Tokem';

class TokenController {
  async store(req, res) {
    const { login = "", password = "" } = req.body;
    if (!login || !password) {
      return res.status(401).json({
        erros: "credenciais invalidas",
      });
    }
    const user = await _Usuario2.default.findOne({ where: { login } });
    if (!user) {
      return res.status(401).json({
        erros: "usuario nao existe",
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        erros: "senha invalida",
      });
    }
    const { id } = user;
    const tokem = _jsonwebtoken2.default.sign({ id, login }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ tokem, user });
  }
}
exports. default = new TokenController();
