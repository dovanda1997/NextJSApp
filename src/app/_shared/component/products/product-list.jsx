"use client";

import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { getProductsByCatergory } from "../../services/products.service";

export default async function ProductList({ products }) {
  return (
    <section>
      <Flex>
        {/* <Box w={"35%"} backgroundColor={"red.300"}>
          <h2>Catergory</h2>
          <ul>
            <li>SmartPhone</li>
            <li>Laptops</li>
          </ul>
        </Box> */}
        <Box>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
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
