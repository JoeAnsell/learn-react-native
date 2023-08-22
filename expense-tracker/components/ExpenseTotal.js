import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

function ExpenseTotal() {
  return (
    <View style={styles.container}>
      <Text style={styles.days}>Last 7 Days</Text>
      <Text style={styles.price}>$67.16</Text>
    </View>
  );
}

export default ExpenseTotal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    color: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  price: {
    fontWeight: "bold",
    color: Colors.primary600,
  },
});
