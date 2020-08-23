import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button } from "../../utilities";
import { theme } from "../../constants";
import { _Payments } from "../../actions/productAction";
import { connect } from "react-redux";
import {HeaderNav} from '../../components/headerNav'
import { ResponseMessage } from "../../components/serverMsg";
import {icons} from '../../constants'
const Payment = ({ navigation, _Payments, serverMsg }) => {
  const singleDetails = navigation.getParam("details");
  const { message } = ResponseMessage(serverMsg);

  return (
    <Block padding={theme.sizes.base}>
      <HeaderNav>
     {icons.backArrow("productDetails")}
      </HeaderNav>

      <Text h1 bold>
        Payments
      </Text>

      {message()}

      {/* 
              paystack payment box open
              charge the buyer
              the payment ref id goes along with data to server 
              server create a logistic table
              
          
          */}

      <Text caption>
        assuming payment as been successfully completed,click the button to get
        redirected to logistics{" "}
      </Text>
      <Button gradient onPress={() => _Payments(singleDetails)}>
        <Text white center>
          start logistics tracking
        </Text>
      </Button>
    </Block>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    serverMsg: state.msg,
  };
};
export default connect(mapStateToProps, { _Payments })(Payment);
