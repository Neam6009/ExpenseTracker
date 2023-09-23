import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

const  ExpenseItem = (props)=>{
    // const expenseDate = new Date(2023,8,15); //js date starts with 0 for january
    // const month = props.expense.date.toLocaleString('en-Us',{month : "long"});
    // const day = props.expense.date.toLocaleString('en-Us',{day : "2-digit"});
    // const year= props.expense.date.getFullYear();


    return (
        <Card className="expense-item">
        <ExpenseDate date = {props.expense.date}/>
        <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        </Card>
    );
}

export default ExpenseItem;