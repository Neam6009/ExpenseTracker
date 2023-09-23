import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './Filter/ExpenseFilter';
import { useState } from 'react';

const Expenses = (props)=>{

    const  [filteredYear,setFilteredYear] = useState('2020');

    const onYearChangeHandler = (year)=>{
        setFilteredYear(year);
    }

    return (
    <>
    <Card className='expenses'>
    <ExpenseFilter onYearChange = {onYearChangeHandler} year={filteredYear}/>
    {props.expenses.map((expense)=>{
        return <ExpenseItem expense = {expense} key={expense.id}/>
    })}

    </Card>
    </>
    )

}

export default Expenses;
