import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        <View style={styles.headerLine} />
        <View style={styles.headerLine} />
        <View style={styles.headerLine} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Which option represents you bettert?</Text>
        <Text style={styles.description}>
          This information will be used to customize some quotes
        </Text>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Other</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("Second")}
        >
          <Text style={styles.buttonText}>Prefer not to say</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttons}>
        <Text
          style={styles.buttonTexts}
          onPress={() => navigation.navigate("Fifth")}
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  backButton: {
    padding: 8,
    top: 18,
  },
  backButtonText: {
    fontSize: 25,
    color: "#565656",
  },
  headerLine: {
    backgroundColor: "#565656",
    marginHorizontal: 12,
    width: 50,
    height: 5,
    marginLeft: 20,
    top: 20,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#565656",
  },
  description: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: "center",
    color: "#7F7F7F",
  },
  button: {
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    borderColor: "#C9C9C9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  // selectedButton: {
  //   backgroundColor: "#565656",
  // },
  buttonText: {
    fontSize: 17,
    color: "#565656",
    fontWeight: "600",
  },
  buttons: {
    backgroundColor: "#BCBCBC",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    top: -30,
    width: "250",
  },
  buttonTexts: {
    color: "#fff",
    fontSize: 18,
  },
});

export default App;
