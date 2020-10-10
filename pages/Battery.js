import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { BatteryRow } from "../components/BatteryRow";

const data = [
  {
    name: "Living Room",
    icon: "lamp",
    battery: 80,
  },
  {
    name: "Bedroom",
    icon: "bed-empty",
    battery: 10,
  },
  {
    name: "Toilet",
    icon: "toilet",
    battery: 26,
  },
  {
    name: "Kitchen",
    icon: "toaster-oven",
    battery: 99,
  },
  {
    name: "Dining Room",
    icon: "seat-outline",
    battery: 78,
  },
];

export default function Battery({ navigation }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const renderItem = ({ item }) => {
    return (
      //build game row component
      <BatteryRow
        item={item}
        onPress={() => console.log(item.name)}
        style={{
          borderWidth: 2,
          borderRadius: 1,
        }}
      ></BatteryRow>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Battery Status</Text>
        </View>
      </View>
      <View style={styles.batteryListArea}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedRoom}
          style={{
            width: "100%",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1e2f",
    flex: 1,
  },
  batteryListArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
    padding: 20,
  },
  topArea: {
    flex: 1,
    padding: 32,
    backgroundColor: "#161826",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  titleArea: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#ced2f2",
    fontSize: 32,
    fontWeight: "bold",
    paddingRight: 30,
  },
});
