import React, { useState } from "react";
import s from "./tabel.module.css";
import TabelAction from "./TabelAction";
import AlertNotif from "../Alert/AlertNotif";

export default function Tabel({ headers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rows = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
  ];

  const onView = (id) => console.log("Viewing", id);
  const onEdit = (id) => console.log("Editing", id);
  const onDelete = (id) => {
    setAlert({
      show: true,
      message: `Deleting row with ID ${id}`,
      type: "error",
    });
  };

  return (
    <div className={s.layout}>
      {alert.show && (
        <AlertNotif
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ show: false, message: "", type: "" })}
        />
      )}
      <table className={s.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
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
        <AlertNotif
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            handleDelete();
            setIsModalOpen(false);
          }}
        />
      </table>
    </div>
  );
}
