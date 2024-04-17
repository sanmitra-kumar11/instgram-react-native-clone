import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native-elements";

const PostBody = ({ content }) => {
  return (
    <TouchableOpacity style={{ alignItems: "stretch" }}>
      <Image
        source={content.contentUrl}
        style={styles.postPhoto}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postPhoto: {
    width: 400,
    height: 400,
  },
});

export default PostBody;
