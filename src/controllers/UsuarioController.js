import knex from "../config/knexfile";
import Usuario from "../models/Usuario";

class UsuarioController {
  async storage(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      if (!usuario) {
        return res.status(400).json({ erros: ["usuario ja existe"] });
      }

      return res.json(usuario);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const usuario = await Usuario.findAll();
    res.json(usuario);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ erros: ["Usuário não existe"] });
      }

      return res.json(usuario);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await usuario.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ erros: ["usuario nao existe"] });
      }
      await usuario.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new UsuarioController();
