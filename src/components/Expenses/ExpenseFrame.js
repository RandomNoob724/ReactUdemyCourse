import { useState } from "react";
import "./ExpenseFrame.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseFrame = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const onYearFilterChangeHandler = (year) => {
    setYearFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter yearValue={yearFilter} onYearFilterChange={onYearFilterChangeHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseFrame;
