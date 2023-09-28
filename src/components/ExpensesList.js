import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';

const ExpensesList = (props)=>{
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === props.filteredYear;
      });

      const deleteExpense = (expense)=>{
        props.deleteExpense(expense);
      }
    

      if(filteredExpenses.length === 0){
        return <h1 className='expenses-list__fallback'>No expenses found.</h1>
      }
    
      return (
      <>
        <ExpensesChart expenses = {filteredExpenses}/>
        <ul className='expenses-list'>
        {filteredExpenses.map((expense) => {
            return <ExpenseItem expense={expense} key={expense.id} deleteExpense= {deleteExpense}/>;
          })}
      </ul>
      </>)
      
      
      
}

export default ExpensesList;