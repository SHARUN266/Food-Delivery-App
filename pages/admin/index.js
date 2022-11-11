import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";


import styles from "../../styles/Admin.module.css";
export default function Admin({ orders, pizzas }) {
  const [pizzaList, setPizzaList] = useState(pizzas);
  const [orderList, setOrderList] = useState(orders);
  const status=["preparing","on the way","delivered"]
  async function handleDelete(id) {
   
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      console.log(res.data);
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
      alert("Delete succefully");
    } catch (e) {
      console.log(e.message);
    }
  }
  async function handleStatus(id){
   
      
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
  
    try{
        const res = await axios.put(`http://localhost:3000/api/orders/${id}`,{status:currentStatus+1});
        console.log(res,"me id kysahu");
        setOrderList([
            res.data,
            ...orderList.filter((order) => order._id !== id),
          ]);

    }catch(e){
        console.log(e.message);
    }

  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((products) => (
            <tbody key={products._id}>
              <tr className={styles.trTitle}>
                <td>
                  {" "}
                  <Image
                    src={products.image}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{products._id.slice(0, 5)}....</td>
                <td>{products.title}</td>
                <td>{products.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(products._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Cutomer </th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((elem) => (
            <tbody key={elem._id}>
              <tr className={styles.trTitle}>
                <td>{elem._id.slice(0, 5)}...</td>
                <td>{elem.customer}</td>
                <td>${elem.total}</td>
                 <td>{elem.method==0?(<span>Cash</span>):(<span>Paid</span>)}</td> 
                 <td>{status[elem.status]}</td>
                <td>
                  <button className={styles.button} onClick={()=>handleStatus(elem._id)}>Next Stage</button>
                </td>
              </tr>
            </tbody>
          ))} 
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  const Orders = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: Orders.data,
      pizzas: productRes.data,
    },
  };
};
