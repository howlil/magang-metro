import s from "./input.module.css";
import Label from "./Label";
import { useState } from "react";

export default function CostumFile(props) {
  const { label, htmlFor, btn,setPdfFile } = props;
  const [konten, setKonten] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setKonten(file.name);
      setPdfFile(file);
    } else {
      setKonten("eror");
    }
  };
  const handleClick = () => {
    document.getElementById("pdf").click();
  };

  return (
    <div className={s.layout}>
      <Label label={label} htmlFor={htmlFor} />
      <div className={s.layoutPdf}>
        <input
          className={s.inputpdf}
          type="file"
          onChange={handleChange}
          accept=".pdf"
          name="pdf"
          id="pdf"
          required
        />
        <button onClick={handleClick} className={s.pdfbtn}>
          {btn}
        </button>
        <p className={`${konten ? s.labelPdf : s.text} ${s.textpdf}`}>
          {konten ? konten : "Masukan Portfolio"}
        </p>
      </div>
    </div>
  );
}
