import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Animated, { FadeInRight } from "react-native-reanimated";
interface AuthCardSlider {
  id: string;
  status: string;
  value: string;
  icon: string;
  color?: string;
}

const AuditCard = () => {
  const data: AuthCardSlider[] = [
    {
      id: "1",
      status: "Pending",
      value: "15",
      icon: "tools",
      color: "#FFB74D",
    },
    {
      id: "2",
      status: "Completed",
      value: "3",
      icon: "lightbulb",
      color: "#2196F3",
    },
    {
      id: "3",
      status: "Ongoing",
      value: "7",
      icon: "chart-bar",
      color: "#F44336",
    },
  ];

  return (
    <Animated.View
      entering={FadeInRight.duration(800).springify().damping(12)}
      className="shadow-sm rounded-md w-full h-[200px] bg-white"
    >
      {/* Header */}
      <View className="flex flex-row items-center gap-5 px-5 py-5">
        <SimpleLineIcons name="energy" size={24} color="black" />
        <Text className="text-lg font-semibold text-gray-800">
          Audit Summary
        </Text>
      </View>

      {/* FlatList Section */}
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{ backgroundColor: item.color }}
            className="flex flex-column items-center my-5 mx-3 w-[180px] rounded-md"
          >
            {/* First Row: Value with Background Color */}
            <View className="w-12 h-12 rounded-full flex items-center justify-center">
              <Text className="text-white text-lg font-bold mt-5">
                {item.value}
              </Text>
            </View>

            {/* Second Row: Icon + Status (Centered) */}
            <View className="flex flex-row gap-5 items-center mt-3">
              <FontAwesome6 name={item.icon} size={20} color="white" />
              <Text className="text-md text-white text-slate-600 mt-1">
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </Animated.View>
  );
};

export default AuditCard;
