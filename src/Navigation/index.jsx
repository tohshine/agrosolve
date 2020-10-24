import React from "react";
import { icons } from "../constants";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import Splashscreen from "../screens/SplashScreen";
import Signin from "../screens/Auth/Signin";
import Signup from "../screens/Auth/Signup";
import ForgotEmailPassword from "../screens/Auth/ForgotEmailPassword";
import Dashboard from "../screens/Dashboard";
import Account from "../screens/Account";
import indexProduct from "../screens/product/index";
import CreateProduct from "../screens/product/CreateProduct";
import ProductDetails from "../screens/product/ProductDetails";
import Payment from "../screens/product/Payment";
import OrderedProduct from "../screens/product/OrderedProduct";
import listLogistics from "../screens/logistics/listLogistics";
import viewLogistics from "../screens/logistics/viewLogistics";
import logisticeTracking from "../screens/logistics/logisticeTracking";
import LectureList from "../screens/lecture/index";
import LecutureDetails from "../screens/lecture/LectureDetails";
import BlackScreen from "../screens/_blankScreen";

const productFlow = createStackNavigator({
  products: indexProduct,
  productDetails: ProductDetails,
  payment: Payment,
});

productFlow.navigationOptions = {
  title: "product",
  tabBarIcon: icons.Tree,
};

const createNavigation = createSwitchNavigator({
  blackscreen: BlackScreen,
  splashscreen: Splashscreen,
  authFlow: createStackNavigator({
    signin: Signin,
    signup: Signup,
    reset: ForgotEmailPassword,
  }),
  mainFlow: createStackNavigator(
    {
      dashboard: Dashboard,
      account: Account,
      lecture: createStackNavigator({
        list: LectureList,
        details: LecutureDetails,
      }),
      product: createBottomTabNavigator({
        productFlow,
        order: OrderedProduct,
        create: CreateProduct,
      }),
      logistics: createStackNavigator({
        listLogistics,
        logisticeTracking,
        viewLogistics,
      }),
    },
    //?setting all header to none hosted inside stack
    {
      headerMode: false,
    }
  ),
});

export default createAppContainer(createNavigation);
