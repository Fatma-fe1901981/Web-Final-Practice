import express from 'express';
import AccountService from "./service/account-service.js";

const accountService = new AccountService()

const router = express.Router()

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

router.route('/accounts/:acctNo/trans')
    .post(accountService.addTransaction)


export default router
