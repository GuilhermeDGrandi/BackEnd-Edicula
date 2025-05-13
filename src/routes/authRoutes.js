import { Router } from "express";
import authController from '../controllers/AuthController.js'

const router = new Router()

router.get('/', authController.create)

export default router