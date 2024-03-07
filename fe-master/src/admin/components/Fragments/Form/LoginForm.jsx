import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import { useEffect, useState } from "react";
import loginAdmin from "../../../../api/admin/loginAdmin";
import { useNavigate } from "react-router-dom";
import Toast from "../../Elements/Alert/Toast";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try {
      result = await loginAdmin(name, password);
      console.log(result);
      if (result.success) {
        setMsg(result.message);
        navigate("/");
      } else {
        setMsg(result.message);
      }
    } catch (error) {
      setMsg(result.message);
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
      <Button type="submit" label="Login" />
      {msg && <Toast message={msg} onClose={() => setMsg("")} />}
    </form>
  );
}
