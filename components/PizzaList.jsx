import style from "../styles/PizzaList.module.css";
import React, { useState } from "react";
import PizzaCard from "./PizzaCard";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import fact from "../PizzaFact.db.json";
export default function PizzaList({ pizzaList }) {
  const [facts, setFacts] = useState(fact[Math.floor(Math.random()*(11-0)+0)]);
 

  return (
    <Box p="20px 10px" display={"flex"} flexDirection={"column"} alignItems={'center'} >
             <Heading  >You Know?</Heading>
            <Heading fontSize={"xl"} p="1rem">{facts.title}</Heading>
            <Box fontSize={"20px"} mt="1%" color={"#444"} w="70%" textAlign={"center"}>{facts.fact}</Box>
          
       

      <SimpleGrid columns={["2", "3", "3"]}>
        {pizzaList.map((elem) => (
          <PizzaCard key={elem.id} pizza={elem} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
