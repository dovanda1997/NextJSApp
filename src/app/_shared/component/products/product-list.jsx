"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  background,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductsByCatergory } from "../../services/products.service";

export default async function ProductList({ products }) {
  const [typeOfProducts, setTypeOfProducts] = useState("smartphones");
  const [filterProduct, setFilterProduct] = useState([products]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

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
    <section>
      <Flex>
        <Box w={"35%"} className="categories">
          <Heading className="heading-categories">Categories</Heading>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ bg: "#FFC501" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Công nghệ
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <ul>
                  <li onClick={() => handelFilter("smartphones")}>
                    Điện thoại
                  </li>
                  <li onClick={() => handelFilter("laptops")}>Máy tính</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ bg: "#FFC501" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Sắc đẹp
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li onClick={() => handelFilter("skincare")}>Chăm sóc da</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ bg: "#FFC501" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Đồ dùng Phụ Nữ
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li onClick={() => handelFilter("womens-dresses")}>Váy</li>
                  <li onClick={() => handelFilter("womens-shoes")}>Giày</li>
                  <li onClick={() => handelFilter("womens-watches")}>
                    Đồng hồ
                  </li>
                  <li onClick={() => handelFilter("womens-bags")}>Túi xách</li>
                  <li onClick={() => handelFilter("womens-jewellery")}>
                    Trang sức
                  </li>
                  <li onClick={() => handelFilter("fragrances")}>Nước hoa</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ bg: "#FFC501" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Đồ dùng đàn ông
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li onClick={() => handelFilter("mens-shirts")}>Áo sơ mi</li>
                  <li onClick={() => handelFilter("mens-shoes")}>Giày</li>
                  <li onClick={() => handelFilter("mens-watches")}>Đồng hồ</li>
                  <li onClick={() => handelFilter("sunglasses")}>Kính dâm</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ bg: "#FFC501" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Phương tiện
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li onClick={() => handelFilter("automotive")}>Ô tô</li>
                  <li onClick={() => handelFilter("motorcycle")}>Xe máy</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton _hover={{ bg: "#FFC501" }}>
                  <Box as="span" flex="1" textAlign="left">
                    Vật dụng trong nhà
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li onClick={() => handelFilter("lighting")}>Bóng đèn</li>
                  <li onClick={() => handelFilter("furniture")}>Nội thất</li>
                  <li onClick={() => handelFilter("home-decoration")}>
                    Trang trí nhà cửa
                  </li>
                  <li onClick={() => handelFilter("groceries")}>Tạp hóa</li>
                  <li onClick={() => handelFilter("tops")}>Đỉnh</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <div className="list-products grid-list-product">
            {filterProduct.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="productsList"
              >
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
      </Flex>
    </section>
  );
}
