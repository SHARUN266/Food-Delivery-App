import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Slider from "react-slick";
import Carousel from "./Carousel";
export default function Features() {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/banner--01.jpg",
    "/img/banner-02.jpg",
    "/img/banner--03.jpg",
   
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
     <>
     <Carousel/>
     </>
  );
}
