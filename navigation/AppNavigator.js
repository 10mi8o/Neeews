import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import Article from "../screens/Article";
import Clip from "../screens/Clip";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="意匠電子設計" component={Home} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={Clip} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Clip") {
      iconName = "bookmark";
    }

    // You can return any component that you like here!
    return <FontAwesome name={iconName} size={24} color={color} />;
  },
});

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
