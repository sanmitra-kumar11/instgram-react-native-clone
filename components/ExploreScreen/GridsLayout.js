import { View, Text } from "react-native";
import React from "react";
import GridsGroup from "./GridsGroup";

const styleRow = {
  flexDirection: "row",
  flexWrap: "wrap",
  flex: 3,
};

const styleRowReverse = {
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  flex: 3,
};
const stylesGrid = {
  flex: 1,
  marginRight: 2.5,
};
const stylesGridReverse = {
  flex: 1,
  marginLeft: 2.5,
};

const GridsLayout = ({ gridsLayout }) => {
  return (
    <View style={{ justifyContent: "space-between" }}>
      {gridsLayout.map((gridsGroup) =>
        gridsGroup.gridsGroupId % 2 === 0 ? (
          <GridsGroup
            key={gridsGroup.gridsGroupId}
            stylesFlex={styleRowReverse}
            gridsGroup={gridsGroup.gridsGroup}
            stylesGrid={stylesGridReverse}
          />
        ) : (
          <GridsGroup
            key={gridsGroup.gridsGroupId}
            stylesFlex={styleRow}
            stylesGrid={stylesGrid}
            gridsGroup={gridsGroup.gridsGroup}
          />
        )
      )}
    </View>
  );
};

export default GridsLayout;
