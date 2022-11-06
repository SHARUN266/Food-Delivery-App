import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
export default function Product({ pizza }) {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras,setExtra]=useState([]);
  const [qty,setQty]=useState(1)
  const dispatch=useDispatch();
  const changePrice = (number) => {
    setPrice(price+number);
  };
  const handleSize = (sizeIndex) => {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };
  const handleChange = (e, option) => {
    const check = e.target.checked;
   
    if (check) {
      changePrice(option.price);
      setExtra(prev=>[...prev,option])
    } else {
      changePrice(-option.price);
      setExtra(extras.filter(extra=>extra._id!==option._id))
    }
  };
  
  function handleClick(){
         dispatch(
          addProduct({...pizza,extras,price,qty})
         )
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.image} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input type="number" onChange={(e)=>setQty(e.target.value)} defaultValue={1} className={styles.quantity} />
          <button className={styles.button} onClick={handleClick} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
