import { Router } from "express";
import Reservation from "../controllers/ReservationController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router()

router.get('/', Reservation.index)

router.post('/', loginRequired, Reservation.create) 
router.get('/:id', loginRequired, Reservation.show) 
router.put('/:id', loginRequired, Reservation.update) 
router.delete('/:id',  loginRequired, Reservation.delete) 

export default router