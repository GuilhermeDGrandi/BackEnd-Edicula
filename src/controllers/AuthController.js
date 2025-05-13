import User from '../models/UserModel.js'
import jwt from 'jsonwebtoken'

class AuthController{
    async create(req,res){

        const {email='', password=''} = req.body
        
        if(!email || !password){
            return res.status(401).json({
                msg:"Credenciais inválidas"
            })
        }

        const user = await User.findOne({where:{email}})

        if(!user){
            return res.status(401).json({
                msg:'Usuário não existe'
            })
        }

        if(!(user.passwordIsValid(password))){
            return res.status(401).json({
                msg: 'Senha inválida'
            })
        }

        const {id} = user
        const token = jwt.sign({id, email}, process.env.TOKEN_SECRET,{
            expiresIn: process.env.TOKEN_EXPIRATION,
        } )
        return res.json({token, user:{nome: user.nome, id, email}})
        
    }
}
export default new AuthController()

