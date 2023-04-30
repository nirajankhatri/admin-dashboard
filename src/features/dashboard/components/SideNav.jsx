import {
  faBoxesStacked,
  faFileAlt,
  faUserAlt,
  faHouse,
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
    <aside className="sidenav hide">
      <div className="sidenav-header" onClick={onNavigateToHome}>
        <span>
          <FontAwesomeIcon icon={faHouse} style={{ color: "#0b2447" }} />
        </span>
        <h3>Admin Panel</h3>
      </div>
      <div className="sidenav-links">
        <div className="sidenav-links-top">
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
            {/* <li>
              <NavLink to="reports">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  style={{ color: "#0b2447" }}
                />
                <span>Reports</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="sidenav-links-bottom">
          {/* <h4>@ nirajan.dev.io </h4> */}
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
