import axios from "axios";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Order.module.css";

export default function Order({order}) {
  const status = order.status;
  const statuClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
   
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>

              <th>Customer Name</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.name}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>
                 {order.address}
                </span>
              </td>

              <td>
                <span className={styles.total}>{order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statuClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="Paid" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statuClass(0)}>
            <Image src="/img/bake.png" width={30} height={30} alt="Paid" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statuClass(1)}>
            <Image src="/img/bike.png" width={30} height={30} alt="Paid" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statuClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="Paid" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.89
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${order.total}
          </div>
          <button disabled className={styles.button}>
            PAID!
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({params})=>{
  const res=await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props:{
      order:res.data
    }
  }
}
