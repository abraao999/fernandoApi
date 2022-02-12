import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import Produto from "../models/Produto";
import Cliente from "../models/Cliente";
import Reserva from "../models/Reserva";
import Usuario from "../models/Usuario";
import Orcamento from "../models/Orcamento";

const models = [Cliente, Usuario, Reserva, Produto, Orcamento];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
