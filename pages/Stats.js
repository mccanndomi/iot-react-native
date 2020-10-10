import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Stats({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Stats!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1e2f",
    flex: 1,
  },
});
