"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { appendErrors, useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
const contactForm = z.object({
  info: z.object({
    email: z.string().trim().email("Email không hợp lệ"),

    address: z.string().min(5, { message: "Vui lòng nhập địa chỉ" }),
    tel: z.string().min(11, { message: "Số điện thoại phải 11 ký tự" }),
  }),
});

export default async function CheckOut() {
  const [input, setInput] = useState("");
  const [showEmptyCartThank, setShowEmptyCartThank] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  const dispatch = useDispatch();

  //Sử dụng useSelector để lấy dữ liệu từ Redux store, trong trường hợp này là thông tin giỏ hàng
  const cartState = useSelector((state) => state.cart);

  // Tính tổng giá trị các sản phẩm trong giỏ hàng
  let totalPrice = 0;
  for (let i = 0; i < cartState.items.length; i++) {
    const item = cartState.items[i];
    totalPrice += item.product.price * item.quantity;
  }

  //Trong trường hợp này, cartState.items chứa danh sách các mục trong giỏ hàng
  const items = cartState.items;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactForm),
    defaultValues: {
      info: {
        email: "",
        tel: "",
        address: "",
      },
    },
  });
  const onSubmit = (data) => {
    if (data.info.tel && data.info.email) {
      setShowEmptyCartThank(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };

  return (
    <>
      <Grid className="container-checkout grid-checkout">
        <GridItem>
          <p>Thông tin khách hàng</p>
          <Heading>Shipping Infomation</Heading>
          <form className="form-checkout">
            <Grid templateColumns="repeat(2, 1fr)" gap={"20px"}>
              <GridItem>
                <FormLabel>First Name</FormLabel>
                <Input w="100%" type="text" htmlSize={"100%"} />
              </GridItem>

              <GridItem>
                <FormLabel>Last Name</FormLabel>
                <Input w="100%" type="text" htmlSize={"100px"} />
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={"20px"}>
              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Tel</FormLabel>
                  <Input type="tel" {...register("info.tel")} />
                  <Box className="color-alert">
                    <ErrorMessage errors={errors} name="info.tel" />
                  </Box>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select
                    {...register("info.selectOption", {
                      required: "Vui lòng chọn một lựa chọn",
                    })}
                  >
                    <option value="">-- Chọn một --</option>
                    <option value="Ha Noi">Ha Noi</option>
                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                    <option value="Nghe An">Nghe An</option>
                  </Select>
                  {errors.info?.selectOption && (
                    <p>{errors.info?.selectOption.message}</p>
                  )}
                </FormControl>
              </GridItem>
            </Grid>
            <Stack>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" {...register("info.email")} />
                <Box className="color-alert">
                  <ErrorMessage errors={errors} name="info.email" />
                </Box>
              </FormControl>
            </Stack>
            <Stack>
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text" {...register("info.address")} />
                <Box className="color-alert">
                  <ErrorMessage errors={errors} name="info.address" />
                </Box>
              </FormControl>
            </Stack>
            <HStack>
              <FormControl>
                <FormLabel>Noi dung</FormLabel>
                <Textarea />
              </FormControl>
            </HStack>
            <Flex justifyContent={"center"} pt={"30px"}>
              <Button className="btn" onClick={handleSubmit(onSubmit)}>
                PayNow
              </Button>
            </Flex>
          </form>
        </GridItem>
        <GridItem h={"500px"} className="box-oder-summary">
          <TableContainer>
            <p>Danh mục sản phẩm</p>
            <Heading>Order Summary</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th w={"50%"} color={"#f06a52"}>
                    Name
                  </Th>
                  <Th color={"#f06a52"}>Price</Th>
                  <Th color={"#f06a52"}>Quantity</Th>
                  <Th color={"#f06a52"}>Total</Th>
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
                              className="img-checkout"
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
                        <span
                          style={{
                            padding: "10px",
                          }}
                        >
                          {item.quantity}
                        </span>
                      </Td>
                      <Td>
                        <b>${item.product.price * item.quantity}</b>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex p={"0 20px"}>
            <Box>
              <p>Total</p>
            </Box>
            <Spacer />
            <Box>
              <Heading>${totalPrice}</Heading>
            </Box>
          </Flex>
        </GridItem>
        {showEmptyCartThank && (
          <div className="alert-thank">
            <Heading textAlign={"center"}>
              Cảm ơn bạn đã mua sắm cùng chung tôi
            </Heading>
            <hr
              style={{
                padding: "20px",
              }}
            />
            <p>Thật vinh hạnh khi có thể đồng hành cùng bạn vào dịp khác</p>
          </div>
        )}
      </Grid>
    </>
    // <section className="container-Checkout">
    //   <div className="table-cart">

    //   </div>
    //   <div className="check-out">
    //     <Box>
    //       <Flex justifyContent={"end"}>
    //         <Box mt={"50px"}>
    //           <Box>
    //             <Heading textAlign={"center"} pb={"30px"}>
    //               ${totalPrice}
    //             </Heading>
    //           </Box>
    //           <Link href={"/checkout"}>
    //             <Button colorScheme="teal" size="lg">
    //               CheckOut
    //             </Button>
    //           </Link>
    //         </Box>
    //       </Flex>
    //     </Box>
    //   </div>
    // </section>
  );
}
