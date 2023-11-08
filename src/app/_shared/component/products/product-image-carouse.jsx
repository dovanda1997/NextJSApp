"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, GridItem, border } from "@chakra-ui/react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { redirect } from "next/dist/server/api-utils";

export const ProductImageCarousel = ({ images }) => {
  const slicedImages = images.slice(0, 4);
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [activeItem, setActiveItem] = useState(slicedImages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slicedImages.length;
    setActiveItem(slicedImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex =
      (currentIndex - 1 + slicedImages.length) % slicedImages.length;
    setActiveItem(slicedImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Box>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"15px"}
        >
          <Box>
            <GrPrevious
              className="icon-Previous"
              cursor={"pointer"}
              onClick={handlePrevious}
            ></GrPrevious>
          </Box>
          <Box
            className="imgDetail"
            backgroundImage={activeItem}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
          ></Box>
          <Box>
            <GrNext
              className="icon-Next"
              cursor={"pointer"}
              onClick={handleNext}
            ></GrNext>
          </Box>
        </Flex>
      </Box>
      <div className="imgList">
        <Grid templateColumns="repeat(4, 1fr)" gap="30px">
          {slicedImages.map((item, index) => (
            <Button
              key={index}
              onClick={() => {
                setActiveItem(item);
                setCurrentIndex(index);
              }}
              style={{
                opacity: currentIndex === index ? 1 : 0.5,
                border: "none",
                background: "white",
              }}
            >
              <Box
                className="img-list-detail"
                backgroundImage={item}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
              ></Box>
              {/* <img
                  style={{ width: "200px", height: "100px" }}
                  src={item}
                  alt=""
                /> */}
            </Button>
          ))}
        </Grid>
      </div>
    </>
  );
};
