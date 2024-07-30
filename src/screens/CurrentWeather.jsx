import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    high_low,
    descWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={50} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
      </View>
      <RowText
        message1={"High: 8"}
        message2={"Low: 6"}
        messageOneStyles={high_low}
        messageTwoStyles={high_low}
        messageWrapper={highLowWrapper}
      />
      <RowText
        messageWrapper={descWrapper}
        message2={"I'ts t-shirt day"}
        message1={"Clear Sky"}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  temp: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000",
  },
  feels: {
    fontSize: 30,
    color: "#000",
  },
  high_low: {
    fontSize: 20,
    color: "#000",
  },
  highLowWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
  descWrapper: {
    marginTop: 20,
    width: "80%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "start",
    paddingLeft: 20,
    marginBottom: 30,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 24,
  },
});
