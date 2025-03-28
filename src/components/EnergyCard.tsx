import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Play } from "lucide-react-native"; // Ensure you have this installed or replace it with another icon lib

export default function EnergyCard({ title }: any) {
  return (
    <Pressable style={styles.card}>
      <ImageBackground
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW5lcmd5fGVufDB8fDB8fHww",
        }}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }} // Rounded corners
      >
        <View style={styles.overlay}>
          <View className="p-3 bg-white rounded-full">
            <Play size={30} color="black" />
          </View>
          <Text className=" flex text-sm font-bold text-slate-800 mb-3 text-white bg-transparent">
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
    marginTop: 10,
    elevation: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    // Dark overlay for better visibility
    alignItems: "center",
    justifyContent: "space-around",
  },
});
