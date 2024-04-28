import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileMetrics from "./ProfileMetrics";
import ProfileBio from "./ProfileBio";
import ProfileButton from "./ProfileButton";
import ProfilePhoto from "./ProfilePhoto";
import ProfileHighlights from "./ProfileHighlights";
import ProfileTab from "../Navigation/ProfileTab";
import { PROFILE_TAB_ICONS } from "../../data/profileTabIcons";

const Profile = ({ user }) => {
  return (
    <>
      <View style={styles.subHeaderContainer}>
        <ProfilePhoto user={user} />
        <View style={styles.metricsContainter}>
          <ProfileMetrics metric={user.postsCount} title={"posts"} />
          <ProfileMetrics metric={user.followersCount} title={"followers"} />
          <ProfileMetrics metric={user.followingCount} title={"following"} />
        </View>
      </View>
      <Text style={styles.storiesUserName}>{user.profileName}</Text>
      <View style={styles.detailsContainer}>
        <ProfileBio user={user} />
        {user.accountType === "Professional" && (
          <ProfileButton
            title={"Professional dashboard"}
            buttonStyle={{ padding: 10, marginRight: 16 }}
          />
        )}
        <View style={styles.buttonContainer}>
          <ProfileButton
            title={"Edit profile"}
            buttonStyle={[styles.button, { marginRight: 6 }]}
            titleStyle={{ textAlign: "center" }}
          />
          <ProfileButton
            title={"Share profile"}
            buttonStyle={[styles.button, { marginRight: 6 }]}
            titleStyle={{ textAlign: "center" }}
          />
          <ProfileButton
            title={"Email"}
            buttonStyle={[styles.button, { marginRight: 16 }]}
            titleStyle={{ textAlign: "center" }}
          />
        </View>
      </View>
      <ProfileHighlights user={user} />
      {/* <ProfileTab icons={PROFILE_TAB_ICONS} /> */}
    </>
  );
};
const styles = StyleSheet.create({
  storiesUserName: {
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
  },
  metricsContainter: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 2,
    marginLeft: 45,
    marginRight: 15,
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 3,
    alignItems: "center",
    marginTop: 15,
  },
  detailsContainer: {
    marginLeft: 15,
    marginTop: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 3,
  },
  button: {
    padding: 8,
    flex: 1,
  },
});
export default Profile;
