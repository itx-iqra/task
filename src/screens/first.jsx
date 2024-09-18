import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/icons.png")}
          style={styles.brainImage}
        />
        <Text style={styles.title}>
          Transform your mindset and achieve your goals
        </Text>
        <Text style={styles.description}>
          Inspiration to think positively, overcome challenges, and focus on
          your growth
        </Text>
      </View>
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skip </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Second")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  brainImage: {
    width: 300,
    height: 300,
    color: "#565656",

    top: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#565656",
    marginTop: 200,
    alignItems: "center",
    width: 300,
    fontFamily: "Open Sans",
    lineHeight: 32.68,
    height: 70,
    left: 15,
    gap: 0,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Roboto",
    color: "#7F7F7F",
    fontWeight: "400",
  },
  pagination: {
    flexDirection: "row",
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    color: "#ADADAD",
    marginHorizontal: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 30,
  },
  button: {
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ADADAD",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default App;
