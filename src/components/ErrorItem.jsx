import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>
        {errorMessage || "Sorry, something went wrong"}
      </Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  );
};

export default ErrorItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  errorMessage: {
    color: "white",
    fontSize: 28,
    marginHorizontal: 10,
    textAlign: "center",
  },
});
