import React from "react";
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
  Alert,
  Text,
  Image,
} from "react-native";

import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import { MaterialIcons } from "@expo/vector-icons";

import Dashboard from "../screens/Dashboard";
import Account from "../screens/Account";

const Grocery = () => {
  return (
    <View className="flex-1 bg-[#2c3968]">
      <View className="flex-1 justify-center items-center">
        <View className="w-72 h-72 rounded-md">
          <Image
            source={require("../../assets/images/store-open.gif")}
            className="w-72 h-72"
          />
        </View>
        <View className="w-3/4">
          <Text className="text-lg text-center text-white">
            Sorry, Grocery is not available right now
          </Text>
          <Text className="text-center text-xs text-slate-200 mt-3">
            Go to you near Grocery shop and buy 🙃😉
          </Text>
        </View>
      </View>
    </View>
  );
};
const Orders = () => {
  return (
    <View className="flex-1 bg-[#2c3968]">
      <View className="flex-1 justify-center items-center">
        <View className="w-72 h-72 rounded-md">
          <Image
            source={require("../../assets/images/store-open.gif")}
            className="w-72 h-72"
          />
        </View>
        <View className="w-3/4">
          <Text className="text-lg text-center text-white">
            Sorry, Orders is not available right now
          </Text>
          <Text className="text-center text-xs text-slate-200 mt-3">
            Go to you near shop and buy 🙃😉
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function TabNavigator() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";
    switch (routeName) {
      case "Home":
        icon = "home";
        break;
      case "Grocery":
        icon = "apple";
        break;
      case "Baskets":
        icon = "shopping-cart";
        break;
      case "Account":
        icon = "manage-accounts";
        break;
      default:
        icon = "settings";
    }

    return (
      <MaterialIcons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "#BF40BF" : "gray"}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
        <Text
          className={`text-[12px] ${
            routeName === selectedTab ? "text-[#BF40BF]" : "text-gray-400"
          }`}
        >
          {routeName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      screenOptions={{
        headerShown: false,
      }}
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={65}
      circlePosition="CENTER"
      circleWidth={55}
      bgColor="white"
      initialRouteName="Dashboard"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Click Action")}
          >
            <MaterialIcons name={"travel-explore"} color="white" size={28} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name="Home"
        position="LEFT"
        component={() => <Dashboard />}
      />
      <CurvedBottomBarExpo.Screen
        name="Grocery"
        position="LEFT"
        component={() => <Grocery />}
      />
      <CurvedBottomBarExpo.Screen
        name="Orders"
        component={() => <Orders />}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="Account"
        component={() => <Account />}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

export const styles = StyleSheet.create({
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50C878",
    bottom: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#2c3968",
  },
});
