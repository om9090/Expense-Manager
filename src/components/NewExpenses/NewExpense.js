import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=> {
    const expenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setEditing(false)
    }

    const [isEditing, setEditing] = useState(false);

    const onClickEditing = () => {
        setEditing(true)
    }

    const stopEditing = () => {
        setEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick = {onClickEditing}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveData = {expenseDataHandler} onCancel = {stopEditing}/>}
        </div>
    )
}

export default NewExpense;