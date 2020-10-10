import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * simple object that displayed info graphicaly for user to see.
 *
 * @param {item} //is the item being brought
 */

function getBatteryIcon(value) {
  if (value <= 10) {
    return "battery-alert";
  } else if (value <= 20) {
    return "battery-20";
  } else if (value <= 30) {
    return "battery-30";
  } else if (value <= 40) {
    return "battery-40";
  } else if (value <= 50) {
    return "battery-50";
  } else if (value <= 60) {
    return "battery-60";
  } else if (value <= 70) {
    return "battery-70";
  } else if (value <= 80) {
    return "battery-80";
  } else if (value <= 90) {
    return "battery-90";
  } else {
    return "battery";
  }
}

function getBatteryColor(value) {
  if (value <= 10) {
    return "#cf6177";
  } /* else if (value > 90) {
    return "#8dd481";
  } */ else {
    return "#8e96d1";
  }
}

const BatteryRow = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View style={styles.container}>
        <View style={styles.batteryicon}>
          <MaterialCommunityIcons
            name={getBatteryIcon(item.battery)}
            size={50}
            color={getBatteryColor(item.battery)}
          />
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.infoText}>{item.battery}%</Text>
        </View>
        <View style={styles.iconArea}>
          <MaterialCommunityIcons name={item.icon} size={20} color="#343854" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { BatteryRow };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181b2b",
    flex: 1,
    padding: 17,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  item: {},
  iconArea: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  infoArea: {
    flex: 6,
  },
  batteryicon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ced2f2",
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 20,
  },
  infoText: {
    color: "#8e96d1",
    fontSize: 20,
    fontWeight: "300",
    paddingLeft: 20,
  },
});
