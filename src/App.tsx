import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import { IExpenseItem } from './models/Expenses';

function App() {

  const expense: IExpenseItem[] = [
    {
      id: 'el1',
      title: 'Coffee and cake',
      date: new Date(2023, 3, 23),
      amount: 10.6
    },
    {
      id: 'el2',
      title: 'Bus Tickets',
      date: new Date(2023, 3, 15),
      amount: 38.6
    },
    {
      id: 'el3',
      title: 'Hotel room',
      date: new Date(2023, 3, 17),
      amount: 75.5
    },
  ];

  const addExpenseHandler = (expense: IExpenseItem) => {
    console.log('In App.tsx');
    console.log(expense);
  }

  return (
    <>
     <h1 className='app-title headline-large'>Expense Calculator</h1>
     <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={ expense } />
    </>
  );
}

export default App;
