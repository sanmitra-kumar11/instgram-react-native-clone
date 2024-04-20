import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import GridsLayout from "../components/ExploreScreen/GridsLayout";
import { EXPLORE_TAB_CONTENTS } from "../data/exploreTabContents";
import { color } from "react-native-elements/dist/helpers";

const ExploreScreen = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [placeHolderText, setPlaceHolderText] = useState("Search");
  function onChangeTextHandler(keyword) {
    setSearchKeyword(keyword);
  }
  function onCancelHandler() {
    setSearchKeyword((keyword) => (keyword != "" ? "" : undefined));
    setPlaceHolderText("Search");
  }
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          <SearchBar
            platform="ios"
            searchIcon={Platform.OS === "ios" ? { name: "search" } : null}
            clearIcon={Platform.OS === "ios" ? { name: "close-circle" } : null}
            placeholder={placeHolderText}
            value={searchKeyword}
            onChangeText={onChangeTextHandler}
            cancelButtonProps={{ color: "black" }}
            autoCapitalize="none"
            onCancel={onCancelHandler}
            inputContainerStyle={{ height: 20, marginBottom: 3 }}
          />
        </View>

        <GridsLayout gridsLayout={EXPLORE_TAB_CONTENTS} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
