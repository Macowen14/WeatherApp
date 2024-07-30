import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    cityName,
    cityText,
    country,
    populationText,
    sunText,
    populationWrapper,
    sunWrapper,
    rowLayout,
    image,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/images/cityImage.jpg")}
        style={image}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[cityText, country]}>Uk</Text>
        <View style={[rowLayout, populationWrapper]}>
          <IconText
            iconName={"user"}
            IconColor={"red"}
            bodyText={"80000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[rowLayout, sunWrapper]}>
          <View style={{ alignItems: "center" }}>
            <IconText
              iconName={"sunrise"}
              IconColor={"yellow"}
              bodyText={"10:46:58 am"}
              bodyTextStyles={sunText}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <IconText
              iconName={"sunset"}
              IconColor={"yellow"}
              bodyText={"17:30:28 pm"}
              bodyTextStyles={sunText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  country: {
    fontSize: 20,
    marginTop: 10,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  populationWrapper: {
    justifyContent: "center",

    marginTop: 30,
  },
  populationText: {
    fontSize: 20,
    marginLeft: 10,
    color: "red",
  },
  sunWrapper: {
    justifyContent: "space-between",
    marginTop: 30,
  },
  sunText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
