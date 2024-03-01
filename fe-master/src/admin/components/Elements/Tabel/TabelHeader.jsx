import React, { useState } from "react";
import s from "./tabel.module.css";
import TabelAction from "./TabelAction";
import AlertNotif from "../Alert/AlertNotif";

export default function Tabel({ headers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rows = [{ id: 1, name: "John Doe", age: 30 }];

  const onView = (id) => console.log("Viewing", id);
  const onEdit = (id) => console.log("Editing", id);
  const onDelete = (id) => {
    setAlert({
      show: true,
      message: `Deleting row with ID ${id}`,
      type: "error",
    });
    setIsModalOpen(true);
  };

  return (
    <div className={s.layout}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.nomor}>No</th>
            {headers.map((header, index) => (
              <th className={s.title} key={index}>
                {header}
              </th>
            ))}
            <th className={s.aksi}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className={s.no}>{rowIndex + 1}</td>
              {headers.map((header, headerIndex) => {
                const key = header.toLowerCase().replace(/ /g, "");
                return <td key={headerIndex}>{row[key]}</td>;
              })}
              <td>
                <TabelAction
                  onView={() => onView(row.id)}
                  onEdit={() => onEdit(row.id)}
                  onDelete={() => setIsModalOpen(true)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AlertNotif
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          // handleDelete();
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
