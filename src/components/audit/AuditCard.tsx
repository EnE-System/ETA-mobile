import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const AuditCard = () => {
  return (
    <View className="border border-gray-200 shadow-sm w-full h-[200px]">
      <View className="flex flex-row items-center">
        <FontAwesome6 name="bolt-lightning" size={24} color="black" />
        <Text>Audit Card</Text>
      </View>
    </View>
  );
};

export default AuditCard;

const styles = StyleSheet.create({});
