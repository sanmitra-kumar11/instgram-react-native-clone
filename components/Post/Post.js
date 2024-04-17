import { View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Post = ({ content }) => {
  return (
    <View>
      <PostHeader content={content} />
      <PostBody content={content} />
      <PostFooter content={content} />
    </View>
  );
};

export default Post;
