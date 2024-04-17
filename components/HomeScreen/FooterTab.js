import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const ICONS = [
  {
    tabName: "home",
    active: require("../../assets/icons/icons-home-filled.png"),
    inActive: require("../../assets/icons/icons-home-outline.png"),
  },
  {
    tabName: "search",
    active: require("../../assets/icons/icons-search-filled.png"),
    inActive: require("../../assets/icons/icons-search-outline.png"),
  },
  {
    tabName: "addNew",
    active: require("../../assets/icons/icons-add-new-filled.png"),
    inActive: require("../../assets/icons/icons-add-new-outline.png"),
  },
  {
    tabName: "reels",
    active: require("../../assets/icons/icons-reels-filled.png"),
    inActive: require("../../assets/icons/icons-reels-outline.png"),
  },
  {
    tabName: "profile",
    active: require("../../assets/photos/profilePhotos/profile-photo.jpeg"),
    inActive: require("../../assets/photos/profilePhotos/profile-photo.jpeg"),
  },
];

const FooterTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <View style={styles.container}>
      {icons.map((icon) => (
        <Pressable
          key={icon.tabName}
          onPress={() => setActiveTab(icon.tabName)}
        >
          <Image
            source={activeTab === icon.tabName ? icon.active : icon.inActive}
            style={[
              styles.icons,
              icon.tabName === "profile" && styles.profileIcon(),
              icon.tabName === "profile" && styles.profileIcon(activeTab),
            ]}
          />
        </Pressable>
      ))}
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
    paddingBottom: 10,
    borderColor: "#f0eded",
    borderTopWidth: 0.5,
    zIndex: 999,
  },
  icons: {
    width: 25,
    height: 25,
  },
  profileIcon: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "profile" ? 1.5 : 0,
    borderColor: "black",
  }),
});

export default FooterTab;
