import React from "react";
import { NavigationEvents } from "react-navigation";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Block, Text, Button } from "../../utilities";
import { theme,icons } from "../../constants";

import { connect } from "react-redux";
import { _getLogistics } from "../../actions/productAction";
import { Entypo } from "@expo/vector-icons";

import SingleLogistic from "../../components/singleLogisticList";
import HeaderNav from "../../components/headerNav";



const ListLogistics = ({ navigation, _getLogistics, logisticArray, loading }) => {
  const getLogisticsLists = () => {
    if (logisticArray.length === 0 && loading)
      return <ActivityIndicator color={theme.colors.primary} size='large' />;
    if (logisticArray.length === 0 && !loading) {
      return (
        <Text caption center middle bold>
          {" "}
          Your Logistics Lists is Empty.
        </Text>
      );
    } else {
      return (
        <FlatList
          keyExtractor={(item) => item._id}
          data={logisticArray}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            if (!item.product) return;
            const { title, price, location,_id } = item.product;
            return (
              <SingleLogistic title={title} price={price} location={location} id={item._id} />
            );
          }}
        />
      );
    }
  };

  return (
    <Block margin={theme.sizes.base / 2} padding={[0, theme.sizes.base]}>
      <NavigationEvents onWillFocus={_getLogistics} />
      <HeaderNav name={"Home"}>
       {icons.backArrow("dashboard")}
      </HeaderNav>

      {getLogisticsLists()}
      
    </Block>
  );
};

ListLogistics.navigationOptions = {
  title: "list logistics",
  tabBarIcon: <Entypo name='list' size={24} color='black' />,
};

const styles = StyleSheet.create({});
const mapStateToProps = (state) => {
  return {
    logisticArray: state.prod.logistics,
    loading: state.data.loading,
  };
};

export default connect(mapStateToProps, { _getLogistics })(ListLogistics);
