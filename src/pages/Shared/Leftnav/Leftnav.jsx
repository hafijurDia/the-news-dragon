import React, { useEffect, useState } from 'react'

export default function Leftnav() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <p>left nav</p>
    </div>
  )
}
