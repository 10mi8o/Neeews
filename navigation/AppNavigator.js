import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Neeews!!!!" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
