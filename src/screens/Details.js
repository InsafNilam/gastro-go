import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MenuItems from "../components/MenuItem";
import RestaurantItem from "../components/RestaurantCard";

const Details = ({ route, navigation }) => {
  const [mapActive, setMapActive] = useState(false);
  const {
    categories,
    coordinates,
    image_url,
    name,
    price,
    rating,
    review_count,
  } = route?.params?.item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        className="absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={18} color={"#000"} />
      </TouchableOpacity>
      <View style={styles.mapImageWrpper}>
        {mapActive ? (
          <RestaurantItem coordinates={coordinates} title={name} />
        ) : (
          <Image source={{ uri: image_url }} style={styles.image} />
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="z-20">
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={() => setMapActive((e) => !e)}>
              <Entypo
                name="location"
                size={24}
                color={`${mapActive ? "#00C444" : "#000"}`}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <AntDesign name="star" size={12} color="#FFC238" />
                <Text style={styles.infoText}>
                  {rating} • ({review_count})
                </Text>
              </View>
              <View style={styles.infoItem}>
                <AntDesign name="clockcircleo" size={10} color={"#000"} />
                <Text style={styles.infoText}>20-30 min</Text>
              </View>
              <View style={styles.infoItem}>
                <Foundation name="dollar" size={16} color={"#00C444"} />
                <Text style={styles.infoText}>• {price}</Text>
              </View>
            </View>
          </View>
          <View className="mt-3">
            <Text className="text-gray-800 font-bold border-b w-1/3 mb-2 pb-1 border-b-[#00C444] text-base">
              Categories
            </Text>
            {categories.map(({ title }, index) => (
              <Text key={index} className="text-xs text-gray-700">
                <Text className="text-[#00C444]">•</Text> {title}
              </Text>
            ))}
          </View>
          {/* MenuItems */}
          <MenuItems />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
    flex: 1,
  },
  mapImageWrpper: {
    position: "absolute",
    width: "100%",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: 260,
  },
  content: {
    position: "relative",
    zIndex: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginTop: 220,
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 23,
    color: "#0c0c0c",
    fontWeight: "700",
    maxWidth: "80%",
  },
  price: {
    fontSize: 20,
    color: "#00C444",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: "#F9F9F9",
    borderRadius: 5,
    marginRight: 7,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 12,
  },
});

export default Details;
