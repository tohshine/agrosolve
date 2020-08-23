import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Card, Text, Button, Block } from "../../utilities";
import { theme } from "../../constants";
import { HeaderNav } from "../../components/headerNav";
import {icons} from '../../constants'

const Details = ({ navigation }) => {
  const det = navigation.getParam("details");
  const { desc, title, price, number, imageUrl } = det;

  return (
    <Block flex={1} padding={[0,theme.sizes.base]}>
      <HeaderNav name={title}>
       {icons.backArrow("products")}
      </HeaderNav>
 
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex={false} padding={[theme.sizes.base,0]}>
        <Card middle space='evenly'>
          <Block
            flex={false}
            column
            space='between'
            center
            middle
            margin={theme.sizes.body / 2}
          >
            <Text h1 bold>
              {title}
            </Text>
            <Text color='teal'>phone number: {number}</Text>
          </Block>

          <Image
            source={{ uri: `${imageUrl}` }}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />

          <Text bold style={styles.top}>
            price: {price}{" "}
          </Text>
          <Text style={styles.top} spacing={0.8} height={20} gray bold>
            {desc}
          </Text>

          <Button
            gradient
            onPress={() => navigation.navigate("payment", { details: det })}
          >
            <Text bold center bold>
              Buy now
            </Text>
          </Button>
        </Card>
        </Block>
      </ScrollView>
    </Block>
  );
};

Details.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  top: {
    marginTop: 10,
  },
});

export default Details;
