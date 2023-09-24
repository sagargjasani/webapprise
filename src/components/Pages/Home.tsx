import { useAppSelector } from "../../hooks/reduxHooks";
import "./Pages.scss";
import ProductList from "../ProductList/ProductList";
import { ImSpinner9 } from "react-icons/im";
const Home = () => {
  let { products } = useAppSelector((state) => state.products);
  return (
    <div className="page container">
      <h1>All Products</h1>
      {products.length === 0 ? (
        <ImSpinner9 />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Home;
