"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, GridItem, border } from "@chakra-ui/react";

export const ProductImageCarousel = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [activeItem, setActiveItem] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setActiveItem(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveItem(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Box overflow={"hidden"} className="embla" ref={emblaRef}>
        <Box>
          <Button onClick={handlePrevious}>Previous</Button>

          <img src={activeItem} alt={`Active item`} />
          <Button onClick={handleNext}>Next</Button>
        </Box>
        <Box>
        <Grid templateColumns='repeat(4, 1fr)' gap="30px">
       
          {images.map((item, index) => (         
            <Button
            
              key={index}
              onClick={() => {
                setActiveItem(item);
                setCurrentIndex(index);
              }}
              style={{ opacity: currentIndex === index ? 1 : 0.5, border:'none' }}
            >
              <img style={{width:'200px', height:'100px'}} src={item} alt="" />
            </Button>
          ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
