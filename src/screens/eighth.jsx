import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
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
        <View style={styles.progressIndicators}>
          <View style={styles.progressIndicator} />
          <View style={styles.progressIndicator} />
          <View style={styles.progressIndicator} />
          <View style={styles.progressIndicator} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/profile.png")} // Replace with actual image path
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>
          Tailor your journey by sharing a bit about yourself
        </Text>
        <Text style={styles.subtitle}>
          Answer a few questions to get personalized quotes
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Ninth")}
          >
            Log in
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 15,
  },
  backButtonText: {
    fontSize: 25,
  },
  progressIndicators: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  progressIndicator: {
    width: 50,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#565656",
    marginHorizontal: 5,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  imageContainer: {
    width: 330,
    height: 340,
    borderRadius: 10,
    backgroundColor: "#5656",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 256,
    height: 275,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
    color: "#565656",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "400",
    color: "#565656",
  },
  button: {
    backgroundColor: "#565656",
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
