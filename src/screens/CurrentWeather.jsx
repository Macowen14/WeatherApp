import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    descWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;
  const backgroundColor =
    WeatherType[weatherCondition]?.backgroundColor || "#4A90E2";

  return (
    <SafeAreaView style={[wrapper, { backgroundColor }]}>
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition]?.icon || "cloud"}
          size={100}
          color="white"
          style={styles.icon}
        />
        <Text style={tempStyle}>{`${temp.toFixed(1)}°C`}</Text>
        <Text style={feels}>{`Feels like ${feels_like.toFixed(1)}°C`}</Text>
      </View>
      <RowText
        message1={`High: ${temp_max.toFixed(1)}°C`}
        message2={`Low: ${temp_min.toFixed(1)}°C`}
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
        messageWrapper={highLowWrapper}
      />
      <RowText
        messageWrapper={descWrapper}
        message1={weather[0]?.description}
        message2={WeatherType[weatherCondition]?.message || ""}
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
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 20,
  },
  tempStyle: {
    fontSize: 72,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  feels: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  highLowWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  highLow: {
    fontSize: 20,
    color: "white",
  },
  descWrapper: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  description: {
    fontSize: 28,
    color: "white",
    textTransform: "capitalize",
  },
  message: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});
