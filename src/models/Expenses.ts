export interface IExpenseItem {
  id: string;
  title: string;
  date: Date;
  amount: number;
}

export interface IExpenseDate {
  date: Date;
}

export interface IExpenses {
  items: IExpenseItem[]
}