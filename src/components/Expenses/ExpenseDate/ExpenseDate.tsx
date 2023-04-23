import { IExpenseDate } from '../../../models/Expenses';
import './ExpenseDate.css';

function ExpenseDate(props: IExpenseDate) {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <div className='expense-date body-large'>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  )

}

export default ExpenseDate;