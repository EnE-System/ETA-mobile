import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Play, ChevronLeft } from "lucide-react-native"; // Example icons

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "How to Conduct an Energy Audit",
    video: "Start by gathering basic building information",
    bgColor: "bg-blue-500",
  },
  {
    id: "2",
    title: "Calculate Return on Investment",
    video: "Enter current energy consumption data",
    bgColor: "bg-orange-500",
  },
  {
    id: "3",
    title: "Understanding Recommendations",
    video: "Review prioritized improvement opportunities",
    bgColor: "bg-green-500",
  },
];

const EnergySlider = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View className="flex-1">
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className={`w-[${width}px] h-[${height}px] flex items-center justify-center ${item.bgColor}`}
          >
            <Text className="text-2xl font-bold text-white">{item.title}</Text>
            <Text className="text-lg text-white mt-2">{item.video}</Text>
            <TouchableOpacity className="mt-4 bg-white px-4 py-2 rounded-lg flex flex-row items-center">
              <Play size={20} color="black" />
              <Text className="ml-2 text-black">Play Video</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Back Button */}
      {currentIndex > 0 && (
        <TouchableOpacity
          className="absolute top-10 left-5 bg-gray-200 p-3 rounded-full"
          onPress={() =>
            flatListRef.current?.scrollToIndex({ index: currentIndex - 1 })
          }
        >
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EnergySlider;
