import Produto from "../models/Produto";

class ProdutoController {
  async storage(req, res) {
    try {
      const produto = await Produto.create(req.body);
      if (!produto) {
        return res.status(400).json({ erros: ["Produto ja existe"] });
      }

      return res.json(produto);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const produto = await Produto.findAll({ order: [["descricao", "asc"]] });
    res.json(produto);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(400).json({ erros: ["Produto não existe"] });
      }

      return res.json(produto);
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

      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(400).json({ erros: ["Produto não existe"] });
      }
      const novosDados = await produto.update(req.body);
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

      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(400).json({ erros: ["o Produto não existe"] });
      }
      await produto.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new ProdutoController();
