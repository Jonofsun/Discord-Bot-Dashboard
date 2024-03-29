import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import React, { useState } from "react";

export default function ChangeNicknameComponent() {
  const [guildId, setGuildId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [result, setResult] = useState("");

  const handleChangeNickname = async () => {
    try {
      const response = await fetch("http://localhost:3000/change-nickname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guildId, // 1218014373327540364
          memberId, // 304658459742306314
          newNickname,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setResult(`Nickname changed successfully to ${newNickname}`);
      } else {
        setResult("Failed to change nickname");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to change nickname");
      console.error(error);
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
        placeholder="New Nickname"
        value={newNickname}
        onChangeText={setNewNickname}
      />
      <Button title="Change Nickname" onPress={handleChangeNickname} />
      {result && <Text>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
});
