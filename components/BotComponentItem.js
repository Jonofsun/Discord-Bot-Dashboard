import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
// in this component I was working on a way to pass props and renders a pressable item with the name displayed in the center.
// When pressed, it should have will triggered the onPress function passed as a prop, which should navigate to the corresponding screen in the navigation setup.
// but I expreneced an error with the navigator and im running out of time to mess with it :p
export default function BotComponentItem({ id, name, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4, // for Android shadow
    shadowColor: "black", // for iOS shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
