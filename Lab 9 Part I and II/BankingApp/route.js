import express from 'express';
import BankService from "./service/bank-service.js";

const router = express.Router();
const bankService = new BankService()

router.route('/accounts')
    .get(bankService.getAccounts)
    .put(bankService.updateAccount)
    .post(bankService.addAccount)

router.route('/accounts/:acctNo')
    .get(bankService.getAccount)
    .delete(bankService.deleteAccount)

// app.put('/api/accounts/:acctNo', async (req, res) => {
//     const accounts = await fs.readJson(filePath)
//     const index = accounts.findIndex(account => account.accountNo === req.body.accountNo)
//     accounts[index] = req.body
//     await fs.writeJson(filePath, accounts)
//     res.send(`Addition was Successfully made, ${req.body.accountNo}`)
// })

export default router;

