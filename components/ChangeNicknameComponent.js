import { StyleSheet, Text, View, button, Alert } from "react-native";
import { React, UseState } from "react";

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
          guildId,
          memberId,
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
    <View>
      <TextInput
        placeholder="Guild ID"
        value={guildId}
        onChangeText={setGuildId}
      />
      <TextInput
        placeholder="Member ID"
        value={memberId}
        onChangeText={setMemberId}
      />
      <TextInput
        placeholder="New Nickname"
        value={newNickname}
        onChangeText={setNewNickname}
      />
      <Button title="Change Nickname" onPress={handleChangeNickname} />
      {result && <Text>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
