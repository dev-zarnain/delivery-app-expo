import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import React from "react";

import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F5F5" }}>
      <View
        style={{
          backgroundColor: "#Fff",
          flexDirection: "row",
          alignItems: "center",
          padding: 22,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            style={{ marginTop: 12 }}
            name="arrow-back-ios"
            size={18}
            color="black"
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: "34%",
            marginTop: 12,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Checkout
        </Text>
      </View>
      <View style={{ padding: 22 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 22 }}>Payment method</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
            <Text style={{ fontWeight: 500, fontSize: 18, color: "#7203FF" }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 18,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="credit-card" size={22} color="black" />
          <Text style={{ marginLeft: 18, color: "grey" }}>
            **** **** **** 4747
          </Text>
        </View>
      </View>
      <View style={{ padding: 22 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 22 }}>Delivery adress</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 500, fontSize: 18, color: "#7203FF" }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 18,
            flexDirection: "row",
          }}
        >
          <Feather name="home" size={24} color="black" />
          <Text style={{ marginLeft: 18, color: "grey", width: "30%" }}>
            Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV–1012 Latvia
          </Text>
        </View>
      </View>
      <View style={{ padding: 22 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 22 }}>
            Delivery options
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 500, fontSize: 18, color: "#7203FF" }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 18,
          }}
        >
          <View
            style={{
              marginBottom: 22,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="directions-walk" size={20} color="black" />
            <Text style={{ marginLeft: 18, color: "grey" }}>
              I'll pick it up myself
            </Text>
          </View>
          <View
            style={{
              marginBottom: 22,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="bicycle-outline" size={20} color="black" />
            <Text style={{ marginLeft: 18, color: "grey" }}>By Courier</Text>
          </View>
          <View
            style={{
              marginBottom: 22,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="car" size={24} color="black" />
            <Text style={{ marginLeft: 18, color: "grey" }}>By Car</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 22 }}>
            Non-contact-delivery
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: 500, fontSize: 18, color: "#7203FF" }}>
              yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
