import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import axios from "axios";
import { useState } from "react";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = `${import.meta.env.VITE_API_URL}/loginAdmin`;

    try {
      const response = await axios.post(
        API_URL,
        new URLSearchParams(loginData)
      );
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        placeholder="Masukan Username"
        htmlFor="username"
        type="text"
        nama="username"
        value={loginData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        placeholder="Masukan Password"
        htmlFor="password"
        type="password"
        nama="password"
        value={loginData.password}
        onChange={handleChange}
      />
      <Button type="submit" label="Login" />
    </form>
  );
}
