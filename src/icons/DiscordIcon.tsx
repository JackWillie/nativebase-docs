import { Icon } from "native-base";
import * as React from "react";
import { Path } from "react-native-svg";

function Discord({ fill, ...props }: any) {
  return (
    <Icon viewBox="0 0 24.735 20" {...props}>
      <Path
        data-name="Path 1"
        d="M23.412 57.509a21.754 21.754 0 00-2.112-5.162A13.022 13.022 0 0015.886 49l-.5 1.36a15.246 15.246 0 013.777 1.987 24.881 24.881 0 00-6.8-1.009 24.881 24.881 0 00-6.8 1.009A15.247 15.247 0 019.34 50.36L8.849 49a13.022 13.022 0 00-5.413 3.343 21.751 21.751 0 00-2.113 5.162A47.79 47.79 0 000 65.552C.085 65.684 2.029 69 7.328 69l1.343-1.945a14.284 14.284 0 01-4.253-1.918l.8-1.206a12.921 12.921 0 0014.292 0l.8 1.206a14.284 14.284 0 01-4.253 1.918L17.406 69c5.3 0 7.244-3.32 7.328-3.452a47.793 47.793 0 00-1.322-8.039zM9.017 61.3h-1.45v-2.415h1.45zm8.151 0h-1.45v-2.415h1.449z"
        fill={fill ?? "gray.100"}
        transform="translate(0 -49.004)"
      />
    </Icon>
  );
}

export default Discord;