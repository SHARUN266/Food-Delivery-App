import Image from 'next/image'
import React from 'react'
import style from "../styles/PizzaCard.module.css"
import Link from "next/link"
function PizzaCard({pizza}) {
  return (
    <div className={style.container}>
      <Link href={`/Product/${pizza._id}`} passHref>
       <Image src={pizza.image} alt="" width="200" height="200" />
      </Link>
      <h1 className={style.title}>
        {pizza.title}
      </h1>
      <span className={style.price}>${pizza.prices[0]}</span>
      <p className={style.desc}>
       {pizza.description}
      </p>
    </div>
  )
}

export default PizzaCard