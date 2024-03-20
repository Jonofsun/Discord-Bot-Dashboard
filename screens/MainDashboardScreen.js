import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const botComponents = [
  { id: "1", name: "Bot Page", route: "BotPage" },
  { id: "2", name: "Find Member", route: "FindMember" },
  { id: "3", name: "Change Nickname", route: "ChangeNickname" },
  { id: "4", name: "Role Change", route: "RoleChange" },
];

export default function MainDashboardScreen() {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate(item.route)}
      >
        <View style={[styles.textContainer]}>
          <Text style={styles.buttonText}>{item.name}</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View>
      <FlatList
        data={botComponents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#e9e3dc",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
    color: "#98002e",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#002d56",
  },
});
