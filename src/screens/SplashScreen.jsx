import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Block, Text, Button, Badge } from "../utilities";
import { theme } from "../constants";

const Splashscreen = ({navigation}) => {
  return (
    <Block padding={[0, theme.sizes.base]}>
      <Block center middle>
        <Badge margin={[0, 0, 15]} size={300} color='rgba(41,216,143,0.30)'>
          <Badge margin={[0, 0, 15]} size={200} color='rgba(41,216,143,0.20)'>
            <Image
              source={{
                uri:
                  "https://res.cloudinary.com/dlecos9op/image/upload/c_scale,w_1400/v1597327915/qg6zwab3wndenvlh32v1.png",
              }}
              style={{ height: 300, width: 300, resizeMode: "contain" }}
            />
          </Badge>
        </Badge>
        <Text bold h1 size={50}>
          agro{" "}
          <Text bold h1 color={theme.colors.green} size={50}>
            solve
          </Text>
        </Text>
      </Block>

      <Block flex={false} row space='evenly' center middle>
        <Button onPress={() => navigation.navigate("signin")} style={{}}>
          <Text h3 color='green' center style={{ width: 100 }}>
            login
          </Text>
        </Button>

        <Button onPress={() => navigation.navigate("signup")}>
          <Text h3 color='teal' center style={{ width: 100 }}>
            register
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

/* const styles = StyleSheet.create({
  container: { backgroundColor: "blue" },
}); */

export default Splashscreen;
