import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ThemeSelection = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const navigation = useNavigation();

  const themes = [
    {
      id: 1,
      image: require("../../assets/image 5.jpg"), // Replace with actual image paths
      title: "Abcd",
    },
    {
      id: 2,
      image: require("../../assets/image 5.jpg"),
      title: "Abcd",
    },
    {
      id: 3,
      image: require("../../assets/image 5.jpg"),
      title: "Abcd",
    },
    {
      id: 4,
      image: require("../../assets/image 5.jpg"),
      title: "Abcd",
    },
    {
      id: 5,
      image: require("../../assets/image 5.jpg"),
      title: "Abcd",
    },
    {
      id: 6,
      image: require("../../assets/image 5.jpg"),
      title: "Abcd",
    },
  ];

  const handleThemeSelect = (themeId) => {
    setSelectedTheme(themeId);
  };

  const renderTheme = (theme) => {
    return (
      <TouchableOpacity
        key={theme.id}
        style={[
          styles.themeContainer,
          selectedTheme === theme.id && styles.selectedTheme,
        ]}
        onPress={() => handleThemeSelect(theme.id)}
      >
        <Image source={theme.image} style={styles.themeImage} />
        <Text style={styles.themeTitle}>{theme.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
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
      <Text style={styles.header}>
        Which theme would you like to start with?
      </Text>
      <Text style={styles.subHeader}>
        Choose from a large selection of themes or create your own later
      </Text>
      <View style={styles.ellipse}></View>
      <View style={styles.rectangle}></View>
      <View style={styles.themesContainer}>
        {themes.map((theme) => renderTheme(theme))}
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => console.log("Continue pressed")}
      >
        <Text style={styles.buttonText}>Continue</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#565656",
    textAlign: "center",
  },
  headers: {
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
  subHeader: {
    fontSize: 18,
    color: "#7F7F7F",
    textAlign: "center",
  },
  themesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    top: 20,
  },
  themeContainer: {
    width: 95,
    height: 134,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedTheme: {
    borderColor: "blue",
  },
  themeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  themeTitle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#7f7f7f",
    padding: 9,
    borderRadius: 20,
    alignItems: "center",
    top: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ellipse: {
    width: 27,
    height: 27,
    borderRadius: 50,
    backgroundColor: "#565656",
    zIndex: 1,
    left: 140,
    top: 40,
  },
  rectangle: {
    width: 300,
    height: 100,
    backgroundColor: "#EFEFEF",
    borderBottomWidth: 0,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,

    left: 10,
    borderRadius: 20,
    borderColor: "#C9C9C9",
  },
});

export default ThemeSelection;
