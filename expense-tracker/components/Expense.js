import { Text, View, StyleSheet } from "react-native";

function Expense({ title }) {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Expense;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
});
