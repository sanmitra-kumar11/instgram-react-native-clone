import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PostActionButton from "./PostActionButton";
import Caption from "../Caption/Caption";

const PostFooter = ({ post }) => {
  return (
    <View>
      <PostActionButton post={post} />
      <View style={styles.captionContainer}>
        <Text>
          <Text style={styles.captionUserName}>{post.userName}</Text>
          {/* <Caption caption={post.caption} linesToTruncate={2} /> */}
          <Text> {post.caption}</Text>
        </Text>
      </View>
      {post.comments.length > 0 && (
        <TouchableOpacity>
          <Text style={styles.viewCommentsBtn}>View all comments</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  captionUserName: {
    fontWeight: "bold",
  },
  viewCommentsBtn: {
    marginLeft: 15,
    marginTop: -5,
    marginBottom: 15,
    color: "grey",
    fontWeight: 300,
  },
});

export default PostFooter;
