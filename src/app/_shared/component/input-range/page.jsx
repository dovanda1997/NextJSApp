import { Box, Flex } from "@chakra-ui/react";

export default function InputRange({ product }) {
  return (
    <>
      <Flex gap={"15px"} alignItems={"center"}>
        <Box>
          <p>5</p>
        </Box>
        <Box className="range">
          <div className="range-number" style={{ width: "80%" }}></div>
        </Box>
        <Box>
          <b>{product.stock}</b>
        </Box>
      </Flex>
      <Flex gap={"15px"} alignItems={"center"}>
        <Box>
          <p>4</p>
        </Box>
        <Box className="range">
          <div className="range-number" style={{ width: "60%" }}></div>
        </Box>
        <Box>
          <b>56</b>
        </Box>
      </Flex>
      <Flex gap={"15px"} alignItems={"center"}>
        <Box>
          <p>3</p>
        </Box>
        <Box className="range">
          <div className="range-number" style={{ width: "30%" }}></div>
        </Box>
        <Box>
          <b>10</b>
        </Box>
      </Flex>
      <Flex gap={"15px"} alignItems={"center"}>
        <Box>
          <p>2</p>
        </Box>
        <Box className="range">
          <div className="range-number" style={{ width: "10%" }}></div>
        </Box>
        <Box>
          <b>3</b>
        </Box>
      </Flex>
      <Flex gap={"15px"} alignItems={"center"}>
        <Box>
          <p>1</p>
        </Box>
        <Box className="range">
          <div className="range-number" style={{ width: "10%" }}></div>
        </Box>
        <Box>
          <b>3</b>
        </Box>
      </Flex>
    </>
  );
}
