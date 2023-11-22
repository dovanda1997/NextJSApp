// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

let storedCartData = null;

if (typeof window !== "undefined") {
  storedCartData = localStorage.getItem("cart");
}

let initialState = {
  items: [],
};

if (storedCartData) {
  const parsedCartData = JSON.parse(storedCartData);
  initialState = {
    items: parsedCartData,
  };
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // action.payload chứa dữ liệu được truyền vào reducer khi dispatch action
      const { product, quantity } = action.payload;

      // Tìm xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      // Nếu sản phẩm đã tồn tại trong giỏ hàng
      if (existingItem) {
        // Tăng số lượng sản phẩm
        existingItem.quantity += quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào mảng items
        state.items.push(action.payload);
      }

      // Lưu giỏ hàng vào localStorage để giữ trạng thái khi làm mới trang
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeToCart: (state, action) => {
      const productIdToRemove = action.payload.productId;
      // action.payload chứa dữ liệu được truyền vào reducer khi dispatch action
      state.items = state.items.filter(
        (item) => item.product.id !== productIdToRemove
      );
      console.log(state.items);

      // Lưu giỏ hàng vào localStorage để giữ trạng thái khi làm mới trang
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateToCar: (state, action) => {
      const { productId, quantity } = action.payload;
      // Tìm xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingItem = state.items.find(
        // tìm kiếm một sản phẩm trong giỏ hàng (state.items)
        // dựa trên productId được cung cấp.
        (item) => item.product.id === productId
      );
      // Nếu sản phẩm đã tồn tại trong giỏ hàng
      if (existingItem) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng,
        // nó cập nhật quantity của sản phẩm đó thành giá trị mới
        //(quantity) được cung cấp.
        existingItem.quantity = quantity;
      }
      // Lưu giỏ hàng vào localStorage để giữ trạng thái khi làm mới trang
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeAll: (state) => {
      // hàm rỗng
      state.items = [];

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const totalQuantity = (state) => {
  let totalQuantity = 0;
  for (const item of state.items) {
    totalQuantity += item.quantity;
  }
  return totalQuantity;
};

export const { addToCart, removeToCart, removeAll, updateToCar } =
  cartSlice.actions;
export default cartSlice.reducer;
