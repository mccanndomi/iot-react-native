import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {DataContext} from '../services/DataContext';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function createAlert() {
  alert("Inactivity Warning! No motion Detected for over 30 minutes!");
}

export default function Stats({ navigation }) {
  const [bedBattery, diningBattery, kitchenBattery, livingBattery, toiletBattery, bedMovements, diningMovements, kitchenMovements, livingMovements, toiletMovements, lastRoom, lastDate, lastTime] = useContext(DataContext) 

  const data = {
    labels: ["Bedroom", "Dining", "Kitchen", "Living", "Toilet"],
    datasets: [
      {
        data: [bedMovements, diningMovements, kitchenMovements, livingMovements, toiletMovements]
      }
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>Satistics</Text>
          <TouchableOpacity onPress={createAlert()}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#ced2f2" style={{paddingLeft: 160}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomArea}>
      <Text style={styles.subTitle}>Movements</Text>
        <BarChart
          //style={graphStyle}
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#1c1e2f",
            backgroundGradientTo: "#1c1e2f",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(206, 210, 242, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(206, 210, 242, ${opacity})`,
          }}
          verticalLabelRotation={0}
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
  topArea: {
    flex: 1,
    padding: 32,
    backgroundColor: "#161826",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  titleArea: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: "#ced2f2",
    fontSize: 32,
    fontWeight: "bold",
    paddingRight: 30,
  },
  subTitle: {
    color: "#ced2f2",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingBottom: 30,
  },
  bottomArea: {
    flex: 7,
    justifyContent: "center",
  }
});
