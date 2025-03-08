import { View, Text, ImageBackground, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../assets/images/app/image1.png"),
    text: "Discover New Recipes and Meal Plans",
    description:""
  },
  {
    id: "2",
    image: require("../assets/images/app/image2.png"),
    text: "Track Your Nutrition and Stay Healthy",
    description:""
  },
  {
    id: "3",
    image: require("../assets/images/app/image3.png"),
    text: "Connect with Trainers for Personalized Coaching",
    description:""
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation(); // Internal navigation handling

  return (
    <FlatList
      data={slides}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ImageBackground key={item.id} source={item.image} style={{ width, height, justifyContent: "center", alignItems: "center" }}>
          {/* Overlay effect replacing LinearGradient */}
          <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)" }} />

          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", textAlign: "center", position: "absolute", top: height * 0.3, paddingHorizontal: 20 }}>
            {item.text}
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", textAlign: "center", position: "absolute", top: height * 0.3, paddingHorizontal: 20 }}>
            {item.description}
          </Text>

          <TouchableOpacity 
            style={{ position: "absolute", bottom: 50, backgroundColor: "#A5A328", paddingVertical: 12, paddingHorizontal: 40, borderRadius: 25 }} 
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Begin Your Energy Audit</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    />
  );
};

export default OnboardingScreen;
