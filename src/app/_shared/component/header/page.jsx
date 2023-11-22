"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import SearchForm from "../search-form/search-form";
import { headers } from "../../../../../next.config";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { totalQuantity } from "../../redux/cartSlice";

export default async function HeaderPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => totalQuantity(state.cart));

  return (
    <>
      <div className="fixed">
        <Flex justify={"space-between"} align={"center"} p={"0px 30px"}>
          <div className="res-mobie">
            <FaBars onClick={onOpen} />
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
              {/* <DrawerOverlay /> */}
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  <Box>
                    <Image
                      style={{ height: "60px" }}
                      src="logo.png"
                      alt="Dan Abramov"
                    />
                    <p className="title-logo">ShopCart</p>
                  </Box>
                </DrawerHeader>
                <DrawerBody>
                  <div className="res-nav-mobie">
                    <Flex direction={"column"} mt={"20px"} gap={"25px"}>
                      <Link onClick={onClose} href={"/"}>
                        Trang chủ
                      </Link>
                      <Link onClick={onClose} href={"/about"}>
                        Về chúng tôi
                      </Link>
                      <Link onClick={onClose} href={"/products"}>
                        Sản phẩm
                      </Link>
                      <Link onClick={onClose} href={"/contact"}>
                        Liên hệ
                      </Link>
                    </Flex>
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="mobie-logo">
            <Image
              style={{ height: "50px" }}
              src="logo.png"
              alt="Dan Abramov"
            />
          </div>

          <Flex className="mobie-login" gap={"20px"} alignItems={"center"}>
            <Box>
              <BiUserCircle></BiUserCircle>
            </Box>
            <Link className="icon-shoping" href={"/cart"}>
              <RiShoppingCart2Fill
                fontSize={"24px"}
                p={"5px"}
                color="#f06a52"
              ></RiShoppingCart2Fill>
              <p className="totalItem">{totalItems}</p>
            </Link>
          </Flex>

          <Box className="nav-logo">
            <Link href={"/"}>
              <img src="logo.png" alt="" />
              <p>ShopCart</p>
            </Link>
          </Box>

          <Box className="nav">
            <Link className="nav-Category" href={"/"}>
              Trang chủ
            </Link>
            <Link className="nav-Category" href={"/about"}>
              Về chúng tôi
            </Link>
            <Link className="nav-Category" href={"/products"}>
              Sản phẩm
            </Link>
            <Link className="nav-Category" href={"/contact"}>
              Liên hệ
            </Link>
          </Box>
          <Flex gap={"20px"} alignItems={"center"} className="mobie-cart-hiden">
            <Link className="icon-shoping" href={"/cart"}>
              <RiShoppingCart2Fill
                fontSize={"24px"}
                p={"5px"}
                color="#f06a52"
              ></RiShoppingCart2Fill>
              <p className="totalItem">{totalItems}</p>
            </Link>
            <Box>
              <Button p={"0 25px"} className="btn">
                <Link href={"/login"}>Đăng nhập</Link>
              </Button>
            </Box>
          </Flex>
        </Flex>
      </div>
      <Box
        className="baner"
        backgroundImage={"Group 3.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <div className="content-baner">
          <div className="btn-Baner">
            <Link href={"/products"}>
              <Button className="btn">Khám Phá Ngay</Button>
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
}
