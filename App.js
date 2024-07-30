import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <CurrentWeather />
        {/* <UpcomingWeather /> */}
        {/* <City /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
