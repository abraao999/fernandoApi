import knex from "../config/knexfile";
import TipoQuarto from "../models/TipoQuarto";

class TipoQuartoController {
  async storage(req, res) {
    try {
      const quarto = await TipoQuarto.create(req.body);
      if (!quarto) {
        return res.status(400).json({ erros: ["quarto ja existe"] });
      }

      return res.json(quarto);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const quarto = await TipoQuarto.findAll();
    res.json(quarto);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const quarto = await TipoQuarto.findByPk(id);
      if (!quarto) {
        return res.status(400).json({ erros: ["Usuário não existe"] });
      }

      return res.json(quarto);
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

      const quarto = await TipoQuarto.findByPk(id);
      if (!quarto) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await quarto.update(req.body);
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

      const quarto = await TipoQuarto.findByPk(id);
      if (!quarto) {
        return res.status(400).json({ erros: ["quarto nao existe"] });
      }
      await quarto.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new TipoQuartoController();
