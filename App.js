import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Client, Message, Paho, MQTT } from "react-native-paho-mqtt";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Battery from "./pages/Battery";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stats from "./pages/Stats";

export default function App() {
  //======================== BROKER ========================

  //Set up an in-memory alternative to global localStorage
  const myStorage = {
    setItem: (key, item) => {
      myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
      delete myStorage[key];
    },
  };

  // Create a client instance
  const client = new Client({
    uri: "ws://test.mosquitto.org:8080/ws",
    clientId: "e298506537834c0d9246e028f1266c4c",
    storage: myStorage,
  });

  // set event handlers
  client.on("connectionLost", (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log(responseObject.errorMessage);
    }
  });
  client.on("messageReceived", (message) => {
    console.log(message.payloadString);
  });

  // connect the client
  client.connect().then(() => {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    return client.subscribe("swen325/a3");
  });

  //========================================================

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Battery"
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
