import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const SortMenu = () => {
  const [data, setData] = useState([
    {
      image: "transfer-within-a-station",
      text: "Pick-Up",
      drawer: false,
    },
    {
      image: "local-offer",
      text: "Offers",
      drawer: false,
    },
    {
      image: null,
      text: "Delivery Fee",
      drawer: true,
    },
    {
      image: null,
      text: "Under 30 min",
      drawer: false,
    },
    {
      image: "military-tech",
      text: "Highest Rated",
      drawer: false,
    },
    {
      image: "star-outline",
      text: "Rating",
      drawer: true,
    },
    {
      image: null,
      text: "Price",
      drawer: true,
    },
    {
      image: null,
      text: "Dietary",
      drawer: true,
    },
    {
      image: null,
      text: "Sort",
      drawer: true,
    },
  ]);
  return (
    <View className="mx-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(({ image, text, drawer }, index) => (
          <TouchableOpacity
            key={index}
            className="mx-1 my-3 items-center bg-gray-50 px-3 py-2 rounded-full flex-row justify-center"
          >
            {image && (
              <View className="mx-1">
                <MaterialIcons
                  name={"military-tech"}
                  size={20}
                  color="black"
                  className="self-center"
                />
              </View>
            )}
            <Text className={`text-center text-xs ${image ? "" : "pl-2"}`}>
              {text}
            </Text>
            {drawer && (
              <View className="mx-1">
                <MaterialIcons
                  name={"keyboard-arrow-down"}
                  size={20}
                  color="black"
                  className="self-center"
                />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SortMenu;
