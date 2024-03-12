import s from "./card.module.css";

import React from "react";

export default function Card(props) {
  const {image,title,data} = props
  return (
    <div className={s.layout}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h5>{title}</h5>
        <h2>{data}</h2>
      </div>
    </div>
  );
}
