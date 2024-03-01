import axios from "axios";


export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "/api/loginAdmin",
      new URLSearchParams({ username, password })
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};