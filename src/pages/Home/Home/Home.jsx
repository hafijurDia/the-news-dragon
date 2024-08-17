import React, { useState } from 'react'


export default function Home() {
  const [news, setNews] = useState([]);
  console.log(news);
  return (
    <div>
      <p>This is from home</p>
    </div>
  )
}
