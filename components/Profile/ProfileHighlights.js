import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProfileHighlights = ({ user }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 18,
          justifyContent: "space-evenly",
          flex: 0.9,
          marginLeft: -8,
        }}
      >
        {user.profileHighlights.map((highlight) => (
          <View style={{ alignItems: "center", marginLeft: -10 }}>
            <TouchableOpacity
              style={{
                height: 65,
                width: 65,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#cfcfcf",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 5,
              }}
            >
              <Image
                style={{
                  height: 45,
                  width: 45,
                }}
                source={highlight.highlightCover}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 11 }}>{highlight.highlightTitle}</Text>
          </View>
        ))}
        <View style={{ alignItems: "center", marginLeft: -10 }}>
          <TouchableOpacity
            style={{
              height: 65,
              width: 65,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#cfcfcf",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require("../../assets/icons/icons-plus-2.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 11 }}>New</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileHighlights;
