import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartProvider";
import { updateCart } from "../../services/cartServices";

function ProductCard({ product }) {
  const { dispatch, productsInCart } = useCartContext();
  const isProductInCart =
    productsInCart.filter((item) => item.product._id === product._id).length !==
    0;
  const handleAddToCart = async () => {
    const res = await updateCart({
      productId: product._id,
      quantity: 1,
    });

    if (res.data.success) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { product: product, quantity: 1 },
      });
    }
  };

  return (
    <div className="product-card">
      <img src={product.img} alt="product-img" loading="lazy"></img>
      <div className="product-card-options">
        <div className="product-card-details">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        {isProductInCart ? (
          <Link to="/cart">
            <button className="add-to-cart">Go to cart</button>
          </Link>
        ) : (
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
