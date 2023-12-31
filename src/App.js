import Expenses from "./components/Expenses/Expenses";
import React,{ useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expense, setExpenses] = useState(DUMMY_EXPENSES)
  // return React.createElement('div',{},
  // React.createElement('h2',{},"Let's get started"),
  // React.createElement(Expenses, { items: expense})
  // );

  // 1st element, 2nd attribute, 3rd value

  const addDataHandler = expense => {
    setExpenses((prevExpense)=>{
      return [expense,...prevExpense]
    })
  }



  return (
    <div>
      <NewExpense onAddExpense = {addDataHandler}/>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
