import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Card, Button } from "../utilities";
import { ListItem } from "react-native-elements";
import { theme } from "../constants";
import { navigate } from "../_navigationRef";

const singleLogisticList = ({ title, price, location, id }) => {
  return (
    <>
      <Card flex={false}>
        <Text bold title>
          {title}
        </Text>
        <Block flex={false} margin={[theme.sizes.base / 2, 0]}>
          <Text bold color={theme.colors.secondary}>
            product location: {location}
          </Text>
        </Block>
        <Block flex={false} row space='evenly'>
          <Button color={theme.colors.primary} style={styles.buttonStyle} onPress={()=>navigate("viewLogistics",{id})}>
            <Text bold white>
              view logistics
            </Text>
          </Button>
          <Button
            color={theme.colors.accent}
            style={styles.buttonStyle}
            onPress={() => navigate("logisticeTracking", { id })}
          >
            <Text bold>start logistics</Text>
          </Button>
        </Block>
        <Text bold gray>
          price: {price}
        </Text>
      </Card>
    </>
  );
};

singleLogisticList.navigationOptions = () => {
  header: () => false;
};

export default singleLogisticList;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 10,
  },
});
