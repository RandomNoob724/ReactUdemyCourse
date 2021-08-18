import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //Safer way to guarantee that you are using the previous state
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    }); */
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
    /* setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    }); */
  };

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const submitExpenseFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    clearForm();
  };

  return (
    <form onSubmit={submitExpenseFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
