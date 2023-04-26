import {
  faEnvelopeOpen,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "./redux/productsSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductFilterForm from "./components/ProductFilterForm";
import { faDollyBox } from "@fortawesome/free-solid-svg-icons";

const ProductList = (props) => {
  const [products, setProducts] = useState(props.products);
  const [filteredProducts, setFilteredProducts] = useState(props.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteProduct({ id }));
      toast("Product Deleted!!!");
    }
  };

  return (
    <div className="userListPage">
      <ProductFilterForm
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <h1>All Products</h1>

      <div className="userList-grid">
        <div className="userList-col userList-col-th">id</div>
        <div className="userList-col userList-col-th">category</div>
        <div className="userList-col userList-col-th">brand</div>
        <div className="userList-col userList-col-th">price</div>
        <div className="userList-col userList-col-th">stock</div>
        <div className="userList-col userList-col-th userList-col-btns">
          Actions
        </div>

        {filteredProducts?.map((product) => (
          <React.Fragment key={product.id}>
            <div className="userList-col">{product?.id}</div>
            <div className="userList-col">{product?.category}</div>
            <div className="userList-col">{product?.brand}</div>
            <div className="userList-col">{product?.price}</div>
            <div className="userList-col">{product?.stock}</div>
            <div className="userList-col userList-col-btns">
              <button
                className="btn"
                onClick={() => navigate(`/product/edit/${product?.id}`)}
              >
                <FontAwesomeIcon icon={faPenToSquare} size="xl" />
              </button>
              <button
                className="btn"
                onClick={() => deleteProductHandler(product?.id)}
              >
                <FontAwesomeIcon
                  className="DeleteIcon"
                  icon={faTrashAlt}
                  cursor="pointer"
                  size="xl"
                />
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/product/details/${product?.id}`)}
              >
                <FontAwesomeIcon
                  className="ProductIcon"
                  icon={faDollyBox}
                  cursor="pointer"
                  size="xl"
                />
              </button>
            </div>
          </React.Fragment>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ProductList;
