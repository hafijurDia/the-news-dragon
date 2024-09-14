import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import post1 from '../../../assets/1.png';
import moment from 'moment';

export default function Leftnav() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('https://the-news-dragon-server-new.vercel.app/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <div className='mb-5'>
      <p className="fs-5 fw-bold">All Category</p>
      <ul className='p-0'>
        {
          categories.map(category => <li
          key={category.id} className='list-group-item py-2'
          >
            <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
          </li>)
        }
      </ul>
      </div>
      <div className='mb-2'>
        <div>
          <img className='w-100' src={post1} alt="" />
          <p className='fw-medium my-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className='d-flex justify-content-between'>
            <p className='fs-6'><small>Sports</small></p>
            <p className='fs-6'><small>{moment().format("MMM D, YYYY")}</small></p>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div>
          <img className='w-100' src={post1} alt="" />
          <p className='fw-medium my-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className='d-flex justify-content-between'>
          <p className='fs-6'><small>Sports</small></p>
          <p className='fs-6'><small>{moment().format("MMM D, YYYY")}</small></p>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div>
          <img className='w-100' src={post1} alt="" />
          <p className='fw-medium my-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className='d-flex justify-content-between'>
          <p className='fs-6'><small>Sports</small></p>
          <p className='fs-6'><small>{moment().format("MMM D, YYYY")}</small></p>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div>
          <img className='w-100' src={post1} alt="" />
          <p className='fw-medium my-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className='d-flex justify-content-between'>
          <p className='fs-6'><small>Sports</small></p>
          <p className='fs-6'><small>{moment().format("MMM D, YYYY")}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}
