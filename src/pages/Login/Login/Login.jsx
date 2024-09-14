import React, { useContext, useEffect, useState } from "react";
import {
  Form,
  Link,
  replace,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn, handleGoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  useEffect(() => {
    // Check if user credentials are stored in localStorage or sessionStorage
    const savedEmail =
      localStorage.getItem("email") || sessionStorage.getItem("email");
    const savedPassword =
      localStorage.getItem("password") || sessionStorage.getItem("password");

    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        // Save credentials in localStorage or sessionStorage based on "Remember Me" checkbox
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        } else {
          sessionStorage.setItem("email", email);
        }

        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // login with google
  const handleGoogleLoginBtn = (e) => {
    e.preventDefault();
    handleGoogleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log("Google login successful:", user);
        // Navigate to a different route or show a success message
      })
      .catch((error) => {
        console.log("Google login failed:", error.message);
      });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2>Please Login</h2>
            <p>{error}</p>
            <Form onSubmit={handleLogin}>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  name="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  id="form1Example13"
                  className="form-control form-control-lg"
                  required
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  id="form1Example24"
                  className="form-control form-control-lg"
                  required
                />
                <label className="form-label" htmlFor="form1Example24">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    id="form1Example3"
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <Link to="/forget-password">Forgot password?</Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block w-100"
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                onClick={handleGoogleLoginBtn}
                className="btn btn-primary btn-lg btn-block w-100 mb-3"
                style={{ backgroundColor: "rgb(223 13 13)" }}
              >
                <i className="fab fa-facebook-f me-2"></i>Continue with Google
              </a>
              <a
                className="btn btn-primary btn-lg btn-block w-100"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2"></i>Continue with Twitter
              </a>
            </Form>
            <p className="mt-3">
              I want to register! <Link to="/register">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
