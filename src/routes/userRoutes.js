import { Router } from "express";
import UserController from '../controllers/UserController.js'
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router()



router.get('/', UserController.index)


router.post('/', UserController.create) 
router.get('/:id', loginRequired, UserController.show) 
router.put('/:id', loginRequired, UserController.update) 
router.delete('/:id', loginRequired, UserController.delete) 

export default router