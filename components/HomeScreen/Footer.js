import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/icons-home-filled.png")}
          style={styles.icons}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/icons-search-outline.png")}
          style={styles.icons}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/icons-add-new-outline.png")}
          style={styles.icons}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/icons-reels-outline.png")}
          style={styles.icons}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/photos/profilePhotos/profile-photo.jpeg")}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    paddingTop: 12,
    borderColor: "#f0eded",
    borderTopWidth: 0.5,
  },
  icons: {
    width: 30,
    height: 30,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default Footer;
