import React from "react";

import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <Path
        stroke="#00FFFC"
        strokeLinecap="round"
        strokeWidth="5"
        d="M2.5 2.5L26.5 2.5"
      ></Path>
      <Path
        stroke="#00FFFC"
        strokeLinecap="round"
        strokeWidth="5"
        d="M2.5 14.5L26.5 14.5"
      ></Path>
      <Path
        stroke="#00FFFC"
        strokeLinecap="round"
        strokeWidth="5"
        d="M2.5 26.5L26.5 26.5"
      ></Path>
    </Svg>
  );
}

export default Icon;