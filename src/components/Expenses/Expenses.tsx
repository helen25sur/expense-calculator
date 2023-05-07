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
        onSaveChosenYear={saveChosenYearHandler} />
      {props.items.map(exp => {
        return (
          <ExpenseItem
            key={exp.id}
            id={exp.id}
            date={exp.date}
            title={exp.title}
            amount={exp.amount} />)
      })}
    </Card>
  );
}

export default Expenses;