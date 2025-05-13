import dotenv from 'dotenv'
dotenv.config();

import './src/database/index.js';

import express from 'express'

import houseRoutes from './src/routes/houseRoutes.js'
import contactRoutes from './src/routes/contactRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import reservationRoutes from './src/routes/reservationRoutes.js'
import userRoutes from './src/routes/userRoutes.js'

class App{
    constructor(){
      this.app=express()
      this.middlewares()
      this.routes()
    }
    middlewares(){
      this.app.use(express.urlencoded({extended:true}))
      this.app.use(express.json())
    }
    routes(){

      this.app.use('/house', houseRoutes)
      this.app.use('/contact', contactRoutes)
      this.app.use('/auth', authRoutes)
      this.app.use('/reservation', reservationRoutes)
      this.app.use('/users/', userRoutes)
    }
  }

export default new App().app










