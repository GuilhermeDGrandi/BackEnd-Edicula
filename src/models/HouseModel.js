import { Sequelize, Model } from "sequelize";

export default class HouseModel extends Model {

    static init(sequelize) {
        super.init({

            title: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [4, 255],
                        msg: 'Campo TITULO deve ter entre 4 e 255 caracteres',
                    }
                }
            },

            description: {
                type: Sequelize.TEXT,
                defaultValue: '',
                validate: {
                    len: {
                        args: [4, 400],
                        msg: 'Campo DESCRIÇÃO deve ter entre 4 e 400 caracteres',
                    }
                },
            },

            address: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [10, 150],
                        msg: 'Campo ENDEREÇO deve ter entre 10 e 150 caracteres',
                    }
                },
            },
            daily_price: {
                type: Sequelize.DECIMAL,
                defaultValue: '',
                validate: {
                    min: {
                      args: [100],
                      msg: 'Campo VALOR deve ser no mínimo 100',
                    },
                    max: {
                      args: [9999.99],
                      msg: 'Campo VALOR deve ser no máximo 9999.99',
                    },
                }
            },
            max_guests: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    min: {
                      args: [10],
                      msg: 'Campo QUANTIDADE DE PESSOAS deve ser no mínimo 100',
                    },
                    max: {
                      args: [9999],
                      msg: 'Campo QUANTIDADE DE PESSOAS deve ser no máximo 9999.99',
                    },
                }
            },
            is_avaliable: {
                type: Sequelize.BOOLEAN,
                defaultValue: '',
                validate: {
                    isIn: {
                        args: [[true, false]],
                        msg: 'O campo DISPONÍVEL deve ser verdadeiro ou falso',
                    }
                },
            },

        }, {
            sequelize,
            tableName: 'houses',
          })

    }
}








