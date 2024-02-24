// Tabel.jsx
import React from "react";
import s from "./tabel.module.css";
import Icon from "./Icon";
import showIcon from "/public/show.svg"; // Pastikan path ke ikon ini benar
import editIcon from "/public/edit.svg"; // Pastikan path ke ikon ini benar
import deleteIcon from "/public/hapus.svg"; // Pastikan path ke ikon ini benar

export default function Tabel(props) {
  const { colom1, colom2 } = props;
  return (
    <div className={s.layout}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>{colom1}</th>
            <th>{colom2}</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
