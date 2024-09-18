import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import First from "../screens/first";
import Second from "../screens/second";
import Third from "../screens/third";
import Fourth from "../screens/fourth";
import Fifth from "../screens/fifth";
import Sixth from "../screens/sixth";
import Seven from "../screens/seven";
import Eighth from "../screens/eighth";
import Ninth from "../screens/ninth";
import Tenth from "../screens/tenth";
import Eleven from "../screens/eleven";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="first" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name="Fifth" component={Fifth} />
        <Stack.Screen name="Sixth" component={Sixth} />
        <Stack.Screen name="Seventh" component={Seven} />
        <Stack.Screen name="Eighth" component={Eighth} />
        <Stack.Screen name="Ninth" component={Ninth} />
        <Stack.Screen name="Tenth" component={Tenth} />
        <Stack.Screen name="Eleven" component={Eleven} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
