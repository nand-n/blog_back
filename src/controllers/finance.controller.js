const { FinanceService } = require("../services");

const getAllIncomes = async (req, res) => {
  try {
    const incomes = await FinanceService.getAllIncomes();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getIncomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await FinanceService.getIncomeById(id);
    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createIncome = async (req, res) => {
  try {
    const { month, amount } = req.body;
    const income = await FinanceService.createIncome(month, amount);
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateIncomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { month, amount } = req.body;
    const updatedIncome = await FinanceService.updateIncome(id, month, amount);
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteIncomeById = async (req, res) => {
  try {
    const { id } = req.params;
    await FinanceService.deleteIncome(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await FinanceService.getAllExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await FinanceService.getExpenseById(id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createExpense = async (req, res) => {
  try {
    const { name , description, amount , catagoryId  } = req.body;
    const expense = await FinanceService.createExpense(name,description, amount , catagoryId);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name,description, amount , categoryId } = req.body;
    const updatedExpense = await FinanceService.updateExpense(id,name,description, amount , categoryId);
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
      const deltedExpence = await FinanceService.deleteExpense(id);
    res.send(deltedExpence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllPayments = async (req, res) => {
    try {
      const payments = await FinanceService.getAllPayments();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getPaymentById = async (req, res) => {
    try {
      const { id } = req.params;
      const payment = await FinanceService.getPaymentById(id);
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createPayment = async (req, res) => {
    try {
      const { name,description, amount , categoryId } = req.body;
      const payment = await FinanceService.createPayment( name,description, amount , categoryId);
      res.status(201).json(payment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const updatePaymentById = async (req, res) => {
    try {
      const { id } = req.params;
      const {name,description, amount , categoryId } = req.body;
      const updatedPayment = await FinanceService.updatePayment(id,name,description, amount , categoryId);
      res.status(200).json(updatedPayment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deletePaymentById = async (req, res) => {
    try {
      const { id } = req.params;
      await FinanceService.deletePayment(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  module.exports = {
    getAllIncomes,
    getIncomeById,
    createIncome,
    updateIncomeById,
    deleteIncomeById,
    getAllExpenses,
    getExpenseById,
    createExpense,
    updateExpenseById,
    deleteExpenseById,
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePaymentById,
    deletePaymentById,
  };