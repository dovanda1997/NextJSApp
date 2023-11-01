
import ProductList from "@/app/_shared/component/products/product-list"
import { searchProducts } from "@/app/_shared/services/products.service"
import Link from "next/link"

export default async function SearchProductsPage({
  searchParams: { page = 1, pageSize = 10, query }
}) {
  const { products, total, limit } = await searchProducts({
    limit: pageSize,
    page: page,
    q: query
  })

  const totalPage = Math.ceil(total / limit)

  return (
    <main>
       
      <ProductList products={products} />

      <div style={{ display: "flex", gap: 5 }}>
        {[...Array(totalPage)].map((_, index) => {
          const pageNumber = index + 1
          const isCurrentPage = page == pageNumber

          const href =
            index === 0 ? "/products" : `/products?page=${pageNumber}`

          if (isCurrentPage) {
            return (
              <button
                key={href}
                style={{
                  background: "white",
                  border: "1px solid #999999"
                }}
              >
                {pageNumber}
              </button>
            )
          }

          return (
            <Link key={href} href={href}>
              <button>{pageNumber}</button>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
