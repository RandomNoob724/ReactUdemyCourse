import "./ExpenseFrame.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const ExpenseFrame = (props) =>{
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default ExpenseFrame;
