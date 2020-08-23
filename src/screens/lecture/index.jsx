import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button } from "../../utilities";
import { theme,icons } from "../../constants";
import LectureList from "../../components/singleLecture";
import HeaderNav from "../../components/headerNav";

const Lecture = ({ navigation }) => {
  return (
    <Block padding={[0, theme.sizes.base]}>
      <HeaderNav name={"Agric Extension"}>
        {icons.backArrow("dashboard")}
      </HeaderNav>
      <Text h1 bold>
        Farming Tips
      </Text>
      <LectureList />
    
    </Block>
  );
};

Lecture.navigationOptions = {
  title: "Agric Extension",
};

export default Lecture;

const styles = StyleSheet.create({});
