import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AnalyticsRoot = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="analytics-questions" />
      <Stack.Screen name="compressor-landing" />
      <Stack.Screen name="compressor" />
    </Stack>
  );
};

export default AnalyticsRoot;

const styles = StyleSheet.create({});
