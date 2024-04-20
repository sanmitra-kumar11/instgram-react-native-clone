import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const ProfileButton = ({ title, buttonStyle, titleStyle }) => {
  return (
    <Pressable style={[styles.buttonContainer, buttonStyle]}>
      <Text
        style={[
          {
            fontWeight: 600,
          },
          titleStyle,
        ]}
      >
        {title}
      </Text>
      {title === "Professional dashboard" && (
        <Text style={{ color: "grey" }}>
          25K accounts reached in the last 30 days.
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    borderColor: "#f0f0f0",
    backgroundColor: "#ededed",
    marginTop: 10,
  },
});

export default ProfileButton;
