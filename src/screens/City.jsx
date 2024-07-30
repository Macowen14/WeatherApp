import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  if (!weatherData) return null; // Handle case where weatherData is not passed

  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/cityImage.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
          <Text style={[styles.cityText, styles.countryStyle]}>{country}</Text>
          <View style={[styles.rowLayout, styles.populationWrapper]}>
            <IconText
              iconName={"user"}
              IconColor={"red"}
              bodyText={`Population: ${population}`}
              bodyTextStyles={styles.populationText}
            />
          </View>
          <View style={[styles.rowLayout, styles.sunWrapper]}>
            <View style={styles.sunInfo}>
              <IconText
                iconName={"sunrise"}
                IconColor={"yellow"}
                bodyText={moment(sunrise).format("h:mm:ss a")}
                bodyTextStyles={styles.sunText}
              />
            </View>
            <View style={styles.sunInfo}>
              <IconText
                iconName={"sunset"}
                IconColor={"yellow"}
                bodyText={moment(sunset).format("h:mm:ss a")}
                bodyTextStyles={styles.sunText}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  cityName: {
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  countryStyle: {
    fontSize: 20,
    marginBottom: 20,
  },
  cityText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  populationWrapper: {
    marginBottom: 30,
  },
  populationText: {
    fontSize: 20,
    color: "red",
  },
  sunWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Full width
    paddingHorizontal: 20,
  },
  sunInfo: {
    alignItems: "center",
  },
  sunText: {
    fontSize: 18,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
