import { IExpenses } from '../../models/Expenses';

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';

import './Expenses.css';

function Expenses(props: IExpenses) {
  console.log(props);
  
  return (
    <Card className='expenses'>
      <ExpenseItem date={props.items[0].date} title={props.items[0].title} price={props.items[0].price} />
      <ExpenseItem date={props.items[1].date} title={props.items[1].title} price={props.items[1].price} />
      <ExpenseItem date={props.items[2].date} title={props.items[2].title} price={props.items[2].price} />
    </Card>
  )
}

export default Expenses;