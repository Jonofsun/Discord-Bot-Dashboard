import axios from "axios";

const SendMessage = async (channelId, message) => {
  try {
    const response = await axios.post("http://localhost:3000/send-message", {
      channelId,
      message,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
