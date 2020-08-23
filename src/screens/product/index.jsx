import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Block, Text } from "../../utilities";
import SingleProduct from "../../components/singleProduct";
import { theme,icons } from "../../constants";
import { connect } from "react-redux";
import { _GetProduct } from "../../actions/productAction";
import {HeaderNav} from '../../components/headerNav'



const List = ({ navigation, products, _GetProduct,loading }) => {


  return (
    <Block color={theme.colors.gray2} padding={theme.sizes.base/2}>
      <NavigationEvents onWillFocus={_GetProduct} />
     
     <HeaderNav name={"Products"}>
      {icons.backArrow("dashboard")}
     </HeaderNav>
       {products.length===0 && loading&&<ActivityIndicator color={theme.colors.primary} size="large"/>}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
            const { title, desc, imageUrl, price, location, number,shipping } = item;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("productDetails", { details: item })
              }
              disabled={shipping}
            >
              <SingleProduct
                name={title}
                desc={desc}
                price={price}
                image={imageUrl}
                location={location}
                number={number}
                shipping={shipping}
              />
            </TouchableOpacity>
          );
        }}
      />
    </Block>
  );
};

const styles = StyleSheet.create({});

List.navigationOptions={
  headerShown:false
}


const mapStateToProps = (state, props) => {
  return {
    products: state.prod.products,
    loading:state.data.loading
  };
};

export default connect(mapStateToProps, { _GetProduct })(List);
