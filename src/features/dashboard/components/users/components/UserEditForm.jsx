import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/thunks";

const UserEditForm = () => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
  });
  const dispatch = useDispatch();

  const { loading, user, error } = useSelector((state) => state.user);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editPostAction(post));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, [id]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      setFormValues(user);
    }
  }, [user]);

  return (
    <div className="editUserFormContainer">
      {loading ? null : error ? null : formValues ? (
        <form onSubmit={submitHandler} className="editUserForm">
          <div>
            <label>Id</label>
            <input
              type="text"
              name="id"
              value={formValues.id}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Firstname</label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>LastName</label>
            <input
              type="text"
              name="lastname"
              value={formValues.lastName}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={formValues.gender}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={formValues.age}
              onChange={onChangeHandler}
            />
          </div>
          <div className="formBtns">
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default UserEditForm;
