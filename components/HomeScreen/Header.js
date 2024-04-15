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
            style={styles.logoDropdown}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeIcon}>.</Text>
          </View>
          <Image
            source={require("../../assets/icons/icons-notification.png")}
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
    marginLeft: 20,
    marginRight: 15,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  logoDropdown: {
    width: 30,
    height: 15,
    resizeMode: "contain",
    marginTop: 15,
  },
  icons: {
    width: 25,
    height: 25,
    marginLeft: 25,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  messageBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 25,
    bottom: 15,
    width: 18,
    height: 18,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    marginLeft: 15,
  },
  messageBadgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  notificationBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 27,
    bottom: 17,
    width: 8,
    height: 8,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    marginLeft: 15,
  },
  notificationBadgeIcon: {
    color: "#FF3250",
    fontWeight: 800,
  },
});

export default Header;
