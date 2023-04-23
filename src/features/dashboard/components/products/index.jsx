import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./redux/productsSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("deluser");
      dispatch(deleteProduct({ id }));
    }
  };

  return (
    <div className="userList-grid">
      <div className="userList-col userList-col-th">id</div>
      <div className="userList-col userList-col-th">category</div>
      <div className="userList-col userList-col-th">brand</div>
      <div className="userList-col userList-col-th">price</div>
      <div className="userList-col userList-col-th">stock</div>
      <div className="userList-col userList-col-th userList-col-btns">
        Actions
      </div>

      {products?.map((product) => (
        <React.Fragment key={product.id}>
          <div className="userList-col">{product?.id}</div>
          <div className="userList-col">{product?.category}</div>
          <div className="userList-col">{product?.brand}</div>
          <div className="userList-col">{product?.price}</div>
          <div className="userList-col">{product?.stock}</div>
          <div className="userList-col userList-col-btns">
            <button
              className="btn"
              onClick={() => navigate(`/todo/edit/${product?.id}`)}
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
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;
