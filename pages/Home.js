import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import { ContentRow } from "../components/ContentRow";
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
      <View style={styles.outerColumn}></View>
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
                  label="Time:"
                  value="14:25:31"
                />
              </View>
            </View>
          </View>
          <View style={styles.roomInfomation}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              //extraData={selectedName}
              style={{ width: "100%" }}
            />
          </View>
        </View>
      </View>
      <View style={styles.outerColumn}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "midnightblue",
    flex: 1,
    flexDirection: "row",
  },
  container: {
    backgroundColor: "midnightblue",
    flex: 1,
    flexDirection: "column",
  },
  innerColumn: {
    flex: 10,
  },
  outerColumn: {
    flex: 1,
  },
  recentActivity: {
    flex: 2,
  },
  roomInfomation: {
    flex: 5,
    //backgroundColor: "blue",
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
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});
