import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
        <View style={styles.headerSeparator} />
        <View style={styles.headerSeparator} />
        <View style={styles.headerSeparator} />
      </View>
      <View style={styles.content}>
        <Image source={require("../../assets/lady.png")} style={styles.image} />
        <Text style={styles.title}>Let's make Motivation work for you</Text>
        <Text style={styles.description}>
          Answer a few questions to customize Motivation to you and your goals
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Tenth")}
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
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    top: 25,
  },
  backButtonText: {
    fontSize: 24,
    color: "#565656",
  },
  headerSeparator: {
    height: 4,
    width: 50,
    backgroundColor: "#565656",
    flex: 1,
    top: 30,
    marginHorizontal: 10,
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: 364,
    height: 364,
    top: 40,
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#565656",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#7F7F7F",
  },
  button: {
    backgroundColor: "#7F7F7F",
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default App;
