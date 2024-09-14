import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import "../Register/Register.css";
import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const profileImage = form.profileImage.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Password not matched!");
    } else {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);

          // Update user profile with name and profile image
          updateProfile(createdUser, {
            displayName: name,
            photoURL: profileImage,
          })
            .then(() => {
              console.log("User profile updated!");
              // Navigate to dashboard or another page
              navigate("/category/0");
            })
            .catch((error) => {
              console.log("Profile update error:", error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
          setErrorMessage(errorMessage);
        });
    }
  };

  const handlAccept = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <Container className="w-75 mx-auto">
      <div className="row g-0 align-items-center my-5 w-100">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div
            className="card cascading-right bg-body-tertiary"
            style={{ backdropFilter: "blur(30px)" }}
          >
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Register now</h2>
              <p style={{ color: "red" }}>{errorMessage}</p>
              <Form onSubmit={handleRegister}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="profileImage"
                    className="form-control"
                    placeholder="Enter your image URL"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    onClick={handlAccept}
                  />
                  <label className="form-check-label">
                    Accept <Link to="/terms">Terms & Conditions</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 w-100"
                  disabled={!accept}
                >
                  Register
                </button>
              </Form>
              <div className="text-center">
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <FaGoogle />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <CiFacebook />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <FaXTwitter />
                </button>
              </div>
              <p className="mt-3">
                Already registered? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Register;
