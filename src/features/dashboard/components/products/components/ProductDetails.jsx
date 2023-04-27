import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton from "../../../../../components/BackButton";
import Spinner from "../../../../../components/Spinner";
import { fetchProduct } from "../redux/thunks";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, product, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [id]);

  return (
    <>
      <BackButton redirectTo="/products" />
      {loading ? (
        <Spinner />
      ) : product ? (
        <div className="product-info">
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-meta">
              <span className="product-brand">{product.brand}</span>
              <span className="product-category">{product.category}</span>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-price">
              <span className="product-original-price">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="product-discounted-price">
                  $
                  {Math.round(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  )}
                </span>
              )}
            </div>
            <div className="product-rating">
              <span className="product-rating-stars">
                {[...Array(Math.round(product.rating))].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </span>
              <span className="product-rating-score">{product.rating}</span>
            </div>
            <div className="product-stock">
              <span className="product-in-stock">Stock: {product.stock}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetails;
