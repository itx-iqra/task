import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text
            style={styles.backButtonText}
            onPress={() => navigation.goBack()}
          >
            {"<"}
          </Text>
        </TouchableOpacity>
        <View style={styles.progressIndicator}></View>
        <View style={styles.progressIndicator}></View>
        <View style={styles.progressIndicator}></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>How have you been feeling lately?</Text>
        <Text style={styles.subtitle}>
          You'll see quotes that align with your current mood
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress("Awesome")}
        >
          <FontAwesome5
            name={selectedOption === "Awesome" ? "smile-beam" : "smile"}
            size={16}
            color="#565656"
          />
          <Text style={styles.buttonText}>Awesome</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress("Good")}
        >
          <FontAwesome5
            name={selectedOption === "Good" ? "smile-beam" : "smile"}
            size={16}
            color="#565656"
          />
          <Text style={styles.buttonText}>Good</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress("Natural")}
        >
          <FontAwesome5 name="minus-circle" size={16} color="#565656" />
          <Text style={styles.buttonText}>Natural</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress("Bad")}
        >
          <FontAwesome5
            name={selectedOption === "Bad" ? "frown" : "meh"}
            size={16}
            color="#565656"
          />
          <Text style={styles.buttonText}>Bad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress("Terrible")}
        >
          <FontAwesome5
            name={selectedOption === "Terrible" ? "angry" : "frown"}
            size={16}
            color="#565656"
          />
          <Text style={styles.buttonText}>Terrible</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOptionPress("Other")}
        >
          <FontAwesome5
            name={selectedOption === "Other" ? "wave" : "wave"}
            size={16}
            color="#565656"
          />
          <Text style={styles.buttonText}>Other</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttons} onPress={() => {}}>
        <Text
          style={styles.buttonTexts}
          onPress={() => navigation.navigate("Eleven")}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 25,
    color: "#565656",
  },
  progressIndicator: {
    width: 50,
    flex: 1,
    height: 4,
    backgroundColor: "#565656",
    borderRadius: 2,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#565656",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#7F7F7F",
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#565656",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "#565656",
    marginLeft: 10,
  },
  buttons: {
    backgroundColor: "#7F7F7F",
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  buttonTexts: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default App;
