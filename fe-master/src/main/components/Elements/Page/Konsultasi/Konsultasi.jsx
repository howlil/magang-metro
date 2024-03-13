import React, { useState } from "react";
import Input from "../../../../../admin/components/Elements/Input/Index";
import TextArea from "../../../../../admin/components/Elements/Input/TextArea";
import style from "./konsultasi.module.css";
import konsultasiGratis from "../../../../../api/pengguna/konsultasiGratis";
import { Row, Col } from "react-bootstrap";


const Konsultasi = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    no_telp: "",
    deskripsi: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await konsultasiGratis(formData);
      console.log(response);
      setSubmissionStatus("Permintaan terkirim");
      setFormData({
        nama: "",
        email: "",
        no_telp: "",
        deskripsi: "",
      });
    } catch (error) {
      console.error("Error saat mengirim konsultasi:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={style.kontak}>
        <h1>Konsultasi Gratis</h1>
        <p>
          Temukan kedamaian pikiran Anda dalam keputusan hukum dengan bantuan
          kami.
        </p>
        {submissionStatus && (
            <p className={style.berhasil}>{submissionStatus}</p>
        )}
      </div>
      <div className={style.kontaks}>
        <form onSubmit={handleSubmit}>
          <div>
            <Row className={style.row}>
                <Col>
                <Input
                    label="Nama"
                    placeholder="Nama"
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                />
                </Col>
                <Col>
                    <Input
                    label="Email"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />                   
                </Col>
                <Col>
                    <Input
                    label="No Telp"
                    placeholder="No Telepon"
                    type="text"
                    name="no_telp"
                    value={formData.no_telp}
                    onChange={handleChange}
                    />
                </Col>
            </Row>
          </div>
          <div>
            <TextArea
            className={style.inputBox}
              label="Konsultasi"
              htmlFor="body"
              name="deskripsi"
              placeholder="Isi yang ingin kamu konsultasikan"
              value={formData.deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className={style.kirim}>
            <button className={style.btnTertiary} type="submit" disabled={isLoading}>
              {isLoading ? 'Mengirim...' : 'Kirim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Konsultasi;
