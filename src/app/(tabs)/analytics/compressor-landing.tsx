import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import CustomHeader from "@/src/components/analytics/CustomHeader";
import { CustomButton } from "@/src/components";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

const CompressorLanding = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/(tabs)/analytics/compressor");
  };
  return (
    <View>
      <CustomHeader title="Compressor Systems" />
      <View className="p-5 flex items-center justify-center">
        <Image
          source={require("../../../../assets/images/app/analytics/analytics-splash.png")}
          className="w-[200px] h-[200px] mt-5"
        />
        <View className="mt-5">
          <Text className="text-3xl text-center">Let's find out how you</Text>
          <Text className="text-3xl text-center">can save energy and</Text>
          <Text className="text-3xl text-center">money</Text>
        </View>
        {/* Time section */}
        <Text className="mt-10">It will only take 15 minutes</Text>
        {/* Custom button */}
        <CustomButton
          handlePress={handlePress}
          title="Start"
          textStyles="text-white"
          containerStyles="w-full mt-5"
        />
        <Text onPress={() => router.back()} className="mt-5">
          Back
        </Text>
      </View>
    </View>
  );
};

export default CompressorLanding;

const styles = StyleSheet.create({});
