import './App.css';

// import ExpenseItem from './components/ExpenseItem/ExpenseItem';

import Expenses from './components/Expenses/Expenses';

function App() {

  const expense = [
    {
      id: 'el1',
      title: 'Coffee and cake',
      date: new Date(2023, 3, 23),
      price: 10.6
    },
    {
      id: 'el2',
      title: 'Bus Tickets',
      date: new Date(2023, 3, 15),
      price: 38.6
    },
    {
      id: 'el3',
      title: 'Hotel room',
      date: new Date(2023, 3, 17),
      price: 75.5
    },
  ]

  return (
    <>
     <h1 className='app-title headline-large'>Expense Calculator</h1>
     <Expenses items={ expense } />
    </>
  );
}

export default App;
