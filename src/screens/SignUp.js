import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-dynamic-vector-icons";
import { useToast } from "react-native-toast-notifications";
import { Formik, Field } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebase";
import { Button } from "../components/Button";

import Light from "../../assets/images/light.png";

import { signUpSchema } from "../validator/schema";
import { StatusBar } from "expo-status-bar";
import { Path, Svg } from "react-native-svg";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const SignUp = ({ navigation }) => {
  const toast = useToast();

  const onSubmit = async (values, actions) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        values.email.trim(),
        values.password.trim()
      );
      toast.show("Registration Successful", {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
      <View className="pt-44 h-full w-full flex justify-around">
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
            Sign Up
          </Text>
        </Animated.View>
        <View className="flex w-full">
          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={signUpSchema}
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
                  className="w-full"
                >
                  <View className="flex flex-col w-full bg-black/5 rounded-2xl">
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
                      name="email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      style={{
                        height: 40,
                        margin: 5,
                        marginLeft: 12,
                        paddingLeft: 35,
                      }}
                    />
                  </View>
                  {touched.email && errors.email ? (
                    <Animated.View
                      entering={FadeInUp.duration(1000).springify()}
                      className="bg-[#EF444426] p-2 mt-1 rounded-xl flex-row w-full items-center text-[#EF4444]"
                    >
                      <Icon
                        name="exclamationcircleo"
                        type="AntDesign"
                        size={20}
                        color="red"
                      />
                      <Text
                        style={{ color: "red", fontSize: 14, marginLeft: 8 }}
                      >
                        {errors.email}
                      </Text>
                    </Animated.View>
                  ) : null}
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                  className="w-full"
                >
                  <View className="flex flex-col w-full bg-black/5 rounded-2xl">
                    <Icon
                      name="lock"
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
                  </View>
                  {touched.password && errors.password ? (
                    <Animated.View
                      entering={FadeInUp.duration(1000).springify()}
                      className="bg-[#EF444426] p-2 mt-1 rounded-xl flex-row w-full items-center text-[#EF4444]"
                    >
                      <Icon
                        name="exclamationcircleo"
                        type="AntDesign"
                        size={20}
                        color="red"
                      />
                      <Text
                        style={{ color: "red", fontSize: 14, marginLeft: 8 }}
                      >
                        {errors.password}
                      </Text>
                    </Animated.View>
                  ) : null}
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(400).duration(1000).springify()}
                  className="w-full"
                >
                  <View className="flex flex-col w-full bg-black/5 rounded-2xl">
                    <Icon
                      name="lock"
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
                      placeholder="Enter Confirm Password"
                      name="confirmPassword"
                      secureTextEntry
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      style={{
                        height: 40,
                        margin: 5,
                        marginLeft: 12,
                        paddingLeft: 35,
                      }}
                    />
                  </View>
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <Animated.View
                      entering={FadeInUp.duration(1000).springify()}
                      className="bg-[#EF444426] p-2 mt-1 rounded-xl flex-row w-full items-center text-[#EF4444]"
                    >
                      <Icon
                        name="exclamationcircleo"
                        type="AntDesign"
                        size={20}
                        color="red"
                      />
                      <Text
                        style={{ color: "red", fontSize: 14, marginLeft: 8 }}
                      >
                        {errors.confirmPassword}
                      </Text>
                    </Animated.View>
                  ) : null}
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(600).duration(1000).springify()}
                >
                  <Button
                    fontSize={15}
                    marginBottom={5}
                    text={"Register"}
                    width={Dimensions.get("window").width - 35}
                    backgroundColor={"#74B72D"}
                    handlePress={handleSubmit}
                    disabled={isSubmitting}
                  />
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(800).duration(1000).springify()}
                  className="flex-row justify-center"
                >
                  <Text
                    style={{
                      fontFamily: "OpenSansRegular",
                    }}
                  >
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignIn")}
                  >
                    <Text
                      className="text-sky-600"
                      style={{
                        fontFamily: "OpenSansRegular",
                      }}
                    >
                      {" "}
                      Sign In
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

export default SignUp;
