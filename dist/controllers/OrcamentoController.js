"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _Orcamento = require('../models/Orcamento'); var _Orcamento2 = _interopRequireDefault(_Orcamento);

class OrcamentoController {
  async storage(req, res) {
    try {
      const orcamento = await _Orcamento2.default.create(req.body);
      if (!orcamento) {
        return res.status(400).json({ erros: ["Orcamento ja existe"] });
      }

      return res.json(orcamento);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const orcamentos = await _knexfile2.default.call(void 0, "orcamentos")
      .join("clientes", "cliente_id", "=", "clientes.id")
      .select(
        "orcamentos.*",
        "clientes.nome as cliente",
        "clientes.celular as clienteCelular",
        "clientes.email as clienteEmail"
      )
      .orderBy("orcamentos.data_entrada", "desc");

    res.json(orcamentos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const orcamento = await _Orcamento2.default.findByPk(id);
      if (!orcamento) {
        return res.status(400).json({ erros: ["Orcamento não existe"] });
      }

      return res.json(orcamento);
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

      const orcamento = await _Orcamento2.default.findByPk(id);
      if (!orcamento) {
        return res.status(400).json({ erros: ["Orcamento não existe"] });
      }
      const novosDados = await _Orcamento2.default.update(req.body);
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

      const orcamento = await _Orcamento2.default.findByPk(id);
      if (!orcamento) {
        return res.status(400).json({ erros: ["o Orcamento não existe"] });
      }
      await orcamento.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new OrcamentoController();
