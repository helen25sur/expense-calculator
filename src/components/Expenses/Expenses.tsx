import { useState } from 'react';
import { IExpenseItem } from '../../models/Expenses';

import './Expenses.css';

import Card from '../UI/Card/Card';

import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart/ExpensesChart';

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;