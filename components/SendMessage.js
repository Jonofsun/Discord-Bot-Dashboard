import axios from "axios";
// my journey started with axios for its use in HTTP put post get.. ect I was unsuccessfull in figuring out how to get it to work with my server so i tried to hard code it.
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
