import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton}>
          <Text
            style={styles.backButtonText}
            onPress={() => navigation.goBack()}
          >
            {"<"}
          </Text>
        </TouchableOpacity>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
      <View style={styles.content}>
        <Text style={styles.message}>
          You are exactly where you are meant to be.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Seventh")}
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

    top: 30,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 25,
    color: "#565656",
  },
  topBar: {
    flexDirection: "row",
    marginLeft: 50,
    marginBottom: 20,
  },
  indicator: {
    width: 60,
    height: 4,
    backgroundColor: "#565656",
    borderRadius: 2,
    marginRight: 12,
    margin: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#565656",
  },
  button: {
    backgroundColor: "#565656",
    padding: 10,
    borderRadius: 10,
    marginBottom: 40,
    width: 250,
    marginLeft: 55,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Screen;
