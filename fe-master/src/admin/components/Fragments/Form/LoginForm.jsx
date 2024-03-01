// LoginForm.jsx
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import { login } from "../../../../api/admin/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData.username, loginData.password)
      .then((data) => {
        console.log("Login berhasil:", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login gagal:", error);
        setError("Login gagal. Silakan cek username dan password Anda.");
      });
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
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button type="submit" label="Login" />
    </form>
  );
}
