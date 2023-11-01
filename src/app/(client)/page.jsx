import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiShieldAlt2, BiSolidTruck } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { AiTwotoneLock } from "react-icons/ai";``

import {
  getAllProducts,
  getAllProductsByCatergores,
  getProducts,
  getProductsByCatergory,
  getProductsByCatergorySmartPhone,
} from "../_shared/services/products.service";
import Head from "next/head";

export default async function Home() {
  // const { products } = await getProducts();
  // console.log(products)
  // const { products } = await getProductsByCatergory({laptops});
  // console.log(products.slice(0, 2));

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
        <Box textAlign={'center'}>
          <Heading>Tại sao chọn chúng tôi</Heading>
          <p>Chúng tôi luôn luôn tự hào vì đem lại cho các bạn những trải nghiệm mua sắm tuyệt vời, những sản phẩm chất lượng
            cùng với những ưu đãi to lớn. Tìm những thứ bạn cần chỉ trong vòng vài giây, chúng tôi không chỉ là một cửa hàng
            chúng tôi là câu chuyện của bạn, thật vinh hạnh khi được đồng hành cùng các bạn.
          </p>
          <Grid>
            
          </Grid>
        </Box>
      </div>
    </main>
  );
}
