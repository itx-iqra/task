import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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
        <View style={styles.headerProgress} />
        <View style={styles.headerProgress} />
        <View style={styles.headerProgress} />
      </View>
      <Text style={styles.title}>
        How did you hear about
        <Text style={styles.titleHighlight}> Motivation</Text>
      </Text>
      <Text style={styles.subtitle}>Select an option to continue</Text>

      <TouchableOpacity
        onPress={() => handleOptionPress("Tiktok")}
        style={[
          styles.option,
          selectedOption === "Tiktok" && styles.selectedOption,
        ]}
      >
        <Text style={styles.optionText}>Tiktok</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOptionPress("Instagram")}
        style={[
          styles.option,
          selectedOption === "Instagram" && styles.selectedOption,
        ]}
      >
        <Text style={styles.optionText}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOptionPress("Facebook")}
        style={[
          styles.option,
          selectedOption === "Facebook" && styles.selectedOption,
        ]}
      >
        <Text style={styles.optionText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOptionPress("Google Play")}
        style={[
          styles.option,
          selectedOption === "Google Play" && styles.selectedOption,
        ]}
      >
        <Text style={styles.optionText}>Google Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOptionPress("App store")}
        style={[
          styles.option,
          selectedOption === "App store" && styles.selectedOption,
        ]}
      >
        <Text style={styles.optionText}>App store</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOptionPress("Friend/family")}
        style={[
          styles.option,
          selectedOption === "Friend/family" && styles.selectedOption,
        ]}
      >
        <Text style={styles.optionText}>Friend/family</Text>
      </TouchableOpacity>

      <View style={styles.loadingIndicator}>
        <View style={styles.loadingCircle} />
        <View style={styles.loadingCircle} />
        <View style={styles.loadingCircle} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText} onPress={() => navigation.goBack()}>
          Skip
        </Text>
        <Text
          style={styles.footerText}
          onPress={() => navigation.navigate("Third")}
        >
          Next
        </Text>
      </View>
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
  headerProgress: {
    width: "19%",
    height: 4,
    backgroundColor: "#565656",
    borderRadius: 3,
    top: 20,
    marginRight: 10,
    left: 45,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    marginBottom: 10,
    color: "#565656",
    textAlign: "center",
    top: 40,
  },
  titleHighlight: {
    color: "#565656",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 18,
    top: 50,
    color: "#666666",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#EFEFEF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    top: 60,
    borderColor: "#C9C9C9",
  },
  selectedOption: {
    backgroundColor: "#EEEEEE",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Open Sans",
    color: "#565656",
  },
  loadingIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loadingCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C0C0C0",
    marginHorizontal: 5,
    top: 60,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    top: 60,
  },
  footerText: {
    fontSize: 18,
    color: "#7F7F7F",
  },
});

export default App;
