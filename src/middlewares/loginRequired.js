import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'

export default async( req, res, next) =>{

    const {authorization} = req.headers
     
    if(!authorization){
        return res.status(401).json({
            msg:'Login Required'
        })
    }

    const [ ,token] = authorization.split(' ')

    try{

        const dados = jwt.verify(token, process.env.TOKEN_SECRET)
        const {id, email} = dados

        const user = await User.findOne({
            where:{
                id,
                email,
            }
        })

        if(!user){
            return res.status(401).json({
                msg: 'Usuário inválido'
            })
        }
        req.userId = id
        req.userEmail = email
        return next()
    }catch(e){
        return res.status(401).json({
            msg:'Token expirado ou inválido'
        })
    }
}