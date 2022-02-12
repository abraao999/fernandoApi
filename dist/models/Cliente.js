"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Cliente extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo nome deve ter entre 3 e 50 caracteres",
            },
          },
        },
        rg: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        cpf: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        telefone: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        celular: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo celular deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_nascimento: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
        },
        rua: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        numero: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        bairro: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        cidade: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        estado: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        pais: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        cep: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        carro: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        cor: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              msg: "insira um e-mail válido",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Reserva, { foreignKey: "cliente_id" });
    this.hasMany(models.Orcamento, { foreignKey: "cliente_id" });
  }
} exports.default = Cliente;
