import { useState } from 'react';
import { IExpenses } from '../../models/Expenses';

import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card/Card';

import './Expenses.css';

const Expenses = (props: IExpenses) => {
  const [chosenYear, setChosenYear] = useState('2023');

  const saveChosenYearHandler = (year: string) => {
    console.log('in Expenses.tsx');
    console.log(year);
    setChosenYear(year);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter 
        selected={chosenYear}
        onSaveChosenYear={saveChosenYearHandler}/>
      <ExpenseItem
        id={props.items[0].id}
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount} />
      <ExpenseItem
        id={props.items[1].id}
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount} />
      <ExpenseItem
        id={props.items[2].id}
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount} />
    </Card>
  );
}

export default Expenses;