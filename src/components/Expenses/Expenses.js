import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredExpense = props.items.filter (expense => {
    return (expense.date.getFullYear().toString() === filteredYear)
  })
  const onFilterHandler = selectedYear => {
   setFilteredYear(selectedYear)
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangefilter = {onFilterHandler}/>
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList item={filteredExpense}/>
      
    </Card>
    </div>
  );
}

export default Expenses;