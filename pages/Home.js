import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import { RecentActivityCard } from "../components/RecentActivityCard";

const data = [
  {
    name: "Living Room",
    icon: "lamp",
    status: "3 actions detected",
  },
  {
    name: "Bedroom",
    icon: "bed-empty",
    status: "Inactive",
  },
  {
    name: "Toilet",
    icon: "toilet",
    status: "1 actions detected",
  },
  {
    name: "Kitchen",
    icon: "toaster-oven",
    status: "Inactive",
  },
  {
    name: "Dining Room",
    icon: "seat-outline",
    status: "Inactive",
  },
];

export default function Home({ navigation }) {
  const [selectedName, setSelectedName] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <ContentRow
        item={item}
        onPress={() => setSelectedName(item.name)}
        style={{
          borderWidth: 2,
          borderRadius: 1,
        }}
      ></ContentRow>
    );
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerColumn}>
        <View style={styles.container}>
          <View style={styles.recentActivity}>
            <View style={styles.titleArea}>
              <Text style={styles.title}>Recent Activity</Text>
            </View>
            <View style={styles.lowerSection}>
              <View style={styles.iconArea}>
                <RecentActivityCard
                  icon="map-marker-circle"
                  label="Location:"
                  value="bedroom"
                />
              </View>
              <View style={styles.iconArea}>
                <RecentActivityCard
                  icon="clock-alert-outline"
                  label="Notification:"
                  value="14:25:31"
                />
              </View>
            </View>
          </View>
          <View style={styles.roomInfomation}>
            <Image
              source={require("../assets/floor-plan.png")}
              style={styles.backgroundImage}
              resizeMode="contain"
            ></Image>
            <View
              style={{
                position: "absolute",
                top: "27%",
                left: "63%",
                right: 0,
                bottom: 0,
                width: "20%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.roomName}>Bedroom</Text>
              <Text style={styles.roomValue}>Movements: 6</Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: "16%",
                left: "28%",
                right: 0,
                bottom: 0,
                width: "19%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.roomName}>Kitchen</Text>
              <Text style={styles.roomValue}>Movements: 2</Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: "34%",
                left: "18%",
                right: 0,
                bottom: 0,
                width: "25%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.roomName}>Living Room</Text>
              <Text style={styles.roomValue}>Movements: 1</Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: "50%",
                left: "15%",
                right: 0,
                bottom: 0,
                width: "26%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.roomName}>Dining Room</Text>
              <Text style={styles.roomValue}>Movements: 3</Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: "58%",
                left: "57%",
                right: 0,
                bottom: 0,
                width: "19%",
                height: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.roomName}>Bathroom</Text>
              <Text style={styles.roomValue}>Movements: 0</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  roomName: {
    color: "#ced2f2",
    fontSize: 15,
    fontWeight: "700",
  },
  roomValue: {
    color: "#858cc7",
    fontSize: 11,
    paddingTop: 6,
  },
  outerContainer: {
    backgroundColor: "#1c1e2f",
    flex: 1,
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#1c1e2f",
    flex: 1,
    flexDirection: "column",
  },
  innerColumn: {
    flex: 1,
  },
  recentActivity: {
    flex: 2,
    padding: 32,
    backgroundColor: "#161826",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  roomInfomation: {
    flex: 5,
  },
  titleArea: {
    flex: 2,
    justifyContent: "center",
  },
  lowerSection: {
    flex: 5,
    flexDirection: "row",
  },
  iconArea: {
    flex: 1,
  },
  title: {
    color: "#ced2f2",
    fontSize: 32,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});
