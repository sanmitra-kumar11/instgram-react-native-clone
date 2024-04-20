import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

const ProfilePhoto = ({ user }) => {
  return (
    <View style={styles.storiesContainer}>
      <TouchableOpacity>
        <Image source={user.profilePhoto} style={styles.stories} />
        <Image
          source={require("../../assets/icons/icons-new-story.png")}
          style={styles.newStoryIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  stories: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    marginLeft: 15,
    marginTop: 4,
    borderRadius: 50,
  },
  storiesContainer: {
    alignItems: "center",
    flex: 1,
  },
  newStoryIcon: {
    position: "absolute",
    left: 65,
    bottom: 4,
    width: 22,
    height: 22,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    marginLeft: 15,
  },
});
export default ProfilePhoto;
