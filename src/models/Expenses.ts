export interface IExpenseItem {
  // id: string;
  title: string;
  date: Date;
  price: number;
}

export interface IExpenseDate {
  date: Date;
}

export interface IExpenses {
  items: IExpenseItem[]
}