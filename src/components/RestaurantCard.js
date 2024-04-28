import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const RestaurantItem = ({ restaurantData }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("Details", {
      item: { ...item },
    });
  };

  return (
    <View>
      {restaurantData?.map((item, index) => (
        <RestaurantItemCard
          key={index}
          item={item}
          onPress={() => handlePress(item)}
        />
      ))}
    </View>
  );
};

export default RestaurantItem;

const RestaurantItemCard = ({ item, onPress }) => {
  const [loved, setLoved] = useState(false);

  return (
    <TouchableOpacity className="mx-4 mb-4" onPress={onPress}>
      <Image
        source={{ uri: item.image_url }}
        className="w-full h-32 rounded-lg"
      />
      <TouchableOpacity
        className="absolute top-2 right-2"
        onPress={() => setLoved((e) => !e)}
      >
        <Entypo
          name={`${loved ? "heart" : "heart-outlined"}`}
          size={28}
          color="#fff"
        />
      </TouchableOpacity>
      <View className="flex-row items-center mt-1">
        <View className="flex-grow">
          <Text className="font-semibold text-lg text-white" numberOfLines={1}>
            {item.name}
          </Text>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="clock-time-four"
              size={13}
              color="#06C167"
            />
            <Text className="text-xs text-white">
              {" "}
              20-30 • min • {item.price}
            </Text>
          </View>
          <View className="flex-row items-center mt-1">
            <MaterialIcons name="offline-bolt" size={13} color="white" />
            <Text className="text-xs text-white">
              Delivery is busy, options vary
            </Text>
          </View>
        </View>
        <View className="w-8 h-8 justify-center items-center bg-gray-100 rounded-full">
          <Text className="text-gray-600 text-xs">{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
