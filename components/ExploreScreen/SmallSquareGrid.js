import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

// Small individual grids

const SmallSquareGrid = ({ viewStyles, grid }) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={grid.contentUrl} resizeMode="cover" style={viewStyles} />
      </TouchableOpacity>
    </View>
  );
};

export default SmallSquareGrid;
