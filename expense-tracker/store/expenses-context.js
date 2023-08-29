import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "Boiled egg",
    amount: 89.99,
    date: new Date("2023-08-10"),
  },
  {
    id: "e3",
    description: "Shrek hat",
    amount: 99.99,
    date: new Date("2023-08-11"),
  },
  {
    id: "e4",
    description: "Cheese board",
    amount: 12.59,
    date: new Date("2023-08-20"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-08-21"),
  },
  {
    id: "e6",
    description: "Boiled egg",
    amount: 89.99,
    date: new Date("2023-08-14"),
  },
  {
    id: "e7",
    description: "Shrek hat",
    amount: 99.99,
    date: new Date("2023-08-01"),
  },
  {
    id: "e8",
    description: "Cheese board",
    amount: 12.59,
    date: new Date("2023-07-22"),
  },
  {
    id: "e9",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e10",
    description: "Boiled egg",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e11",
    description: "Shrek hat",
    amount: 99.99,
    date: new Date("2018-02-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;