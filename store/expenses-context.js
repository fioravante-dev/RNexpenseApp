import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Shoes",
    amount: 99.99,
    date: new Date(2025, 3, 10),
  },
  {
    id: "e2",
    title: "Shirt",
    amount: 55.99,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e3",
    title: "Apples",
    amount: 5.99,
    date: new Date(2022, 7, 13),
  },
  {
    id: "e4",
    title: "Book 1",
    amount: 15.99,
    date: new Date(2022, 6, 13),
  },
  {
    id: "e5",
    title: "Book 2",
    amount: 18.99,
    date: new Date(2022, 6, 12),
  },
  {
    id: "e6",
    title: "New Shoes",
    amount: 99.99,
    date: new Date(2025, 3, 10),
  },
  {
    id: "e7",
    title: "Shirt",
    amount: 55.99,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e8",
    title: "Apples",
    amount: 5.99,
    date: new Date(2022, 7, 13),
  },
  {
    id: "e9",
    title: "Book 1",
    amount: 15.99,
    date: new Date(2022, 6, 13),
  },
  {
    id: "e10",
    title: "Book 2",
    amount: 18.99,
    date: new Date(2022, 6, 12),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
        const id = new Date().toString() + Math.random().toString();
        return [{...action.payload, id: id},...state]

    case "UPDATE":
        const expenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
        const updatableExpense = state[expenseIndex];
        const updatedItem = {...updatableExpense, ...action.payload.data};
        const updatedExpenses = [...state];
        updatedExpenses[expenseIndex] = updatedItem;
        return updatedExpenses;

    case "DELETE":
        return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData){
    dispatch({type: "ADD", payload: expenseData});
  }
  function deleteExpense(id){
    dispatch({type: "DELETE", payload: id});
  }
  function updateExpense(id, expenseData){
    dispatch({type: "UPDATE", payload: {id: id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
