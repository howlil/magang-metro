import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import tambahAdmin from "../../../../api/admin/tambahAdmin";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await tambahAdmin(name, password);
      console.log(result);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(`Fetch error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        htmlFor="username"
        placeholder="Masukan Username"
        type="text"
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputForm
        label="Password"
        htmlFor="password"
        placeholder="Masukan Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button type="submit" label="Login" />
    </form>
  );
}
