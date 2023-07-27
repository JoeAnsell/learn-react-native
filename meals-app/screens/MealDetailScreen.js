import { FlatList, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTitle";

function MealDetailScreen({ route }) {
  const { title, mealId } = route.params;
  return (
    <View>
      <Text>
        {title}, {mealId}
      </Text>
    </View>
  );
}

export default MealDetailScreen;
