import { useActions } from "../../hooks/useActions";
import { IProduct } from "../../utils/types";
import "./ProductCard.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsFillHeartbreakFill } from "react-icons/bs";

const ProductCard = ({
  id,
  title,
  brand,
  description,
  thumbnail,
  isFav,
  price,
  images,
}: IProduct) => {
  const { toggleFev } = useActions();
  return (
    <div className="ProductCard">
      <div className="image">
        <img src={images[0]} alt={title} />
      </div>

      <div className="product">
        <p>{brand}</p>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p className="desc">{description}</p>

        <button className="add" onClick={() => toggleFev(id)}>
          {isFav ? (
            <>
              <BsFillHeartbreakFill />
              Remove Favrite
            </>
          ) : (
            <>
              <AiFillHeart />
              Add to Fev
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
// import "./ProductCard.scss";
// const ProductCard = () => {
//   return (
//     <div classNameName="ProductCard">
//       <img src="" alt="" />
//       <div classNameName="productDetails">
//         <p classNameName="brand">asd</p>
//         <h5 classNameName="title">title</h5>
//         <p classNameName="price">$</p>
//         <p classNameName="desc">asd</p>
//         <button classNameName="btn"></button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
