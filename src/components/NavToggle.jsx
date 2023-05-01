import React from "react";

const NavToggle = () => {
  const onToggleHandle = (e) => {
    const checked = e.target.checked;
    if (checked) {
      document
        .getElementsByClassName("sidenav")[0]
        .classList.replace("hide", "show");
      document
        .getElementsByClassName("dashboard__main")[0]
        .classList.add("fitAvailable");
    } else {
      document
        .getElementsByClassName("sidenav")[0]
        .classList.replace("show", "hide");
      document
        .getElementsByClassName("dashboard__main")[0]
        .classList.remove("fitAvailable");
    }
  };
  return (
    <div className="menu__toggle-container">
      <input id="menu__toggle" type="checkbox" onChange={onToggleHandle} />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
    </div>
  );
};

export default NavToggle;
