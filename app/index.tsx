import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../assets/images/app/image1.png"),
    text: "Discover New Recipes and Meal Plans",
  },
  {
    id: 2,
    image: require("../assets/images/app/image2.png"),
    text: "Track Your Nutrition and Stay Healthy",
  },
  {
    id: 3,
    image: require("../assets/images/app/image3.png"),
    text: "Connect with Trainers for Personalized Coaching",
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation(); // Internal navigation handling

  return (
    <Swiper
      loop={true}
      
     
    >
      {slides.map((slide) => (
        <ImageBackground key={slide.id} source={slide.image} style={{ flex: 1, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          {/* Overlay effect replacing LinearGradient */}
          <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)" }} />

          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", textAlign: "center", position: "absolute", top: height * 0.3, paddingHorizontal: 20 }}>
            {slide.text}
          </Text>

          <TouchableOpacity 
            style={{ position: "absolute", bottom: 50, backgroundColor: "#ff6347", paddingVertical: 12, paddingHorizontal: 40, borderRadius: 25 }} 
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Begin Your Energy Audit</Text>
          </TouchableOpacity>
        </ImageBackground>
      ))}
    </Swiper>
  );
};

export default OnboardingScreen;
