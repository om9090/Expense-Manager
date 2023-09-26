import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
                                                                // one use State
    // const [userInput, setUserInput] = useState({
    //     title : '',
    //     amount : '',
    //     date : '',
    // })

                                                                //changing title

    const [title, setTitle] = useState('');

    const changedTitle = (event) => {
        setTitle(event.target.value)

                                                                // one userState approach

        // setUserInput({...userInput,
        //     title : event.target.value,})

                                                                // prev state approach

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title : event.target.value
        //     };
        // })
    }

                                                                //changing amount

    const [amount, setAmount] = useState('');

    const amountChange = (event) => {
        setAmount(event.target.value)
    }

    //changing date

    const [date, setDate] = useState('');

    const dateChange = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : title,
            amount : amount,
            date : new Date(date)
        };

        //console.log(expenseData)
        props.onSaveData(expenseData)
        setAmount('');
        setTitle('');
        setDate('');
    }


  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={changedTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value ={amount} onChange = {amountChange}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="19-01-2021" max="19-12-2023" value = {date} onChange = {dateChange}/>
        </div>
        
      </div>
      <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseFrom;
