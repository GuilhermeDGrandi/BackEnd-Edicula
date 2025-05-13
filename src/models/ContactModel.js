import { Sequelize, Model } from "sequelize";

export default class ContactModel extends Model {

    static init(sequelize) {
        super.init({

            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [4, 255],
                        msg: 'Campo TITULO deve ter entre 4 e 255 caracteres',
                    }
                }
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique:{
                    msg:'Email já existe'
                },
                validate:{
                    isEmail:{
                        msg:'Campo EMAIL inválido'
                    }
                }
            },

            message: {
                type: Sequelize.TEXT,
                defaultValue: '',
                validate: {
                    len: {
                        args: [10, 500],
                        msg: 'Mensagem deve conter entre 10 e 500 caracteres',
                    }
                },
            },
            
        }, {
            sequelize,
            tableName: 'contact',
          })

    }
}








