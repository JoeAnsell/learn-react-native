import { View, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import GlobalStyles from "../../constants/colors";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Boiled egg",
    amount: 89.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Shrek hat",
    amount: 99.99,
    date: new Date("2018-02-19"),
  },
  {
    id: "e4",
    description: "Cheese board",
    amount: 12.5,
    date: new Date("2022-01-19"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
