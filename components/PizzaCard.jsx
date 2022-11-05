import Image from 'next/image'
import React from 'react'
import style from "../styles/PizzaCard.module.css"
function PizzaCard() {
  return (
    <div className={style.container}>
       <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={style.title}>FIORI DI ZUCCA</h1>
      <span className={style.price}>$19.90</span>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default PizzaCard