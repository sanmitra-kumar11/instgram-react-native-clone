import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ProfileMetrics = ({ metric, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.metric}>{metric}</Text>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  metric: {
    fontWeight: "bold",
  },
});

export default ProfileMetrics;
