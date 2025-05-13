
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('contact', { 
      id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      message:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down(queryInterface,) {

    await queryInterface.dropTable('contact');

  }
};
