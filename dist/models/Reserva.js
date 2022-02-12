"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Reserva extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        valor: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Campo descrição deve ser real ou decimal",
            },
          },
        },
        data_entrada: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
            },
          },
        },
        data_saida: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
            },
          },
        },
        checkin: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
            },
          },
        },
        checkout: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data valida",
            },
          },
        },
        tipo_quarto: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        parcelas: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        natureza: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        n_quarto: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
        },
        status: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
        },
        disponivel: {
          type: _sequelize2.default.BOOLEAN,
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
} exports.default = Reserva;
