import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./Filter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onYearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const deleteExpense = (expense)=>{
    props.deleteExpense(expense);
  }

  

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onYearChange={onYearChangeHandler} year={filteredYear} />
        <ExpensesList expenses = {props.expenses} filteredYear = {filteredYear} deleteExpense = {deleteExpense}/>
      </Card>
    </>
  );
};

export default Expenses;
