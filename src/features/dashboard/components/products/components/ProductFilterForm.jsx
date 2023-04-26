import React, { useState } from "react";

function ProductFilterForm({ products, setFilteredProducts }) {
  const [filter, setFilter] = useState({
    id: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFilter((prevFilter) => {
      return {
        ...prevFilter,
        [name]: value,
      };
    });
  }

  const filterProducts = () => {
    const { id, category, brand, price, stock } = filter;
    return products.filter((product) => {
      return (
        (id ? product.id == id : true) &&
        (category
          ? product.category.toLowerCase().includes(category.toLowerCase())
          : true) &&
        (brand
          ? product.brand.toLowerCase().includes(brand.toLowerCase())
          : true) &&
        (price ? product.price.toLowerCase() === price.toLowerCase() : true) &&
        (stock ? product.stock.toLowerCase() === stock.toLowerCase() : true)
      );
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const filteredProducts = filterProducts();
    console.log(filteredProducts);
    setFilteredProducts(filteredProducts);
  }

  return (
    <form onSubmit={handleSubmit} className="filterForm">
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={filter.id}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={filter.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={filter.brand}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={filter.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock:</label>
        <input
          type="text"
          id="stock"
          name="stock"
          value={filter.stock}
          onChange={handleChange}
        />
      </div>
      <div className="form-group btns">
        <button
          className="btn btn-reset"
          type="reset"
          onClick={() =>
            setFilter({
              id: "",
              category: "",
              brand: "",
              price: "",
              stock: "",
            })
          }
        >
          Reset
        </button>
        <button className="btn btn-submit" type="submit">
          Filter
        </button>
      </div>
    </form>
  );
}

export default ProductFilterForm;
