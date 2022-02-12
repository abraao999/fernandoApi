import Sequelize, { Model } from "sequelize";

export default class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo nome deve ter entre 3 e 50 caracteres",
            },
          },
        },
        rg: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        cpf: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        telefone: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        celular: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo celular deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_nascimento: {
          type: Sequelize.DATE,
          defaultValue: "",
        },
        rua: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        numero: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        bairro: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        cidade: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        estado: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        pais: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        cep: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        carro: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        cor: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        email: {
          type: Sequelize.STRING,
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
}
