import { ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { localRestaurants } from "../data/localRestaurants";
import { Categories } from "../components/Categories";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import RestaurantItem from "../components/RestaurantCard";
import SortMenu from "../components/SortMenu";

const Dashboard = ({ navigation }) => {
  const [data, setData] = useState(localRestaurants);

  return (
    <View style={{ flex: 1, backgroundColor: "#2c3968" }}>
      <StatusBar backgroundColor={"#fff"} style="dark" />
      <View
        className="bg-white rounded-br-2xl rounded-bl-2xl py-5"
        style={{ marginTop: Constants.statusBarHeight }}
      >
        <View className="flex-row mx-4 mt-2 justify-between items-center">
          <View className="flex-col">
            <Text className="text-gray-800 text-base">Deliver Now</Text>
            <View className="flex-row gap-x-1">
              <Text className="text-gray-800 text-sm">88 Princess Gate</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="black"
                className="self-center"
              />
            </View>
          </View>
          <View className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-100">
            <MaterialIcons
              name="notifications-none"
              size={20}
              color="black"
              className="self-center"
            />
          </View>
        </View>
      </View>
      <View className="mt-4 mx-4 mb-1 flex-row items-center rounded-full bg-gray-100 border-[#F3F3F3]">
        <View className="ml-3">
          <Ionicons
            name="search-sharp"
            size={20}
            color="black"
            className="self-center"
          />
        </View>
        <TextInput className="flex-1 py-2 px-3" placeholder="Search anything" />
      </View>
      <View className="flex-1 pb-16">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <SortMenu />
          <View className="flex-row mx-4 mb-2 pb-2 border-b-2 border-[#008080]">
            <Text className="text-slate-200">Additional fees may apply</Text>
            <Text className="ml-2 underline underline-offset-1 text-slate-200">
              Learn more
            </Text>
          </View>
          <RestaurantItem restaurantData={data} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;
