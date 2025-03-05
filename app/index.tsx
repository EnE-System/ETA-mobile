import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import LinearGradient from "react-native-linear-gradient";

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

const OnboardingScreen = ({ navigation }:any) => {
  return (
    <Swiper loop={false} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      {slides.map((slide) => (
        <ImageBackground key={slide.id} source={slide.image} style={styles.background}>
          <LinearGradient colors={["rgba(0,0,0,0.5)", "transparent"]} style={styles.overlay} />
          <Text style={styles.text}>{slide.text}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ImageBackground>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.5,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    top: height * 0.2,
    paddingHorizontal: 20,
  },
  button: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ff6347",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#ff6347",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default OnboardingScreen;
