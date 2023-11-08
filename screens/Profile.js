import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 22 }}>
        <TouchableOpacity
          style={{ width: 20 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            style={{
              marginBottom: 22,
            }}
            name="arrow-back-ios"
            size={18}
            color="black"
          />
        </TouchableOpacity>
        <ScrollView style={{ paddingBottom: 44 }}>
          <Text style={{ fontSize: 24, fontWeight: 700 }}>UserInfo</Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, color: "grey", marginBottom: 6 }}>
              Name
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 6,
              }}
            >
              <FontAwesome5 name="user" size={18} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 18, fontWeight: 500 }}>
                Alexandra Smith
              </Text>
            </View>
            <Text
              style={{
                marginTop: 22,
                fontSize: 16,
                color: "grey",
                marginBottom: 6,
              }}
            >
              Date of Birth :
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              1 / jan / 2001
            </Text>
            <Text
              style={{
                marginTop: 22,
                fontSize: 16,
                color: "grey",
                marginBottom: 6,
              }}
            >
              Adress :
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 500, width: "50%" }}>
              Alexandra Smith Cesu 31 k-2 5.st, SIA Chili Riga LV–1012 Latvia
            </Text>
            <Text
              style={{
                marginTop: 22,
                fontSize: 16,
                color: "grey",
                marginBottom: 6,
              }}
            >
              Job :
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Software Developer
            </Text>
          </View>
          <Text
            style={{
              marginTop: 22,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Card Info
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 16, color: "grey", marginBottom: 6 }}>
              Card Number
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 30, height: 18 }}
                source={require("../assets/symbol.png")}
              />
              <Text style={{ marginLeft: 12, fontSize: 18, fontWeight: 500 }}>
                4747 4747 4747 4747
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "grey", marginBottom: 6 }}>
              Expiry Date
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="block" size={22} color="black" />
              <Text style={{ marginLeft: 12, fontSize: 18, fontWeight: 500 }}>
                07/21
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
