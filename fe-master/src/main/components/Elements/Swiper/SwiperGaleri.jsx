import React, { useRef, useState, useEffect } from 'react';
import style from './galeri.module.css';

export default function Gallery(props) {
  const { images } = props;
  const galleryRef = useRef(null);

  const firstRowImages = [];
  const secondRowImages = [];
  images.forEach((image, index) => {
    if (index % 2 === 0) {
      firstRowImages.push(image);
    } else {
      secondRowImages.push(image);
    }
  });

  return (
    <div
      className={style.gallery}
      ref={galleryRef}
    >
      <div className={style.row}>
        {firstRowImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className={style.image} />
        ))}
      </div>
      <div className={style.row}>
        {secondRowImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className={style.image} />
        ))}
      </div>
    </div>
  );
}
