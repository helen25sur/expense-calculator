import { useState } from 'react';

import { IExpenseItem } from '../../../models/Expenses';

import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props: IExpenseItem) => {

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <h2 className='expense-item_title body-large'>{props.title}</h2>
        <div className='expense-item_price label-large'>€{props.amount}</div>
      </Card>
    </li>
  )
}

export default ExpenseItem;