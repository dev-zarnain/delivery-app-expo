import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

import { Image } from "react-native";

const Categories = ({ navigation }) => {
  const items = [
    {
      img: img1,
      name: "Vegetables",
      num: "(43)",
    },
    {
      img: img2,
      name: "Fruits",
      num: "(32)",
    },
    {
      img: img3,
      name: "Bread",
      num: "(22)",
    },
    {
      img: img4,
      name: "Sweets",
      num: "(56)",
    },
    {
      img: img5,
      name: "Pasta",
      num: "(43)",
    },
    {
      img: img6,
      name: "Drinks",
      num: "(43)",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 18, paddingBottom: "39%" }}>
        <TouchableOpacity
          style={{ width: 20 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            style={{ marginTop: 12 }}
            name="arrow-back-ios"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{ marginVertical: 18, fontSize: 28, fontWeight: 700 }}>
          Categories
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
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Vegetables")}
                style={{
                  marginTop: 22,
                  borderRadius: 12,
                  backgroundColor: "white",
                  margin: 8,
                }}
              >
                <Image
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    width: 158,
                    height: 120,
                  }}
                  source={item.img}
                />
                <View style={{ margin: 6 }}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{ marginVertical: 6, fontSize: 12, fontWeight: 400 }}
                  >
                    {item.num}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
