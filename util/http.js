import axios from "axios";

import { BACKEND_URL as bk } from "@env";

const BACKEND_URL = bk.toString();

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      title: response.data[key].title,
    });
  }
  return expenses;
}

export function updateExpense(expenseId, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${expenseId}.json`, expenseData);
}

export function deleteExpense(expenseId) {
  return axios.delete(BACKEND_URL + `/expenses/${expenseId}.json`);
}
