import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Components/Dashboard.css";
import img from "../Components/Images/user.png";
const Dashboard = () => {
  const sidebarStyle = {
    width: "100%",
    height: "100vh",
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <section id="sidedash">
        <div classNameName="row">
          <div classNameName=" ">
            <div classNameName="header">
              <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                style={sidebarStyle}
              >
                <a
                  href="/"
                  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"></use>
                  </svg>
                  <span className="fs-4">Sidebar</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/dashboard/home"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <NavLink
                    to="/dashboard/products"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/dashboard/userLists"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    Users
                  </NavLink>
                </ul>
                <hr />
                <div className="dropdown">
                  <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={img}
                      alt=""
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <strong>user</strong>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                  >
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li> */}
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    {/* <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li> */}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      {/* <a className="dropdown-item" href="#">
                        Sign out
                      </a> */}
                      <Link
                        to="/"
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
