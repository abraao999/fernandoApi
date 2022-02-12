"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Usuario extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo nome deve ter entre 3 e 100 caracteres",
            },
          },
        },
        rg: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 12],
              msg: "Campo RG deve ter entre 3 e 12 caracteres",
            },
          },
        },
        cpf: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo CPF deve ter entre 3 e 16 caracteres",
            },
          },
        },
        celular: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "Campo telefone deve ter entre 3 e 20 caracteres",
            },
          },
        },
        rua: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo rua deve ter entre 3 e 100 caracteres",
            },
          },
        },
        numero: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [1, 6],
              msg: "Campo numero deve ter entre 1 e 6 caracteres",
            },
          },
        },

        bairro: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo bairro deve ter entre 3 e 50 caracteres",
            },
          },
        },
        cidade: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo cidade deve ter entre 3 e 50 caracteres",
            },
          },
        },
        cep: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 10],
              msg: "Campo CEP deve ter entre 3 e 10 caracteres",
            },
          },
        },
        pais: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo pais deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_nascimento: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insita uma data valida",
            },
          },
        },

        login: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          unique: { msg: "Usuario já existente" },
        },
        password_hash: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        password: {
          type: _sequelize2.default.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [5, 50],
              msg: "Campo senha deve ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = Usuario;
