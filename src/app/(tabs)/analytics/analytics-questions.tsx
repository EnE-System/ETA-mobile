import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/BackButton";
import { Ionicons } from "@expo/vector-icons";

const questions = ["Hovac System", "Cold Room", "Compressor", "Steam "];

const AnalyticsQuestions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ScreenWrapper>
      <View>
        <BackButton />
        <View className="flex flex-column mt-5 p-5">
          <Text style={styles.title}>Select a Tool To Get Started</Text>
          <Text style={styles.subtitle}>
            Here are some questions to help you understand your energy usage and
            improve your energy efficiency.
          </Text>
          {questions.map((question, index) => (
            <TouchableOpacity
              key={index}
              style={styles.questionContainer}
              onPress={() => setActiveIndex(index)}
            >
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  {activeIndex === index && (
                    <Ionicons name="checkmark" size={16} color="white" />
                  )}
                </View>
                <Text style={styles.questionText}>{question}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AnalyticsQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  questionContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "transparent",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
