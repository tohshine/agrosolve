// just copy this code from the driving repo :)
import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      h4,
      title,
      body,
      paragraph,
      italic,
      caption,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      left,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      paragraph && styles.paragraph,
      paragraph && color === 'gray' && styles.paragraphGray,
      paragraph && color === 'gray2' && styles.paragraphGray2,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      left && styles.left,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      color && color === 'blue' && styles.blue,
      color && color === 'lightblue' && styles.lightblue,
      color && color === 'green' && styles.green,
      color && color === 'red' && styles.red,
      color && color === 'yellow' && styles.yellow,
      color && color === 'teal' && styles.teal,
      color && color === 'black' && styles.black,
      color && color === 'black2' && styles.black2,
      color && color === 'black3' && styles.black3,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      color && color === 'gray2' && styles.gray2,
      color && color === 'gray3' && styles.gray3,
      color && color === 'caption' && styles.caption,
      style, // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  // variations
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  semibold: {
    fontWeight: "500",
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  left: { textAlign: "left" },
  // colors
  accent: { color: theme.colors.accent },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  gray2: { color: theme.colors.gray2 },
  blue: { color: theme.colors.blue, },
  lightblue: { color: theme.colors.lightblue, },
  green: { color: theme.colors.green, },
  red: { color: theme.colors.red, },
  yellow: { color: theme.colors.yellow, },
  teal: { color: theme.colors.teal, },
  black: { color: theme.colors.black, },
  black2: { color: theme.colors.black2, },
  black3: { color: theme.colors.black3, },
  white: { color: theme.colors.white, },
  gray: { color: theme.colors.gray, },
  gray2: { color: theme.colors.gray2, },
  gray3: { color: theme.colors.gray3, },
  caption: { color: theme.colors.caption, },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  h4: theme.fonts.h4,
  paragraph: theme.fonts.paragraph,
  paragraphGray: theme.fonts.paragraphGray,
  paragraphGray2: theme.fonts.paragraphGray2,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small,
});

