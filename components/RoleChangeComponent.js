import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function RoleChangeComponent() {
  const [guildId, setGuildId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [result, setResult] = useState("");

  const handleRoleChange = async () => {
    try {
      const response = await fetch("http://localhost:3000/change-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guildId, // 1218014373327540364
          memberId, // 304658459742306314
          roleId, // 1220135006131720282, 1220135322172784742, 1219131122437460088
        }),
      });

      const data = await response.json();
      if (data.success) {
        setResult("Role changed successfully.");
      } else {
        setResult("Failed to change role.");
      }
    } catch (error) {
      console.error("Error changing role:", error);
      setResult("Error changing role.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Guild ID"
        value={guildId}
        onChangeText={setGuildId}
      />
      <TextInput
        style={styles.input}
        placeholder="Member ID"
        value={memberId}
        onChangeText={setMemberId}
      />
      <TextInput
        style={styles.input}
        placeholder="Role ID"
        value={roleId}
        onChangeText={setRoleId}
      />
      <Button title="Change Role" onPress={handleRoleChange} />
      {result && <Text>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
});
