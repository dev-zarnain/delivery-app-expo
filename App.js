import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar barStyle={"dark-content"} />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}
