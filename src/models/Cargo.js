import Sequelize, { Model } from "sequelize";

export default class Cargo extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }
}
