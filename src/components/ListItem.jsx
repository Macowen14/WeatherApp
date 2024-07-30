import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { WeatherType } from "../utilities/WeatherType";
import moment from "moment";

const ListItem = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={WeatherType[condition]?.icon} size={50} color="#fff" />
      <View style={styles.info}>
        <View style={styles.dateWrapper}>
          <Text style={styles.date}>{moment(dt_txt).format("dddd")}</Text>
          <Text style={styles.date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
        </View>
        <Text style={styles.temp}>Min: {Math.round(min, 2)}°C</Text>
        <Text style={styles.temp}>Max: {Math.round(max, 2)}°C</Text>
        <Text style={styles.condition}>Condition: {condition}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "white",
  },
  info: {
    marginLeft: 10,
  },
  temp: {
    color: "white",
    fontSize: 18,
    marginVertical: 2,
  },
  date: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  condition: {
    color: "white",
    fontSize: 14,
    fontStyle: "italic",
  },
});
