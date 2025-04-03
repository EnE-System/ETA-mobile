import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AuditPieChart = () => {
  const data = [
    {
      name: "Pending",
      population: 15,
      color: "#FFB74D",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Completed",
      population: 3,
      color: "#2196F3",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
    {
      name: "Ongoing",
      population: 7,
      color: "#F44336",
      legendFontColor: "#000",
      legendFontSize: 12,
    },
  ];

  return (
    <View className="items-start mt-5 bg-white p-3">
      <View className="flex flex-row gap-3 bg-white shadow-lg p-2 rounded-md w-full">
        <MaterialCommunityIcons name="progress-star" size={24} color="black" />
        <Text className="text-lg font-bold mb-2">Benchmarking</Text>
      </View>
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 30} // Adjust width dynamically
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
        }}
        accessor={"population"} // Field to calculate size
        backgroundColor="transparent"
        paddingLeft="15"
        absolute // Show values inside the pie
      />
    </View>
  );
};

export default AuditPieChart;
