import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PostActionButton from "./PostActionButton";

const PostFooter = ({ post }) => {
  return (
    <View>
      <PostActionButton post={post} />
      <View style={styles.captionContainer}>
        <Text>
          <Text style={styles.captionUserName}>{post.userName}</Text>
          <Text> {post.caption}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    margin: 10,
    marginLeft: 25,
  },
  captionUserName: { fontWeight: "bold" },
});

export default PostFooter;
