import React from "react";
import { StyleSheet, Dimensions} from "react-native";
import { Block, Text } from "../../utilities";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { HeaderNav } from "../../components/headerNav";

import { _getLogistics } from "../../actions/productAction";
import { theme,icons } from "../../constants";
import { connect } from "react-redux";
import {NavigationEvents} from 'react-navigation'

const { width, height } = Dimensions.get("window");

const viewLogistics = ({ navigation, logistics, _getLogistics }) => {

  const logisticId = navigation.getParam("id")

  const Track = logistics.find(logistic=> logistic._id ===logisticId)
  if (Track.locations.length===0) {
    return <Text caption bold color="red">Logistics track yet to start... Check Later</Text>
  }
  const getInitialPosition = Track.locations[0].coords
 


  return (
    <Block flex={false}>
      <NavigationEvents onWillFocus={_getLogistics}/>
      <Block flex={false} padding={[0, theme.sizes.base]}>
        <HeaderNav name='View path'>
          {icons.backArrow("dashboard")}
        </HeaderNav>
      </Block>
      <Block flex={false}>
        <MapView
          style={{ height, width }}
          provider={PROVIDER_GOOGLE}
          // customMapStyle={mapStyles}

          initialRegion={{
            ...getInitialPosition,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline coordinates={Track.locations.map(trk=>trk.coords)}/>
        </MapView>
      </Block>
    </Block>
  );
};

const mapStateToProps = (state) => {
  return {
    logistics: state.prod.logistics,
  };
};

export default connect(mapStateToProps, { _getLogistics })(viewLogistics);

const styles = StyleSheet.create({});
