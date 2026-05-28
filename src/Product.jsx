import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, addProduct } from "./productSlice";
export default function Product() {
  const [product, setProduct] = useState({});
  const products = useSelector((state) => state.product.items);
  const Dispatch = useDispatch();
  return (
    <div>
      Product
      <p>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, id: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button onClick={() => Dispatch(addProduct(product))}>Add</button>
      </p>
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
