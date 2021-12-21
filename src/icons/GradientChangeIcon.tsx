import { Icon, IIconProps } from "native-base";
import React from "react";
import { G, Path } from "react-native-svg";

export const GradientChangeIcon = (props: IIconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <G>
        <Path d="M7.50006 5.6L10.0001 7L8.60006 4.5L10.0001 2L7.50006 3.4L5.00006 2L6.40006 4.5L5.00006 7L7.50006 5.6ZM19.5001 15.4L17.0001 14L18.4001 16.5L17.0001 19L19.5001 17.6L22.0001 19L20.6001 16.5L22.0001 14L19.5001 15.4ZM22.0001 2L19.5001 3.4L17.0001 2L18.4001 4.5L17.0001 7L19.5001 5.6L22.0001 7L20.6001 4.5L22.0001 2ZM14.3701 7.29C13.9801 6.9 13.3501 6.9 12.9601 7.29L1.29006 18.96C0.900059 19.35 0.900059 19.98 1.29006 20.37L3.63006 22.71C4.02006 23.1 4.65006 23.1 5.04006 22.71L16.7001 11.05C17.0901 10.66 17.0901 10.03 16.7001 9.64L14.3701 7.29ZM13.3401 12.78L11.2201 10.66L13.6601 8.22L15.7801 10.34L13.3401 12.78Z" />
      </G>
    </Icon>
  );
};
