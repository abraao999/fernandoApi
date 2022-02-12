"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Cargo = require('../models/Cargo'); var _Cargo2 = _interopRequireDefault(_Cargo);

class CargoController {
  async storage(req, res) {
    try {
      const cargo = await _Cargo2.default.create(req.body);
      if (!cargo) {
        return res.status(400).json({ erros: ["cargo ja existe"] });
      }

      return res.json(cargo);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const cargo = await _Cargo2.default.findAll();
    res.json(cargo);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _Cargo2.default.findByPk(id);
      if (!funcoes) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(funcoes);
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

      const cargo = await _Cargo2.default.findByPk(id);
      if (!cargo) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await cargo.update(req.body);
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

      const cargo = await _Cargo2.default.findByPk(id);
      if (!cargo) {
        return res.status(400).json({ erros: ["cargo nao existe"] });
      }
      await cargo.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new CargoController();
