import ContactRepo from "../repo/contact-repo.js";

const contactRepo = new ContactRepo()

export default class ContactService {
    async getContact(req, res) {
        try {
            const contact = await contactRepo.getContact();
            res.json(contact)
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async addContact(req, res) {
        try {
            const contact = req.body
            const newContact = await contactRepo.addContact(contact);
            res.json(newContact)
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async deleteContact(req, res) {
        try {
            const cid = req.params.cid
            const contact = await contactRepo.deleteContact(cid)
            res.json(contact)
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async updateContact(req, res) {
        try {
            const body = req.body
            const cid = req.params.cid
            const contact = await contactRepo.updateContact(cid, body)
            res.json(contact)
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async renderIndex(req, res) {
        try {
            const contacts = await contactRepo.getContact()
            res.render('index', {title: 'Index', contacts})
        } catch (e) {
            res.send(500).send(e);
        }
    }

    async renderContact(req, res) {
        try {
            const programs = await contactRepo.getContact()
            res.render('contact', {
                title: 'Contact',
                programs
            })
        } catch (e) {
            res.send(500).send(e);
        }
    }

    // async renderAddress(req, res) {
    //     try {
    //         res.render('students', {title: 'Students'})
    //     } catch (e) {
    //         res.send(500).send(e);
    //     }
    // }
}