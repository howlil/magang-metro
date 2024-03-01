// LoginForm.jsx
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { login } from "../../../../api/Admin/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginData.username, loginData.password);
      console.log("Login berhasil:", data);
      localStorage.setItem('isLoggedIn', true);
      navigate("/");
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        placeholder="Masukan Username"
        htmlFor="username"
        type="text"
        name="username"
        value={loginData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        placeholder="Masukan Password"
        htmlFor="password"
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
      />
      <Button type="submit" label="Login" />
    </form>
  );
}
