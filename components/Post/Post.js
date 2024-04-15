import { View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <View>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </View>
  );
};

export default Post;
