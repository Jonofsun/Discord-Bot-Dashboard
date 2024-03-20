import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        &copy; 2024 Jonathan Reed. RTC CSI_248. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: "#98002e",
    borderTopWidth: 1,
    borderTopColor: "#b9ab97",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#fff",
  },
});
