import express from 'express';
import BankService from "./service/bank-service.js";

const router = express.Router();
const bankService = new BankService()

router.get('/', (req, res) => {
    res.send('welcome')
})
router.get('/api/accounts', bankService.getAccounts)

router.get('/api/accounts/:acctNo', bankService.getAccount)

router.post('/api/accounts',bankService.addAccount )

router.put('/api/accounts', bankService.updateAccount)

// app.put('/api/accounts/:acctNo', async (req, res) => {
//     const accounts = await fs.readJson(filePath)
//     const index = accounts.findIndex(account => account.accountNo === req.body.accountNo)
//     accounts[index] = req.body
//     await fs.writeJson(filePath, accounts)
//     res.send(`Addition was Successfully made, ${req.body.accountNo}`)
// })

router.delete('/api/accounts/:acctNo', bankService.deleteAccount)

export default router;

