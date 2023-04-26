import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { fetchUser } from "./components/users/redux/thunks";

const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, [id]);

  return (
    <>
      <Link to="/users" className="backBtn">
        Go Back
      </Link>{" "}
      {loading ? (
        <Spinner />
      ) : user ? (
        <div className="user">
          <img className="user-image" src={user?.image} alt="User" />
          <h1 className="user-name">{`${user?.firstName} ${user?.lastName}`}</h1>
          <h2 className="user-title">{user?.company?.title}</h2>
          <div className="user-details">
            <div className="user-section">
              <h3 className="user-section-title">Contact Information</h3>
              <p className="user-email">{user?.email}</p>
              <p className="user-phone">{user?.phone}</p>
              <p className="user-address">
                {`${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state} ${user?.address?.postalCode}`}
              </p>
            </div>
            <div className="user-section">
              <h3 className="user-section-title">Work Information</h3>
              <p className="user-company-name">{user?.company?.name}</p>
              <p className="user-company-department">
                {user?.company?.department}
              </p>
              <p className="user-company-address">
                {`${user?.company?.address.address}, ${user?.company?.address.city}, ${user?.company?.address.state} ${user?.company?.address.postalCode}`}
              </p>
            </div>
            <div className="user-section">
              <h3 className="user-section-title">Personal Information</h3>
              <p className="user-age">{`Age: ${user?.age}`}</p>
              <p className="user-height">{`Height: ${user?.height} cm`}</p>
              <p className="user-weight">{`Weight: ${user?.weight} kg`}</p>
              <p className="user-hair">{`Hair Color: ${user?.hair?.color}`}</p>
              <p className="user-eye-color">{`Eye Color: ${user?.eyeColor}`}</p>
              <p className="user-blood-group">{`Blood Group: ${user?.bloodGroup}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
