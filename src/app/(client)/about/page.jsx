import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
} from "@chakra-ui/react";

export default async function About() {
  return (
    <section className="container-about">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Về chúng tôi</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className="content-about">
        <div className="content-about-1">
          <div className="flexAbout">
            <Box className="flexAbout-content">
              <p className="heading-about">Tại sao lại là chúng tôi</p>
              <p className="content-heading">
                {" "}
                &nbsp;Trong những năm gần đây, nền kinh tế đang ngày càng tăng
                trưởng nhanh. Cùng với sự tăng trưởng này ngành mua sắm trực
                tuyến ngày càng phát triểm. Đi theo đó nhu cầu đòi hỏi mua sắm
                của người mua ngày càng cao họ phải có niềm tin vào hãng hay các
                thương hiệu nổi tiếng mới được sự ưu ái của người mua. <br />
                &nbsp;Nắm được những nhu cầu của người mua hàng chúng tôi tạo sự
                kết nối cảm xúc giữa người mua hàng với thương hiệu của chúng
                tôi.Chúng tôi luôn lắng nghe những ý kiến những phản hồi để đưa
                đến những sản phẩm chất lượng với giá cả hợp lý, nhằm mục đích
                tạo dựng niềm tin thương hiệu với người mua hàng. Điều quan
                trọng nhất với chúng tôi là sự hài lòng về trải nghiệm dịch vụ
                của chúng tôi, các sản phẩm đang tin cậy và sự phù hợp giữa giá
                trị cá nhân và giá trị thương hiệu.Việc người mua hàng có cảm
                nhận rằng giá trị thương hiệu của bạn phù hợp với của họ là rất
                quan trọng vì, bên cạnh niềm tin, việc có chung các giá trị có
                thể là yếu tố then chốt trong quyết định mua sắm của họ.
              </p>
            </Box>
            <Box className="flexAbout-image">
              <div className="img-about">
                <Image src="Rectangle 29.jpg" />
              </div>
            </Box>
          </div>
        </div>
        <div className="content-about-2">
          <div className="flexAbout flex-reverse">
            <Box className="about-img flexAbout2-image">
              <div className="img-about1">
                <Image src="Rectangle 31.jpg" />
              </div>
              <div className="img-about2">
                <Image src="Rectangle 30.jpg" />
              </div>
            </Box>
            <Box className="flexAbout-content">
              <p className="heading-about">Giá trị của chúng tôi</p>
              <p className="content-heading">
                <p>
                  <span>Niềm vui:</span> Chúng tôi luôn tạo ra những hoạt động
                  hay những chương trình tương tác cùng người mua nhằm tạo nên
                  một quá trình mua sắm đầy cảm xúc và tạo cho người mua một cảm
                  giác thoải mái
                </p>
                <p>
                  <span>Sản phẩm:</span> Sản phẩm của chúng tôi luôn luôn được
                  cập nhập thường xuyên và luôn đi đầu về chất lượng được kiểm
                  duyệt chặt chẽ và đảm bảo an toàn
                </p>
                <p>
                  <span>Hỗ trợ và trao đổi:</span> Để tạo dựng được niềm tin với
                  thương hiệu thì không thể thiếu được đội ngũ hỗ trợ khách hàng
                  và hỏi han về sản phẩm thường xuyên giúp tạo cảm giác thân
                  thiết hơn với khách
                </p>
                <p>
                  <span>Thời gian:</span> Người mua hàng là những người bận rộn
                  và phải đưa ra nhiều quyết định mua hàng, vì vậy chúng tôi
                  luôn đưa ra nhanh chóng những nhu cầu khách cần để tiết kiệm
                  thời gian và duy trì niềm tin thương hiệu, cung cấp trải
                  nghiệm tích cực làm tăng giá trị cho cuộc sống của họ.
                </p>
                <p>
                  <span>Tâm lý:</span> Chúng tôi có đội ngũ nghiên cứu nhu cầu
                  khách và tâm lý khi khách mua hàng và lựa chọn thương
                  hiệu.Chính vì vậy chúng tôi luôn đưa ra nhưng sản phẩm những ý
                  tưởng phương pháp để phù hợp với nhu cầu tâm lý mua hàng của
                  người mua.
                </p>
              </p>
            </Box>
            <Box className="mobieImage">
              <Image src="Rectangle 32.jpg" />
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
