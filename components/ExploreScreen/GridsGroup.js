import { View, Text } from "react-native";
import React from "react";
import SmallSquareGrid from "./SmallSquareGrid";
import RectangleGrid from "./RectangleGrid";
import SquareGridGroup from "./SquareGridGroup";

const GridsGroup = ({ stylesFlex, gridsGroup }) => {
  return (
    <View style={stylesFlex}>
      {gridsGroup.map((grids) =>
        grids.gridType === "RECTANGLE" ? (
          <RectangleGrid grids={grids.rectangleGrid} />
        ) : (
          <SquareGridGroup grids={grids.squareGrid} />
        )
      )}
    </View>
  );
};

export default GridsGroup;
