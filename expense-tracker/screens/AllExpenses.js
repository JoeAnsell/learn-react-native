import { View, FlatList, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses({ navigation }) {
  return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.primary600,
    height: "100%",
    width: "100%",
  },
});
