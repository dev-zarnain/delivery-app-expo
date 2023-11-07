import {
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";

const Details = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: "40%" }}
          source={require("../assets/DetailBg.png")}
        />
        <View
          style={{
            padding: 18,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: 700 }}>Boston Lettuce</Text>
          <View
            style={{
              marginVertical: 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 26, fontWeight: 700 }}>1.10</Text>
            <Text style={{ marginLeft: 6, fontSize: 24, color: "grey" }}>
              € / piece
            </Text>
          </View>
          <Text style={{ marginBottom: 14, color: "#0BCE83", fontWeight: 600 }}>
            ~150 gr / piece
          </Text>
          <Text style={{ marginVertical: 12, fontSize: 22, fontWeight: 700 }}>
            Spain
          </Text>
          <Text style={{ color: "grey", fontSize: 16 }}>
            Lettuce is an annual plant of the daisy family, Asteraceae. It is
            most often grown as a leaf vegetable, but sometimes for its stem and
            seeds. Lettuce is most often used for salads, although it is also
            seen in other kinds of food, such as soups, sandwiches and wraps; it
            can also be grilled.
          </Text>
          <View
            style={{
              alignItems: "center",
              marginVertical: "14%",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                marginRight: 22,
                backgroundColor: "white",
                borderRadius: 6,
                paddingHorizontal: 24,
                paddingVertical: 15,
              }}
            >
              <AntDesign name="hearto" size={18} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#0BCE83",
                backgroundColor: "#0BCE83",
                borderRadius: 6,
                paddingHorizontal: "17%",
                paddingVertical: 15,
              }}
            >
              <Feather name="shopping-cart" size={18} color="white" />
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
