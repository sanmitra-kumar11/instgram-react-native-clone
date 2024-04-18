import { View, Text } from "react-native";
import React from "react";
import SmallSquareGrid from "./SmallSquareGrid";
import RectangleGrid from "./RectangleGrid";
import SquareGridGroup from "./SquareGridGroup";

const GridsGroup = ({ stylesFlex, gridsGroup, stylesGrid }) => {
  return (
    <View style={stylesFlex}>
      {gridsGroup.map((grids, key) =>
        grids.gridType === "RECTANGLE" ? (
          <RectangleGrid
            key={key}
            grids={grids.rectangleGrid}
            stylesGrid={stylesGrid}
          />
        ) : (
          <SquareGridGroup
            key={key}
            grids={grids.squareGrid}
            stylesGrid={stylesGrid}
          />
        )
      )}
    </View>
  );
};

export default GridsGroup;
