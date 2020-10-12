import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Battery from "./pages/Battery";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stats from "./pages/Stats";
import { DataProvider } from "./services/DataContext"

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <DataProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Stats"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Battery") {
              iconName = focused ? "battery" : "battery-outline";
            } else if (route.name === "Stats") {
              iconName = focused ? "chart-line" : "chart-line";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#8e96d1",
          inactiveTintColor: "#1c1e2f",
          activeBackgroundColor: "#10111c",
          inactiveBackgroundColor: "#10111c",
          style: styles.tabContainer,
        }}
      >
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Battery" component={Battery} />
      </Tab.Navigator>
    </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    borderTopWidth: 0,
  },
});
