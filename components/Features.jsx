import Image from "next/image";
import React, { useState } from "react";
import style from "../styles/Featured.module.css";
export default function Features() {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={style.container}>
      <div
        className={style.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>

      <div className={style.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        <div className={style.imgContainer}>
          {images.map((image, index) => (
            <Image key={index} src={image} layout="fill" />
          ))}
        </div>
      </div>
      <div
        className={style.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
