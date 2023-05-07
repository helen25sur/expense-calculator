import { ChangeEvent } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props: { onSaveChosenYear: (year: string) => void; selected: string | number | readonly string[] | undefined; }) => {

  const filterChangeHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLSelectElement;
    // console.log(target.value);
    props.onSaveChosenYear(target.value);
  }

  return (
    <section className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className='body-large'>Filter by year:</label>
        <select onChange={filterChangeHandler} value={props.selected}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2022'>2020</option>
        </select>
      </div>
    
    </section>
  );
};

export default ExpensesFilter;