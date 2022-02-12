import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";
// import Tokem from '../models/Tokem';

class TokenController {
  async store(req, res) {
    const { login = "", password = "" } = req.body;
    if (!login || !password) {
      return res.status(401).json({
        erros: "credenciais invalidas",
      });
    }
    const user = await Usuario.findOne({ where: { login } });
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
    const tokem = jwt.sign({ id, login }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ tokem, user });
  }
}
export default new TokenController();
