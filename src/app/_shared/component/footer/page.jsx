import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import {
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
} from "react-icons/bi";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="flex-footer">
          <Box className="logoFooter">
            <Image className="logoFox" src="logo.png" />
            <p className="titleLogo-Footer">ShopCart</p>
            <p>Accepted Payments</p>
            <Box>
              <Flex gap={"20px"}>
                <img src="visa.jpg" alt="" />
                <img src="paypal.jpg" alt="" />
                <img src="amazon-pay.jpg" alt="" />
              </Flex>
            </Box>
          </Box>
          <Spacer />
          <Box>
            <Heading className="headingFooter" size="md"  fontFamily={"sans-serif"}>
              Suport
            </Heading>
            <div className="content-footer">
              <p>Trang chủ</p>
              <p>Về chúng tôi</p>
              <p>Sản phẩm</p>
              <p>Liên hệ</p>
              <p>Đăng nhập</p>
            </div>
          </Box>
          <Spacer />
          <Box>
            <Heading  className="headingFooter" size="md"  fontFamily={"sans-serif"}>
              About
            </Heading>
            <div className="content-footer">
              <p>About Us</p>
              <p>Product</p>
              <p>Contact</p>
            </div>
          </Box>
          <Spacer />
          <Box>
            <Heading className="headingFooter" size="md"  fontFamily={"sans-serif"}>
              Contact
            </Heading>
            <p>Hãy để lại cho chúng tôi những thắc mắc của bạn tại đây</p>
            <div className="content-footer">
              <div className="icon-footer">
                <i>
                  <BiLogoFacebookCircle />
                </i>
                <i>
                  <BiLogoGooglePlusCircle />
                </i>
                <i>
                  <BiLogoLinkedinSquare />
                </i>
                <i>
                  <BiLogoTelegram />
                </i>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <hr />
      <div className="footer-top">
        <Box textAlign={"center"} p={"20px 0"}>
          <p>© Copyright 2023 | Powered</p>
        </Box>
      </div>
    </footer>
  );
}
