import { Router } from "express";
import House from "../controllers/HouseController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router()

router.get('/', House.index)

router.post('/', loginRequired, House.create) 
router.get('/:id', House.show) 
router.put('/:id', loginRequired, House.update) 
router.delete('/:id', loginRequired, House.delete) 

export default router