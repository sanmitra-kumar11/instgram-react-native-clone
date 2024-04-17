import { View, Text } from "react-native";
import React from "react";
import GridsGroup from "./GridsGroup";

const styleRow = {
  flexDirection: "row",
  flexWrap: "wrap",
};

const styleRowReverse = {
  flexDirection: "row-reverse",
  flexWrap: "wrap",
};

const GridsLayout = ({ gridsLayout }) => {
  return (
    <View>
      {gridsLayout.map((gridsGroup) =>
        gridsGroup.gridsGroupId % 2 === 0 ? (
          <GridsGroup
            stylesFlex={styleRowReverse}
            gridsGroup={gridsGroup.gridsGroup}
          />
        ) : (
          <GridsGroup
            stylesFlex={styleRow}
            gridsGroup={gridsGroup.gridsGroup}
          />
        )
      )}
    </View>
  );
};

export default GridsLayout;
