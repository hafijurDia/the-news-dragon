import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import fb from '../../../assets/Facebook.png'
import tw from '../../../assets/Twitter.png'
import ins from '../../../assets/Instagram.png'
import swiming from '../../../assets/qZone1.png'
import classroom from '../../../assets/qZone2.png'
import playground from '../../../assets/qZone3.png'
import '../Rightnav/Rightnav.css'
import { FaGoogle, FaGithub } from "react-icons/fa6";

export default function Rightnav() {
  return (
    <div>
      <div className='mb-5'>
      <p className="fs-5 fw-bold">Login With</p>
      <Button className="btn w-100 border-primary bg-white text-primary mb-2"><FaGoogle /> Login with Google</Button>
      <Button className="btn w-100 border-secondary bg-white text-secondary"><FaGithub /> Login with Github</Button>
      </div>
      <div className='mb-5'>
      <p className="fs-5 fw-bold">Find Us On</p>
      <ListGroup>
      <ListGroup.Item> <img src={fb} alt="" /> Facebook</ListGroup.Item>
      <ListGroup.Item> <img src={tw} alt="" /> Twitter</ListGroup.Item>
      <ListGroup.Item> <img src={ins} alt="" /> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <div className='mb-5 bg-light'>
      <p className="fs-5 fw-bold pt-3 px-3">Q-Zone</p>
      <img className='mb-3 w-100' src={swiming} alt="" /> 
      <img className='mb-3 w-100' src={classroom} alt="" /> 
      <img className='mb-3 w-100' src={playground} alt="" /> 
      
      </div>
      <div className='mb-5 sidebanner text-center px-4 py-5'>
      <h3 className='text-white'>Create an Amazing Newspaper</h3>
      <p className='text-white'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <button className='btn btn-danger'>Learn More</button>
      
      </div>
    </div>
  )
}
