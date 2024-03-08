import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Label from "../../Elements/Input/Label";
import CostumFile from "../../Elements/Input/CostumFile";
import tambahTim from "../../../../api/tim/tambahTim";
import detailTim from "../../../../api/tim/detailTim";
import tampilPosisi from "../../../../api/posisi/tampilPosisi";
import editTim from "../../../../api/tim/editTim";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Toast from "../../Elements/Alert/Toast";
import TextArea from "../../Elements/Input/TextArea";
import SingleImageTim from "../../Elements/Galeri/SingleImageTim";

export default function FormAnggota() {
  const [initialImageUrl, setInitialImageUrl] = useState(""); // menampung API img
  const [getLinkPdf, setLinkPdf] = useState(""); // menampung API pdf
  const [nama, setNama] = useState("");
  const [bidang, setBidang] = useState("");
  const [posisi, setPosisi] = useState([]);
  const [ambilPosisi, setAmbilPosisi] = useState("");
  const [idPosisi, setIdPosisi] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();
  const { id_team } = useParams();
  const isEditing = !!id_team;

  useEffect(() => {
    if (isEditing) {
      detailTim(id_team).then((data) => {
        if (data.success) {
          setNama(data.data.nama);
          setBidang(data.data.spesialis);
          setAmbilPosisi(data.data.dataPosisi.nama_posisi);
          setInstagram(data.data.instagram);
          setInitialImageUrl(data.data.foto_tim);
          setLinkPdf(data.data.portofolio);
          setLinkedin(data.data.linkedln);
          setDeskripsi(data.data.deskripsi);
        }
      });
    }
  }, [id_team, isEditing]);

  useEffect(() => {
    tampilPosisi()
      .then((data) => {
        setPosisi(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response;
    try {
      if (isEditing) {
        response = await editTim(
          file,
          pdfFile,
          nama,
          bidang,
          idPosisi,
          deskripsi,
          instagram,
          linkedin,
          id_team
        );
      } else {
        response = await tambahTim(
          file,
          pdfFile,
          nama,
          bidang,
          idPosisi,
          deskripsi,
          instagram,
          linkedin
        );
      }

      if (response.success) {
        setNotif(response.message);
        navigate("/kelolaTim");
      } else {
        setNotif(response.message);
      }
    } catch (error) {
      setNotif(response.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={s.layout}>
      {loading ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <form onSubmit={handleSubmit}>
          <Label label="Foto Tim" />
          <div className={s.img}>
            <SingleImageTim
              onFileSelect={(selectedFile) => setFile(selectedFile)}
              initialImageUrl={initialImageUrl}
            />
          </div>

          <InputForm
            label="Nama"
            placeholder={isEditing ? `${nama}` : "Masukan Nama"}
            htmlFor="nama"
            type="text"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <InputForm
            nama="spesialisasi"
            placeholder={isEditing ? `${bidang}` : "Masukan Spesialisasi"}
            label="Spesialisasi"
            htmlFor="spesialisasi"
            type="text"
            value={bidang}
            onChange={(e) => setBidang(e.target.value)}
          />

          <SelectIndex
            label="Posisi"
            placeholder={
              isEditing
                ? posisi
                  ? `${ambilPosisi}`
                  : "Plih Posisi"
                : posisi
                ? "Plih Posisi"
                : "Tambahkan Posisi dulu"
            }
            htmlFor="posisi"
            value={idPosisi}
            onChange={(e) => {
              const selectPosisi = posisi.find(
                (x) => x.id_posisi.toString() === e.target.value
              );
              if (selectPosisi) {
                setIdPosisi(selectPosisi.id_posisi);
                setAmbilPosisi(selectPosisi.nama_kategori);
              }
            }}
            options={
              posisi
                ? posisi.map((p) => ({
                    value: p.id_posisi.toString(),
                    label: p.nama_posisi,
                  }))
                : [
                    {
                      value: "",
                      placeholder: "Tambahkan Posisi dulu",
                      isDisabled: true,
                    },
                  ]
            }
          />
          <TextArea
            label="Deskripsi Tim"
            htmlFor="deskirpsi"
            name="deskripsi"
            placeholder={
              isEditing ? `${deskripsi}` : "Masukan Deskripsi disini"
            }
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />

          <InputForm
            nama="instagram"
            placeholder={
              isEditing
                ? `${instagram}`
                : " Masukan URL profile instagram anggota"
            }
            label="Instagram"
            htmlFor="instagram"
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          <InputForm
            nama="linkedin"
            placeholder={
              isEditing ? `${linkedin}` : " Masukan URL linkedin anggota"
            }
            label="LinkedIn"
            htmlFor="linkedin"
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <CostumFile
            label="Upload Portofolio (.Pdf)"
            htmlFor="porto"
            btn="Browse"
            onSelectPdf={(pickPdf)=>setPdfFile(pickPdf)}
            linkPdf={getLinkPdf}
          />

          <div className={s.btnly}>
            <Button
              type="submit"
              label={isEditing ? "Simpan" : "Tambah"}
              styleBtn="btnform"
            />
          </div>
        </form>
      )}
      {notif.message && (
        <Toast
          message={notif.message}
          type={notif.type}
          onClose={() => setNotif({ message: "", type: "" })}
        />
      )}
    </div>
  );
}
