import React from 'react';
import s from "./button.module.css";
import plus from "/public/plus.svg";
import { useLocation } from "react-router-dom";

export default function Button(props) {
  const location = useLocation();
  const path = location.pathname;
  const { label, onClick, styleBtn, type } = props;

  const pathArr = [
    "/kelolaPostingan",
    "/kategori",
    "/kelolaPosisi",
    "/kelolaTim",
  ];

  const isMobile = window.matchMedia("(max-width: 678px)").matches;
  const showIcon = pathArr.includes(path);

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`${s.btn} ${showIcon ? s.btnIcon : s[styleBtn]}`}
      >
        {showIcon && <img src={plus} alt="plus" />}
        {isMobile && pathArr.includes(path) ? null : label}
      </button>
    </div>
  );
}
