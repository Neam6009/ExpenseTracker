import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


const  ExpenseItem = (props)=>{
    // const expenseDate = new Date(2023,8,15); //js date starts with 0 for january
    // const month = props.expense.date.toLocaleString('en-Us',{month : "long"});
    // const day = props.expense.date.toLocaleString('en-Us',{day : "2-digit"});
    // const year= props.expense.date.getFullYear();

    const deleteExpenseHandler = ()=>{
        alert("Are you sure you want to delete "+ props.expense.title + " expense");
        props.deleteExpense(props.expense);

    }


    return (
        <li>
        <Card className="expense-item">
        <ExpenseDate date = {props.expense.date}/>
        <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
            <button type="button" className='deleteButton' onClick = {deleteExpenseHandler} >delete</button>
        </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;