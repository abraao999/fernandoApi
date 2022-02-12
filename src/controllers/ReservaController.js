import knex from "../config/knexfile";
import Reserva from "../models/Reserva";

class ReservaController {
  async storage(req, res) {
    try {
      const reserva = await Reserva.create(req.body);
      if (!reserva) {
        return res.status(400).json({ erros: ["reserva ja existe"] });
      }

      return res.json(reserva);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const reservas = await knex("reservas")
      .join("clientes", "cliente_id", "=", "clientes.id")
      .select(
        "reservas.*",
        "clientes.nome as cliente",
        "clientes.celular as clienteCelular",
        "clientes.email as clienteEmail"
      )
      .orderBy("reservas.data_entrada", "desc");

    res.json(reservas);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const reserva = await knex("reservas")
        .join("clientes", "cliente_id", "=", "clientes.id")
        .select(
          "reservas.*",
          "clientes.nome as cliente",
          "clientes.celular as clienteCelular",
          "clientes.email as clienteEmail"
        )
        .where("reservas.id", id)
        .first();

      return res.json(reserva);
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

      const reserva = await Reserva.findByPk(id);
      if (!reserva) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await reserva.update(req.body);
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

      const reserva = await Reserva.findByPk(id);
      if (!reserva) {
        return res.status(400).json({ erros: ["reserva nao existe"] });
      }
      await reserva.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new ReservaController();
