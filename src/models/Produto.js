import Sequelize, { Model } from "sequelize";

export default class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo nome deve ter entre 3 e 100 caracteres",
            },
          },
        },
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: "",
        },
        quantidade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
        },
      },

      { sequelize }
    );
    return this;
  }
}
