"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiLike, BiShieldAlt2, BiSolidTruck, BiTime } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { AiTwotoneLock } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiShieldStarThin } from "react-icons/pi";
import { getProductsByCatergory } from "../_shared/services/products.service";
import { useEffect, useState } from "react";
import SaleUp from "../_shared/component/sale-upto/page";
import SubTitle from "../_shared/component/sub-title/page";
import Feedback from "../_shared/component/feedback/page";

export default async function Home() {
  const [typeOfProducts, setTypeOfProducts] = useState("smartphones");
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    // Khi component được tạo, gọi hàm handelFilter với typeOfProducts hiện tại
    handelFilter(typeOfProducts);
  }, []); // [] là dependency array, nếu bạn muốn gọi lại useEffect khi có sự thay đổi trong typeOfProducts, thì thêm typeOfProducts vào đây.

  const handelFilter = async (param) => {
    console.log(param);
    setTypeOfProducts(param);

    const { products } = await getProductsByCatergory(param);
    if (!products) {
      console.log("Không tìm thấy sản phẩm nào");
      return;
    }
    setFilterProduct(products);
  };

  return (
    <main>
      <div>
        <Flex justifyContent={"center"} className="gap-50-10 margin-50-10">
          <Box className="relative">
            <img src="Group 4.jpg" alt="" />
            <div className="text-wap  absolute positionR">
              <p>
                Giao Hàng <br /> Nhanh Chóng & <br /> Thuận Tiện
              </p>
              <Link href={"/products"}>
                <Button className="btn">Mua Ngay</Button>
              </Link>
            </div>
          </Box>
          <Box className="relative">
            <img src="Group 5.jpg" alt="" />
            <div className="text-wap positionL absolute">
              <p>
                Đặt Hàng <br /> Trên Ứng dụng <br /> CartShop
              </p>
              <Button className="btn">Đến Ứng Dụng</Button>
            </div>
          </Box>
        </Flex>
      </div>
      <SubTitle />
      <SaleUp />

      <div>
        <Box
          className="backGroud"
          backgroundImage={"Group 6.jpg"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
        >
          <Box className="content-backGroud">
            <Heading className="content-backGroud-title">5% refund for orders of 200</Heading>
            <p className="title-phu">Shop comfortably without worrying about price</p>
          </Box>
        </Box>
      </div>
      <Box>
        <Flex
          justifyContent={"center"}
          m={"50px"}
          className="category-gap-lap category-gap-mob"
        >
          <Button
            className="btn-category"
            variant="outline"
            onClick={() => handelFilter("smartphones")}
          >
            SmartPhones
          </Button>
          <Button
            className="btn-category"
            variant="outline"
            onClick={() => handelFilter("laptops")}
          >
            Laptops
          </Button>
          <Button
            className="btn-category"
            variant="outline"
            onClick={() => handelFilter("fragrances")}
          >
            Fragrances
          </Button>
          <Button
            className="btn-category"
            variant="outline"
            onClick={() => handelFilter("home-decoration")}
          >
            Decoration
          </Button>
          <Button
            className="btn-category"
            variant="outline"
            onClick={() => handelFilter("motorcycle")}
          >
            Moto
          </Button>
          <Button
            className="btn-category"
            variant="outline"
            onClick={() => handelFilter("lighting")}
          >
            Light
          </Button>
        </Flex>
        <div className="grid-category-item">
          {filterProduct.map((product) => (
            <Link
              className="items-product-home"
              key={product.id}
              href={`/products/${product.id}`}
            >
              <article>
                <div className="products_List-item">
                  <img
                    className="product_Item-image"
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ maxWidth: "100%" }}
                  />
                  <Flex
                    p={"30px"}
                    className="category-pad-lap category-pad-mob"
                  >
                    <Box>
                      <h3
                        style={{
                          fontFamily: "cursive",
                        }}
                      >
                        {product.title}
                      </h3>
                    </Box>
                    <Spacer />
                    <Box>
                      <h3
                        style={{
                          fontFamily: "cursive",
                          color: "#fea700",
                        }}
                      >
                        ${product.price}
                      </h3>
                    </Box>
                  </Flex>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <Flex justifyContent={"center"} m={"50px"}>
          <Link href={"/products"}>
            <Button className="btn">More Products</Button>
          </Link>
        </Flex>
      </Box>

      <Feedback />
    </main>
  );
}
