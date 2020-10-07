import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * simple object that displayed info graphicaly for user to see.
 *
 * @param {item} //is the item being brought
 */
const ContentRow = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.outerContainer}>
        <View style={styles.iconArea}>
          <MaterialCommunityIcons
            name={item.icon}
            size={35}
            color="midnightblue"
            style={{ padding: 8 }}
          ></MaterialCommunityIcons>
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { ContentRow };

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    backgroundColor: "white",
    paddingTop: 16,
    paddingBottom: 16,
    marginVertical: 10,
    borderRadius: 10,
    marginRight: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "midnightblue",
  },
  iconArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoArea: {
    flex: 3,
  },
  statusText: {
    fontWeight: "bold",
    color: "#475370",
    paddingTop: 10,
  },
});
