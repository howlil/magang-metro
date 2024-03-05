import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Label from "../../Elements/Input/Label";
import CostumFile from "../../Elements/Input/CostumFile";
import SingleImage from "../../Elements/Galeri/SingleImage";
import tambahTim from "../../../../api/tim/tambahTim";
import detailTim from "../../../../api/tim/detailTim";
import tampilPosisi from "../../../../api/posisi/tampilPosisi";
import editTim from "../../../../api/tim/editTim";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FormAnggota() {
  const [initialImageUrl, setInitialImageUrl] = useState("");
  const [nama, setNama] = useState("");
  const [bidang, setBidang] = useState("");
  const [posisi, setPosisi] = useState([]);
  const [ambilPosisi, setAmbilPosisi] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();
  const { id_team } = useParams();
  const isEditing = !!id_team;

  useEffect(() => {
    if (isEditing) {
      detailTim(id_team).then((data) => {
        if (data.success) {
          setNama(data.nama);
          setBidang(data.spesialis);
          setAmbilPosisi(data.dataPosisi.nama_posisi);
          setInstagram(data.instagram);
          setInitialImageUrl(data.foto_tim);
          setPdfFile(data.file_porto)
          setLinkedin(data.linkedin);
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
    let response;
    if (isEditing) {
      response = await editTim(
        nama,
        bidang,
        ambilPosisi,
        instagram,
        linkedin,
        file,
        pdfFile,
        id_team
      );
    } else {
      response = await tambahTim();
    }
    console.log(response);
    // navigate("/kelolaTim");
  };
  return (
    <div className={s.layout}>
      <form onSubmit={handleSubmit}>
        <Label label="Foto Tim" />
        <div className={s.img}>
          <SingleImage
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
              ? `${ambilPosisi}`
              : "Tambahkan Posisi dulu"
          }
          htmlFor="posisi"
          value={ambilPosisi}
          onChange={(e) => setAmbilPosisi(e.target.value)}
          options={
            posisi
              ? posisi.map((p) => ({
                  value: p.id_posisi,
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
          setPdfFile={setPdfFile}
        />

        <div className={s.btnly}>
          <Button
            type="submit"
            label={isEditing ? "Simpan" : "Tambah"}
            styleBtn="btnform"
          />
        </div>
      </form>
    </div>
  );
}
