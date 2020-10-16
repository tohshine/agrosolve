import React, { useEffect } from "react";

import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import rgb from "hex-to-rgba";
import { Block, Text, Button, Label, Card, Badge } from "../utilities";
import { theme } from "../constants";
import { Avatar } from "react-native-elements";
import { connect } from "react-redux";
import { _GetProduct } from "../actions/productAction";
import { NavigationEvents } from "react-navigation";

const { width } = Dimensions.get("window");

const Dashboard = ({ navigation, _GetProduct, product }) => {

  const data = [
    {
      name: "P",
      title: "Marketing",
      route: "productFlow",
      icon: require("../../assets/product.png"),
    },
    {
      name: "L",
      title: "Logistics",
      route: "logistics",
      icon: require("../../assets/logistics.png"),
    },
    {
      name: "T",
      title: "Learning portal",
      route: "lecture",
      icon: require("../../assets/lecture.png"),
    },
    {
      name: "A",
      title: "Account",
      route: "account",
      icon: require("../../assets/account.png"),
    },
  ];
  const renderCard = () => {
    return data.map((d) => {
      return (
        <TouchableOpacity
          key={d.route}
          onPress={() => navigation.navigate(`${d.route}`)}
        >
          <Block
            flex={false}
            center
            card
            shadow
            middle
            style={styles.category}
            margin={[theme.sizes.body / 2]}
            padding={[theme.sizes.body]}
          >
            <Badge
              margin={[0, 0, 15]}
              size={50}
              color={rgb(theme.colors.secondary, "0.1")}
            >
              <Avatar rounded title='img' size='small' source={d.icon} />
            </Badge>
            <Text bold>{d.title}</Text>
          </Block>
        </TouchableOpacity>
      );
    });
  };

  const renderTaskCard = () => {
    return product.map((dt) => {
      return (
        <Block
          key={dt._id}
          flex={0.4}
          color={theme.colors.secondary}
          style={styles.task}
          margin={[10, 0]}
          card
          shadow
        >
          <Block
            flex={1}
            row
            color='transparent'
            space='between'
            center
            middle
            padding={[0, 10]}
          >
            <Avatar
              rounded
              icon={{ name: "user", type: "font-awesome" }}
              title='img'
              size='small'
              source={{ uri: `${dt.imageUrl}` }}
            />
            <Block flex={false} color='transparent'>
              <Text color={theme.colors.accent} bold h2>
                {dt.title}
              </Text>
              <Text color={theme.colors.accent} bold caption>
                {dt.location}
              </Text>
            </Block>
          </Block>
        </Block>
      );
    });
  };

  return (
    <Block flex={1}>
      <NavigationEvents onWillFocus={_GetProduct} />
      <Block flex={false} row margin={[0, theme.sizes.base/1.5]}>
        <Label green />
        <Label teal />
        <Label red />
      </Block>
      <Block
        flex={false}
        row
        space='between'
        margin={[0, theme.sizes.base]}
      >
        <Text h1 bold>
          Hi,{" "}
          <Text color='yellow' h1 bold>
            Guest
          </Text>
        </Text>
       <TouchableOpacity onPress={()=>navigation.navigate("account")}>
       <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          title='img'
          size='small'
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          }}
        />
       </TouchableOpacity>
      </Block>

      <Block
        margin={[0, theme.sizes.base]}
        flex={0.8}
        row
        middle
        center
        space='between'
        style={styles.categories}
      >
        {renderCard()}
      </Block>

      <Block color={theme.colors.primary} style={styles.taskContainer}>
        <Block
          margin={[theme.sizes.base * 2, theme.sizes.base]}
          color='transparent'
        >
          <Text h1 bold white>
            Recent{" "}
            <Text h1 bold color='yellow'>
              Product
            </Text>
          </Text>
          {renderTaskCard()}
        </Block>
      </Block>
    </Block>
  );
};

Dashboard.navigationOptions = {
  headerShown: false,
};
const mapStateToprops = (state) => {
  const slicedProduct = state.prod.products.slice(0, 3);
  return {
    product: slicedProduct,
  };
};

export default connect(mapStateToprops, { _GetProduct })(Dashboard);

const styles = StyleSheet.create({
  categories: {
    flexWrap: "wrap",
    paddingTop: 5,
    paddingHorizontal: theme.sizes.base / 2,
    marginBottom: theme.sizes.base / 4,
    borderRadius: 15,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
  taskContainer: {
    marginTop: -30,
    zIndex: -1,
  },
  task: {
    borderRadius: 15,
  },
});
