import { Sequelize, Model } from "sequelize";

export default class ReservationModel extends Model {
    static init(sequelize) {
        super.init({
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

            start_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: {
                        msg: 'Data de início inválida',
                    }
                }
            },

            end_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                validate: {
                    isDate: {
                        msg: 'Data de saida inválida',
                    }
                }
            },

            guests: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    min: {
                        args: [1],
                        msg: 'Numero mínimo de hospedes é 1',
                    },
                    max: {
                        args: [9999],
                        msg: 'Numero máximo de hospedes é 9999',
                    }
                }
            },

            total_price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                validate: {
                    min: {
                        args: [100],
                        msg: "O preço total deve ser no mínimo 100",
                    },
                    max: {
                        args: [9999.99],
                        msg: "O preço total deve ser no máximo 9999.99",
                    },
                },
            },
            status: {
                type: Sequelize.STRING,
                defaultValue: 'pending',
                validate:{
                    isIn:{
                        args:[['pending', 'confirmed', 'cancelled']],
                        msg:'Status inválido'
                    }
                }
            }

        }, {
            sequelize,
            tableName: 'reservations'
        })
    }
    static associate(models) {
        this.belongsTo(models.UserModel, { foreignKey: 'user_id' });
    }
}