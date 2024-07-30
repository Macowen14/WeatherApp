import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
import { useGetWeather } from "./src/hooks/UseGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const { loading, weather, error } = useGetWeather();

  if (error) {
    return <ErrorItem errorMessage={error} />;
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      {weather && weather.list ? (
        <Tabs weather={weather} />
      ) : (
        <View style={styles.noDataContainer}>
          <Text>No weather data available</Text>
        </View>
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 30,
  },
});
