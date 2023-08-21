import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ExpensesScreen from "./screens/ExpensesScreen";
import Colors from "./constants/colors";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ExpensesScreen}
            statusBarStyle="auto"
            options={{
              title: "Recent Expenses",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="list" color={color} size={size} />
              ),
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTitleStyle: {
                color: "white",
              },
            }}
            headerTintColor="white"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
