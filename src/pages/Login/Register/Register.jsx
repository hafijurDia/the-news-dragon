import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Register/Register.css';
import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accept, setAccept] = useState();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then((result) => {
            // Signed up 
            const createdUser = result.user;
            // ...
            console.log(createdUser);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage)
            console.log(errorCode)
            // ..
          });
    }

    const handlAccept = (event) =>{
      setAccept(event.target.checked);
    }


    return (
        <Container className='w-75 mx-auto'>
    <div className="row g-0 align-items-center my-5 w-100">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right bg-body-tertiary" style={{backdropFilter: 'blur(30px)'}}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Register now</h2>
            <Form onSubmit={handleRegister}>

            <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" name='name' className="form-control" placeholder='Enter your full name'/>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" name='profileImage'  className="form-control" placeholder='Enter your image Url'/>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" name='email' className="form-control" placeholder='Enter your email'/>
              </div>


              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" name='password'  className="form-control" placeholder='Enter your password' />
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" name='confirmPassword' className="form-control" placeholder='Confirm your password' />
              </div>


              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" name='accept' value="" id="form2Example35" onClick={handlAccept} />
                <label className="form-check-label" htmlFor="form2Example35">
                  {<>
                  Accept <Link to="/terms">Terms & Condtions</Link>
                  </>}
                </label>
              </div>

  
              <button type="submit" className="btn btn-primary btn-block mb-4 w-100" disabled={!accept}>
                Register
              </button>
            </Form>
            <div className="text-center">
                <p>or sign up with:</p>
                <button  type="button"  className="btn btn-link btn-floating mx-1">
                <FaGoogle />
                </button>

                <button  type="button" className="btn btn-link btn-floating mx-1">
                <CiFacebook />
                </button>

                <button  type="button" className="btn btn-link btn-floating mx-1">
                <FaXTwitter />
                </button>

                <button  type="button" className="btn btn-link btn-floating mx-1">
                <FaGoogle />
                </button>
              </div>
            <p className="mt-3">Already registered? <Link to='/login'>Login here</Link></p>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
      
    </div>
        </Container>
    );
};



export default Register;
