import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function BotPage() {
  // hook to manage the state of the channelId and message inputs.
  const [channelId, setChannelId] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = () => {
  //   // sending POST request
  //   console.log("Channel ID:", channelId);
  //   console.log("Message:", message);
  // };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://discord.com/channels/1218014373327540364/1218014373327540367/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            channelId: channelId,
            message: message,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        console.log("Message sent successfully");
        // Optionally, clear the form fields
        setChannelId("");
        setMessage("");
      } else {
        console.error("Failed to send message:", data.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Discord Bot Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Channel ID"
        value={channelId}
        onChangeText={setChannelId}
      />
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={handleSubmit} />
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
