import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Profile from "../components/Profile/Profile";
import { USERS } from "../data/users";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <ProfileHeader />
        <Profile user={USERS[0]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
