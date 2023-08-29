import { StyleSheet } from "react-native";
import { useContext } from "react";
import Colors from "../constants/colors";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses({ navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText={"No registered expenses found!"}
    />
  );
}

export default AllExpenses;
