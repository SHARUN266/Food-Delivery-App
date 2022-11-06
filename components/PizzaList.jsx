import style from "../styles/PizzaList.module.css";
import React from "react";
import PizzaCard from "./PizzaCard";

export default function PizzaList({pizzaList}) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cumque
        cum esse. Dolore illum beatae accusantium fuga minima, veritatis commodi
        sequi nostrum ipsam? Saepe accusamus nesciunt quas id praesentium
        dolore?
      </p>
      <div className={style.wrapper}>
       {pizzaList.map((elem)=>(
        <PizzaCard key={elem.id} pizza={elem} />
         
       ))}
      </div>
    </div>
  );
}
