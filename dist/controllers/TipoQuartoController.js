"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _TipoQuarto = require('../models/TipoQuarto'); var _TipoQuarto2 = _interopRequireDefault(_TipoQuarto);

class TipoQuartoController {
  async storage(req, res) {
    try {
      const quarto = await _TipoQuarto2.default.create(req.body);
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
    const quarto = await _TipoQuarto2.default.findAll();
    res.json(quarto);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const quarto = await _TipoQuarto2.default.findByPk(id);
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

      const quarto = await _TipoQuarto2.default.findByPk(id);
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

      const quarto = await _TipoQuarto2.default.findByPk(id);
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
exports. default = new TipoQuartoController();
