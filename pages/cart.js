import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
// We are adding paypal
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

//***************** //
export default function Cart() {
  const [open,setOpen]=useState(false);
  const [cash,setCash]=useState(false)
  // This values are the props in the UI
  const amount = "2";
  const currency = "USD";
  const style = {"layout":"vertical"};
  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cart)
  // Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                      // Your code here after capture the order
                  });
              }}
          />
      </>
  );
}
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <table className={styles.table}>
        <tr className={styles.trTitle}>
          <th>Product</th>
          <th>Name</th>
          <th>Extras</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {
          cart.products.map((prod)=>(

            <tr className={styles.tr}>
          <td>
            <div className={styles.imgContainer}>
              <Image
                src={prod.image}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </td>
          <td>
            <span className={styles.name}>
              {prod.title}
            </span>
          </td>
          <td>
            <span className={styles.extras}>
              {
                prod.extras.map((extra)=>(
                  <span key={extra._id}>{extra.text}</span>
                ))
              }
            </span>
          </td>
          <td>
            <span className={styles.price}>${prod.price}</span>
          </td>
          <td>
            <span className={styles.quantity}>{prod.qty}</span>
          </td>
          <td>
            <span className={styles.total}>${prod.price*prod.qty}</span>
          </td>
        </tr>
        
          ))}
      </table>
    </div>
    <div className={styles.right}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount:</b>$0.00
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Total:</b>${cart.total}
        </div>
        {
          open?(
            <div  className={styles.paymentMethods} >
              <button className={styles.payButton} onClick={()=>setCash(true)}>CASH ON DELIVERY</button>

            <PayPalScriptProvider
            options={{
              "client-id": "AdITCtIyw7RvDps0wsluh_BCH9pNDdXcfhwBzRa54BuFI_E9P-C1C0GNWz69p_nCCfyAD1zcsBEQc2ZV",
              components: "buttons",
                currency: "USD",
                "disable-funding":"credit,card,p24"
            }}
            >
    <ButtonWrapper
                currency={currency}
                showSpinner={false}
                />
  </PayPalScriptProvider>
                </div>
          ):(

            <button className={styles.button} onClick={()=>setOpen(true)} >CHECKOUT NOW!</button>
          )
        }
     
      </div>
    </div>
  </div>
  );
}
