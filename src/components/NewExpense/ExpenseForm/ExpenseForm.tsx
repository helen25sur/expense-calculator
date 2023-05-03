import { ChangeEvent, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
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
    console.log(userInput);
  }

  const amountChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: target.value,
      }
    });
    console.log(userInput);
  }

  const dateChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: target.value,
      }
    });
    console.log(userInput);
  }

  return (
    <form>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label className='body-small'>Title:</label>
          <input className='body-large' type='text' onChange={titleChangeHandler}/>
        </div>

        <div className='new-expense_control'>
          <label className='body-small'>Amount:</label>
          <input className='body-large' type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>

        <div className='new-expense_control'>
          <label className='body-small'>Date:</label>
          <input className='body-large' type='date' defaultValue='2023-04-26' min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className='new-expense_actions'>
        <button className='label-large' type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;