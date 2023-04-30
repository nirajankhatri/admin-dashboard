import React from "react";

const NavToggle = () => {
  const onToggleHandle = (e) => {
    const checked = e.target.checked;
    if (checked) {

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
