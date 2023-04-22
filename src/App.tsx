import './App.css';

import ExpenseItem from './components/ExpenseItem/ExpenseItem';

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
     <ExpenseItem date={expense[0].date} title={expense[0].title} price={expense[0].price} />
     <ExpenseItem date={expense[1].date} title={expense[1].title} price={expense[1].price} />
     <ExpenseItem date={expense[2].date} title={expense[2].title} price={expense[2].price} />
    </>
  );
}

export default App;
