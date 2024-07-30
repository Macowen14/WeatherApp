import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        setLoading(false);
        return;
      }
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        await fetchWeatherData(latitude, longitude);
      } catch (e) {
        setError("Error getting location: " + e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, weather };
};
