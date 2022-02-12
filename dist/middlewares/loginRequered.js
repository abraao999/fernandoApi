"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req);
  if (!authorization) {
    return res.status(401).json({ erros: "login requerido" });
  }
  const [, tokem] = authorization.split(" ");
  try {
    const dados = _jsonwebtoken2.default.verify(tokem, process.env.TOKEN_SECRET);
    const { id, login } = dados;

    const user = await _Usuario2.default.findOne({ where: { id, login } });
    if (!user) {
      return res.status(401).json({ erros: "usuario invalido" });
    }
    req.userId = id;
    req.userEmail = login;
    return next();
  } catch (error) {
    return res.status(404).json({ erros: "token expirado ou invalido" });
  }
};
