import { View, Text } from "react-native";
import { useCallback, useEffect, useState } from "react";

const Caption = ({ caption, linesToTruncate }) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 2); //to check the text is more than 4 lines or not
    console.log(e.nativeEvent);
  }, []);

  return (
    <>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 2}
      >
        {caption}
      </Text>

      {lengthMore ? (
        <Text onPress={toggleNumberOfLines}>
          {textShown ? "Read less..." : "Read more..."}
        </Text>
      ) : null}
    </>
  );
};

export default Caption;
