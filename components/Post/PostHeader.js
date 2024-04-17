import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const PostHeader = ({ content }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={content.profilePhoto}
          style={styles.profileIcon}
          resizeMode="contain"
        />
        <Text style={styles.profileName}>{content.userName}</Text>
        <Text style={styles.uploadTime}>{content.uploadTime}</Text>
      </View>
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  profileName: {
    fontWeight: "bold",
    marginLeft: 8,
  },
  uploadTime: {
    fontWeight: 200,
    marginLeft: 5,
    color: "grey",
  },
});

export default PostHeader;
