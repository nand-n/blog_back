const { CatagoryController } = require("../controllers");
const { Finance } = require("../models");
const { getCatagory } = require("./catagory.service");

const getAllIncomes = async () => {
  try {
    const allIncome = await Finance.find({}, { income: 1, _id: 0 });
    return allIncome.map((finance) => finance.income).flat();
  } catch (error) {
    throw new Error(error);
  }
};

const getIncomeById = async (id) => {
  try {
    const income = await Finance.findOne({ 'income._id': id }, { 'income.$': 1, _id: 0 });
    return income ? income.income[0] : null;
  } catch (error) {
    throw new Error(error);
  }
};

const createIncome = async (month, amount) => {
  try {
  const existingIncome = await Finance.findOne({ "income.month": month });

    if (existingIncome) {
      existingIncome.income.forEach((item) => {
        if (item.month === month) {
          item.amount = amount;
        }
      });
      await existingIncome.save();
      return existingIncome.income[0];
    } else {
      const newIncome = new Finance({
        income: [{ month, amount }],
      });
      await newIncome.save();
      return newIncome.income[0];
    }
  } catch (error) {
    throw new Error(error);
  }
};

const updateIncome = async (id, month, amount) => {
    try {
        const finance = await Finance.findOne({ 'income._id': id });
        if (!finance) {
          throw new Error('Income not found');
        }
    
        const index = finance.income.findIndex(item => item._id.toString() === id);
        if (index === -1) {
          throw new Error('Income not found');
        }
    
        finance.income[index].month = month;
        finance.income[index].amount = amount;
    
        await finance.save();
        return finance.income[index];
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const deleteIncome = async (id) => {
    try {
      const deletedIncome = await Finance.findOneAndUpdate(
        { 'income._id': id },
        { $pull: { income: { _id: id } } },
        { new: true }
      );
      return deletedIncome ? deletedIncome.income[0] : null;
    } catch (error) {
      throw new Error(error);
    }
  };
  
// Expense CRUD functions
const getAllExpenses = async () => {
    try {
      const finances = await Finance.find({ expenses: { $exists: true, $not: { $size: 0 } } }, { expenses: 1, _id: 0 });

      const populatedExpenses = await Finance.populate(finances, { path: 'expenses.category' });
  
      return populatedExpenses.map((finance) => finance.expenses).flat();
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getExpenseById = async (id) => {
    try {
      const expense = await Finance.findOne({ 'expenses._id': id }, { 'expenses.$': 1, _id: 0 });
      return expense ? expense.expenses[0] : null;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createExpense = async ( name , description, amount, catagoryId) => {
    try {
      const category =await getCatagory(catagoryId);
      if (!category) {
        throw new Error('Category not found');
      }
      const newExpense = new Finance({ 
        expenses: [{ name , description,amount ,category: category }],
      });
      await newExpense.save();
      const populatedExpense = await Finance.findById(newExpense._id).populate('expenses.category');
      return populatedExpense.expenses[0];
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateExpense = async (id, name, description, amount, categoryId) => {
    try {
      const finance = await Finance.findOne({ 'expenses._id': id });
      if (!finance) {
        throw new Error('Expense not found');
      }
  
      const index = finance.expenses.findIndex(item => item._id.toString() === id);
      if (index === -1) {
        throw new Error('Expense not found');
      }
  
      const category = await getCatagory(categoryId);
  
      if (!category) {
        throw new Error('Category not found');
      }
  
      finance.expenses[index].amount = amount;
      finance.expenses[index].name = name;
      finance.expenses[index].description = description;
      finance.expenses[index].category = category;
  
      await finance.save();
      return finance.expenses[index];
    } catch (error) {
      throw new Error(error);
    }
  };
  
  
  const deleteExpense = async (id) => {
    try {
      const deletedExpense = await Finance.findOneAndDelete({ 'expenses._id': id });

      if (!deletedExpense) {
        throw new Error('Expense not found');
      }
  
      return deletedExpense.expenses.find(expense => expense._id.toString() === id);
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getAllPayments = async () => {
    
    try {

      const populatedPayments = await Finance.find({ payments: { $exists: true, $not: { $size: 0 } } })
                                      .populate('payments.category', 'name');

return populatedPayments.map((finance) => finance.payments).flat();
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const getPaymentById = async (id) => {
    try {
      const payment = await Finance.findOne({ 'payments._id': id }, { 'payments.$': 1, _id: 0 });
      return payment ? payment.payments[0] : null;
    } catch (error) {
      throw new Error(error);
    }
  };

  const createPayment = async (name, description, amount, categoryId) => {
    try {
      const category = await getCatagory(categoryId);
      
      if (!category) {
        throw new Error('Category not found');
      }
      
      const newPayment = new Finance({ 
        payments: [{ name, description, amount, category: category }],
      });
      
      await newPayment.save();
      
      const populatedPayment = await Finance.findById(newPayment._id).populate('payments.category');
      
      return populatedPayment.payments[0];
    } catch (error) {
      throw new Error(error);
    }
  };
  
  
  const updatePayment = async (id, name, description, amount, categoryId) => {
    try {
      const finance = await Finance.findOne({ 'payments._id': id });
      
      if (!finance) {
        throw new Error('Payment not found');
      }
  
      const index = finance.payments.findIndex(item => item._id.toString() === id);
  
      if (index === -1) {
        throw new Error('Payment not found');
      }
  
      const category = await getCatagory(categoryId);
  
      if (!category) {
        throw new Error('Category not found');
      }
  
      finance.payments[index].name = name;
      finance.payments[index].description = description;
      finance.payments[index].amount = amount;
      finance.payments[index].category = category;
  
      await finance.save();
      return finance.payments[index];
    } catch (error) {
      throw new Error(error);
    }
  };
  
  
  const deletePayment = async (id) => {
    try {
      const deletedPayment = await Finance.findOneAndUpdate(
        { 'payments._id': id },
        { $pull: { payments: { _id: id } } },
        { new: true }
      );
      return deletedPayment ? deletedPayment.payments[0] : null;
    } catch (error) {
      throw new Error(error);
    }
  };
  
module.exports = {
  getAllIncomes,
  getIncomeById,
  createIncome,
  updateIncome,
  deleteIncome,
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
