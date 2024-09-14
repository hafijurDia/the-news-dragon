import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';



const ForgetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        resetPassword(email)
            .then(() => {
                setMessage('Password reset email sent! Check your inbox.');
            })
            .catch((error) => {
                setMessage(error.message); // Handle any errors here
            });
    };
    return (
        <Container className='w-50 mx-auto'>
             <h2 className='mb-4'>Forgot Password</h2>
             {message && <p style={{color:'green'}}>{message}</p>}
            <Form onSubmit={handleResetPassword}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="form-control form-control-lg mb-4"
                />
                <button  type="submit" className="btn btn-primary btn-lg btn-block w-100">Send Reset Email</button>

            </Form>
           
        </Container>
    );
};



export default ForgetPassword;
