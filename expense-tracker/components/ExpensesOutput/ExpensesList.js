import { View, FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  //   console.log(expenses);
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
}

export default ExpensesList;
