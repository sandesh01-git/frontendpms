import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://dummyjson.com";

const Category = () => {
  const [category, setCategory] = useState("");

  const fetchcategory = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      setCategory(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(" error");
    }
  };
  useEffect(() => {
    fetchcategory();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {category &&
                    category?.map((item, i) => {
                      return (
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/dashboard/category/${item}`}
                          >
                            {item}
                          </Link>
                        </li>
                      );
                    })}

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Category;
