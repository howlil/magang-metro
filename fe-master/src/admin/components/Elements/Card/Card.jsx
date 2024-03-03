import s from "./card.module.css";
import jlhpost  from "/public/dashboard//jlhpost.svg"

import React from "react";

export default function Card() {
  return (
    <div className={s.layout}>
      <div>
        <img src={jlhpost} alt="" />
      </div>
      <div>
        <h5>jumlah postingan</h5>
        <h1>9</h1>
      </div>
    </div>
  );
}
