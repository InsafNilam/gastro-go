import { useCallback, useEffect, useState } from "react";
import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Header } from "../components/Header";

import Art from "../../assets/images/art.png";
import { Button } from "../components/Button";
import { StatusBar } from "expo-status-bar";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Home = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 8 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <Header />
      <View style={{ height: 250, marginTop: 15 }}>
        <Image
          source={Art}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansLight",
            fontSize: 15,
          }}
        >
          Serve Your Best Dish with{" "}
          <Text style={{ fontFamily: "OpenSansSemiBold" }}>Gastro Go</Text>
        </Text>
        <Text
          style={{
            marginTop: 15,
            textAlign: "center",
            fontSize: 15,
            fontFamily: "OpenSansMedium",
          }}
        >
          Focus on what you crave
        </Text>
        <Text
          style={{
            fontFamily: "OpenSansRegular",
            textAlign: "center",
            fontSize: 15,
            marginBottom: 15,
          }}
        >
          Cravings Don't Last. Order Fast
        </Text>
      </View>
      <View className="mx-4">
        <Button
          fontSize={12}
          text={"Get Started"}
          handlePress={() => navigation.replace("SignUp")}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: "OpenSansRegular" }}>
          Have an Account?{" "}
          <Text
            style={{ fontFamily: "OpenSansBold", color: "#ffb700" }}
            onPress={() => navigation.replace("SignIn")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
