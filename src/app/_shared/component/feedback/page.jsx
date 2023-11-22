import { Box, Flex, Heading } from "@chakra-ui/react";

export default async function Feedback() {
  return (
    <div>
      <Flex className="feedback-flex-lap feedback-flex-mob ">
        <Box w={"33%"}>
          <p
            style={{
              color: "#fea700",
            }}
          >
            Lời chứng thực
          </p>
          <Heading>KHÁCH HÀNG CỦA CHÚNG TÔI NÓI GÌ!</Heading>
          <h3
            style={{
              padding: "30px 0",
            }}
          >
            Chúng tôi luôn trân trọng và luôn tạo ra những trải nghiệm mua sắm
            tuyệt vời hãy đến với chúng tôi và trải nghiệm. Chúng tôi không chỉ
            bán hàng chúng tôi tạo nên câu chuyện của chính bạn.
          </h3>
        </Box>
        <Box w={"33%"} bg={"#f7f4f1"} className="feedback-item">
          <Heading className="heading-feedback">
            Mua sắm ở đây rất là thích, nhanh gọn, tiện lợi, giá cả rẻ
          </Heading>
          <p>
            Tôi rất thích mua sắm ở đây, hàng hóa đa dạng nhiều mẫu mã, sản phẩm
            chất lượng mà nhân viên phục vụ rất chu đáo hướng dẫn tỉ mỉ thái độ
            rất tốt rất đáng để mua sắm
          </p>
          <Flex justifyContent={"center"} className="pad-top-lap pad-top-mob">
            <Box className="feedback-avatar"></Box>
          </Flex>
          <Heading className="heading-feedback">Nguyễn Văn Kha</Heading>
        </Box>
        <Box w={"33%"} bg={"#c3eed1"} className="feedback-item">
          <Heading className="heading-feedback">
            Tiết kiệm thời gian, tiết kiệm tiền bạc
          </Heading>
          <p>
            Mua sắm ở đây nhanh thật tôi mới chỉ đưa ra cái sản phẩm mà họ đã
            đoán được thứ tôi cần luôn rồi. Tiết kiệm được bao nhiêu là thời
            gian các ngày dịp lễ có các chương trình khuyễn mãi giá rất rẻ.
          </p>
          <Flex justifyContent={"center"} className="pad-top-lap pad-top-mob">
            <Box className="feedback-avatar"></Box>
          </Flex>
          <Heading className="heading-feedback">Đoàn Văn Thọ</Heading>
        </Box>
      </Flex>
    </div>
  );
}
