import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const ProfileBio = ({ user }) => {
  let profileBioLink = user.profileBioLinks.url;
  if (profileBioLink !== "") {
    profileBioLink = profileBioLink.substring(8, profileBioLink.length);
  }
  function openLink(url) {
    Linking.openURL(url);
  }
  return (
    <>
      {user.isCreatorEnabled && (
        <Pressable>
          <Text style={styles.textColor}>{user.profileCategory}</Text>
        </Pressable>
      )}
      <Text style={styles.textFormat}>{user.profileBio}</Text>
      {profileBioLink && (
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => openLink(user.profileBioLinks.url)}
        >
          <Image
            source={require("../../assets/icons/icons-link.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={[styles.textColor, { marginLeft: 3 }]}>
            {profileBioLink}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: "#0e59b5",
  },
  icon: {
    width: 17,
    height: 17,
    marginTop: 3,
    marginLeft: 5,
    tintColor: "#0e59b5",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFormat: {
    flexWrap: "wrap",
    lineHeight: 20,
    marginRight: 20,
  },
});

export default ProfileBio;
