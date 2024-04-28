import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { foods } from "../data/foodsData";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const MenuItems = () => {
  const [data, setData] = useState(foods);
  return (
    <View className="mt-5 mb-12">
      {data?.map(({ title, description, image, price, id }, index) => (
        <View
          className="mb-3 flex-row justify-between items-center pb-3 border-b border-gray-100"
          key={index}
        >
          <View className="flex-1 pr-3 flex-row items-center">
            <BouncyCheckbox
              fillColor={"#000"}
              isChecked={false}
              onPress={() => {}}
            />
            <View className="flex-1 pl-2">
              <Text className="text-gray-900 font-bold mb-1 text-base">
                {title}
              </Text>
              <Text className="text-gray-800 text-xs">${price}</Text>
              <Text className="text-gray-600 text-xs">{description}</Text>
            </View>
          </View>
          <View>
            <Image className="h-16 w-16 rounded-lg" source={{ uri: image }} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default MenuItems;
