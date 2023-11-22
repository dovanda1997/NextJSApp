import ProductList from "@/app/_shared/component/products/product-list";
import SearchForm from "@/app/_shared/component/search-form/search-form";
import {
  getProducts,
  getProductsByCatergory,
} from "@/app/_shared/services/products.service";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

export default async function ProductListPage({
  searchParams: { page = 1, pageSize = 12 },
}) {
  const { products, total, limit } = await getProducts({
    limit: pageSize,
    page: page,
  });

  const totalPage = Math.ceil(total / limit);

  return (
    <main className="container-ListPage">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Sản phẩm</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <Flex justifyContent={"end"} mt={"20px"}>
        <SearchForm />
      </Flex>
      <section className="main-productListpage">
        <ProductList products={products} />
        <Flex gap={"5px"} justifyContent={"center"} padding={"50px 0px"}>
          {[...Array(totalPage)].map((_, index) => {
            const pageNumber = index + 1;
            const isCurrentPage = page == pageNumber;

            const href =
              index === 0 ? "/products" : `/products?page=${pageNumber}`;

            if (isCurrentPage) {
              return (
                <Button
                  key={href}
                  style={{
                    background: "white",
                    border: "1px solid #999999",
                  }}
                >
                  {pageNumber}
                </Button>
              );
            }

            return (
              <Button as={Link} key={href} href={href}>
                {pageNumber}
              </Button>
            );
          })}
        </Flex>
      </section>
    </main>
  );
}
