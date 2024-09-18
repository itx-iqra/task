import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const [name, setName] = useState("");
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
        <View style={styles.headerIndicators}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>What do you want to be called?</Text>
        <Text style={styles.subtitle}>
          Your name will be displayed in your motivational quotes
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          onChangeText={setName}
          value={name}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Fourth")}
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
    padding: 20,
  },
  backButton: {
    marginRight: 10,
    marginLeft: 10,
    top: 18,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerIndicators: {
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: "#565656",
    marginRight: 10,
    marginLeft: 20,
    top: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#565656",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 20,
    color: "#7F7F7F",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21.09,
    marginTop: 10,
  },
  input: {
    borderColor: "#F6F6F6",
    borderWidth: 3,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#F6F6F6",
    marginTop: 25,
    alignItems: "center",
    fontSize: 17,
  },
  button: {
    backgroundColor: "#BCBCBC",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    top: 325,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default App;
