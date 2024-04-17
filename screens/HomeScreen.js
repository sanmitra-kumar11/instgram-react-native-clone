import { View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Post from "../components/Post/Post";
import Stories from "../components/HomeScreen/Stories";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Header />
          <Stories />
          {POSTS.map((post) => (
            <Post key={post.userName} post={post} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
