import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Battery({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Battery!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "midnightblue",
    flex: 1,
  },
});
