import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PostActionButton from "./PostActionButton";
import Caption from "../Caption/Caption";

const PostFooter = ({ content }) => {
  return (
    <View>
      <PostActionButton content={content} />
      <View style={styles.captionContainer}>
        <Text>
          <Text style={styles.captionUserName}>{content.userName}</Text>
          {/* <Caption caption={content.caption} linesToTruncate={2} /> */}
          <Text> {content.caption}</Text>
        </Text>
      </View>
      {content.comments.length > 0 && (
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
