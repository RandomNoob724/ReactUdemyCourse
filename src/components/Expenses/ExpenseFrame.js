import { useState } from "react";
import "./ExpenseFrame.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseFrame = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const onYearFilterChangeHandler = (year) => {
    setYearFilter(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearValue={yearFilter}
          onYearFilterChange={onYearFilterChangeHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseFrame;
