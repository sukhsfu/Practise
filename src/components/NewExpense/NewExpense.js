import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
  };
  const showForm = () => {
    setFormShow (
        <ExpenseForm cancel = {cancelButton} onSaveExpenseData={onSaveExpenseDataHandler} />
    );
  };
  const cancelButton  = () =>{
    setFormShow(<button onClick={showForm}>Add Expense</button>);
  }
  const [formShow,setFormShow] = useState(<button onClick={showForm}>Add Expense</button>);
  return (
    <div className="new-expense">
      {formShow}
    </div>
  );
};

export default NewExpense;
