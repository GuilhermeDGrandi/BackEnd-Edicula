import House from '../models/HouseModel.js'


class HouseController{

    async index(req,res){
        try{
            const houses = await House.findAll({attributes: ['id', 'title', 'address']})
            return res.json(houses)
          }catch(e){
            return res.json(e.message)
          }
    }

    async create(req,res){
        try{
            const newHouse = await House.create(req.body)
            const {tittle, description, address, daily_price, max_guests, is_avaliable} = newHouse
            return res.json({tittle, description, address, daily_price, max_guests, is_avaliable})
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
            const house = await House.findByPk(req.params.id)
            const {tittle, description, address, daily_price, max_guests, is_avaliable} = house
            return res.json({tittle, description, address, daily_price, max_guests, is_avaliable})
            
        }catch(e){
            return res.json(null)
        }
    }

    async update(req,res){
        try{
            const house = await House.findByPk(req.params.id)
            if(!house){
                return res.status(400).json({
                    errors:['Edícula não existente'],
                })
            }
            const updatedHouse = await house.update(req.body)
            const{tittle, description, address, daily_price, max_guests, is_avaliable} = updatedHouse
            res.json({tittle, description, address, daily_price, max_guests, is_avaliable})
            
        }catch(e){
            return res.json({
                error:'Erro ao atualizar',
                message: e.message,
            })

        }
    }

    async delete(req,res){
        try{
            const house = await House.findByPk(req.params.id)
            if(!house){
                return res.status(400).json({
                    errors:['Edícula não existe'],
                })
            }
            await house.destroy(req.body)
            return res.json({
                message:"Edícula excluida com sucesso",
            })
        }catch(e){
            return res.json({
                error:'Erro ao excluir',
                message:e.message,
            })

        }

    }
    
}
export default new HouseController()