import CustomHeader from "@/src/components/analytics/CustomHeader";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { Button, ProgressBar, RadioButton, Card } from "react-native-paper";

const generateQuestions = () => {
  const options = [
    ["Yes", "No"],
    ["Option A", "Option B"],
    ["Option A", "Option B", "Option C", "Option D"],
  ];
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    question: `Question ${i + 1}: This is a sample question text.`,
    options: options[i % 3],
    selectedOption: null,
    note: "",
  }));
};

const QuestionsScreen = () => {
  const questionsPerPage = 10;
  const [questions, setQuestions] = useState(generateQuestions());
  const [currentPage, setCurrentPage] = useState(0);

  const handleOptionChange = (questionId: any, value: any) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, selectedOption: value } : q
      )
    );
  };

  const handleNoteChange = (questionId: any, text: any) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === questionId ? { ...q, note: text } : q))
    );
  };

  const nextPage = () => {
    if ((currentPage + 1) * questionsPerPage < questions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progress = (currentPage * questionsPerPage + 1) / questions.length;

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.header}>Compressor Systems</Text> */}
      <CustomHeader title="Compressor Systems" />
      <ProgressBar
        progress={progress}
        color="#6200ee"
        style={styles.progressBar}
      />

      <ScrollView style={styles.scrollContainer}>
        {currentQuestions.map((q) => (
          <Card key={q.id} style={styles.card}>
            <Card.Title title={q.question} />
            <Card.Content>
              <RadioButton.Group
                onValueChange={(val) => handleOptionChange(q.id, val)}
                value={q.selectedOption ?? ""}
              >
                {q.options.map((opt, idx) => (
                  <View key={idx} style={styles.optionRow}>
                    <RadioButton value={opt} />
                    <Text style={styles.optionText}>{opt}</Text>
                  </View>
                ))}
              </RadioButton.Group>
              {q.options.includes("Yes") && q.options.includes("No") && (
                <TextInput
                  placeholder="Add a note..."
                  style={styles.input}
                  value={q.note}
                  onChangeText={(text) => handleNoteChange(q.id, text)}
                  multiline
                />
              )}
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.navigation}>
        <Button
          mode="outlined"
          onPress={prevPage}
          disabled={currentPage === 0}
          style={styles.navButton}
        >
          Previous
        </Button>
        <Button
          mode="contained"
          onPress={nextPage}
          disabled={(currentPage + 1) * questionsPerPage >= questions.length}
          style={styles.navButton}
        >
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3ff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    color: "#3E5F90",
  },
  progressBar: {
    height: 5,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
    marginTop: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  card: {
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginTop: 10,
    padding: 8,
    fontSize: 14,
    height: 60,
    textAlignVertical: "top",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
  },
  navButton: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default QuestionsScreen;
