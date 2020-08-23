import React from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { Block, Text, Badge, Button } from "../utilities";
import { mapStyles, theme } from "../constants";
import rgba from "hex-to-rgba";

import { connect } from "react-redux";
import { Entypo } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window");

const Map = ({ currentPosition }) => {
  if (!currentPosition) {
   return <ActivityIndicator size='large' color='blue' />;
  }
  const renderMap = () => {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        // customMapStyle={mapStyles}
        style={{ height, width }}
        initialRegion={{
          ...currentPosition.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          rotation={-15}
          anchor={{ x: 0.5, y: 0.5 }}
          coordinate={{
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
          }}
        >
          <Badge color={rgba(theme.colors.primary, "0.2")} size={57}>
            <TouchableOpacity activeOpacity={0.8}>
              <Badge color={rgba(theme.colors.primary, "0.2")} size={37}>
              <Entypo name="dot-single" size={24} color="red" />
              </Badge>
            </TouchableOpacity>
          </Badge>
        </Marker>
       
      </MapView>
    );
  };

  return <Block flex={false}>{renderMap()}</Block>;
};
const mapStateToProps = (state) => {
  return {
    currentPosition: state.tracker.currentLocation,
  };
};

export default connect(mapStateToProps)(Map);

const styles = StyleSheet.create({});
