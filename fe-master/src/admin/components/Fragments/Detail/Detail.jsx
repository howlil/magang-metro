import s from "./detail.module.css";
export default function Detail() {
  return (
    <div className={s.layout}>
      <h1>Foto Postingan</h1>
      <img className={s.img} src="/public/logo.svg" alt="img" />
      <div className={s.konten}>
        <Label
          title="Judul"
          deskripsi="Pelanggaran Hukum Internsional Negara Arab"
        />
        <Label
          title="asasasas"
          deskripsi="Pelanggaran Hukum Internsional Negara Arab"
        />
        <Label
          title="asassas"
          deskripsi="Pelanggaran Hukum Internsional Negara Arab"
        />
        <Label title="Judul" />
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          fuga, ipsam ab molestiae eveniet possimus laboriosam velit quae
          inventore beatae corporis perspiciatis quibusdam, ipsum excepturi
          praesentium, debitis at voluptate aut!
        </p>
      </div>
    </div>
  );
}

const Label = (props) => {
  const { title, deskripsi } = props;
  return (
    <div className={s.group}>
      <span className={s.title}>{title}</span>
      <span>:</span>
      <span>{deskripsi}</span>
    </div>
  );
};
