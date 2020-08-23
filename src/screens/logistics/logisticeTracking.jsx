import "../../_mockLocation";
import React, { useEffect, useCallback } from "react";
import { StyleSheet, BackHandler, ToastAndroid } from "react-native";
import { ResponseMessage } from "../../components/serverMsg";
import MapView from "../../components/Map";
import { HeaderNav } from "../../components/headerNav";
import { FontAwesome } from "@expo/vector-icons";
import { Block, Button, Text } from "../../utilities";
import { theme } from "../../constants";

import { withNavigationFocus } from "react-navigation";
import { useLocation } from "../../_permissions";
import { connect } from "react-redux";
import {
  addLocation,
  startRecording,
  stopRecording,
  cleanRecordLocation,
  uploadLocationPath,
} from "../../actions/locationAction";

const mapTracking = ({
  navigation,
  addLocation,
  startRecording,
  stopRecording,
  recording,
  cleanRecordLocation,
  uploadLocationPath,
  messages,
  location,
}) => {
  const logisticId = navigation.getParam("id");

  const { message } = ResponseMessage(messages);

  const callback = useCallback(
    (location) => addLocation(recording, location)[recording]
  ); 

  const { err } = useLocation(recording,callback);

  const toastMessage = () => {
    return ToastAndroid.show(
      "Feature disable while recording!",
      ToastAndroid.SHORT
    );
  };

  useEffect(() => {
    const backAction = () => {
      if (recording) {
        toastMessage();
      } else if (!recording) {
        navigation.navigate("logistics");
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
    };
  }, [recording]);

  const uploadPath = () => {
    //uploading to server here
    uploadLocationPath({ locations: location, logisticId });
    cleanRecordLocation();
  };

  return (
    <>
      <Block row flex={false} space='between' padding={[0, theme.sizes.body]}>
        <Block flex={false} center middle>
          <HeaderNav name={"Mapview"}>
            <FontAwesome
              name='long-arrow-left'
              size={24}
              onPress={
                recording
                  ? () => toastMessage()
                  : () => {
                      navigation.navigate("listLogistics");
                      cleanRecordLocation();
                    }
              }
            />
          </HeaderNav>
          {message()}
        </Block>
        {recording ? (
          <Button color={theme.colors.accent} onPress={stopRecording}>
            <Text white style={{ paddingHorizontal: 10 }}>
              stop
            </Text>
          </Button>
        ) : (
          !err && (
            <Button color={theme.colors.accent} onPress={startRecording}>
              <Text color='red' style={{ paddingHorizontal: 10 }}>
                start recording
              </Text>
            </Button>
          )
        )}
        {!recording && location.length ? (
          <Button color={theme.colors.lightblue} onPress={uploadPath}>
            <Text color='red' style={{ paddingHorizontal: 10 }}>
              upload path
            </Text>
          </Button>
        ) : null}
      </Block>
      {err ? (
        <Text color='red' center middle caption bold>
          {err}
        </Text>
      ) : (
        <MapView />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { recording, location } = state.tracker;

  return {
    recording,
    location,
    messages: state.msg,
  };
};

const tracker = connect(mapStateToProps, {
  addLocation,
  stopRecording,
  startRecording,
  cleanRecordLocation,
  uploadLocationPath,
})(mapTracking);

export default withNavigationFocus(tracker);

const styles = StyleSheet.create({});
