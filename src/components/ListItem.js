import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default ListItem = ({ dt_txt, min, max, condition }) => {
  const { date, temp, item } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={50} color="#fff" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>Min {min}</Text>
      <Text style={temp}>Max {max}</Text>
      <Text>Condition: {condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 4,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 18,
    marginRight: 5,
  },
  date: {
    color: "white",
    fontSize: 16,
  },
});
