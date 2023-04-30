import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "./redux/productsSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductFilterForm from "./components/ProductFilterForm";
import { faDollyBox } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "../../../../components/SectionHeader";
import Pagination from "../../../../components/Pagination";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // console.log(props.products.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteProduct({ id }));
      toast("Product Deleted!!!");
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="userListPage">
      <ProductFilterForm
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <SectionHeader headerTitle="All Products" />

      <div className="userList-grid">
        <div className="userList-col userList-col-th">id</div>
        <div className="userList-col userList-col-th">category</div>
        <div className="userList-col userList-col-th">brand</div>
        <div className="userList-col userList-col-th">price</div>
        <div className="userList-col userList-col-th">stock</div>
        <div className="userList-col userList-col-th userList-col-btns">
          Actions
        </div>

        {displayedProducts?.map((product) => (
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
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                className="btn"
                onClick={() => deleteProductHandler(product?.id)}
              >
                <FontAwesomeIcon
                  className="DeleteIcon"
                  icon={faTrashAlt}
                  cursor="pointer"
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
                />
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Pagination
        filteredData={filteredProducts}
        setDisplayedData={setDisplayedProducts}
      />
      <ToastContainer />
    </div>
  );
};

export default ProductList;
