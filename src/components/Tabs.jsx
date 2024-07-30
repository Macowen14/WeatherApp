import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: "lightblue", height: 60 },
        headerStyle: { backgroundColor: "lightblue" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 22, color: "tomato" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "CurrentWeather") {
            iconName = "droplet";
          } else if (route.name === "UpcomingWeather") {
            iconName = "clock";
          } else if (route.name === "City") {
            iconName = "home";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="CurrentWeather"
        options={{ tabBarLabel: "Current Weather" }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="UpcomingWeather"
        options={{ tabBarLabel: "Upcoming Weather" }}
      >
        {() => (
          <UpcomingWeather
            weatherData={weather.list.slice(1, 6)}
            city={weather.city.name}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="City" options={{ tabBarLabel: "City" }}>
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
