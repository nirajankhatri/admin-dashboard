import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/thunks";
import { clearProduct } from "../redux/productSlice";
import { editProduct } from "../redux/productsSlice";

const ProductEditForm = () => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    id: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, product, error } = useSelector((state) => state.product);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editProduct(formValues));
    dispatch(clearProduct());
    navigate("/products");
  };

  const onCancelHandler = () => {
    dispatch(clearProduct());
    navigate("/products");
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [id]);

  useEffect(() => {
    if (product && Object.keys(product).length !== 0) {
      setFormValues(product);
    }
  }, [product]);

  return (
    <div className="editUserFormContainer">
      {loading ? null : error ? null : formValues ? (
        <form onSubmit={onSubmitHandler} className="editUserForm">
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formValues.title}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formValues.category}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formValues.brand}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formValues.price}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Stock</label>
            <input
              type="text"
              name="stock"
              value={formValues.stock}
              onChange={onChangeHandler}
            />
          </div>
          <div className="formBtns">
            <button onClick={onCancelHandler}>Cancel</button>
            <button onClick={onSubmitHandler}>Save</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default ProductEditForm;
