import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import ListItem from "../components/ListItem";

const DATA = [
  {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          humidity: 69,
          temp_kf: -1.11,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18,
        },
        dt_txt: "2022-08-30 15:00:00",
      },
      {
        dt: 1661882400,
        main: {
          temp: 295.45,
          feels_like: 295.59,
          temp_min: 292.84,
          temp_max: 295.45,
          temp_kf: 2.61,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 1.97,
          deg: 157,
          gust: 3.39,
        },
        dt_txt: "2022-08-30 18:00:00",
      },
      {
        dt: 1661893200,
        main: {
          temp: 292.46,
          feels_like: 292.54,
          temp_min: 290.31,
          temp_max: 292.46,
          temp_kf: 2.15,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 2.66,
          deg: 210,
          gust: 3.58,
        },
        dt_txt: "2022-08-30 21:00:00",
      },
    ],
    city: {
      id: 3163858,
      name: "Zocca",
      coord: {
        lat: 44.34,
        lon: 10.99,
      },
      country: "IT",
      population: 4593,
      timezone: 7200,
      sunrise: 1661834187,
      sunset: 1661882248,
    },
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/images/cloudImage1.jpg")}
        style={{ flex: 1 }}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA[0].list}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "royalblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
