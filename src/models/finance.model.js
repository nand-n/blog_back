const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name:{type: String , required:false}, 
  description:{type: String , required:false , nullable:true },
  amount: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const incomeSchema = new mongoose.Schema({
  month: { type: String, required: false },
  amount: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now }
});

const paymentSchema = new mongoose.Schema({
  name:{type: String , required:false}, 
  description:{type: String , required:false , nullable:true },
  amount: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});

const financeSchema = new mongoose.Schema({
  expenses: [expenseSchema],
  income: [incomeSchema],
  payments: [paymentSchema]
});

const Finance = mongoose.model('Finance', financeSchema);

module.exports = Finance;
