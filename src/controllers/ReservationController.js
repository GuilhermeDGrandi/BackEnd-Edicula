import Reservation from '../models/ReservationModel.js'

class ReservationController {


    async index(req, res) {
        try {
            const reservation = await Reservation.findAll({ attributes: ['id', 'user_id', 'start_date', 'end_date', 'total_price'] })
            return res.json(reservation)
        } catch (e) {
            return res.json(e.message)
        }
    }

    async create(req, res) {
        try {
            const newReservation = await Reservation.create(req.body)
            //adicionar funções ( calcular total_price), (selecionar user_id), (verificar disponibilidade start_date e end_date d)
            const { user_id, start_date, end_date, guests, total_price, status } = newReservation
            return res.json({ user_id, start_date, end_date, guests, total_price, status })
        } catch (e) {
            console.log(e)
            return res.status(400).json({
                error: 'Erro ao criar a nova reserva',
                message: e.message,
            });
        }
    }

    async show(req, res) {
        try {
            const reservation = await Reservation.findByPk(req.params.id)

            const { user_id, start_date, end_date, guests, total_price, status } = reservation
            return res.json({ user_id, start_date, end_date, guests, total_price, status })

        } catch (e) {
            return res.json(null)
        }
    }

    async update(req, res) {
        try {
            const reservation = await Reservation.findByPk(req.params.id)
            if (!reservation) {
                return res.status(400).json({
                    errors: ['Reserva não encontrada'],
                })
            }
            await Reservation.update(req.body, {
                where: { id: req.params.id }
            });
            const { user_id, start_date, end_date, guests, total_price, status } = req.body
            return res.json({ user_id, start_date, end_date, guests, total_price, status })

        } catch (e) {
            return res.json({
                error: 'Erro ao atualizar',
                message: e.message,
            })

        }
    }

    async delete(req, res) {
        try {
            const reservation = await Reservation.findByPk(req.params.id)
            if (!reservation) {
                return res.status(400).json({
                    errors: ['Reserva não existe'],
                })
            }
            await reservation.destroy()
            return res.json({
                message: "Reserva excluida com sucesso",
            })
        } catch (e) {
            return res.json({
                error: 'Erro ao excluir',
                message: e.message,
            })

        }

    }






}
export default new ReservationController()

