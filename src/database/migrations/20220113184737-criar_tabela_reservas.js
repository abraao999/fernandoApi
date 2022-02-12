module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("reservas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "clientes", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_saida: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tipo_quarto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parcelas: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      natureza: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n_quarto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      disponivel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      status: {
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable("reservas"),
};
