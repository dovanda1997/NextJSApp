import { ProductImageCarousel } from "@/app/_shared/component/products/product-image-carouse";
import { getProductById } from "@/app/_shared/services/products.service";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export const generateMetadata = async ({ params: { id } }) => {
  const product = await getProductById({ id });

  return {
    title: `${product.title} - Trang bán hàng`,
    description: product.description,
  };
};

export default async function ProductDetail({ params: { id } }) {
  const product = await getProductById({ id });

  return (
    <main className="home-Container">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Sản phẩm</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="">Chi tiết sản phẩm</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className="detai-Products">
        <Grid templateColumns={"60% 1fr"} gap={20}>
          <GridItem>
            <ProductImageCarousel images={product.images} />
          </GridItem>
          <GridItem>
            <div>
              <h1>{product.title}</h1>

              <p>{product.description}</p>

              <p>{product.price}</p>
            </div>
          </GridItem>
        </Grid>
      </div>
    </main>
  );
}
