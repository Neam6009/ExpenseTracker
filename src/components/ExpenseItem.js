import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

const  ExpenseItem = (props)=>{
    const expenseDate = new Date(2023,8,15); //js date starts with 0 for january
    const month = props.expense.date.toLocaleString('en-Us',{month : "long"});
    const day = props.expense.date.toLocaleString('en-Us',{day : "2-digit"});
    const year= props.expense.date.getFullYear();

    const  [title,setTitle] =useState(props.expense.title);
    
    const clickHandler = ()=>{
        let t1 = prompt("enter new title");
        setTitle(t1);
    }


    return (
        <Card className="expense-item">
        <ExpenseDate date = {props.expense.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        <button onClick={clickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;