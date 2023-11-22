import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { AiTwotoneLock } from "react-icons/ai";
import { BiShieldAlt2, BiSolidTruck } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

export default async function SubTitle() {
  return (
    <div className="transport-bg">
      <Flex className="transport-item">
        <Box>
          <Flex gap={"10px"}>
            <Box>
              <BiSolidTruck className="icon"></BiSolidTruck>
            </Box>
            <Box className="heading">
              <Heading className="heading-title">Miễn phí vận chuyển</Heading>
              <p className="mobie-hiden">Với tất cả các đơn hàng trên 50$</p>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Flex gap={"10px"}>
            <Box>
              <BiShieldAlt2 className="icon"></BiShieldAlt2>
            </Box>
            <Box className="heading">
              <Heading className="heading-title">Bảo hành 30 ngày</Heading>
              <p className="mobie-hiden">Đảm bảo hoàn tiền trong 30 ngày</p>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Flex gap={"10px"}>
            <Box>
              <TbWorld className="icon"></TbWorld>
            </Box>
            <Box className="heading">
              <Heading className="heading-title">Vận chuyển toàn cầu</Heading>
              <p className="mobie-hiden">Hỗ trợ vận chuyển toàn cầu</p>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Flex gap={"10px"}>
            <Box>
              <AiTwotoneLock className="icon"></AiTwotoneLock>
            </Box>
            <Box className="heading">
              <Heading className="heading-title">An toàn 100%</Heading>
              <p className="mobie-hiden">Thanh toán an toàn 100%</p>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
