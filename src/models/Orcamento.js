import Sequelize, { Model } from "sequelize";

export default class Orcamento extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Campo descrição deve ser real ou decimal",
            },
          },
        },
        data_entrada: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        data_saida: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        tipo_quarto: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        parcelas: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        natureza: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        n_quarto: {
          type: Sequelize.INTEGER,
          defaultValue: "",
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: "cliente_id" });
  }
}
