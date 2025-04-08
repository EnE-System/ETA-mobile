import { StyleSheet, Text, View } from "react-native";
import React from "react";

type HeaderProp = {
  title: string;
};

const CustomHeader = ({ title }: HeaderProp) => {
  return (
    <View className="w-full bg-[#3E5F90] py-5">
      <Text className="text-white text-2xl text-center">{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
