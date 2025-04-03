import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Play, ChevronLeft } from "lucide-react-native"; // Example icons
import slider4 from "../../assets/images/app/slider4.png";
import slider3 from "../../assets/images/app/slider3.png";
import slider2 from "../../assets/images/app/slider2.png";
import slider1 from "../../assets/images/app/slider1.png";
import slider5 from "../../assets/images/app/slider5.png";
import slider6 from "../../assets/images/app/slider6.png";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import EnergyCard from "../components/EnergyCard";
import { CustomButton } from "../components";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "How to Conduct an Energy Audit",
    video: "Start by gathering basic building information",
    bgColor: "bg-blue-500",
    imageUrl: slider4,
  },
  {
    id: "2",
    title: "Track Your Audit Progress",
    video: "Enter current energy consumption data",
    imageUrl: slider3,
  },
  {
    id: "3",
    title: "Calculate Return on Investments",
    video: "Enter current energy consumption data",
    imageUrl: slider2,
  },
  {
    id: "4",
    title: "Generating Reports",
    video: "Compile audit findings and data",
    imageUrl: slider1,
  },
  {
    id: "5",
    title: "Benchmarking Tutorials",
    video: "Compare against industry standards",
    imageUrl: slider6,
  },
  {
    id: "6",
    title: "Understanding Recommendations",
    video: "Review prioritized improvement opportunities",
    imageUrl: slider5,
  },
];

const EnergySlider = () => {
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();
  return (
    <ScrollView>
      <View className="flex-1">
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // onScroll={handleScroll}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex flex-column items-center my-5 mx-3">
              <Text className="text-lg text-slate-800 font-bold my-5">
                Energy Master Academy
              </Text>
              <View>
                <Image style={styles.sliderImage} source={item.imageUrl} />
              </View>

              <View className="h-[0.6px] w-full bg-slate-800 my-6"></View>
              <Text className="text-md text-slate-800 mt-2 font-semibold">
                {item.title}
              </Text>
              <EnergyCard title={item.video} />
            </View>
          )}
        />

        {/* Back Button */}
        <CustomButton
          title="Continue"
          containerStyles="mx-5 mt-5 mb-3"
          textStyles="text-white"
          handlePress={() => router.push("/(tabs)/Home")}
        />
      </View>
    </ScrollView>
  );
};

export default EnergySlider;

const styles = StyleSheet.create({
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 10,
    objectFit: "contain",
    overflow: "hidden",
  },
});
