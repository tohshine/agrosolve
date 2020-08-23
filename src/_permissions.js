import React, { useState, useEffect, memo } from "react";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { NavigationEvents } from "react-navigation";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

import { Text } from "./utilities";

export const _ImagePermissions = () => {
  const [permissionStatus, setPermissionStatus] = useState({
    message: null,
    status: "declined",
  });

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        return setPermissionStatus({
          ...permissionStatus,
          message: (
            <Text color='red'>
              Sorry, we need camera roll permissions to make this work!
            </Text>
          ),
        });
      }
      setPermissionStatus({
        ...permissionStatus,
        message: null,
        status: "granted",
      });
    } else {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        return setPermissionStatus({
          ...permissionStatus,
          message: (
            <Text color='red'>
              Sorry, we need camera roll permissions to make this work!
            </Text>
          ),
        });
      }
      setPermissionStatus({
        ...permissionStatus,
        message: null,
        status: "granted",
      });
    }
  };
  return { getPermissionAsync, permissionStatus };
};

export const useLocation = (recording,callback) => {
  const [err, seterr] = useState(null);
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          return seterr("Location permission not granted");
        }
        if (err) {
          seterr(null);
        }

        //syncing location cords
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (error) {
        console.log(error.message);
        seterr(error.message);
      }
    };

    if (!err) {
      startWatching();
    }

     if (recording) {
      startWatching();
      console.log('get cooords started');
    } else {
      if (subscriber) {
        subscriber.remove();
        console.log('subscriber remved');
      } else {
        subscriber = null;
        console.log('subsciber set null');
      }
    }  
    //clean up
    return () => {
      if (subscriber) {
        subscriber.remove();
        console.log("cleanUp");
      }
    };
  }, [recording,callback]);

  return { err };
};

export default useLocation;
