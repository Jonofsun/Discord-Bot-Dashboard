import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BotPage from "../components/BotPage";
import FindMemberComponent from "../components/FindMemberComponent";
import ChangeNicknameComponent from "../components/ChangeNicknameComponent";
export default function MainDashboardScreen() {
  return (
    <View>
      <Text>MainDashboardScreen</Text>
      <BotPage></BotPage>
      <FindMemberComponent></FindMemberComponent>
      {/* <ChangeNicknameComponent></ChangeNicknameComponent> */}
    </View>
  );
}

const styles = StyleSheet.create({});
