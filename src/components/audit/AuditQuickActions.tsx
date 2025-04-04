import { FlatList, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
interface AuthQuickSlider {
  id: string;
  status: string;

  icon: string;
  color?: string;
  textColor?: string;
}

const AuditQuickActions = () => {
  const data: AuthQuickSlider[] = [
    {
      id: "1",
      status: "New Audits",
      icon: "kickstarter",
      color: "#34C759",
    },
    {
      id: "2",
      status: "View Reports",
      icon: "lightbulb",
      color: "#FFFFFF",
      textColor: "#34C759",
    },
    {
      id: "3",
      status: "Recommedations",
      icon: "chart-bar",
      color: "#FF9800",
    },
  ];
  return (
    <View className="mt-10 p-2">
      <View className="flex flex-row gap-3 bg-white shadow-md p-2 rounded-md w-full mb-5">
        <FontAwesome5 name="reacteurope" size={24} color="black" />
        <Text className="text-lg font-bold mb-2">Quick Actions</Text>
      </View>
      {/* Quick actions slider */}
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{ backgroundColor: item.color }}
            className="flex flex-column items-center my-5 mx-3 w-[150px] rounded-md border border-orange-500 p-3"
          >
            {/* First Row: Value with Background Color */}
            <View className="w-12 h-12 rounded-full flex items-center justify-center">
              <FontAwesome6
                name={item.icon}
                size={20}
                color={item.textColor ? item.textColor : "white"}
              />
            </View>

            {/* Second Row: Icon + Status (Centered) */}
            <View className="flex flex-row gap-5 items-center mt-3">
              <Text
                className={`text-md ${
                  item.textColor ? item.textColor : "text-white"
                }  text-slate-600 mt-1`}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AuditQuickActions;

const styles = StyleSheet.create({});
