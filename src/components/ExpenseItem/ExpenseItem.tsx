import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css';

interface ExpenseItem {
  // id: string;
  title: string;
  date: Date;
  price: number;
}

function ExpenseItem(props: ExpenseItem) {

  return (
    <>
      <article className='expense-item'>
        <ExpenseDate date={props.date} />
        <h2 className='expense-item_title body-large'>{props.title}</h2>
        <div className='expense-item_price label-large'>€{props.price}</div>
      </article>
    </>
  )
}

export default ExpenseItem;