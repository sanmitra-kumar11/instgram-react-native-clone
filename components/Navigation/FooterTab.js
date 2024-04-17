import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ExploreScreen from "../../screens/ExploreScreen";
import NewPostScreen from "../../screens/NewPostScreen";
import ReelsScreen from "../../screens/ReelsScreen";
import ProfileScreen from "../../screens/ProfileScreen";

export const ICONS = [
  {
    tabName: "Home",
    component: HomeScreen,
    active: require("../../assets/icons/icons-home-filled.png"),
    inActive: require("../../assets/icons/icons-home-outline.png"),
  },
  {
    tabName: "Expolre",
    component: ExploreScreen,
    active: require("../../assets/icons/icons-search-filled.png"),
    inActive: require("../../assets/icons/icons-search-outline.png"),
  },
  {
    tabName: "NewPost",
    component: NewPostScreen,
    active: require("../../assets/icons/icons-add-new-filled.png"),
    inActive: require("../../assets/icons/icons-add-new-outline.png"),
  },
  {
    tabName: "Reels",
    component: ReelsScreen,
    active: require("../../assets/icons/icons-reels-filled.png"),
    inActive: require("../../assets/icons/icons-reels-outline.png"),
  },
  {
    tabName: "Profile",
    component: ProfileScreen,
    active: require("../../assets/photos/profilePhotos/profile-photo.jpeg"),
    inActive: require("../../assets/photos/profilePhotos/profile-photo.jpeg"),
  },
];

const Tab = createBottomTabNavigator();

const FooterTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          paddingTop: 12,
          paddingBottom: 10,
          borderColor: "#f0eded",
          borderTopWidth: 0.5,
          zIndex: 999,
        },
        headerShown: false,
      }}
    >
      {icons.map((icon) => (
        <Tab.Screen
          key={icon.tabName}
          name={icon.tabName}
          component={icon.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? icon.active : icon.inActive}
                style={[
                  styles.icons,
                  icon.tabName === "Profile" && styles.profileIcon(),
                  icon.tabName === "Profile" && styles.profileIcon(focused),
                ]}
              />
            ),
            tabBarStyle: {
              justifyContent: "space-around",
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 25,
    height: 25,
  },
  profileIcon: (focused = false) => ({
    borderRadius: 50,
    borderWidth: focused ? 1.5 : 0,
    borderColor: "black",
  }),
});

export default FooterTab;
