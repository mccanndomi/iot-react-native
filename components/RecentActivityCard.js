import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * component that shows icons and correct value for recent activity
 *
 * @param {icon} props
 */
const RecentActivityCard = (props) => {
  return (
    <View style={styles.body}>
      <MaterialCommunityIcons
        name={props.icon}
        size={35}
        color="#8e96d1"
        style={{ padding: 8 }}
      ></MaterialCommunityIcons>
      <Text style={styles.text}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

export { RecentActivityCard };

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#ced2f2",
    fontSize: 22,
    fontWeight: "bold",
  },
  value: {
    color: "#858cc7",
    fontSize: 18,
    paddingTop: 10,
  },
});
