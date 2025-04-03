import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Pressable
      onPress={handleBack}
      className="w-10 h-10 bg-orange-500 text-white flex justify-center items-center rounded-full"
    >
      <MaterialIcons
        name="arrow-back-ios"
        size={20}
        className="ml-2"
        color="white"
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
