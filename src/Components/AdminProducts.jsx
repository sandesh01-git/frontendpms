import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/category.css";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://dummyjson.com";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
  });
  const [Search, setSearch] = useState(" ");
  console.log(Search);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      setProducts(response.data);
    } catch (error) {}
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/products/add`, newProduct);

      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (productId, updatedProduct) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/products/${productId}`,
        updatedProduct
      );

      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/products/${productId}`);

      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div>
      <Category />

      <h2 className="mb-3">Admin Product</h2>
      <div className="d-flex justify-content-center">
        <div className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div class="text-center ">
        <button
          type="button"
          class="btn btn-success"
          onClick={handleAddProduct}
        >
          Add
        </button>
      </div>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>SN</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.products &&
            products?.products
              .filter((product) => {
                return Search.toLocaleLowerCase() === " "
                  ? product
                  : product.category.toLocaleLowerCase().includes(Search);
              })
              .map((product, i) => (
                <tr key={product.id}>
                  <th>{i + 1}</th>
                  <td>{product.brand}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/dashboard/products/${product.id}`);
                      }}
                    >
                      View
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateProduct(product.id, {
                          ...product,
                          name: "Updated Product",
                        })
                      }
                    >
                      Update
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
