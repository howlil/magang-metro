import s from "./input.module.css";
import Label from "./Label";
import { useEffect, useState } from "react";

export default function CostumFile(props) {
  const { label, htmlFor, btn, onSelectPdf, linkPdf } = props;
  const [konten, setKonten] = useState("");
  const [apiPdf, setApiPdf] = useState("");

  useEffect(() => {
    if (linkPdf) {
      setApiPdf(linkPdf);
    }
  }, [linkPdf]);

  // logic untuk submit dan ada perubahan
  const handleChange = (e) => {
    const file = e.target.files;
    if (file) {
      setKonten(file[0].name);
      onSelectPdf(file[0]);
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
      <div className={s.layoutPdfs}>
        <input
          className={s.inputpdf}
          type="file"
          onChange={handleChange}
          accept=".pdf"
          name="pdf"
          id="pdf"
          required
        />
        <button onClick={handleClick} className={s.pdfbtns}>
          {btn}
        </button>
        <span
          className={`${konten && apiPdf ? s.labelPdf : s.text} ${s.textpdf}`}
        >
          {konten ? konten : apiPdf ? apiPdf : "Masukan Portfolio"}
        </span>
      </div>
    </div>
  );
}
