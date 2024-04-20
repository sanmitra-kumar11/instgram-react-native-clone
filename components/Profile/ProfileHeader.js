import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <View flexDirection="row">
            <Text style={styles.profileName}>{USERS[0].userName}</Text>
            <Image
              source={require("../../assets/icons/icons-expand-arrow.png")}
              style={styles.logoDropdown}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/icons-add-new-outline-2.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/icons-menu-2.png")}
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
    marginLeft: 15,
    marginRight: 15,
  },
  profileName: {
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 22,
  },
  logoDropdown: {
    width: 20,
    height: 12,
    resizeMode: "contain",
    marginTop: 20,
  },
  icons: {
    width: 22,
    height: 22,
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

export default ProfileHeader;
