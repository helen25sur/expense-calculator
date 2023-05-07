import { useState } from 'react';
import { IExpenseItem } from '../../models/Expenses';

import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card/Card';

import './Expenses.css';
import ExpensesList from './ExpensesList/ExpensesList';

const Expenses = (props: { items: IExpenseItem[]; }) => {
  const [chosenYear, setChosenYear] = useState('2023');

  const saveChosenYearHandler = (year: string) => {
    setChosenYear(year);
  }

  const filteredExpenses: IExpenseItem[] = [...props.items].filter(i => i.date.getFullYear().toString() === chosenYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={chosenYear}
        onSaveChosenYear={saveChosenYearHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;