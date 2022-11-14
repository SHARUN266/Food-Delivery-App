import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import { useState } from "react";
export default function Home({ pizzaList, admin }) {
  const [close,setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Spot</title>
        <meta name="description" content="best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      {admin ? <AddButton setClose={setClose} /> : ""}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = true;

  if (myCookie.token !== process.env.TOKEN) {
    admin = false;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin:admin
    },
  };
};
