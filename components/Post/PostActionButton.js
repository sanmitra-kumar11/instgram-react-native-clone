import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";

const PostActionButton = ({ content }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  let formatedLikesCount = content.likesCount;
  let formatedCommentsCount = content.commentsCount;
  let formatedSharesCount = content.sharesCount;

  if (content.likesCount > 10000 && content.likesCount < 100000) {
    formatedLikesCount = content.likesCount / 1000;
    formatedLikesCount = formatedLikesCount.toPrecision(3);
    formatedLikesCount = formatedLikesCount.concat(" k");
  } else if (content.likesCount > 100000) {
    formatedLikesCount = content.likesCount / 1000;
    formatedLikesCount = formatedLikesCount.toPrecision(4).endsWith(0)
      ? formatedLikesCount.toPrecision(3)
      : formatedLikesCount.toPrecision(4);
    formatedLikesCount = formatedLikesCount.concat(" k");
  }

  if (content.commentsCount > 10000 && content.commentsCount < 100000) {
    formatedCommentsCount = content.commentsCount / 1000;
    formatedCommentsCount = formatedCommentsCount.toPrecision(3);
    formatedCommentsCount = formatedCommentsCount.concat(" k");
  } else if (content.commentsCount > 100000) {
    formatedCommentsCount = content.commentsCount / 1000;
    formatedCommentsCount = formatedCommentsCount.toPrecision(4).endsWith(0)
      ? formatedCommentsCount.toPrecision(3)
      : formatedCommentsCount.toPrecision(4);
    formatedCommentsCount = formatedCommentsCount.concat(" k");
  }

  if (content.sharesCount > 10000 && content.sharesCount < 100000) {
    formatedSharesCount = content.sharesCount / 1000;
    formatedSharesCount = formatedSharesCount.toPrecision(3);
    formatedSharesCount = formatedSharesCount.concat(" k");
  } else if (content.sharesCount > 100000) {
    formatedSharesCount = content.sharesCount / 1000;
    formatedSharesCount = formatedSharesCount.toPrecision(4).endsWith(0)
      ? formatedSharesCount.toPrecision(3)
      : formatedSharesCount.toPrecision(4);
    formatedSharesCount = formatedSharesCount.concat(" k");
  }

  function likeHandler() {
    if (isLiked) {
      setIsLiked(false);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setIsLiked(true);
    }
  }

  function saveHandler() {
    if (isSaved) {
      setIsSaved(false);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setIsSaved(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsOuterContainer}>
        <View style={styles.iconsInnerContainer}>
          <TouchableOpacity onPress={likeHandler}>
            {isLiked ? (
              <Image
                source={require("../../assets/icons/icons-like-filled-2.png")}
                style={styles.icons}
              />
            ) : (
              <Image
                source={require("../../assets/icons/icons-like-outline-2.png")}
                style={styles.icons}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.counts}>{formatedLikesCount}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.iconsInnerContainer}>
            <Image
              source={require("../../assets/icons/icons-comment-outline.png")}
              style={styles.icons}
            />
            <Text style={styles.counts}>{formatedCommentsCount}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.iconsInnerContainer}>
            <Image
              source={require("../../assets/icons/icons-share-outline.png")}
              style={styles.icons}
            />
            <Text style={styles.counts}>{formatedSharesCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={saveHandler}>
          {isSaved ? (
            <Image
              source={require("../../assets/icons/icons-save-filled.png")}
              style={styles.icons}
            />
          ) : (
            <Image
              source={require("../../assets/icons/icons-save-outline.png")}
              style={styles.icons}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    marginRight: 15,
  },
  iconsOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  counts: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default PostActionButton;
