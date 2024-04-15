const express = require('express');
const { FinanceController } = require('../../controllers');

const router = express.Router();

router
  .route('/income')
  .get(FinanceController.getAllIncomes)
  .post(FinanceController.createIncome);

router
  .route('/income/:id')
  .get(FinanceController.getIncomeById)
  .patch(FinanceController.updateIncomeById)
  .delete(FinanceController.deleteIncomeById);

router
  .route('/expense')
  .get(FinanceController.getAllExpenses)
  .post(FinanceController.createExpense);

router
  .route('/expense/:id')
  .get(FinanceController.getExpenseById)
  .patch(FinanceController.updateExpenseById)
  .delete(FinanceController.deleteExpenseById);

router
  .route('/payment')
  .get(FinanceController.getAllPayments)
  .post(FinanceController.createPayment);

router
  .route('/payment/:id')
  .get(FinanceController.getPaymentById)
  .patch(FinanceController.updatePaymentById)
  .delete(FinanceController.deletePaymentById);

module.exports = router;
