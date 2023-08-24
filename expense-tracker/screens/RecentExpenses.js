import { View, FlatList, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses({ navigation }) {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {},
});
