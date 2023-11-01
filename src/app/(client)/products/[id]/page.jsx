
import { ProductImageCarousel } from "@/app/_shared/component/products/product-image-carouse"
import { getProductById } from "@/app/_shared/services/products.service"
import { Grid } from "@chakra-ui/react"

export const generateMetadata = async ({ params: { id } }) => {
  const product = await getProductById({ id })

  return {
    title: `${product.title} - Trang bán hàng`,
    description: product.description
  }
}

export default async function ProductDetail({ params: { id } }) {
  const product = await getProductById({ id })


  return (
    <main>
      <Grid templateColumns={"1fr 1fr"} gap={20}>
        <ProductImageCarousel images={product.images} />

        <div>
          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <p>{product.price}</p>
        </div>
      </Grid>
    </main>
  )
}
