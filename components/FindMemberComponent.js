import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { React, useState } from "react";
// import axios from "axios";

export default function FindMemberComponent() {
  const [guildId, setGuildId] = useState("");
  const [memberNameOrID, setMemberNameOrID] = useState("");
  const [result, setResult] = useState("");

  const handleFindMember = async () => {
    try {
      const response = await fetch("http://localhost:3000/findmember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guildID: guildId, // 1218014373327540364
          memberNameOrID: memberNameOrID, // 89915004903522304
        }),
      });
      //   const text = await response.text();
      //   console.log("Raw response:", text);

      //   const data = JSON.parse(text);
      const data = await response.json();
      if (data.success) {
        console.log("Message sent successfully");
        // Optionally, clear the form fields
        setResult(`Found member: ${data.member}`);
      } else {
        setResult("Member not found.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResult("Error finding member.");
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
        placeholder="Member Name or ID"
        value={memberNameOrID}
        onChangeText={setMemberNameOrID}
      />
      <Button title="Find Member" onPress={handleFindMember} />
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
