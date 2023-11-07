import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import { FlatList } from "react-native";

import boston from "../assets/boston.png";
import purple from "../assets/purple.png";
import savoy from "../assets/savoy.png";
const Vegetables = ({ navigation }) => {
  const suggest = [
    {
      name: "Сabbage and lettuce (14)",
    },
    {
      name: "Сucumbers and tomatoes (10)",
    },
    {
      name: "Oinons and garlic (8)",
    },
    {
      name: "Peppers (7)",
    },
    {
      name: "Potatoes and carrots (4)",
    },
  ];

  const VegetableList = [
    {
      img: boston,
      title: "Boston Lettuce",
      desc: 1.1,
      weight: "piece",
    },
    {
      img: purple,
      title: "Purple Cauliflower",
      desc: 1.85,
      weight: "kg",
    },
    {
      img: savoy,
      title: "Savoy Cabbage",
      desc: 1.45,
      weight: "kg",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground>
        <View style={{ paddingHorizontal: 18 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              style={{ marginTop: 12 }}
              name="arrow-back-ios"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ marginVertical: 18, fontSize: 28, fontWeight: 700 }}>
            Vegetables
          </Text>
          <View
            style={{
              padding: 12,
              borderRadius: 22,
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <Feather
              style={{ marginRight: 8 }}
              name="search"
              size={22}
              color="black"
            />
            <TextInput style={{ width: "90%" }} placeholder="Search" />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 22,
              width: "150%",
              flexWrap: "wrap",
            }}
            horizontal
            data={suggest}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  marginVertical: 6,
                  marginHorizontal: 6,
                  padding: 12,
                  borderRadius: 24,
                  backgroundColor: "white",
                }}
              >
                <Text style={{ color: "grey" }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          data={VegetableList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details")}
              style={{
                alignItems: "center",
                flexDirection: "row",
                padding: 14,
              }}
            >
              <Image
                style={{ borderRadius: 12, width: "48%", height: 120 }}
                source={item.img}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    marginVertical: 12,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.desc}
                  </Text>
                  <Text style={{ marginLeft: 4, fontSize: 16, color: "grey" }}>
                    € / {item.weight}
                  </Text>
                </View>
                <View
                  style={{
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
                      paddingVertical: 6,
                    }}
                  >
                    <AntDesign name="hearto" size={18} color="grey" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: "#0BCE83",
                      backgroundColor: "#0BCE83",
                      borderRadius: 6,
                      paddingHorizontal: 24,
                      paddingVertical: 8,
                    }}
                  >
                    <Feather name="shopping-cart" size={18} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Vegetables;

const styles = StyleSheet.create({});
