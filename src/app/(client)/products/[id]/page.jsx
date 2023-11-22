"use client";
import CommentProduct from "@/app/_shared/component/comment-product/page";
import { ProductImageCarousel } from "@/app/_shared/component/products/product-image-carouse";
import { addToCart } from "@/app/_shared/redux/cartSlice";
import { getProductById } from "@/app/_shared/services/products.service";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { BiDislike, BiLike } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa6";
import { PiStarThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default async function ProductDetail({ params: { id } }) {
  const dispatch = useDispatch();
  const product = await getProductById({ id });

  const addItem = (product) => {
    dispatch(addToCart({ product: product, quantity: 1 }));
  };

  return (
    <main className="home-Container">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Sản phẩm</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="">Chi tiết sản phẩm</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className="detai-Products">
        <Grid templateColumns={"50% 1fr"} gap={18}>
          <GridItem>
            <ProductImageCarousel images={product.images} />
          </GridItem>
          <GridItem>
            <Box>
              <Flex className="logo-product" alignItems={"center"} gap={"10px"}>
                <Box
                  className="box-logo"
                  backgroundImage={product.thumbnail}
                  backgroundPosition={"center"}
                  backgroundSize={"cover"}
                ></Box>
                <div className="heading-box">{product.title}</div>
              </Flex>
              <Box className="pad-boot-lap pad-boot-mob ">
                <Heading className="pad-boot-lap">{product.title}</Heading>
                <Flex className="icon-product" p={"15px 0px"}>
                  <BsStarFill color="yellow"></BsStarFill>
                  <BsStarFill color="yellow"></BsStarFill>
                  <BsStarFill color="yellow"></BsStarFill>
                  <BsStarFill color="yellow"></BsStarFill>
                </Flex>
              </Box>
              <Box>
                <p>
                  {" "}
                  <b>Description: </b>
                  {product.description}
                </p>
              </Box>
              <Box className="price-product p-30">
                <h1>${product.price}</h1>
              </Box>
              <Box className="pb-30">
                <b style={{ paddingBottom: "10px" }}>Color</b>
                <Flex gap={"30px"}>
                  <Box className="box-color" bg={"red.100"}></Box>
                  <Box className="box-color" bg={"yellow.100"}></Box>
                  <Box className="box-color" bg={"blue.100"}></Box>
                </Flex>
              </Box>
              <Box className="pad-boot-lap">
                <p>
                  <b>Rating: </b>
                  {product.rating}
                </p>
              </Box>
              <Box className="pad-boot-lap">
                <p>
                  <b>Brand: </b>
                  {product.brand}
                </p>
              </Box>
              <Box className="pad-boot-lap">
                <p>
                  <b>Category: </b>
                  {product.category}
                </p>
              </Box>
              <Box className="pad-boot-lap">
                <Button
                  type="button"
                  onClick={() => addItem(product)}
                  className="btn-Add"
                >
                  Add to Card
                </Button>
                {/* <ToastContainer 
                  
                /> */}
              </Box>
              <Flex alignItems={"center"} gap={"15px"}>
                <FaTruckMoving></FaTruckMoving>
                <b> Free shipping for orders of $900</b>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </div>
      <div className="comment-product">
        <CommentProduct product={product} />
      </div>
    </main>
  );
}
