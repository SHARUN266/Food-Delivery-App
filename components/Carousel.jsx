import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

// Settings for the slider
const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://images.unsplash.com/photo-1567349077939-101215abd8ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "/img/banner--01.jpg",
    "/img/banner--03.jpg",
    "/img/banner-02.jpg",
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
 
      m="auto"
      mt="2%"
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        position="absolute"
        textColor={"black"}
        colorScheme="transparent"
        borderRadius="full"
        transform={'translate(0%, -50%)'}
        _hover={{
          bg: "rgba(0, 0, 0, 0.381);",
        }}
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ArrowBackIosNewOutlinedIcon fontSize={"large"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="transparent"
        borderRadius="full"
        textColor={"black"}
        position="absolute"
        right={side}
        top={top}
        _hover={{
          bg: "rgba(0, 0, 0, 0.381);",
        }}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <ArrowForwardIosOutlinedIcon fontSize="large" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"2xl"}
        
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="90%"
        
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
