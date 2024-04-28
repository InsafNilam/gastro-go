import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { auth } from "../config/firebase";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import SignOutDialog from "../components/SignOutDialog";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const Account = ({ navigation }) => {
  const [signOutDialogVisible, setSignOutDialogVisible] = useState(false);

  const handleShowSignOutDialog = () => {
    setSignOutDialogVisible(true);
  };

  const handleCloseSignOutDialog = () => {
    setSignOutDialogVisible(false);
  };

  return (
    <View className="flex-1 bg-[#2c3968]">
      <StatusBar backgroundColor={"#2c3968"} style="light" />
      {/* Header */}
      {/* <View className="px-2 py-2 relative bg-white border-[#F3F3F3] border-b">
        <View className="items-center flex-row relative h-8">
          <Ionicons
            style={{
              marginRight: 10,
              position: "absolute",
              left: 12,
              top: 2,
            }}
            name={"settings-outline"}
            size={27}
            color="black"
          />
          <Text className="text-black text-center text-2xl w-full">
            Account
          </Text>
        </View>
      </View> */}

      <View
        className="justify-between items-center flex-row gap-x-2 mx-4 my-4"
        style={{ marginTop: Constants.statusBarHeight }}
      >
        <View className="flex gap-y-1">
          <Text className="text-3xl font-bold text-white">Insaf Nilam</Text>
          <View className="flex-row">
            <View className="flex-row items-center gap-x-1 bg-[#8C92AC] p-1 pr-2 rounded-md">
              <AntDesign name="star" size={16} color="#7B3F00" />
              <Text className="text-sm text-[#FFF8E8]">4.91 / 5.0</Text>
            </View>
            <View className="flex-1"></View>
          </View>
        </View>
        <View className="rounded-full overflow-hidden w-20 h-20">
          <Image
            source={require("../../assets/images/avatar.gif")}
            className="w-20 h-20"
          />
        </View>
      </View>

      <View className="flex-1 pb-20">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        >
          <View className="flex-row justify-between items-center mx-4 my-2">
            <View className="flex-col items-center justify-center p-2 px-5 bg-[#8C92AC] gap-y-1 rounded-lg">
              <Image
                source={require("../../assets/images/favourite.png")}
                className="w-14 h-14"
              />
              <Text className="text-[#FFF8E8] text-sm">Favourites</Text>
            </View>
            <View className="flex-col items-center justify-center gap-y-1 p-2 px-5 bg-[#8C92AC] rounded-lg">
              <Image
                source={require("../../assets/images/wallet.png")}
                className="w-14 h-14"
              />
              <Text className="text-[#FFF8E8] text-sm">Wallet</Text>
            </View>
            <View className="flex-col items-center justify-center p-2 px-5 bg-[#8C92AC] gap-y-1 rounded-lg">
              <Image
                source={require("../../assets/images/order.png")}
                className="w-14 h-14"
              />
              <Text className="text-[#FFF8E8] text-sm">Orders</Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center mx-4 my-2 bg-[#8C92AC] p-2 px-4 rounded-lg">
            <View className="flex-col gap-y-1">
              <Text className="font-semibold text-base text-[#442B48]">
                GastroGo One
              </Text>
              <Text className="text-[#FFF8E8] text-xs">
                Get savings on deliveries
              </Text>
            </View>
            <Image
              source={require("../../assets/images/one.png")}
              className="w-14 h-14"
            />
          </View>

          <View className="mx-4 border-t-2 border-[#008080] my-2">
            <Text className="text-white mt-2 text-base">Saved places</Text>
            <ListItem
              title="Home"
              text="Add home"
              Icon={() => <AntDesign name="home" size={24} color="white" />}
            />
            <ListItem
              title="Work"
              text="Add work"
              Icon={() => (
                <Ionicons name="briefcase-outline" size={24} color="white" />
              )}
            />
          </View>

          <View className="mx-4 border-t-2 border-[#008080] my-2">
            <ListItem
              title="Family"
              text="Manage a family profile"
              Icon={() => (
                <MaterialIcons name="diversity-1" size={24} color="white" />
              )}
            />
            <ListItem
              title="Promotions"
              Icon={() => (
                <MaterialIcons name="local-offer" size={24} color="white" />
              )}
            />
            <ListItem
              title="Help"
              Icon={() => (
                <MaterialIcons name="support" size={24} color="white" />
              )}
            />
            <ListItem
              title="Set up your business profile"
              text="Automate work meal expenses"
              Icon={() => (
                <MaterialIcons name="business-center" size={24} color="white" />
              )}
            />
            <ListItem
              title="Invite friends"
              text="Learn how to get free delivery"
              Icon={() => (
                <MaterialIcons name="person-add-alt" size={24} color="white" />
              )}
            />
            <ListItem
              title="Privacy"
              Icon={() => (
                <MaterialIcons name="security" size={24} color="white" />
              )}
            />
            <ListItem
              title="Communication"
              Icon={() => (
                <MaterialIcons name="phonelink-ring" size={24} color="white" />
              )}
            />
            <ListItem
              title="Manage Account"
              Icon={() => (
                <MaterialIcons name="person" size={24} color="white" />
              )}
            />
            <ListItem
              title="About"
              Icon={() => <MaterialIcons name="info" size={24} color="white" />}
            />
          </View>

          <View className="mx-4 border-t-2 border-[#008080] my-2">
            <Text className="text-white mt-2 text-base">Other options</Text>
            <TouchableOpacity
              onPress={handleShowSignOutDialog}
              className="flex-row items-center mt-2"
            >
              <MaterialIcons name="logout" size={24} color="white" />
              <View className="ml-4">
                <Text className="text-white">Sign out</Text>
              </View>
            </TouchableOpacity>
          </View>
          <SignOutDialog
            visible={signOutDialogVisible}
            onClose={handleCloseSignOutDialog}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const ListItem = ({ title, text, Icon }) => (
  <TouchableOpacity className="flex-row items-center my-3">
    <Icon />
    <View className="ml-4">
      <Text className="text-white">{title}</Text>
      {text && <Text className="text-[#FAEDCA] text-xs">{text}</Text>}
    </View>
  </TouchableOpacity>
);

export default Account;
