
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('reservations', { 
      id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id:{
        type: Sequelize.INTEGER,
        references:{model:'users', key:'id'},
        allowNull: false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      start_date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      end_date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      guests:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_price:{
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      status:{
        type: Sequelize.STRING,
        defaultValue:'pending',
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

    await queryInterface.dropTable('reservations');

  }
};
