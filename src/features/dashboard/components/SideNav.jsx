import {
  faBoxesStacked,
  faFileAlt,
  faHouse,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  const onNavigateToHome = () => {
    navigate("/");
  };
  return (
    <aside className="sidenav">
      <div className="sidenav__header" onClick={onNavigateToHome}>
        <h3>Admin Panel</h3>
      </div>
      <div className="sidenav__links">
        <div className="sidenav__links__top">
          <ul>
            {/* <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#0b2447" }} />
                <span>Dashboard</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink to="users">
                <FontAwesomeIcon
                  icon={faUserAlt}
                  style={{ color: "#0b2447" }}
                />
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="products">
                <FontAwesomeIcon
                  icon={faBoxesStacked}
                  style={{ color: "#0b2447" }}
                />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="reports">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  style={{ color: "#0b2447" }}
                />
                <span>Reports</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidenav__links__bottom">
          {/* <h4>@ nirajan.dev.io </h4> */}
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
