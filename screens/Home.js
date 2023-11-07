import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomSheet from "react-native-simple-bottom-sheet";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={{ paddingVertical: 24, flex: 1 }}
        source={require("../assets/HomeBg.png")}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/D-logo.png")}
        />
      </ImageBackground>
      <BottomSheet isOpen>
        {(onScrollEndDrag) => (
          <ScrollView
            onScrollEndDrag={onScrollEndDrag}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                marginBottom: 22,
                alignItems: "center",
                flex: 1,
                position: "relative",
                top: -20,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 22,
                  borderRadius: 38,
                }}
              >
                <Feather name="box" size={34} color="black" />
              </View>
              <Text
                style={{
                  fontSize: 31,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Non-Contact Deliveries
              </Text>
              <Text
                style={{
                  marginVertical: 14,
                  color: "grey",
                  textAlign: "center",
                }}
              >
                When placing an order, select the option “Contactless delivery”
                and the courier will leave your order at the door.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("MyTabs")}
                style={{
                  marginVertical: 10,
                  paddingHorizontal: 100,
                  paddingVertical: 18,
                  borderRadius: 12,
                  backgroundColor: "#0BCE83",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Order Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Dismiss
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
