import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    console.log("in form executed");
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
    
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expenses__controls">
          <label>Title</label>
          <input type="text" value = {title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expenses__controls">
          <label>Amount</label>
          <input
            type="number"
            value = {amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expenses__controls">
          <label>Date</label>
          <input
            type="date"
            value = {date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type ="button" onClick = {props.cancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
