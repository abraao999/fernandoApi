import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req);
  if (!authorization) {
    return res.status(401).json({ erros: "login requerido" });
  }
  const [, tokem] = authorization.split(" ");
  try {
    const dados = jwt.verify(tokem, process.env.TOKEN_SECRET);
    const { id, login } = dados;

    const user = await Usuario.findOne({ where: { id, login } });
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
