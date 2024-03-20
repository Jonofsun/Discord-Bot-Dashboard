import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import BotComponentItem from "../components/BotComponentItem";
// component was redundent after i attempted to adapt the tile style layout showcased in the navigation tutorial for week 9
const botComponents = [
  { id: "1", name: "Bot Page", route: "BotPage" },
  { id: "2", name: "Find Member", route: "FindMember" },
  { id: "3", name: "Change Nickname", route: "ChangeNickname" },
];
// The onPress event in the renderItem function uses the navigation prop to navigate to the respective bot component screen when an item is pressed.
// The route prop is not used in this example, but it's available if needed for passing additional data between screens.
export default function BotComponentsScreen({}) {
  const navigation = useNavigation();
  function renderBotComponentItem(data) {
    const botComponent = data.item;
    const botComponentProps = {
      id: botComponent.id,
      name: botComponent.name,
      onPress: () => navigation.navigate(botComponent.route),
    };
    return <BotComponentItem {...botComponentProps} />;
  }
  return (
    <FlatList
      data={botComponents}
      keyExtractor={(item) => item.id}
      renderItem={renderBotComponentItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
