import BankRepo from '../repository/bank-repo.js'

const bankRepo = new BankRepo();

class BankService {
    async getAccounts(req, res) {
        const accounts = await bankRepo.getAccounts(req.params.type)
        res.json(accounts);
    }

    async getAccount(req, res) {
        const account = await bankRepo.getAccount(req.params.acctNo)
        res.json(account);
    }

    async addAccount(req, res) {
        await bankRepo.addAccount(req.body)
        res.send(`Addition was Successfully made, ${req.body.accountNo}`)
    }

    async updateAccount(req, res) {
        await bankRepo.updateAccount(req.body)
        res.send(`Update was Successfully made, ${req.body.accountNo}`)
    }

    async deleteAccount(req, res) {
        await bankRepo.deleteAccount(req.params.acctNo)
        res.send(`Deletion was not Successful, ${req.params.acctNo} does not exist`);

    }
}

export default BankService;
