"use client";
import {
  addToCart,
  removeToCart,
  updateToCar,
} from "@/app/_shared/redux/cartSlice";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default async function Cart() {
  const dispatch = useDispatch();
  const [showEmptyCartAlert, setShowEmptyCartAlert] = useState(false);
  const router = useRouter();

  //Sử dụng useSelector để lấy dữ liệu từ Redux store, trong trường hợp này là thông tin giỏ hàng
  const cartState = useSelector((state) => state.cart);

  // Tính tổng giá trị các sản phẩm trong giỏ hàng
  let totalPrice = 0;
  for (let i = 0; i < cartState.items.length; i++) {
    const item = cartState.items[i];
    totalPrice += item.product.price * item.quantity;
  }
  // Tăng
  const handleIncrementQuantity = (productId, quantity) => {
    const newQuantity = quantity + 1;
    dispatch(updateToCar({ productId, quantity: newQuantity }));
    // document.querySelector(`.id_${productId}`).classList.remove("disabled");
  };
  // Gỉam
  const handleDecrementQuantity = (productId, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      dispatch(updateToCar({ productId, quantity: newQuantity }));
    } else {
      //   document.querySelector(`.id_${productId}`).classList.add("disabled");
    }
  };
  const handleRemoveFromCart = (productId) => {
    console.log("Removing product ID:", productId);
    dispatch(removeToCart({ productId }));
  };
  //Trong trường hợp này, cartState.items chứa danh sách các mục trong giỏ hàng
  const items = cartState.items;
  console.log(items);

  const handleCheckout = () => {
    if (cartState.items.length === 0) {
      // Nếu giỏ hàng trống, hiển thị thông báo
      setShowEmptyCartAlert(true);
    } else {
      // Nếu giỏ hàng không trống, chuyển hướng đến trang Checkout
      router.push("/checkout");
    }
  };
  const handleHome = () => {
    setShowEmptyCartAlert(false);
    router.push("/");
  };

  return (
    <section className="container-Cart">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/cart">Giỏ hàng </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className="table-cart">
        <Heading color={"#fea700"} mb={"15px"}>
          YourBag
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th w={"50%"} color={"#f06a52"}>
                  Name
                </Th>
                <Th color={"#f06a52"}>Price</Th>
                <Th color={"#f06a52"}>Quantity</Th>
                <Th color={"#f06a52"}>Total</Th>
                <Th color={"#f06a52"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => {
                return (
                  <Tr key={item.product.id}>
                    <Td>
                      <Flex alignItems={"center"} gap={"20px"}>
                        <Box>
                          <img
                            className="img-cart"
                            src={item.product.thumbnail}
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={"24px"} mb={"15px"}>
                            {item.product.title}
                          </Heading>
                          <p>
                            <b>Thương hiệu: </b>
                            <i style={{ color: "gray" }}>
                              {item.product.brand}
                            </i>
                          </p>
                          <p>
                            <b>Loại mặt hàng: </b>
                            <i style={{ color: "gray" }}>
                              {item.product.category}
                            </i>
                          </p>
                        </Box>
                      </Flex>
                    </Td>
                    <Td>${item.product.price}</Td>
                    <Td>
                      <Button
                        onClick={() =>
                          handleDecrementQuantity(
                            item.product.id,
                            item.quantity
                          )
                        }
                      >
                        -
                      </Button>
                      <span
                        style={{
                          padding: "10px",
                        }}
                      >
                        {item.quantity}
                      </span>
                      <Button
                        onClick={() =>
                          handleIncrementQuantity(
                            item.product.id,
                            item.quantity
                          )
                        }
                      >
                        +
                      </Button>
                    </Td>
                    <Td>
                      <b>${item.product.price * item.quantity}</b>
                    </Td>
                    <Td>
                      <AiFillDelete
                        fontSize={"24px"}
                        className="delete-cart"
                        onClick={() => handleRemoveFromCart(item.product.id)}
                      />
                    </Td>
                  </Tr>
                );
              })}
              {showEmptyCartAlert && (
                <div className="alert-item">
                  <p
                    style={{
                      color: "#f06a52",
                    }}
                  >
                    Giỏ hàng của bạn đang trống!
                  </p>
                  <p className="pd-30">Mời bạn đến trang sản phẩm để mua sắm</p>
                  <Button className="btn" onClick={handleHome}>
                    Mua sắm
                  </Button>
                </div>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="check-out">
        <Box>
          <Flex justifyContent={"end"}>
            <Box mt={"50px"}>
              <Box>
                <Heading textAlign={"center"} pb={"30px"}>
                  ${totalPrice}
                </Heading>
              </Box>

              <Button onClick={handleCheckout} colorScheme="teal" size="lg">
                CheckOut
              </Button>
            </Box>
          </Flex>
        </Box>
      </div>
    </section>
  );
}
