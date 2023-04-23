import { IExpenseItem } from '../../models/Expenses';

import Card from '../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props: IExpenseItem) {

  return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <h2 className='expense-item_title body-large'>{props.title}</h2>
        <div className='expense-item_price label-large'>€{props.price}</div>
      </Card>
  )
}

export default ExpenseItem;