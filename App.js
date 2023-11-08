import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Vegetables from "./screens/Vegetables";
import Details from "./screens/Details";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

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
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Payment from "./screens/Payment";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              style={{ top: 6, color: focused ? "#7203FF" : "grey" }}
              name="border-all"
              size={22}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              style={{ top: 6, color: focused ? "#7203FF" : "grey" }}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              style={{ top: 6, color: focused ? "#7203FF" : "grey" }}
              name="user"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
    </Stack.Navigator>
  );
}
