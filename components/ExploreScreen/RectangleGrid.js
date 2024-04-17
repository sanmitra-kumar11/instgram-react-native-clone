import { View, Text } from "react-native";
import React from "react";
import SmallSquareGrid from "./SmallSquareGrid";

const RectangleGrid = ({ grids }) => {
  return (
    <View>
      {grids.map((grid) => (
        <SmallSquareGrid
          viewStyles={{
            backgroundColor: "pink",
            height: 262,
            width: 131,
          }}
          grid={grid}
        />
      ))}
    </View>
  );
};

export default RectangleGrid;
