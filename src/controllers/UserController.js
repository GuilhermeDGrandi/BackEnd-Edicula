import User from '../models/UserModel.js'

class UserController{

    async index(req,res){
        try{
            const users = await User.findAll({attributes: ['id', 'nome', 'email', 'password']})
            return res.json(users)
          }catch(e){
            return res.json(null)
          }
    }

    async create(req,res){
        try{
            const novoUser = await User.create(req.body)
            const {id, nome, email} = novoUser
            return res.json({id, nome, email})
        }catch(e){
            console.log(e)
            return res.status(400).json({
                error: 'Erro ao criar a nova edícula',
                message: e.message,
              });
        }
    }

    async show(req,res){
        try{
            const user = await User.findByPk(req.params.id)
            const{id, nome, email} = user
            return res.json({id, nome, email})
            
        }catch(e){
            return res.json(null)
        }
    }

    async update(req,res){
        try{
            const user = await User.findByPk(req.params.id)
            if(!user){
                return res.status(400).json({
                    errors:['Usuário não existe'],
                })
            }
            const updatedUser = await user.update(req.body)
            const{id, nome, email} = updatedUser
            res.json({id, nome, email})
            
        }catch(e){
            return res.json({
                error:'Erro ao atualizar',
                message: e.message,
            })

        }
    }

    async delete(req,res){
        try{
            const user = await User.findByPk(req.params.id)
            if(!user){
                return res.status(400).json({
                    errors:['Usuário não existe'],
                })
            }
            await user.destroy(req.body)
            return res.json({
                message:"Usuário excluido com sucesso",
            })
        }catch(e){
            return res.json({
                error:'Erro ao excluir',
                message:e.message,
            })

        }



    }
    









}
export default new UserController()