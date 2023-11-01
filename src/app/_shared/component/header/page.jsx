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

export default async function HeaderPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <div className="mobie-login">
            <BiUserCircle></BiUserCircle>
          </div>

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
          <Box className="nav-search">
            <Flex gap={"20px"}>
              <Box>
                <SearchForm />
              </Box>
              <Box>
                <Button p={"0 25px"} backgroundColor={"#4FAA6D"}>
                  <Link href={"/login"}>Đăng nhập</Link>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </div>
      <Box
        className="baner"
        backgroundImage={"Group 3.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <div className="content-baner">
        <Heading className="heading-baner">Tìm thứ bạn cần chỉ trong vài giây <br />
        Cuộc sống thật dễ dàng với ShopCart
        </Heading>
        <p className="heading-sale" >
          Siêu Sale 50% cuối tuần
        </p>
        <div className="btn-Baner">
          <button>Khám phá ngay</button>
        </div>
        </div>
      </Box>
    </>
  );
}
