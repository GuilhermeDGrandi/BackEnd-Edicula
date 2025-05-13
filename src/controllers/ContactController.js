import Contact from '../models/ContactModel.js'

class ContactController {


    async index(req, res) {
        try {
            const contact = await Contact.findAll({ attributes: ['id', 'name', 'email', 'message'] })
            return res.json(contact)
        } catch (e) {
            return res.json(e.message)
        }
    }

    async create(req, res) {
        try {
            const newContact = await Contact.create(req.body)
            const { name, email, message} = newContact
            return res.json({ name, email, message})
        } catch (e) {
            console.log(e)
            return res.status(400).json({
                error: 'Erro ao criar novo contato',
                message: e.message,
            });
        }
    }

    async show(req, res) {
        try {
            const contact = await Contact.findByPk(req.params.id)
            const { name, email, message} = contact
            return res.json({ name, email, message})

        } catch (e) {
            return res.json(null)
        }
    }

    async update(req, res) {
        try {
            const contact = await Contact.findByPk(req.params.id)
            if (!contact) {
                return res.status(400).json({
                    errors: ['Contato não encontrado'],
                })
            }
            await Contact.update(req.body, {
                where: { id: req.params.id }
            });
            const { name, email, message} = contact
            return res.json({ name, email, message})

        } catch (e) {
            return res.json({
                error: 'Erro ao atualizar',
                message: e.message,
            })

        }
    }

    async delete(req, res) {
        try {
            const contact = await Contact.findByPk(req.params.id)
            if (!contact) {
                return res.status(400).json({
                    errors: ['Contato não existe'],
                })
            }
            await contact.destroy()
            return res.json({
                message: "Contato excluido com sucesso",
            })
        } catch (e) {
            return res.json({
                error: 'Erro ao excluir',
                message: e.message,
            })

        }

    }






}
export default new ContactController()

