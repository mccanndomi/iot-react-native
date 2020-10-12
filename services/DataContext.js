import React, {useState, useContext, createContext} from 'react';
import { Client, Message, Paho, MQTT } from "react-native-paho-mqtt";
import { Children } from 'react';

export const DataContext = createContext();

let tempData = [];

  

export const DataProvider =  props => {
    const [lastRoom, setLastRoom] = useState("Toilet");
    const [lastTime, setLastTime] = useState("14:15:44");
    const [lastDate, setLastDate] = useState("2020-10-12");

    const [bedMovements, setBedMovements] = useState(3);
    const [kitchenMovements, setKitchenMovements] = useState(1);
    const [livingMovements, setLivingMovements] = useState(5);
    const [toiletMovements, setToiletMovements] = useState(1);
    const [diningMovements, setDiningMovements] = useState(0);

    const [bedBattery, setBedBattery] = useState(90);
    const [kitchenBattery, setKitchenBattery] = useState(12);
    const [livingBattery, setLivingBattery] = useState(54);
    const [toiletBattery, setToiletBattery] = useState(73);
    const [diningBattery, setDiningBattery] = useState(99);

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
    clientId: "e298506537834c0d9242546e028f1266c4c",
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

    let data = message.payloadString.split(/,/);
    let dateTime = data[0].split(/ /);
    let dataObj = {
        date: dateTime[0],
        time: dateTime[1],
        name: data[1],
        active: data[2],
        battery: data[3],
    }

    var DATA = JSON.parse(JSON.stringify(dataObj));
    //console.log(DATA);
    tempData.push(DATA);

    if (tempData.length == 5) {
        tempData.forEach(element => {
            if (element.name === "kitchen") {
                if (element.active === 1) {
                    setLastRoom("kitchen");
                    setLastTime(element.time);
                    setLastDate(element.date);
                    setKitchenMovements(kitchenMovements + 1);
                }
                setKitchenBattery(element.battery);
            } else if (element.name === "bedroom") {
                if (element.active == 1) {
                    setLastRoom("bedroom");
                    setLastTime(element.time);
                    setLastDate(element.date);
                    setBedMovements(bedMovements + 1);
                }
                setBedBattery(element.battery);
            } else if (element.name === "dining") {
                if (element.active == 1) {
                    setLastRoom("dining");
                    setLastTime(element.time);
                    setLastDate(element.date);
                    setDiningMovements(diningMovements + 1);
                }
                setDiningBattery(element.battery);
            } else if (element.name === "living") {
                if (element.active == 1) {
                    setLastRoom("living");
                    setLastTime(element.time);
                    setLastDate(element.date);
                    setLivingMovements(livingMovements + 1);
                }
                setLivingBattery(element.battery);
            } else if (element.name === "toilet") {
                if (element.active == 1) {
                    setLastRoom("toilet");
                    setLastTime(element.time);
                    setLastDate(element.date);
                    setToiletMovements(toiletMovements + 1);
                }   
                setToiletBattery(element.battery);
            } 
        });
        console.log("room: " + lastRoom);
        console.log("time: " + lastTime);
        tempData = [];
    }
  });

  //========================================================

  // connect the client
  client.connect().then(() => {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    return client.subscribe("swen325/a3");
  });

    return(
        <DataContext.Provider value={[bedBattery, diningBattery, kitchenBattery, livingBattery, toiletBattery, bedMovements, diningMovements, kitchenMovements, livingMovements, toiletMovements, lastRoom, lastDate, lastTime]}>
            {props.children}
        </DataContext.Provider>
    )
};