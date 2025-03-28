import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ScreenWrapper = ({ children }: any) => {
  return <View className="p-5 ">{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
