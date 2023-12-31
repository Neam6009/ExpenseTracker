import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props)=>{

    const[enteredTitle,setEnteredTitle] = useState("");
    const[enteredAmount,setEnteredAmount] = useState('');
    const[enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (e)=>{
        setEnteredTitle(e.target.value);
    }
    
    const amountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e)=>{
        setEnteredDate(e.target.value);
    }


    //generic inputHandler for all inputs at once
    // const inputChangeHandler = (identifier,value)=>{
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }else if (identifier === 'date'){
    //         setEnteredDate(value);
    //     }else{
    //         setEnteredAmount(value);
    //     }
    // }

    const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
        props.cancelForm();
    };

    const cancelHandler = ()=>{
        props.cancelForm();
    }
    

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}  required/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} required/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick = {cancelHandler}>Cancel</button>
            <button type="submit"> Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;