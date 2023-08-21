import { FlatList } from "react-native";
import Expense from "../components/Expense";
// import CategoryGridTile from "../components/CategoryGridTitle";

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
    //   function pressHandler() {
    //     navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    //   }

    return (
      <Expense
        title={itemData.item.title}
        //   onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
      numColumns={2}
    />
  );
}

export default ExpensesScreen;
