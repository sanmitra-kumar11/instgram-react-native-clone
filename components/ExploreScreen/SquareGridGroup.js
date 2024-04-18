import { View, Text } from "react-native";
import React from "react";
import SmallSquareGrid from "./SmallSquareGrid";

const SquareGridGroup = ({ grids, stylesGrid }) => {
  return (
    <View style={stylesGrid}>
      {grids.map((grid, key) => (
        <SmallSquareGrid
          key={key}
          viewStyles={{
            height: 131,
            width: 131,
          }}
          grid={grid}
          stylesGrid={stylesGrid}
        />
      ))}
    </View>
  );
};

export default SquareGridGroup;
