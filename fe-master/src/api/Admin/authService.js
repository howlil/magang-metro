import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:5000/loginAdmin", {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("authToken", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    console.log(response.status);

    return response.data;
  } catch (error) {
    throw error;
  }
};
