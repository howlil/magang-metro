import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/loginAdmin`;

export const authServic = async (username, password) => {
  try {
    const response = await axios.post(
      API_URL,
      { username, password },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
