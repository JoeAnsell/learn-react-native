import { View, FlatList, StyleSheet, Text } from "react-native";
import Expense from "../components/Expense";
import ExpenseTotal from "../components/ExpenseTotal";
import Colors from "../constants/colors";

function ExpensesScreen({ navigation }) {
  const DATA = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
  ];

  function renderExpenseItem(itemData) {
    function pressHandler() {
      console.log("frogging");
      //   navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return <Expense title={itemData.item.title} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseTotal />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
        numColumns={1}
      />
    </View>
  );
}

export default ExpensesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.primary600,
    height: "100%",
    width: "100%",
    // borderColor: "red",
    // borderWidth: 2,
  },
});
