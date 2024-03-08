import Input from "../../../../../admin/components/Elements/Input/Index";
import TextArea from "../../../../../admin/components/Elements/Input/TextArea";

import style from "./konsultasi.module.css"
const Konsultasi = () =>{
    return (
        <div>

            <div className={style.kontak}>
                <h1>Konsultasi Gratis</h1>
                <p>Temukan kedamaian pikiran Anda dalam keputusan hukum dengan bantuan kami.</p>
            </div>
            <div className={style.kontaks}>
                <div className={style.input}>
                    <Input label="Nama"
                    placeholder="Nama" type="text" nama="nama"></Input>
                    <Input label="Email"
                    placeholder="Email" type="text" nama="nama"></Input>
                    <Input label="No Telepon"
                    placeholder="No Telepon" type="text" nama="nama"></Input>
                </div>
                <div>
                    <TextArea label="Konsultasi"
                    htmlFor="body"
                    nama="body"
                    placeholder="Isi yang ingin kamu konsultasikan">
                    </TextArea>
                </div>
                <div className={style.kirim}>

                <button className={style.btnTertiary}>Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default Konsultasi