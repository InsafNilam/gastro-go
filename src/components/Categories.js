import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categoriesData } from "../data/categoriesData";

export const Categories = () => {
  return (
    <View className="mx-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoriesData.map(({ image, text }, index) => (
          <TouchableOpacity
            key={index}
            className="mx-1 mt-4 mb-1 items-center bg-gray-50 px-3 py-2 rounded-lg"
          >
            <Image source={image} className="w-10 h-10" />
            <Text className="text-center mt-1 text-xs">{text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
