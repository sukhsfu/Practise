import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
      ;
    </Card>
  );
}

export default Expenses;
