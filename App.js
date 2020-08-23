import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./src/Navigation";
import { Block } from "./src/utilities";
//import { SafeAreaView } from "react-navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { setnavigator } from "./src/_navigationRef";

import { Provider } from "react-redux";
import { store } from "./src/store";
import { theme } from "./src/constants";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Block white>
          <Navigation ref={(navigator) => setnavigator(navigator)} />
        </Block>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
