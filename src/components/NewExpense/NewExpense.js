import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expenseForm, setExpenseForm] = useState(0);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelFormHandler = () => {
    setExpenseForm("");
  };

  const addExpenseFormHandler = () => {
    setExpenseForm(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        cancelForm={cancelFormHandler}
      />
    );
  };

  return (
    <div className="new-expense">
      {expenseForm || (
        <div className="new-expense__actions" style={{ textAlign: "center" }}>
          <button onClick={addExpenseFormHandler}> Add Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
