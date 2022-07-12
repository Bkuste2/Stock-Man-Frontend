import React from "react";

import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <Path
        fill="#00FFFC"
        d="M28.64 7.349c-9.175 0-16.64 7.464-16.64 16.64 0 9.175 7.465 16.64 16.64 16.64s16.64-7.465 16.64-16.64c0-9.176-7.465-16.64-16.64-16.64zm0 31.061c-7.952 0-14.421-6.47-14.421-14.421 0-7.952 6.469-14.421 14.421-14.421 7.952 0 14.421 6.469 14.421 14.42 0 7.953-6.469 14.422-14.421 14.422z"
      ></Path>
      <Path
        fill="#00FFFC"
        d="M34.444 22.88h-4.695v-4.695a1.11 1.11 0 00-2.218 0v4.694h-4.695a1.11 1.11 0 000 2.219h4.695v4.695a1.11 1.11 0 102.218 0v-4.695h4.695a1.11 1.11 0 100-2.219z"
      ></Path>
    </Svg>
  );
}

export default Icon;