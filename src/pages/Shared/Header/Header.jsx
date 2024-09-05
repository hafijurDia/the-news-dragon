import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



export default function Header() {
    
    return (
        <>
        <Container className='py-5'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary"><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-light px-3 py-3'>
                <Button variant="danger" className='mr-5 rounded-0'>Latest</Button>
                <Marquee speed={50} pauseOnHover={true} style={{ fontWeight: 'bold' }}>
                    I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>

        </>
    )
}
