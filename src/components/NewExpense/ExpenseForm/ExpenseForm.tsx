import { ChangeEvent, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props: { onSaveExpenseData: (enteredExpenseData: { title: string; amount: number; date: Date; }) => void; onCancelCreating: () => void; }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: target.value,
      }
    });
  }

  const amountChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: target.value,
      }
    });
  }

  const dateChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: target.value,
      }
    });
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });

    props.onCancelCreating();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label className='body-small'>Title:</label>
          <input className='body-large' type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
        </div>

        <div className='new-expense_control'>
          <label className='body-small'>Amount:</label>
          <input className='body-large' type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
        </div>

        <div className='new-expense_control'>
          <label className='body-small'>Date:</label>
          <input className='body-large' type='date' min='2020-01-01' max='2023-12-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className='new-expense_actions'>
        <button className='label-large' onClick={props.onCancelCreating}>Cancel</button>
        <button className='label-large' type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;