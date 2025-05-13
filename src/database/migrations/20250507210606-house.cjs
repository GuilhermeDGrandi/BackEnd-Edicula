
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('houses', {  //no model sera HOUSE
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      daily_price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      max_guests: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_avaliable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface) {

    await queryInterface.dropTable('houses');

  }
};
