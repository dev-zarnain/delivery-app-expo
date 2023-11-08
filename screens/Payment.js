import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";

const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          padding: 18,
        }}
      >
        <TouchableOpacity
          style={{ width: 20 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            style={{ marginTop: 12 }}
            name="arrow-back-ios"
            size={18}
            color="black"
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 700, marginTop: 22 }}>
          Credit/Debit card
        </Text>

        <Image
          style={{
            marginTop: 18,
            alignSelf: "center",
            width: "110%",
            height: "34%",
          }}
          source={require("../assets/Card.png")}
        />
        <TouchableOpacity style={{ width: 40, alignSelf: "center" }}>
          <Ionicons name="ios-camera-outline" size={32} color="black" />
        </TouchableOpacity>
        <Text style={{ color: "grey", marginLeft: 12 }}>Name on card</Text>
        <View
          style={{
            marginBottom: 22,
            backgroundColor: "white",
            paddingVertical: 16,
            borderRadius: 8,
            paddingHorizontal: 12,
            borderWidth: 0.4,
            borderColor: "grey",
          }}
        >
          <Text>Alexandra Smith</Text>
        </View>
        <Text style={{ color: "grey", marginLeft: 12 }}>Card number</Text>
        <View
          style={{
            marginBottom: 22,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingVertical: 16,
            borderRadius: 8,
            paddingHorizontal: 12,
            borderWidth: 0.4,
            borderColor: "grey",
          }}
        >
          <Text>4747 4747 4747 4747</Text>
          <Image
            style={{ width: 32, height: 20 }}
            source={require("../assets/symbol.png")}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "grey", marginLeft: 12 }}>Expiry date</Text>
            <View
              style={{
                backgroundColor: "white",
                paddingVertical: 16,
                borderRadius: 8,
                paddingHorizontal: "18%",
                borderWidth: 0.4,
                borderColor: "grey",
              }}
            >
              <Text>07/21</Text>
            </View>
          </View>
          <View style={{ marginLeft: 14 }}>
            <Text style={{ color: "grey", marginLeft: 12 }}>Cvc</Text>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                backgroundColor: "white",
                paddingVertical: 12,
                borderRadius: 8,
                paddingHorizontal: 12,
                width: "56%",
                borderWidth: 0.4,
                borderColor: "grey",
              }}
            >
              <Text>474</Text>
              <Ionicons name="card-outline" size={24} color="black" />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 28,
            backgroundColor: "#0ACF83",
            paddingVertical: 18,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 600,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            use this card
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
