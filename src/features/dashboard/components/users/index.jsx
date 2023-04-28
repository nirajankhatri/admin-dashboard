import {
  faPenToSquare,
  faTrashAlt,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "./redux/usersSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserFilterForm from "./components/UserFilterForm";
import SectionHeader from "../../../../components/SectionHeader";

const UserList = (props) => {
  const { users } = useSelector((state) => state.users);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteUserHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser({ id }));
      toast("User Deleted!!!");
    }
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div className="userListPage">
      <UserFilterForm users={users} setFilteredUsers={setFilteredUsers} />
      <SectionHeader headerTitle="All Users" />
      <div className="userList-grid">
        <div className="userList-col userList-col-th">Id</div>
        <div className="userList-col userList-col-th">firstName</div>
        <div className="userList-col userList-col-th">lastName</div>
        <div className="userList-col userList-col-th">age</div>
        <div className="userList-col userList-col-th">gender</div>
        <div className="userList-col userList-col-th userList-col-btns">
          Actions
        </div>

        {filteredUsers?.map((user) => (
          <React.Fragment key={user.id}>
            <div className="userList-col">{user?.id}</div>
            <div className="userList-col">{user?.firstName}</div>
            <div className="userList-col">{user?.lastName}</div>
            <div className="userList-col">{user?.age}</div>
            <div className="userList-col">{user?.gender}</div>
            <div className="userList-col userList-col-btns">
              <button
                className="btn"
                onClick={() => navigate(`/user/edit/${user?.id}`)}
              >
                <FontAwesomeIcon icon={faPenToSquare} size="xl" />
              </button>
              <button
                className="btn"
                onClick={() => deleteUserHandler(user?.id)}
              >
                <FontAwesomeIcon
                  className="DeleteIcon"
                  icon={faTrashAlt}
                  cursor="pointer"
                  size="xl"
                />
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/user/profile/${user?.id}`)}
              >
                <FontAwesomeIcon
                  className="UserIcon"
                  icon={faUser}
                  cursor="pointer"
                  size="xl"
                />
              </button>
            </div>
          </React.Fragment>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserList;
