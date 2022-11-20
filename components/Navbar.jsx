
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, PhoneIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];
var navTitles = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Admin",
    link: "/admin",
  },
  {
    name: "Login",
    link: "/admin/login",
  },

  {
    name: "Contact",
    link: "/",
  },
];

export default function Simple() {
  const quantity = useSelector((state) => state.cart.qty);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#006491" shadow={"lg"} color={"white"} px={4}>
        <Flex
          w="90%"
          m="auto"
          alignItems={"center"}
          h="100px"
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            colorScheme="transparent"
            variant="ghost"
            _hover={{ bg: "none" }}
            icon={
              isOpen ? (
                <CloseIcon fontSize={"xl"} />
              ) : (
                <HamburgerIcon fontSize={"4xl"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Box shadow={"md"} className={styles.callButton}>
                <Image src="/img/BlackWhitePizza.png" />
              </Box>
            </Box>

            <HStack
              as={"nav"}
              fontSize={"xl"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navTitles.map((link, i) => (
                <Link key={i} href={link.link}>
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link href={"/cart"} passHref>
              <div className={styles.item}>
                <div className={styles.cart}>
                  {
                    quantity<1?(
                    <ProductionQuantityLimitsOutlinedIcon fontSize={"large"}/>):(
                  <>
                  <ShoppingCartOutlinedIcon fontSize={"large"} />
                  <Box
                  borderRadius={"50%"}
                  position={"absolute"}
                  top={"-10px"}
                  right={"-10px"}
                  width={"25px"}
                  bg="white"
                  p="2px"
                  
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontWeight={"bold"}
                  color="#e31837"
                  >
                   
                    {quantity}
                  </Box>
                  </>
                    )
                  }
                </div>
              </div>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack textAlign={"center"} as={"nav"} spacing={4}>
              {navTitles.map((link, i) => (
                <Link
                  key={i + 1}
                  onClick={isOpen ? onClose : onOpen}
                  href={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
