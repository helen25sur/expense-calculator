import './NewExpense.css';

import Card from '../UI/Card/Card';
import ExpenseForm from './ExpenseForm/ExpenseForm';

import { IExpenseItem } from '../../models/Expenses';
import { useState } from 'react';

const NewExpense = (props: { onAddExpense: (expense: IExpenseItem) => void; }) => {

  const [isCreatedBtn, setIsCreatedBtn] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData: {title: string, amount: number, date: Date}) => {
    const expenseData: IExpenseItem = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData);
  }

  const createClickHandler = () => setIsCreatedBtn(false);
  const cancelClickHandler = () => setIsCreatedBtn(true);

  const btn = <button onClick={createClickHandler} className='label-large new-expense__btn'>Add New Expense</button>;

  const newExpenseContent = isCreatedBtn ? btn : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelCreating={cancelClickHandler}/>;

  return (
    <Card className='new-expense'>
      {newExpenseContent}
    </Card>
  )
}

export default NewExpense;