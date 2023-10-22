import React from "react";
import Text from "@kaloraat/react-native-text";
import { View, TouchableOpacity } from "react-native";

const Button = ({ title, handleSubmit,loading }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 2,
        backgroundColor: "black",
        height: 40,
        justifyContent: "center",
        marginHorizontal: 20,
        borderRadius: 25,
      }}
      onPress={handleSubmit}
    >
      <Text bold medium center style={{ color: "#F3901E" }}>
       {loading ? "Loading..." : title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
