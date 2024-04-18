import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

// Small individual grids

const SmallSquareGrid = ({ viewStyles, grid, stylesGrid }) => {
  return (
    <TouchableOpacity style={{ marginBottom: 1 }}>
      <Image source={grid.contentUrl} resizeMode="cover" style={viewStyles} />
      {grid.gridDisplayType === "SQUARE" ? (
        <Image
          source={require("../../assets/icons/icons-post.png")}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            tintColor: "white",
            marginLeft: 105,
            marginTop: 5,
          }}
        />
      ) : (
        <Image
          source={require("../../assets/icons/icons-reels-filled.png")}
          resizeMode="cover"
          style={{
            width: 25,
            height: 25,
            position: "absolute",
            tintColor: "white",
            marginLeft: 102,
            marginTop: 5,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default SmallSquareGrid;
