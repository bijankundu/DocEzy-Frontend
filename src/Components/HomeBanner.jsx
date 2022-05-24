import React, { useRef } from "react";
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container, Image } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import carousel1 from "./../assets/carousel1.webp";
import carousel2 from "./../assets/carousel2.webp";
import carousel3 from "./../assets/carousel3.webp";
import carousel4 from "./../assets/carousel4.webp";
import carousel5 from "./../assets/carousel5.webp";
import carousel6 from "./../assets/carousel6.webp";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image: carousel1,
    },
    {
      image: carousel2,
    },
    {
      image: carousel3,
    },
    {
      image: carousel4,
    },
    {
      image: carousel5,
    },
    {
      image: carousel6,
    },
  ];

  return (
    <Box position={"relative"} height={window.innerHeight - 200} width={"full"} overflow={"hidden"} mb={8}>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Image src={card.image} objectFit={"cover"} />
        ))}
      </Slider>
    </Box>
  );
}
