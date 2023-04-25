import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label className='body-small'>Title:</label>
          <input className='body-large' type='text' />
        </div>

        <div className='new-expense_control'>
          <label className='body-small'>Amount:</label>
          <input className='body-large' type='number' min='0.01' step='0.01' />
        </div>

        <div className='new-expense_control'>
          <label className='body-small'>Date:</label>
          <input className='body-large' type='date' defaultValue='2023-04-26' min='2020-01-01' max='2023-12-31'/>
        </div>
      </div>

      <div className='new-expense_actions'>
        <button className='label-large' type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;