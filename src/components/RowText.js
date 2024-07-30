import { Text, View } from "react-native";
import React from "react";

const RowText = ({
  message1,
  message2,
  messageOneStyles,
  messageTwoStyles,
  messageWrapper,
}) => {
  return (
    <View style={messageWrapper}>
      <Text style={messageOneStyles}>{message1} </Text>
      <Text style={messageTwoStyles}>{message2}</Text>
    </View>
  );
};

export default RowText;
