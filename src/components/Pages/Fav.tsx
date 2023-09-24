import ProductCard from "../ProductCard/ProductCard";
import { useAppSelector } from "../../hooks/reduxHooks";
import "./Pages.scss";

import { useMemo } from "react";
import ProductList from "../ProductList/ProductList";
const Fav = () => {
  let { products } = useAppSelector((state) => state.products);
  const favProducts = useMemo(
    () => products.filter((product) => product.isFav),
    [products]
  );
  return (
    <div className="page container">
      <h1>My Favourite Products</h1>

      <ProductList products={favProducts} />
    </div>
  );
};

export default Fav;
