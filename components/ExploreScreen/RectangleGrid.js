import { View, Text } from "react-native";
import React from "react";
import SmallSquareGrid from "./SmallSquareGrid";

const RectangleGrid = ({ grids, stylesGrid }) => {
  return (
    <View style={{ flex: 1 }}>
      {grids.map((grid, key) => (
        <SmallSquareGrid
          key={key}
          viewStyles={{
            height: 263,
            width: 131,
          }}
          grid={grid}
          stylesGrid={stylesGrid}
        />
      ))}
    </View>
  );
};

export default RectangleGrid;
