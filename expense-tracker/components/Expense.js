import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

function Expense({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.content,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>2022-2-19</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>14.99</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Expense;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.primary500,
    padding: 15,
    width: "100%",
    display: "block",
    marginBottom: 20,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  date: {
    color: "white",
  },
  priceContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  price: {
    color: Colors.primary600,
    fontWeight: "bold",
  },
});
