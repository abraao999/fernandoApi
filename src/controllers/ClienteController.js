import Cliente from "../models/Cliente";

class ClienteController {
  async storage(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      if (!cliente) {
        return res.status(400).json({ erros: ["cliente ja existe"] });
      }

      return res.json(cliente);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const cliente = await Cliente.findAll();
    res.json(cliente);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await Cliente.findByPk(id);
      if (!funcoes) {
        return res.status(400).json({ erros: ["cliente não existe"] });
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

      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(400).json({ erros: ["cliente não existe"] });
      }
      const novosDados = await cliente.update(req.body);
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

      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(400).json({ erros: ["o cliente não existe"] });
      }
      await cliente.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new ClienteController();
