import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

export default class Card extends Component {
  static defaultProps = {
    shadow: true,
    border: true,
    title: null,
  };

  /* renderHeader = () => {
    const { title } = this.props;
    if (!title) return null;

    return (
      <Block row space='between' style={styles.header}>
        <Text caption>{title}</Text>
        <TouchableOpacity>
          <Icon options />
        </TouchableOpacity>
      </Block>
    );
  };
 */
  render() {
    const { color, style, children, shadow, border, ...props } = this.props;
    const cardStyles = [
      styles.card,
      shadow && styles.shadow,
      border && styles.border,
      style,
    ];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base ,
    marginBottom: theme.sizes.base,
  },
  header: {
    paddingBottom: 24,
  },
  border: {
    borderColor: theme.colors.card,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  }
});
