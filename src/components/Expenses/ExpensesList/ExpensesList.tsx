import ExpenseItem from '../ExpenseItem/ExpenseItem';

import { IExpenseItem } from './../../../models/Expenses';

import './ExpensesList.css';

const ExpensesList = (props: { items: IExpenseItem[]; }) => {
  if (props.items.length === 0) {
    return <p className='no-found'>No expenses found.</p>;
  }

  return (
    <ul className='expenses-list'>
      { props.items.map((exp) => (
      <ExpenseItem
        key={exp.id}
        id={exp.id}
        date={exp.date}
        title={exp.title}
        amount={exp.amount} />)
      )}
    </ul>
  )
}

export default ExpensesList;