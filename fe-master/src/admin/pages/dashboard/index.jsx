import AdminLayout from "../../components/Layout/AdminLayout";
import Card from "../../components/Elements/Card/Card";
import s from "./dashboar.module.css";
import Title from "../../../admin/components/Elements/Title/Title";

export default function Dashboard() {
  return (
    <>
      <AdminLayout>
        <Title title="Dashboar Admin" />
        <div className={s.layout}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </AdminLayout>
    </>
  );
}
