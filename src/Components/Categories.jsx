import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://dummyjson.com";

const Categories = () => {
  const ttyle = {
    width: "300px",
    height: "200px",
  };
  const { id } = useParams();
  const [datafetch, setDataFetch] = useState();

  const fetchallcategory = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/category/${id}`);
      setDataFetch(response.data);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchallcategory();
  }, []);

  console.log(datafetch?.products);
  return (
    <>
      {datafetch && (
        <div className="container mt-5 mb-5">
          <h2 className="text-capitalize"> {id}</h2>
          <div className="row mt-5">
            {datafetch.products.map((item, i) => (
              <div className="col-md-3 mx-1 mt-2" key={i}>
                <div className="card">
                  <img
                    src={item.thumbnail}
                    className="card-img-top img-circle "
                    alt="Item Image"
                    style={ttyle}
                  />
                  <div className="card-body mt-2">
                    <h5 className="card-title">{item.brand}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="/dashboard/products" className="btn btn-success">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
