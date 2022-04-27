import Contact from "../model/contact.js";

export default class ContactRepo {
    async getContact() {
        return Contact.find().lean()
    }

    async addContact(contact) {
        return Contact.create(contact)
    }

    async deleteContact(cid) {
        return Contact.deleteOne({_id : cid});
    }

    async updateContact(cid, contact) {
        return Contact.findByIdAndUpdate(cid, contact)
    }
}