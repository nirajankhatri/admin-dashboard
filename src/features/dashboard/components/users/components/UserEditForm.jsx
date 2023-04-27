import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/thunks";
import { editUser } from "../redux/usersSlice";
import { clearUser } from "../redux/userSlice";

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

  const navigate = useNavigate();

  const { loading, user, error } = useSelector((state) => state.user);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editUser(formValues));
    dispatch(clearUser());
    navigate("/users");
  };

  const onCancelHandler = (e) => {
    e.preventDefault();
    dispatch(clearUser());
    navigate("/users");
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
        <form onSubmit={onSubmitHandler} className="editUserForm">
          <div className="inputControls">
            <div className="inputContainer">
              <label>Id</label>
              <input
                type="text"
                name="id"
                value={formValues.id}
                onChange={onChangeHandler}
                disabled
              />
            </div>
            <div className="inputContainer">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="inputContainer">
              <label>LastName</label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={onChangeHandler}
              />
            </div>
            <div className="inputContainer">
              <label>Gender</label>
              <select
                name="gender"
                value={formValues.gender}
                onChange={onChangeHandler}
              >
                <option value={formValues.gender}>
                  {formValues.gender.toUpperCase()}
                </option>
                <option value={formValues.gender == "male" ? "female" : "male"}>
                  {(formValues.gender == "male"
                    ? "female"
                    : "male"
                  ).toUpperCase()}
                </option>
              </select>
            </div>
            <div className="inputContainer">
              <label>Age</label>
              <input
                type="text"
                name="age"
                value={formValues.age}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="formBtns">
            <button onClick={onCancelHandler}>Cancel</button>
            <button onClick={onSubmitHandler}>Save</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default UserEditForm;
