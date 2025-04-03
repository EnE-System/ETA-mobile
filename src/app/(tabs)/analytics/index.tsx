import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { CustomButton } from "@/src/components";
import Animated, {
  Easing,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

const Analytics = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/(tabs)/analytics/analytics-questions");
  };
  return (
    <ScreenWrapper>
      <View>
        <Animated.View
          entering={FadeInUp.delay(200).springify().damping(12)}
          className="flex flex-column items-center justify-center mt-10"
        >
          <Text className="text-xl font-bold">Track,Monitor,Optimize:</Text>
          <Text className="text-xl font-bold">Your Energy Journey Starts</Text>
          <Text className="text-xl font-bold">Here</Text>
        </Animated.View>
        {/* Image section */}
        <Image
          source={require("../../../../assets/images/analytics-splash.png")}
          className="w-full h-[200px] mt-20 rounded-lg"
        />
        {/* Buttton section */}
        <CustomButton
          handlePress={handleNavigation}
          containerStyles="mt-20"
          textStyles="text-white"
          title="Begin Audit"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Analytics;

const styles = StyleSheet.create({});
