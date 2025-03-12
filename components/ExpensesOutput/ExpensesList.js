import { FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderItem({item}) {
    return <ExpenseItem {...item} />
}

function ExpensesList({expenses}) {
  return <FlatList data={expenses} renderItem={renderItem} keyExtractor={(item) => item.id}/>;
}

export default ExpensesList;