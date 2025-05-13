import { Router } from "express";
import Contact from "../controllers/ContactController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router()

router.get('/', Contact.index)

router.post('/', Contact.create) 
router.get('/:id', loginRequired, Contact.show) 
router.put('/:id', loginRequired, Contact.update) 
router.delete('/:id', loginRequired, Contact.delete) 

export default router