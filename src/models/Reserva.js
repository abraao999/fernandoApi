import Sequelize, { Model } from "sequelize";

export default class Reserva extends Model {
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
              msg: "Insira uma data valida",
            },
          },
        },
        data_saida: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
            },
          },
        },
        checkin: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
            },
          },
        },
        checkout: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
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
        status: {
          type: Sequelize.INTEGER,
          defaultValue: "",
        },
        disponivel: {
          type: Sequelize.BOOLEAN,
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
