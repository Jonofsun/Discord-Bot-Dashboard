import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
// take a serverid and return all of the text channels in that server: select one of those channels and send a mesage through the web app. Hard code the channel ID. create 2 test servers, hard code both, make 2 buttons for server1 and server2 submit the message and return to the dashbaord
export default function BotPage() {
  // hook to manage the state of the channelId and message inputs.
  const [channelId, setChannelId] = useState("");
  const [message, setMessage] = useState("");
  // loop through channels, find the text channels that are type 0, get id and name: that id need to be passed into the get function

  // const handleSubmit = () => {
  //   // sending POST request
  //   console.log("Channel ID:", channelId);
  //   console.log("Message:", message);
  // };

  const handleSubmit = async () => {
    // Function to handle the submission of the form
    try {
      // Send a HTTP POST request to the server with channelId and message
      const response = await fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          channelId: channelId, // 1218014373327540367
          message: message,
        }),
      });
      // Parse the response data
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
      // Log any errors that occur during the fetch operation
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
