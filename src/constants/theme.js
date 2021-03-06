import React from "react";
import normalize from "react-native-normalize";
const colors = {
  accent: "#c5cea3",
  primary: "#016E40",
  secondary: "#689c36",
  tertiary: "#352722",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6",
  blue: "#2E5BFF",
  lightblue: "rgba(46,92,255,0.2)",
  green: "#33AC2E",
  red: "#D63649",
  yellow: "#F7C137",
  teal: "#00C1D4",
  purple: "#8C54FF",
  black: "#2E384D",
  black2: "#69707F",
  black3: "#8798AD",
  white: "#FFFFFF",
  gray: "#BFC5D2",
  gray2: "#F4F6FC",
  gray3: "#EEF3F5",
  caption: "#B0BAC9",
  input: "rgba(224, 231, 255, 0.20)", // '#E0E7FF' 20%
  border: "#D6DDF6",
  card: "rgba(46,91,255,0.08)",
  shadow: "rgba(46,91,255,0.07)",
};

const sizes = {
  // global sizes
  base: normalize(16),
  font: normalize(14),
  radius: normalize(6),
  padding: normalize(25),

  // font sizes
  h1: normalize(26),
  h2: normalize(20),
  h3: normalize(18),
  title: normalize(18),
  header: normalize(16),
  body: normalize(14),
  caption: normalize(12),
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};

export { colors, sizes, fonts };
