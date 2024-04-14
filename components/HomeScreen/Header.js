import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View flexDirection="row">
          <Image
            source={require("../../assets/icons/icons-instagram-text.png")}
            style={styles.logo}
          />
          <Image
            source={require("../../assets/icons/icons-expand-arrow.png")}
            style={styles.logoExpand}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeIcon}>.</Text>
          </View>
          <Image
            source={require("../../assets/icons/icons-like.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messageBadge}>
            <Text style={styles.messageBadgeText}>7</Text>
          </View>
          <Image
            source={require("../../assets/icons/icons-messenger-outline.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  logoExpand: {
    width: 30,
    height: 15,
    resizeMode: "contain",
    marginTop: 15,
  },
  icons: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  messageBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 15,
    width: 25,
    height: 23,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  messageBadgeText: {
    color: "white",
    fontWeight: 800,
  },
  notificationBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 26,
    bottom: 15,
    width: 10,
    height: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  notificationBadgeIcon: {
    color: "#FF3250",
    fontWeight: 800,
  },
});

export default Header;
