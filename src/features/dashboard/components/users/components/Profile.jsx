import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faLocation,
  faLocationArrow,
  faMailForward,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton from "../../../../../components/BackButton";
import Spinner from "../../../../../components/Spinner";
import { fetchUser } from "../redux/thunks";

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
      <BackButton redirectTo="/users" />
      {loading ? (
        <Spinner />
      ) : user ? (
        <div className="user">
          <div className="user-left">
            <img className="user-image" src={user?.image} alt="User" />

            <div className="user-section">
              <div className="user-section-bio">
                <h1 className="user-name">{`${user?.firstName} ${user?.lastName}`}</h1>
                <h2 className="user-title">{user?.company?.title}</h2>
              </div>
              {/* <h3 className="user-section-title">Contact Information</h3> */}
              <p className="user-email">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                {user?.email}
              </p>
              <p className="user-phone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                {user?.phone}
              </p>
              <p className="user-address">
                <span>
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                {`${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state} ${user?.address?.postalCode}`}
              </p>
            </div>
          </div>
          <div className="user-right">
            <div className="user-section">
              <h3 className="user-section-title">Personal Information</h3>
              <div className="user-section-details">
                <p className="user-age">
                  <span>Age:</span>
                  {`${user?.age}`}
                </p>
                <p className="user-height">
                  <span>Height:</span>
                  {`${user?.height} cm`}
                </p>
                <p className="user-weight">
                  <span>Weight:</span>
                  {`${user?.weight} kg`}
                </p>
                <p className="user-hair">
                  <span>Hair Color:</span>
                  {`${user?.hair?.color}`}
                </p>
                <p className="user-eye-color">
                  <span>Eye Color:</span>
                  {`${user?.eyeColor}`}
                </p>
                <p className="user-blood-group">
                  <span>Blood Group:</span>
                  {`${user?.bloodGroup}`}
                </p>
              </div>
            </div>
            <div className="user-section">
              <h3 className="user-section-title">Work Information</h3>
              <div className="user-section-details">
                <p className="user-company-name">
                  <span>Company:</span>
                  {user?.company?.name}
                </p>
                <p className="user-company-department">
                  <span>Department:</span>
                  {user?.company?.department}
                </p>
                <p className="user-company-address">
                  <span>Address:</span>
                  {`${user?.company?.address.address}, ${user?.company?.address.city}, ${user?.company?.address.state} ${user?.company?.address.postalCode}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
