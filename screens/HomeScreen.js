import { View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Post from "../components/Post/Post";
import Stories from "../components/HomeScreen/Stories";
import { CONTENTS } from "../data/contents";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        >
          <Header />
          <Stories />
          {CONTENTS.map((content) => (
            <Post key={content.contentId} content={content} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
