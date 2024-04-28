import {
  ImageBackground,
  ImageBackgroundBase,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../Profile/Profile";
import Post from "../Post/Post";
import ReelsTab from "../Profile/ReelsTab";
import PostTab from "../Profile/PostTab";
import TaggedTab from "../Profile/TaggedTab";
const Tab = createMaterialTopTabNavigator();

const ProfileTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Post");
  return (
    <View></View>
    // <View style={{ minHeight: 100 }}>
    //   <Tab.Navigator
    //     screenOptions={{
    //       tabBarShowLabel: false,
    //       tabBarIndicatorStyle: {
    //         backgroundColor: "black",
    //         height: 0.7,
    //       },
    //       tabBarStyle: { paddingTop: 10 },
    //     }}
    //   >
    //     {icons.map((icon) => (
    //       <Tab.Screen
    //         key={icon.tabName}
    //         name={icon.tabName}
    //         component={icon.component}
    //         options={{
    //           tabBarIcon: ({ focused }) => (
    //             <ImageBackground
    //               source={icon.active}
    //               imageStyle={!focused && { opacity: 0.5 }}
    //               style={[
    //                 icon.tabName === "Post"
    //                   ? styles.postIcon
    //                   : icon.tabName === "Reels"
    //                   ? styles.reelsIcon
    //                   : styles.icons,
    //               ]}
    //             />
    //           ),
    //           tabBarStyle: {
    //             justifyContent: "space-around",
    //           },
    //         }}
    //       />
    //     ))}
    //   </Tab.Navigator>
    // </View>
    // <View style={styles.tabContainer}>
    //   {icons.map((icon) => (
    //     <View
    //       key={icon.tabName}
    //       style={{
    //         width: 130,
    //         paddingBottom: 15,
    //         borderBottomWidth: activeTab === icon.tabName ? 1 : 0,
    //       }}
    //     >
    //       <View style={{ marginLeft: 50 }}>
    //         <Pressable onPress={() => setActiveTab(icon.tabName)}>
    //           <ImageBackground
    //             source={icon.active}
    //             imageStyle={activeTab !== icon.tabName && { opacity: 0.5 }}
    //             style={[
    //               icon.tabName === "Post"
    //                 ? styles.postIcon
    //                 : icon.tabName === "Reels"
    //                 ? styles.reelsIcon
    //                 : styles.icons,
    //             ]}
    //           />
    //         </Pressable>
    //       </View>
    //     </View>
    //   ))}
    // </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  icons: {
    width: 27,
    height: 27,
  },
  postIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  reelsIcon: {
    width: 30,
    height: 30,
  },
});

export default ProfileTab;
