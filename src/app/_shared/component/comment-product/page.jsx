import { Box, Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import { BiDislike, BiLike } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import InputRange from "../input-range/page";

export default function CommentProduct({ product }) {
  return (
    <Grid className="grid-comment" gap={18}>
      <GridItem className="comment-product-detail order-lap0 order-mob1">
        <Box className="comment-use">
          <Flex alignItems={"center"} gap={"15px"}>
            <Box className="comment-use-avatar"></Box>
            <Box className="comment-use-name">
              <b>
                {product.title} &nbsp;
                <span>
                  <code>{Math.round(product.rating)}</code>
                  hour
                </span>
              </b>
              <Flex gap={"10px"}>
                <BsStarFill color="yellow"></BsStarFill>
                <BsStarFill color="yellow"></BsStarFill>
                <BsStarFill color="yellow"></BsStarFill>
                <BsStarFill color="yellow"></BsStarFill>
              </Flex>
            </Box>
          </Flex>
          <Box className="conment-use-content">
            <i>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              obcaecati quod eligendi a ab provident distinctio debitis sunt
              quas.
            </i>
            <Flex alignItems={"center"} gap={"15px"} mb={"15px"}>
              <b>Reply</b>
              <Flex alignItems={"center"} color="gray" gap={"5px"}>
                <BiLike></BiLike>
                <i>10</i>
              </Flex>
              <BiDislike color="gray"></BiDislike>
            </Flex>
            <hr />
            <div className="textarea">
              <p>Comment</p>
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="..."
              ></textarea>
            </div>
          </Box>
        </Box>
      </GridItem>
      <GridItem className="comment-product-evaluate  order-lap1 order-mob0">
        <Flex>
          <Flex gap={"30px"} alignItems={"center"}>
            <BsStarFill fontSize={"32px"} color="yellow"></BsStarFill>
            <BsStarFill fontSize={"32px"} color="yellow"></BsStarFill>
            <BsStarFill fontSize={"32px"} color="yellow"></BsStarFill>
            <BsStarFill fontSize={"32px"} color="yellow"></BsStarFill>
          </Flex>
          <Spacer></Spacer>
          <Box>
            <b
              style={{
                fontSize: "32px",
              }}
            >
              {product.rating}
            </b>
          </Box>
        </Flex>
        <hr />
        <Box mt={"50px"}>
          <InputRange product={product} />
        </Box>
      </GridItem>
    </Grid>
  );
}
