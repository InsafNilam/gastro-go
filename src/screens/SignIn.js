import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import Icon from "react-native-dynamic-vector-icons";
import { useToast } from "react-native-toast-notifications";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebase";
import { Button } from "../components/Button";
import Light from "../../assets/images/light.png";

import { signInSchema } from "../validator/schema";
import { StatusBar } from "expo-status-bar";
import { Path, Svg } from "react-native-svg";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const SignIn = ({ navigation }) => {
  const toast = useToast();

  const onSubmit = async (values, actions) => {
    console.log(values);

    try {
      await signInWithEmailAndPassword(
        auth,
        values.email.trim(),
        values.password.trim()
      );
      toast.show("Login Successful", {
        type: "success",
        placement: "top",
        duration: 500,
        offset: 30,
        animationType: "slide-in",
      });
    } catch (err) {
      toast.show(err, {
        type: "error",
        placement: "top",
        duration: 500,
        offset: 30,
        animationType: "slide-in",
      });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar style="light" />
      {/* Background */}
      <View className="bg-[#2471A3] h-[290] absolute right-0 left-0 top-0">
        <Svg
          height={630}
          width={Dimensions.get("screen").width}
          viewBox="0 0 1440 320"
        >
          <Path
            fill="#2471A3"
            d="M0,224L80,224C160,224,320,224,480,186.7C640,149,800,75,960,69.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
      {/* Lantern */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={Light}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={Light}
          className="h-[160] w-[65]"
        />
      </View>
      {/* Form */}
      <View className="pt-40 h-full w-full flex justify-around">
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-wider text-5xl"
            style={{
              fontFamily: "OpenSansRegular",
            }}
          >
            Sign In
          </Text>
        </Animated.View>
        <View className="flex w-full">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInSchema}
            onSubmit={onSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => (
              <ScrollView className="mx-4 space-y-4">
                <Animated.View
                  entering={FadeInDown.duration(1000).springify()}
                  className="bg-black/5 rounded-2xl w-full"
                >
                  <Icon
                    name="user"
                    type="AntDesign"
                    size={20}
                    color="black"
                    style={{
                      position: "absolute",
                      top: 15,
                      left: 15,
                      paddingRight: 4,
                      borderRightWidth: 1,
                    }}
                  />
                  <Field
                    component={TextInput}
                    placeholder="Enter Email"
                    value={values.email}
                    name="email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    style={{
                      height: 40,
                      margin: 5,
                      marginLeft: 12,
                      paddingLeft: 35,
                    }}
                  />
                  {touched.email && errors.email ? (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                  ) : null}
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                  className="bg-black/5 rounded-2xl w-full"
                >
                  <Icon
                    name="lock"
                    type="AntDesign"
                    size={20}
                    color="black"
                    style={{
                      position: "absolute",
                      top: 15,
                      left: 15,
                      borderRightWidth: 1,
                    }}
                  />
                  <Field
                    component={TextInput}
                    name="password"
                    placeholder="Enter Password"
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    style={{
                      height: 40,
                      margin: 5,
                      marginLeft: 12,
                      paddingLeft: 35,
                    }}
                  />
                  {touched.password && errors.password ? (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                  ) : null}
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                  className="w-full"
                >
                  <Button
                    fontSize={15}
                    marginTop={25}
                    marginBottom={5}
                    text={"Log In"}
                    width={Dimensions.get("window").width - 35}
                    backgroundColor={"#2471A3"}
                    handlePress={handleSubmit}
                    disabled={isSubmitting}
                  />
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(600).duration(1000).springify()}
                  className="flex-row justify-center"
                >
                  <Text
                    style={{
                      fontFamily: "OpenSansRegular",
                    }}
                  >
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignUp")}
                  >
                    <Text
                      className="text-sky-600"
                      style={{
                        fontFamily: "OpenSansRegular",
                      }}
                    >
                      {" "}
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </ScrollView>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
