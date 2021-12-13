import React from "react";
import { Box, HStack, Text } from "native-base";

const FontSizeComponent = ({ name, value }) => {
  return (
    <HStack alignItems="flex-start" py="3">
      <Text flexShrink="0" w="12" _text={{ color: "white" }}>
        {name}
      </Text>
      <Text
        fontSize={value}
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        overflow="hidden"
        ml="5"
      >
        The quick brown fox jumped over the lazy dog.
      </Text>
    </HStack>
  );
};
export default FontSizeComponent;
