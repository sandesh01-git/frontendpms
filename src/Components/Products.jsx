import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://dummyjson.com";

const Products = () => {
  const { id } = useParams();

  const [pdata, setPData] = useState({});

  const fetchproduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      setPData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchproduct();
  }, []);

  console.log(pdata);
  // return <div>
  //   Products {id}
  // </div>;
  return (
    <>
      <h2 className="text-capitalize mt-3">{pdata.category}</h2>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img src={pdata.thumbnail} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h3 className="card-title text-center fw-bolder">{pdata.brand}</h3>
            <h3 className="card-title text-center fw-bolder">{pdata.title}</h3>
            <h4 className="card-title text-center">${pdata.price}</h4>
            <h5 className="card-title  text-center">
              {pdata.stock} pcs on stock
            </h5>
            <p className="card-text">{pdata.description}</p>
            <a href="/dashboard/products" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
