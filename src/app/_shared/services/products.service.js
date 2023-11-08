import { notFound } from "next/navigation";

export const getProducts = async ({ limit = 10, page = 1 } = {}) => {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) {
    // Ném ra lỗi, lỗi sẽ được bắt và hiển thị bởi error.js gần nhất
    throw new Error("Failed to fetch data");
  }

  return res.json();
};



export const searchProducts = async ({ limit = 10, page = 1, q }) => {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=${limit}&skip=${skip}`
  );

  return res.json();
};

export const getProductById = async ({ id }) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`)

  return res.json()
}


export const getProductsByCatergory= async(catergory) =>{
  const res = await fetch(`https://dummyjson.com/products/category/${catergory}`)

  return res.json()
}
