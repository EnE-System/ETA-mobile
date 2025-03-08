import { TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GoogleButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        justifyContent:"center",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Adds shadow effect on Android
      }}
      onPress={() => console.log("Google Sign In")}
    >
      <MaterialCommunityIcons name="google" size={20} color="black" style={{ marginRight: 8 }} />
      <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
