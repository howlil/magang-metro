import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "/api/loginAdmin",
      new URLSearchParams({ username, password })
    );
    const { token } = response.data;
    localStorage.setItem("authToken", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return response.data;
  } catch (error) {
    throw error;
  }
};
