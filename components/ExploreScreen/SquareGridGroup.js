import { View, Text } from "react-native";
import React from "react";
import SmallSquareGrid from "./SmallSquareGrid";

const SquareGridGroup = ({ grids }) => {
  return (
    <View>
      {grids.map((grid) => (
        <SmallSquareGrid
          viewStyles={{
            backgroundColor: "pink",
            height: 131,
            width: 131,
          }}
          grid={grid}
        />
      ))}
    </View>
  );
};

export default SquareGridGroup;
