import React from "react";
import { IProduct } from "../../utils/types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
import { TbMoodEmpty } from "react-icons/tb";
interface IState {
  products: IProduct[];
}
const ProductList = ({ products }: IState) => {
  if (products.length === 0)
    return (
      <div className="empty">
        <div>
          <TbMoodEmpty />
          <h2>Nothing here</h2>
        </div>
      </div>
    );
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
