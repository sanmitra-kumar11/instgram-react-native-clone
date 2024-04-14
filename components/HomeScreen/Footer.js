import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

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
