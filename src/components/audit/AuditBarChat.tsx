import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AuditLineChart = () => {
  return (
    <View className="items-start mt-5 bg-white p-3">
      <View className="flex flex-row gap-5">
        <MaterialIcons name="generating-tokens" size={24} color="black" />
        <Text className="text-lg font-bold mb-4">Enery Savings</Text>
      </View>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [{ data: [20, 45, 28, 80, 99] }],
        }}
        width={Dimensions.get("window").width - 30} // Responsive width
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(165, 163, 40, ${opacity})`, // Line color
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 10 },
          propsForDots: { r: "6", strokeWidth: "2", stroke: "#A5A328" }, // Custom dot styling
        }}
        bezier // Makes the line smooth
      />
    </View>
  );
};

export default AuditLineChart;
