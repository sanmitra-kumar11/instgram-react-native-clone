import { View, Text } from "react-native";
import { useState } from "react";

const MoreCaption = ({ truncatedCaption, fullCaption }) => {
  const [more, setMore] = useState(false);
  return (
    <>
      <Text>
        {!more ? truncatedCaption : fullCaption}
        <TouchableOpacity onPress={() => setMore(!more)}>
          <Text>{more ? "...more" : ""}</Text>
        </TouchableOpacity>
      </Text>
    </>
  );
};

export default MoreCaption;
