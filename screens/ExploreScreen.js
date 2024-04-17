import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SearchBar } from "react-native-elements";
import GridsLayout from "../components/ExploreScreen/GridsLayout";
import { EXPLORE_TAB_CONTENTS } from "../data/exploreTabContents";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>
          <SearchBar
            platform="ios"
            searchIcon={Platform.OS === "ios" ? { name: "search" } : null}
            clearIcon={Platform.OS === "ios" ? { name: "close-circle" } : null}
          />
        </View>
        {EXPLORE_TAB_CONTENTS.map((gridsLayout) => (
          <GridsLayout gridsLayout={gridsLayout.gridsLayout} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "red",
    height: 140,
    width: 140,
    textAlign: "center",
  },
});

export default ExploreScreen;
