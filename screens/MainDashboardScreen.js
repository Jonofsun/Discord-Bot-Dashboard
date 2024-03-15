import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BotPage from "../components/BotPage";
export default function MainDashboardScreen() {
  return (
    <View>
      <BotPage></BotPage>
      <Text>MainDashboardScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
