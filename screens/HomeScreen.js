import { View, Text } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from "../components/HomeScreen/Header";
import Footer from "../components/HomeScreen/Footer";
import Post from "../components/HomeScreen/Post";
import Stories from "../components/HomeScreen/Stories";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Stories />
      <Post />
      <Footer />
    </View>
  );
};

export default HomeScreen;
