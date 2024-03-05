import AdminLayout from "../../components/Layout/AdminLayout";
import Card from "../../components/Elements/Card/Card";
import s from "./dashboar.module.css";
import Title from "../../../admin/components/Elements/Title/Title";
import jlhfoto from "/public//dashboard//jlhfoto.svg"
import jlhposisi from "/public//dashboard//jlhposisi.svg"
import jlhpost from "/public//dashboard//jlhpost.svg"
import jlhtim from "/public//dashboard//jlhtim.svg"
import getPositingan from "../../../api/dashboard/getPostingan"
import getGaleri from "../../../api/dashboard/getGaleri"
import getTim from "../../../api/dashboard/getTim"
import getPosisi from "../../../api/dashboard/getPosisi"
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [postingan,setPostingan] = useState("")
  const [galeri,setGaleri] = useState("")
  const [tim,setTim] = useState("")
  const [posisi,setPosisi] = useState("")
  
  useEffect(()=>{
    const fetchData = async () =>{
      await getPositingan().then((data)=>{
        setPostingan(data.total)
      })
      await getGaleri().then((data)=>{
        setGaleri(data.total)
      })
      await getTim().then((data)=>{
        setTim(data.total)
      })
      await getPosisi().then((data)=>{
        setPosisi(data.total)
      })
    }
    fetchData()
  },[])

  return (
    <>
      <AdminLayout>
        <Title title="Dashboar Admin" />
        <div className={s.layout}>
          <Card 
          image = {jlhpost}
          title = "Jumlah Postingan"
          data= {postingan? postingan : "Belum ada data"}    
          />
          <Card 
          image = {jlhfoto}
          title = "Jumlah Galeri"
          data= {galeri? galeri : "Belum ada data"}    
          />
          <Card 
          image = {jlhposisi}
          title = "Jumlah Posisi"
          data= {posisi? posisi : "Belum ada data"}    
          />
          <Card 
          image = {jlhtim}
          title = "Jumlah Postingan"
          data= {tim? tim : "Belum ada data"}    
          />
          
        </div>
      </AdminLayout>
    </>
  );
}
