import React, { useState } from "react";

function UserFilterForm({ users, setFilteredUsers }) {
  const [filter, setFilter] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
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

  const filterUsers = () => {
    const { id, firstName, lastName, age, gender } = filter;
    return users.filter((user) => {
      return (
        (id ? user.id == id : true) &&
        (firstName
          ? user.firstName.toLowerCase().includes(firstName.toLowerCase())
          : true) &&
        (age ? user.age == age : true) &&
        (gender ? user.gender.toLowerCase() === gender.toLowerCase() : true) &&
        (lastName ? user.lastName.toString().includes(lastName) : true)
      );
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const filteredUsers = filterUsers();
    console.log(filteredUsers);
    setFilteredUsers(filteredUsers);
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
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={filter.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lasttName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={filter.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={filter.age}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={filter.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="btns">
        <button
          className="btn btn-reset"
          type="reset"
          onClick={() =>
            setFilter({
              id: "",
              firstName: "",
              lastName: "",
              age: "",
              gender: "",
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

export default UserFilterForm;
