"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiLike, BiShieldAlt2, BiSolidTruck, BiTime } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { AiTwotoneLock } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiShieldStarThin } from "react-icons/pi";
import { getProductsByCatergory } from "../_shared/services/products.service";
import { useState } from "react";

export default async function Home() {
  const [typeOfProducts, setTypeOfProducts] = useState("smartphones");
  const [filterProduct, setFilterProduct] = useState([]);

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
      <div className="transport-bg">
        <Flex className="transport-item">
          <Box>
            <Flex gap={"10px"}>
              <Box className="icon">
                <BiSolidTruck></BiSolidTruck>
              </Box>
              <Box className="heading">
                <Heading className="heading-title">Miễn phí vận chuyển</Heading>
                <p>Với tất cả các đơn hàng trên 50$</p>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Flex gap={"10px"}>
              <Box className="icon">
                <BiShieldAlt2></BiShieldAlt2>
              </Box>
              <Box className="heading">
                <Heading className="heading-title">Bảo hành 30 ngày</Heading>
                <p>Đảm bảo hoàn tiền trong 30 ngày</p>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Flex gap={"10px"}>
              <Box className="icon">
                <TbWorld></TbWorld>
              </Box>
              <Box className="heading">
                <Heading className="heading-title">Vận chuyển toàn cầu</Heading>
                <p>Hỗ trợ vận chuyển toàn cầu</p>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Flex gap={"10px"}>
              <Box className="icon">
                <AiTwotoneLock></AiTwotoneLock>
              </Box>
              <Box className="heading">
                <Heading className="heading-title">An toàn 100%</Heading>
                <p>Thanh toán an toàn 100%</p>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </div>
      <div className="home-Container">
        <Box textAlign={"center"}>
          <Heading>Tại sao chọn chúng tôi</Heading>
          <p>
            Chúng tôi luôn luôn tự hào vì đem lại cho các bạn những trải nghiệm
            mua sắm tuyệt vời, những sản phẩm chất lượng cùng với những ưu đãi
            to lớn. Tìm những thứ bạn cần chỉ trong vòng vài giây, chúng tôi
            không chỉ là một cửa hàng chúng tôi là câu chuyện của bạn, thật vinh
            hạnh khi được đồng hành cùng các bạn.
          </p>
          <Grid
            className="grid-template"
            templateColumns="repeat(4, 1fr)"
            gap={"60px"}
            textAlign={"center"}
            pt={"40px"}
          >
            <GridItem w="100%" bg="blue.500" className="girlItem">
              <Flex justify={"center"} className="iconGrid">
                <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
              </Flex>
              <Heading className="headingGrid">Giá tốt nhất</Heading>
              <p>Giá </p>
            </GridItem>
            <GridItem bg="blue.500" className="girlItem">
              <Flex justify={"center"} className="iconGrid">
                <PiShieldStarThin></PiShieldStarThin>
              </Flex>
              <Heading className="headingGrid">Dịch vụ tốt nhất</Heading>
              <p>
                Chúng tôi luôn luôn chú trọng đến trải nhiệm của khách hàng,
                chính vì vậy chúng tôi tự hào là người đưa ra quá trình hay trải
                nghiệm, dịch vụ mua sắm tuyệt vời và tốt nhất. Niềm vui của
                khách hàng là hạnh phúc của chúng tôi.
              </p>
            </GridItem>
            <GridItem bg="blue.500" className="girlItem">
              <Flex justify={"center"} className="iconGrid">
                <BiTime></BiTime>
              </Flex>
              <Heading className="headingGrid">Chuyển phát nhanh</Heading>
              <p>
                Là một đơn vị hàng đầu trong lĩnh vực Logictis với mạng lưới
                trên khắp các tỉnh thành cả nước. Các sản phẩm của chúng tôi
                được di chuyển 24/24h để giao đến khách hàng một cách nhanh
                chóng. Cùng với sự phát triển công nghệ khách hàng có thể xem
                trực tiếp vị trí của sản phẩm của mình.
              </p>
            </GridItem>
            <GridItem bg="blue.500" className="girlItem">
              <Flex justify={"center"} className="iconGrid">
                <BiLike></BiLike>
              </Flex>
              <Heading className="headingGrid">Phản hồi tích cực</Heading>
              <p>
                Những lời phản hồi tích cực của khách hàng là động lực to lớn
                dành cho chúng tôi.
              </p>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <button onClick={() => handelFilter("smartphones")}>
            SmartPhone
          </button>
          <button onClick={() => handelFilter("laptops")}>Laptop</button>
          <button onClick={() => handelFilter("motorcycle")}>Moto</button>
          <button onClick={() => handelFilter("lighting")}>Light</button>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
            }}
          >
            {filterProduct.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <article>
                  <div className="products_List-item">
                    <img
                      className="product_Item-image"
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ maxWidth: "100%" }}
                    />
                    <h3 className="product_Item-heading">{product.title}</h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Box>
      </div>
    </main>
  );
}
