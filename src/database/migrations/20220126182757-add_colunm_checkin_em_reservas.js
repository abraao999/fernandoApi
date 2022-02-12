/* eslint-disable indent */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("reservas", "checkin", {
      type: Sequelize.DATE,
      allowNull: false,
    }),

  down: () => {},
};
