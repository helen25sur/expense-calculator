import './NewExpense.css';

import Card from '../UI/Card/Card';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = () => {
  return (
    <Card className='new-expense'>
      <ExpenseForm />
    </Card>
  )
}

export default NewExpense;