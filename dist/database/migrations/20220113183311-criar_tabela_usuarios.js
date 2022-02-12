"use strict";module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      celular: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("usuarios"),
};
