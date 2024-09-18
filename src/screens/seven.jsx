import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const App = () => {
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
        <View style={styles.progressBar}>
          <View style={styles.progressBarFill} />
          <View style={styles.progressBarFill} />
          <View style={styles.progressBarFill} />
        </View>
      </View>
      <Image source={require("../../assets/man.png")} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Let's make Motivation yours</Text>
        <Text style={styles.description}>
          Customize the app's appearance and essential settings to make the most
          out of your experience
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Continue pressed")}
        >
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Eighth")}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: "#565656",
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#F0F0F0",
    marginLeft: 16,
    borderRadius: 2,
    flexDirection: "row",
  },
  progressBarFill: {
    height: 4,
    backgroundColor: "#565656",
    borderRadius: 2,
    width: 60,
    marginHorizontal: 15,
  },
  image: {
    width: 201,
    height: 261,
    top: 50,
    left: 79,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#565656",
    lineHeight: 32.68,
    top: 170,

    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#7F7F7F",
    top: 180,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#565656",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    top: 189,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
