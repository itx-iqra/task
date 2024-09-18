import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState(null);

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
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
      <Text style={styles.title}>How old are you?</Text>
      <Text style={styles.subtitle}>
        Your age is used to personalize your content so it resonates with you.
      </Text>
      <View style={styles.ageOptions}>
        <TouchableOpacity
          style={[
            styles.ageOption,
            selectedAge === "13 to 17" && styles.selected,
          ]}
          onPress={() => handleAgeSelect("13 to 17")}
        >
          <Text style={styles.ageOptionText}>13 to 17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ageOption,
            selectedAge === "18 to 24" && styles.selected,
          ]}
          onPress={() => handleAgeSelect("18 to 24")}
        >
          <Text style={styles.ageOptionText}>18 to 24</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ageOption,
            selectedAge === "25 to 34" && styles.selected,
          ]}
          onPress={() => handleAgeSelect("25 to 34")}
        >
          <Text style={styles.ageOptionText}>25 to 34</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ageOption,
            selectedAge === "35 to 44" && styles.selected,
          ]}
          onPress={() => handleAgeSelect("35 to 44")}
        >
          <Text style={styles.ageOptionText}>35 to 44</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ageOption,
            selectedAge === "45 to 54" && styles.selected,
          ]}
          onPress={() => handleAgeSelect("45 to 54")}
        >
          <Text style={styles.ageOptionText}>45 to 54</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ageOption, selectedAge === "55+" && styles.selected]}
          onPress={() => handleAgeSelect("55+")}
        >
          <Text style={styles.ageOptionText}>55+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttons}>
        <Text
          style={styles.buttonTexts}
          onPress={() => navigation.navigate("Sixth")}
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
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#565656",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#565656",
    marginBottom: 30,
    textAlign: "center",
  },
  ageOptions: {
    marginTop: 20,
    color: "#565656",
  },
  ageOption: {
    borderWidth: 1,
    borderColor: "#C9C9C9",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,

    fontSize: 17,
  },
  selected: {
    backgroundColor: "#f0f0f0",
  },
  ageOptionText: {
    fontSize: 16,
    color: "#565656",
  },
  buttons: {
    backgroundColor: "#BCBCBC",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    top: 80,
    width: "250",
  },
  buttonTexts: {
    color: "#fff",
    fontSize: 18,
  },
});

export default AgeSelector;
