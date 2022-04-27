import express from 'express'
import ContactService from './service/contact-service.js'

const contactService = new ContactService()
const router = express.Router()

router.route('/')
    .get(contactService.renderIndex)

router.route('/api/contacts')
    .get(contactService.getContact)
    .post(contactService.addContact)

router.route('/api/contacts/:cid')
    .delete(contactService.deleteContact)
    .put(contactService.updateContact)

export default router