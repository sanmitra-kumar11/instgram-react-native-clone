import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from "../components/HomeScreen/Header";
import FooterTab, { ICONS } from "../components/HomeScreen/FooterTab";
import Post from "../components/Post/Post";
import Stories from "../components/HomeScreen/Stories";
import { POSTS } from "../data/posts";
import { Divider } from "react-native-elements";

const HomeScreen = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Header />
        <Stories />
        {POSTS.map((post) => (
          <Post key={post.userName} post={post} />
        ))}
      </ScrollView>
      <FooterTab icons={ICONS} />
    </View>
  );
};

export default HomeScreen;
