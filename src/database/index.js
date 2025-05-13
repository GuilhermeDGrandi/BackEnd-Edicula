import { Sequelize } from "sequelize";
import databaseConfig from '../config/database.cjs'

//importar todos os models
import House from '../models/HouseModel.js'
import User from '../models/UserModel.js'
import Reservation from '../models/ReservationModel.js'
import Contact from '../models/ContactModel.js'

const models =[House, User, Reservation, Contact]

const connection = new Sequelize(databaseConfig)


models.forEach(model => model.init(connection))