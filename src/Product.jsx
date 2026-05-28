import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "./productSlice";
export default function Product() {
  const products = useSelector((state) => state.product.items);
  const Dispatch = useDispatch();
  return (
    <div>
      Product
      {products &&
        products.map((product) => (
          <li>
            {product.name}-
            <button onClick={() => Dispatch(deleteProduct(product.id))}>
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
