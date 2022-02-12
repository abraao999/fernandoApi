"use strict";/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("reservas", "checkout", {
      type: Sequelize.DATE,
      allowNull: false,
    }),

  down: () => {},
};
