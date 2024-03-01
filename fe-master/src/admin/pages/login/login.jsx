// Asumsi bahwa LoginForm adalah komponen yang sudah lengkap dan siap digunakan.
import LoginForm from "../../components/Fragments/Form/LoginForm";
import login from "/public/login.svg";
import logo from "/public/logo.svg";
import s from "./login.module.css";

export default function Login() {
  return (
    <div className={s.layout}>
      <div className={s.background}>
        <img src={login} alt="Login" />
      </div>
      <div className={s.form}>
        <div className={s.head}>
        <img src={logo} alt="" />
        <div>
        <h1>Selamat Datang</h1>
        <p>Silahkan masukan username dan password Admin</p>
        </div>
        </div>
  
        <LoginForm />
      </div>
    </div>
  );
}
