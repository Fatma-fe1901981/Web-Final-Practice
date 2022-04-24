import fs from "fs-extra";

const filePath = 'BankingApp/data/accounts.json'

class BankService {
    async getAccounts(req, res) {
        let accounts = await fs.readJson(filePath)
        const acctType = req.query.type //query search is "type" you can't write acctType

        if (acctType)
            accounts = accounts.filter(account => account.acctType === acctType)

        res.json(accounts);
    }

    async getAccount(req, res) {
        const accounts = await fs.readJson(filePath)
        const account = accounts.find(account => account.accountNo === req.params.acctType)

        res.json(account);
        //or > res.send(req.params)
    }

    async addAccount(req, res) {
        const accounts = await fs.readJson(filePath)
        accounts.push(req.body)
        await fs.writeJson(filePath, accounts)
        res.send(`Addition was Successfully made, ${req.body.accountNo}`)
    }

    async updateAccount(req, res) {
        const accounts = await fs.readJson(filePath)
        const index = accounts.findIndex(account => account.accountNo === req.body.accountNo)
        accounts[index] = req.body
        await fs.writeJson(filePath, accounts)
        res.send(`Update was Successfully made, ${req.body.accountNo}`)
    }

    async deleteAccount(req, res) {
        let accounts = await fs.readJson(filePath)
        const index = accounts.find(account => account.accountNo === req.params.acctType)
        if (index >= 0) {
            accounts.splice(index, 0)
            await fs.writeJson(filePath, accounts)
            res.send(`Deletion was Successful, ${req.params.acctNo} is deleted`);
        } else {
            res.send(`Deletion was not Successful, ${req.params.acctNo} does not exist`);
        }
    }
}

export default BankService;
