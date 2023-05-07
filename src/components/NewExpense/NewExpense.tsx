import './NewExpense.css';

import Card from '../UI/Card/Card';
import ExpenseForm from './ExpenseForm/ExpenseForm';

import { IExpenseItem } from '../../models/Expenses';

const NewExpense = (props: { onAddExpense: (expense: IExpenseItem) => void; }) => {

  const saveExpenseDataHandler = (enteredExpenseData: {title: string, amount: number, date: Date}) => {
    const expenseData: IExpenseItem = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData);
  }

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Card>
  )
}

export default NewExpense;